import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { MBTI_TYPES } from './data/mbti-types.js';

interface MBTIDetail {
  type: string;
  name: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careers: string[];
  dimensions: {
    EI: { E: number; I: number };
    SN: { S: number; N: number };
    TF: { T: number; F: number };
    JP: { J: number; P: number };
  };
}

interface ScoredResultData {
  correctCount: number;
  totalQuestions: number;
  percentage: number;
  grade: string;
}

interface ScaleResultData {
  scaleScore: number;
  scaleMax: number;
  totalQuestions: number;
  percentage: number;
  level: string;
}

@Injectable()
export class ResultsService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Generate mã random 5 ký tự (chữ hoa + số).
   */
  private generateCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // bỏ O,0,I,1 tránh nhầm
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  }

  /**
   * Lấy kết quả quiz theo resultId.
   * Nếu chưa unlock → trả locked response + mã random để user nhập.
   * Nếu đã unlock → trả full result.
   * KHÔNG bao giờ trả về answersData (anti-cheat).
   */
  async getResult(resultId: string) {
    // Step 1: Query database
    const userResult = await this.prisma.userResult.findUnique({
      where: { id: resultId },
      include: {
        quiz: {
          select: {
            title: true,
            slug: true,
            quizType: true,
            totalQuestions: true,
          },
        },
      },
    });

    // Step 2: Validate existence
    if (!userResult) {
      throw new NotFoundException('Không tìm thấy kết quả');
    }

    // Step 3: If not unlocked, return locked response with random code
    if (!userResult.isUnlocked) {
      const unlockCode = this.generateCode();
      return {
        isLocked: true,
        quizTitle: userResult.quiz.title,
        quizType: userResult.quiz.quizType,
        quizSlug: userResult.quiz.slug,
        completedAt: userResult.completedAt.toISOString(),
        timeSpentSecs: userResult.timeSpentSecs ?? 0,
        unlockCode, // mã random hiện ở góc màn hình cho user nhập
      };
    }

    // Step 4: Build full result based on quiz type
    const scoreData = (userResult.scoreData as Record<string, number>) ?? {};

    let result: Record<string, unknown>;

    switch (userResult.quiz.quizType) {
      case 'MBTI':
        result = {
          resultType: userResult.resultType ?? 'Unknown',
          scoreData,
          timeSpentSecs: userResult.timeSpentSecs ?? 0,
          completedAt: userResult.completedAt.toISOString(),
          mbtiDetail: this.buildMBTIDetail(
            userResult.resultType ?? '',
            scoreData,
          ),
        };
        break;

      case 'SCORED': {
        const isScale = scoreData.isScale === 1;
        if (isScale) {
          // Psychology scale (test tâm lý)
          result = {
            resultType: userResult.resultType ?? '0',
            scoreData,
            timeSpentSecs: userResult.timeSpentSecs ?? 0,
            completedAt: userResult.completedAt.toISOString(),
            scaleDetail: this.buildScaleResult(scoreData),
          };
        } else {
          // Standard test (trắc nghiệm đúng/sai)
          result = {
            resultType: userResult.resultType ?? '0',
            scoreData,
            timeSpentSecs: userResult.timeSpentSecs ?? 0,
            completedAt: userResult.completedAt.toISOString(),
            scoredDetail: this.buildScoredResult(
              scoreData,
              userResult.quiz.totalQuestions,
            ),
          };
        }
        break;
      }

      case 'PERSONALITY':
      default:
        result = {
          resultType: userResult.resultType ?? 'Unknown',
          scoreData,
          timeSpentSecs: userResult.timeSpentSecs ?? 0,
          completedAt: userResult.completedAt.toISOString(),
        };
        break;
    }

    return {
      isLocked: false,
      quizTitle: userResult.quiz.title,
      quizType: userResult.quiz.quizType,
      quizSlug: userResult.quiz.slug,
      result,
    };
  }

  /**
   * Unlock kết quả: verify mã và set isUnlocked = true.
   */
  async unlockResult(resultId: string, code: string, expectedCode: string) {
    const userResult = await this.prisma.userResult.findUnique({
      where: { id: resultId },
    });

    if (!userResult) {
      throw new NotFoundException('Không tìm thấy kết quả');
    }

    // Already unlocked
    if (userResult.isUnlocked) {
      return this.getResult(resultId);
    }

    // Verify code (case-insensitive)
    if (code.trim().toUpperCase() !== expectedCode.trim().toUpperCase()) {
      return { success: false, message: 'Mã không đúng. Vui lòng thử lại.' };
    }

    // Unlock
    await this.prisma.userResult.update({
      where: { id: resultId },
      data: { isUnlocked: true },
    });

    // Return full result
    const fullResult = await this.getResult(resultId);
    return { success: true, ...fullResult };
  }

  /**
   * Build chi tiết MBTI từ resultType và scoreData.
   * Lookup MBTI_TYPES map, fallback "Không xác định" cho unknown type.
   */
  buildMBTIDetail(
    resultType: string,
    scoreData: Record<string, number>,
  ): MBTIDetail {
    // Step 1: Lookup type info from static map
    const typeInfo = MBTI_TYPES[resultType] ?? {
      type: resultType,
      name: 'Không xác định',
      description: 'Không có thông tin chi tiết cho loại tính cách này.',
      strengths: [],
      weaknesses: [],
      careers: [],
    };

    // Step 2: Build dimensions from scoreData
    const dimensions = {
      EI: { E: scoreData.E ?? 0, I: scoreData.I ?? 0 },
      SN: { S: scoreData.S ?? 0, N: scoreData.N ?? 0 },
      TF: { T: scoreData.T ?? 0, F: scoreData.F ?? 0 },
      JP: { J: scoreData.J ?? 0, P: scoreData.P ?? 0 },
    };

    // Step 3: Combine and return
    return {
      type: resultType,
      name: typeInfo.name,
      description: typeInfo.description,
      strengths: typeInfo.strengths,
      weaknesses: typeInfo.weaknesses,
      careers: typeInfo.careers,
      dimensions,
    };
  }

  /**
   * Build kết quả cho SCORED quiz.
   * Tính correctCount, percentage (Math.round), grade mapping.
   */
  buildScoredResult(
    scoreData: Record<string, number>,
    totalQuestions: number,
  ): ScoredResultData {
    const correctCount = scoreData.correct ?? 0;
    const percentage =
      totalQuestions > 0
        ? Math.round((correctCount / totalQuestions) * 100)
        : 0;

    let grade: string;
    if (percentage >= 90) grade = 'Xuất sắc';
    else if (percentage >= 80) grade = 'Giỏi';
    else if (percentage >= 65) grade = 'Khá';
    else if (percentage >= 50) grade = 'Trung bình';
    else grade = 'Yếu';

    return { correctCount, totalQuestions, percentage, grade };
  }

  /**
   * Build kết quả cho bài test tâm lý (thang đo).
   * scaleScore = số câu chọn đáp án tốt nhất, scaleMax = tổng số câu.
   */
  buildScaleResult(scoreData: Record<string, number>): ScaleResultData {
    const scaleScore = scoreData.scaleScore ?? 0;
    const scaleMax = scoreData.scaleMax ?? 1;
    const totalQuestions = scoreData.total ?? 0;
    const percentage = scaleMax > 0 ? Math.round((scaleScore / scaleMax) * 100) : 0;

    // Mức độ dựa trên phần trăm đáp án tốt nhất được chọn
    let level: string;
    if (percentage >= 80) level = 'Rất tốt';
    else if (percentage >= 60) level = 'Tốt';
    else if (percentage >= 40) level = 'Trung bình';
    else if (percentage >= 20) level = 'Cần cải thiện';
    else level = 'Cần hỗ trợ';

    return { scaleScore, scaleMax, totalQuestions, percentage, level };
  }
}
