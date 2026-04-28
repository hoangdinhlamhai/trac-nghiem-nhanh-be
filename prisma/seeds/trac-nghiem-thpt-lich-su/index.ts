import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Việt Nam 1919-1945
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-lich-su',
    title: 'Đề trắc nghiệm Lịch Sử 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-lich-su-de-1',
    description:
      'Đề trắc nghiệm Lịch Sử 12 chủ đề Việt Nam 1919-1945: phong trào yêu nước, thành lập Đảng, Cách mạng tháng Tám.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Nguyễn Ái Quốc đến Pháp lần đầu tiên vào năm nào?',
        answers: [
          { content: '1917', isCorrect: false },
          { content: '1919', isCorrect: false },
          { content: '1911', isCorrect: true },
          { content: '1920', isCorrect: false },
        ],
      },
      {
        content: 'Bản "Yêu sách của nhân dân An Nam" được Nguyễn Ái Quốc gửi đến Hội nghị nào?',
        answers: [
          { content: 'Hội nghị Giơ-ne-vơ', isCorrect: false },
          { content: 'Hội nghị Véc-xai', isCorrect: true },
          { content: 'Hội nghị Pốt-xđam', isCorrect: false },
          { content: 'Hội nghị I-an-ta', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào?',
        answers: [
          { content: '3/2/1930', isCorrect: true },
          { content: '6/1/1930', isCorrect: false },
          { content: '19/5/1930', isCorrect: false },
          { content: '1/5/1930', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị thành lập Đảng Cộng sản Việt Nam diễn ra ở đâu?',
        answers: [
          { content: 'Quảng Châu (Trung Quốc)', isCorrect: false },
          { content: 'Hương Cảng (Trung Quốc)', isCorrect: true },
          { content: 'Mát-xcơ-va (Liên Xô)', isCorrect: false },
          { content: 'Hà Nội (Việt Nam)', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào Xô viết Nghệ - Tĩnh diễn ra vào năm nào?',
        answers: [
          { content: '1929', isCorrect: false },
          { content: '1930 - 1931', isCorrect: true },
          { content: '1932', isCorrect: false },
          { content: '1936', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng tháng Tám năm 1945 thành công vào ngày nào?',
        answers: [
          { content: '2/9/1945', isCorrect: false },
          { content: '19/8/1945', isCorrect: true },
          { content: '15/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
        ],
      },
      {
        content: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa vào ngày nào?',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: true },
          { content: '25/8/1945', isCorrect: false },
          { content: '30/8/1945', isCorrect: false },
        ],
      },
      {
        content: 'Mặt trận Việt Minh được thành lập vào năm nào?',
        answers: [
          { content: '1930', isCorrect: false },
          { content: '1936', isCorrect: false },
          { content: '1941', isCorrect: true },
          { content: '1945', isCorrect: false },
        ],
      },
      {
        content: 'Nguyễn Ái Quốc tham gia Đại hội lần thứ XVIII của Đảng Xã hội Pháp (Đại hội Tua) vào năm nào?',
        answers: [
          { content: '1919', isCorrect: false },
          { content: '1920', isCorrect: true },
          { content: '1921', isCorrect: false },
          { content: '1925', isCorrect: false },
        ],
      },
      {
        content: 'Tại Đại hội Tua (12/1920), Nguyễn Ái Quốc đã bỏ phiếu tán thành điều gì?',
        answers: [
          { content: 'Gia nhập Quốc tế thứ hai', isCorrect: false },
          { content: 'Gia nhập Quốc tế thứ ba (Quốc tế Cộng sản)', isCorrect: true },
          { content: 'Thành lập Đảng Xã hội Pháp', isCorrect: false },
          { content: 'Gia nhập Quốc tế thứ nhất', isCorrect: false },
        ],
      },
      {
        content: 'Hội Việt Nam Cách mạng Thanh niên được Nguyễn Ái Quốc thành lập ở đâu?',
        answers: [
          { content: 'Hà Nội', isCorrect: false },
          { content: 'Quảng Châu (Trung Quốc)', isCorrect: true },
          { content: 'Pari (Pháp)', isCorrect: false },
          { content: 'Mát-xcơ-va (Liên Xô)', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc khai thác thuộc địa lần thứ hai của Pháp ở Đông Dương diễn ra trong giai đoạn nào?',
        answers: [
          { content: '1897 - 1914', isCorrect: false },
          { content: '1919 - 1929', isCorrect: true },
          { content: '1930 - 1939', isCorrect: false },
          { content: '1940 - 1945', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào dân chủ 1936 - 1939 ở Việt Nam có mục tiêu trước mắt là gì?',
        answers: [
          { content: 'Đánh đổ đế quốc Pháp', isCorrect: false },
          { content: 'Chống phát xít, chống chiến tranh, đòi tự do, dân chủ, cơm áo, hòa bình', isCorrect: true },
          { content: 'Giành độc lập dân tộc', isCorrect: false },
          { content: 'Thực hiện cách mạng ruộng đất', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị lần thứ 8 Ban Chấp hành Trung ương Đảng (5/1941) quyết định vấn đề gì quan trọng nhất?',
        answers: [
          { content: 'Thành lập Đảng Cộng sản Đông Dương', isCorrect: false },
          { content: 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu', isCorrect: true },
          { content: 'Tiến hành cách mạng ruộng đất', isCorrect: false },
          { content: 'Thành lập Mặt trận Liên Việt', isCorrect: false },
        ],
      },
      {
        content: 'Nhật đảo chính Pháp ở Đông Dương vào ngày nào?',
        answers: [
          { content: '9/3/1945', isCorrect: true },
          { content: '19/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
          { content: '15/8/1945', isCorrect: false },
        ],
      },
      {
        content: 'Sau khi Nhật đảo chính Pháp, Đảng Cộng sản Đông Dương ra chỉ thị gì?',
        answers: [
          { content: '"Toàn dân kháng chiến"', isCorrect: false },
          { content: '"Nhật - Pháp bắn nhau và hành động của chúng ta"', isCorrect: true },
          { content: '"Kháng chiến kiến quốc"', isCorrect: false },
          { content: '"Tổng khởi nghĩa"', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội Quốc dân Tân Trào (8/1945) quyết định điều gì?',
        answers: [
          { content: 'Thành lập Đảng Cộng sản', isCorrect: false },
          { content: 'Tổng khởi nghĩa giành chính quyền trong cả nước', isCorrect: true },
          { content: 'Thành lập Mặt trận Việt Minh', isCorrect: false },
          { content: 'Đàm phán với Pháp', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân cơ bản nhất quyết định thắng lợi của Cách mạng tháng Tám 1945 là gì?',
        answers: [
          { content: 'Phát xít Nhật đầu hàng Đồng minh', isCorrect: false },
          { content: 'Sự lãnh đạo đúng đắn của Đảng Cộng sản Đông Dương', isCorrect: true },
          { content: 'Truyền thống yêu nước của dân tộc', isCorrect: false },
          { content: 'Sự giúp đỡ của quốc tế', isCorrect: false },
        ],
      },
      {
        content: 'Tác phẩm "Đường Kách mệnh" của Nguyễn Ái Quốc được xuất bản năm nào?',
        answers: [
          { content: '1925', isCorrect: false },
          { content: '1927', isCorrect: true },
          { content: '1930', isCorrect: false },
          { content: '1920', isCorrect: false },
        ],
      },
      {
        content: 'Ba tổ chức cộng sản ra đời ở Việt Nam năm 1929 gồm những tổ chức nào?',
        answers: [
          { content: 'Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn', isCorrect: true },
          { content: 'Việt Nam Quốc dân Đảng, Tân Việt, Thanh niên', isCorrect: false },
          { content: 'Đảng Lập hiến, Đảng Thanh niên, Đảng Dân chủ', isCorrect: false },
          { content: 'Hội Phục Việt, Hội Hưng Nam, Tân Việt', isCorrect: false },
        ],
      },
      {
        content: 'Cương lĩnh chính trị đầu tiên của Đảng Cộng sản Việt Nam do ai soạn thảo?',
        answers: [
          { content: 'Trần Phú', isCorrect: false },
          { content: 'Nguyễn Ái Quốc', isCorrect: true },
          { content: 'Lê Hồng Phong', isCorrect: false },
          { content: 'Hà Huy Tập', isCorrect: false },
        ],
      },
      {
        content: 'Nạn đói năm 1945 ở Việt Nam làm khoảng bao nhiêu người chết?',
        answers: [
          { content: 'Khoảng 1 triệu người', isCorrect: false },
          { content: 'Khoảng 2 triệu người', isCorrect: true },
          { content: 'Khoảng 500 nghìn người', isCorrect: false },
          { content: 'Khoảng 3 triệu người', isCorrect: false },
        ],
      },
      {
        content: 'Tuyên ngôn Độc lập ngày 2/9/1945 trích dẫn tuyên ngôn của những nước nào?',
        answers: [
          { content: 'Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền của Pháp (1789)', isCorrect: true },
          { content: 'Tuyên ngôn của Liên Xô và Trung Quốc', isCorrect: false },
          { content: 'Tuyên ngôn của Anh và Pháp', isCorrect: false },
          { content: 'Tuyên ngôn của Liên Hợp Quốc', isCorrect: false },
        ],
      },
      {
        content: 'Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?',
        answers: [
          { content: '1924', isCorrect: false },
          { content: '1925', isCorrect: true },
          { content: '1927', isCorrect: false },
          { content: '1930', isCorrect: false },
        ],
      },
      {
        content: 'Chính phủ lâm thời nước Việt Nam Dân chủ Cộng hòa ra mắt quốc dân vào ngày nào?',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: true },
          { content: '28/8/1945', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Kháng chiến chống Pháp 1945-1954
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-lich-su',
    title: 'Đề trắc nghiệm Lịch Sử 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-lich-su-de-2',
    description:
      'Đề trắc nghiệm Lịch Sử 12 chủ đề Kháng chiến chống Pháp 1945-1954: chiến dịch, Điện Biên Phủ, Giơ-ne-vơ.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Sau Cách mạng tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa phải đối mặt với những khó khăn nào?',
        answers: [
          { content: 'Giặc đói, giặc dốt, giặc ngoại xâm', isCorrect: true },
          { content: 'Chỉ có giặc ngoại xâm', isCorrect: false },
          { content: 'Chỉ có khó khăn về kinh tế', isCorrect: false },
          { content: 'Chỉ có nạn mù chữ', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Sơ bộ ngày 6/3/1946 được ký kết giữa ai?',
        answers: [
          { content: 'Việt Nam và Nhật Bản', isCorrect: false },
          { content: 'Việt Nam Dân chủ Cộng hòa và Pháp', isCorrect: true },
          { content: 'Việt Nam và Trung Hoa Dân Quốc', isCorrect: false },
          { content: 'Việt Nam và Anh', isCorrect: false },
        ],
      },
      {
        content: 'Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi vào ngày nào?',
        answers: [
          { content: '19/12/1946', isCorrect: true },
          { content: '2/9/1945', isCorrect: false },
          { content: '6/3/1946', isCorrect: false },
          { content: '22/12/1946', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Việt Bắc thu - đông 1947 có ý nghĩa gì?',
        answers: [
          { content: 'Kết thúc cuộc kháng chiến chống Pháp', isCorrect: false },
          { content: 'Đánh bại chiến lược "đánh nhanh thắng nhanh" của Pháp', isCorrect: true },
          { content: 'Giải phóng hoàn toàn miền Bắc', isCorrect: false },
          { content: 'Buộc Pháp ký hiệp định đình chiến', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Biên giới thu - đông 1950 nhằm mục đích gì?',
        answers: [
          { content: 'Giải phóng Hà Nội', isCorrect: false },
          { content: 'Khai thông biên giới Việt - Trung, mở rộng và củng cố căn cứ địa Việt Bắc', isCorrect: true },
          { content: 'Đánh chiếm Điện Biên Phủ', isCorrect: false },
          { content: 'Giải phóng Đông Dương', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội Đảng lần thứ II (2/1951) quyết định đổi tên Đảng thành gì?',
        answers: [
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: false },
          { content: 'Đảng Lao động Việt Nam', isCorrect: true },
          { content: 'Đảng Cộng sản Đông Dương', isCorrect: false },
          { content: 'Đảng Nhân dân Cách mạng', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Điện Biên Phủ diễn ra trong khoảng thời gian nào?',
        answers: [
          { content: '13/3 - 7/5/1954', isCorrect: true },
          { content: '1/1 - 30/4/1954', isCorrect: false },
          { content: '5/1 - 15/3/1954', isCorrect: false },
          { content: '20/3 - 20/5/1954', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Điện Biên Phủ được chia thành mấy đợt tiến công?',
        answers: [
          { content: '2 đợt', isCorrect: false },
          { content: '3 đợt', isCorrect: true },
          { content: '4 đợt', isCorrect: false },
          { content: '5 đợt', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Giơ-ne-vơ về Đông Dương được ký kết vào ngày nào?',
        answers: [
          { content: '7/5/1954', isCorrect: false },
          { content: '21/7/1954', isCorrect: true },
          { content: '20/7/1954', isCorrect: false },
          { content: '8/5/1954', isCorrect: false },
        ],
      },
      {
        content: 'Theo Hiệp định Giơ-ne-vơ, Việt Nam tạm thời chia cắt tại vĩ tuyến nào?',
        answers: [
          { content: 'Vĩ tuyến 16', isCorrect: false },
          { content: 'Vĩ tuyến 17', isCorrect: true },
          { content: 'Vĩ tuyến 18', isCorrect: false },
          { content: 'Vĩ tuyến 20', isCorrect: false },
        ],
      },
      {
        content: 'Đường lối kháng chiến chống Pháp của Đảng là gì?',
        answers: [
          { content: 'Kháng chiến toàn dân, toàn diện, trường kỳ, tự lực cánh sinh', isCorrect: true },
          { content: 'Đánh nhanh thắng nhanh', isCorrect: false },
          { content: 'Chỉ dựa vào viện trợ quốc tế', isCorrect: false },
          { content: 'Chỉ đánh du kích', isCorrect: false },
        ],
      },
      {
        content: 'Ai là Tổng chỉ huy chiến dịch Điện Biên Phủ phía Việt Nam?',
        answers: [
          { content: 'Hồ Chí Minh', isCorrect: false },
          { content: 'Võ Nguyên Giáp', isCorrect: true },
          { content: 'Phạm Văn Đồng', isCorrect: false },
          { content: 'Trường Chinh', isCorrect: false },
        ],
      },
      {
        content: 'Pháp xây dựng tập đoàn cứ điểm Điện Biên Phủ nhằm mục đích gì?',
        answers: [
          { content: 'Thu hút và tiêu diệt bộ đội chủ lực của ta', isCorrect: true },
          { content: 'Bảo vệ Lào', isCorrect: false },
          { content: 'Mở rộng vùng chiếm đóng', isCorrect: false },
          { content: 'Đàm phán hòa bình', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Điện Biên Phủ có ý nghĩa quốc tế gì?',
        answers: [
          { content: 'Chỉ có ý nghĩa với Việt Nam', isCorrect: false },
          { content: 'Cổ vũ phong trào giải phóng dân tộc trên thế giới, đặc biệt ở châu Á và châu Phi', isCorrect: true },
          { content: 'Kết thúc Chiến tranh thế giới thứ hai', isCorrect: false },
          { content: 'Chấm dứt chủ nghĩa thực dân trên toàn thế giới', isCorrect: false },
        ],
      },
      {
        content: 'Tướng Pháp chỉ huy tập đoàn cứ điểm Điện Biên Phủ là ai?',
        answers: [
          { content: 'Na-va', isCorrect: false },
          { content: 'Đờ Cát-xtơ-ri', isCorrect: true },
          { content: 'Đờ Lát-tơ-rơ đờ Tát-xi-nhi', isCorrect: false },
          { content: 'Bô-la-e', isCorrect: false },
        ],
      },
      {
        content: 'Kế hoạch Na-va được Pháp thực hiện từ khi nào?',
        answers: [
          { content: 'Đầu năm 1953', isCorrect: false },
          { content: 'Giữa năm 1953', isCorrect: true },
          { content: 'Cuối năm 1952', isCorrect: false },
          { content: 'Đầu năm 1954', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc Tổng tuyển cử đầu tiên của nước Việt Nam Dân chủ Cộng hòa diễn ra vào ngày nào?',
        answers: [
          { content: '6/1/1946', isCorrect: true },
          { content: '2/9/1945', isCorrect: false },
          { content: '19/12/1946', isCorrect: false },
          { content: '3/2/1946', isCorrect: false },
        ],
      },
      {
        content: 'Tạm ước 14/9/1946 được ký kết giữa Việt Nam và Pháp nhằm mục đích gì?',
        answers: [
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Kéo dài thời gian hòa hoãn để chuẩn bị kháng chiến', isCorrect: true },
          { content: 'Pháp công nhận độc lập của Việt Nam', isCorrect: false },
          { content: 'Thống nhất đất nước', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng nào đánh dấu quân đội Việt Nam giành được quyền chủ động chiến lược trên chiến trường chính Bắc Bộ?',
        answers: [
          { content: 'Chiến dịch Việt Bắc 1947', isCorrect: false },
          { content: 'Chiến dịch Biên giới 1950', isCorrect: true },
          { content: 'Chiến dịch Hòa Bình 1952', isCorrect: false },
          { content: 'Chiến dịch Điện Biên Phủ 1954', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung cơ bản của Hiệp định Giơ-ne-vơ 1954 về Đông Dương là gì?',
        answers: [
          { content: 'Pháp công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của ba nước Đông Dương', isCorrect: true },
          { content: 'Pháp tiếp tục cai trị Đông Dương', isCorrect: false },
          { content: 'Mỹ thay Pháp ở Đông Dương', isCorrect: false },
          { content: 'Chia cắt vĩnh viễn Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào "Tuần lễ vàng" (9/1945) nhằm mục đích gì?',
        answers: [
          { content: 'Quyên góp vàng để giải quyết khó khăn tài chính cho chính quyền cách mạng', isCorrect: true },
          { content: 'Mua vũ khí từ nước ngoài', isCorrect: false },
          { content: 'Phát triển kinh tế', isCorrect: false },
          { content: 'Xây dựng cơ sở hạ tầng', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Hòa Bình đông - xuân 1951-1952 do ai chỉ huy phía Pháp?',
        answers: [
          { content: 'Na-va', isCorrect: false },
          { content: 'Đờ Lát-tơ-rơ đờ Tát-xi-nhi', isCorrect: true },
          { content: 'Đờ Cát-xtơ-ri', isCorrect: false },
          { content: 'Xa-lăng', isCorrect: false },
        ],
      },
      {
        content: 'Phương châm tác chiến của ta trong chiến dịch Điện Biên Phủ được thay đổi từ "đánh nhanh thắng nhanh" sang phương châm nào?',
        answers: [
          { content: '"Đánh du kích"', isCorrect: false },
          { content: '"Đánh chắc, tiến chắc"', isCorrect: true },
          { content: '"Đánh điểm, diệt viện"', isCorrect: false },
          { content: '"Vây hãm"', isCorrect: false },
        ],
      },
      {
        content: 'Anh hùng Tô Vĩnh Diện đã hy sinh trong chiến dịch nào?',
        answers: [
          { content: 'Chiến dịch Biên giới 1950', isCorrect: false },
          { content: 'Chiến dịch Điện Biên Phủ 1954', isCorrect: true },
          { content: 'Chiến dịch Việt Bắc 1947', isCorrect: false },
          { content: 'Chiến dịch Hòa Bình 1952', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Đông Khê (9/1950) trong chiến dịch Biên giới có ý nghĩa gì?',
        answers: [
          { content: 'Là trận mở đầu, tạo điều kiện cho ta bao vây tiêu diệt quân Pháp trên Đường số 4', isCorrect: true },
          { content: 'Kết thúc chiến dịch Biên giới', isCorrect: false },
          { content: 'Buộc Pháp rút khỏi Đông Dương', isCorrect: false },
          { content: 'Giải phóng Hà Nội', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 3: Kháng chiến chống Mỹ 1954-1975
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-lich-su',
    title: 'Đề trắc nghiệm Lịch Sử 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-lich-su-de-3',
    description:
      'Đề trắc nghiệm Lịch Sử 12 chủ đề Kháng chiến chống Mỹ 1954-1975: phong trào, chiến lược, Hiệp định Paris, 30/4.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Phong trào "Đồng khởi" ở miền Nam diễn ra vào năm nào?',
        answers: [
          { content: '1958', isCorrect: false },
          { content: '1959 - 1960', isCorrect: true },
          { content: '1961', isCorrect: false },
          { content: '1963', isCorrect: false },
        ],
      },
      {
        content: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập vào ngày nào?',
        answers: [
          { content: '20/12/1960', isCorrect: true },
          { content: '1/1/1961', isCorrect: false },
          { content: '6/1/1960', isCorrect: false },
          { content: '30/4/1960', isCorrect: false },
        ],
      },
      {
        content: 'Chiến lược "Chiến tranh đặc biệt" của Mỹ ở miền Nam được thực hiện trong giai đoạn nào?',
        answers: [
          { content: '1954 - 1960', isCorrect: false },
          { content: '1961 - 1965', isCorrect: true },
          { content: '1965 - 1968', isCorrect: false },
          { content: '1969 - 1973', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Ấp Bắc (1/1963) có ý nghĩa gì?',
        answers: [
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Chứng tỏ quân dân miền Nam có khả năng đánh bại chiến lược "Chiến tranh đặc biệt"', isCorrect: true },
          { content: 'Buộc Mỹ rút quân', isCorrect: false },
          { content: 'Giải phóng Sài Gòn', isCorrect: false },
        ],
      },
      {
        content: 'Chiến lược "Chiến tranh cục bộ" của Mỹ bắt đầu từ năm nào?',
        answers: [
          { content: '1961', isCorrect: false },
          { content: '1965', isCorrect: true },
          { content: '1968', isCorrect: false },
          { content: '1969', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 có ý nghĩa gì?',
        answers: [
          { content: 'Giải phóng hoàn toàn miền Nam', isCorrect: false },
          { content: 'Buộc Mỹ phải tuyên bố "phi Mỹ hóa" chiến tranh và ngồi vào bàn đàm phán', isCorrect: true },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Mỹ tăng cường quân đội', isCorrect: false },
        ],
      },
      {
        content: 'Chiến lược "Việt Nam hóa chiến tranh" của Mỹ được thực hiện trong giai đoạn nào?',
        answers: [
          { content: '1965 - 1968', isCorrect: false },
          { content: '1969 - 1973', isCorrect: true },
          { content: '1973 - 1975', isCorrect: false },
          { content: '1961 - 1965', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Paris về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam được ký kết vào ngày nào?',
        answers: [
          { content: '27/1/1973', isCorrect: true },
          { content: '30/4/1975', isCorrect: false },
          { content: '21/7/1954', isCorrect: false },
          { content: '1/1/1973', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung quan trọng nhất của Hiệp định Paris 1973 là gì?',
        answers: [
          { content: 'Mỹ công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam', isCorrect: true },
          { content: 'Mỹ tiếp tục viện trợ cho Sài Gòn', isCorrect: false },
          { content: 'Chia cắt vĩnh viễn Việt Nam', isCorrect: false },
          { content: 'Mỹ được giữ quân ở miền Nam', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Hồ Chí Minh bắt đầu vào ngày nào?',
        answers: [
          { content: '10/3/1975', isCorrect: false },
          { content: '26/4/1975', isCorrect: true },
          { content: '30/4/1975', isCorrect: false },
          { content: '1/5/1975', isCorrect: false },
        ],
      },
      {
        content: 'Ngày 30/4/1975 đánh dấu sự kiện gì?',
        answers: [
          { content: 'Ký Hiệp định Paris', isCorrect: false },
          { content: 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước', isCorrect: true },
          { content: 'Bắt đầu chiến dịch Hồ Chí Minh', isCorrect: false },
          { content: 'Mỹ rút quân khỏi Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Vạn Tường (8/1965) có ý nghĩa gì?',
        answers: [
          { content: 'Chứng tỏ quân dân miền Nam có khả năng đánh bại quân Mỹ trong "Chiến tranh cục bộ"', isCorrect: true },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Buộc Mỹ ký hiệp định', isCorrect: false },
          { content: 'Giải phóng Đà Nẵng', isCorrect: false },
        ],
      },
      {
        content: 'Đường Trường Sơn (đường Hồ Chí Minh) được mở vào năm nào?',
        answers: [
          { content: '1954', isCorrect: false },
          { content: '1959', isCorrect: true },
          { content: '1961', isCorrect: false },
          { content: '1965', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Tây Nguyên (3/1975) mở đầu cuộc Tổng tiến công mùa Xuân 1975 với trận đánh nào?',
        answers: [
          { content: 'Đánh Huế', isCorrect: false },
          { content: 'Đánh Buôn Ma Thuột', isCorrect: true },
          { content: 'Đánh Đà Nẵng', isCorrect: false },
          { content: 'Đánh Sài Gòn', isCorrect: false },
        ],
      },
      {
        content: 'Mỹ tiến hành chiến tranh phá hoại miền Bắc lần thứ nhất trong giai đoạn nào?',
        answers: [
          { content: '1964 - 1968', isCorrect: true },
          { content: '1969 - 1972', isCorrect: false },
          { content: '1972 - 1973', isCorrect: false },
          { content: '1961 - 1965', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch "Điện Biên Phủ trên không" (12/1972) diễn ra ở đâu?',
        answers: [
          { content: 'Điện Biên Phủ', isCorrect: false },
          { content: 'Hà Nội và Hải Phòng', isCorrect: true },
          { content: 'Sài Gòn', isCorrect: false },
          { content: 'Huế', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Huế - Đà Nẵng (3/1975) kết thúc thắng lợi vào ngày nào?',
        answers: [
          { content: '26/3/1975', isCorrect: false },
          { content: '29/3/1975', isCorrect: true },
          { content: '30/4/1975', isCorrect: false },
          { content: '1/4/1975', isCorrect: false },
        ],
      },
      {
        content: 'Xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập vào lúc nào?',
        answers: [
          { content: '10 giờ 45 phút ngày 30/4/1975', isCorrect: false },
          { content: '11 giờ 30 phút ngày 30/4/1975', isCorrect: true },
          { content: '12 giờ ngày 30/4/1975', isCorrect: false },
          { content: '9 giờ ngày 30/4/1975', isCorrect: false },
        ],
      },
      {
        content: 'Tổng thống Mỹ nào ra lệnh ném bom miền Bắc Việt Nam bằng B-52 vào dịp Giáng sinh 1972?',
        answers: [
          { content: 'Kennedy', isCorrect: false },
          { content: 'Johnson', isCorrect: false },
          { content: 'Nixon', isCorrect: true },
          { content: 'Ford', isCorrect: false },
        ],
      },
      {
        content: 'Luật 10/59 do chính quyền Ngô Đình Diệm ban hành nhằm mục đích gì?',
        answers: [
          { content: 'Phát triển kinh tế miền Nam', isCorrect: false },
          { content: 'Đàn áp phong trào cách mạng, lê máy chém khắp miền Nam', isCorrect: true },
          { content: 'Cải cách ruộng đất', isCorrect: false },
          { content: 'Xây dựng ấp chiến lược', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Đường 14 - Phước Long (1/1975) có ý nghĩa gì?',
        answers: [
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Chứng tỏ sự suy yếu của quân đội Sài Gòn và khả năng Mỹ không can thiệp trở lại', isCorrect: true },
          { content: 'Giải phóng Sài Gòn', isCorrect: false },
          { content: 'Buộc Mỹ ký hiệp định', isCorrect: false },
        ],
      },
      {
        content: 'Tổng thống chính quyền Sài Gòn tuyên bố đầu hàng vô điều kiện ngày 30/4/1975 là ai?',
        answers: [
          { content: 'Nguyễn Văn Thiệu', isCorrect: false },
          { content: 'Dương Văn Minh', isCorrect: true },
          { content: 'Trần Văn Hương', isCorrect: false },
          { content: 'Nguyễn Cao Kỳ', isCorrect: false },
        ],
      },
      {
        content: '"Ấp chiến lược" là chính sách của Mỹ - Diệm trong chiến lược nào?',
        answers: [
          { content: 'Chiến tranh cục bộ', isCorrect: false },
          { content: 'Chiến tranh đặc biệt', isCorrect: true },
          { content: 'Việt Nam hóa chiến tranh', isCorrect: false },
          { content: 'Chiến tranh phá hoại', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Plây Me - Ia Đrăng (1965) thuộc chiến dịch mùa khô nào?',
        answers: [
          { content: 'Mùa khô thứ nhất (1965-1966)', isCorrect: true },
          { content: 'Mùa khô thứ hai (1966-1967)', isCorrect: false },
          { content: 'Tổng tiến công Mậu Thân 1968', isCorrect: false },
          { content: 'Chiến dịch Hồ Chí Minh', isCorrect: false },
        ],
      },
      {
        content: 'Sau Hiệp định Paris 1973, Mỹ phải thực hiện điều gì?',
        answers: [
          { content: 'Tiếp tục đưa quân vào miền Nam', isCorrect: false },
          { content: 'Rút hết quân đội và cố vấn quân sự khỏi miền Nam Việt Nam', isCorrect: true },
          { content: 'Tăng viện trợ quân sự cho Sài Gòn', isCorrect: false },
          { content: 'Ném bom trở lại miền Bắc', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Lịch sử thế giới
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-lich-su',
    title: 'Đề trắc nghiệm Lịch Sử 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-lich-su-de-4',
    description:
      'Đề trắc nghiệm Lịch Sử 12 chủ đề Lịch sử thế giới: Chiến tranh lạnh, phong trào giải phóng dân tộc, toàn cầu hóa.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Chiến tranh lạnh bắt đầu từ sự kiện nào?',
        answers: [
          { content: 'Kết thúc Chiến tranh thế giới thứ hai', isCorrect: false },
          { content: 'Thông điệp của Tổng thống Truman trước Quốc hội Mỹ (3/1947)', isCorrect: true },
          { content: 'Liên Xô thử bom nguyên tử thành công', isCorrect: false },
          { content: 'Thành lập NATO', isCorrect: false },
        ],
      },
      {
        content: 'Tổ chức Liên Hợp Quốc được thành lập vào năm nào?',
        answers: [
          { content: '1944', isCorrect: false },
          { content: '1945', isCorrect: true },
          { content: '1946', isCorrect: false },
          { content: '1947', isCorrect: false },
        ],
      },
      {
        content: 'Kế hoạch Mác-san (Marshall) do Mỹ đề ra nhằm mục đích gì?',
        answers: [
          { content: 'Viện trợ kinh tế cho Tây Âu để phục hồi sau chiến tranh và ngăn chặn chủ nghĩa cộng sản', isCorrect: true },
          { content: 'Viện trợ quân sự cho châu Á', isCorrect: false },
          { content: 'Phát triển kinh tế Mỹ Latinh', isCorrect: false },
          { content: 'Giúp đỡ các nước Đông Âu', isCorrect: false },
        ],
      },
      {
        content: 'Khối quân sự NATO được thành lập vào năm nào?',
        answers: [
          { content: '1947', isCorrect: false },
          { content: '1949', isCorrect: true },
          { content: '1955', isCorrect: false },
          { content: '1950', isCorrect: false },
        ],
      },
      {
        content: 'Khối quân sự Vác-sa-va do Liên Xô đứng đầu được thành lập vào năm nào?',
        answers: [
          { content: '1949', isCorrect: false },
          { content: '1950', isCorrect: false },
          { content: '1955', isCorrect: true },
          { content: '1960', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng Trung Quốc thành công vào năm nào, thành lập nước Cộng hòa Nhân dân Trung Hoa?',
        answers: [
          { content: '1945', isCorrect: false },
          { content: '1949', isCorrect: true },
          { content: '1950', isCorrect: false },
          { content: '1954', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào giải phóng dân tộc ở châu Phi phát triển mạnh nhất vào thập niên nào?',
        answers: [
          { content: 'Thập niên 1940', isCorrect: false },
          { content: 'Thập niên 1950', isCorrect: false },
          { content: 'Thập niên 1960', isCorrect: true },
          { content: 'Thập niên 1970', isCorrect: false },
        ],
      },
      {
        content: 'Năm 1960 được gọi là "Năm châu Phi" vì lý do gì?',
        answers: [
          { content: 'Có 17 nước châu Phi giành được độc lập', isCorrect: true },
          { content: 'Liên Hợp Quốc họp tại châu Phi', isCorrect: false },
          { content: 'Chiến tranh lạnh kết thúc ở châu Phi', isCorrect: false },
          { content: 'Tổ chức Thống nhất châu Phi được thành lập', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc khủng hoảng tên lửa Cuba xảy ra vào năm nào?',
        answers: [
          { content: '1960', isCorrect: false },
          { content: '1961', isCorrect: false },
          { content: '1962', isCorrect: true },
          { content: '1963', isCorrect: false },
        ],
      },
      {
        content: 'Liên Xô tan rã vào năm nào?',
        answers: [
          { content: '1989', isCorrect: false },
          { content: '1990', isCorrect: false },
          { content: '1991', isCorrect: true },
          { content: '1992', isCorrect: false },
        ],
      },
      {
        content: 'Bức tường Berlin sụp đổ vào năm nào?',
        answers: [
          { content: '1988', isCorrect: false },
          { content: '1989', isCorrect: true },
          { content: '1990', isCorrect: false },
          { content: '1991', isCorrect: false },
        ],
      },
      {
        content: 'Tổ chức ASEAN được thành lập vào năm nào?',
        answers: [
          { content: '1955', isCorrect: false },
          { content: '1961', isCorrect: false },
          { content: '1967', isCorrect: true },
          { content: '1975', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp ước Bali (1976) xác định nguyên tắc cơ bản nào trong quan hệ giữa các nước ASEAN?',
        answers: [
          { content: 'Tôn trọng chủ quyền, không can thiệp nội bộ, giải quyết tranh chấp bằng hòa bình', isCorrect: true },
          { content: 'Liên minh quân sự chống cộng sản', isCorrect: false },
          { content: 'Thống nhất tiền tệ', isCorrect: false },
          { content: 'Xóa bỏ biên giới quốc gia', isCorrect: false },
        ],
      },
      {
        content: 'Nhật Bản trở thành nền kinh tế lớn thứ hai thế giới vào thập niên nào?',
        answers: [
          { content: 'Thập niên 1950', isCorrect: false },
          { content: 'Thập niên 1960', isCorrect: false },
          { content: 'Thập niên 1970', isCorrect: true },
          { content: 'Thập niên 1980', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị I-an-ta (2/1945) quyết định những vấn đề gì?',
        answers: [
          { content: 'Phân chia khu vực ảnh hưởng giữa các cường quốc sau Chiến tranh thế giới thứ hai', isCorrect: true },
          { content: 'Kết thúc Chiến tranh lạnh', isCorrect: false },
          { content: 'Thành lập NATO', isCorrect: false },
          { content: 'Giải phóng các thuộc địa', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào không liên kết được hình thành vào năm nào?',
        answers: [
          { content: '1955', isCorrect: false },
          { content: '1961', isCorrect: true },
          { content: '1967', isCorrect: false },
          { content: '1975', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc cách mạng khoa học - kỹ thuật lần thứ hai bắt đầu từ khi nào?',
        answers: [
          { content: 'Đầu thế kỷ XX', isCorrect: false },
          { content: 'Giữa thế kỷ XX (từ những năm 40)', isCorrect: true },
          { content: 'Cuối thế kỷ XX', isCorrect: false },
          { content: 'Đầu thế kỷ XXI', isCorrect: false },
        ],
      },
      {
        content: 'Xu thế toàn cầu hóa bắt đầu rõ nét từ thập niên nào?',
        answers: [
          { content: 'Thập niên 1970', isCorrect: false },
          { content: 'Thập niên 1980', isCorrect: true },
          { content: 'Thập niên 1990', isCorrect: false },
          { content: 'Thập niên 2000', isCorrect: false },
        ],
      },
      {
        content: 'Chiến tranh Triều Tiên (1950-1953) là cuộc chiến tranh cục bộ đầu tiên trong thời kỳ nào?',
        answers: [
          { content: 'Chiến tranh thế giới thứ hai', isCorrect: false },
          { content: 'Chiến tranh lạnh', isCorrect: true },
          { content: 'Sau Chiến tranh lạnh', isCorrect: false },
          { content: 'Trước Chiến tranh thế giới thứ nhất', isCorrect: false },
        ],
      },
      {
        content: 'Nước nào là thành viên sáng lập của ASEAN?',
        answers: [
          { content: 'Việt Nam', isCorrect: false },
          { content: 'Thái Lan', isCorrect: true },
          { content: 'Campuchia', isCorrect: false },
          { content: 'Myanmar', isCorrect: false },
        ],
      },
      {
        content: 'Chế độ phân biệt chủng tộc Apartheid ở Nam Phi chính thức bị xóa bỏ vào năm nào?',
        answers: [
          { content: '1990', isCorrect: false },
          { content: '1991', isCorrect: false },
          { content: '1993', isCorrect: true },
          { content: '1994', isCorrect: false },
        ],
      },
      {
        content: 'Nelson Mandela trở thành Tổng thống da đen đầu tiên của Nam Phi vào năm nào?',
        answers: [
          { content: '1990', isCorrect: false },
          { content: '1993', isCorrect: false },
          { content: '1994', isCorrect: true },
          { content: '1995', isCorrect: false },
        ],
      },
      {
        content: 'Liên minh châu Âu (EU) chính thức được thành lập theo Hiệp ước nào?',
        answers: [
          { content: 'Hiệp ước Rô-ma (1957)', isCorrect: false },
          { content: 'Hiệp ước Ma-xtrích (1992)', isCorrect: true },
          { content: 'Hiệp ước Pa-ri (1951)', isCorrect: false },
          { content: 'Hiệp ước Lix-bon (2007)', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nổi bật nhất của trật tự thế giới sau Chiến tranh lạnh là gì?',
        answers: [
          { content: 'Thế giới hai cực', isCorrect: false },
          { content: 'Xu thế đa cực, nhiều trung tâm quyền lực', isCorrect: true },
          { content: 'Mỹ là siêu cường duy nhất chi phối mọi thứ', isCorrect: false },
          { content: 'Chiến tranh lan rộng', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị Băng-đung (1955) tại In-đô-nê-xi-a có ý nghĩa gì?',
        answers: [
          { content: 'Là hội nghị quốc tế đầu tiên của các nước Á - Phi, đề ra nguyên tắc chung sống hòa bình', isCorrect: true },
          { content: 'Thành lập khối NATO', isCorrect: false },
          { content: 'Kết thúc Chiến tranh lạnh', isCorrect: false },
          { content: 'Thành lập Liên Hợp Quốc', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Tổng hợp
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-lich-su',
    title: 'Đề trắc nghiệm Lịch Sử 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-lich-su-de-5',
    description:
      'Đề trắc nghiệm Lịch Sử 12 chủ đề Tổng hợp: các sự kiện quan trọng Việt Nam và thế giới thế kỷ XX.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Chiến tranh thế giới thứ nhất diễn ra trong giai đoạn nào?',
        answers: [
          { content: '1912 - 1916', isCorrect: false },
          { content: '1914 - 1918', isCorrect: true },
          { content: '1916 - 1920', isCorrect: false },
          { content: '1939 - 1945', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng tháng Mười Nga thành công vào năm nào?',
        answers: [
          { content: '1905', isCorrect: false },
          { content: '1917', isCorrect: true },
          { content: '1918', isCorrect: false },
          { content: '1920', isCorrect: false },
        ],
      },
      {
        content: 'Chiến tranh thế giới thứ hai kết thúc ở châu Âu vào tháng nào năm 1945?',
        answers: [
          { content: 'Tháng 4/1945', isCorrect: false },
          { content: 'Tháng 5/1945', isCorrect: true },
          { content: 'Tháng 8/1945', isCorrect: false },
          { content: 'Tháng 9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Mỹ ném bom nguyên tử xuống thành phố Hiroshima (Nhật Bản) vào ngày nào?',
        answers: [
          { content: '6/8/1945', isCorrect: true },
          { content: '9/8/1945', isCorrect: false },
          { content: '15/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Phan Bội Châu chủ trương cứu nước theo con đường nào?',
        answers: [
          { content: 'Cải cách, duy tân', isCorrect: false },
          { content: 'Bạo động vũ trang, dựa vào Nhật Bản', isCorrect: true },
          { content: 'Đấu tranh nghị trường', isCorrect: false },
          { content: 'Theo con đường cách mạng vô sản', isCorrect: false },
        ],
      },
      {
        content: 'Phan Châu Trinh chủ trương cứu nước theo con đường nào?',
        answers: [
          { content: 'Bạo động vũ trang', isCorrect: false },
          { content: 'Cải cách, duy tân, nâng cao dân trí, dân quyền', isCorrect: true },
          { content: 'Cách mạng vô sản', isCorrect: false },
          { content: 'Dựa vào Nhật Bản', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc khởi nghĩa Yên Bái (2/1930) do tổ chức nào lãnh đạo?',
        answers: [
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: false },
          { content: 'Việt Nam Quốc dân Đảng', isCorrect: true },
          { content: 'Hội Việt Nam Cách mạng Thanh niên', isCorrect: false },
          { content: 'Tân Việt Cách mạng Đảng', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị Pốt-xđam (7/1945) quyết định vấn đề gì liên quan đến Đông Dương?',
        answers: [
          { content: 'Quân Anh và quân Trung Hoa Dân Quốc vào giải giáp quân Nhật ở Đông Dương', isCorrect: true },
          { content: 'Pháp trở lại Đông Dương', isCorrect: false },
          { content: 'Mỹ chiếm đóng Đông Dương', isCorrect: false },
          { content: 'Trao trả độc lập cho Đông Dương', isCorrect: false },
        ],
      },
      {
        content: 'Nước Cộng hòa Cuba ra đời sau cuộc cách mạng thắng lợi năm nào?',
        answers: [
          { content: '1953', isCorrect: false },
          { content: '1959', isCorrect: true },
          { content: '1961', isCorrect: false },
          { content: '1962', isCorrect: false },
        ],
      },
      {
        content: 'Ấn Độ giành được độc lập từ Anh vào năm nào?',
        answers: [
          { content: '1945', isCorrect: false },
          { content: '1947', isCorrect: true },
          { content: '1949', isCorrect: false },
          { content: '1950', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào Đông Du do ai khởi xướng?',
        answers: [
          { content: 'Phan Châu Trinh', isCorrect: false },
          { content: 'Phan Bội Châu', isCorrect: true },
          { content: 'Nguyễn Ái Quốc', isCorrect: false },
          { content: 'Lương Văn Can', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam gia nhập Liên Hợp Quốc vào năm nào?',
        answers: [
          { content: '1975', isCorrect: false },
          { content: '1976', isCorrect: false },
          { content: '1977', isCorrect: true },
          { content: '1986', isCorrect: false },
        ],
      },
      {
        content: 'Đường lối Đổi mới của Việt Nam được đề ra tại Đại hội Đảng lần thứ mấy?',
        answers: [
          { content: 'Đại hội IV (1976)', isCorrect: false },
          { content: 'Đại hội V (1982)', isCorrect: false },
          { content: 'Đại hội VI (1986)', isCorrect: true },
          { content: 'Đại hội VII (1991)', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam gia nhập ASEAN vào năm nào?',
        answers: [
          { content: '1992', isCorrect: false },
          { content: '1995', isCorrect: true },
          { content: '1997', isCorrect: false },
          { content: '2000', isCorrect: false },
        ],
      },
      {
        content: 'Sự kiện nào đánh dấu sự kết thúc của Chiến tranh lạnh?',
        answers: [
          { content: 'Bức tường Berlin sụp đổ (1989)', isCorrect: false },
          { content: 'Liên Xô tan rã (12/1991)', isCorrect: true },
          { content: 'Mỹ rút quân khỏi Việt Nam (1973)', isCorrect: false },
          { content: 'Hiệp ước INF (1987)', isCorrect: false },
        ],
      },
      {
        content: 'Quốc gia nào phóng vệ tinh nhân tạo đầu tiên vào vũ trụ (1957)?',
        answers: [
          { content: 'Mỹ', isCorrect: false },
          { content: 'Liên Xô', isCorrect: true },
          { content: 'Anh', isCorrect: false },
          { content: 'Pháp', isCorrect: false },
        ],
      },
      {
        content: 'Ngày Quốc khánh nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là ngày nào?',
        answers: [
          { content: '19/8', isCorrect: false },
          { content: '2/9', isCorrect: true },
          { content: '30/4', isCorrect: false },
          { content: '3/2', isCorrect: false },
        ],
      },
      {
        content: 'Quốc hội khóa VI (1976) quyết định đổi tên nước thành gì?',
        answers: [
          { content: 'Việt Nam Dân chủ Cộng hòa', isCorrect: false },
          { content: 'Cộng hòa Xã hội Chủ nghĩa Việt Nam', isCorrect: true },
          { content: 'Cộng hòa Việt Nam', isCorrect: false },
          { content: 'Việt Nam Cộng hòa', isCorrect: false },
        ],
      },
      {
        content: 'Chiến tranh thế giới thứ hai bùng nổ vào ngày nào?',
        answers: [
          { content: '1/9/1939', isCorrect: true },
          { content: '7/12/1941', isCorrect: false },
          { content: '22/6/1941', isCorrect: false },
          { content: '6/6/1944', isCorrect: false },
        ],
      },
      {
        content: 'Tổ chức Thương mại Thế giới (WTO) được thành lập vào năm nào?',
        answers: [
          { content: '1947', isCorrect: false },
          { content: '1986', isCorrect: false },
          { content: '1995', isCorrect: true },
          { content: '2001', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam chính thức gia nhập WTO vào năm nào?',
        answers: [
          { content: '2005', isCorrect: false },
          { content: '2006', isCorrect: false },
          { content: '2007', isCorrect: true },
          { content: '2008', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc Tổng tuyển cử thống nhất đất nước (bầu Quốc hội chung) diễn ra vào ngày nào?',
        answers: [
          { content: '30/4/1976', isCorrect: false },
          { content: '25/4/1976', isCorrect: true },
          { content: '2/7/1976', isCorrect: false },
          { content: '1/5/1976', isCorrect: false },
        ],
      },
      {
        content: 'Phát xít Đức đầu hàng vô điều kiện vào ngày nào?',
        answers: [
          { content: '30/4/1945', isCorrect: false },
          { content: '9/5/1945', isCorrect: true },
          { content: '15/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Nhật Bản tuyên bố đầu hàng Đồng minh không điều kiện vào ngày nào?',
        answers: [
          { content: '6/8/1945', isCorrect: false },
          { content: '9/8/1945', isCorrect: false },
          { content: '15/8/1945', isCorrect: true },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc chiến tranh Đông Dương của Pháp (1945-1954) kết thúc bằng sự kiện nào?',
        answers: [
          { content: 'Chiến thắng Điện Biên Phủ và Hiệp định Giơ-ne-vơ 1954', isCorrect: true },
          { content: 'Hiệp định Paris 1973', isCorrect: false },
          { content: 'Chiến dịch Hồ Chí Minh 1975', isCorrect: false },
          { content: 'Hiệp định Sơ bộ 1946', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
