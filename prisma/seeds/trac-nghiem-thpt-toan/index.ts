import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // ===================== ĐỀ SỐ 1: Hàm số và đồ thị =====================
  {
    categorySlug: 'trac-nghiem-thpt-toan',
    title: 'Đề trắc nghiệm Toán 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-toan-de-1',
    description:
      'Đề trắc nghiệm Toán 12 chủ đề Hàm số và đồ thị: tập xác định, cực trị, tiệm cận, đồng biến/nghịch biến, GTLN/GTNN.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Tập xác định của hàm số y = √(x² − 4) là:',
        answers: [
          { content: '(-∞; -2] ∪ [2; +∞)', isCorrect: true },
          { content: '[-2; 2]', isCorrect: false },
          { content: '(-2; 2)', isCorrect: false },
          { content: 'ℝ \\ {-2; 2}', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = x³ − 3x² + 2 có bao nhiêu điểm cực trị?',
        answers: [
          { content: '2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '3', isCorrect: false },
        ],
      },
      {
        content:
          'Đường tiệm cận ngang của đồ thị hàm số y = (2x − 1)/(x + 3) là:',
        answers: [
          { content: 'y = 2', isCorrect: true },
          { content: 'y = -3', isCorrect: false },
          { content: 'y = -1/3', isCorrect: false },
          { content: 'y = 1/2', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = -x⁴ + 2x² − 1 đạt giá trị lớn nhất bằng:',
        answers: [
          { content: '0', isCorrect: true },
          { content: '-1', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = x³ − 3x + 2 đồng biến trên khoảng nào?',
        answers: [
          { content: '(-∞; -1) và (1; +∞)', isCorrect: true },
          { content: '(-1; 1)', isCorrect: false },
          { content: '(0; +∞)', isCorrect: false },
          { content: '(-∞; 0)', isCorrect: false },
        ],
      },
      {
        content:
          'Đường tiệm cận đứng của đồ thị hàm số y = (x + 1)/(x − 2) là:',
        answers: [
          { content: 'x = 2', isCorrect: true },
          { content: 'x = -1', isCorrect: false },
          { content: 'x = 1', isCorrect: false },
          { content: 'x = -2', isCorrect: false },
        ],
      },
      {
        content:
          'Giá trị cực đại của hàm số y = x³ − 3x là:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '-2', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '3', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = (x² − 1)/(x² + 1) có bao nhiêu đường tiệm cận?',
        answers: [
          { content: '1', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hàm số y = x⁴ − 2x² + 3. Giá trị nhỏ nhất của hàm số là:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = (2x + 1)/(x − 1) nghịch biến trên khoảng nào?',
        answers: [
          { content: '(-∞; 1) và (1; +∞)', isCorrect: true },
          { content: '(-∞; +∞)', isCorrect: false },
          { content: '(1; +∞)', isCorrect: false },
          { content: '(-∞; 1)', isCorrect: false },
        ],
      },
      {
        content:
          'Đồ thị hàm số y = x³ − 3x² + 4 cắt trục hoành tại bao nhiêu điểm?',
        answers: [
          { content: '2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '3', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = |x² − 4x + 3| có bao nhiêu điểm cực trị?',
        answers: [
          { content: '3', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hàm số y = (x − 1)/(x + 2). Tập giá trị của hàm số là:',
        answers: [
          { content: 'ℝ \\ {1}', isCorrect: true },
          { content: 'ℝ', isCorrect: false },
          { content: 'ℝ \\ {-2}', isCorrect: false },
          { content: '(-∞; 1)', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = x⁴ − 4x² + 5 có bao nhiêu điểm cực tiểu?',
        answers: [
          { content: '2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '3', isCorrect: false },
        ],
      },
      {
        content:
          'Giá trị lớn nhất của hàm số y = x/(x² + 1) là:',
        answers: [
          { content: '1/2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '1/4', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content:
          'Đồ thị hàm số y = (x² + x − 2)/(x − 1) có đường tiệm cận xiên là:',
        answers: [
          { content: 'y = x + 2', isCorrect: true },
          { content: 'y = x + 1', isCorrect: false },
          { content: 'y = x − 1', isCorrect: false },
          { content: 'y = x − 2', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = 2x³ + 3x² − 12x + 1 đạt cực tiểu tại x bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '-2', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '-1', isCorrect: false },
        ],
      },
      {
        content:
          'Số giao điểm của đồ thị hàm số y = x³ − 3x và đường thẳng y = 0 là:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = x + 1/x có giá trị nhỏ nhất trên (0; +∞) bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hàm số y = -x³ + 3x − 2. Giá trị cực đại của hàm số là:',
        answers: [
          { content: '0', isCorrect: true },
          { content: '-4', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '-2', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = (3x − 2)/(x + 1) có đồ thị nhận điểm nào làm tâm đối xứng?',
        answers: [
          { content: '(-1; 3)', isCorrect: true },
          { content: '(1; 3)', isCorrect: false },
          { content: '(-1; -3)', isCorrect: false },
          { content: '(0; -2)', isCorrect: false },
        ],
      },
      {
        content:
          'Hàm số y = x⁴ − 8x² + 16 có bao nhiêu điểm cực trị?',
        answers: [
          { content: '3', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content:
          'Tập xác định của hàm số y = ln(x² − 3x + 2) là:',
        answers: [
          { content: '(-∞; 1) ∪ (2; +∞)', isCorrect: true },
          { content: '[1; 2]', isCorrect: false },
          { content: '(1; 2)', isCorrect: false },
          { content: 'ℝ \\ {1; 2}', isCorrect: false },
        ],
      },
      {
        content:
          'Giá trị lớn nhất của hàm số y = 3x − x³ trên đoạn [-2; 2] là:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '-2', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content:
          'Đồ thị hàm số y = (x² − 4)/(x − 2) là:',
        answers: [
          { content: 'Đường thẳng y = x + 2 bỏ đi điểm (2; 4)', isCorrect: true },
          { content: 'Đường thẳng y = x + 2', isCorrect: false },
          { content: 'Parabol y = x² − 4', isCorrect: false },
          { content: 'Đường thẳng y = x − 2', isCorrect: false },
        ],
      },
    ],
  },
  // ===================== ĐỀ SỐ 2: Mũ và Logarit =====================
  {
    categorySlug: 'trac-nghiem-thpt-toan',
    title: 'Đề trắc nghiệm Toán 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-toan-de-2',
    description:
      'Đề trắc nghiệm Toán 12 chủ đề Mũ và Logarit: phương trình mũ, phương trình logarit, bất phương trình, tính chất.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Giá trị của log₂(8) bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '4', isCorrect: false },
          { content: '8', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình 2ˣ = 16 là:',
        answers: [
          { content: 'x = 4', isCorrect: true },
          { content: 'x = 8', isCorrect: false },
          { content: 'x = 3', isCorrect: false },
          { content: 'x = 2', isCorrect: false },
        ],
      },
      {
        content: 'Cho log₃(x) = 4. Giá trị của x là:',
        answers: [
          { content: '81', isCorrect: true },
          { content: '12', isCorrect: false },
          { content: '64', isCorrect: false },
          { content: '27', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của ln(e⁵) bằng:',
        answers: [
          { content: '5', isCorrect: true },
          { content: 'e⁵', isCorrect: false },
          { content: '1/5', isCorrect: false },
          { content: '5e', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình 3²ˣ⁻¹ = 27 là:',
        answers: [
          { content: 'x = 2', isCorrect: true },
          { content: 'x = 3', isCorrect: false },
          { content: 'x = 1', isCorrect: false },
          { content: 'x = 4', isCorrect: false },
        ],
      },
      {
        content: 'log₅(25) + log₅(1/5) bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '3', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình 2ˣ > 8 là:',
        answers: [
          { content: '(3; +∞)', isCorrect: true },
          { content: '(-∞; 3)', isCorrect: false },
          { content: '[3; +∞)', isCorrect: false },
          { content: '(8; +∞)', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của log₄(2) bằng:',
        answers: [
          { content: '1/2', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '1/4', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình log₂(x − 1) = 3 là:',
        answers: [
          { content: 'x = 9', isCorrect: true },
          { content: 'x = 8', isCorrect: false },
          { content: 'x = 4', isCorrect: false },
          { content: 'x = 7', isCorrect: false },
        ],
      },
      {
        content: 'Cho a > 0, a ≠ 1. Biểu thức logₐ(a³) bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: 'a³', isCorrect: false },
          { content: '3a', isCorrect: false },
          { content: '1/3', isCorrect: false },
        ],
      },
      {
        content: 'Tập xác định của hàm số y = log₃(2x − 6) là:',
        answers: [
          { content: '(3; +∞)', isCorrect: true },
          { content: '[3; +∞)', isCorrect: false },
          { content: '(6; +∞)', isCorrect: false },
          { content: '(-∞; 3)', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của 5^(log₅ 7) bằng:',
        answers: [
          { content: '7', isCorrect: true },
          { content: '5', isCorrect: false },
          { content: '35', isCorrect: false },
          { content: 'log₅(7)', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình 4ˣ − 3·2ˣ − 4 = 0 là:',
        answers: [
          { content: 'x = 2', isCorrect: true },
          { content: 'x = 1', isCorrect: false },
          { content: 'x = -1', isCorrect: false },
          { content: 'x = 3', isCorrect: false },
        ],
      },
      {
        content: 'log₂(x) + log₂(x − 2) = 3. Giá trị x thỏa mãn là:',
        answers: [
          { content: 'x = 4', isCorrect: true },
          { content: 'x = 8', isCorrect: false },
          { content: 'x = 2', isCorrect: false },
          { content: 'x = 6', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình log₃(x) ≤ 2 là:',
        answers: [
          { content: '(0; 9]', isCorrect: true },
          { content: '(-∞; 9]', isCorrect: false },
          { content: '[0; 9]', isCorrect: false },
          { content: '(0; 9)', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của log₆(2) + log₆(3) bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: 'log₆(5)', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình 9ˣ − 4·3ˣ + 3 = 0 là:',
        answers: [
          { content: 'x = 0 hoặc x = 1', isCorrect: true },
          { content: 'x = 1 hoặc x = 2', isCorrect: false },
          { content: 'x = 0', isCorrect: false },
          { content: 'x = 3', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = (1/2)ˣ là hàm số:',
        answers: [
          { content: 'Nghịch biến trên ℝ', isCorrect: true },
          { content: 'Đồng biến trên ℝ', isCorrect: false },
          { content: 'Đồng biến trên (0; +∞)', isCorrect: false },
          { content: 'Nghịch biến trên (0; +∞)', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của log₂(32) − log₂(4) bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '5', isCorrect: false },
          { content: '8', isCorrect: false },
          { content: '28', isCorrect: false },
        ],
      },
      {
        content: 'Cho log₂(a) = 3, log₂(b) = 5. Giá trị log₂(a²b) bằng:',
        answers: [
          { content: '11', isCorrect: true },
          { content: '8', isCorrect: false },
          { content: '15', isCorrect: false },
          { content: '16', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình e²ˣ − 5eˣ + 6 = 0 là:',
        answers: [
          { content: 'x = ln2 hoặc x = ln3', isCorrect: true },
          { content: 'x = 2 hoặc x = 3', isCorrect: false },
          { content: 'x = ln5 hoặc x = ln6', isCorrect: false },
          { content: 'x = 1 hoặc x = ln6', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình log₁/₂(x) > -3 là:',
        answers: [
          { content: '(0; 8)', isCorrect: true },
          { content: '(8; +∞)', isCorrect: false },
          { content: '(-3; +∞)', isCorrect: false },
          { content: '(0; 3)', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = eˣ·ln(x) tại x = 1 bằng:',
        answers: [
          { content: 'e', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '2e', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của biểu thức log₃(81) · log₂(8) bằng:',
        answers: [
          { content: '12', isCorrect: true },
          { content: '7', isCorrect: false },
          { content: '24', isCorrect: false },
          { content: '9', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình log₂(x² − 3x + 2) = 1 có tổng các nghiệm bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '5', isCorrect: false },
        ],
      },
    ],
  },
  // ===================== ĐỀ SỐ 3: Nguyên hàm, Tích phân và Ứng dụng =====================
  {
    categorySlug: 'trac-nghiem-thpt-toan',
    title: 'Đề trắc nghiệm Toán 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-toan-de-3',
    description:
      'Đề trắc nghiệm Toán 12 chủ đề Nguyên hàm, Tích phân và Ứng dụng: nguyên hàm cơ bản, tích phân xác định, diện tích, thể tích.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Nguyên hàm của hàm số f(x) = 3x² là:',
        answers: [
          { content: 'x³ + C', isCorrect: true },
          { content: '6x + C', isCorrect: false },
          { content: 'x³', isCorrect: false },
          { content: '3x³ + C', isCorrect: false },
        ],
      },
      {
        content: '∫₀¹ 2x dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '1/2', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = 1/x (x > 0) là:',
        answers: [
          { content: 'ln|x| + C', isCorrect: true },
          { content: '-1/x² + C', isCorrect: false },
          { content: 'ln(x²) + C', isCorrect: false },
          { content: '1/x² + C', isCorrect: false },
        ],
      },
      {
        content: '∫₀^π sin(x) dx bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '-1', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = eˣ là:',
        answers: [
          { content: 'eˣ + C', isCorrect: true },
          { content: 'xeˣ + C', isCorrect: false },
          { content: 'eˣ⁺¹/(x+1) + C', isCorrect: false },
          { content: 'eˣ/x + C', isCorrect: false },
        ],
      },
      {
        content: '∫₁² (1/x²) dx bằng:',
        answers: [
          { content: '1/2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '-1/2', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = x², trục Ox và x = 0, x = 1 bằng:',
        answers: [
          { content: '1/3', isCorrect: true },
          { content: '1/2', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '2/3', isCorrect: false },
        ],
      },
      {
        content: '∫₀¹ eˣ dx bằng:',
        answers: [
          { content: 'e − 1', isCorrect: true },
          { content: 'e', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'e + 1', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = cos(x) là:',
        answers: [
          { content: 'sin(x) + C', isCorrect: true },
          { content: '-sin(x) + C', isCorrect: false },
          { content: 'cos(x) + C', isCorrect: false },
          { content: '-cos(x) + C', isCorrect: false },
        ],
      },
      {
        content: '∫₀^(π/2) cos(x) dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '-1', isCorrect: false },
          { content: 'π/2', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = x và y = x² là:',
        answers: [
          { content: '1/6', isCorrect: true },
          { content: '1/3', isCorrect: false },
          { content: '1/2', isCorrect: false },
          { content: '1/4', isCorrect: false },
        ],
      },
      {
        content: '∫₀¹ x·eˣ dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: 'e − 1', isCorrect: false },
          { content: 'e', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = 1/(2x + 1) là:',
        answers: [
          { content: '(1/2)·ln|2x + 1| + C', isCorrect: true },
          { content: 'ln|2x + 1| + C', isCorrect: false },
          { content: '2·ln|2x + 1| + C', isCorrect: false },
          { content: '-1/(2x + 1)² + C', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích vật thể tròn xoay khi quay y = x (0 ≤ x ≤ 1) quanh Ox bằng:',
        answers: [
          { content: 'π/3', isCorrect: true },
          { content: 'π', isCorrect: false },
          { content: 'π/2', isCorrect: false },
          { content: '2π/3', isCorrect: false },
        ],
      },
      {
        content: '∫₋₁¹ x³ dx bằng:',
        answers: [
          { content: '0', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '-1', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = sin(2x) là:',
        answers: [
          { content: '-(1/2)·cos(2x) + C', isCorrect: true },
          { content: '(1/2)·cos(2x) + C', isCorrect: false },
          { content: '-cos(2x) + C', isCorrect: false },
          { content: '2·cos(2x) + C', isCorrect: false },
        ],
      },
      {
        content: '∫₁^e (1/x) dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: 'e', isCorrect: false },
          { content: 'ln2', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = sin(x), trục Ox, x = 0 và x = π bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'π', isCorrect: false },
        ],
      },
      {
        content: '∫₀² |x − 1| dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '1/2', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = x·cos(x) là:',
        answers: [
          { content: 'x·sin(x) + cos(x) + C', isCorrect: true },
          { content: 'x·sin(x) − cos(x) + C', isCorrect: false },
          { content: '(x²/2)·cos(x) + C', isCorrect: false },
          { content: 'sin(x) + x·cos(x) + C', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích vật thể tròn xoay khi quay y = √x (0 ≤ x ≤ 4) quanh Ox bằng:',
        answers: [
          { content: '8π', isCorrect: true },
          { content: '4π', isCorrect: false },
          { content: '16π', isCorrect: false },
          { content: '2π', isCorrect: false },
        ],
      },
      {
        content: '∫₀^(π/4) (1/cos²(x)) dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: 'π/4', isCorrect: false },
          { content: '√2', isCorrect: false },
        ],
      },
      {
        content: 'Cho ∫₀² f(x) dx = 5 và ∫₀² g(x) dx = 3. Giá trị ∫₀² [2f(x) − g(x)] dx bằng:',
        answers: [
          { content: '7', isCorrect: true },
          { content: '8', isCorrect: false },
          { content: '13', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của f(x) = (2x + 3)⁵ là:',
        answers: [
          { content: '(2x + 3)⁶/12 + C', isCorrect: true },
          { content: '(2x + 3)⁶/6 + C', isCorrect: false },
          { content: '5(2x + 3)⁴ + C', isCorrect: false },
          { content: '(2x + 3)⁶ + C', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = eˣ, trục Ox, x = 0 và x = ln2 bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: 'ln2', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: 'e − 1', isCorrect: false },
        ],
      },
    ],
  },
  // ===================== ĐỀ SỐ 4: Số phức =====================
  {
    categorySlug: 'trac-nghiem-thpt-toan',
    title: 'Đề trắc nghiệm Toán 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-toan-de-4',
    description:
      'Đề trắc nghiệm Toán 12 chủ đề Số phức: phép toán, mô-đun, biểu diễn hình học, phương trình số phức.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Phần thực và phần ảo của số phức z = 3 − 4i lần lượt là:',
        answers: [
          { content: '3 và -4', isCorrect: true },
          { content: '3 và 4', isCorrect: false },
          { content: '-4 và 3', isCorrect: false },
          { content: '3 và -4i', isCorrect: false },
        ],
      },
      {
        content: 'Mô-đun của số phức z = 3 + 4i bằng:',
        answers: [
          { content: '5', isCorrect: true },
          { content: '7', isCorrect: false },
          { content: '25', isCorrect: false },
          { content: '1', isCorrect: false },
        ],
      },
      {
        content: 'Cho z₁ = 2 + 3i và z₂ = 1 − i. Tổng z₁ + z₂ bằng:',
        answers: [
          { content: '3 + 2i', isCorrect: true },
          { content: '3 − 2i', isCorrect: false },
          { content: '1 + 4i', isCorrect: false },
          { content: '2 + 2i', isCorrect: false },
        ],
      },
      {
        content: 'Số phức liên hợp của z = 5 − 2i là:',
        answers: [
          { content: '5 + 2i', isCorrect: true },
          { content: '-5 + 2i', isCorrect: false },
          { content: '-5 − 2i', isCorrect: false },
          { content: '2 + 5i', isCorrect: false },
        ],
      },
      {
        content: 'Tích z₁·z₂ với z₁ = 1 + i và z₂ = 1 − i bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '2i', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '1 + i', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của i² bằng:',
        answers: [
          { content: '-1', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: 'i', isCorrect: false },
          { content: '-i', isCorrect: false },
        ],
      },
      {
        content: 'Điểm biểu diễn số phức z = -2 + 3i trên mặt phẳng tọa độ là:',
        answers: [
          { content: '(-2; 3)', isCorrect: true },
          { content: '(3; -2)', isCorrect: false },
          { content: '(-2; -3)', isCorrect: false },
          { content: '(2; 3)', isCorrect: false },
        ],
      },
      {
        content: 'Cho z = (2 + i)/(1 − i). Phần thực của z bằng:',
        answers: [
          { content: '1/2', isCorrect: true },
          { content: '3/2', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của i⁴ bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '-1', isCorrect: false },
          { content: 'i', isCorrect: false },
          { content: '-i', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm phức của phương trình z² + 1 = 0 là:',
        answers: [
          { content: 'z = i hoặc z = -i', isCorrect: true },
          { content: 'z = 1 hoặc z = -1', isCorrect: false },
          { content: 'z = 1 + i hoặc z = 1 − i', isCorrect: false },
          { content: 'z = 0', isCorrect: false },
        ],
      },
      {
        content: 'Mô-đun của số phức z = 1 + i√3 bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '√3', isCorrect: false },
          { content: '4', isCorrect: false },
          { content: '1 + √3', isCorrect: false },
        ],
      },
      {
        content: 'Cho z = 3 − 4i. Giá trị z·z̄ bằng:',
        answers: [
          { content: '25', isCorrect: true },
          { content: '7', isCorrect: false },
          { content: '-7', isCorrect: false },
          { content: '5', isCorrect: false },
        ],
      },
      {
        content: 'Số phức z thỏa mãn (1 + 2i)z = 5. Giá trị z là:',
        answers: [
          { content: '1 − 2i', isCorrect: true },
          { content: '1 + 2i', isCorrect: false },
          { content: '5 − 10i', isCorrect: false },
          { content: '5/(1 + 2i)', isCorrect: false },
        ],
      },
      {
        content: 'Tập hợp các điểm biểu diễn số phức z thỏa mãn |z| = 3 là:',
        answers: [
          { content: 'Đường tròn tâm O bán kính 3', isCorrect: true },
          { content: 'Hình tròn tâm O bán kính 3', isCorrect: false },
          { content: 'Đường thẳng x = 3', isCorrect: false },
          { content: 'Đường thẳng y = 3', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của (1 + i)² bằng:',
        answers: [
          { content: '2i', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '2 + 2i', isCorrect: false },
          { content: '-2', isCorrect: false },
        ],
      },
      {
        content: 'Cho z₁ = 4 + 3i, z₂ = 2 − i. Hiệu z₁ − z₂ bằng:',
        answers: [
          { content: '2 + 4i', isCorrect: true },
          { content: '6 + 2i', isCorrect: false },
          { content: '2 − 4i', isCorrect: false },
          { content: '6 + 4i', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình z² − 4z + 5 = 0 có nghiệm là:',
        answers: [
          { content: 'z = 2 + i hoặc z = 2 − i', isCorrect: true },
          { content: 'z = 1 hoặc z = 5', isCorrect: false },
          { content: 'z = 2 + 2i hoặc z = 2 − 2i', isCorrect: false },
          { content: 'z = 4 + i hoặc z = 4 − i', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của i³ bằng:',
        answers: [
          { content: '-i', isCorrect: true },
          { content: 'i', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '-1', isCorrect: false },
        ],
      },
      {
        content: 'Cho z = a + bi (a, b ∈ ℝ) thỏa mãn z + 2z̄ = 9 − 4i. Giá trị a + b bằng:',
        answers: [
          { content: '7', isCorrect: true },
          { content: '5', isCorrect: false },
          { content: '-1', isCorrect: false },
          { content: '13', isCorrect: false },
        ],
      },
      {
        content: 'Tập hợp điểm biểu diễn số phức z thỏa mãn |z − 1 − i| = 2 là:',
        answers: [
          { content: 'Đường tròn tâm (1; 1) bán kính 2', isCorrect: true },
          { content: 'Đường tròn tâm (-1; -1) bán kính 2', isCorrect: false },
          { content: 'Đường tròn tâm (1; 1) bán kính 4', isCorrect: false },
          { content: 'Đường thẳng qua (1; 1)', isCorrect: false },
        ],
      },
      {
        content: 'Cho z = (3 + i)(2 − i). Phần ảo của z bằng:',
        answers: [
          { content: '-1', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '7', isCorrect: false },
          { content: '-7', isCorrect: false },
        ],
      },
      {
        content: 'Mô-đun của số phức z = (1 + i)³ bằng:',
        answers: [
          { content: '2√2', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '4', isCorrect: false },
          { content: '√2', isCorrect: false },
        ],
      },
      {
        content: 'Số phức z thỏa mãn z² = -4 là:',
        answers: [
          { content: 'z = 2i hoặc z = -2i', isCorrect: true },
          { content: 'z = 2 hoặc z = -2', isCorrect: false },
          { content: 'z = 4i', isCorrect: false },
          { content: 'z = -4', isCorrect: false },
        ],
      },
      {
        content: 'Cho z = 1/(1 + i). Giá trị z bằng:',
        answers: [
          { content: '(1 − i)/2', isCorrect: true },
          { content: '(1 + i)/2', isCorrect: false },
          { content: '1 − i', isCorrect: false },
          { content: '1/2', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình z² + 2z + 5 = 0 có tổng hai nghiệm phức bằng:',
        answers: [
          { content: '-2', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '5', isCorrect: false },
          { content: '-5', isCorrect: false },
        ],
      },
    ],
  },
  // ===================== ĐỀ SỐ 5: Hình học không gian =====================
  {
    categorySlug: 'trac-nghiem-thpt-toan',
    title: 'Đề trắc nghiệm Toán 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-toan-de-5',
    description:
      'Đề trắc nghiệm Toán 12 chủ đề Hình học không gian: thể tích khối chóp, lăng trụ, khối cầu, khoảng cách, góc.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Thể tích khối cầu có bán kính R = 3 bằng:',
        answers: [
          { content: '36π', isCorrect: true },
          { content: '27π', isCorrect: false },
          { content: '12π', isCorrect: false },
          { content: '108π', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích khối chóp có diện tích đáy S = 12 và chiều cao h = 5 bằng:',
        answers: [
          { content: '20', isCorrect: true },
          { content: '60', isCorrect: false },
          { content: '30', isCorrect: false },
          { content: '15', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích xung quanh hình trụ có bán kính đáy r = 3 và chiều cao h = 4 bằng:',
        answers: [
          { content: '24π', isCorrect: true },
          { content: '12π', isCorrect: false },
          { content: '36π', isCorrect: false },
          { content: '48π', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh a, SA ⊥ (ABCD) và SA = a. Thể tích khối chóp bằng:',
        answers: [
          { content: 'a³/3', isCorrect: true },
          { content: 'a³', isCorrect: false },
          { content: 'a³/2', isCorrect: false },
          { content: '2a³/3', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích khối lăng trụ đứng có đáy là tam giác đều cạnh a và chiều cao h = 2a bằng:',
        answers: [
          { content: 'a³√3/2', isCorrect: true },
          { content: 'a³√3', isCorrect: false },
          { content: 'a³√3/4', isCorrect: false },
          { content: '2a³√3', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích mặt cầu có bán kính R = 5 bằng:',
        answers: [
          { content: '100π', isCorrect: true },
          { content: '25π', isCorrect: false },
          { content: '500π/3', isCorrect: false },
          { content: '50π', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp tam giác đều S.ABC có cạnh đáy a và cạnh bên bằng a. Chiều cao của hình chóp bằng:',
        answers: [
          { content: 'a√6/3', isCorrect: true },
          { content: 'a√3/3', isCorrect: false },
          { content: 'a√2/2', isCorrect: false },
          { content: 'a/2', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích hình nón có bán kính đáy r = 3 và chiều cao h = 4 bằng:',
        answers: [
          { content: '12π', isCorrect: true },
          { content: '36π', isCorrect: false },
          { content: '9π', isCorrect: false },
          { content: '48π', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình hộp chữ nhật có ba kích thước a, b, c. Đường chéo của hình hộp bằng:',
        answers: [
          { content: '√(a² + b² + c²)', isCorrect: true },
          { content: 'a + b + c', isCorrect: false },
          { content: '√(a² + b²) + c', isCorrect: false },
          { content: '√(ab + bc + ca)', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp S.ABC có SA ⊥ (ABC), SA = 3, tam giác ABC vuông tại B với AB = 3, BC = 4. Thể tích khối chóp bằng:',
        answers: [
          { content: '6', isCorrect: true },
          { content: '12', isCorrect: false },
          { content: '18', isCorrect: false },
          { content: '36', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích xung quanh hình nón có bán kính đáy r = 3 và đường sinh l = 5 bằng:',
        answers: [
          { content: '15π', isCorrect: true },
          { content: '30π', isCorrect: false },
          { content: '9π', isCorrect: false },
          { content: '45π', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình lập phương cạnh a. Khoảng cách giữa hai đường chéo chéo nhau bằng:',
        answers: [
          { content: 'a√2/2', isCorrect: true },
          { content: 'a', isCorrect: false },
          { content: 'a√3/3', isCorrect: false },
          { content: 'a/2', isCorrect: false },
        ],
      },
      {
        content:
          'Thể tích khối lập phương có đường chéo bằng a√3 là:',
        answers: [
          { content: 'a³', isCorrect: true },
          { content: 'a³√3', isCorrect: false },
          { content: '3a³', isCorrect: false },
          { content: 'a³/3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp tứ giác đều S.ABCD có cạnh đáy a và chiều cao h. Thể tích khối chóp bằng:',
        answers: [
          { content: 'a²h/3', isCorrect: true },
          { content: 'a²h', isCorrect: false },
          { content: 'a²h/2', isCorrect: false },
          { content: '2a²h/3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình trụ có bán kính đáy r và chiều cao h = 2r. Thể tích khối trụ bằng:',
        answers: [
          { content: '2πr³', isCorrect: true },
          { content: 'πr³', isCorrect: false },
          { content: '4πr³/3', isCorrect: false },
          { content: '3πr³', isCorrect: false },
        ],
      },
      {
        content:
          'Góc giữa đường thẳng và mặt phẳng có giá trị thuộc khoảng:',
        answers: [
          { content: '[0°; 90°]', isCorrect: true },
          { content: '[0°; 180°]', isCorrect: false },
          { content: '(0°; 90°)', isCorrect: false },
          { content: '[0°; 360°]', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp S.ABCD có đáy là hình vuông cạnh a, SA ⊥ (ABCD), SA = a√2. Khoảng cách từ A đến mặt phẳng (SBC) bằng:',
        answers: [
          { content: 'a√6/3', isCorrect: true },
          { content: 'a√2/2', isCorrect: false },
          { content: 'a√3/3', isCorrect: false },
          { content: 'a', isCorrect: false },
        ],
      },
      {
        content:
          'Thể tích khối cầu ngoại tiếp hình lập phương cạnh a bằng:',
        answers: [
          { content: 'πa³√3/2', isCorrect: true },
          { content: '4πa³/3', isCorrect: false },
          { content: 'πa³/6', isCorrect: false },
          { content: '2πa³√3/3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp S.ABC có SA = SB = SC = a và tam giác ABC đều cạnh a. Chiều cao của hình chóp bằng:',
        answers: [
          { content: 'a√6/3', isCorrect: true },
          { content: 'a√3/3', isCorrect: false },
          { content: 'a√2/3', isCorrect: false },
          { content: 'a/3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình lăng trụ đứng ABC.A\'B\'C\' có đáy là tam giác vuông tại A, AB = 3, AC = 4, AA\' = 5. Thể tích khối lăng trụ bằng:',
        answers: [
          { content: '30', isCorrect: true },
          { content: '60', isCorrect: false },
          { content: '20', isCorrect: false },
          { content: '15', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình nón có bán kính đáy r = 4 và đường sinh l = 5. Chiều cao của hình nón bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '√41', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '9', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp S.ABCD có đáy ABCD là hình chữ nhật AB = 3, BC = 4, SA ⊥ (ABCD), SA = 6. Góc giữa SC và mặt phẳng (ABCD) bằng:',
        answers: [
          { content: 'arctan(6/5)', isCorrect: true },
          { content: 'arctan(6/3)', isCorrect: false },
          { content: 'arctan(6/4)', isCorrect: false },
          { content: 'arctan(3/4)', isCorrect: false },
        ],
      },
      {
        content:
          'Thể tích khối cầu nội tiếp hình lập phương cạnh 2a bằng:',
        answers: [
          { content: '4πa³/3', isCorrect: true },
          { content: '32πa³/3', isCorrect: false },
          { content: 'πa³/6', isCorrect: false },
          { content: '8πa³/3', isCorrect: false },
        ],
      },
      {
        content:
          'Cho hình chóp đều S.ABCD có cạnh đáy a và cạnh bên a√2. Thể tích khối chóp bằng:',
        answers: [
          { content: 'a³/3', isCorrect: true },
          { content: 'a³√2/3', isCorrect: false },
          { content: '2a³/3', isCorrect: false },
          { content: 'a³/6', isCorrect: false },
        ],
      },
      {
        content:
          'Cho mặt cầu đi qua tất cả các đỉnh của hình lập phương cạnh a. Bán kính mặt cầu bằng:',
        answers: [
          { content: 'a√3/2', isCorrect: true },
          { content: 'a/2', isCorrect: false },
          { content: 'a√2/2', isCorrect: false },
          { content: 'a', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
