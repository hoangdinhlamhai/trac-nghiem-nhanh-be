import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // ===================== ĐỀ SỐ 1: Hàm số, mũ-logarit, tích phân, số phức, hình không gian =====================
  {
    categorySlug: 'on-thi-thpt-toan',
    title: 'Đề ôn thi THPT QG 2025 - Toán - Đề số 1',
    slug: 'on-thi-thpt-toan-de-1',
    description:
      'Đề ôn thi THPT QG 2025 Toán tổng hợp: hàm số, mũ-logarit, tích phân, số phức, hình không gian.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Hàm số y = x³ − 3x + 2 đạt cực đại tại điểm nào?',
        answers: [
          { content: 'x = −1', isCorrect: true },
          { content: 'x = 1', isCorrect: false },
          { content: 'x = 0', isCorrect: false },
          { content: 'x = 2', isCorrect: false },
        ],
      },
      {
        content: 'Đồ thị hàm số y = (2x + 1)/(x − 1) có tiệm cận đứng là:',
        answers: [
          { content: 'x = 1', isCorrect: true },
          { content: 'x = −1', isCorrect: false },
          { content: 'x = 2', isCorrect: false },
          { content: 'x = −1/2', isCorrect: false },
        ],
      },
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
        content: 'Nghiệm của phương trình 3ˣ = 27 là:',
        answers: [
          { content: 'x = 3', isCorrect: true },
          { content: 'x = 9', isCorrect: false },
          { content: 'x = 27', isCorrect: false },
          { content: 'x = 2', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₀¹ 2x dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '1/2', isCorrect: false },
        ],
      },
      {
        content: 'Số phức z = 3 + 4i có mô-đun bằng:',
        answers: [
          { content: '5', isCorrect: true },
          { content: '7', isCorrect: false },
          { content: '25', isCorrect: false },
          { content: '√7', isCorrect: false },
        ],
      },
      {
        content: 'Cho hình chóp S.ABCD có đáy ABCD là hình vuông cạnh a, SA ⊥ (ABCD) và SA = a. Thể tích khối chóp bằng:',
        answers: [
          { content: 'a³/3', isCorrect: true },
          { content: 'a³', isCorrect: false },
          { content: 'a³/2', isCorrect: false },
          { content: '2a³/3', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = −x⁴ + 2x² có bao nhiêu điểm cực trị?',
        answers: [
          { content: '3', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của log₃(1/9) bằng:',
        answers: [
          { content: '−2', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '−3', isCorrect: false },
          { content: '1/2', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình log₂(x) = 5 là:',
        answers: [
          { content: 'x = 32', isCorrect: true },
          { content: 'x = 10', isCorrect: false },
          { content: 'x = 25', isCorrect: false },
          { content: 'x = 16', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₀^π sin(x) dx bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'π', isCorrect: false },
        ],
      },
      {
        content: 'Phần ảo của số phức z = (1 + 2i)(3 − i) là:',
        answers: [
          { content: '5', isCorrect: true },
          { content: '−5', isCorrect: false },
          { content: '7', isCorrect: false },
          { content: '1', isCorrect: false },
        ],
      },
      {
        content: 'Cho hình lăng trụ đứng ABC.A′B′C′ có đáy là tam giác đều cạnh a, chiều cao h = 2a. Thể tích khối lăng trụ bằng:',
        answers: [
          { content: 'a²√3/2', isCorrect: true },
          { content: 'a²√3', isCorrect: false },
          { content: '2a³√3', isCorrect: false },
          { content: 'a³/3', isCorrect: false },
        ],
      },
      {
        content: 'Đường tiệm cận ngang của đồ thị hàm số y = (3x − 2)/(x + 1) là:',
        answers: [
          { content: 'y = 3', isCorrect: true },
          { content: 'y = −1', isCorrect: false },
          { content: 'y = −2', isCorrect: false },
          { content: 'y = 2/3', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của biểu thức 2^(log₂3) bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '6', isCorrect: false },
          { content: '8', isCorrect: false },
          { content: '9', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₁² (1/x) dx bằng:',
        answers: [
          { content: 'ln 2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: 'ln 3', isCorrect: false },
          { content: '1/2', isCorrect: false },
        ],
      },
      {
        content: 'Số phức liên hợp của z = 2 − 3i là:',
        answers: [
          { content: '2 + 3i', isCorrect: true },
          { content: '−2 + 3i', isCorrect: false },
          { content: '−2 − 3i', isCorrect: false },
          { content: '3 − 2i', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = x⁴ − 4x² + 3 có bao nhiêu điểm cực tiểu?',
        answers: [
          { content: '2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '3', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content: 'Cho hình cầu có bán kính R = 3. Thể tích hình cầu bằng:',
        answers: [
          { content: '36π', isCorrect: true },
          { content: '27π', isCorrect: false },
          { content: '108π', isCorrect: false },
          { content: '12π', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình 5^(2x−1) = 25 là:',
        answers: [
          { content: 'x = 3/2', isCorrect: true },
          { content: 'x = 2', isCorrect: false },
          { content: 'x = 1', isCorrect: false },
          { content: 'x = 5/2', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₀¹ eˣ dx bằng:',
        answers: [
          { content: 'e − 1', isCorrect: true },
          { content: 'e', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'e + 1', isCorrect: false },
        ],
      },
      {
        content: 'Cho z₁ = 1 + i và z₂ = 2 − i. Giá trị z₁ + z₂ bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '3 + 2i', isCorrect: false },
          { content: '1 − 2i', isCorrect: false },
          { content: '3 − 2i', isCorrect: false },
        ],
      },
      {
        content: 'Cho hình nón có bán kính đáy r = 3 và đường sinh l = 5. Diện tích xung quanh hình nón bằng:',
        answers: [
          { content: '15π', isCorrect: true },
          { content: '45π', isCorrect: false },
          { content: '9π', isCorrect: false },
          { content: '25π', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = x³ − 3x² + 4 có giá trị cực tiểu bằng:',
        answers: [
          { content: '0', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '−4', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của ln(e⁵) bằng:',
        answers: [
          { content: '5', isCorrect: true },
          { content: 'e⁵', isCorrect: false },
          { content: '5e', isCorrect: false },
          { content: '1/5', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 2: Đạo hàm, cực trị, tiệm cận, xác suất, tổ hợp =====================
  {
    categorySlug: 'on-thi-thpt-toan',
    title: 'Đề ôn thi THPT QG 2025 - Toán - Đề số 2',
    slug: 'on-thi-thpt-toan-de-2',
    description:
      'Đề ôn thi THPT QG 2025 Toán tổng hợp: đạo hàm, cực trị, tiệm cận, xác suất, tổ hợp.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Đạo hàm của hàm số y = x⁴ − 2x² + 1 là:',
        answers: [
          { content: 'y′ = 4x³ − 4x', isCorrect: true },
          { content: 'y′ = 4x³ − 2x', isCorrect: false },
          { content: 'y′ = 3x³ − 4x', isCorrect: false },
          { content: 'y′ = 4x³ + 4x', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = sin(2x) là:',
        answers: [
          { content: 'y′ = 2cos(2x)', isCorrect: true },
          { content: 'y′ = cos(2x)', isCorrect: false },
          { content: 'y′ = −2cos(2x)', isCorrect: false },
          { content: 'y′ = 2sin(2x)', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = 2x³ − 3x² − 12x + 1 đạt cực tiểu tại:',
        answers: [
          { content: 'x = 2', isCorrect: true },
          { content: 'x = −1', isCorrect: false },
          { content: 'x = 0', isCorrect: false },
          { content: 'x = 3', isCorrect: false },
        ],
      },
      {
        content: 'Đồ thị hàm số y = (x² − 1)/(x − 1) có tiệm cận đứng không?',
        answers: [
          { content: 'Không, vì y = x + 1 khi x ≠ 1', isCorrect: true },
          { content: 'Có, x = 1', isCorrect: false },
          { content: 'Có, x = −1', isCorrect: false },
          { content: 'Có, x = 0', isCorrect: false },
        ],
      },
      {
        content: 'Gieo một con xúc xắc cân đối. Xác suất để mặt xuất hiện là số chẵn bằng:',
        answers: [
          { content: '1/2', isCorrect: true },
          { content: '1/3', isCorrect: false },
          { content: '1/6', isCorrect: false },
          { content: '2/3', isCorrect: false },
        ],
      },
      {
        content: 'Số tổ hợp C(5, 2) bằng:',
        answers: [
          { content: '10', isCorrect: true },
          { content: '20', isCorrect: false },
          { content: '5', isCorrect: false },
          { content: '25', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = eˣ là:',
        answers: [
          { content: 'y′ = eˣ', isCorrect: true },
          { content: 'y′ = xeˣ⁻¹', isCorrect: false },
          { content: 'y′ = e', isCorrect: false },
          { content: 'y′ = 1/eˣ', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = x³ − 6x² + 9x + 1 có bao nhiêu cực trị?',
        answers: [
          { content: '2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '3', isCorrect: false },
        ],
      },
      {
        content: 'Đồ thị hàm số y = (x + 2)/(2x − 4) có tiệm cận ngang là:',
        answers: [
          { content: 'y = 1/2', isCorrect: true },
          { content: 'y = 2', isCorrect: false },
          { content: 'y = −2', isCorrect: false },
          { content: 'y = −1/2', isCorrect: false },
        ],
      },
      {
        content: 'Gieo hai con xúc xắc cân đối. Xác suất để tổng hai mặt bằng 7 là:',
        answers: [
          { content: '1/6', isCorrect: true },
          { content: '1/12', isCorrect: false },
          { content: '1/36', isCorrect: false },
          { content: '5/36', isCorrect: false },
        ],
      },
      {
        content: 'Số chỉnh hợp A(4, 2) bằng:',
        answers: [
          { content: '12', isCorrect: true },
          { content: '6', isCorrect: false },
          { content: '8', isCorrect: false },
          { content: '24', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = ln(x) là:',
        answers: [
          { content: 'y′ = 1/x', isCorrect: true },
          { content: 'y′ = x', isCorrect: false },
          { content: 'y′ = ln(x)/x', isCorrect: false },
          { content: 'y′ = 1/ln(x)', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị cực đại của hàm số y = −x² + 4x − 3 bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '−3', isCorrect: false },
          { content: '4', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content: 'Đồ thị hàm số y = x³ − 3x cắt trục hoành tại bao nhiêu điểm?',
        answers: [
          { content: '3', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '0', isCorrect: false },
        ],
      },
      {
        content: 'Một hộp có 5 bi đỏ và 3 bi xanh. Lấy ngẫu nhiên 2 bi. Xác suất cả 2 bi đều đỏ bằng:',
        answers: [
          { content: '10/28', isCorrect: true },
          { content: '5/8', isCorrect: false },
          { content: '25/64', isCorrect: false },
          { content: '1/4', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của 5! bằng:',
        answers: [
          { content: '120', isCorrect: true },
          { content: '60', isCorrect: false },
          { content: '24', isCorrect: false },
          { content: '720', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = √x là:',
        answers: [
          { content: 'y′ = 1/(2√x)', isCorrect: true },
          { content: 'y′ = 2√x', isCorrect: false },
          { content: 'y′ = √x/2', isCorrect: false },
          { content: 'y′ = 1/√x', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = (x − 1)/(x + 2) nghịch biến trên khoảng nào?',
        answers: [
          { content: 'Không nghịch biến trên khoảng nào (hàm đồng biến trên mỗi khoảng xác định)', isCorrect: true },
          { content: '(−∞; −2)', isCorrect: false },
          { content: '(−2; +∞)', isCorrect: false },
          { content: '(−∞; +∞)', isCorrect: false },
        ],
      },
      {
        content: 'Hệ số của x² trong khai triển (1 + x)⁵ bằng:',
        answers: [
          { content: '10', isCorrect: true },
          { content: '5', isCorrect: false },
          { content: '20', isCorrect: false },
          { content: '15', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = cos(3x) là:',
        answers: [
          { content: 'y′ = −3sin(3x)', isCorrect: true },
          { content: 'y′ = 3sin(3x)', isCorrect: false },
          { content: 'y′ = −sin(3x)', isCorrect: false },
          { content: 'y′ = 3cos(3x)', isCorrect: false },
        ],
      },
      {
        content: 'Hàm số y = x⁴ − 8x² + 16 đạt giá trị nhỏ nhất bằng:',
        answers: [
          { content: '0', isCorrect: true },
          { content: '16', isCorrect: false },
          { content: '−16', isCorrect: false },
          { content: '8', isCorrect: false },
        ],
      },
      {
        content: 'Đồ thị hàm số y = (2x² + 1)/(x²) có tiệm cận ngang là:',
        answers: [
          { content: 'y = 2', isCorrect: true },
          { content: 'y = 0', isCorrect: false },
          { content: 'y = 1', isCorrect: false },
          { content: 'Không có tiệm cận ngang', isCorrect: false },
        ],
      },
      {
        content: 'Chọn ngẫu nhiên 3 học sinh từ nhóm 10 học sinh. Số cách chọn là:',
        answers: [
          { content: '120', isCorrect: true },
          { content: '720', isCorrect: false },
          { content: '30', isCorrect: false },
          { content: '1000', isCorrect: false },
        ],
      },
      {
        content: 'Đạo hàm của hàm số y = x·eˣ là:',
        answers: [
          { content: 'y′ = eˣ(x + 1)', isCorrect: true },
          { content: 'y′ = x·eˣ', isCorrect: false },
          { content: 'y′ = eˣ', isCorrect: false },
          { content: 'y′ = (x − 1)·eˣ', isCorrect: false },
        ],
      },
      {
        content: 'Tung đồng xu cân đối 3 lần. Xác suất được đúng 2 lần mặt sấp bằng:',
        answers: [
          { content: '3/8', isCorrect: true },
          { content: '1/4', isCorrect: false },
          { content: '1/2', isCorrect: false },
          { content: '1/8', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 3: Nguyên hàm, diện tích, thể tích, phương trình lượng giác =====================
  {
    categorySlug: 'on-thi-thpt-toan',
    title: 'Đề ôn thi THPT QG 2025 - Toán - Đề số 3',
    slug: 'on-thi-thpt-toan-de-3',
    description:
      'Đề ôn thi THPT QG 2025 Toán tổng hợp: nguyên hàm, diện tích, thể tích, phương trình lượng giác.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Nguyên hàm của hàm số f(x) = 3x² là:',
        answers: [
          { content: 'F(x) = x³ + C', isCorrect: true },
          { content: 'F(x) = 6x + C', isCorrect: false },
          { content: 'F(x) = x³', isCorrect: false },
          { content: 'F(x) = 3x³ + C', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của hàm số f(x) = cos(x) là:',
        answers: [
          { content: 'F(x) = sin(x) + C', isCorrect: true },
          { content: 'F(x) = −sin(x) + C', isCorrect: false },
          { content: 'F(x) = cos(x) + C', isCorrect: false },
          { content: 'F(x) = −cos(x) + C', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi đồ thị y = x², trục Ox, x = 0 và x = 1 bằng:',
        answers: [
          { content: '1/3', isCorrect: true },
          { content: '1/2', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: '2/3', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình sin(x) = 1/2 trong khoảng [0; 2π] là:',
        answers: [
          { content: 'x = π/6 và x = 5π/6', isCorrect: true },
          { content: 'x = π/3 và x = 2π/3', isCorrect: false },
          { content: 'x = π/6', isCorrect: false },
          { content: 'x = π/4 và x = 3π/4', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích vật thể tròn xoay khi quay hình phẳng giới hạn bởi y = x, trục Ox, x = 0, x = 1 quanh Ox bằng:',
        answers: [
          { content: 'π/3', isCorrect: true },
          { content: 'π', isCorrect: false },
          { content: 'π/2', isCorrect: false },
          { content: '2π/3', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của hàm số f(x) = eˣ là:',
        answers: [
          { content: 'F(x) = eˣ + C', isCorrect: true },
          { content: 'F(x) = xeˣ + C', isCorrect: false },
          { content: 'F(x) = eˣ/x + C', isCorrect: false },
          { content: 'F(x) = eˣ⁺¹ + C', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình cos(x) = 0 là:',
        answers: [
          { content: 'x = π/2 + kπ (k ∈ ℤ)', isCorrect: true },
          { content: 'x = kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = 2kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = π/4 + kπ (k ∈ ℤ)', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của hàm số f(x) = 1/x là:',
        answers: [
          { content: 'F(x) = ln|x| + C', isCorrect: true },
          { content: 'F(x) = −1/x² + C', isCorrect: false },
          { content: 'F(x) = ln(x) + C', isCorrect: false },
          { content: 'F(x) = x·ln(x) + C', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = sin(x) và trục Ox trên đoạn [0; π] bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'π', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình tan(x) = 1 là:',
        answers: [
          { content: 'x = π/4 + kπ (k ∈ ℤ)', isCorrect: true },
          { content: 'x = π/4 + 2kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = π/2 + kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = kπ (k ∈ ℤ)', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₀¹ x·eˣ dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: 'e − 1', isCorrect: false },
          { content: 'e', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của hàm số f(x) = sin(2x) là:',
        answers: [
          { content: 'F(x) = −cos(2x)/2 + C', isCorrect: true },
          { content: 'F(x) = cos(2x)/2 + C', isCorrect: false },
          { content: 'F(x) = −cos(2x) + C', isCorrect: false },
          { content: 'F(x) = 2cos(2x) + C', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình 2sin²(x) − sin(x) − 1 = 0 có nghiệm sin(x) bằng:',
        answers: [
          { content: 'sin(x) = 1 hoặc sin(x) = −1/2', isCorrect: true },
          { content: 'sin(x) = 1/2 hoặc sin(x) = −1', isCorrect: false },
          { content: 'sin(x) = 0 hoặc sin(x) = 1', isCorrect: false },
          { content: 'sin(x) = −1 hoặc sin(x) = 1/2', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = x² và y = x bằng:',
        answers: [
          { content: '1/6', isCorrect: true },
          { content: '1/3', isCorrect: false },
          { content: '1/2', isCorrect: false },
          { content: '1/4', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích vật thể tròn xoay khi quay hình phẳng giới hạn bởi y = √x, trục Ox, x = 0, x = 4 quanh Ox bằng:',
        answers: [
          { content: '8π', isCorrect: true },
          { content: '4π', isCorrect: false },
          { content: '16π', isCorrect: false },
          { content: '2π', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của hàm số f(x) = 1/(1 + x²) là:',
        answers: [
          { content: 'F(x) = arctan(x) + C', isCorrect: true },
          { content: 'F(x) = arcsin(x) + C', isCorrect: false },
          { content: 'F(x) = ln(1 + x²) + C', isCorrect: false },
          { content: 'F(x) = 1/x + C', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình cos(2x) = 1 là:',
        answers: [
          { content: 'x = kπ (k ∈ ℤ)', isCorrect: true },
          { content: 'x = π/2 + kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = 2kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = π/4 + kπ (k ∈ ℤ)', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₀^(π/2) cos(x) dx bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: 'π/2', isCorrect: false },
          { content: '−1', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích hình phẳng giới hạn bởi y = eˣ, trục Ox, x = 0 và x = 1 bằng:',
        answers: [
          { content: 'e − 1', isCorrect: true },
          { content: 'e', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'e + 1', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình sin(x) + cos(x) = √2 có nghiệm là:',
        answers: [
          { content: 'x = π/4 + 2kπ (k ∈ ℤ)', isCorrect: true },
          { content: 'x = π/2 + 2kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = π/4 + kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = kπ (k ∈ ℤ)', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên hàm của hàm số f(x) = 2x + 3 là:',
        answers: [
          { content: 'F(x) = x² + 3x + C', isCorrect: true },
          { content: 'F(x) = 2x² + 3x + C', isCorrect: false },
          { content: 'F(x) = x² + 3 + C', isCorrect: false },
          { content: 'F(x) = 2 + C', isCorrect: false },
        ],
      },
      {
        content: 'Thể tích vật thể tròn xoay khi quay hình tròn bán kính R quanh đường kính bằng:',
        answers: [
          { content: '4πR³/3', isCorrect: true },
          { content: 'πR³', isCorrect: false },
          { content: '2πR³/3', isCorrect: false },
          { content: 'πR²', isCorrect: false },
        ],
      },
      {
        content: 'Nghiệm của phương trình sin(x) = −1 trong khoảng [0; 2π] là:',
        answers: [
          { content: 'x = 3π/2', isCorrect: true },
          { content: 'x = π/2', isCorrect: false },
          { content: 'x = π', isCorrect: false },
          { content: 'x = 2π', isCorrect: false },
        ],
      },
      {
        content: 'Tích phân ∫₁³ (2x − 1) dx bằng:',
        answers: [
          { content: '6', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '8', isCorrect: false },
          { content: '5', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình cos(x) = cos(π/3) có nghiệm tổng quát là:',
        answers: [
          { content: 'x = ±π/3 + 2kπ (k ∈ ℤ)', isCorrect: true },
          { content: 'x = π/3 + kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = π/3 + 2kπ (k ∈ ℤ)', isCorrect: false },
          { content: 'x = 2π/3 + kπ (k ∈ ℤ)', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 4: Hình học Oxyz, mặt phẳng, đường thẳng, khoảng cách =====================
  {
    categorySlug: 'on-thi-thpt-toan',
    title: 'Đề ôn thi THPT QG 2025 - Toán - Đề số 4',
    slug: 'on-thi-thpt-toan-de-4',
    description:
      'Đề ôn thi THPT QG 2025 Toán tổng hợp: hình học Oxyz, mặt phẳng, đường thẳng, khoảng cách.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Trong không gian Oxyz, khoảng cách từ điểm M(1; 2; 3) đến gốc tọa độ O bằng:',
        answers: [
          { content: '√14', isCorrect: true },
          { content: '√6', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '14', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình mặt phẳng đi qua A(1; 0; 0), B(0; 2; 0), C(0; 0; 3) là:',
        answers: [
          { content: '6x + 3y + 2z − 6 = 0', isCorrect: true },
          { content: 'x + 2y + 3z − 1 = 0', isCorrect: false },
          { content: 'x + y + z − 1 = 0', isCorrect: false },
          { content: '3x + 2y + z − 6 = 0', isCorrect: false },
        ],
      },
      {
        content: 'Vectơ pháp tuyến của mặt phẳng 2x − 3y + z − 5 = 0 là:',
        answers: [
          { content: 'n⃗ = (2; −3; 1)', isCorrect: true },
          { content: 'n⃗ = (2; 3; 1)', isCorrect: false },
          { content: 'n⃗ = (−2; 3; −1)', isCorrect: false },
          { content: 'n⃗ = (2; −3; −5)', isCorrect: false },
        ],
      },
      {
        content: 'Khoảng cách từ điểm M(1; 2; −1) đến mặt phẳng (P): 2x − y + 2z + 3 = 0 bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '2', isCorrect: false },
          { content: '3', isCorrect: false },
          { content: '1/3', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình đường thẳng đi qua M(1; 2; 3) và có vectơ chỉ phương u⃗ = (1; −1; 2) là:',
        answers: [
          { content: '(x − 1)/1 = (y − 2)/(−1) = (z − 3)/2', isCorrect: true },
          { content: '(x + 1)/1 = (y + 2)/(−1) = (z + 3)/2', isCorrect: false },
          { content: 'x/1 = y/(−1) = z/2', isCorrect: false },
          { content: '(x − 1)/2 = (y − 2)/1 = (z − 3)/(−1)', isCorrect: false },
        ],
      },
      {
        content: 'Hai mặt phẳng (P): x + y + z − 1 = 0 và (Q): 2x + 2y + 2z + 3 = 0 có vị trí tương đối là:',
        answers: [
          { content: 'Song song', isCorrect: true },
          { content: 'Trùng nhau', isCorrect: false },
          { content: 'Cắt nhau', isCorrect: false },
          { content: 'Vuông góc', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình mặt cầu tâm I(1; −2; 3) bán kính R = 4 là:',
        answers: [
          { content: '(x − 1)² + (y + 2)² + (z − 3)² = 16', isCorrect: true },
          { content: '(x + 1)² + (y − 2)² + (z + 3)² = 16', isCorrect: false },
          { content: '(x − 1)² + (y + 2)² + (z − 3)² = 4', isCorrect: false },
          { content: '(x − 1)² + (y − 2)² + (z − 3)² = 16', isCorrect: false },
        ],
      },
      {
        content: 'Trong không gian Oxyz, trung điểm của đoạn thẳng AB với A(2; 4; 6) và B(−2; 0; 2) là:',
        answers: [
          { content: 'M(0; 2; 4)', isCorrect: true },
          { content: 'M(4; 4; 4)', isCorrect: false },
          { content: 'M(0; 4; 8)', isCorrect: false },
          { content: 'M(2; 2; 4)', isCorrect: false },
        ],
      },
      {
        content: 'Góc giữa hai mặt phẳng (P): x + y − z = 0 và (Q): x − y + z = 0 có cos bằng:',
        answers: [
          { content: '−1/3', isCorrect: true },
          { content: '1/3', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '1', isCorrect: false },
        ],
      },
      {
        content: 'Đường thẳng d đi qua A(1; 0; 0) và B(0; 1; 0) có vectơ chỉ phương là:',
        answers: [
          { content: 'u⃗ = (−1; 1; 0)', isCorrect: true },
          { content: 'u⃗ = (1; 1; 0)', isCorrect: false },
          { content: 'u⃗ = (0; 0; 1)', isCorrect: false },
          { content: 'u⃗ = (1; 0; 1)', isCorrect: false },
        ],
      },
      {
        content: 'Mặt phẳng (P) đi qua M(1; 1; 1) và vuông góc với Oz có phương trình là:',
        answers: [
          { content: 'z = 1', isCorrect: true },
          { content: 'x = 1', isCorrect: false },
          { content: 'y = 1', isCorrect: false },
          { content: 'x + y + z = 3', isCorrect: false },
        ],
      },
      {
        content: 'Khoảng cách giữa hai mặt phẳng song song (P): x − 2y + 2z − 1 = 0 và (Q): x − 2y + 2z + 5 = 0 bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '6', isCorrect: false },
          { content: '4/3', isCorrect: false },
          { content: '6/3', isCorrect: false },
        ],
      },
      {
        content: 'Trong không gian Oxyz, tọa độ hình chiếu vuông góc của M(3; 1; 2) lên mặt phẳng Oxy là:',
        answers: [
          { content: 'H(3; 1; 0)', isCorrect: true },
          { content: 'H(3; 0; 2)', isCorrect: false },
          { content: 'H(0; 1; 2)', isCorrect: false },
          { content: 'H(0; 0; 2)', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình mặt phẳng đi qua M(2; −1; 3) và song song với mặt phẳng x + 2y − z + 4 = 0 là:',
        answers: [
          { content: 'x + 2y − z + 3 = 0', isCorrect: true },
          { content: 'x + 2y − z + 4 = 0', isCorrect: false },
          { content: 'x + 2y − z − 3 = 0', isCorrect: false },
          { content: '2x + y − z + 3 = 0', isCorrect: false },
        ],
      },
      {
        content: 'Đường thẳng d: (x − 1)/2 = (y + 1)/1 = (z − 2)/(−1) có vectơ chỉ phương là:',
        answers: [
          { content: 'u⃗ = (2; 1; −1)', isCorrect: true },
          { content: 'u⃗ = (1; −1; 2)', isCorrect: false },
          { content: 'u⃗ = (−2; −1; 1)', isCorrect: false },
          { content: 'u⃗ = (2; −1; 1)', isCorrect: false },
        ],
      },
      {
        content: 'Mặt cầu x² + y² + z² − 2x + 4y − 6z + 5 = 0 có tâm và bán kính là:',
        answers: [
          { content: 'I(1; −2; 3), R = 3', isCorrect: true },
          { content: 'I(−1; 2; −3), R = 3', isCorrect: false },
          { content: 'I(1; −2; 3), R = 9', isCorrect: false },
          { content: 'I(2; −4; 6), R = 5', isCorrect: false },
        ],
      },
      {
        content: 'Trong không gian Oxyz, tích vô hướng của hai vectơ a⃗ = (1; 2; 3) và b⃗ = (4; −1; 2) bằng:',
        answers: [
          { content: '8', isCorrect: true },
          { content: '10', isCorrect: false },
          { content: '−8', isCorrect: false },
          { content: '6', isCorrect: false },
        ],
      },
      {
        content: 'Đường thẳng d vuông góc với mặt phẳng (P): 3x − y + 2z − 1 = 0 thì có vectơ chỉ phương là:',
        answers: [
          { content: 'u⃗ = (3; −1; 2)', isCorrect: true },
          { content: 'u⃗ = (3; 1; 2)', isCorrect: false },
          { content: 'u⃗ = (−3; 1; −2)', isCorrect: false },
          { content: 'u⃗ = (1; 3; 2)', isCorrect: false },
        ],
      },
      {
        content: 'Giao điểm của đường thẳng d: x = 1 + t, y = 2 − t, z = 3 + 2t và mặt phẳng (P): x + y + z − 6 = 0 là:',
        answers: [
          { content: 'M(1; 2; 3)', isCorrect: true },
          { content: 'M(2; 1; 5)', isCorrect: false },
          { content: 'M(0; 3; 1)', isCorrect: false },
          { content: 'M(3; 0; 7)', isCorrect: false },
        ],
      },
      {
        content: 'Khoảng cách từ gốc tọa độ O đến mặt phẳng (P): 3x + 4y − 12z + 26 = 0 bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '26/13', isCorrect: false },
          { content: '26/19', isCorrect: false },
          { content: '26/5', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình mặt phẳng chứa trục Ox và đi qua điểm M(0; 1; 1) là:',
        answers: [
          { content: 'y − z = 0', isCorrect: true },
          { content: 'y + z = 0', isCorrect: false },
          { content: 'x − y = 0', isCorrect: false },
          { content: 'x + z = 0', isCorrect: false },
        ],
      },
      {
        content: 'Trong không gian Oxyz, tọa độ điểm đối xứng của A(2; −1; 3) qua gốc tọa độ O là:',
        answers: [
          { content: 'A′(−2; 1; −3)', isCorrect: true },
          { content: 'A′(2; 1; 3)', isCorrect: false },
          { content: 'A′(−2; −1; −3)', isCorrect: false },
          { content: 'A′(1; −1/2; 3/2)', isCorrect: false },
        ],
      },
      {
        content: 'Hai đường thẳng d₁: (x−1)/2 = (y−2)/1 = z/3 và d₂: (x−1)/4 = (y−2)/2 = z/6 có vị trí tương đối là:',
        answers: [
          { content: 'Trùng nhau', isCorrect: true },
          { content: 'Song song', isCorrect: false },
          { content: 'Cắt nhau', isCorrect: false },
          { content: 'Chéo nhau', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích tam giác ABC với A(1; 0; 0), B(0; 2; 0), C(0; 0; 3) bằng:',
        answers: [
          { content: '√(9 + 4 + 36)/2 = 7/2', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '√14/2', isCorrect: false },
        ],
      },
      {
        content: 'Phương trình mặt phẳng đi qua M(1; 2; 3) và vuông góc với đường thẳng d: x/1 = y/2 = z/3 là:',
        answers: [
          { content: 'x + 2y + 3z − 14 = 0', isCorrect: true },
          { content: 'x + 2y + 3z = 0', isCorrect: false },
          { content: '3x + 2y + z − 10 = 0', isCorrect: false },
          { content: 'x − 2y + 3z − 6 = 0', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 5: Bất phương trình, hệ phương trình, cấp số, giới hạn =====================
  {
    categorySlug: 'on-thi-thpt-toan',
    title: 'Đề ôn thi THPT QG 2025 - Toán - Đề số 5',
    slug: 'on-thi-thpt-toan-de-5',
    description:
      'Đề ôn thi THPT QG 2025 Toán tổng hợp: bất phương trình, hệ phương trình, cấp số, giới hạn.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Tập nghiệm của bất phương trình 2x − 3 > 0 là:',
        answers: [
          { content: '(3/2; +∞)', isCorrect: true },
          { content: '(−∞; 3/2)', isCorrect: false },
          { content: '[3/2; +∞)', isCorrect: false },
          { content: '(0; 3/2)', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình x² − 4x + 3 ≤ 0 là:',
        answers: [
          { content: '[1; 3]', isCorrect: true },
          { content: '(1; 3)', isCorrect: false },
          { content: '(−∞; 1] ∪ [3; +∞)', isCorrect: false },
          { content: '{1; 3}', isCorrect: false },
        ],
      },
      {
        content: 'Hệ phương trình { x + y = 5; x − y = 1 } có nghiệm là:',
        answers: [
          { content: '(3; 2)', isCorrect: true },
          { content: '(2; 3)', isCorrect: false },
          { content: '(4; 1)', isCorrect: false },
          { content: '(1; 4)', isCorrect: false },
        ],
      },
      {
        content: 'Cấp số cộng có số hạng đầu u₁ = 3 và công sai d = 2. Số hạng thứ 10 bằng:',
        answers: [
          { content: '21', isCorrect: true },
          { content: '23', isCorrect: false },
          { content: '20', isCorrect: false },
          { content: '22', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(n→∞) (2n + 1)/(3n − 2) bằng:',
        answers: [
          { content: '2/3', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '+∞', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình |x − 2| < 3 là:',
        answers: [
          { content: '(−1; 5)', isCorrect: true },
          { content: '[−1; 5]', isCorrect: false },
          { content: '(−∞; −1) ∪ (5; +∞)', isCorrect: false },
          { content: '(2; 5)', isCorrect: false },
        ],
      },
      {
        content: 'Cấp số nhân có số hạng đầu u₁ = 2 và công bội q = 3. Số hạng thứ 5 bằng:',
        answers: [
          { content: '162', isCorrect: true },
          { content: '243', isCorrect: false },
          { content: '54', isCorrect: false },
          { content: '486', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(x→0) sin(x)/x bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '+∞', isCorrect: false },
          { content: 'Không tồn tại', isCorrect: false },
        ],
      },
      {
        content: 'Hệ phương trình { 2x + 3y = 7; x − y = 1 } có nghiệm là:',
        answers: [
          { content: '(2; 1)', isCorrect: true },
          { content: '(1; 2)', isCorrect: false },
          { content: '(3; 1/3)', isCorrect: false },
          { content: '(0; 7/3)', isCorrect: false },
        ],
      },
      {
        content: 'Tổng 10 số hạng đầu tiên của cấp số cộng có u₁ = 1, d = 2 bằng:',
        answers: [
          { content: '100', isCorrect: true },
          { content: '110', isCorrect: false },
          { content: '90', isCorrect: false },
          { content: '55', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(x→1) (x² − 1)/(x − 1) bằng:',
        answers: [
          { content: '2', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '1', isCorrect: false },
          { content: 'Không tồn tại', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình log₂(x) > 3 là:',
        answers: [
          { content: '(8; +∞)', isCorrect: true },
          { content: '(3; +∞)', isCorrect: false },
          { content: '(0; 8)', isCorrect: false },
          { content: '[8; +∞)', isCorrect: false },
        ],
      },
      {
        content: 'Tổng vô hạn của cấp số nhân lùi vô hạn có u₁ = 4 và q = 1/2 bằng:',
        answers: [
          { content: '8', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '2', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(n→∞) (n² + 1)/(2n² − 3) bằng:',
        answers: [
          { content: '1/2', isCorrect: true },
          { content: '1', isCorrect: false },
          { content: '0', isCorrect: false },
          { content: '+∞', isCorrect: false },
        ],
      },
      {
        content: 'Hệ phương trình { x² + y² = 25; x + y = 7 } có nghiệm (x; y) với x > y là:',
        answers: [
          { content: '(4; 3)', isCorrect: true },
          { content: '(5; 2)', isCorrect: false },
          { content: '(6; 1)', isCorrect: false },
          { content: '(3; 4)', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình 3ˣ ≥ 9 là:',
        answers: [
          { content: '[2; +∞)', isCorrect: true },
          { content: '(2; +∞)', isCorrect: false },
          { content: '(−∞; 2]', isCorrect: false },
          { content: '[9; +∞)', isCorrect: false },
        ],
      },
      {
        content: 'Cấp số cộng có u₃ = 7 và u₇ = 19. Công sai d bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '2', isCorrect: false },
          { content: '6', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(x→+∞) (3x² − x + 1)/(x² + 2) bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: '+∞', isCorrect: false },
          { content: '1', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình (x − 1)(x + 2) > 0 là:',
        answers: [
          { content: '(−∞; −2) ∪ (1; +∞)', isCorrect: true },
          { content: '(−2; 1)', isCorrect: false },
          { content: '[−2; 1]', isCorrect: false },
          { content: '(−∞; −2] ∪ [1; +∞)', isCorrect: false },
        ],
      },
      {
        content: 'Hệ phương trình { x + 2y = 8; 3x − y = 3 } có nghiệm là:',
        answers: [
          { content: '(2; 3)', isCorrect: true },
          { content: '(3; 2)', isCorrect: false },
          { content: '(4; 2)', isCorrect: false },
          { content: '(1; 3.5)', isCorrect: false },
        ],
      },
      {
        content: 'Cấp số nhân có u₁ = 1 và u₄ = 27. Công bội q bằng:',
        answers: [
          { content: '3', isCorrect: true },
          { content: '9', isCorrect: false },
          { content: '27', isCorrect: false },
          { content: '6', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(x→0) (eˣ − 1)/x bằng:',
        answers: [
          { content: '1', isCorrect: true },
          { content: '0', isCorrect: false },
          { content: 'e', isCorrect: false },
          { content: '+∞', isCorrect: false },
        ],
      },
      {
        content: 'Tập nghiệm của bất phương trình √(x − 1) ≤ 3 là:',
        answers: [
          { content: '[1; 10]', isCorrect: true },
          { content: '(1; 10)', isCorrect: false },
          { content: '[−8; 10]', isCorrect: false },
          { content: '(−∞; 10]', isCorrect: false },
        ],
      },
      {
        content: 'Tổng n số hạng đầu tiên của cấp số nhân có u₁ = 1, q = 2 là Sₙ = 2ⁿ − 1. Giá trị S₈ bằng:',
        answers: [
          { content: '255', isCorrect: true },
          { content: '256', isCorrect: false },
          { content: '128', isCorrect: false },
          { content: '511', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lim(x→2) (x³ − 8)/(x − 2) bằng:',
        answers: [
          { content: '12', isCorrect: true },
          { content: '8', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
