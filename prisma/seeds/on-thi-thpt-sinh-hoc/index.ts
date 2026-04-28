import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Tổng hợp – Di truyền phân tử, cơ chế di truyền, đột biến
  // =============================================
  {
    categorySlug: 'on-thi-thpt-sinh-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Sinh Học - Đề số 1',
    slug: 'on-thi-thpt-sinh-hoc-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Sinh Học - Đề số 1. Tổng hợp kiến thức di truyền phân tử, cơ chế di truyền ở cấp phân tử và đột biến gen, đột biến nhiễm sắc thể. Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Một gen có chiều dài 5100 Å và có 3900 liên kết hiđrô. Số lượng từng loại nuclêôtit của gen là bao nhiêu?',
        answers: [
          { content: 'A = T = 600, G = X = 900', isCorrect: true },
          { content: 'A = T = 900, G = X = 600', isCorrect: false },
          { content: 'A = T = 500, G = X = 1000', isCorrect: false },
          { content: 'A = T = 700, G = X = 800', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình nhân đôi ADN, enzim nào có vai trò tháo xoắn phân tử ADN?',
        answers: [
          { content: 'ADN pôlimeraza', isCorrect: false },
          { content: 'Hêlicaza', isCorrect: true },
          { content: 'Ligaza', isCorrect: false },
          { content: 'ARN pôlimeraza', isCorrect: false },
        ],
      },
      {
        content: 'Mã di truyền có tính thoái hóa nghĩa là gì?',
        answers: [
          { content: 'Một bộ ba mã hóa cho nhiều axit amin', isCorrect: false },
          { content: 'Nhiều bộ ba cùng mã hóa cho một axit amin', isCorrect: true },
          { content: 'Tất cả các loài đều dùng chung bộ mã di truyền', isCorrect: false },
          { content: 'Mã di truyền được đọc liên tục không gối lên nhau', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình phiên mã, enzim ARN pôlimeraza trượt trên mạch khuôn của gen theo chiều nào?',
        answers: [
          { content: '5\' → 3\'', isCorrect: false },
          { content: '3\' → 5\'', isCorrect: true },
          { content: 'Cả hai chiều', isCorrect: false },
          { content: 'Tùy thuộc vào loại gen', isCorrect: false },
        ],
      },
      {
        content: 'Một phân tử mARN có 900 nuclêôtit (không tính bộ ba kết thúc). Chuỗi pôlipeptit được tổng hợp từ mARN này có bao nhiêu axit amin?',
        answers: [
          { content: '298', isCorrect: false },
          { content: '299', isCorrect: true },
          { content: '300', isCorrect: false },
          { content: '297', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến thay thế một cặp nuclêôtit trong gen có thể dẫn đến hậu quả nào sau đây?',
        answers: [
          { content: 'Luôn làm thay đổi axit amin trong chuỗi pôlipeptit', isCorrect: false },
          { content: 'Có thể không làm thay đổi axit amin do tính thoái hóa của mã di truyền', isCorrect: true },
          { content: 'Luôn gây chết cho sinh vật', isCorrect: false },
          { content: 'Không bao giờ ảnh hưởng đến prôtêin', isCorrect: false },
        ],
      },
      {
        content: 'Trong cơ chế điều hòa hoạt động gen ở sinh vật nhân sơ (mô hình opêron Lac), khi môi trường có lactôzơ thì điều gì xảy ra?',
        answers: [
          { content: 'Prôtêin ức chế bám vào vùng vận hành, gen cấu trúc không phiên mã', isCorrect: false },
          { content: 'Lactôzơ liên kết với prôtêin ức chế, gen cấu trúc được phiên mã', isCorrect: true },
          { content: 'Gen điều hòa ngừng hoạt động', isCorrect: false },
          { content: 'ARN pôlimeraza không gắn vào vùng khởi động', isCorrect: false },
        ],
      },
      {
        content: 'Một gen bị đột biến mất 3 cặp nuclêôtit liên tiếp thuộc cùng một bộ ba. Hậu quả của đột biến này là gì?',
        answers: [
          { content: 'Mất 1 axit amin trong chuỗi pôlipeptit', isCorrect: true },
          { content: 'Thay đổi toàn bộ trình tự axit amin', isCorrect: false },
          { content: 'Chuỗi pôlipeptit không thay đổi', isCorrect: false },
          { content: 'Gen không thể phiên mã', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nào sau đây KHÔNG đúng về quá trình nhân đôi ADN ở sinh vật nhân thực?',
        answers: [
          { content: 'Có nhiều đơn vị tái bản', isCorrect: false },
          { content: 'Diễn ra theo nguyên tắc bổ sung và bán bảo tồn', isCorrect: false },
          { content: 'Chỉ có một loại enzim ADN pôlimeraza tham gia', isCorrect: true },
          { content: 'Mỗi đơn vị tái bản có hai chạc chữ Y', isCorrect: false },
        ],
      },
      {
        content: 'Bộ ba mở đầu trên mARN là gì?',
        answers: [
          { content: 'UAA', isCorrect: false },
          { content: 'AUG', isCorrect: true },
          { content: 'UAG', isCorrect: false },
          { content: 'UGA', isCorrect: false },
        ],
      },
      {
        content: 'Một gen nhân đôi 3 lần liên tiếp. Số phân tử ADN con được tạo ra là bao nhiêu?',
        answers: [
          { content: '6', isCorrect: false },
          { content: '8', isCorrect: true },
          { content: '9', isCorrect: false },
          { content: '16', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến đảo đoạn nhiễm sắc thể có đặc điểm nào sau đây?',
        answers: [
          { content: 'Làm thay đổi số lượng gen trên nhiễm sắc thể', isCorrect: false },
          { content: 'Làm thay đổi trình tự phân bố gen trên nhiễm sắc thể', isCorrect: true },
          { content: 'Làm tăng số lượng nhiễm sắc thể', isCorrect: false },
          { content: 'Làm giảm số lượng gen trên nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Thể đa bội là gì?',
        answers: [
          { content: 'Cơ thể có bộ nhiễm sắc thể tăng lên theo bội số của n và lớn hơn 2n', isCorrect: true },
          { content: 'Cơ thể có bộ nhiễm sắc thể 2n + 1', isCorrect: false },
          { content: 'Cơ thể có bộ nhiễm sắc thể 2n - 1', isCorrect: false },
          { content: 'Cơ thể có bộ nhiễm sắc thể n', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình dịch mã, ribôxôm dịch chuyển trên mARN theo chiều nào?',
        answers: [
          { content: '3\' → 5\'', isCorrect: false },
          { content: '5\' → 3\'', isCorrect: true },
          { content: 'Cả hai chiều', isCorrect: false },
          { content: 'Không dịch chuyển', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến lệch bội dạng 2n + 1 được gọi là gì?',
        answers: [
          { content: 'Thể một', isCorrect: false },
          { content: 'Thể ba', isCorrect: true },
          { content: 'Thể không', isCorrect: false },
          { content: 'Thể bốn', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc bổ sung trong nhân đôi ADN thể hiện ở điều nào?',
        answers: [
          { content: 'A liên kết với U, G liên kết với X', isCorrect: false },
          { content: 'A liên kết với T, G liên kết với X', isCorrect: true },
          { content: 'A liên kết với G, T liên kết với X', isCorrect: false },
          { content: 'A liên kết với X, T liên kết với G', isCorrect: false },
        ],
      },
      {
        content: 'Một gen có 150 vòng xoắn. Tổng số nuclêôtit của gen là bao nhiêu?',
        answers: [
          { content: '1500', isCorrect: false },
          { content: '3000', isCorrect: true },
          { content: '4500', isCorrect: false },
          { content: '6000', isCorrect: false },
        ],
      },
      {
        content: 'Loại đột biến gen nào sau đây KHÔNG làm thay đổi tổng số nuclêôtit của gen?',
        answers: [
          { content: 'Mất một cặp nuclêôtit', isCorrect: false },
          { content: 'Thêm một cặp nuclêôtit', isCorrect: false },
          { content: 'Thay thế một cặp nuclêôtit', isCorrect: true },
          { content: 'Mất hai cặp nuclêôtit', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình phiên mã, mạch mới được tổng hợp theo chiều nào?',
        answers: [
          { content: '3\' → 5\'', isCorrect: false },
          { content: '5\' → 3\'', isCorrect: true },
          { content: 'Tùy thuộc vào gen', isCorrect: false },
          { content: 'Cả hai chiều đồng thời', isCorrect: false },
        ],
      },
      {
        content: 'Hội chứng Đao ở người là do đột biến nào gây ra?',
        answers: [
          { content: 'Thể ba ở cặp nhiễm sắc thể số 21', isCorrect: true },
          { content: 'Thể một ở cặp nhiễm sắc thể giới tính', isCorrect: false },
          { content: 'Mất đoạn nhiễm sắc thể số 5', isCorrect: false },
          { content: 'Đa bội thể 3n', isCorrect: false },
        ],
      },
      {
        content: 'Enzim ligaza có vai trò gì trong quá trình nhân đôi ADN?',
        answers: [
          { content: 'Tháo xoắn phân tử ADN', isCorrect: false },
          { content: 'Tổng hợp đoạn mồi ARN', isCorrect: false },
          { content: 'Nối các đoạn Okazaki lại với nhau', isCorrect: true },
          { content: 'Tổng hợp mạch mới theo chiều 5\' → 3\'', isCorrect: false },
        ],
      },
      {
        content: 'Tác nhân gây đột biến 5-BU (5-brôm uraxin) thường gây ra dạng đột biến gen nào?',
        answers: [
          { content: 'Thay thế cặp A-T bằng cặp G-X', isCorrect: true },
          { content: 'Mất một cặp nuclêôtit', isCorrect: false },
          { content: 'Thêm một cặp nuclêôtit', isCorrect: false },
          { content: 'Đảo vị trí các cặp nuclêôtit', isCorrect: false },
        ],
      },
      {
        content: 'Vùng nào của gen ở sinh vật nhân thực KHÔNG được dịch mã?',
        answers: [
          { content: 'Êxôn', isCorrect: false },
          { content: 'Intrôn', isCorrect: true },
          { content: 'Vùng mã hóa', isCorrect: false },
          { content: 'Bộ ba mở đầu', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến chuyển đoạn tương hỗ giữa hai nhiễm sắc thể không tương đồng sẽ dẫn đến kết quả nào?',
        answers: [
          { content: 'Thay đổi nhóm gen liên kết', isCorrect: true },
          { content: 'Tăng số lượng gen', isCorrect: false },
          { content: 'Giảm số lượng nhiễm sắc thể', isCorrect: false },
          { content: 'Tăng số lượng nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Một gen có 480 ađênin và 720 guanin. Gen này nhân đôi 2 lần liên tiếp. Số nuclêôtit tự do mỗi loại mà môi trường cung cấp là bao nhiêu?',
        answers: [
          { content: 'A = T = 1440, G = X = 2160', isCorrect: true },
          { content: 'A = T = 960, G = X = 1440', isCorrect: false },
          { content: 'A = T = 1920, G = X = 2880', isCorrect: false },
          { content: 'A = T = 480, G = X = 720', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Tổng hợp – Quy luật di truyền Mendel, tương tác gen, liên kết gen
  // =============================================
  {
    categorySlug: 'on-thi-thpt-sinh-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Sinh Học - Đề số 2',
    slug: 'on-thi-thpt-sinh-hoc-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Sinh Học - Đề số 2. Tổng hợp kiến thức quy luật di truyền Mendel, tương tác gen, liên kết gen và hoán vị gen. Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Theo Mendel, phép lai giữa hai cơ thể dị hợp tử một cặp gen (Aa × Aa) cho tỉ lệ kiểu hình ở đời con là bao nhiêu?',
        answers: [
          { content: '1 : 1', isCorrect: false },
          { content: '3 : 1', isCorrect: true },
          { content: '1 : 2 : 1', isCorrect: false },
          { content: '9 : 3 : 3 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phân li độc lập của Mendel được nghiệm đúng khi nào?',
        answers: [
          { content: 'Các gen nằm trên cùng một nhiễm sắc thể', isCorrect: false },
          { content: 'Các gen nằm trên các nhiễm sắc thể khác nhau', isCorrect: true },
          { content: 'Các gen liên kết hoàn toàn', isCorrect: false },
          { content: 'Các gen có hiện tượng hoán vị', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai AaBb × AaBb (các gen phân li độc lập, trội hoàn toàn) cho tỉ lệ kiểu hình ở đời con là bao nhiêu?',
        answers: [
          { content: '3 : 1', isCorrect: false },
          { content: '1 : 1 : 1 : 1', isCorrect: false },
          { content: '9 : 3 : 3 : 1', isCorrect: true },
          { content: '1 : 2 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Tương tác bổ sung giữa hai gen không alen cho tỉ lệ kiểu hình nào ở F2?',
        answers: [
          { content: '9 : 3 : 3 : 1', isCorrect: true },
          { content: '9 : 7', isCorrect: false },
          { content: '13 : 3', isCorrect: false },
          { content: '15 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ lệ kiểu hình 9 : 7 ở F2 là kết quả của kiểu tương tác gen nào?',
        answers: [
          { content: 'Tương tác bổ sung', isCorrect: true },
          { content: 'Tương tác cộng gộp', isCorrect: false },
          { content: 'Tương tác át chế trội', isCorrect: false },
          { content: 'Trội không hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng liên kết gen là gì?',
        answers: [
          { content: 'Các gen trên cùng một nhiễm sắc thể cùng phân li trong giảm phân', isCorrect: true },
          { content: 'Các gen trên các nhiễm sắc thể khác nhau phân li độc lập', isCorrect: false },
          { content: 'Các gen trao đổi chéo với nhau', isCorrect: false },
          { content: 'Một gen quy định nhiều tính trạng', isCorrect: false },
        ],
      },
      {
        content: 'Hoán vị gen xảy ra do hiện tượng nào trong giảm phân?',
        answers: [
          { content: 'Phân li nhiễm sắc thể', isCorrect: false },
          { content: 'Trao đổi chéo giữa các crômatit không chị em', isCorrect: true },
          { content: 'Nhân đôi ADN', isCorrect: false },
          { content: 'Đột biến cấu trúc nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Tần số hoán vị gen được tính bằng công thức nào?',
        answers: [
          { content: 'Tỉ lệ giao tử hoán vị / tổng số giao tử × 100%', isCorrect: true },
          { content: 'Tỉ lệ giao tử liên kết / tổng số giao tử × 100%', isCorrect: false },
          { content: 'Số cá thể hoán vị / tổng số cá thể', isCorrect: false },
          { content: 'Số gen hoán vị / tổng số gen', isCorrect: false },
        ],
      },
      {
        content: 'Ở người, gen quy định bệnh mù màu nằm trên nhiễm sắc thể nào?',
        answers: [
          { content: 'Nhiễm sắc thể thường', isCorrect: false },
          { content: 'Nhiễm sắc thể X', isCorrect: true },
          { content: 'Nhiễm sắc thể Y', isCorrect: false },
          { content: 'Cả X và Y', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai phân tích là phép lai giữa cá thể cần xác định kiểu gen với cá thể nào?',
        answers: [
          { content: 'Cá thể dị hợp tử', isCorrect: false },
          { content: 'Cá thể đồng hợp tử trội', isCorrect: false },
          { content: 'Cá thể đồng hợp tử lặn', isCorrect: true },
          { content: 'Cá thể bất kỳ', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ lệ kiểu hình 13 : 3 ở F2 là kết quả của kiểu tương tác gen nào?',
        answers: [
          { content: 'Tương tác bổ sung', isCorrect: false },
          { content: 'Tương tác át chế trội', isCorrect: true },
          { content: 'Tương tác cộng gộp', isCorrect: false },
          { content: 'Trội hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Gen đa hiệu là gì?',
        answers: [
          { content: 'Nhiều gen cùng quy định một tính trạng', isCorrect: false },
          { content: 'Một gen quy định nhiều tính trạng', isCorrect: true },
          { content: 'Một gen có nhiều alen', isCorrect: false },
          { content: 'Nhiều gen nằm trên cùng một nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Ở đậu Hà Lan, gen A quy định hạt vàng trội hoàn toàn so với gen a quy định hạt xanh. Phép lai Aa × aa cho tỉ lệ kiểu hình ở đời con là bao nhiêu?',
        answers: [
          { content: '3 vàng : 1 xanh', isCorrect: false },
          { content: '1 vàng : 1 xanh', isCorrect: true },
          { content: '100% vàng', isCorrect: false },
          { content: '1 vàng : 3 xanh', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng trội không hoàn toàn cho tỉ lệ kiểu hình ở F2 là bao nhiêu?',
        answers: [
          { content: '3 : 1', isCorrect: false },
          { content: '1 : 2 : 1', isCorrect: true },
          { content: '9 : 3 : 3 : 1', isCorrect: false },
          { content: '1 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ lệ kiểu hình 15 : 1 ở F2 là kết quả của kiểu tương tác gen nào?',
        answers: [
          { content: 'Tương tác bổ sung', isCorrect: false },
          { content: 'Tương tác át chế', isCorrect: false },
          { content: 'Tương tác cộng gộp', isCorrect: true },
          { content: 'Trội hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Di truyền liên kết với giới tính là hiện tượng gì?',
        answers: [
          { content: 'Gen nằm trên nhiễm sắc thể thường', isCorrect: false },
          { content: 'Gen nằm trên nhiễm sắc thể giới tính', isCorrect: true },
          { content: 'Gen quy định giới tính', isCorrect: false },
          { content: 'Tính trạng chỉ biểu hiện ở một giới', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai thuận nghịch là gì?',
        answers: [
          { content: 'Phép lai giữa hai cá thể cùng kiểu gen', isCorrect: false },
          { content: 'Phép lai trong đó vai trò bố mẹ được hoán đổi cho nhau', isCorrect: true },
          { content: 'Phép lai giữa hai cá thể khác loài', isCorrect: false },
          { content: 'Phép lai phân tích', isCorrect: false },
        ],
      },
      {
        content: 'Ở ruồi giấm, gen quy định màu mắt nằm trên nhiễm sắc thể X. Mắt đỏ (W) trội so với mắt trắng (w). Phép lai ♀X^W X^w × ♂X^W Y cho tỉ lệ ruồi mắt trắng ở đời con là bao nhiêu?',
        answers: [
          { content: '25%', isCorrect: true },
          { content: '50%', isCorrect: false },
          { content: '75%', isCorrect: false },
          { content: '0%', isCorrect: false },
        ],
      },
      {
        content: 'Khoảng cách giữa hai gen trên bản đồ di truyền được tính bằng đơn vị nào?',
        answers: [
          { content: 'Ångström', isCorrect: false },
          { content: 'centiMorgan (cM)', isCorrect: true },
          { content: 'Nanômét', isCorrect: false },
          { content: 'Kilôbazơ', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật di truyền nào của Mendel được phát biểu: "Mỗi tính trạng do một cặp nhân tố di truyền quy định, trong quá trình phát sinh giao tử, các nhân tố di truyền phân li đồng đều về các giao tử"?',
        answers: [
          { content: 'Quy luật phân li', isCorrect: true },
          { content: 'Quy luật phân li độc lập', isCorrect: false },
          { content: 'Quy luật đồng tính', isCorrect: false },
          { content: 'Quy luật tương tác gen', isCorrect: false },
        ],
      },
      {
        content: 'Tương tác át chế do gen lặn cho tỉ lệ kiểu hình nào ở F2?',
        answers: [
          { content: '9 : 3 : 3 : 1', isCorrect: false },
          { content: '9 : 3 : 4', isCorrect: true },
          { content: '12 : 3 : 1', isCorrect: false },
          { content: '9 : 7', isCorrect: false },
        ],
      },
      {
        content: 'Ở người, bệnh máu khó đông do gen lặn trên nhiễm sắc thể X quy định. Bố bình thường, mẹ mang gen bệnh. Xác suất sinh con trai bị bệnh là bao nhiêu?',
        answers: [
          { content: '50%', isCorrect: false },
          { content: '25%', isCorrect: true },
          { content: '12,5%', isCorrect: false },
          { content: '75%', isCorrect: false },
        ],
      },
      {
        content: 'Liên kết gen hoàn toàn có đặc điểm nào?',
        answers: [
          { content: 'Làm tăng biến dị tổ hợp', isCorrect: false },
          { content: 'Làm giảm biến dị tổ hợp', isCorrect: true },
          { content: 'Không ảnh hưởng đến biến dị tổ hợp', isCorrect: false },
          { content: 'Tạo ra nhiều kiểu hình mới', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai AaBb × aabb (hai gen liên kết hoàn toàn trên cùng một nhiễm sắc thể, AB/ab × ab/ab) cho tỉ lệ kiểu hình ở đời con là bao nhiêu?',
        answers: [
          { content: '1 : 1 : 1 : 1', isCorrect: false },
          { content: '1 : 1', isCorrect: true },
          { content: '3 : 1', isCorrect: false },
          { content: '9 : 3 : 3 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Ở người, nhóm máu ABO do 3 alen I^A, I^B, I^O quy định. Có bao nhiêu kiểu gen quy định nhóm máu khác nhau trong quần thể?',
        answers: [
          { content: '4', isCorrect: false },
          { content: '6', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '8', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 3: Tổng hợp – Di truyền quần thể, ứng dụng di truyền, công nghệ gen
  // =============================================
  {
    categorySlug: 'on-thi-thpt-sinh-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Sinh Học - Đề số 3',
    slug: 'on-thi-thpt-sinh-hoc-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Sinh Học - Đề số 3. Tổng hợp kiến thức di truyền quần thể, ứng dụng di truyền học và công nghệ gen. Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Định luật Hacđi-Vanbec phát biểu rằng trong quần thể ngẫu phối lớn, tần số alen và thành phần kiểu gen sẽ như thế nào qua các thế hệ?',
        answers: [
          { content: 'Thay đổi liên tục', isCorrect: false },
          { content: 'Không đổi qua các thế hệ khi không có tác động của các nhân tố tiến hóa', isCorrect: true },
          { content: 'Luôn tăng dần', isCorrect: false },
          { content: 'Luôn giảm dần', isCorrect: false },
        ],
      },
      {
        content: 'Một quần thể có cấu trúc di truyền: 0,25AA + 0,50Aa + 0,25aa = 1. Quần thể này có đang ở trạng thái cân bằng Hacđi-Vanbec không?',
        answers: [
          { content: 'Có', isCorrect: true },
          { content: 'Không', isCorrect: false },
          { content: 'Không xác định được', isCorrect: false },
          { content: 'Chỉ cân bằng khi quần thể lớn', isCorrect: false },
        ],
      },
      {
        content: 'Quần thể tự thụ phấn qua nhiều thế hệ sẽ có đặc điểm gì?',
        answers: [
          { content: 'Tăng tỉ lệ dị hợp tử', isCorrect: false },
          { content: 'Giảm tỉ lệ dị hợp tử, tăng tỉ lệ đồng hợp tử', isCorrect: true },
          { content: 'Không thay đổi tần số alen', isCorrect: false },
          { content: 'Tăng đa dạng di truyền', isCorrect: false },
        ],
      },
      {
        content: 'Trong quần thể, tần số alen A = 0,6 và tần số alen a = 0,4. Nếu quần thể ở trạng thái cân bằng Hacđi-Vanbec, tỉ lệ kiểu gen Aa là bao nhiêu?',
        answers: [
          { content: '0,36', isCorrect: false },
          { content: '0,48', isCorrect: true },
          { content: '0,16', isCorrect: false },
          { content: '0,24', isCorrect: false },
        ],
      },
      {
        content: 'Công nghệ gen là gì?',
        answers: [
          { content: 'Quy trình tạo ra sinh vật biến đổi gen bằng cách chuyển gen từ loài này sang loài khác', isCorrect: true },
          { content: 'Phương pháp lai tạo giống mới', isCorrect: false },
          { content: 'Kỹ thuật gây đột biến nhân tạo', isCorrect: false },
          { content: 'Phương pháp nuôi cấy mô tế bào', isCorrect: false },
        ],
      },
      {
        content: 'Trong công nghệ gen, plasmit được sử dụng với vai trò gì?',
        answers: [
          { content: 'Gen cần chuyển', isCorrect: false },
          { content: 'Thể truyền (vectơ)', isCorrect: true },
          { content: 'Enzim cắt giới hạn', isCorrect: false },
          { content: 'Tế bào nhận', isCorrect: false },
        ],
      },
      {
        content: 'Enzim cắt giới hạn (restrictaza) có vai trò gì trong công nghệ gen?',
        answers: [
          { content: 'Nối các đoạn ADN lại với nhau', isCorrect: false },
          { content: 'Cắt ADN tại những vị trí xác định', isCorrect: true },
          { content: 'Nhân đôi ADN', isCorrect: false },
          { content: 'Phiên mã gen', isCorrect: false },
        ],
      },
      {
        content: 'Ưu thế lai là gì?',
        answers: [
          { content: 'Con lai có sức sống kém hơn bố mẹ', isCorrect: false },
          { content: 'Con lai F1 có sức sống, sinh trưởng, phát triển vượt trội so với bố mẹ', isCorrect: true },
          { content: 'Con lai có kiểu gen đồng hợp tử', isCorrect: false },
          { content: 'Con lai luôn giống bố hoặc mẹ', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nào sau đây được dùng để tạo giống cây trồng đa bội?',
        answers: [
          { content: 'Sử dụng cônsixin để ức chế sự hình thành thoi phân bào', isCorrect: true },
          { content: 'Lai xa giữa hai loài', isCorrect: false },
          { content: 'Gây đột biến gen bằng tia UV', isCorrect: false },
          { content: 'Nuôi cấy hạt phấn', isCorrect: false },
        ],
      },
      {
        content: 'Trong chọn giống, phương pháp lai xa kết hợp đa bội hóa nhằm mục đích gì?',
        answers: [
          { content: 'Tạo giống mới mang đặc điểm của hai loài và có khả năng sinh sản', isCorrect: true },
          { content: 'Tạo dòng thuần chủng', isCorrect: false },
          { content: 'Tạo ưu thế lai', isCorrect: false },
          { content: 'Gây đột biến gen', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện nào sau đây KHÔNG phải là điều kiện nghiệm đúng của định luật Hacđi-Vanbec?',
        answers: [
          { content: 'Quần thể có kích thước lớn', isCorrect: false },
          { content: 'Giao phối ngẫu nhiên', isCorrect: false },
          { content: 'Có chọn lọc tự nhiên tác động', isCorrect: true },
          { content: 'Không có đột biến và di nhập gen', isCorrect: false },
        ],
      },
      {
        content: 'Enzim ligaza trong công nghệ gen có vai trò gì?',
        answers: [
          { content: 'Cắt ADN tại vị trí xác định', isCorrect: false },
          { content: 'Nối gen cần chuyển với thể truyền tạo ADN tái tổ hợp', isCorrect: true },
          { content: 'Nhân đôi ADN tái tổ hợp', isCorrect: false },
          { content: 'Phân giải prôtêin', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp tạo giống bằng gây đột biến thường được áp dụng cho đối tượng nào?',
        answers: [
          { content: 'Động vật bậc cao', isCorrect: false },
          { content: 'Vi sinh vật và thực vật', isCorrect: true },
          { content: 'Chỉ áp dụng cho vi sinh vật', isCorrect: false },
          { content: 'Chỉ áp dụng cho động vật', isCorrect: false },
        ],
      },
      {
        content: 'Cừu Đôli được tạo ra bằng phương pháp nào?',
        answers: [
          { content: 'Nhân bản vô tính bằng kỹ thuật chuyển nhân tế bào xôma', isCorrect: true },
          { content: 'Lai xa kết hợp đa bội hóa', isCorrect: false },
          { content: 'Công nghệ gen', isCorrect: false },
          { content: 'Gây đột biến nhân tạo', isCorrect: false },
        ],
      },
      {
        content: 'Trong quần thể tự phối, sau n thế hệ, tỉ lệ dị hợp tử còn lại là bao nhiêu (nếu ban đầu tỉ lệ dị hợp là 100%)?',
        answers: [
          { content: '(1/2)^n', isCorrect: true },
          { content: '1 - (1/2)^n', isCorrect: false },
          { content: '(1/4)^n', isCorrect: false },
          { content: '2^n', isCorrect: false },
        ],
      },
      {
        content: 'Sinh vật biến đổi gen (GMO) là gì?',
        answers: [
          { content: 'Sinh vật có hệ gen bị biến đổi do đột biến tự nhiên', isCorrect: false },
          { content: 'Sinh vật có hệ gen được biến đổi bằng công nghệ gen', isCorrect: true },
          { content: 'Sinh vật được tạo ra bằng phương pháp lai xa', isCorrect: false },
          { content: 'Sinh vật đa bội', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nào sau đây tạo ra nguồn biến dị tổ hợp?',
        answers: [
          { content: 'Gây đột biến bằng tia X', isCorrect: false },
          { content: 'Lai hữu tính', isCorrect: true },
          { content: 'Xử lý cônsixin', isCorrect: false },
          { content: 'Nuôi cấy mô', isCorrect: false },
        ],
      },
      {
        content: 'Trong một quần thể, tần số kiểu gen aa = 0,04. Nếu quần thể ở trạng thái cân bằng Hacđi-Vanbec, tần số alen a là bao nhiêu?',
        answers: [
          { content: '0,04', isCorrect: false },
          { content: '0,2', isCorrect: true },
          { content: '0,4', isCorrect: false },
          { content: '0,02', isCorrect: false },
        ],
      },
      {
        content: 'Kỹ thuật PCR (phản ứng chuỗi pôlimeraza) được sử dụng để làm gì?',
        answers: [
          { content: 'Nhân bản một đoạn ADN cụ thể trong ống nghiệm', isCorrect: true },
          { content: 'Cắt ADN tại vị trí xác định', isCorrect: false },
          { content: 'Nối các đoạn ADN lại với nhau', isCorrect: false },
          { content: 'Xác định trình tự axit amin', isCorrect: false },
        ],
      },
      {
        content: 'Ưu thế lai biểu hiện cao nhất ở thế hệ nào?',
        answers: [
          { content: 'F1', isCorrect: true },
          { content: 'F2', isCorrect: false },
          { content: 'F3', isCorrect: false },
          { content: 'Thế hệ P', isCorrect: false },
        ],
      },
      {
        content: 'Giả thuyết siêu trội giải thích ưu thế lai như thế nào?',
        answers: [
          { content: 'Alen trội có lợi át chế alen lặn có hại', isCorrect: false },
          { content: 'Cơ thể dị hợp tử có kiểu hình vượt trội so với các dạng đồng hợp tử', isCorrect: true },
          { content: 'Các gen trội tích lũy ở con lai', isCorrect: false },
          { content: 'Đột biến tạo ra alen mới có lợi', isCorrect: false },
        ],
      },
      {
        content: 'Trong công nghệ gen, bước đầu tiên của quy trình chuyển gen là gì?',
        answers: [
          { content: 'Tạo ADN tái tổ hợp', isCorrect: true },
          { content: 'Đưa ADN tái tổ hợp vào tế bào nhận', isCorrect: false },
          { content: 'Phân lập dòng tế bào chứa ADN tái tổ hợp', isCorrect: false },
          { content: 'Biểu hiện gen', isCorrect: false },
        ],
      },
      {
        content: 'Quần thể ngẫu phối có đặc điểm di truyền nào?',
        answers: [
          { content: 'Đa dạng về kiểu gen và kiểu hình', isCorrect: true },
          { content: 'Chỉ có kiểu gen đồng hợp tử', isCorrect: false },
          { content: 'Tần số alen thay đổi nhanh qua các thế hệ', isCorrect: false },
          { content: 'Giảm đa dạng di truyền qua các thế hệ', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nuôi cấy hạt phấn hoặc noãn chưa thụ tinh rồi xử lý đa bội hóa nhằm mục đích gì?',
        answers: [
          { content: 'Tạo dòng thuần chủng nhanh', isCorrect: true },
          { content: 'Tạo ưu thế lai', isCorrect: false },
          { content: 'Tạo sinh vật biến đổi gen', isCorrect: false },
          { content: 'Tạo thể đa bội lẻ', isCorrect: false },
        ],
      },
      {
        content: 'Vốn gen của quần thể là gì?',
        answers: [
          { content: 'Tập hợp tất cả các alen của tất cả các gen trong quần thể ở một thời điểm xác định', isCorrect: true },
          { content: 'Tổng số gen của một cá thể', isCorrect: false },
          { content: 'Số lượng nhiễm sắc thể trong quần thể', isCorrect: false },
          { content: 'Tần số kiểu hình trong quần thể', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Tổng hợp – Tiến hóa, bằng chứng tiến hóa, các nhân tố tiến hóa
  // =============================================
  {
    categorySlug: 'on-thi-thpt-sinh-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Sinh Học - Đề số 4',
    slug: 'on-thi-thpt-sinh-hoc-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Sinh Học - Đề số 4. Tổng hợp kiến thức tiến hóa, bằng chứng tiến hóa và các nhân tố tiến hóa theo thuyết tiến hóa tổng hợp hiện đại. Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Theo thuyết tiến hóa tổng hợp hiện đại, đơn vị tiến hóa cơ sở là gì?',
        answers: [
          { content: 'Cá thể', isCorrect: false },
          { content: 'Quần thể', isCorrect: true },
          { content: 'Loài', isCorrect: false },
          { content: 'Quần xã', isCorrect: false },
        ],
      },
      {
        content: 'Nhân tố tiến hóa nào có vai trò cung cấp nguyên liệu sơ cấp cho quá trình tiến hóa?',
        answers: [
          { content: 'Chọn lọc tự nhiên', isCorrect: false },
          { content: 'Đột biến', isCorrect: true },
          { content: 'Di nhập gen', isCorrect: false },
          { content: 'Giao phối không ngẫu nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc tự nhiên có vai trò gì trong tiến hóa?',
        answers: [
          { content: 'Tạo ra các biến dị di truyền', isCorrect: false },
          { content: 'Quy định chiều hướng tiến hóa', isCorrect: true },
          { content: 'Làm thay đổi tần số alen một cách ngẫu nhiên', isCorrect: false },
          { content: 'Cung cấp nguyên liệu cho tiến hóa', isCorrect: false },
        ],
      },
      {
        content: 'Cơ quan tương đồng là gì?',
        answers: [
          { content: 'Các cơ quan có chức năng giống nhau nhưng nguồn gốc khác nhau', isCorrect: false },
          { content: 'Các cơ quan có cùng nguồn gốc nhưng có thể đảm nhận chức năng khác nhau', isCorrect: true },
          { content: 'Các cơ quan đã thoái hóa', isCorrect: false },
          { content: 'Các cơ quan chỉ có ở một loài', isCorrect: false },
        ],
      },
      {
        content: 'Cơ quan tương tự là bằng chứng cho hiện tượng nào?',
        answers: [
          { content: 'Tiến hóa phân li', isCorrect: false },
          { content: 'Tiến hóa đồng quy (hội tụ)', isCorrect: true },
          { content: 'Tiến hóa song hành', isCorrect: false },
          { content: 'Nguồn gốc chung', isCorrect: false },
        ],
      },
      {
        content: 'Biến động di truyền (phiêu bạt gen) thường xảy ra ở quần thể nào?',
        answers: [
          { content: 'Quần thể có kích thước lớn', isCorrect: false },
          { content: 'Quần thể có kích thước nhỏ', isCorrect: true },
          { content: 'Quần thể cân bằng Hacđi-Vanbec', isCorrect: false },
          { content: 'Quần thể ngẫu phối', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức chọn lọc tự nhiên nào giữ lại các cá thể có kiểu hình trung bình, đào thải các cá thể có kiểu hình cực đoan?',
        answers: [
          { content: 'Chọn lọc vận động', isCorrect: false },
          { content: 'Chọn lọc ổn định', isCorrect: true },
          { content: 'Chọn lọc phân hóa', isCorrect: false },
          { content: 'Chọn lọc giới tính', isCorrect: false },
        ],
      },
      {
        content: 'Theo Đacuyn, nguyên liệu chủ yếu cho chọn lọc tự nhiên là gì?',
        answers: [
          { content: 'Đột biến gen', isCorrect: false },
          { content: 'Biến dị cá thể', isCorrect: true },
          { content: 'Đột biến nhiễm sắc thể', isCorrect: false },
          { content: 'Biến dị tổ hợp', isCorrect: false },
        ],
      },
      {
        content: 'Loài mới được hình thành bằng con đường nào phổ biến nhất ở động vật?',
        answers: [
          { content: 'Cách li địa lí (hình thành loài khác khu vực địa lí)', isCorrect: true },
          { content: 'Đa bội hóa', isCorrect: false },
          { content: 'Cách li sinh thái', isCorrect: false },
          { content: 'Lai xa kết hợp đa bội hóa', isCorrect: false },
        ],
      },
      {
        content: 'Tiêu chuẩn nào là quan trọng nhất để phân biệt hai loài sinh sản hữu tính?',
        answers: [
          { content: 'Tiêu chuẩn hình thái', isCorrect: false },
          { content: 'Tiêu chuẩn cách li sinh sản', isCorrect: true },
          { content: 'Tiêu chuẩn sinh hóa', isCorrect: false },
          { content: 'Tiêu chuẩn địa lí', isCorrect: false },
        ],
      },
      {
        content: 'Bằng chứng sinh học phân tử cho thấy tất cả các loài sinh vật đều có chung mã di truyền. Điều này chứng tỏ điều gì?',
        answers: [
          { content: 'Các loài sinh vật có nguồn gốc chung', isCorrect: true },
          { content: 'Các loài sinh vật tiến hóa độc lập', isCorrect: false },
          { content: 'Mã di truyền không có tính phổ biến', isCorrect: false },
          { content: 'Các loài sinh vật không có quan hệ họ hàng', isCorrect: false },
        ],
      },
      {
        content: 'Giao phối không ngẫu nhiên có tác động gì đến quần thể?',
        answers: [
          { content: 'Làm thay đổi tần số alen', isCorrect: false },
          { content: 'Làm thay đổi thành phần kiểu gen theo hướng tăng đồng hợp tử', isCorrect: true },
          { content: 'Tạo ra alen mới', isCorrect: false },
          { content: 'Làm tăng tỉ lệ dị hợp tử', isCorrect: false },
        ],
      },
      {
        content: 'Di nhập gen có tác động gì đến quần thể?',
        answers: [
          { content: 'Chỉ làm tăng tần số alen', isCorrect: false },
          { content: 'Có thể làm thay đổi tần số alen và thành phần kiểu gen của quần thể', isCorrect: true },
          { content: 'Không ảnh hưởng đến quần thể', isCorrect: false },
          { content: 'Chỉ làm giảm tần số alen', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc tự nhiên tác động lên đối tượng nào?',
        answers: [
          { content: 'Alen', isCorrect: false },
          { content: 'Kiểu hình của cá thể', isCorrect: true },
          { content: 'Quần xã', isCorrect: false },
          { content: 'Hệ sinh thái', isCorrect: false },
        ],
      },
      {
        content: 'Hình thành loài bằng con đường đa bội hóa thường gặp ở nhóm sinh vật nào?',
        answers: [
          { content: 'Động vật', isCorrect: false },
          { content: 'Thực vật', isCorrect: true },
          { content: 'Vi khuẩn', isCorrect: false },
          { content: 'Nấm', isCorrect: false },
        ],
      },
      {
        content: 'Cách li trước hợp tử bao gồm những dạng nào?',
        answers: [
          { content: 'Cách li nơi ở, cách li tập tính, cách li thời gian, cách li cơ học', isCorrect: true },
          { content: 'Hợp tử không phát triển, con lai bất thụ', isCorrect: false },
          { content: 'Cách li địa lí', isCorrect: false },
          { content: 'Cách li di truyền', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết tiến hóa của Đacuyn có hạn chế chính là gì?',
        answers: [
          { content: 'Chưa giải thích được nguyên nhân phát sinh biến dị và cơ chế di truyền biến dị', isCorrect: true },
          { content: 'Không thừa nhận vai trò của chọn lọc tự nhiên', isCorrect: false },
          { content: 'Phủ nhận sự tiến hóa', isCorrect: false },
          { content: 'Không đề cập đến biến dị', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng đồng quy tính trạng (tiến hóa hội tụ) là gì?',
        answers: [
          { content: 'Các loài có chung nguồn gốc tiến hóa theo các hướng khác nhau', isCorrect: false },
          { content: 'Các loài khác nguồn gốc sống trong môi trường giống nhau hình thành các đặc điểm tương tự', isCorrect: true },
          { content: 'Các loài cùng loài tiến hóa giống nhau', isCorrect: false },
          { content: 'Các loài có cùng kiểu gen', isCorrect: false },
        ],
      },
      {
        content: 'Nhân tố tiến hóa nào KHÔNG làm thay đổi tần số alen của quần thể?',
        answers: [
          { content: 'Đột biến', isCorrect: false },
          { content: 'Chọn lọc tự nhiên', isCorrect: false },
          { content: 'Giao phối không ngẫu nhiên', isCorrect: true },
          { content: 'Di nhập gen', isCorrect: false },
        ],
      },
      {
        content: 'Cơ quan thoái hóa là gì?',
        answers: [
          { content: 'Cơ quan phát triển không đầy đủ ở cơ thể trưởng thành, là dấu vết của cơ quan tương ứng ở loài tổ tiên', isCorrect: true },
          { content: 'Cơ quan mới xuất hiện trong quá trình tiến hóa', isCorrect: false },
          { content: 'Cơ quan có chức năng quan trọng nhất', isCorrect: false },
          { content: 'Cơ quan tương tự ở các loài khác nhau', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc vận động (chọn lọc định hướng) có đặc điểm gì?',
        answers: [
          { content: 'Bảo tồn các cá thể có kiểu hình trung bình', isCorrect: false },
          { content: 'Đào thải các cá thể có kiểu hình trung bình, giữ lại cá thể có kiểu hình lệch về một phía', isCorrect: true },
          { content: 'Giữ lại cả hai dạng kiểu hình cực đoan', isCorrect: false },
          { content: 'Không làm thay đổi tần số alen', isCorrect: false },
        ],
      },
      {
        content: 'Quá trình hình thành loài mới bằng cách li địa lí diễn ra như thế nào?',
        answers: [
          { content: 'Nhanh chóng trong một thế hệ', isCorrect: false },
          { content: 'Chậm chạp qua nhiều thế hệ trung gian chuyển tiếp', isCorrect: true },
          { content: 'Chỉ xảy ra ở thực vật', isCorrect: false },
          { content: 'Không cần sự tác động của chọn lọc tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Bằng chứng phôi sinh học so sánh cho thấy điều gì?',
        answers: [
          { content: 'Các loài động vật có xương sống có các giai đoạn phát triển phôi giống nhau, chứng tỏ nguồn gốc chung', isCorrect: true },
          { content: 'Các loài sinh vật không có quan hệ họ hàng', isCorrect: false },
          { content: 'Phôi của các loài hoàn toàn khác nhau', isCorrect: false },
          { content: 'Chỉ có động vật có vú mới có phôi giống nhau', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc phân hóa (chọn lọc đứt đoạn) xảy ra khi nào?',
        answers: [
          { content: 'Môi trường sống ổn định', isCorrect: false },
          { content: 'Điều kiện sống thay đổi theo một hướng xác định', isCorrect: false },
          { content: 'Điều kiện sống không đồng nhất, đào thải kiểu hình trung bình, giữ lại các kiểu hình cực đoan', isCorrect: true },
          { content: 'Quần thể có kích thước nhỏ', isCorrect: false },
        ],
      },
      {
        content: 'Theo quan niệm hiện đại, tiến hóa nhỏ là gì?',
        answers: [
          { content: 'Quá trình biến đổi tần số alen và thành phần kiểu gen của quần thể dẫn đến hình thành loài mới', isCorrect: true },
          { content: 'Quá trình hình thành các đơn vị phân loại trên loài', isCorrect: false },
          { content: 'Quá trình phát sinh sự sống', isCorrect: false },
          { content: 'Quá trình tuyệt chủng hàng loạt', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Đề thi thử tổng hợp – Sinh thái học, quần thể, quần xã, hệ sinh thái
  // =============================================
  {
    categorySlug: 'on-thi-thpt-sinh-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Sinh Học - Đề số 5',
    slug: 'on-thi-thpt-sinh-hoc-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Sinh Học - Đề số 5. Đề thi thử tổng hợp kiến thức sinh thái học: quần thể sinh vật, quần xã sinh vật, hệ sinh thái và sinh quyển. Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Quần thể sinh vật là gì?',
        answers: [
          { content: 'Tập hợp các cá thể cùng loài, sống trong cùng một khu vực, ở cùng một thời điểm, có khả năng sinh sản tạo thế hệ mới', isCorrect: true },
          { content: 'Tập hợp các cá thể khác loài sống trong cùng một khu vực', isCorrect: false },
          { content: 'Tập hợp các loài sinh vật sống trong một môi trường', isCorrect: false },
          { content: 'Tập hợp các cá thể cùng loài sống ở các khu vực khác nhau', isCorrect: false },
        ],
      },
      {
        content: 'Mật độ cá thể của quần thể là gì?',
        answers: [
          { content: 'Tổng số cá thể trong quần thể', isCorrect: false },
          { content: 'Số lượng cá thể trên một đơn vị diện tích hoặc thể tích', isCorrect: true },
          { content: 'Tỉ lệ giới tính trong quần thể', isCorrect: false },
          { content: 'Tốc độ tăng trưởng của quần thể', isCorrect: false },
        ],
      },
      {
        content: 'Kiểu tăng trưởng theo hàm số mũ (dạng chữ J) của quần thể xảy ra khi nào?',
        answers: [
          { content: 'Điều kiện môi trường bị giới hạn', isCorrect: false },
          { content: 'Điều kiện môi trường hoàn toàn thuận lợi, không có giới hạn', isCorrect: true },
          { content: 'Quần thể đạt kích thước tối đa', isCorrect: false },
          { content: 'Có sự cạnh tranh gay gắt trong quần thể', isCorrect: false },
        ],
      },
      {
        content: 'Kích thước tối đa mà môi trường có thể duy trì cho quần thể được gọi là gì?',
        answers: [
          { content: 'Kích thước tối thiểu', isCorrect: false },
          { content: 'Sức chứa của môi trường (K)', isCorrect: true },
          { content: 'Tốc độ tăng trưởng nội tại', isCorrect: false },
          { content: 'Mật độ cá thể', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ cạnh tranh cùng loài có ý nghĩa gì?',
        answers: [
          { content: 'Làm suy giảm quần thể', isCorrect: false },
          { content: 'Đảm bảo sự tồn tại và phát triển của quần thể, duy trì mật độ phù hợp', isCorrect: true },
          { content: 'Làm tăng số lượng cá thể không giới hạn', isCorrect: false },
          { content: 'Không có ý nghĩa sinh thái', isCorrect: false },
        ],
      },
      {
        content: 'Quần xã sinh vật là gì?',
        answers: [
          { content: 'Tập hợp các cá thể cùng loài', isCorrect: false },
          { content: 'Tập hợp các quần thể thuộc nhiều loài khác nhau, cùng sống trong một không gian và thời gian xác định', isCorrect: true },
          { content: 'Một hệ sinh thái hoàn chỉnh', isCorrect: false },
          { content: 'Tập hợp các sinh vật sản xuất', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ hỗ trợ giữa các loài trong quần xã bao gồm những mối quan hệ nào?',
        answers: [
          { content: 'Cộng sinh, hội sinh, hợp tác', isCorrect: true },
          { content: 'Cạnh tranh, ký sinh, ăn thịt', isCorrect: false },
          { content: 'Cạnh tranh, cộng sinh, hội sinh', isCorrect: false },
          { content: 'Ký sinh, hợp tác, ăn thịt', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa nấm và tảo trong địa y thuộc dạng quan hệ nào?',
        answers: [
          { content: 'Hội sinh', isCorrect: false },
          { content: 'Cộng sinh', isCorrect: true },
          { content: 'Ký sinh', isCorrect: false },
          { content: 'Cạnh tranh', isCorrect: false },
        ],
      },
      {
        content: 'Chuỗi thức ăn là gì?',
        answers: [
          { content: 'Một dãy các loài sinh vật có quan hệ dinh dưỡng với nhau, mỗi loài là mắt xích thức ăn', isCorrect: true },
          { content: 'Tập hợp tất cả các loài trong quần xã', isCorrect: false },
          { content: 'Mối quan hệ cạnh tranh giữa các loài', isCorrect: false },
          { content: 'Sự trao đổi chất giữa sinh vật và môi trường', isCorrect: false },
        ],
      },
      {
        content: 'Trong hệ sinh thái, sinh vật sản xuất là những sinh vật nào?',
        answers: [
          { content: 'Động vật ăn thực vật', isCorrect: false },
          { content: 'Sinh vật có khả năng tổng hợp chất hữu cơ từ chất vô cơ (chủ yếu là thực vật)', isCorrect: true },
          { content: 'Vi sinh vật phân giải', isCorrect: false },
          { content: 'Động vật ăn thịt', isCorrect: false },
        ],
      },
      {
        content: 'Hiệu suất sinh thái là gì?',
        answers: [
          { content: 'Tỉ lệ phần trăm năng lượng chuyển hóa giữa các bậc dinh dưỡng liên tiếp', isCorrect: true },
          { content: 'Tổng năng lượng của hệ sinh thái', isCorrect: false },
          { content: 'Năng lượng mặt trời chiếu xuống hệ sinh thái', isCorrect: false },
          { content: 'Năng lượng do sinh vật sản xuất tạo ra', isCorrect: false },
        ],
      },
      {
        content: 'Diễn thế sinh thái là gì?',
        answers: [
          { content: 'Quá trình biến đổi tuần tự của quần xã qua các giai đoạn, tương ứng với sự biến đổi của môi trường', isCorrect: true },
          { content: 'Sự thay đổi số lượng cá thể trong quần thể', isCorrect: false },
          { content: 'Sự di cư của các loài', isCorrect: false },
          { content: 'Sự tuyệt chủng của các loài', isCorrect: false },
        ],
      },
      {
        content: 'Diễn thế nguyên sinh bắt đầu từ đâu?',
        answers: [
          { content: 'Môi trường đã có quần xã sinh vật', isCorrect: false },
          { content: 'Môi trường trống trơn chưa có sinh vật', isCorrect: true },
          { content: 'Quần xã đang ở giai đoạn đỉnh cực', isCorrect: false },
          { content: 'Quần xã bị suy thoái', isCorrect: false },
        ],
      },
      {
        content: 'Chu trình sinh địa hóa là gì?',
        answers: [
          { content: 'Sự trao đổi năng lượng trong hệ sinh thái', isCorrect: false },
          { content: 'Sự tuần hoàn vật chất trong tự nhiên, qua quần xã sinh vật và môi trường vô sinh', isCorrect: true },
          { content: 'Sự di chuyển của sinh vật', isCorrect: false },
          { content: 'Sự biến đổi khí hậu', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháp sinh thái, bậc dinh dưỡng nào luôn có sinh khối lớn nhất?',
        answers: [
          { content: 'Sinh vật tiêu thụ bậc 1', isCorrect: false },
          { content: 'Sinh vật sản xuất', isCorrect: true },
          { content: 'Sinh vật tiêu thụ bậc cao nhất', isCorrect: false },
          { content: 'Sinh vật phân giải', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ vật ăn thịt - con mồi có đặc điểm gì?',
        answers: [
          { content: 'Cả hai loài đều có lợi', isCorrect: false },
          { content: 'Số lượng con mồi và vật ăn thịt biến động theo chu kỳ, con mồi thường có số lượng lớn hơn', isCorrect: true },
          { content: 'Vật ăn thịt luôn có số lượng lớn hơn con mồi', isCorrect: false },
          { content: 'Không ảnh hưởng đến số lượng của nhau', isCorrect: false },
        ],
      },
      {
        content: 'Loài ưu thế trong quần xã là loài có đặc điểm gì?',
        answers: [
          { content: 'Có số lượng ít nhất', isCorrect: false },
          { content: 'Có số lượng nhiều, sinh khối lớn, hoạt động mạnh, đóng vai trò quan trọng trong quần xã', isCorrect: true },
          { content: 'Chỉ có mặt ở một quần xã nhất định', isCorrect: false },
          { content: 'Là loài mới xuất hiện', isCorrect: false },
        ],
      },
      {
        content: 'Loài đặc trưng của quần xã là gì?',
        answers: [
          { content: 'Loài có số lượng nhiều nhất', isCorrect: false },
          { content: 'Loài chỉ có ở một quần xã nhất định hoặc có số lượng nhiều hơn hẳn các loài khác', isCorrect: true },
          { content: 'Loài có kích thước lớn nhất', isCorrect: false },
          { content: 'Loài sống lâu nhất', isCorrect: false },
        ],
      },
      {
        content: 'Năng suất sinh học sơ cấp là gì?',
        answers: [
          { content: 'Tổng sản phẩm do sinh vật tiêu thụ tạo ra', isCorrect: false },
          { content: 'Tổng sản phẩm được tạo ra bởi sinh vật sản xuất trong một đơn vị thời gian', isCorrect: true },
          { content: 'Năng lượng mặt trời chiếu xuống', isCorrect: false },
          { content: 'Tổng sinh khối của quần xã', isCorrect: false },
        ],
      },
      {
        content: 'Hệ sinh thái bao gồm những thành phần nào?',
        answers: [
          { content: 'Chỉ có quần xã sinh vật', isCorrect: false },
          { content: 'Quần xã sinh vật và sinh cảnh (môi trường vô sinh)', isCorrect: true },
          { content: 'Chỉ có môi trường vô sinh', isCorrect: false },
          { content: 'Chỉ có sinh vật sản xuất và sinh vật tiêu thụ', isCorrect: false },
        ],
      },
      {
        content: 'Trong chu trình cacbon, CO₂ được trả lại khí quyển chủ yếu qua con đường nào?',
        answers: [
          { content: 'Quang hợp', isCorrect: false },
          { content: 'Hô hấp của sinh vật và đốt cháy nhiên liệu hóa thạch', isCorrect: true },
          { content: 'Quá trình cố định nitơ', isCorrect: false },
          { content: 'Quá trình bay hơi nước', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ ký sinh - vật chủ khác với mối quan hệ vật ăn thịt - con mồi ở điểm nào?',
        answers: [
          { content: 'Vật ký sinh thường không giết chết vật chủ ngay, có kích thước nhỏ hơn vật chủ', isCorrect: true },
          { content: 'Vật ký sinh luôn giết chết vật chủ', isCorrect: false },
          { content: 'Vật ký sinh có kích thước lớn hơn vật chủ', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Tăng trưởng quần thể theo hình chữ S có đặc điểm gì?',
        answers: [
          { content: 'Tốc độ tăng trưởng không đổi', isCorrect: false },
          { content: 'Tốc độ tăng trưởng giảm dần khi kích thước quần thể tiến gần đến sức chứa môi trường', isCorrect: true },
          { content: 'Quần thể tăng trưởng không giới hạn', isCorrect: false },
          { content: 'Không bị ảnh hưởng bởi môi trường', isCorrect: false },
        ],
      },
      {
        content: 'Đa dạng sinh học bao gồm những cấp độ nào?',
        answers: [
          { content: 'Đa dạng gen, đa dạng loài, đa dạng hệ sinh thái', isCorrect: true },
          { content: 'Chỉ có đa dạng loài', isCorrect: false },
          { content: 'Đa dạng gen và đa dạng loài', isCorrect: false },
          { content: 'Đa dạng loài và đa dạng hệ sinh thái', isCorrect: false },
        ],
      },
      {
        content: 'Nhân tố sinh thái nào sau đây là nhân tố vô sinh?',
        answers: [
          { content: 'Nhiệt độ, ánh sáng, độ ẩm', isCorrect: true },
          { content: 'Vi khuẩn, nấm, động vật', isCorrect: false },
          { content: 'Thực vật, động vật, con người', isCorrect: false },
          { content: 'Quan hệ cạnh tranh giữa các loài', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
