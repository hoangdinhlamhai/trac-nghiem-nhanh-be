import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Di truyền phân tử
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-sinh-hoc',
    title: 'Đề trắc nghiệm Sinh Học 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-sinh-hoc-de-1',
    description:
      'Đề trắc nghiệm Sinh Học 12 chủ đề Di truyền phân tử: ADN, ARN, phiên mã, dịch mã, đột biến gen.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'ADN có cấu trúc mạch kép xoắn đều, mỗi vòng xoắn có bao nhiêu cặp nuclêôtit?',
        answers: [
          { content: '5 cặp', isCorrect: false },
          { content: '10 cặp', isCorrect: true },
          { content: '15 cặp', isCorrect: false },
          { content: '20 cặp', isCorrect: false },
        ],
      },
      {
        content: 'Trong phân tử ADN, liên kết hiđrô được hình thành giữa các bazơ nitơ nào?',
        answers: [
          { content: 'A liên kết với G, T liên kết với X', isCorrect: false },
          { content: 'A liên kết với T, G liên kết với X', isCorrect: true },
          { content: 'A liên kết với X, G liên kết với T', isCorrect: false },
          { content: 'A liên kết với U, G liên kết với X', isCorrect: false },
        ],
      },
      {
        content: 'Một gen có 3000 nuclêôtit. Chiều dài của gen đó là bao nhiêu?',
        answers: [
          { content: '5100 Å', isCorrect: true },
          { content: '10200 Å', isCorrect: false },
          { content: '3400 Å', isCorrect: false },
          { content: '2550 Å', isCorrect: false },
        ],
      },
      {
        content: 'Quá trình phiên mã xảy ra ở đâu trong tế bào nhân thực?',
        answers: [
          { content: 'Tế bào chất', isCorrect: false },
          { content: 'Ribôxôm', isCorrect: false },
          { content: 'Nhân tế bào', isCorrect: true },
          { content: 'Màng tế bào', isCorrect: false },
        ],
      },
      {
        content: 'Mạch gốc của gen có trình tự 3\'TAXGGA5\'. Trình tự mARN được phiên mã là gì?',
        answers: [
          { content: '5\'AUGXXU3\'', isCorrect: true },
          { content: '3\'AUGXXU5\'', isCorrect: false },
          { content: '5\'UAXGGU3\'', isCorrect: false },
          { content: '3\'TAXGGA5\'', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình dịch mã, bộ ba đối mã (anticôđon) nằm trên cấu trúc nào?',
        answers: [
          { content: 'mARN', isCorrect: false },
          { content: 'tARN', isCorrect: true },
          { content: 'rARN', isCorrect: false },
          { content: 'ADN', isCorrect: false },
        ],
      },
      {
        content: 'Một gen có 2400 nuclêôtit, trong đó số nuclêôtit loại A chiếm 20%. Số liên kết hiđrô của gen là bao nhiêu?',
        answers: [
          { content: '2880', isCorrect: false },
          { content: '3120', isCorrect: true },
          { content: '3000', isCorrect: false },
          { content: '2640', isCorrect: false },
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
        content: 'Enzim nào tham gia trực tiếp vào quá trình phiên mã ở sinh vật nhân sơ?',
        answers: [
          { content: 'ADN pôlimeraza', isCorrect: false },
          { content: 'ARN pôlimeraza', isCorrect: true },
          { content: 'Ligaza', isCorrect: false },
          { content: 'Restrictaza', isCorrect: false },
        ],
      },
      {
        content: 'Mã di truyền có tính thoái hóa nghĩa là gì?',
        answers: [
          { content: 'Một bộ ba mã hóa cho nhiều axit amin', isCorrect: false },
          { content: 'Nhiều bộ ba cùng mã hóa cho một axit amin', isCorrect: true },
          { content: 'Tất cả các loài đều dùng chung bộ mã di truyền', isCorrect: false },
          { content: 'Mã di truyền được đọc theo một chiều', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình nhân đôi ADN, enzim ADN pôlimeraza có vai trò gì?',
        answers: [
          { content: 'Tháo xoắn phân tử ADN', isCorrect: false },
          { content: 'Nối các đoạn Okazaki', isCorrect: false },
          { content: 'Tổng hợp mạch mới theo nguyên tắc bổ sung', isCorrect: true },
          { content: 'Cắt liên kết hiđrô giữa hai mạch', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến gen dạng mất một cặp nuclêôtit sẽ gây hậu quả gì đối với chuỗi pôlipeptit?',
        answers: [
          { content: 'Chỉ thay đổi một axit amin', isCorrect: false },
          { content: 'Thay đổi các axit amin từ vị trí đột biến trở đi', isCorrect: true },
          { content: 'Không ảnh hưởng gì', isCorrect: false },
          { content: 'Chỉ mất một axit amin', isCorrect: false },
        ],
      },
      {
        content: 'Bộ ba kết thúc trên mARN gồm những bộ ba nào?',
        answers: [
          { content: 'UAA, UAG, UGA', isCorrect: true },
          { content: 'AUG, UAA, UAG', isCorrect: false },
          { content: 'AUG, UGA, UGG', isCorrect: false },
          { content: 'UAA, AUG, UGA', isCorrect: false },
        ],
      },
      {
        content: 'Một phân tử mARN có 900 nuclêôtit (không tính bộ ba kết thúc). Chuỗi pôlipeptit được tổng hợp từ mARN này có bao nhiêu axit amin?',
        answers: [
          { content: '298', isCorrect: false },
          { content: '299', isCorrect: true },
          { content: '300', isCorrect: false },
          { content: '450', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình nhân đôi ADN, nguyên tắc bán bảo tồn có nghĩa là gì?',
        answers: [
          { content: 'ADN con được tổng hợp hoàn toàn mới', isCorrect: false },
          { content: 'Mỗi ADN con gồm một mạch cũ và một mạch mới', isCorrect: true },
          { content: 'ADN con giống hệt ADN mẹ', isCorrect: false },
          { content: 'Chỉ một mạch được dùng làm khuôn', isCorrect: false },
        ],
      },
      {
        content: 'Loại ARN nào có chức năng vận chuyển axit amin đến ribôxôm?',
        answers: [
          { content: 'mARN', isCorrect: false },
          { content: 'tARN', isCorrect: true },
          { content: 'rARN', isCorrect: false },
          { content: 'snARN', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến gen là gì?',
        answers: [
          { content: 'Sự thay đổi số lượng nhiễm sắc thể', isCorrect: false },
          { content: 'Sự thay đổi cấu trúc nhiễm sắc thể', isCorrect: false },
          { content: 'Sự biến đổi trong cấu trúc của gen liên quan đến một hoặc một số cặp nuclêôtit', isCorrect: true },
          { content: 'Sự thay đổi vị trí gen trên nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Bộ ba mở đầu trên mARN là bộ ba nào?',
        answers: [
          { content: 'AAG', isCorrect: false },
          { content: 'UAA', isCorrect: false },
          { content: 'AUG', isCorrect: true },
          { content: 'UAG', isCorrect: false },
        ],
      },
      {
        content: 'Trong cấu trúc của ADN, đường kính của chuỗi xoắn kép là bao nhiêu?',
        answers: [
          { content: '10 Å', isCorrect: false },
          { content: '20 Å', isCorrect: true },
          { content: '34 Å', isCorrect: false },
          { content: '3,4 Å', isCorrect: false },
        ],
      },
      {
        content: 'Tác nhân nào sau đây có thể gây đột biến gen?',
        answers: [
          { content: 'Tia tử ngoại', isCorrect: false },
          { content: '5-brôm uraxin (5-BU)', isCorrect: false },
          { content: 'Consixin', isCorrect: false },
          { content: 'Cả tia tử ngoại và 5-BU đều gây đột biến gen', isCorrect: true },
        ],
      },
      {
        content: 'Một gen có tổng số 3000 nuclêôtit và có 900 ađênin. Số liên kết hiđrô của gen là bao nhiêu?',
        answers: [
          { content: '3600', isCorrect: true },
          { content: '3900', isCorrect: false },
          { content: '3000', isCorrect: false },
          { content: '4200', isCorrect: false },
        ],
      },
      {
        content: 'Quá trình dịch mã diễn ra ở đâu trong tế bào?',
        answers: [
          { content: 'Nhân tế bào', isCorrect: false },
          { content: 'Ribôxôm trong tế bào chất', isCorrect: true },
          { content: 'Ti thể', isCorrect: false },
          { content: 'Lục lạp', isCorrect: false },
        ],
      },
      {
        content: 'Chiều dài của một vòng xoắn ADN là bao nhiêu?',
        answers: [
          { content: '20 Å', isCorrect: false },
          { content: '34 Å', isCorrect: true },
          { content: '3,4 Å', isCorrect: false },
          { content: '340 Å', isCorrect: false },
        ],
      },
      {
        content: 'Trong quá trình phiên mã, mạch nào của gen được dùng làm khuôn?',
        answers: [
          { content: 'Cả hai mạch', isCorrect: false },
          { content: 'Mạch bổ sung (mạch mã gốc)', isCorrect: false },
          { content: 'Mạch gốc có chiều 3\' → 5\'', isCorrect: true },
          { content: 'Mạch có chiều 5\' → 3\'', isCorrect: false },
        ],
      },
      {
        content: 'Một gen nhân đôi 3 lần liên tiếp sẽ tạo ra bao nhiêu phân tử ADN con?',
        answers: [
          { content: '3', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '8', isCorrect: true },
          { content: '16', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Di truyền Mendel
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-sinh-hoc',
    title: 'Đề trắc nghiệm Sinh Học 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-sinh-hoc-de-2',
    description:
      'Đề trắc nghiệm Sinh Học 12 chủ đề Di truyền Mendel: quy luật phân li, phân li độc lập, tương tác gen, liên kết gen.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Theo Menđen, tính trạng được biểu hiện ở cơ thể lai F1 được gọi là gì?',
        answers: [
          { content: 'Tính trạng lặn', isCorrect: false },
          { content: 'Tính trạng trội', isCorrect: true },
          { content: 'Tính trạng trung gian', isCorrect: false },
          { content: 'Tính trạng tương phản', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai Aa × Aa cho tỉ lệ kiểu hình ở F2 là bao nhiêu (trội hoàn toàn)?',
        answers: [
          { content: '1 : 1', isCorrect: false },
          { content: '3 : 1', isCorrect: true },
          { content: '1 : 2 : 1', isCorrect: false },
          { content: '9 : 3 : 3 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phân li độc lập của Menđen được phát biểu dựa trên phép lai nào?',
        answers: [
          { content: 'Lai một cặp tính trạng', isCorrect: false },
          { content: 'Lai hai hay nhiều cặp tính trạng', isCorrect: true },
          { content: 'Lai phân tích', isCorrect: false },
          { content: 'Lai thuận nghịch', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai AaBb × AaBb (hai cặp gen phân li độc lập, trội hoàn toàn) cho tỉ lệ kiểu hình ở đời con là bao nhiêu?',
        answers: [
          { content: '3 : 1', isCorrect: false },
          { content: '1 : 1 : 1 : 1', isCorrect: false },
          { content: '9 : 3 : 3 : 1', isCorrect: true },
          { content: '9 : 7', isCorrect: false },
        ],
      },
      {
        content: 'Lai phân tích là phép lai giữa cá thể mang tính trạng trội với cá thể nào?',
        answers: [
          { content: 'Cá thể mang tính trạng trội khác', isCorrect: false },
          { content: 'Cá thể đồng hợp lặn', isCorrect: true },
          { content: 'Cá thể dị hợp', isCorrect: false },
          { content: 'Cá thể bất kỳ', isCorrect: false },
        ],
      },
      {
        content: 'Trong tương tác bổ sung, phép lai AaBb × AaBb cho tỉ lệ kiểu hình 9 : 7 khi nào?',
        answers: [
          { content: 'Khi hai gen trội cùng có mặt mới biểu hiện kiểu hình mới', isCorrect: true },
          { content: 'Khi mỗi gen trội đều biểu hiện kiểu hình riêng', isCorrect: false },
          { content: 'Khi gen trội át chế gen không alen', isCorrect: false },
          { content: 'Khi hai gen liên kết hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng liên kết gen là gì?',
        answers: [
          { content: 'Các gen nằm trên các nhiễm sắc thể khác nhau cùng phân li', isCorrect: false },
          { content: 'Các gen nằm trên cùng một nhiễm sắc thể cùng phân li trong giảm phân', isCorrect: true },
          { content: 'Các gen tương tác với nhau quy định một tính trạng', isCorrect: false },
          { content: 'Một gen quy định nhiều tính trạng', isCorrect: false },
        ],
      },
      {
        content: 'Hoán vị gen xảy ra do hiện tượng nào trong giảm phân?',
        answers: [
          { content: 'Phân li nhiễm sắc thể', isCorrect: false },
          { content: 'Trao đổi chéo giữa các crômatit không chị em', isCorrect: true },
          { content: 'Nhân đôi ADN', isCorrect: false },
          { content: 'Tiếp hợp nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Cơ thể có kiểu gen AaBbDd giảm phân bình thường tạo ra tối đa bao nhiêu loại giao tử?',
        answers: [
          { content: '4', isCorrect: false },
          { content: '6', isCorrect: false },
          { content: '8', isCorrect: true },
          { content: '16', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ lệ kiểu gen của phép lai Aa × Aa là bao nhiêu?',
        answers: [
          { content: '3 : 1', isCorrect: false },
          { content: '1 : 2 : 1', isCorrect: true },
          { content: '1 : 1', isCorrect: false },
          { content: '100% Aa', isCorrect: false },
        ],
      },
      {
        content: 'Trong trường hợp trội không hoàn toàn, phép lai Aa × Aa cho tỉ lệ kiểu hình là bao nhiêu?',
        answers: [
          { content: '3 : 1', isCorrect: false },
          { content: '1 : 2 : 1', isCorrect: true },
          { content: '1 : 1', isCorrect: false },
          { content: '9 : 3 : 3 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Gen đa hiệu (pleiotropic) là gen có đặc điểm gì?',
        answers: [
          { content: 'Một gen quy định một tính trạng', isCorrect: false },
          { content: 'Một gen quy định nhiều tính trạng', isCorrect: true },
          { content: 'Nhiều gen quy định một tính trạng', isCorrect: false },
          { content: 'Gen nằm trên nhiễm sắc thể giới tính', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai nào sau đây cho đời con có tỉ lệ kiểu hình 1 : 1?',
        answers: [
          { content: 'AA × AA', isCorrect: false },
          { content: 'Aa × Aa', isCorrect: false },
          { content: 'Aa × aa', isCorrect: true },
          { content: 'AA × Aa', isCorrect: false },
        ],
      },
      {
        content: 'Tương tác gen kiểu át chế cho tỉ lệ kiểu hình nào ở F2?',
        answers: [
          { content: '9 : 3 : 3 : 1', isCorrect: false },
          { content: '9 : 7', isCorrect: false },
          { content: '12 : 3 : 1 hoặc 13 : 3', isCorrect: true },
          { content: '15 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện nghiệm đúng của quy luật phân li độc lập là gì?',
        answers: [
          { content: 'Các gen nằm trên cùng một nhiễm sắc thể', isCorrect: false },
          { content: 'Các cặp gen quy định các cặp tính trạng nằm trên các cặp nhiễm sắc thể tương đồng khác nhau', isCorrect: true },
          { content: 'Tính trạng trội phải là trội hoàn toàn', isCorrect: false },
          { content: 'Số lượng cá thể phải nhỏ', isCorrect: false },
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
        content: 'Ở người, bệnh mù màu do gen lặn nằm trên nhiễm sắc thể X. Bố bình thường, mẹ mang gen dị hợp. Xác suất con trai bị mù màu là bao nhiêu?',
        answers: [
          { content: '25%', isCorrect: true },
          { content: '50%', isCorrect: false },
          { content: '75%', isCorrect: false },
          { content: '12,5%', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai thuận nghịch được sử dụng để phát hiện điều gì?',
        answers: [
          { content: 'Gen nằm trên nhiễm sắc thể thường hay nhiễm sắc thể giới tính', isCorrect: true },
          { content: 'Tính trạng trội hay lặn', isCorrect: false },
          { content: 'Số lượng gen quy định tính trạng', isCorrect: false },
          { content: 'Tần số hoán vị gen', isCorrect: false },
        ],
      },
      {
        content: 'Trong phép lai AaBb × aabb, tỉ lệ kiểu hình ở đời con là bao nhiêu?',
        answers: [
          { content: '9 : 3 : 3 : 1', isCorrect: false },
          { content: '3 : 1', isCorrect: false },
          { content: '1 : 1 : 1 : 1', isCorrect: true },
          { content: '1 : 1', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật di truyền nào của Menđen được xem là quy luật cơ bản nhất?',
        answers: [
          { content: 'Quy luật phân li', isCorrect: true },
          { content: 'Quy luật phân li độc lập', isCorrect: false },
          { content: 'Quy luật liên kết gen', isCorrect: false },
          { content: 'Quy luật tương tác gen', isCorrect: false },
        ],
      },
      {
        content: 'Tính trạng do nhiều gen không alen cùng quy định được gọi là gì?',
        answers: [
          { content: 'Tính trạng đa gen', isCorrect: false },
          { content: 'Tương tác gen', isCorrect: true },
          { content: 'Gen đa hiệu', isCorrect: false },
          { content: 'Liên kết gen', isCorrect: false },
        ],
      },
      {
        content: 'Tần số hoán vị gen có giá trị tối đa là bao nhiêu?',
        answers: [
          { content: '100%', isCorrect: false },
          { content: '50%', isCorrect: true },
          { content: '25%', isCorrect: false },
          { content: '75%', isCorrect: false },
        ],
      },
      {
        content: 'Phép lai giữa hai cơ thể dị hợp về 3 cặp gen phân li độc lập (AaBbDd × AaBbDd) cho bao nhiêu loại kiểu gen ở đời con?',
        answers: [
          { content: '9', isCorrect: false },
          { content: '16', isCorrect: false },
          { content: '27', isCorrect: true },
          { content: '64', isCorrect: false },
        ],
      },
      {
        content: 'Di truyền liên kết với giới tính là hiện tượng gì?',
        answers: [
          { content: 'Gen quy định tính trạng nằm trên nhiễm sắc thể thường', isCorrect: false },
          { content: 'Gen quy định tính trạng nằm trên nhiễm sắc thể giới tính', isCorrect: true },
          { content: 'Gen quy định giới tính nằm trên nhiễm sắc thể thường', isCorrect: false },
          { content: 'Tính trạng chỉ biểu hiện ở một giới', isCorrect: false },
        ],
      },
      {
        content: 'Ở ruồi giấm, gen quy định màu mắt nằm trên nhiễm sắc thể X. Phép lai ruồi mắt đỏ (XᴬXᵃ) × ruồi mắt đỏ (XᴬY) cho tỉ lệ ruồi mắt trắng ở đời con là bao nhiêu?',
        answers: [
          { content: '50% tổng số ruồi', isCorrect: false },
          { content: '25% tổng số ruồi (toàn bộ là ruồi đực)', isCorrect: true },
          { content: '25% tổng số ruồi (toàn bộ là ruồi cái)', isCorrect: false },
          { content: '0%', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 3: Di truyền quần thể và ứng dụng
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-sinh-hoc',
    title: 'Đề trắc nghiệm Sinh Học 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-sinh-hoc-de-3',
    description:
      'Đề trắc nghiệm Sinh Học 12 chủ đề Di truyền quần thể và ứng dụng: Hardy-Weinberg, chọn giống, công nghệ gen.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Định luật Hacđi-Vanbec (Hardy-Weinberg) phản ánh điều gì trong quần thể?',
        answers: [
          { content: 'Tần số alen và tần số kiểu gen thay đổi qua các thế hệ', isCorrect: false },
          { content: 'Tần số alen và tần số kiểu gen không đổi qua các thế hệ trong điều kiện nhất định', isCorrect: true },
          { content: 'Quần thể luôn tiến hóa', isCorrect: false },
          { content: 'Đột biến luôn xảy ra trong quần thể', isCorrect: false },
        ],
      },
      {
        content: 'Công thức của định luật Hacđi-Vanbec cho gen có 2 alen là gì?',
        answers: [
          { content: 'p + q = 1 và p² + q² = 1', isCorrect: false },
          { content: 'p + q = 1 và p² + 2pq + q² = 1', isCorrect: true },
          { content: 'p × q = 1', isCorrect: false },
          { content: 'p² - 2pq + q² = 1', isCorrect: false },
        ],
      },
      {
        content: 'Trong một quần thể, tần số alen A = 0,6 và alen a = 0,4. Tần số kiểu gen Aa trong quần thể cân bằng Hacđi-Vanbec là bao nhiêu?',
        answers: [
          { content: '0,36', isCorrect: false },
          { content: '0,48', isCorrect: true },
          { content: '0,16', isCorrect: false },
          { content: '0,24', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện nào sau đây KHÔNG phải là điều kiện nghiệm đúng của định luật Hacđi-Vanbec?',
        answers: [
          { content: 'Quần thể có kích thước lớn', isCorrect: false },
          { content: 'Giao phối ngẫu nhiên', isCorrect: false },
          { content: 'Có chọn lọc tự nhiên tác động', isCorrect: true },
          { content: 'Không có đột biến', isCorrect: false },
        ],
      },
      {
        content: 'Quần thể tự phối qua nhiều thế hệ sẽ có đặc điểm gì?',
        answers: [
          { content: 'Tăng tỉ lệ dị hợp, giảm tỉ lệ đồng hợp', isCorrect: false },
          { content: 'Tăng tỉ lệ đồng hợp, giảm tỉ lệ dị hợp', isCorrect: true },
          { content: 'Tần số alen thay đổi', isCorrect: false },
          { content: 'Không thay đổi tỉ lệ kiểu gen', isCorrect: false },
        ],
      },
      {
        content: 'Công nghệ gen là gì?',
        answers: [
          { content: 'Quy trình tạo ra sinh vật biến đổi gen bằng cách đưa gen lạ vào hệ gen', isCorrect: true },
          { content: 'Phương pháp lai tạo giống mới', isCorrect: false },
          { content: 'Kỹ thuật gây đột biến nhân tạo', isCorrect: false },
          { content: 'Phương pháp nhân bản vô tính', isCorrect: false },
        ],
      },
      {
        content: 'Trong công nghệ gen, enzim restrictaza có vai trò gì?',
        answers: [
          { content: 'Nối các đoạn ADN', isCorrect: false },
          { content: 'Cắt ADN tại các vị trí xác định', isCorrect: true },
          { content: 'Nhân đôi ADN', isCorrect: false },
          { content: 'Phiên mã ADN thành ARN', isCorrect: false },
        ],
      },
      {
        content: 'Vectơ chuyển gen (thể truyền) thường được sử dụng trong công nghệ gen là gì?',
        answers: [
          { content: 'Nhiễm sắc thể của tế bào nhận', isCorrect: false },
          { content: 'Plasmit của vi khuẩn hoặc thể thực khuẩn', isCorrect: true },
          { content: 'ARN thông tin', isCorrect: false },
          { content: 'Ribôxôm', isCorrect: false },
        ],
      },
      {
        content: 'Ưu thế lai là hiện tượng gì?',
        answers: [
          { content: 'Con lai có sức sống kém hơn bố mẹ', isCorrect: false },
          { content: 'Con lai F1 có sức sống, sinh trưởng vượt trội so với bố mẹ', isCorrect: true },
          { content: 'Con lai giống hệt bố mẹ', isCorrect: false },
          { content: 'Con lai luôn mang tính trạng lặn', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp chọn giống nào tạo ra nguồn biến dị di truyền mới?',
        answers: [
          { content: 'Chọn lọc cá thể', isCorrect: false },
          { content: 'Gây đột biến nhân tạo', isCorrect: true },
          { content: 'Chọn lọc hàng loạt', isCorrect: false },
          { content: 'Lai gần', isCorrect: false },
        ],
      },
      {
        content: 'Trong quần thể ngẫu phối, một gen có 2 alen A và a. Biết tần số kiểu gen aa = 0,04. Tần số alen a là bao nhiêu?',
        answers: [
          { content: '0,04', isCorrect: false },
          { content: '0,2', isCorrect: true },
          { content: '0,4', isCorrect: false },
          { content: '0,02', isCorrect: false },
        ],
      },
      {
        content: 'Enzim ligaza trong công nghệ gen có chức năng gì?',
        answers: [
          { content: 'Cắt ADN', isCorrect: false },
          { content: 'Nối các đoạn ADN với nhau', isCorrect: true },
          { content: 'Nhân đôi ADN', isCorrect: false },
          { content: 'Tháo xoắn ADN', isCorrect: false },
        ],
      },
      {
        content: 'Tại sao ưu thế lai giảm dần qua các thế hệ?',
        answers: [
          { content: 'Do tần số alen thay đổi', isCorrect: false },
          { content: 'Do tỉ lệ dị hợp giảm dần qua các thế hệ', isCorrect: true },
          { content: 'Do đột biến tích lũy', isCorrect: false },
          { content: 'Do chọn lọc tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp lai nào được dùng để tạo dòng thuần?',
        answers: [
          { content: 'Lai xa', isCorrect: false },
          { content: 'Lai khác thứ', isCorrect: false },
          { content: 'Tự thụ phấn hoặc giao phối gần', isCorrect: true },
          { content: 'Lai thuận nghịch', isCorrect: false },
        ],
      },
      {
        content: 'Sinh vật biến đổi gen (GMO) là sinh vật có đặc điểm gì?',
        answers: [
          { content: 'Hệ gen bị đột biến tự nhiên', isCorrect: false },
          { content: 'Hệ gen được biến đổi bằng công nghệ gen', isCorrect: true },
          { content: 'Được tạo ra bằng lai xa', isCorrect: false },
          { content: 'Được tạo ra bằng chọn lọc tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Trong quần thể, cấu trúc di truyền cân bằng Hacđi-Vanbec có dạng nào?',
        answers: [
          { content: 'p²AA + 2pqAa + q²aa = 1', isCorrect: true },
          { content: 'pAA + qaa = 1', isCorrect: false },
          { content: 'p²AA + q²aa = 1', isCorrect: false },
          { content: '2p²AA + 2pqAa = 1', isCorrect: false },
        ],
      },
      {
        content: 'Nhân bản vô tính ở động vật sử dụng kỹ thuật nào?',
        answers: [
          { content: 'Chuyển nhân tế bào xôma vào tế bào trứng đã loại bỏ nhân', isCorrect: true },
          { content: 'Lai xa kết hợp đa bội hóa', isCorrect: false },
          { content: 'Gây đột biến nhân tạo', isCorrect: false },
          { content: 'Cấy truyền phôi', isCorrect: false },
        ],
      },
      {
        content: 'Thoái hóa giống do tự thụ phấn là do nguyên nhân gì?',
        answers: [
          { content: 'Tăng biến dị tổ hợp', isCorrect: false },
          { content: 'Tăng tỉ lệ đồng hợp lặn có hại', isCorrect: true },
          { content: 'Giảm số lượng gen', isCorrect: false },
          { content: 'Tăng tần số đột biến', isCorrect: false },
        ],
      },
      {
        content: 'Các bước cơ bản trong quy trình tạo giống bằng công nghệ gen gồm những gì?',
        answers: [
          { content: 'Tạo ADN tái tổ hợp → Đưa ADN tái tổ hợp vào tế bào nhận → Phân lập dòng tế bào chứa ADN tái tổ hợp', isCorrect: true },
          { content: 'Gây đột biến → Chọn lọc → Nhân giống', isCorrect: false },
          { content: 'Lai xa → Đa bội hóa → Chọn lọc', isCorrect: false },
          { content: 'Tự thụ phấn → Chọn lọc → Lai tạo', isCorrect: false },
        ],
      },
      {
        content: 'Một quần thể có cấu trúc di truyền 0,25AA : 0,50Aa : 0,25aa. Quần thể này có cân bằng Hacđi-Vanbec không?',
        answers: [
          { content: 'Không, vì tỉ lệ dị hợp quá cao', isCorrect: false },
          { content: 'Có, vì thỏa mãn p² + 2pq + q² = 1', isCorrect: true },
          { content: 'Không, vì tần số alen không bằng nhau', isCorrect: false },
          { content: 'Không xác định được', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp tạo giống bằng lai xa kết hợp đa bội hóa nhằm mục đích gì?',
        answers: [
          { content: 'Tạo ưu thế lai', isCorrect: false },
          { content: 'Khắc phục hiện tượng bất thụ ở con lai xa', isCorrect: true },
          { content: 'Tạo dòng thuần', isCorrect: false },
          { content: 'Gây đột biến gen', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc hàng loạt có đặc điểm gì?',
        answers: [
          { content: 'Dựa vào kiểu gen để chọn lọc', isCorrect: false },
          { content: 'Dựa vào kiểu hình để chọn lọc hàng loạt cá thể phù hợp', isCorrect: true },
          { content: 'Chỉ áp dụng cho vi sinh vật', isCorrect: false },
          { content: 'Chỉ áp dụng cho động vật', isCorrect: false },
        ],
      },
      {
        content: 'Trong quần thể tự phối, sau n thế hệ, tỉ lệ dị hợp còn lại là bao nhiêu?',
        answers: [
          { content: '(1/2)ⁿ', isCorrect: true },
          { content: '(1/4)ⁿ', isCorrect: false },
          { content: '1 - (1/2)ⁿ', isCorrect: false },
          { content: '2ⁿ', isCorrect: false },
        ],
      },
      {
        content: 'Colchicine (consixin) được sử dụng trong chọn giống để làm gì?',
        answers: [
          { content: 'Gây đột biến gen', isCorrect: false },
          { content: 'Gây đa bội hóa bằng cách ức chế sự hình thành thoi phân bào', isCorrect: true },
          { content: 'Tăng tần số hoán vị gen', isCorrect: false },
          { content: 'Kích thích sinh trưởng', isCorrect: false },
        ],
      },
      {
        content: 'Trong quần thể, tần số alen A = 0,7 và a = 0,3. Sau một thế hệ ngẫu phối, tần số kiểu gen AA là bao nhiêu?',
        answers: [
          { content: '0,49', isCorrect: true },
          { content: '0,42', isCorrect: false },
          { content: '0,09', isCorrect: false },
          { content: '0,70', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Tiến hóa
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-sinh-hoc',
    title: 'Đề trắc nghiệm Sinh Học 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-sinh-hoc-de-4',
    description:
      'Đề trắc nghiệm Sinh Học 12 chủ đề Tiến hóa: bằng chứng tiến hóa, học thuyết Darwin, thuyết tiến hóa tổng hợp.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Cơ quan tương đồng là gì?',
        answers: [
          { content: 'Các cơ quan có chức năng giống nhau nhưng nguồn gốc khác nhau', isCorrect: false },
          { content: 'Các cơ quan có cùng nguồn gốc nhưng có thể khác nhau về chức năng', isCorrect: true },
          { content: 'Các cơ quan giống nhau hoàn toàn về cấu tạo và chức năng', isCorrect: false },
          { content: 'Các cơ quan đã thoái hóa không còn chức năng', isCorrect: false },
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
        content: 'Theo Đacuyn (Darwin), nguyên liệu chủ yếu cho chọn lọc tự nhiên là gì?',
        answers: [
          { content: 'Đột biến gen', isCorrect: false },
          { content: 'Biến dị cá thể (biến dị không xác định)', isCorrect: true },
          { content: 'Biến dị xác định (thường biến)', isCorrect: false },
          { content: 'Biến dị tổ hợp', isCorrect: false },
        ],
      },
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
        content: 'Nhân tố tiến hóa nào có vai trò định hướng cho quá trình tiến hóa?',
        answers: [
          { content: 'Đột biến', isCorrect: false },
          { content: 'Di - nhập gen', isCorrect: false },
          { content: 'Chọn lọc tự nhiên', isCorrect: true },
          { content: 'Các yếu tố ngẫu nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Đột biến gen được xem là nguồn nguyên liệu sơ cấp cho tiến hóa vì lý do gì?',
        answers: [
          { content: 'Đột biến gen luôn có lợi', isCorrect: false },
          { content: 'Đột biến gen phổ biến, ít ảnh hưởng đến sức sống, tạo alen mới', isCorrect: true },
          { content: 'Đột biến gen xảy ra với tần số cao', isCorrect: false },
          { content: 'Đột biến gen luôn di truyền được', isCorrect: false },
        ],
      },
      {
        content: 'Các yếu tố ngẫu nhiên (phiêu bạt di truyền) có đặc điểm gì?',
        answers: [
          { content: 'Luôn làm tăng tần số alen có lợi', isCorrect: false },
          { content: 'Làm thay đổi tần số alen một cách ngẫu nhiên, không định hướng', isCorrect: true },
          { content: 'Chỉ tác động lên quần thể lớn', isCorrect: false },
          { content: 'Luôn loại bỏ alen có hại', isCorrect: false },
        ],
      },
      {
        content: 'Hình thành loài bằng con đường địa lý thường xảy ra ở nhóm sinh vật nào?',
        answers: [
          { content: 'Sinh vật ít di chuyển', isCorrect: false },
          { content: 'Sinh vật có khả năng phát tán mạnh', isCorrect: true },
          { content: 'Chỉ ở thực vật', isCorrect: false },
          { content: 'Chỉ ở vi sinh vật', isCorrect: false },
        ],
      },
      {
        content: 'Cách li sinh sản là gì?',
        answers: [
          { content: 'Các quần thể sống ở các vùng địa lý khác nhau', isCorrect: false },
          { content: 'Các cá thể không thể giao phối hoặc giao phối nhưng không sinh con hữu thụ', isCorrect: true },
          { content: 'Các cá thể sống trong các sinh cảnh khác nhau', isCorrect: false },
          { content: 'Các cá thể có mùa sinh sản khác nhau', isCorrect: false },
        ],
      },
      {
        content: 'Bằng chứng sinh học phân tử cho thấy điều gì về mối quan hệ giữa các loài?',
        answers: [
          { content: 'Các loài không có quan hệ họ hàng', isCorrect: false },
          { content: 'Các loài có chung nguồn gốc, mức độ tương đồng ADN phản ánh quan hệ họ hàng', isCorrect: true },
          { content: 'Tất cả các loài có ADN giống nhau', isCorrect: false },
          { content: 'Chỉ động vật có xương sống mới có quan hệ họ hàng', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc tự nhiên tác động lên đối tượng nào?',
        answers: [
          { content: 'Alen', isCorrect: false },
          { content: 'Kiểu gen', isCorrect: false },
          { content: 'Kiểu hình của cá thể', isCorrect: true },
          { content: 'Quần xã', isCorrect: false },
        ],
      },
      {
        content: 'Hình thành loài bằng con đường cách li sinh thái thường gặp ở nhóm nào?',
        answers: [
          { content: 'Động vật di chuyển xa', isCorrect: false },
          { content: 'Thực vật và động vật ít di chuyển', isCorrect: true },
          { content: 'Chỉ ở vi sinh vật', isCorrect: false },
          { content: 'Chỉ ở động vật có vú', isCorrect: false },
        ],
      },
      {
        content: 'Tiến hóa nhỏ là quá trình gì?',
        answers: [
          { content: 'Hình thành các đơn vị phân loại trên loài', isCorrect: false },
          { content: 'Biến đổi cấu trúc di truyền của quần thể dẫn đến hình thành loài mới', isCorrect: true },
          { content: 'Hình thành các nhóm phân loại lớn', isCorrect: false },
          { content: 'Sự tuyệt chủng hàng loạt', isCorrect: false },
        ],
      },
      {
        content: 'Tiến hóa lớn là quá trình gì?',
        answers: [
          { content: 'Biến đổi tần số alen trong quần thể', isCorrect: false },
          { content: 'Hình thành các nhóm phân loại trên loài (chi, họ, bộ, lớp, ngành)', isCorrect: true },
          { content: 'Hình thành loài mới', isCorrect: false },
          { content: 'Biến đổi kiểu hình của cá thể', isCorrect: false },
        ],
      },
      {
        content: 'Cơ quan thoái hóa là bằng chứng cho điều gì?',
        answers: [
          { content: 'Tiến hóa đồng quy', isCorrect: false },
          { content: 'Nguồn gốc chung của các loài', isCorrect: true },
          { content: 'Chọn lọc nhân tạo', isCorrect: false },
          { content: 'Đột biến gen', isCorrect: false },
        ],
      },
      {
        content: 'Theo Đacuyn, động lực của chọn lọc tự nhiên là gì?',
        answers: [
          { content: 'Đột biến gen', isCorrect: false },
          { content: 'Đấu tranh sinh tồn', isCorrect: true },
          { content: 'Biến dị tổ hợp', isCorrect: false },
          { content: 'Cách li địa lý', isCorrect: false },
        ],
      },
      {
        content: 'Loài sinh học được định nghĩa như thế nào?',
        answers: [
          { content: 'Nhóm cá thể có hình thái giống nhau', isCorrect: false },
          { content: 'Nhóm quần thể giao phối tự do với nhau và cách li sinh sản với nhóm khác', isCorrect: true },
          { content: 'Nhóm cá thể sống trong cùng một khu vực', isCorrect: false },
          { content: 'Nhóm cá thể có cùng số lượng nhiễm sắc thể', isCorrect: false },
        ],
      },
      {
        content: 'Hình thành loài bằng đa bội hóa thường gặp ở nhóm sinh vật nào?',
        answers: [
          { content: 'Động vật', isCorrect: false },
          { content: 'Thực vật', isCorrect: true },
          { content: 'Vi khuẩn', isCorrect: false },
          { content: 'Nấm', isCorrect: false },
        ],
      },
      {
        content: 'Di - nhập gen ảnh hưởng đến quần thể như thế nào?',
        answers: [
          { content: 'Làm thay đổi tần số alen và thành phần kiểu gen của quần thể', isCorrect: true },
          { content: 'Không ảnh hưởng đến cấu trúc di truyền', isCorrect: false },
          { content: 'Chỉ làm tăng kích thước quần thể', isCorrect: false },
          { content: 'Luôn làm giảm đa dạng di truyền', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc tự nhiên có mấy hình thức cơ bản?',
        answers: [
          { content: '2 hình thức: chọn lọc ổn định và chọn lọc vận động', isCorrect: false },
          { content: '3 hình thức: chọn lọc ổn định, chọn lọc vận động, chọn lọc phân hóa', isCorrect: true },
          { content: '4 hình thức', isCorrect: false },
          { content: '1 hình thức duy nhất', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc ổn định có đặc điểm gì?',
        answers: [
          { content: 'Bảo tồn các cá thể mang tính trạng trung bình, đào thải các biến dị lệch xa mức trung bình', isCorrect: true },
          { content: 'Đào thải các cá thể mang tính trạng trung bình', isCorrect: false },
          { content: 'Tách quần thể thành nhiều nhóm', isCorrect: false },
          { content: 'Làm thay đổi tần số alen theo một hướng', isCorrect: false },
        ],
      },
      {
        content: 'Hóa thạch là bằng chứng tiến hóa thuộc loại nào?',
        answers: [
          { content: 'Bằng chứng sinh học phân tử', isCorrect: false },
          { content: 'Bằng chứng giải phẫu so sánh', isCorrect: false },
          { content: 'Bằng chứng cổ sinh vật học', isCorrect: true },
          { content: 'Bằng chứng phôi sinh học', isCorrect: false },
        ],
      },
      {
        content: 'Giao phối không ngẫu nhiên ảnh hưởng đến quần thể như thế nào?',
        answers: [
          { content: 'Làm thay đổi tần số alen', isCorrect: false },
          { content: 'Làm thay đổi thành phần kiểu gen (tăng đồng hợp, giảm dị hợp)', isCorrect: true },
          { content: 'Không ảnh hưởng gì', isCorrect: false },
          { content: 'Làm tăng tỉ lệ dị hợp', isCorrect: false },
        ],
      },
      {
        content: 'Theo thuyết tiến hóa tổng hợp, nhân tố nào tạo ra nguồn nguyên liệu thứ cấp cho tiến hóa?',
        answers: [
          { content: 'Đột biến', isCorrect: false },
          { content: 'Giao phối (biến dị tổ hợp)', isCorrect: true },
          { content: 'Chọn lọc tự nhiên', isCorrect: false },
          { content: 'Cách li địa lý', isCorrect: false },
        ],
      },
      {
        content: 'Chọn lọc vận động có đặc điểm gì?',
        answers: [
          { content: 'Bảo tồn các cá thể mang tính trạng trung bình', isCorrect: false },
          { content: 'Đào thải các cá thể mang tính trạng ở một đầu, bảo tồn các cá thể có tính trạng lệch về phía đầu kia', isCorrect: true },
          { content: 'Tách quần thể thành hai nhóm', isCorrect: false },
          { content: 'Không làm thay đổi tần số alen', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Sinh thái học
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-sinh-hoc',
    title: 'Đề trắc nghiệm Sinh Học 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-sinh-hoc-de-5',
    description:
      'Đề trắc nghiệm Sinh Học 12 chủ đề Sinh thái học: quần thể, quần xã, hệ sinh thái, sinh quyển, chu trình vật chất.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quần thể sinh vật là gì?',
        answers: [
          { content: 'Tập hợp các cá thể khác loài sống trong cùng một khu vực', isCorrect: false },
          { content: 'Tập hợp các cá thể cùng loài, sống trong cùng khu vực, cùng thời điểm, có khả năng giao phối sinh sản', isCorrect: true },
          { content: 'Tập hợp các loài sống trong cùng một sinh cảnh', isCorrect: false },
          { content: 'Tập hợp các cá thể cùng loài sống ở các khu vực khác nhau', isCorrect: false },
        ],
      },
      {
        content: 'Kích thước quần thể là gì?',
        answers: [
          { content: 'Diện tích khu vực phân bố của quần thể', isCorrect: false },
          { content: 'Số lượng cá thể (hoặc khối lượng, năng lượng) của quần thể', isCorrect: true },
          { content: 'Mật độ cá thể trên một đơn vị diện tích', isCorrect: false },
          { content: 'Tỉ lệ giới tính của quần thể', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ nào sau đây là quan hệ hỗ trợ cùng loài?',
        answers: [
          { content: 'Cạnh tranh thức ăn', isCorrect: false },
          { content: 'Quần tụ thành bầy đàn', isCorrect: true },
          { content: 'Ký sinh', isCorrect: false },
          { content: 'Ăn thịt lẫn nhau', isCorrect: false },
        ],
      },
      {
        content: 'Quần xã sinh vật là gì?',
        answers: [
          { content: 'Tập hợp các cá thể cùng loài', isCorrect: false },
          { content: 'Tập hợp các quần thể thuộc nhiều loài khác nhau sống trong cùng một không gian và thời gian', isCorrect: true },
          { content: 'Tập hợp các hệ sinh thái', isCorrect: false },
          { content: 'Tập hợp các cá thể sống trong cùng một môi trường', isCorrect: false },
        ],
      },
      {
        content: 'Chuỗi thức ăn là gì?',
        answers: [
          { content: 'Một dãy các loài sinh vật có quan hệ dinh dưỡng với nhau, mỗi loài là mắt xích tiêu thụ mắt xích trước nó', isCorrect: true },
          { content: 'Tập hợp tất cả các loài trong quần xã', isCorrect: false },
          { content: 'Mối quan hệ cạnh tranh giữa các loài', isCorrect: false },
          { content: 'Sự trao đổi chất giữa sinh vật và môi trường', isCorrect: false },
        ],
      },
      {
        content: 'Trong hệ sinh thái, sinh vật sản xuất là nhóm nào?',
        answers: [
          { content: 'Động vật ăn thực vật', isCorrect: false },
          { content: 'Sinh vật tự dưỡng (chủ yếu là thực vật)', isCorrect: true },
          { content: 'Vi sinh vật phân giải', isCorrect: false },
          { content: 'Động vật ăn thịt', isCorrect: false },
        ],
      },
      {
        content: 'Tháp sinh thái nào luôn có dạng chuẩn (đáy rộng, đỉnh hẹp)?',
        answers: [
          { content: 'Tháp số lượng', isCorrect: false },
          { content: 'Tháp sinh khối', isCorrect: false },
          { content: 'Tháp năng lượng', isCorrect: true },
          { content: 'Cả ba loại tháp', isCorrect: false },
        ],
      },
      {
        content: 'Chu trình cacbon trong tự nhiên diễn ra như thế nào?',
        answers: [
          { content: 'Cacbon chỉ di chuyển từ sinh vật sang môi trường', isCorrect: false },
          { content: 'Cacbon tuần hoàn giữa môi trường và quần xã sinh vật qua quang hợp và hô hấp', isCorrect: true },
          { content: 'Cacbon chỉ tồn tại trong cơ thể sinh vật', isCorrect: false },
          { content: 'Cacbon không tham gia vào chu trình sinh địa hóa', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ cộng sinh là gì?',
        answers: [
          { content: 'Hai loài cùng có lợi nhưng không bắt buộc', isCorrect: false },
          { content: 'Hai loài cùng có lợi và bắt buộc phải sống chung', isCorrect: true },
          { content: 'Một loài có lợi, loài kia không bị ảnh hưởng', isCorrect: false },
          { content: 'Một loài có lợi, loài kia bị hại', isCorrect: false },
        ],
      },
      {
        content: 'Diễn thế sinh thái là gì?',
        answers: [
          { content: 'Sự biến đổi số lượng cá thể trong quần thể', isCorrect: false },
          { content: 'Quá trình biến đổi tuần tự của quần xã qua các giai đoạn, tương ứng với sự biến đổi của môi trường', isCorrect: true },
          { content: 'Sự thay đổi khí hậu theo mùa', isCorrect: false },
          { content: 'Sự di cư của các loài', isCorrect: false },
        ],
      },
      {
        content: 'Sinh quyển là gì?',
        answers: [
          { content: 'Một hệ sinh thái cụ thể', isCorrect: false },
          { content: 'Toàn bộ sinh vật và các nhân tố vô sinh trên Trái Đất, là hệ sinh thái lớn nhất', isCorrect: true },
          { content: 'Một quần xã sinh vật', isCorrect: false },
          { content: 'Tầng khí quyển bao quanh Trái Đất', isCorrect: false },
        ],
      },
      {
        content: 'Hiệu suất sinh thái là gì?',
        answers: [
          { content: 'Tổng năng lượng của hệ sinh thái', isCorrect: false },
          { content: 'Tỉ lệ phần trăm năng lượng chuyển hóa giữa các bậc dinh dưỡng liên tiếp', isCorrect: true },
          { content: 'Năng lượng mặt trời chiếu xuống hệ sinh thái', isCorrect: false },
          { content: 'Năng lượng do sinh vật sản xuất tạo ra', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ hội sinh là gì?',
        answers: [
          { content: 'Hai loài cùng có lợi', isCorrect: false },
          { content: 'Một loài có lợi, loài kia không bị ảnh hưởng', isCorrect: true },
          { content: 'Hai loài cùng bị hại', isCorrect: false },
          { content: 'Một loài có lợi, loài kia bị hại', isCorrect: false },
        ],
      },
      {
        content: 'Tăng trưởng theo tiềm năng sinh học (hàm mũ) của quần thể xảy ra khi nào?',
        answers: [
          { content: 'Môi trường bị giới hạn', isCorrect: false },
          { content: 'Điều kiện môi trường hoàn toàn thuận lợi, không có giới hạn', isCorrect: true },
          { content: 'Quần thể có kích thước lớn', isCorrect: false },
          { content: 'Có nhiều kẻ thù tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Lưới thức ăn là gì?',
        answers: [
          { content: 'Một chuỗi thức ăn duy nhất', isCorrect: false },
          { content: 'Tập hợp các chuỗi thức ăn có chung mắt xích', isCorrect: true },
          { content: 'Mối quan hệ giữa hai loài', isCorrect: false },
          { content: 'Sự cạnh tranh giữa các loài', isCorrect: false },
        ],
      },
      {
        content: 'Ổ sinh thái là gì?',
        answers: [
          { content: 'Nơi ở của sinh vật', isCorrect: false },
          { content: 'Không gian sinh thái mà ở đó tất cả các nhân tố sinh thái nằm trong giới hạn cho phép loài tồn tại và phát triển', isCorrect: true },
          { content: 'Khu vực phân bố của loài', isCorrect: false },
          { content: 'Môi trường sống của quần xã', isCorrect: false },
        ],
      },
      {
        content: 'Chu trình nitơ trong tự nhiên có đặc điểm gì?',
        answers: [
          { content: 'Nitơ chỉ tồn tại ở dạng khí N₂', isCorrect: false },
          { content: 'Vi khuẩn cố định đạm chuyển N₂ thành NH₃, thực vật hấp thụ dạng NO₃⁻ và NH₄⁺', isCorrect: true },
          { content: 'Thực vật hấp thụ trực tiếp N₂ từ không khí', isCorrect: false },
          { content: 'Nitơ không tham gia chu trình sinh địa hóa', isCorrect: false },
        ],
      },
      {
        content: 'Mật độ quần thể là gì?',
        answers: [
          { content: 'Tổng số cá thể của quần thể', isCorrect: false },
          { content: 'Số lượng cá thể trên một đơn vị diện tích hoặc thể tích', isCorrect: true },
          { content: 'Tỉ lệ sinh sản của quần thể', isCorrect: false },
          { content: 'Tỉ lệ tử vong của quần thể', isCorrect: false },
        ],
      },
      {
        content: 'Loài ưu thế trong quần xã là loài có đặc điểm gì?',
        answers: [
          { content: 'Có số lượng ít nhất', isCorrect: false },
          { content: 'Có số lượng nhiều, sinh khối lớn, hoạt động mạnh, đóng vai trò quan trọng trong quần xã', isCorrect: true },
          { content: 'Chỉ có mặt ở một quần xã nhất định', isCorrect: false },
          { content: 'Là loài mới xuất hiện trong quần xã', isCorrect: false },
        ],
      },
      {
        content: 'Dòng năng lượng trong hệ sinh thái đi theo hướng nào?',
        answers: [
          { content: 'Tuần hoàn trong hệ sinh thái', isCorrect: false },
          { content: 'Một chiều: sinh vật sản xuất → sinh vật tiêu thụ → sinh vật phân giải', isCorrect: true },
          { content: 'Từ sinh vật tiêu thụ đến sinh vật sản xuất', isCorrect: false },
          { content: 'Ngẫu nhiên giữa các bậc dinh dưỡng', isCorrect: false },
        ],
      },
      {
        content: 'Diễn thế nguyên sinh bắt đầu từ đâu?',
        answers: [
          { content: 'Môi trường đã có quần xã sinh vật', isCorrect: false },
          { content: 'Môi trường trống trơn chưa có sinh vật', isCorrect: true },
          { content: 'Quần xã đang ở trạng thái đỉnh cực', isCorrect: false },
          { content: 'Quần xã bị suy thoái', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ cạnh tranh khác loài có vai trò gì trong tiến hóa?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Là động lực thúc đẩy sự phân hóa ổ sinh thái, giảm cạnh tranh', isCorrect: true },
          { content: 'Luôn dẫn đến tuyệt chủng', isCorrect: false },
          { content: 'Làm tăng số lượng cả hai loài', isCorrect: false },
        ],
      },
      {
        content: 'Hệ sinh thái bao gồm những thành phần nào?',
        answers: [
          { content: 'Chỉ gồm quần xã sinh vật', isCorrect: false },
          { content: 'Quần xã sinh vật và sinh cảnh (môi trường vô sinh)', isCorrect: true },
          { content: 'Chỉ gồm các nhân tố vô sinh', isCorrect: false },
          { content: 'Chỉ gồm sinh vật sản xuất và sinh vật tiêu thụ', isCorrect: false },
        ],
      },
      {
        content: 'Sự biến động số lượng cá thể theo chu kỳ thường do nguyên nhân nào?',
        answers: [
          { content: 'Do con người tác động', isCorrect: false },
          { content: 'Do sự thay đổi có chu kỳ của điều kiện môi trường (mùa, năm)', isCorrect: true },
          { content: 'Do đột biến gen', isCorrect: false },
          { content: 'Do di cư ngẫu nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Trong chuỗi thức ăn, năng lượng được truyền từ bậc dinh dưỡng thấp lên bậc dinh dưỡng cao thường mất đi khoảng bao nhiêu phần trăm?',
        answers: [
          { content: 'Khoảng 10%', isCorrect: false },
          { content: 'Khoảng 50%', isCorrect: false },
          { content: 'Khoảng 90%', isCorrect: true },
          { content: 'Khoảng 100%', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
