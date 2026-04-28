import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Dao động cơ
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-vat-ly',
    title: 'Đề trắc nghiệm Vật Lý 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-vat-ly-de-1',
    description:
      'Đề trắc nghiệm Vật Lý 12 chủ đề Dao động cơ: con lắc đơn, con lắc lò xo, dao động điều hòa, chu kỳ, tần số, biên độ, năng lượng dao động.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content:
          'Một vật dao động điều hòa với phương trình x = 5cos(2πt) cm. Biên độ dao động của vật là bao nhiêu?',
        answers: [
          { content: '2π cm', isCorrect: false },
          { content: '5 cm', isCorrect: true },
          { content: '10 cm', isCorrect: false },
          { content: '2,5 cm', isCorrect: false },
        ],
      },
      {
        content:
          'Chu kỳ dao động của con lắc đơn có chiều dài l tại nơi có gia tốc trọng trường g được tính bằng công thức nào?',
        answers: [
          { content: 'T = 2π√(g/l)', isCorrect: false },
          { content: 'T = 2π√(l/g)', isCorrect: true },
          { content: 'T = π√(l/g)', isCorrect: false },
          { content: 'T = 2π·l/g', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với phương trình x = 4cos(5πt + π/3) cm. Tần số góc của dao động là bao nhiêu?',
        answers: [
          { content: '4 rad/s', isCorrect: false },
          { content: '5 rad/s', isCorrect: false },
          { content: '5π rad/s', isCorrect: true },
          { content: 'π/3 rad/s', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, vận tốc của vật đạt giá trị cực đại khi vật ở vị trí nào?',
        answers: [
          { content: 'Vị trí biên dương', isCorrect: false },
          { content: 'Vị trí biên âm', isCorrect: false },
          { content: 'Vị trí cân bằng', isCorrect: true },
          { content: 'Vị trí bất kỳ', isCorrect: false },
        ],
      },
      {
        content:
          'Con lắc lò xo gồm vật có khối lượng m và lò xo có độ cứng k. Chu kỳ dao động riêng của con lắc là bao nhiêu?',
        answers: [
          { content: 'T = 2π√(k/m)', isCorrect: false },
          { content: 'T = 2π√(m/k)', isCorrect: true },
          { content: 'T = π√(m/k)', isCorrect: false },
          { content: 'T = 2π·m/k', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với biên độ A và tần số góc ω. Vận tốc cực đại của vật là bao nhiêu?',
        answers: [
          { content: 'vmax = ωA', isCorrect: true },
          { content: 'vmax = ω²A', isCorrect: false },
          { content: 'vmax = ωA²', isCorrect: false },
          { content: 'vmax = A/ω', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng dao động điều hòa của con lắc lò xo có biên độ A và độ cứng k được tính bằng công thức nào?',
        answers: [
          { content: 'W = kA', isCorrect: false },
          { content: 'W = kA²', isCorrect: false },
          { content: 'W = ½kA²', isCorrect: true },
          { content: 'W = 2kA²', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, gia tốc của vật luôn hướng về đâu?',
        answers: [
          { content: 'Hướng theo chiều chuyển động', isCorrect: false },
          { content: 'Hướng về vị trí cân bằng', isCorrect: true },
          { content: 'Hướng ra xa vị trí cân bằng', isCorrect: false },
          { content: 'Hướng vuông góc với phương dao động', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc đơn có chiều dài 1 m dao động tại nơi có g = 10 m/s². Chu kỳ dao động nhỏ của con lắc xấp xỉ bằng bao nhiêu?',
        answers: [
          { content: '1 s', isCorrect: false },
          { content: '2 s', isCorrect: true },
          { content: '3 s', isCorrect: false },
          { content: '4 s', isCorrect: false },
        ],
      },
      {
        content:
          'Khi tăng khối lượng vật treo trong con lắc lò xo lên 4 lần thì chu kỳ dao động thay đổi như thế nào?',
        answers: [
          { content: 'Tăng 4 lần', isCorrect: false },
          { content: 'Tăng 2 lần', isCorrect: true },
          { content: 'Giảm 2 lần', isCorrect: false },
          { content: 'Không đổi', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với phương trình x = 6cos(4πt + π/6) cm. Pha ban đầu của dao động là bao nhiêu?',
        answers: [
          { content: '4π rad', isCorrect: false },
          { content: '6 rad', isCorrect: false },
          { content: 'π/6 rad', isCorrect: true },
          { content: 'π/3 rad', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, khi vật ở vị trí biên thì đại lượng nào bằng không?',
        answers: [
          { content: 'Li độ', isCorrect: false },
          { content: 'Gia tốc', isCorrect: false },
          { content: 'Vận tốc', isCorrect: true },
          { content: 'Lực phục hồi', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc lò xo dao động điều hòa với biên độ 10 cm. Khi vật ở vị trí có li độ x = 6 cm, tỉ số giữa động năng và thế năng là bao nhiêu?',
        answers: [
          { content: '9/16', isCorrect: false },
          { content: '16/9', isCorrect: true },
          { content: '3/4', isCorrect: false },
          { content: '4/3', isCorrect: false },
        ],
      },
      {
        content:
          'Dao động cưỡng bức có đặc điểm nào sau đây?',
        answers: [
          { content: 'Biên độ giảm dần theo thời gian', isCorrect: false },
          { content: 'Tần số bằng tần số riêng của hệ', isCorrect: false },
          { content: 'Tần số bằng tần số của lực cưỡng bức', isCorrect: true },
          { content: 'Không cần lực tác dụng để duy trì', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng cộng hưởng xảy ra khi nào?',
        answers: [
          { content: 'Biên độ lực cưỡng bức đạt cực đại', isCorrect: false },
          { content: 'Tần số lực cưỡng bức bằng tần số riêng của hệ', isCorrect: true },
          { content: 'Lực cản bằng không', isCorrect: false },
          { content: 'Vật dao động với biên độ nhỏ nhất', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với tần số f = 2 Hz. Tần số góc ω của dao động là bao nhiêu?',
        answers: [
          { content: '2 rad/s', isCorrect: false },
          { content: '2π rad/s', isCorrect: false },
          { content: '4π rad/s', isCorrect: true },
          { content: 'π rad/s', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, mối liên hệ giữa gia tốc a và li độ x là gì?',
        answers: [
          { content: 'a = ωx', isCorrect: false },
          { content: 'a = -ω²x', isCorrect: true },
          { content: 'a = ω²x', isCorrect: false },
          { content: 'a = -ωx', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc đơn có chiều dài l. Nếu cắt bớt một nửa chiều dài thì chu kỳ dao động thay đổi như thế nào?',
        answers: [
          { content: 'Giảm 2 lần', isCorrect: false },
          { content: 'Giảm √2 lần', isCorrect: true },
          { content: 'Tăng 2 lần', isCorrect: false },
          { content: 'Tăng √2 lần', isCorrect: false },
        ],
      },
      {
        content:
          'Dao động tắt dần là dao động có đặc điểm gì?',
        answers: [
          { content: 'Biên độ tăng dần theo thời gian', isCorrect: false },
          { content: 'Biên độ không đổi theo thời gian', isCorrect: false },
          { content: 'Biên độ giảm dần theo thời gian', isCorrect: true },
          { content: 'Chu kỳ tăng dần theo thời gian', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc lò xo có độ cứng k = 100 N/m, vật nặng m = 1 kg. Tần số dao động riêng của con lắc là bao nhiêu?',
        answers: [
          { content: '10/π Hz', isCorrect: false },
          { content: '5/π Hz', isCorrect: true },
          { content: '10 Hz', isCorrect: false },
          { content: '5 Hz', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dao động điều hòa, thế năng và động năng biến thiên tuần hoàn với tần số bằng bao nhiêu so với tần số dao động?',
        answers: [
          { content: 'Bằng tần số dao động', isCorrect: false },
          { content: 'Bằng hai lần tần số dao động', isCorrect: true },
          { content: 'Bằng một nửa tần số dao động', isCorrect: false },
          { content: 'Bằng bốn lần tần số dao động', isCorrect: false },
        ],
      },
      {
        content:
          'Một vật dao động điều hòa với phương trình x = 8cos(2πt) cm. Vận tốc cực đại của vật là bao nhiêu?',
        answers: [
          { content: '8π cm/s', isCorrect: false },
          { content: '16π cm/s', isCorrect: true },
          { content: '4π cm/s', isCorrect: false },
          { content: '2π cm/s', isCorrect: false },
        ],
      },
      {
        content:
          'Chu kỳ dao động của con lắc đơn phụ thuộc vào yếu tố nào sau đây?',
        answers: [
          { content: 'Khối lượng vật nặng', isCorrect: false },
          { content: 'Biên độ dao động (khi góc lệch nhỏ)', isCorrect: false },
          { content: 'Chiều dài dây treo và gia tốc trọng trường', isCorrect: true },
          { content: 'Vận tốc ban đầu của vật', isCorrect: false },
        ],
      },
      {
        content:
          'Một con lắc lò xo dao động điều hòa. Khi vật đi qua vị trí cân bằng, lò xo có bị biến dạng không (con lắc treo thẳng đứng)?',
        answers: [
          { content: 'Không bị biến dạng', isCorrect: false },
          { content: 'Bị dãn một đoạn bằng Δl₀ = mg/k', isCorrect: true },
          { content: 'Bị nén một đoạn bằng biên độ A', isCorrect: false },
          { content: 'Bị dãn một đoạn bằng biên độ A', isCorrect: false },
        ],
      },
      {
        content:
          'Hai dao động điều hòa cùng phương, cùng tần số, cùng biên độ A và ngược pha nhau. Biên độ dao động tổng hợp là bao nhiêu?',
        answers: [
          { content: '2A', isCorrect: false },
          { content: 'A', isCorrect: false },
          { content: 'A√2', isCorrect: false },
          { content: '0', isCorrect: true },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Sóng cơ và sóng âm
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-vat-ly',
    title: 'Đề trắc nghiệm Vật Lý 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-vat-ly-de-2',
    description:
      'Đề trắc nghiệm Vật Lý 12 chủ đề Sóng cơ và sóng âm: bước sóng, giao thoa sóng, sóng dừng, cường độ âm, mức cường độ âm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content:
          'Sóng cơ là gì?',
        answers: [
          { content: 'Sự lan truyền của vật chất trong không gian', isCorrect: false },
          { content: 'Sự lan truyền dao động cơ trong môi trường vật chất', isCorrect: true },
          { content: 'Sự lan truyền năng lượng trong chân không', isCorrect: false },
          { content: 'Sự di chuyển của các phần tử môi trường', isCorrect: false },
        ],
      },
      {
        content:
          'Bước sóng là gì?',
        answers: [
          { content: 'Quãng đường sóng truyền được trong một chu kỳ', isCorrect: true },
          { content: 'Khoảng cách giữa hai điểm bất kỳ trên sóng', isCorrect: false },
          { content: 'Quãng đường sóng truyền được trong một giây', isCorrect: false },
          { content: 'Khoảng cách từ nguồn đến điểm xa nhất', isCorrect: false },
        ],
      },
      {
        content:
          'Mối liên hệ giữa bước sóng λ, vận tốc truyền sóng v và tần số f là gì?',
        answers: [
          { content: 'λ = v·f', isCorrect: false },
          { content: 'λ = v/f', isCorrect: true },
          { content: 'λ = f/v', isCorrect: false },
          { content: 'λ = v²/f', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng ngang là sóng có phương dao động như thế nào so với phương truyền sóng?',
        answers: [
          { content: 'Cùng phương với phương truyền sóng', isCorrect: false },
          { content: 'Vuông góc với phương truyền sóng', isCorrect: true },
          { content: 'Tạo góc 45° với phương truyền sóng', isCorrect: false },
          { content: 'Tạo góc bất kỳ với phương truyền sóng', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng dọc truyền được trong những môi trường nào?',
        answers: [
          { content: 'Chỉ trong chất rắn', isCorrect: false },
          { content: 'Chỉ trong chất lỏng và chất khí', isCorrect: false },
          { content: 'Trong cả chất rắn, chất lỏng và chất khí', isCorrect: true },
          { content: 'Chỉ trong chân không', isCorrect: false },
        ],
      },
      {
        content:
          'Trong hiện tượng giao thoa sóng, hai sóng kết hợp là hai sóng có đặc điểm gì?',
        answers: [
          { content: 'Cùng biên độ và cùng tần số', isCorrect: false },
          { content: 'Cùng tần số và hiệu số pha không đổi theo thời gian', isCorrect: true },
          { content: 'Cùng biên độ và cùng pha', isCorrect: false },
          { content: 'Cùng phương truyền và cùng vận tốc', isCorrect: false },
        ],
      },
      {
        content:
          'Trong giao thoa sóng nước với hai nguồn kết hợp cùng pha, điểm M dao động với biên độ cực đại khi hiệu đường đi từ hai nguồn đến M bằng bao nhiêu?',
        answers: [
          { content: 'd₂ - d₁ = (k + 0,5)λ', isCorrect: false },
          { content: 'd₂ - d₁ = kλ (k ∈ ℤ)', isCorrect: true },
          { content: 'd₂ - d₁ = kλ/2', isCorrect: false },
          { content: 'd₂ - d₁ = (2k + 1)λ', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng dừng trên dây có hai đầu cố định. Điều kiện để có sóng dừng là chiều dài dây l phải thỏa mãn điều kiện nào?',
        answers: [
          { content: 'l = kλ (k = 1, 2, 3,...)', isCorrect: false },
          { content: 'l = kλ/2 (k = 1, 2, 3,...)', isCorrect: true },
          { content: 'l = (2k + 1)λ/4 (k = 0, 1, 2,...)', isCorrect: false },
          { content: 'l = kλ/4 (k = 1, 2, 3,...)', isCorrect: false },
        ],
      },
      {
        content:
          'Trên sóng dừng, khoảng cách giữa hai nút sóng liên tiếp bằng bao nhiêu?',
        answers: [
          { content: 'λ', isCorrect: false },
          { content: 'λ/2', isCorrect: true },
          { content: 'λ/4', isCorrect: false },
          { content: '2λ', isCorrect: false },
        ],
      },
      {
        content:
          'Âm thanh không truyền được trong môi trường nào?',
        answers: [
          { content: 'Chất rắn', isCorrect: false },
          { content: 'Chất lỏng', isCorrect: false },
          { content: 'Chất khí', isCorrect: false },
          { content: 'Chân không', isCorrect: true },
        ],
      },
      {
        content:
          'Cường độ âm là đại lượng đo bằng gì?',
        answers: [
          { content: 'Năng lượng âm truyền qua một đơn vị diện tích trong một đơn vị thời gian', isCorrect: true },
          { content: 'Biên độ dao động của sóng âm', isCorrect: false },
          { content: 'Tần số dao động của sóng âm', isCorrect: false },
          { content: 'Vận tốc truyền âm trong môi trường', isCorrect: false },
        ],
      },
      {
        content:
          'Mức cường độ âm được tính bằng công thức L = 10·lg(I/I₀). Đơn vị của mức cường độ âm là gì?',
        answers: [
          { content: 'W/m²', isCorrect: false },
          { content: 'Hz', isCorrect: false },
          { content: 'dB (đêxiben)', isCorrect: true },
          { content: 'm/s', isCorrect: false },
        ],
      },
      {
        content:
          'Tai người nghe được âm có tần số trong khoảng nào?',
        answers: [
          { content: '16 Hz đến 20 000 Hz', isCorrect: true },
          { content: '20 Hz đến 200 000 Hz', isCorrect: false },
          { content: '0 Hz đến 16 Hz', isCorrect: false },
          { content: '20 000 Hz đến 1 GHz', isCorrect: false },
        ],
      },
      {
        content:
          'Hạ âm là âm có tần số như thế nào?',
        answers: [
          { content: 'Nhỏ hơn 16 Hz', isCorrect: true },
          { content: 'Lớn hơn 20 000 Hz', isCorrect: false },
          { content: 'Từ 16 Hz đến 20 000 Hz', isCorrect: false },
          { content: 'Từ 1 000 Hz đến 5 000 Hz', isCorrect: false },
        ],
      },
      {
        content:
          'Vận tốc truyền âm trong môi trường nào là lớn nhất?',
        answers: [
          { content: 'Chất khí', isCorrect: false },
          { content: 'Chất lỏng', isCorrect: false },
          { content: 'Chất rắn', isCorrect: true },
          { content: 'Chân không', isCorrect: false },
        ],
      },
      {
        content:
          'Một sóng cơ có tần số 50 Hz truyền trong môi trường với vận tốc 100 m/s. Bước sóng của sóng này là bao nhiêu?',
        answers: [
          { content: '0,5 m', isCorrect: false },
          { content: '2 m', isCorrect: true },
          { content: '5 m', isCorrect: false },
          { content: '50 m', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm giao thoa sóng nước, hai nguồn kết hợp cùng pha có tần số 20 Hz, vận tốc truyền sóng 60 cm/s. Khoảng cách giữa hai vân cực đại liên tiếp trên đoạn nối hai nguồn là bao nhiêu?',
        answers: [
          { content: '3 cm', isCorrect: false },
          { content: '1,5 cm', isCorrect: true },
          { content: '6 cm', isCorrect: false },
          { content: '0,75 cm', isCorrect: false },
        ],
      },
      {
        content:
          'Một dây đàn dài 60 cm, hai đầu cố định, dao động với tần số 500 Hz tạo sóng dừng có 3 bụng sóng. Vận tốc truyền sóng trên dây là bao nhiêu?',
        answers: [
          { content: '100 m/s', isCorrect: false },
          { content: '200 m/s', isCorrect: true },
          { content: '300 m/s', isCorrect: false },
          { content: '150 m/s', isCorrect: false },
        ],
      },
      {
        content:
          'Đặc trưng vật lý nào của âm quyết định độ cao của âm?',
        answers: [
          { content: 'Biên độ', isCorrect: false },
          { content: 'Tần số', isCorrect: true },
          { content: 'Cường độ âm', isCorrect: false },
          { content: 'Đồ thị dao động', isCorrect: false },
        ],
      },
      {
        content:
          'Đặc trưng vật lý nào của âm quyết định âm sắc?',
        answers: [
          { content: 'Tần số', isCorrect: false },
          { content: 'Biên độ', isCorrect: false },
          { content: 'Đồ thị dao động (dạng sóng)', isCorrect: true },
          { content: 'Vận tốc truyền âm', isCorrect: false },
        ],
      },
      {
        content:
          'Khi cường độ âm tăng lên 100 lần thì mức cường độ âm tăng thêm bao nhiêu?',
        answers: [
          { content: '10 dB', isCorrect: false },
          { content: '20 dB', isCorrect: true },
          { content: '100 dB', isCorrect: false },
          { content: '2 dB', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng phản xạ sóng tại đầu cố định có đặc điểm gì?',
        answers: [
          { content: 'Sóng phản xạ cùng pha với sóng tới', isCorrect: false },
          { content: 'Sóng phản xạ ngược pha với sóng tới', isCorrect: true },
          { content: 'Sóng phản xạ vuông pha với sóng tới', isCorrect: false },
          { content: 'Sóng phản xạ có biên độ lớn hơn sóng tới', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng dừng trên dây có một đầu cố định, một đầu tự do. Điều kiện để có sóng dừng là chiều dài dây l phải thỏa mãn điều kiện nào?',
        answers: [
          { content: 'l = kλ/2 (k = 1, 2, 3,...)', isCorrect: false },
          { content: 'l = (2k + 1)λ/4 (k = 0, 1, 2,...)', isCorrect: true },
          { content: 'l = kλ (k = 1, 2, 3,...)', isCorrect: false },
          { content: 'l = kλ/4 (k = 1, 2, 3,...)', isCorrect: false },
        ],
      },
      {
        content:
          'Hiệu ứng Đốp-le (Doppler) xảy ra khi nào?',
        answers: [
          { content: 'Nguồn âm và người nghe đứng yên', isCorrect: false },
          { content: 'Có sự chuyển động tương đối giữa nguồn âm và người nghe', isCorrect: true },
          { content: 'Âm truyền qua hai môi trường khác nhau', isCorrect: false },
          { content: 'Biên độ sóng âm thay đổi', isCorrect: false },
        ],
      },
      {
        content:
          'Một nguồn âm có công suất P phát âm đều theo mọi hướng. Tại điểm cách nguồn một khoảng r, cường độ âm I được tính bằng công thức nào?',
        answers: [
          { content: 'I = P/(2πr²)', isCorrect: false },
          { content: 'I = P/(4πr²)', isCorrect: true },
          { content: 'I = P/(πr²)', isCorrect: false },
          { content: 'I = P/(4πr)', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 3: Dòng điện xoay chiều
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-vat-ly',
    title: 'Đề trắc nghiệm Vật Lý 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-vat-ly-de-3',
    description:
      'Đề trắc nghiệm Vật Lý 12 chủ đề Dòng điện xoay chiều: mạch RLC nối tiếp, công suất, hệ số công suất, máy biến áp, truyền tải điện năng.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content:
          'Dòng điện xoay chiều là dòng điện có đặc điểm gì?',
        answers: [
          { content: 'Cường độ không đổi theo thời gian', isCorrect: false },
          { content: 'Cường độ biến thiên điều hòa theo thời gian', isCorrect: true },
          { content: 'Cường độ tăng dần theo thời gian', isCorrect: false },
          { content: 'Cường độ giảm dần theo thời gian', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch điện xoay chiều chỉ có tụ điện C, dòng điện biến thiên như thế nào so với điện áp?',
        answers: [
          { content: 'Cùng pha với điện áp', isCorrect: false },
          { content: 'Sớm pha π/2 so với điện áp', isCorrect: true },
          { content: 'Trễ pha π/2 so với điện áp', isCorrect: false },
          { content: 'Ngược pha với điện áp', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch điện xoay chiều chỉ có cuộn cảm thuần L, dòng điện biến thiên như thế nào so với điện áp?',
        answers: [
          { content: 'Cùng pha với điện áp', isCorrect: false },
          { content: 'Sớm pha π/2 so với điện áp', isCorrect: false },
          { content: 'Trễ pha π/2 so với điện áp', isCorrect: true },
          { content: 'Ngược pha với điện áp', isCorrect: false },
        ],
      },
      {
        content:
          'Dung kháng của tụ điện C trong mạch xoay chiều có tần số góc ω được tính bằng công thức nào?',
        answers: [
          { content: 'Z_C = ωC', isCorrect: false },
          { content: 'Z_C = 1/(ωC)', isCorrect: true },
          { content: 'Z_C = ω/C', isCorrect: false },
          { content: 'Z_C = C/ω', isCorrect: false },
        ],
      },
      {
        content:
          'Cảm kháng của cuộn cảm thuần L trong mạch xoay chiều có tần số góc ω được tính bằng công thức nào?',
        answers: [
          { content: 'Z_L = ωL', isCorrect: true },
          { content: 'Z_L = 1/(ωL)', isCorrect: false },
          { content: 'Z_L = ω/L', isCorrect: false },
          { content: 'Z_L = L/ω', isCorrect: false },
        ],
      },
      {
        content:
          'Tổng trở của mạch RLC nối tiếp được tính bằng công thức nào?',
        answers: [
          { content: 'Z = R + Z_L + Z_C', isCorrect: false },
          { content: 'Z = √(R² + (Z_L - Z_C)²)', isCorrect: true },
          { content: 'Z = √(R² + Z_L² + Z_C²)', isCorrect: false },
          { content: 'Z = R + |Z_L - Z_C|', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch RLC nối tiếp, hiện tượng cộng hưởng điện xảy ra khi nào?',
        answers: [
          { content: 'R = Z_L + Z_C', isCorrect: false },
          { content: 'Z_L = Z_C', isCorrect: true },
          { content: 'Z_L = R', isCorrect: false },
          { content: 'Z_C = R', isCorrect: false },
        ],
      },
      {
        content:
          'Khi xảy ra cộng hưởng điện trong mạch RLC nối tiếp, tổng trở của mạch bằng bao nhiêu?',
        answers: [
          { content: 'Z = 0', isCorrect: false },
          { content: 'Z = R', isCorrect: true },
          { content: 'Z = Z_L', isCorrect: false },
          { content: 'Z = Z_L + Z_C', isCorrect: false },
        ],
      },
      {
        content:
          'Công suất tiêu thụ trung bình của mạch xoay chiều được tính bằng công thức nào?',
        answers: [
          { content: 'P = UI', isCorrect: false },
          { content: 'P = UI·cosφ', isCorrect: true },
          { content: 'P = UI·sinφ', isCorrect: false },
          { content: 'P = U²/Z', isCorrect: false },
        ],
      },
      {
        content:
          'Hệ số công suất cosφ trong mạch RLC nối tiếp được tính bằng công thức nào?',
        answers: [
          { content: 'cosφ = Z/R', isCorrect: false },
          { content: 'cosφ = R/Z', isCorrect: true },
          { content: 'cosφ = (Z_L - Z_C)/R', isCorrect: false },
          { content: 'cosφ = R/(Z_L - Z_C)', isCorrect: false },
        ],
      },
      {
        content:
          'Máy biến áp hoạt động dựa trên hiện tượng nào?',
        answers: [
          { content: 'Hiện tượng tự cảm', isCorrect: false },
          { content: 'Hiện tượng cảm ứng điện từ', isCorrect: true },
          { content: 'Hiện tượng cộng hưởng điện', isCorrect: false },
          { content: 'Hiện tượng từ trễ', isCorrect: false },
        ],
      },
      {
        content:
          'Máy biến áp lý tưởng có tỉ số giữa điện áp cuộn thứ cấp U₂ và cuộn sơ cấp U₁ bằng gì?',
        answers: [
          { content: 'U₂/U₁ = N₁/N₂', isCorrect: false },
          { content: 'U₂/U₁ = N₂/N₁', isCorrect: true },
          { content: 'U₂/U₁ = N₂²/N₁²', isCorrect: false },
          { content: 'U₂/U₁ = √(N₂/N₁)', isCorrect: false },
        ],
      },
      {
        content:
          'Trong truyền tải điện năng đi xa, để giảm hao phí trên đường dây, biện pháp hiệu quả nhất là gì?',
        answers: [
          { content: 'Giảm điện trở đường dây', isCorrect: false },
          { content: 'Tăng điện áp truyền tải', isCorrect: true },
          { content: 'Giảm chiều dài đường dây', isCorrect: false },
          { content: 'Tăng tiết diện dây dẫn', isCorrect: false },
        ],
      },
      {
        content:
          'Công suất hao phí trên đường dây truyền tải có điện trở R, truyền công suất P với điện áp U được tính bằng công thức nào?',
        answers: [
          { content: 'ΔP = P²R/U²', isCorrect: true },
          { content: 'ΔP = P²U²/R', isCorrect: false },
          { content: 'ΔP = PR/U', isCorrect: false },
          { content: 'ΔP = PU/R', isCorrect: false },
        ],
      },
      {
        content:
          'Giá trị hiệu dụng của dòng điện xoay chiều có cường độ cực đại I₀ được tính bằng công thức nào?',
        answers: [
          { content: 'I = I₀/2', isCorrect: false },
          { content: 'I = I₀/√2', isCorrect: true },
          { content: 'I = I₀·√2', isCorrect: false },
          { content: 'I = I₀/π', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch RLC nối tiếp, khi Z_L > Z_C thì mạch có tính chất gì?',
        answers: [
          { content: 'Mạch có tính dung kháng', isCorrect: false },
          { content: 'Mạch có tính cảm kháng', isCorrect: true },
          { content: 'Mạch cộng hưởng', isCorrect: false },
          { content: 'Mạch có tính thuần trở', isCorrect: false },
        ],
      },
      {
        content:
          'Một mạch RLC nối tiếp có R = 30 Ω, Z_L = 50 Ω, Z_C = 10 Ω. Tổng trở của mạch là bao nhiêu?',
        answers: [
          { content: '90 Ω', isCorrect: false },
          { content: '50 Ω', isCorrect: true },
          { content: '70 Ω', isCorrect: false },
          { content: '40 Ω', isCorrect: false },
        ],
      },
      {
        content:
          'Một mạch RLC nối tiếp có R = 40 Ω, Z_L = 70 Ω, Z_C = 40 Ω. Hệ số công suất của mạch là bao nhiêu?',
        answers: [
          { content: '0,6', isCorrect: false },
          { content: '0,8', isCorrect: true },
          { content: '0,5', isCorrect: false },
          { content: '1,0', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch điện xoay chiều chỉ có điện trở thuần R, dòng điện và điện áp có quan hệ pha như thế nào?',
        answers: [
          { content: 'Cùng pha', isCorrect: true },
          { content: 'Lệch pha π/2', isCorrect: false },
          { content: 'Ngược pha', isCorrect: false },
          { content: 'Lệch pha π/4', isCorrect: false },
        ],
      },
      {
        content:
          'Điện năng tiêu thụ trong mạch xoay chiều chỉ tiêu thụ trên phần tử nào?',
        answers: [
          { content: 'Cuộn cảm thuần', isCorrect: false },
          { content: 'Tụ điện', isCorrect: false },
          { content: 'Điện trở thuần', isCorrect: true },
          { content: 'Cả cuộn cảm và tụ điện', isCorrect: false },
        ],
      },
      {
        content:
          'Một máy biến áp lý tưởng có cuộn sơ cấp 1000 vòng, cuộn thứ cấp 100 vòng. Đặt vào cuộn sơ cấp điện áp 220 V. Điện áp ở cuộn thứ cấp là bao nhiêu?',
        answers: [
          { content: '22 V', isCorrect: true },
          { content: '2200 V', isCorrect: false },
          { content: '110 V', isCorrect: false },
          { content: '44 V', isCorrect: false },
        ],
      },
      {
        content:
          'Tần số dòng điện xoay chiều trong mạng điện sinh hoạt ở Việt Nam là bao nhiêu?',
        answers: [
          { content: '50 Hz', isCorrect: true },
          { content: '60 Hz', isCorrect: false },
          { content: '100 Hz', isCorrect: false },
          { content: '220 Hz', isCorrect: false },
        ],
      },
      {
        content:
          'Một mạch RLC nối tiếp có R = 100 Ω, L = 1/π H, C = 10⁻⁴/(2π) F. Mạch mắc vào nguồn xoay chiều có tần số 50 Hz. Tổng trở của mạch là bao nhiêu?',
        answers: [
          { content: '100 Ω', isCorrect: true },
          { content: '200 Ω', isCorrect: false },
          { content: '100√2 Ω', isCorrect: false },
          { content: '50 Ω', isCorrect: false },
        ],
      },
      {
        content:
          'Khi tăng tần số dòng điện xoay chiều qua mạch chỉ có tụ điện thì cường độ dòng điện thay đổi như thế nào?',
        answers: [
          { content: 'Giảm', isCorrect: false },
          { content: 'Tăng', isCorrect: true },
          { content: 'Không đổi', isCorrect: false },
          { content: 'Tăng rồi giảm', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch RLC nối tiếp, khi xảy ra cộng hưởng thì phát biểu nào sau đây đúng?',
        answers: [
          { content: 'Cường độ dòng điện trong mạch đạt giá trị cực đại', isCorrect: true },
          { content: 'Điện áp hai đầu tụ điện bằng không', isCorrect: false },
          { content: 'Điện áp hai đầu cuộn cảm bằng không', isCorrect: false },
          { content: 'Công suất tiêu thụ của mạch bằng không', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Sóng điện từ và quang học
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-vat-ly',
    title: 'Đề trắc nghiệm Vật Lý 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-vat-ly-de-4',
    description:
      'Đề trắc nghiệm Vật Lý 12 chủ đề Sóng điện từ và quang học: sóng điện từ, tán sắc ánh sáng, giao thoa ánh sáng, quang phổ.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content:
          'Sóng điện từ là gì?',
        answers: [
          { content: 'Sóng cơ truyền trong môi trường vật chất', isCorrect: false },
          { content: 'Điện trường và từ trường biến thiên lan truyền trong không gian', isCorrect: true },
          { content: 'Sóng âm truyền trong chân không', isCorrect: false },
          { content: 'Dòng điện biến thiên trong dây dẫn', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng điện từ có đặc điểm nào sau đây?',
        answers: [
          { content: 'Là sóng dọc', isCorrect: false },
          { content: 'Không truyền được trong chân không', isCorrect: false },
          { content: 'Là sóng ngang', isCorrect: true },
          { content: 'Cần môi trường vật chất để truyền', isCorrect: false },
        ],
      },
      {
        content:
          'Vận tốc truyền sóng điện từ trong chân không bằng bao nhiêu?',
        answers: [
          { content: '3 × 10⁶ m/s', isCorrect: false },
          { content: '3 × 10⁸ m/s', isCorrect: true },
          { content: '3 × 10¹⁰ m/s', isCorrect: false },
          { content: '3 × 10⁵ m/s', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thang sóng điện từ, loại sóng nào có bước sóng dài nhất?',
        answers: [
          { content: 'Tia hồng ngoại', isCorrect: false },
          { content: 'Sóng vô tuyến', isCorrect: true },
          { content: 'Ánh sáng nhìn thấy', isCorrect: false },
          { content: 'Vi sóng', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng tán sắc ánh sáng là gì?',
        answers: [
          { content: 'Hiện tượng ánh sáng bị phản xạ khi gặp mặt gương', isCorrect: false },
          { content: 'Hiện tượng phân tách chùm ánh sáng trắng thành các chùm sáng đơn sắc', isCorrect: true },
          { content: 'Hiện tượng ánh sáng bị hấp thụ bởi vật chất', isCorrect: false },
          { content: 'Hiện tượng ánh sáng truyền thẳng trong môi trường đồng nhất', isCorrect: false },
        ],
      },
      {
        content:
          'Trong quang phổ ánh sáng trắng, ánh sáng đơn sắc nào có bước sóng dài nhất?',
        answers: [
          { content: 'Tím', isCorrect: false },
          { content: 'Đỏ', isCorrect: true },
          { content: 'Lục', isCorrect: false },
          { content: 'Lam', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm giao thoa ánh sáng Young, khoảng vân i được tính bằng công thức nào?',
        answers: [
          { content: 'i = λD/a', isCorrect: true },
          { content: 'i = λa/D', isCorrect: false },
          { content: 'i = aD/λ', isCorrect: false },
          { content: 'i = λ/(aD)', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Young về giao thoa ánh sáng, nếu tăng khoảng cách giữa hai khe thì khoảng vân thay đổi như thế nào?',
        answers: [
          { content: 'Tăng', isCorrect: false },
          { content: 'Giảm', isCorrect: true },
          { content: 'Không đổi', isCorrect: false },
          { content: 'Tăng rồi giảm', isCorrect: false },
        ],
      },
      {
        content:
          'Ánh sáng đơn sắc là ánh sáng có đặc điểm gì?',
        answers: [
          { content: 'Có một bước sóng xác định trong chân không', isCorrect: true },
          { content: 'Có nhiều bước sóng khác nhau', isCorrect: false },
          { content: 'Luôn có màu trắng', isCorrect: false },
          { content: 'Không bị khúc xạ khi qua lăng kính', isCorrect: false },
        ],
      },
      {
        content:
          'Chiết suất của môi trường trong suốt đối với ánh sáng đơn sắc nào là lớn nhất?',
        answers: [
          { content: 'Ánh sáng đỏ', isCorrect: false },
          { content: 'Ánh sáng vàng', isCorrect: false },
          { content: 'Ánh sáng tím', isCorrect: true },
          { content: 'Ánh sáng lục', isCorrect: false },
        ],
      },
      {
        content:
          'Quang phổ liên tục phát ra từ nguồn nào?',
        answers: [
          { content: 'Chất khí ở áp suất thấp bị kích thích', isCorrect: false },
          { content: 'Vật rắn, lỏng hoặc khí ở áp suất cao được nung nóng', isCorrect: true },
          { content: 'Chất khí lạnh hấp thụ ánh sáng trắng', isCorrect: false },
          { content: 'Đèn LED đơn sắc', isCorrect: false },
        ],
      },
      {
        content:
          'Quang phổ vạch phát xạ có đặc điểm gì?',
        answers: [
          { content: 'Gồm các dải màu liên tục từ đỏ đến tím', isCorrect: false },
          { content: 'Gồm các vạch sáng riêng lẻ trên nền tối', isCorrect: true },
          { content: 'Gồm các vạch tối trên nền quang phổ liên tục', isCorrect: false },
          { content: 'Gồm một vạch sáng duy nhất', isCorrect: false },
        ],
      },
      {
        content:
          'Quang phổ vạch hấp thụ có đặc điểm gì?',
        answers: [
          { content: 'Gồm các vạch sáng trên nền tối', isCorrect: false },
          { content: 'Gồm các vạch tối trên nền quang phổ liên tục', isCorrect: true },
          { content: 'Gồm các dải màu liên tục', isCorrect: false },
          { content: 'Không có vạch nào', isCorrect: false },
        ],
      },
      {
        content:
          'Tia hồng ngoại có bước sóng nằm trong khoảng nào?',
        answers: [
          { content: 'Nhỏ hơn 0,38 μm', isCorrect: false },
          { content: 'Từ 0,38 μm đến 0,76 μm', isCorrect: false },
          { content: 'Lớn hơn 0,76 μm', isCorrect: true },
          { content: 'Từ 10⁻¹² m đến 10⁻⁹ m', isCorrect: false },
        ],
      },
      {
        content:
          'Tia tử ngoại có tác dụng nổi bật nào?',
        answers: [
          { content: 'Tác dụng nhiệt mạnh', isCorrect: false },
          { content: 'Gây ra hiện tượng quang điện, kích thích phát quang', isCorrect: true },
          { content: 'Có khả năng xuyên qua vật chất mạnh', isCorrect: false },
          { content: 'Truyền thông tin qua vệ tinh', isCorrect: false },
        ],
      },
      {
        content:
          'Tia X (tia Rơn-ghen) có đặc điểm nào sau đây?',
        answers: [
          { content: 'Bước sóng lớn hơn ánh sáng nhìn thấy', isCorrect: false },
          { content: 'Không xuyên qua được vật chất', isCorrect: false },
          { content: 'Có khả năng đâm xuyên mạnh, bước sóng rất ngắn', isCorrect: true },
          { content: 'Chỉ truyền được trong chân không', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Young, ánh sáng đơn sắc có bước sóng λ = 0,6 μm, khoảng cách hai khe a = 1 mm, khoảng cách từ hai khe đến màn D = 2 m. Khoảng vân là bao nhiêu?',
        answers: [
          { content: '0,6 mm', isCorrect: false },
          { content: '1,2 mm', isCorrect: true },
          { content: '2,4 mm', isCorrect: false },
          { content: '0,3 mm', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Young, vân sáng bậc 3 nằm ở vị trí có tọa độ bằng bao nhiêu?',
        answers: [
          { content: 'x = 2i', isCorrect: false },
          { content: 'x = 3i', isCorrect: true },
          { content: 'x = 2,5i', isCorrect: false },
          { content: 'x = 3,5i', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thí nghiệm Young, vân tối thứ nhất (tính từ vân sáng trung tâm) nằm ở vị trí có tọa độ bằng bao nhiêu?',
        answers: [
          { content: 'x = i', isCorrect: false },
          { content: 'x = i/2', isCorrect: true },
          { content: 'x = 2i', isCorrect: false },
          { content: 'x = 0', isCorrect: false },
        ],
      },
      {
        content:
          'Sóng điện từ nào được sử dụng trong lò vi sóng để nấu chín thức ăn?',
        answers: [
          { content: 'Tia hồng ngoại', isCorrect: false },
          { content: 'Vi sóng (sóng cực ngắn)', isCorrect: true },
          { content: 'Tia tử ngoại', isCorrect: false },
          { content: 'Sóng ngắn', isCorrect: false },
        ],
      },
      {
        content:
          'Mạch dao động LC lý tưởng có tần số dao động riêng được tính bằng công thức nào?',
        answers: [
          { content: 'f = 1/(2π√(LC))', isCorrect: true },
          { content: 'f = 2π√(LC)', isCorrect: false },
          { content: 'f = 1/(2πLC)', isCorrect: false },
          { content: 'f = √(LC)/(2π)', isCorrect: false },
        ],
      },
      {
        content:
          'Trong mạch dao động LC lý tưởng, năng lượng điện trường và năng lượng từ trường biến thiên như thế nào?',
        answers: [
          { content: 'Cùng tăng hoặc cùng giảm', isCorrect: false },
          { content: 'Biến thiên tuần hoàn và chuyển hóa qua lại cho nhau', isCorrect: true },
          { content: 'Năng lượng điện trường luôn lớn hơn năng lượng từ trường', isCorrect: false },
          { content: 'Không thay đổi theo thời gian', isCorrect: false },
        ],
      },
      {
        content:
          'Nguyên tắc hoạt động của ăng-ten thu sóng điện từ dựa trên hiện tượng nào?',
        answers: [
          { content: 'Hiện tượng cộng hưởng điện trong mạch LC', isCorrect: true },
          { content: 'Hiện tượng tán sắc ánh sáng', isCorrect: false },
          { content: 'Hiện tượng phản xạ toàn phần', isCorrect: false },
          { content: 'Hiện tượng quang điện', isCorrect: false },
        ],
      },
      {
        content:
          'Trong thang sóng điện từ, sắp xếp theo thứ tự bước sóng giảm dần là?',
        answers: [
          { content: 'Sóng vô tuyến, hồng ngoại, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma', isCorrect: true },
          { content: 'Tia gamma, tia X, tử ngoại, ánh sáng nhìn thấy, hồng ngoại, sóng vô tuyến', isCorrect: false },
          { content: 'Hồng ngoại, sóng vô tuyến, ánh sáng nhìn thấy, tử ngoại, tia X, tia gamma', isCorrect: false },
          { content: 'Sóng vô tuyến, tử ngoại, hồng ngoại, ánh sáng nhìn thấy, tia X, tia gamma', isCorrect: false },
        ],
      },
      {
        content:
          'Tia hồng ngoại có tác dụng nổi bật nào?',
        answers: [
          { content: 'Gây ra hiện tượng quang điện ở mọi kim loại', isCorrect: false },
          { content: 'Tác dụng nhiệt mạnh', isCorrect: true },
          { content: 'Có khả năng đâm xuyên mạnh', isCorrect: false },
          { content: 'Làm phát quang các chất', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Vật lý hạt nhân
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-vat-ly',
    title: 'Đề trắc nghiệm Vật Lý 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-vat-ly-de-5',
    description:
      'Đề trắc nghiệm Vật Lý 12 chủ đề Vật lý hạt nhân: phóng xạ, phản ứng hạt nhân, năng lượng liên kết, hiện tượng quang điện.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content:
          'Hạt nhân nguyên tử được cấu tạo từ những hạt nào?',
        answers: [
          { content: 'Proton và electron', isCorrect: false },
          { content: 'Proton và nơtron', isCorrect: true },
          { content: 'Nơtron và electron', isCorrect: false },
          { content: 'Proton, nơtron và electron', isCorrect: false },
        ],
      },
      {
        content:
          'Số khối A của hạt nhân bằng gì?',
        answers: [
          { content: 'Số proton Z', isCorrect: false },
          { content: 'Số nơtron N', isCorrect: false },
          { content: 'Tổng số proton và nơtron: A = Z + N', isCorrect: true },
          { content: 'Hiệu số proton và nơtron: A = Z - N', isCorrect: false },
        ],
      },
      {
        content:
          'Đồng vị là những nguyên tử có đặc điểm gì?',
        answers: [
          { content: 'Cùng số khối A, khác số proton Z', isCorrect: false },
          { content: 'Cùng số proton Z, khác số nơtron N', isCorrect: true },
          { content: 'Cùng số nơtron N, khác số proton Z', isCorrect: false },
          { content: 'Cùng số proton Z và cùng số nơtron N', isCorrect: false },
        ],
      },
      {
        content:
          'Phóng xạ là hiện tượng gì?',
        answers: [
          { content: 'Hạt nhân hấp thụ thêm nơtron', isCorrect: false },
          { content: 'Hạt nhân không bền tự phân rã phát ra tia phóng xạ và biến đổi thành hạt nhân khác', isCorrect: true },
          { content: 'Hạt nhân va chạm với nhau', isCorrect: false },
          { content: 'Electron bị bứt ra khỏi nguyên tử', isCorrect: false },
        ],
      },
      {
        content:
          'Tia phóng xạ alpha (α) có bản chất là gì?',
        answers: [
          { content: 'Chùm electron', isCorrect: false },
          { content: 'Chùm hạt nhân Heli ⁴₂He', isCorrect: true },
          { content: 'Sóng điện từ có bước sóng ngắn', isCorrect: false },
          { content: 'Chùm proton', isCorrect: false },
        ],
      },
      {
        content:
          'Tia phóng xạ beta trừ (β⁻) có bản chất là gì?',
        answers: [
          { content: 'Chùm hạt nhân Heli', isCorrect: false },
          { content: 'Chùm electron', isCorrect: true },
          { content: 'Sóng điện từ', isCorrect: false },
          { content: 'Chùm positron', isCorrect: false },
        ],
      },
      {
        content:
          'Tia gamma (γ) có bản chất là gì?',
        answers: [
          { content: 'Chùm hạt mang điện dương', isCorrect: false },
          { content: 'Chùm electron', isCorrect: false },
          { content: 'Sóng điện từ có bước sóng rất ngắn', isCorrect: true },
          { content: 'Chùm nơtron', isCorrect: false },
        ],
      },
      {
        content:
          'Chu kỳ bán rã T là khoảng thời gian để số hạt nhân phóng xạ giảm đi bao nhiêu?',
        answers: [
          { content: 'Giảm đi 1/3', isCorrect: false },
          { content: 'Giảm đi một nửa', isCorrect: true },
          { content: 'Giảm đi 2/3', isCorrect: false },
          { content: 'Giảm đi 1/4', isCorrect: false },
        ],
      },
      {
        content:
          'Công thức tính số hạt nhân còn lại sau thời gian t trong phóng xạ là gì?',
        answers: [
          { content: 'N = N₀·2^(t/T)', isCorrect: false },
          { content: 'N = N₀·2^(-t/T)', isCorrect: true },
          { content: 'N = N₀·e^(t/T)', isCorrect: false },
          { content: 'N = N₀/(t·T)', isCorrect: false },
        ],
      },
      {
        content:
          'Độ hụt khối của hạt nhân là gì?',
        answers: [
          { content: 'Khối lượng của hạt nhân', isCorrect: false },
          { content: 'Hiệu giữa tổng khối lượng các nuclôn riêng lẻ và khối lượng hạt nhân', isCorrect: true },
          { content: 'Tổng khối lượng các proton trong hạt nhân', isCorrect: false },
          { content: 'Khối lượng của electron trong nguyên tử', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng liên kết của hạt nhân được tính bằng công thức nào?',
        answers: [
          { content: 'W_lk = Δm·c', isCorrect: false },
          { content: 'W_lk = Δm·c²', isCorrect: true },
          { content: 'W_lk = Δm/c²', isCorrect: false },
          { content: 'W_lk = Δm·c³', isCorrect: false },
        ],
      },
      {
        content:
          'Hạt nhân nào có năng lượng liên kết riêng lớn nhất (bền vững nhất)?',
        answers: [
          { content: 'Hạt nhân rất nhẹ (H, He)', isCorrect: false },
          { content: 'Hạt nhân có số khối trung bình (khoảng A = 56)', isCorrect: true },
          { content: 'Hạt nhân rất nặng (U, Pu)', isCorrect: false },
          { content: 'Tất cả hạt nhân có năng lượng liên kết riêng như nhau', isCorrect: false },
        ],
      },
      {
        content:
          'Trong phản ứng hạt nhân, đại lượng nào được bảo toàn?',
        answers: [
          { content: 'Số proton và số nơtron riêng biệt', isCorrect: false },
          { content: 'Số khối A và điện tích Z', isCorrect: true },
          { content: 'Khối lượng nghỉ', isCorrect: false },
          { content: 'Số hạt nhân', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng phân hạch là gì?',
        answers: [
          { content: 'Hai hạt nhân nhẹ kết hợp thành hạt nhân nặng hơn', isCorrect: false },
          { content: 'Hạt nhân nặng vỡ thành hai hạt nhân nhẹ hơn kèm theo nơtron', isCorrect: true },
          { content: 'Hạt nhân phát ra tia gamma', isCorrect: false },
          { content: 'Hạt nhân hấp thụ electron', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng nhiệt hạch là gì?',
        answers: [
          { content: 'Hạt nhân nặng vỡ thành hai hạt nhân nhẹ hơn', isCorrect: false },
          { content: 'Hai hạt nhân nhẹ kết hợp thành hạt nhân nặng hơn ở nhiệt độ rất cao', isCorrect: true },
          { content: 'Hạt nhân phát ra tia alpha', isCorrect: false },
          { content: 'Hạt nhân hấp thụ nơtron ở nhiệt độ thấp', isCorrect: false },
        ],
      },
      {
        content:
          'Hiện tượng quang điện ngoài là gì?',
        answers: [
          { content: 'Electron trong kim loại hấp thụ photon và bị bứt ra khỏi bề mặt kim loại', isCorrect: true },
          { content: 'Electron di chuyển từ vùng hóa trị sang vùng dẫn', isCorrect: false },
          { content: 'Ánh sáng bị phản xạ trên bề mặt kim loại', isCorrect: false },
          { content: 'Kim loại phát ra ánh sáng khi bị nung nóng', isCorrect: false },
        ],
      },
      {
        content:
          'Điều kiện để xảy ra hiện tượng quang điện là gì?',
        answers: [
          { content: 'Bước sóng ánh sáng chiếu vào lớn hơn giới hạn quang điện', isCorrect: false },
          { content: 'Bước sóng ánh sáng chiếu vào nhỏ hơn hoặc bằng giới hạn quang điện', isCorrect: true },
          { content: 'Cường độ ánh sáng phải đủ lớn', isCorrect: false },
          { content: 'Thời gian chiếu sáng phải đủ dài', isCorrect: false },
        ],
      },
      {
        content:
          'Công thức Einstein về hiện tượng quang điện là gì?',
        answers: [
          { content: 'hf = A + ½mv²_max', isCorrect: true },
          { content: 'hf = A - ½mv²_max', isCorrect: false },
          { content: 'hf = ½mv²_max', isCorrect: false },
          { content: 'A = hf + ½mv²_max', isCorrect: false },
        ],
      },
      {
        content:
          'Năng lượng của một photon có tần số f được tính bằng công thức nào?',
        answers: [
          { content: 'E = hf', isCorrect: true },
          { content: 'E = h/f', isCorrect: false },
          { content: 'E = hf²', isCorrect: false },
          { content: 'E = f/h', isCorrect: false },
        ],
      },
      {
        content:
          'Một chất phóng xạ có chu kỳ bán rã T = 8 ngày. Sau 24 ngày, tỉ lệ chất phóng xạ còn lại so với ban đầu là bao nhiêu?',
        answers: [
          { content: '1/2', isCorrect: false },
          { content: '1/4', isCorrect: false },
          { content: '1/8', isCorrect: true },
          { content: '1/16', isCorrect: false },
        ],
      },
      {
        content:
          'Trong phóng xạ alpha, hạt nhân con có số khối và số proton thay đổi như thế nào so với hạt nhân mẹ?',
        answers: [
          { content: 'Số khối giảm 4, số proton giảm 2', isCorrect: true },
          { content: 'Số khối giảm 2, số proton giảm 1', isCorrect: false },
          { content: 'Số khối không đổi, số proton tăng 1', isCorrect: false },
          { content: 'Số khối giảm 4, số proton giảm 4', isCorrect: false },
        ],
      },
      {
        content:
          'Trong phóng xạ β⁻, hạt nhân con có số khối và số proton thay đổi như thế nào so với hạt nhân mẹ?',
        answers: [
          { content: 'Số khối không đổi, số proton tăng 1', isCorrect: true },
          { content: 'Số khối giảm 4, số proton giảm 2', isCorrect: false },
          { content: 'Số khối không đổi, số proton giảm 1', isCorrect: false },
          { content: 'Số khối tăng 1, số proton tăng 1', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng hạt nhân nào sau đây là phản ứng phân hạch?',
        answers: [
          { content: '²₁H + ³₁H → ⁴₂He + ¹₀n', isCorrect: false },
          { content: '²³⁵₉₂U + ¹₀n → ¹⁴⁴₅₆Ba + ⁸⁹₃₆Kr + 3¹₀n', isCorrect: true },
          { content: '¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H', isCorrect: false },
          { content: '²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He', isCorrect: false },
        ],
      },
      {
        content:
          'Hằng số Planck h có giá trị xấp xỉ bằng bao nhiêu?',
        answers: [
          { content: '6,625 × 10⁻³⁴ J·s', isCorrect: true },
          { content: '6,625 × 10⁻²⁴ J·s', isCorrect: false },
          { content: '1,6 × 10⁻¹⁹ J·s', isCorrect: false },
          { content: '9,1 × 10⁻³¹ J·s', isCorrect: false },
        ],
      },
      {
        content:
          'Đơn vị khối lượng nguyên tử u (đơn vị cacbon) có giá trị xấp xỉ bằng bao nhiêu?',
        answers: [
          { content: '1,66054 × 10⁻²⁷ kg', isCorrect: true },
          { content: '9,10938 × 10⁻³¹ kg', isCorrect: false },
          { content: '1,67262 × 10⁻²⁷ kg', isCorrect: false },
          { content: '1,6 × 10⁻¹⁹ kg', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
