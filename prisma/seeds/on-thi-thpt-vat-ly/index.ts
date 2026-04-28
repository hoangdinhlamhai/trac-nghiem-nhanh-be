import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Tổng hợp dao động cơ, sóng cơ, dòng điện xoay chiều
  // =============================================
  {
    categorySlug: 'on-thi-thpt-vat-ly',
    title: 'Đề ôn thi THPT QG 2025 - Vật Lý - Đề số 1',
    slug: 'on-thi-thpt-vat-ly-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Vật Lý - Đề số 1. Tổng hợp: dao động cơ, sóng cơ, dòng điện xoay chiều. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Một vật dao động điều hòa với phương trình x = 4cos(5πt + π/6) cm. Biên độ và tần số góc của dao động lần lượt là:',
        answers: [
          { content: '4 cm và 5π rad/s', isCorrect: true },
          { content: '4 cm và 5 rad/s', isCorrect: false },
          { content: '5π cm và 4 rad/s', isCorrect: false },
          { content: '8 cm và 5π rad/s', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, gia tốc của vật có độ lớn cực đại khi vật ở vị trí nào?',
        answers: [
          { content: 'Vị trí cân bằng', isCorrect: false },
          { content: 'Vị trí biên', isCorrect: true },
          { content: 'Vị trí có li độ bằng A/2', isCorrect: false },
          { content: 'Vị trí có li độ bằng A/√2', isCorrect: false },
        ],
      },
      {
        content:
          'Con lắc lò xo gồm vật m = 400 g, lò xo k = 100 N/m. Chu kỳ dao động riêng của con lắc là:',
        answers: [
          { content: '0,2π s', isCorrect: false },
          { content: '0,4π s', isCorrect: true },
          { content: '0,1π s', isCorrect: false },
          { content: '2π s', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc đơn có chiều dài 1 m dao động tại nơi có g = π² m/s². Tần số dao động nhỏ của con lắc là:',
        answers: [
          { content: '0,5 Hz', isCorrect: true },
          { content: '1 Hz', isCorrect: false },
          { content: '2 Hz', isCorrect: false },
          { content: '0,25 Hz', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với biên độ A = 10 cm. Khi vật ở vị trí có li độ x = 6 cm, tỉ số động năng và thế năng của vật là:',
        answers: [
          { content: '9/16', isCorrect: false },
          { content: '16/9', isCorrect: true },
          { content: '3/4', isCorrect: false },
          { content: '4/3', isCorrect: false },
        ],
      },
      {
        content:
          'Hai dao động điều hòa cùng phương, cùng tần số có biên độ lần lượt là A₁ = 3 cm và A₂ = 4 cm, lệch pha nhau π/2. Biên độ dao động tổng hợp là:',
        answers: [
          { content: '7 cm', isCorrect: false },
          { content: '1 cm', isCorrect: false },
          { content: '5 cm', isCorrect: true },
          { content: '3,5 cm', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, khi vật đi từ vị trí cân bằng đến vị trí biên thì:',
        answers: [
          { content: 'Động năng tăng, thế năng giảm', isCorrect: false },
          { content: 'Động năng giảm, thế năng tăng', isCorrect: true },
          { content: 'Cả động năng và thế năng đều tăng', isCorrect: false },
          { content: 'Cả động năng và thế năng đều giảm', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng cơ có tần số 200 Hz truyền trong không khí với vận tốc 340 m/s. Bước sóng của sóng này là:',
        answers: [
          { content: '0,85 m', isCorrect: false },
          { content: '1,7 m', isCorrect: true },
          { content: '3,4 m', isCorrect: false },
          { content: '0,59 m', isCorrect: false },
        ],
      },
      {
        content:
          'Trong hiện tượng giao thoa sóng nước, hai nguồn kết hợp cùng pha có tần số 25 Hz, vận tốc truyền sóng 50 cm/s. Khoảng cách giữa hai vân cực đại liên tiếp trên đoạn nối hai nguồn là:',
        answers: [
          { content: '2 cm', isCorrect: false },
          { content: '1 cm', isCorrect: true },
          { content: '4 cm', isCorrect: false },
          { content: '0,5 cm', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng dừng trên dây có hai đầu cố định, chiều dài dây l = 1,2 m, bước sóng λ = 0,8 m. Số bụng sóng trên dây là:',
        answers: [
          { content: '2', isCorrect: false },
          { content: '3', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '6', isCorrect: false },
        ],
      },
      {
        content:
          'Mức cường độ âm tại điểm A là 40 dB, tại điểm B là 60 dB. Tỉ số cường độ âm tại B và A là:',
        answers: [
          { content: '1,5', isCorrect: false },
          { content: '20', isCorrect: false },
          { content: '100', isCorrect: true },
          { content: '10', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch điện xoay chiều RLC nối tiếp, hiện tượng cộng hưởng xảy ra khi:',
        answers: [
          { content: 'ωL = 1/(ωC)', isCorrect: true },
          { content: 'R = ωL', isCorrect: false },
          { content: 'R = 1/(ωC)', isCorrect: false },
          { content: 'ωL + 1/(ωC) = R', isCorrect: false },
        ],
      },
      {
        content:
          'Mạch RLC nối tiếp có R = 40 Ω, Z_L = 70 Ω, Z_C = 40 Ω. Hệ số công suất của mạch là:',
        answers: [
          { content: '0,6', isCorrect: false },
          { content: '0,8', isCorrect: true },
          { content: '0,75', isCorrect: false },
          { content: '1', isCorrect: false },
        ],
      },
      {
        content:
          'Đặt điện áp u = 100√2·cos(100πt) V vào hai đầu đoạn mạch chỉ có tụ điện C = 10⁻⁴/π F. Cường độ dòng điện hiệu dụng trong mạch là:',
        answers: [
          { content: '1 A', isCorrect: true },
          { content: '√2 A', isCorrect: false },
          { content: '0,5 A', isCorrect: false },
          { content: '2 A', isCorrect: false },
        ],
      },
      {
        content:
          'Máy biến áp lý tưởng có cuộn sơ cấp 1000 vòng, cuộn thứ cấp 200 vòng. Điện áp hiệu dụng đặt vào cuộn sơ cấp là 220 V. Điện áp hiệu dụng ở cuộn thứ cấp là:',
        answers: [
          { content: '44 V', isCorrect: true },
          { content: '1100 V', isCorrect: false },
          { content: '110 V', isCorrect: false },
          { content: '22 V', isCorrect: false },
        ],
      },
      {
        content:
          'Trong truyền tải điện năng, nếu tăng điện áp lên 10 lần thì công suất hao phí trên đường dây:',
        answers: [
          { content: 'Giảm 10 lần', isCorrect: false },
          { content: 'Giảm 100 lần', isCorrect: true },
          { content: 'Tăng 10 lần', isCorrect: false },
          { content: 'Không đổi', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc lò xo dao động điều hòa với biên độ A. Khi vật ở vị trí có li độ x = A/2, tỉ số giữa thế năng và cơ năng là:',
        answers: [
          { content: '1/2', isCorrect: false },
          { content: '1/4', isCorrect: true },
          { content: '3/4', isCorrect: false },
          { content: '1/3', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng ngang chỉ truyền được trong môi trường nào?',
        answers: [
          { content: 'Chất rắn và bề mặt chất lỏng', isCorrect: true },
          { content: 'Chất khí và chất lỏng', isCorrect: false },
          { content: 'Chân không', isCorrect: false },
          { content: 'Tất cả các môi trường', isCorrect: false },
        ],
      },
      {
        content:
          'Một nguồn âm có công suất 12,56 W phát âm đều theo mọi hướng. Cường độ âm tại điểm cách nguồn 1 m là:',
        answers: [
          { content: '1 W/m²', isCorrect: true },
          { content: '2 W/m²', isCorrect: false },
          { content: '0,5 W/m²', isCorrect: false },
          { content: '4 W/m²', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch RLC nối tiếp, khi Z_L < Z_C thì:',
        answers: [
          { content: 'Điện áp sớm pha hơn dòng điện', isCorrect: false },
          { content: 'Điện áp trễ pha hơn dòng điện', isCorrect: true },
          { content: 'Điện áp cùng pha với dòng điện', isCorrect: false },
          { content: 'Điện áp ngược pha với dòng điện', isCorrect: false },
        ],
      },
      {
        content:
          'Giá trị hiệu dụng của điện áp xoay chiều u = 220√2·cos(100πt) V là:',
        answers: [
          { content: '220 V', isCorrect: true },
          { content: '220√2 V', isCorrect: false },
          { content: '110 V', isCorrect: false },
          { content: '110√2 V', isCorrect: false },
        ],
      },
      {
        content:
          'Dao động cưỡng bức có biên độ đạt cực đại khi tần số lực cưỡng bức:',
        answers: [
          { content: 'Rất lớn so với tần số riêng', isCorrect: false },
          { content: 'Bằng tần số riêng của hệ', isCorrect: true },
          { content: 'Rất nhỏ so với tần số riêng', isCorrect: false },
          { content: 'Bằng hai lần tần số riêng', isCorrect: false },
        ],
      },
      {
        content:
          'Một mạch RLC nối tiếp có R = 100 Ω, L = 1/π H, C = 10⁻⁴/π F. Tần số dòng điện để mạch cộng hưởng là:',
        answers: [
          { content: '25 Hz', isCorrect: false },
          { content: '50 Hz', isCorrect: true },
          { content: '100 Hz', isCorrect: false },
          { content: '75 Hz', isCorrect: false },
        ],
      },
      {
        content:
          'Công suất tiêu thụ của mạch RLC nối tiếp khi cộng hưởng với U = 200 V, R = 100 Ω là:',
        answers: [
          { content: '200 W', isCorrect: false },
          { content: '400 W', isCorrect: true },
          { content: '100 W', isCorrect: false },
          { content: '800 W', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc lò xo dao động điều hòa với biên độ A và tần số góc ω. Gia tốc cực đại của vật là:',
        answers: [
          { content: 'amax = ω²A', isCorrect: true },
          { content: 'amax = ωA', isCorrect: false },
          { content: 'amax = ω²A²', isCorrect: false },
          { content: 'amax = A/ω²', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Tổng hợp sóng điện từ, quang học sóng, tán sắc, giao thoa ánh sáng
  // =============================================
  {
    categorySlug: 'on-thi-thpt-vat-ly',
    title: 'Đề ôn thi THPT QG 2025 - Vật Lý - Đề số 2',
    slug: 'on-thi-thpt-vat-ly-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Vật Lý - Đề số 2. Tổng hợp: sóng điện từ, quang học sóng, tán sắc, giao thoa ánh sáng. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Sóng điện từ là sự lan truyền của:',
        answers: [
          { content: 'Điện trường biến thiên', isCorrect: false },
          { content: 'Từ trường biến thiên', isCorrect: false },
          { content: 'Điện từ trường biến thiên', isCorrect: true },
          { content: 'Dòng điện trong dây dẫn', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng điện từ có thể truyền được trong môi trường nào?',
        answers: [
          { content: 'Chỉ trong chất rắn', isCorrect: false },
          { content: 'Chỉ trong chất khí', isCorrect: false },
          { content: 'Trong mọi môi trường kể cả chân không', isCorrect: true },
          { content: 'Chỉ trong môi trường vật chất', isCorrect: false },
        ],
      },
      {
        content:
          'Trong sóng điện từ, vectơ cường độ điện trường E⃗ và vectơ cảm ứng từ B⃗ có đặc điểm gì?',
        answers: [
          { content: 'Cùng phương và cùng pha', isCorrect: false },
          { content: 'Vuông góc với nhau và cùng pha', isCorrect: true },
          { content: 'Vuông góc với nhau và vuông pha', isCorrect: false },
          { content: 'Cùng phương và ngược pha', isCorrect: false },
        ],
      },
      {
        content:
          'Tốc độ truyền sóng điện từ trong chân không có giá trị xấp xỉ:',
        answers: [
          { content: '3 × 10⁶ m/s', isCorrect: false },
          { content: '3 × 10⁸ m/s', isCorrect: true },
          { content: '3 × 10¹⁰ m/s', isCorrect: false },
          { content: '3 × 10⁵ m/s', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thang sóng điện từ, sắp xếp theo thứ tự bước sóng giảm dần là:',
        answers: [
          { content: 'Sóng vô tuyến, hồng ngoại, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma', isCorrect: true },
          { content: 'Tia gamma, tia X, tử ngoại, ánh sáng nhìn thấy, hồng ngoại, sóng vô tuyến', isCorrect: false },
          { content: 'Hồng ngoại, sóng vô tuyến, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma', isCorrect: false },
          { content: 'Sóng vô tuyến, tử ngoại, hồng ngoại, ánh sáng nhìn thấy, tia X, tia gamma', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng tán sắc ánh sáng chứng tỏ điều gì?',
        answers: [
          { content: 'Ánh sáng trắng là ánh sáng đơn sắc', isCorrect: false },
          { content: 'Ánh sáng trắng là hỗn hợp của nhiều ánh sáng đơn sắc', isCorrect: true },
          { content: 'Lăng kính có khả năng nhuộm màu ánh sáng', isCorrect: false },
          { content: 'Ánh sáng bị hấp thụ khi qua lăng kính', isCorrect: false },
        ],
      },
      {
        content:
          'Trong hiện tượng tán sắc qua lăng kính, tia nào bị lệch nhiều nhất?',
        answers: [
          { content: 'Tia đỏ', isCorrect: false },
          { content: 'Tia vàng', isCorrect: false },
          { content: 'Tia lam', isCorrect: false },
          { content: 'Tia tím', isCorrect: true },
        ],
      },
      {
        content:
          'Chiết suất của thủy tinh đối với ánh sáng đơn sắc nào là lớn nhất?',
        answers: [
          { content: 'Ánh sáng đỏ', isCorrect: false },
          { content: 'Ánh sáng vàng', isCorrect: false },
          { content: 'Ánh sáng tím', isCorrect: true },
          { content: 'Ánh sáng lục', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng về giao thoa ánh sáng, khoảng vân i được tính bằng công thức:',
        answers: [
          { content: 'i = λD/a', isCorrect: true },
          { content: 'i = λa/D', isCorrect: false },
          { content: 'i = aD/λ', isCorrect: false },
          { content: 'i = λ/(aD)', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng, dùng ánh sáng đơn sắc có bước sóng λ = 0,6 μm, khoảng cách hai khe a = 1 mm, khoảng cách từ hai khe đến màn D = 2 m. Khoảng vân là:',
        answers: [
          { content: '0,6 mm', isCorrect: false },
          { content: '1,2 mm', isCorrect: true },
          { content: '2,4 mm', isCorrect: false },
          { content: '0,3 mm', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng giao thoa ánh sáng chứng tỏ ánh sáng có tính chất gì?',
        answers: [
          { content: 'Tính chất hạt', isCorrect: false },
          { content: 'Tính chất sóng', isCorrect: true },
          { content: 'Tính chất lưỡng tính sóng-hạt', isCorrect: false },
          { content: 'Tính chất điện từ', isCorrect: false },
        ],
      },
      {
        content:
          'Ánh sáng đơn sắc có bước sóng trong chân không là 0,60 μm. Khi truyền trong thủy tinh có chiết suất n = 1,5, bước sóng của nó là:',
        answers: [
          { content: '0,90 μm', isCorrect: false },
          { content: '0,40 μm', isCorrect: true },
          { content: '0,60 μm', isCorrect: false },
          { content: '0,30 μm', isCorrect: false },
        ],
      },
      {
        content:
          'Tia hồng ngoại có bước sóng nằm trong khoảng nào?',
        answers: [
          { content: '0,38 μm đến 0,76 μm', isCorrect: false },
          { content: '0,76 μm đến 10³ μm', isCorrect: true },
          { content: '10⁻³ μm đến 0,38 μm', isCorrect: false },
          { content: 'Nhỏ hơn 10⁻³ μm', isCorrect: false },
        ],
      },
      {
        content:
          'Tia tử ngoại được ứng dụng chủ yếu trong lĩnh vực nào?',
        answers: [
          { content: 'Sưởi ấm', isCorrect: false },
          { content: 'Điều khiển từ xa', isCorrect: false },
          { content: 'Khử trùng, diệt khuẩn', isCorrect: true },
          { content: 'Chụp X-quang', isCorrect: false },
        ],
      },
      {
        content:
          'Tia X có bước sóng nằm trong khoảng nào?',
        answers: [
          { content: '10⁻¹¹ m đến 10⁻⁸ m', isCorrect: true },
          { content: '10⁻⁸ m đến 10⁻⁶ m', isCorrect: false },
          { content: '10⁻⁶ m đến 10⁻³ m', isCorrect: false },
          { content: 'Nhỏ hơn 10⁻¹² m', isCorrect: false },
        ],
      },
      {
        content:
          'Mạch dao động LC lý tưởng có L = 1 mH và C = 10 nF. Tần số dao động riêng của mạch là:',
        answers: [
          { content: 'Khoảng 50,3 kHz', isCorrect: true },
          { content: 'Khoảng 100 kHz', isCorrect: false },
          { content: 'Khoảng 25 kHz', isCorrect: false },
          { content: 'Khoảng 500 kHz', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch dao động LC lý tưởng, năng lượng điện từ:',
        answers: [
          { content: 'Giảm dần theo thời gian', isCorrect: false },
          { content: 'Tăng dần theo thời gian', isCorrect: false },
          { content: 'Được bảo toàn', isCorrect: true },
          { content: 'Biến thiên tuần hoàn', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng, nếu dùng ánh sáng trắng thì trên màn quan sát được:',
        answers: [
          { content: 'Các vân sáng và vân tối xen kẽ đều nhau', isCorrect: false },
          { content: 'Vân trung tâm trắng, hai bên là các dải màu', isCorrect: true },
          { content: 'Chỉ có một vệt sáng trắng', isCorrect: false },
          { content: 'Các vân sáng đơn sắc cách đều nhau', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng điện từ nào sau đây có tần số lớn nhất?',
        answers: [
          { content: 'Sóng vô tuyến', isCorrect: false },
          { content: 'Tia hồng ngoại', isCorrect: false },
          { content: 'Tia tử ngoại', isCorrect: false },
          { content: 'Tia gamma', isCorrect: true },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng, vị trí vân sáng bậc k trên màn được xác định bởi:',
        answers: [
          { content: 'x = kλD/a', isCorrect: true },
          { content: 'x = (k + 0,5)λD/a', isCorrect: false },
          { content: 'x = kλa/D', isCorrect: false },
          { content: 'x = (2k + 1)λD/(2a)', isCorrect: false },
        ],
      },
      {
        content:
          'Nguyên tắc hoạt động của ăng-ten thu sóng điện từ dựa trên hiện tượng:',
        answers: [
          { content: 'Cảm ứng điện từ', isCorrect: true },
          { content: 'Tự cảm', isCorrect: false },
          { content: 'Giao thoa sóng', isCorrect: false },
          { content: 'Phản xạ sóng', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng với ánh sáng đơn sắc λ = 0,5 μm, a = 0,5 mm, D = 2 m. Tại vị trí cách vân trung tâm 6 mm là:',
        answers: [
          { content: 'Vân sáng bậc 2', isCorrect: false },
          { content: 'Vân sáng bậc 3', isCorrect: true },
          { content: 'Vân tối thứ 3', isCorrect: false },
          { content: 'Vân tối thứ 2', isCorrect: false },
        ],
      },
      {
        content:
          'Phát biểu nào sau đây về sóng điện từ là sai?',
        answers: [
          { content: 'Sóng điện từ là sóng ngang', isCorrect: false },
          { content: 'Sóng điện từ mang năng lượng', isCorrect: false },
          { content: 'Sóng điện từ cần môi trường vật chất để truyền', isCorrect: true },
          { content: 'Sóng điện từ có thể bị phản xạ, khúc xạ', isCorrect: false },
        ],
      },
      {
        content:
          'Bước sóng của ánh sáng đỏ trong chân không nằm trong khoảng:',
        answers: [
          { content: '0,38 μm – 0,44 μm', isCorrect: false },
          { content: '0,58 μm – 0,64 μm', isCorrect: false },
          { content: '0,64 μm – 0,76 μm', isCorrect: true },
          { content: '0,50 μm – 0,58 μm', isCorrect: false },
        ],
      },
      {
        content:
          'Khi tần số của ánh sáng đơn sắc tăng thì chiết suất của môi trường trong suốt đối với ánh sáng đó:',
        answers: [
          { content: 'Giảm', isCorrect: false },
          { content: 'Tăng', isCorrect: true },
          { content: 'Không đổi', isCorrect: false },
          { content: 'Có thể tăng hoặc giảm', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Tổng hợp lượng tử ánh sáng, quang điện, mẫu nguyên tử Bohr
  // =============================================
  {
    categorySlug: 'on-thi-thpt-vat-ly',
    title: 'Đề ôn thi THPT QG 2025 - Vật Lý - Đề số 3',
    slug: 'on-thi-thpt-vat-ly-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Vật Lý - Đề số 3. Tổng hợp: lượng tử ánh sáng, quang điện, mẫu nguyên tử Bohr. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Theo thuyết lượng tử ánh sáng, năng lượng của một phôtôn có bước sóng λ được tính bằng công thức:',
        answers: [
          { content: 'ε = hλ', isCorrect: false },
          { content: 'ε = hc/λ', isCorrect: true },
          { content: 'ε = hλ/c', isCorrect: false },
          { content: 'ε = c/(hλ)', isCorrect: false },
        ],
      },
      {
        content:
          'Hằng số Planck h có giá trị xấp xỉ:',
        answers: [
          { content: '6,625 × 10⁻³⁴ J·s', isCorrect: true },
          { content: '6,625 × 10⁻²⁴ J·s', isCorrect: false },
          { content: '1,6 × 10⁻¹⁹ J·s', isCorrect: false },
          { content: '9,1 × 10⁻³¹ J·s', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng quang điện ngoài là hiện tượng:',
        answers: [
          { content: 'Electron bị bứt ra khỏi kim loại khi bị chiếu sáng', isCorrect: true },
          { content: 'Electron di chuyển trong chất bán dẫn khi bị chiếu sáng', isCorrect: false },
          { content: 'Kim loại phát sáng khi bị nung nóng', isCorrect: false },
          { content: 'Ánh sáng bị tán sắc qua lăng kính', isCorrect: false },
        ],
      },
      {
        content:
          'Giới hạn quang điện λ₀ của kim loại phụ thuộc vào yếu tố nào?',
        answers: [
          { content: 'Cường độ ánh sáng chiếu vào', isCorrect: false },
          { content: 'Bản chất của kim loại', isCorrect: true },
          { content: 'Bước sóng ánh sáng chiếu vào', isCorrect: false },
          { content: 'Nhiệt độ của kim loại', isCorrect: false },
        ],
      },
      {
        content:
          'Điều kiện để xảy ra hiện tượng quang điện là:',
        answers: [
          { content: 'λ ≥ λ₀', isCorrect: false },
          { content: 'λ ≤ λ₀', isCorrect: true },
          { content: 'f ≤ f₀', isCorrect: false },
          { content: 'Cường độ ánh sáng đủ lớn', isCorrect: false },
        ],
      },
      {
        content:
          'Công thức Einstein về hiện tượng quang điện là:',
        answers: [
          { content: 'hf = A + ½mv²_max', isCorrect: true },
          { content: 'hf = A - ½mv²_max', isCorrect: false },
          { content: 'hf = ½mv²_max', isCorrect: false },
          { content: 'A = hf + ½mv²_max', isCorrect: false },
        ],
      },
      {
        content:
          'Công thoát A của kim loại có giới hạn quang điện λ₀ = 0,66 μm là bao nhiêu? (h = 6,625 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)',
        answers: [
          { content: '3,01 × 10⁻¹⁹ J', isCorrect: true },
          { content: '6,02 × 10⁻¹⁹ J', isCorrect: false },
          { content: '1,5 × 10⁻¹⁹ J', isCorrect: false },
          { content: '9,03 × 10⁻¹⁹ J', isCorrect: false },
        ],
      },
      {
        content:
          'Theo định luật quang điện thứ nhất, cường độ dòng quang điện bão hòa tỉ lệ thuận với:',
        answers: [
          { content: 'Bước sóng ánh sáng kích thích', isCorrect: false },
          { content: 'Tần số ánh sáng kích thích', isCorrect: false },
          { content: 'Cường độ chùm sáng kích thích', isCorrect: true },
          { content: 'Hiệu điện thế giữa anốt và catốt', isCorrect: false },
        ],
      },
      {
        content:
          'Hiệu điện thế hãm U_h trong hiện tượng quang điện phụ thuộc vào:',
        answers: [
          { content: 'Cường độ chùm sáng kích thích', isCorrect: false },
          { content: 'Bước sóng ánh sáng kích thích và bản chất kim loại', isCorrect: true },
          { content: 'Chỉ phụ thuộc bản chất kim loại', isCorrect: false },
          { content: 'Khoảng cách giữa anốt và catốt', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mẫu nguyên tử Bohr, bán kính quỹ đạo dừng thứ n của electron trong nguyên tử hiđrô là:',
        answers: [
          { content: 'rₙ = n·r₀', isCorrect: false },
          { content: 'rₙ = n²·r₀', isCorrect: true },
          { content: 'rₙ = n³·r₀', isCorrect: false },
          { content: 'rₙ = √n·r₀', isCorrect: false },
        ],
      },
      {
        content:
          'Bán kính Bohr r₀ (bán kính quỹ đạo K) có giá trị xấp xỉ:',
        answers: [
          { content: '0,53 × 10⁻¹⁰ m', isCorrect: true },
          { content: '1,06 × 10⁻¹⁰ m', isCorrect: false },
          { content: '0,53 × 10⁻⁸ m', isCorrect: false },
          { content: '5,3 × 10⁻¹⁰ m', isCorrect: false },
        ],
      },
      {
        content:
          'Khi electron trong nguyên tử hiđrô chuyển từ quỹ đạo có năng lượng cao sang quỹ đạo có năng lượng thấp hơn, nguyên tử:',
        answers: [
          { content: 'Hấp thụ phôtôn', isCorrect: false },
          { content: 'Phát ra phôtôn', isCorrect: true },
          { content: 'Không trao đổi năng lượng', isCorrect: false },
          { content: 'Phát ra electron', isCorrect: false },
        ],
      },
      {
        content:
          'Dãy Lyman trong quang phổ hiđrô ứng với các chuyển dời electron về quỹ đạo:',
        answers: [
          { content: 'K (n = 1)', isCorrect: true },
          { content: 'L (n = 2)', isCorrect: false },
          { content: 'M (n = 3)', isCorrect: false },
          { content: 'N (n = 4)', isCorrect: false },
        ],
      },
      {
        content:
          'Dãy Balmer trong quang phổ hiđrô nằm trong vùng nào?',
        answers: [
          { content: 'Hoàn toàn trong vùng tử ngoại', isCorrect: false },
          { content: 'Một phần trong vùng ánh sáng nhìn thấy, một phần trong vùng tử ngoại', isCorrect: true },
          { content: 'Hoàn toàn trong vùng hồng ngoại', isCorrect: false },
          { content: 'Hoàn toàn trong vùng ánh sáng nhìn thấy', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng của nguyên tử hiđrô ở trạng thái dừng thứ n được cho bởi Eₙ = -13,6/n² (eV). Năng lượng cần thiết để ion hóa nguyên tử hiđrô từ trạng thái cơ bản là:',
        answers: [
          { content: '13,6 eV', isCorrect: true },
          { content: '3,4 eV', isCorrect: false },
          { content: '1,51 eV', isCorrect: false },
          { content: '10,2 eV', isCorrect: false },
        ],
      },
      {
        content:
          'Phôtôn có năng lượng 12,09 eV kích thích nguyên tử hiđrô từ trạng thái cơ bản. Electron chuyển lên quỹ đạo nào? (E₁ = -13,6 eV)',
        answers: [
          { content: 'L (n = 2)', isCorrect: false },
          { content: 'M (n = 3)', isCorrect: true },
          { content: 'N (n = 4)', isCorrect: false },
          { content: 'O (n = 5)', isCorrect: false },
        ],
      },
      {
        content:
          'Lưỡng tính sóng-hạt của ánh sáng có nghĩa là:',
        answers: [
          { content: 'Ánh sáng vừa là sóng vừa là hạt cùng lúc', isCorrect: false },
          { content: 'Ánh sáng có tính chất sóng và tính chất hạt, thể hiện tùy hiện tượng', isCorrect: true },
          { content: 'Ánh sáng chỉ có tính chất sóng', isCorrect: false },
          { content: 'Ánh sáng chỉ có tính chất hạt', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng quang điện trong (quang dẫn) xảy ra ở:',
        answers: [
          { content: 'Kim loại', isCorrect: false },
          { content: 'Chất bán dẫn', isCorrect: true },
          { content: 'Chất điện môi', isCorrect: false },
          { content: 'Chân không', isCorrect: false },
        ],
      },
      {
        content:
          'Pin quang điện (pin mặt trời) hoạt động dựa trên hiện tượng:',
        answers: [
          { content: 'Quang điện ngoài', isCorrect: false },
          { content: 'Quang điện trong', isCorrect: true },
          { content: 'Phát quang', isCorrect: false },
          { content: 'Nhiệt điện', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng quang phát quang là hiện tượng:',
        answers: [
          { content: 'Vật phát sáng khi bị nung nóng', isCorrect: false },
          { content: 'Vật hấp thụ ánh sáng rồi phát ra ánh sáng có bước sóng khác', isCorrect: true },
          { content: 'Vật phát sáng do phản ứng hóa học', isCorrect: false },
          { content: 'Vật phát sáng khi có dòng điện chạy qua', isCorrect: false },
        ],
      },
      {
        content:
          'Trong hiện tượng quang phát quang, bước sóng ánh sáng phát quang so với bước sóng ánh sáng kích thích:',
        answers: [
          { content: 'Luôn nhỏ hơn', isCorrect: false },
          { content: 'Luôn lớn hơn', isCorrect: true },
          { content: 'Luôn bằng nhau', isCorrect: false },
          { content: 'Có thể lớn hơn hoặc nhỏ hơn', isCorrect: false },
        ],
      },
      {
        content:
          'Chiếu bức xạ có bước sóng λ = 0,4 μm vào catốt của tế bào quang điện có công thoát A = 2 eV. Động năng ban đầu cực đại của electron quang điện là: (h = 6,625 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s, 1 eV = 1,6 × 10⁻¹⁹ J)',
        answers: [
          { content: '1,11 eV', isCorrect: true },
          { content: '2,11 eV', isCorrect: false },
          { content: '0,5 eV', isCorrect: false },
          { content: '3,11 eV', isCorrect: false },
        ],
      },
      {
        content:
          'Số vạch quang phổ tối đa mà nguyên tử hiđrô có thể phát ra khi electron ở trạng thái kích thích n = 4 chuyển về các trạng thái có năng lượng thấp hơn là:',
        answers: [
          { content: '4', isCorrect: false },
          { content: '6', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '10', isCorrect: false },
        ],
      },
      {
        content:
          'Laser (tia laze) hoạt động dựa trên hiện tượng:',
        answers: [
          { content: 'Phát xạ tự phát', isCorrect: false },
          { content: 'Phát xạ cưỡng bức', isCorrect: true },
          { content: 'Hấp thụ ánh sáng', isCorrect: false },
          { content: 'Quang điện ngoài', isCorrect: false },
        ],
      },
      {
        content:
          'Động lượng của phôtôn có bước sóng λ được tính bằng:',
        answers: [
          { content: 'p = h/λ', isCorrect: true },
          { content: 'p = hλ', isCorrect: false },
          { content: 'p = hc/λ', isCorrect: false },
          { content: 'p = λ/h', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Tổng hợp vật lý hạt nhân, phóng xạ, phản ứng hạt nhân
  // =============================================
  {
    categorySlug: 'on-thi-thpt-vat-ly',
    title: 'Đề ôn thi THPT QG 2025 - Vật Lý - Đề số 4',
    slug: 'on-thi-thpt-vat-ly-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Vật Lý - Đề số 4. Tổng hợp: vật lý hạt nhân, phóng xạ, phản ứng hạt nhân. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Hạt nhân nguyên tử ₉₂²³⁵U có bao nhiêu prôtôn và nơtron?',
        answers: [
          { content: '92 prôtôn và 235 nơtron', isCorrect: false },
          { content: '92 prôtôn và 143 nơtron', isCorrect: true },
          { content: '143 prôtôn và 92 nơtron', isCorrect: false },
          { content: '235 prôtôn và 92 nơtron', isCorrect: false },
        ],
      },
      {
        content:
          'Đơn vị khối lượng nguyên tử u có giá trị xấp xỉ:',
        answers: [
          { content: '1,66054 × 10⁻²⁷ kg', isCorrect: true },
          { content: '9,1 × 10⁻³¹ kg', isCorrect: false },
          { content: '1,67 × 10⁻²⁴ kg', isCorrect: false },
          { content: '1,6 × 10⁻¹⁹ kg', isCorrect: false },
        ],
      },
      {
        content:
          'Lực hạt nhân là lực nào?',
        answers: [
          { content: 'Lực hấp dẫn giữa các nuclôn', isCorrect: false },
          { content: 'Lực tương tác mạnh giữa các nuclôn', isCorrect: true },
          { content: 'Lực điện từ giữa các prôtôn', isCorrect: false },
          { content: 'Lực đẩy Cu-lông giữa các prôtôn', isCorrect: false },
        ],
      },
      {
        content:
          'Độ hụt khối của hạt nhân ᴬ_Z X được tính bằng:',
        answers: [
          { content: 'Δm = Z·mₚ + (A - Z)·mₙ - m_X', isCorrect: true },
          { content: 'Δm = m_X - Z·mₚ - (A - Z)·mₙ', isCorrect: false },
          { content: 'Δm = A·mₚ - m_X', isCorrect: false },
          { content: 'Δm = Z·mₙ + (A - Z)·mₚ - m_X', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng liên kết riêng của hạt nhân là:',
        answers: [
          { content: 'Năng lượng liên kết chia cho số prôtôn', isCorrect: false },
          { content: 'Năng lượng liên kết chia cho số nuclôn', isCorrect: true },
          { content: 'Năng lượng liên kết chia cho số nơtron', isCorrect: false },
          { content: 'Năng lượng liên kết nhân với số nuclôn', isCorrect: false },
        ],
      },
      {
        content:
          'Hạt nhân có năng lượng liên kết riêng càng lớn thì:',
        answers: [
          { content: 'Càng dễ bị phá vỡ', isCorrect: false },
          { content: 'Càng bền vững', isCorrect: true },
          { content: 'Càng không bền', isCorrect: false },
          { content: 'Càng dễ phóng xạ', isCorrect: false },
        ],
      },
      {
        content:
          'Phóng xạ α là quá trình hạt nhân mẹ phát ra:',
        answers: [
          { content: 'Electron', isCorrect: false },
          { content: 'Pôzitron', isCorrect: false },
          { content: 'Hạt nhân ⁴₂He', isCorrect: true },
          { content: 'Nơtron', isCorrect: false },
        ],
      },
      {
        content:
          'Trong phóng xạ β⁻, hạt nhân con so với hạt nhân mẹ có:',
        answers: [
          { content: 'Số khối giảm 4, số prôtôn giảm 2', isCorrect: false },
          { content: 'Số khối không đổi, số prôtôn tăng 1', isCorrect: true },
          { content: 'Số khối không đổi, số prôtôn giảm 1', isCorrect: false },
          { content: 'Số khối giảm 1, số prôtôn không đổi', isCorrect: false },
        ],
      },
      {
        content:
          'Chu kỳ bán rã T của chất phóng xạ là thời gian để:',
        answers: [
          { content: 'Số hạt nhân phóng xạ giảm còn một nửa', isCorrect: true },
          { content: 'Số hạt nhân phóng xạ giảm về 0', isCorrect: false },
          { content: 'Khối lượng chất phóng xạ tăng gấp đôi', isCorrect: false },
          { content: 'Hoạt độ phóng xạ tăng gấp đôi', isCorrect: false },
        ],
      },
      {
        content:
          'Số hạt nhân phóng xạ còn lại sau thời gian t được tính bằng:',
        answers: [
          { content: 'N = N₀·2^(t/T)', isCorrect: false },
          { content: 'N = N₀·2^(-t/T)', isCorrect: true },
          { content: 'N = N₀·e^(t/T)', isCorrect: false },
          { content: 'N = N₀/(t·T)', isCorrect: false },
        ],
      },
      {
        content:
          'Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau 24 ngày, tỉ lệ chất phóng xạ còn lại so với ban đầu là:',
        answers: [
          { content: '1/2', isCorrect: false },
          { content: '1/4', isCorrect: false },
          { content: '1/8', isCorrect: true },
          { content: '1/16', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng hạt nhân tuân theo các định luật bảo toàn nào?',
        answers: [
          { content: 'Bảo toàn số khối A và bảo toàn điện tích Z', isCorrect: true },
          { content: 'Chỉ bảo toàn khối lượng', isCorrect: false },
          { content: 'Chỉ bảo toàn điện tích', isCorrect: false },
          { content: 'Bảo toàn số nơtron', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng phân hạch là phản ứng trong đó:',
        answers: [
          { content: 'Hai hạt nhân nhẹ kết hợp thành hạt nhân nặng', isCorrect: false },
          { content: 'Hạt nhân nặng vỡ thành hai hạt nhân nhẹ hơn', isCorrect: true },
          { content: 'Hạt nhân phát ra tia gamma', isCorrect: false },
          { content: 'Hạt nhân hấp thụ nơtron mà không vỡ', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng nhiệt hạch là phản ứng:',
        answers: [
          { content: 'Phân rã hạt nhân nặng', isCorrect: false },
          { content: 'Tổng hợp các hạt nhân nhẹ thành hạt nhân nặng hơn ở nhiệt độ rất cao', isCorrect: true },
          { content: 'Hấp thụ nơtron chậm', isCorrect: false },
          { content: 'Phóng xạ tự nhiên', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng tỏa ra trong phản ứng hạt nhân được tính bằng:',
        answers: [
          { content: 'E = Δm·c (Δm là độ hụt khối)', isCorrect: false },
          { content: 'E = Δm·c² (Δm > 0 là độ chênh khối lượng trước và sau)', isCorrect: true },
          { content: 'E = m·c²', isCorrect: false },
          { content: 'E = Δm/c²', isCorrect: false },
        ],
      },
      {
        content:
          'Trong phản ứng phân hạch ²³⁵U, ngoài hai mảnh hạt nhân con, còn giải phóng:',
        answers: [
          { content: 'Các electron', isCorrect: false },
          { content: 'Các prôtôn', isCorrect: false },
          { content: 'Các nơtron và năng lượng lớn', isCorrect: true },
          { content: 'Các hạt α', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng dây chuyền xảy ra khi hệ số nhân nơtron k thỏa mãn:',
        answers: [
          { content: 'k < 1', isCorrect: false },
          { content: 'k ≥ 1', isCorrect: true },
          { content: 'k = 0', isCorrect: false },
          { content: 'k < 0', isCorrect: false },
        ],
      },
      {
        content:
          'Trong nhà máy điện hạt nhân, năng lượng hạt nhân được chuyển hóa thành:',
        answers: [
          { content: 'Trực tiếp thành điện năng', isCorrect: false },
          { content: 'Nhiệt năng rồi thành điện năng', isCorrect: true },
          { content: 'Quang năng rồi thành điện năng', isCorrect: false },
          { content: 'Hóa năng rồi thành điện năng', isCorrect: false },
        ],
      },
      {
        content:
          'Hoạt độ phóng xạ H của mẫu chất phóng xạ được tính bằng:',
        answers: [
          { content: 'H = λN (λ là hằng số phóng xạ, N là số hạt nhân)', isCorrect: true },
          { content: 'H = N/λ', isCorrect: false },
          { content: 'H = λ/N', isCorrect: false },
          { content: 'H = N·T', isCorrect: false },
        ],
      },
      {
        content:
          'Đơn vị đo hoạt độ phóng xạ trong hệ SI là:',
        answers: [
          { content: 'Curi (Ci)', isCorrect: false },
          { content: 'Becquerel (Bq)', isCorrect: true },
          { content: 'Gray (Gy)', isCorrect: false },
          { content: 'Sievert (Sv)', isCorrect: false },
        ],
      },
      {
        content:
          'Hằng số phóng xạ λ liên hệ với chu kỳ bán rã T bởi công thức:',
        answers: [
          { content: 'λ = ln2/T', isCorrect: true },
          { content: 'λ = T/ln2', isCorrect: false },
          { content: 'λ = 2/T', isCorrect: false },
          { content: 'λ = T·ln2', isCorrect: false },
        ],
      },
      {
        content:
          'Phóng xạ γ có bản chất là:',
        answers: [
          { content: 'Dòng electron', isCorrect: false },
          { content: 'Dòng hạt nhân heli', isCorrect: false },
          { content: 'Sóng điện từ có bước sóng rất ngắn', isCorrect: true },
          { content: 'Dòng pôzitron', isCorrect: false },
        ],
      },
      {
        content:
          'Cho phản ứng: ²₁H + ³₁H → ⁴₂He + ¹₀n. Đây là phản ứng:',
        answers: [
          { content: 'Phân hạch', isCorrect: false },
          { content: 'Nhiệt hạch', isCorrect: true },
          { content: 'Phóng xạ α', isCorrect: false },
          { content: 'Phóng xạ β', isCorrect: false },
        ],
      },
      {
        content:
          'Đồng vị phóng xạ ¹⁴C có chu kỳ bán rã 5730 năm. Phương pháp xác định tuổi cổ vật bằng ¹⁴C dựa trên:',
        answers: [
          { content: 'Đo khối lượng mẫu vật', isCorrect: false },
          { content: 'Đo tỉ lệ ¹⁴C/¹²C còn lại trong mẫu vật', isCorrect: true },
          { content: 'Đo nhiệt độ mẫu vật', isCorrect: false },
          { content: 'Đo độ cứng mẫu vật', isCorrect: false },
        ],
      },
      {
        content:
          'Trong phóng xạ β⁺, hạt nhân mẹ phát ra:',
        answers: [
          { content: 'Electron và phản nơtrinô', isCorrect: false },
          { content: 'Pôzitron và nơtrinô', isCorrect: true },
          { content: 'Hạt α', isCorrect: false },
          { content: 'Nơtron', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Tổng hợp đề thi thử: dao động, sóng, điện xoay chiều, quang, hạt nhân
  // =============================================
  {
    categorySlug: 'on-thi-thpt-vat-ly',
    title: 'Đề ôn thi THPT QG 2025 - Vật Lý - Đề số 5',
    slug: 'on-thi-thpt-vat-ly-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Vật Lý - Đề số 5. Tổng hợp đề thi thử: dao động, sóng, điện xoay chiều, quang, hạt nhân. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Một vật dao động điều hòa với phương trình x = 6cos(10πt + π/3) cm. Tần số dao động là:',
        answers: [
          { content: '10π Hz', isCorrect: false },
          { content: '5 Hz', isCorrect: true },
          { content: '10 Hz', isCorrect: false },
          { content: '2,5 Hz', isCorrect: false },
        ],
      },
      {
        content:
          'Con lắc đơn có chiều dài l dao động tại nơi có gia tốc trọng trường g. Nếu đưa con lắc lên độ cao h (g giảm) thì chu kỳ dao động:',
        answers: [
          { content: 'Tăng', isCorrect: true },
          { content: 'Giảm', isCorrect: false },
          { content: 'Không đổi', isCorrect: false },
          { content: 'Có thể tăng hoặc giảm', isCorrect: false },
        ],
      },
      {
        content:
          'Một sóng cơ truyền trên mặt nước có bước sóng 2 cm và tần số 50 Hz. Vận tốc truyền sóng là:',
        answers: [
          { content: '25 cm/s', isCorrect: false },
          { content: '100 cm/s', isCorrect: true },
          { content: '50 cm/s', isCorrect: false },
          { content: '200 cm/s', isCorrect: false },
        ],
      },
      {
        content:
          'Trong giao thoa sóng nước, hai nguồn kết hợp ngược pha. Điểm M dao động cực đại khi hiệu đường đi bằng:',
        answers: [
          { content: 'kλ (k ∈ ℤ)', isCorrect: false },
          { content: '(k + 0,5)λ (k ∈ ℤ)', isCorrect: true },
          { content: 'kλ/2 (k ∈ ℤ)', isCorrect: false },
          { content: '2kλ (k ∈ ℤ)', isCorrect: false },
        ],
      },
      {
        content:
          'Đặt điện áp u = 200cos(100πt) V vào mạch RLC nối tiếp có R = 100 Ω, Z_L = Z_C. Cường độ dòng điện hiệu dụng là:',
        answers: [
          { content: '2 A', isCorrect: false },
          { content: '√2 A', isCorrect: true },
          { content: '1 A', isCorrect: false },
          { content: '2√2 A', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch RLC nối tiếp, điện áp hiệu dụng hai đầu cuộn cảm thuần là U_L = 80 V, hai đầu tụ điện là U_C = 50 V, hai đầu điện trở là U_R = 40 V. Điện áp hiệu dụng hai đầu mạch là:',
        answers: [
          { content: '170 V', isCorrect: false },
          { content: '50 V', isCorrect: true },
          { content: '70 V', isCorrect: false },
          { content: '90 V', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng, khoảng vân i = 1,5 mm. Khoảng cách từ vân sáng bậc 3 đến vân sáng bậc 7 cùng phía so với vân trung tâm là:',
        answers: [
          { content: '4,5 mm', isCorrect: false },
          { content: '6 mm', isCorrect: true },
          { content: '15 mm', isCorrect: false },
          { content: '10,5 mm', isCorrect: false },
        ],
      },
      {
        content:
          'Chiếu ánh sáng có bước sóng λ = 0,5 μm vào catốt kim loại có công thoát A = 1,88 eV. Vận tốc ban đầu cực đại của electron quang điện là: (mₑ = 9,1 × 10⁻³¹ kg)',
        answers: [
          { content: 'Khoảng 4,6 × 10⁵ m/s', isCorrect: true },
          { content: 'Khoảng 9,2 × 10⁵ m/s', isCorrect: false },
          { content: 'Khoảng 2,3 × 10⁵ m/s', isCorrect: false },
          { content: 'Khoảng 6,9 × 10⁵ m/s', isCorrect: false },
        ],
      },
      {
        content:
          'Hạt nhân ²²⁶₈₈Ra phóng xạ α tạo thành hạt nhân con. Hạt nhân con là:',
        answers: [
          { content: '²²²₈₆Rn', isCorrect: true },
          { content: '²²²₈₇Fr', isCorrect: false },
          { content: '²³⁰₉₀Th', isCorrect: false },
          { content: '²²⁶₈₉Ac', isCorrect: false },
        ],
      },
      {
        content:
          'Một chất phóng xạ có chu kỳ bán rã T = 5 ngày. Sau 15 ngày, phần trăm chất phóng xạ đã bị phân rã là:',
        answers: [
          { content: '75%', isCorrect: false },
          { content: '87,5%', isCorrect: true },
          { content: '93,75%', isCorrect: false },
          { content: '50%', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với chu kỳ T = 0,5 s và biên độ A = 8 cm. Vận tốc cực đại của vật là:',
        answers: [
          { content: '16π cm/s', isCorrect: false },
          { content: '32π cm/s', isCorrect: true },
          { content: '8π cm/s', isCorrect: false },
          { content: '64π cm/s', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng dừng trên dây có một đầu cố định, một đầu tự do, chiều dài dây l = 75 cm, bước sóng λ = 60 cm. Số bụng sóng trên dây là:',
        answers: [
          { content: '2', isCorrect: false },
          { content: '3', isCorrect: true },
          { content: '4', isCorrect: false },
          { content: '5', isCorrect: false },
        ],
      },
      {
        content:
          'Máy biến áp lý tưởng có cuộn sơ cấp 500 vòng, cuộn thứ cấp 2500 vòng. Dòng điện hiệu dụng qua cuộn sơ cấp là 10 A. Dòng điện hiệu dụng qua cuộn thứ cấp là:',
        answers: [
          { content: '50 A', isCorrect: false },
          { content: '2 A', isCorrect: true },
          { content: '5 A', isCorrect: false },
          { content: '25 A', isCorrect: false },
        ],
      },
      {
        content:
          'Tia hồng ngoại được phát ra mạnh nhất bởi:',
        answers: [
          { content: 'Vật có nhiệt độ rất thấp', isCorrect: false },
          { content: 'Vật bị nung nóng', isCorrect: true },
          { content: 'Vật phát quang', isCorrect: false },
          { content: 'Ống tia X', isCorrect: false },
        ],
      },
      {
        content:
          'Trong quang phổ hiđrô, bước sóng dài nhất của dãy Lyman ứng với chuyển dời:',
        answers: [
          { content: 'n = 2 → n = 1', isCorrect: true },
          { content: 'n = 3 → n = 1', isCorrect: false },
          { content: 'n = 3 → n = 2', isCorrect: false },
          { content: 'n = ∞ → n = 1', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng liên kết của hạt nhân ⁴₂He là 28,3 MeV. Năng lượng liên kết riêng của nó là:',
        answers: [
          { content: '14,15 MeV/nuclôn', isCorrect: false },
          { content: '7,075 MeV/nuclôn', isCorrect: true },
          { content: '9,43 MeV/nuclôn', isCorrect: false },
          { content: '28,3 MeV/nuclôn', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, thời gian ngắn nhất để vật đi từ vị trí cân bằng đến vị trí biên là:',
        answers: [
          { content: 'T/2', isCorrect: false },
          { content: 'T/4', isCorrect: true },
          { content: 'T/8', isCorrect: false },
          { content: 'T/6', isCorrect: false },
        ],
      },
      {
        content:
          'Một mạch RLC nối tiếp có R = 50 Ω, L = 0,5/π H, C = 10⁻⁴/π F, đặt vào điện áp u = 100√2·cos(100πt) V. Công suất tiêu thụ của mạch là:',
        answers: [
          { content: '100 W', isCorrect: true },
          { content: '200 W', isCorrect: false },
          { content: '50 W', isCorrect: false },
          { content: '150 W', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Y-âng, dùng đồng thời hai ánh sáng đơn sắc λ₁ = 0,4 μm và λ₂ = 0,6 μm. Trên màn, vân sáng trùng nhau của hai hệ vân gần vân trung tâm nhất ứng với vân sáng bậc mấy của λ₁?',
        answers: [
          { content: 'Bậc 2', isCorrect: false },
          { content: 'Bậc 3', isCorrect: true },
          { content: 'Bậc 4', isCorrect: false },
          { content: 'Bậc 6', isCorrect: false },
        ],
      },
      {
        content:
          'Phôtôn có năng lượng 2,5 eV. Bước sóng tương ứng của phôtôn này là: (h = 6,625 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)',
        answers: [
          { content: '0,497 μm', isCorrect: true },
          { content: '0,662 μm', isCorrect: false },
          { content: '0,248 μm', isCorrect: false },
          { content: '0,994 μm', isCorrect: false },
        ],
      },
      {
        content:
          'Cho phản ứng: ¹⁴₇N + ⁴₂He → ¹⁷₈O + X. Hạt X là:',
        answers: [
          { content: 'Nơtron', isCorrect: false },
          { content: 'Prôtôn', isCorrect: true },
          { content: 'Electron', isCorrect: false },
          { content: 'Pôzitron', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch dao động LC lý tưởng, khi năng lượng điện trường trong tụ cực đại thì năng lượng từ trường trong cuộn cảm:',
        answers: [
          { content: 'Cực đại', isCorrect: false },
          { content: 'Bằng không', isCorrect: true },
          { content: 'Bằng một nửa năng lượng điện trường', isCorrect: false },
          { content: 'Bằng năng lượng điện trường', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc lò xo treo thẳng đứng, vật có khối lượng m = 100 g, lò xo có độ cứng k = 40 N/m. Lấy g = 10 m/s². Độ dãn của lò xo tại vị trí cân bằng là:',
        answers: [
          { content: '2,5 cm', isCorrect: true },
          { content: '5 cm', isCorrect: false },
          { content: '1,25 cm', isCorrect: false },
          { content: '10 cm', isCorrect: false },
        ],
      },
      {
        content:
          'Tia X được tạo ra bằng cách nào?',
        answers: [
          { content: 'Nung nóng kim loại', isCorrect: false },
          { content: 'Cho chùm electron có năng lượng lớn đập vào kim loại có nguyên tử lượng lớn', isCorrect: true },
          { content: 'Chiếu tia tử ngoại vào kim loại', isCorrect: false },
          { content: 'Cho dòng điện qua chất khí ở áp suất thấp', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng phản xạ sóng tại đầu tự do có đặc điểm gì?',
        answers: [
          { content: 'Sóng phản xạ ngược pha với sóng tới', isCorrect: false },
          { content: 'Sóng phản xạ cùng pha với sóng tới', isCorrect: true },
          { content: 'Sóng phản xạ vuông pha với sóng tới', isCorrect: false },
          { content: 'Không có sóng phản xạ', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
