import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Sự ra đời của Đảng CSVN
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-lich-su-dang-cong-san-viet-nam',
    title: 'Trắc nghiệm Lịch sử Đảng CSVN - Đề số 1',
    slug: 'trac-nghiem-dh-lich-su-dang-de-1',
    description:
      'Sự ra đời của Đảng CSVN: bối cảnh, Nguyễn Ái Quốc, hội nghị thành lập Đảng.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào?',
        answers: [
          { content: '3/2/1930', isCorrect: true },
          { content: '19/5/1930', isCorrect: false },
          { content: '2/9/1930', isCorrect: false },
          { content: '1/1/1930', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị thành lập Đảng Cộng sản Việt Nam diễn ra ở đâu?',
        answers: [
          { content: 'Hà Nội', isCorrect: false },
          { content: 'Hương Cảng (Trung Quốc)', isCorrect: true },
          { content: 'Quảng Châu (Trung Quốc)', isCorrect: false },
          { content: 'Mát-xcơ-va (Liên Xô)', isCorrect: false },
        ],
      },
      {
        content: 'Ai là người chủ trì Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam?',
        answers: [
          { content: 'Trần Phú', isCorrect: false },
          { content: 'Nguyễn Ái Quốc', isCorrect: true },
          { content: 'Lê Hồng Phong', isCorrect: false },
          { content: 'Hà Huy Tập', isCorrect: false },
        ],
      },
      {
        content: 'Nguyễn Ái Quốc ra đi tìm đường cứu nước vào năm nào?',
        answers: [
          { content: '1908', isCorrect: false },
          { content: '1911', isCorrect: true },
          { content: '1917', isCorrect: false },
          { content: '1920', isCorrect: false },
        ],
      },
      {
        content: 'Nguyễn Ái Quốc tham dự Đại hội lần thứ XVIII Đảng Xã hội Pháp tại Tua (Tours) vào năm nào?',
        answers: [
          { content: '1918', isCorrect: false },
          { content: '1919', isCorrect: false },
          { content: '1920', isCorrect: true },
          { content: '1921', isCorrect: false },
        ],
      },
      {
        content: 'Tại Đại hội Tours, Nguyễn Ái Quốc đã bỏ phiếu tán thành:',
        answers: [
          { content: 'Ở lại Đảng Xã hội Pháp', isCorrect: false },
          { content: 'Gia nhập Quốc tế Cộng sản (Quốc tế III)', isCorrect: true },
          { content: 'Thành lập đảng mới', isCorrect: false },
          { content: 'Giải tán Đảng Xã hội Pháp', isCorrect: false },
        ],
      },
      {
        content: 'Sự kiện Nguyễn Ái Quốc bỏ phiếu tán thành Quốc tế III đánh dấu:',
        answers: [
          { content: 'Bước ngoặt trong cuộc đời hoạt động cách mạng, từ chủ nghĩa yêu nước đến chủ nghĩa cộng sản', isCorrect: true },
          { content: 'Sự thành lập Đảng Cộng sản Việt Nam', isCorrect: false },
          { content: 'Sự ra đời của Hội Việt Nam Cách mạng Thanh niên', isCorrect: false },
          { content: 'Sự thành lập nước Việt Nam Dân chủ Cộng hòa', isCorrect: false },
        ],
      },
      {
        content: 'Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?',
        answers: [
          { content: '1924', isCorrect: false },
          { content: '1925', isCorrect: true },
          { content: '1926', isCorrect: false },
          { content: '1927', isCorrect: false },
        ],
      },
      {
        content: 'Hội Việt Nam Cách mạng Thanh niên được thành lập ở đâu?',
        answers: [
          { content: 'Hà Nội', isCorrect: false },
          { content: 'Sài Gòn', isCorrect: false },
          { content: 'Quảng Châu (Trung Quốc)', isCorrect: true },
          { content: 'Hương Cảng (Trung Quốc)', isCorrect: false },
        ],
      },
      {
        content: 'Tác phẩm "Đường Kách mệnh" của Nguyễn Ái Quốc được xuất bản năm nào?',
        answers: [
          { content: '1925', isCorrect: false },
          { content: '1927', isCorrect: true },
          { content: '1929', isCorrect: false },
          { content: '1930', isCorrect: false },
        ],
      },
      {
        content: 'Cuối năm 1929, ở Việt Nam có mấy tổ chức cộng sản?',
        answers: [
          { content: '1 tổ chức', isCorrect: false },
          { content: '2 tổ chức', isCorrect: false },
          { content: '3 tổ chức', isCorrect: true },
          { content: '4 tổ chức', isCorrect: false },
        ],
      },
      {
        content: 'Ba tổ chức cộng sản ở Việt Nam cuối năm 1929 là:',
        answers: [
          { content: 'Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn', isCorrect: true },
          { content: 'Đảng Cộng sản Việt Nam, Đảng Cộng sản Lào, Đảng Cộng sản Campuchia', isCorrect: false },
          { content: 'Hội Việt Nam Cách mạng Thanh niên, Tân Việt Cách mạng Đảng, Việt Nam Quốc dân Đảng', isCorrect: false },
          { content: 'Đảng Lập hiến, Đảng Thanh niên, Đảng Dân chủ', isCorrect: false },
        ],
      },
      {
        content: 'Cương lĩnh chính trị đầu tiên của Đảng do ai soạn thảo?',
        answers: [
          { content: 'Trần Phú', isCorrect: false },
          { content: 'Nguyễn Ái Quốc', isCorrect: true },
          { content: 'Lê Hồng Phong', isCorrect: false },
          { content: 'Nguyễn Đức Cảnh', isCorrect: false },
        ],
      },
      {
        content: 'Cương lĩnh chính trị đầu tiên xác định đường lối chiến lược của cách mạng Việt Nam là:',
        answers: [
          { content: 'Làm cách mạng tư sản dân quyền và thổ địa cách mạng để đi tới xã hội cộng sản', isCorrect: true },
          { content: 'Làm cách mạng xã hội chủ nghĩa ngay lập tức', isCorrect: false },
          { content: 'Làm cách mạng dân tộc dân chủ', isCorrect: false },
          { content: 'Làm cách mạng tư sản', isCorrect: false },
        ],
      },
      {
        content: 'Thực dân Pháp xâm lược Việt Nam bắt đầu từ năm nào?',
        answers: [
          { content: '1858', isCorrect: true },
          { content: '1862', isCorrect: false },
          { content: '1884', isCorrect: false },
          { content: '1887', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào Cần Vương (1885-1896) mang tính chất gì?',
        answers: [
          { content: 'Phong trào yêu nước theo khuynh hướng phong kiến', isCorrect: true },
          { content: 'Phong trào yêu nước theo khuynh hướng dân chủ tư sản', isCorrect: false },
          { content: 'Phong trào yêu nước theo khuynh hướng vô sản', isCorrect: false },
          { content: 'Phong trào nông dân', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào Đông Du do ai khởi xướng?',
        answers: [
          { content: 'Phan Châu Trinh', isCorrect: false },
          { content: 'Phan Bội Châu', isCorrect: true },
          { content: 'Lương Văn Can', isCorrect: false },
          { content: 'Nguyễn Thái Học', isCorrect: false },
        ],
      },
      {
        content: 'Phan Châu Trinh chủ trương con đường cứu nước theo hướng nào?',
        answers: [
          { content: 'Bạo động vũ trang', isCorrect: false },
          { content: 'Cải cách, duy tân, nâng cao dân trí, dân quyền', isCorrect: true },
          { content: 'Đi theo con đường cách mạng vô sản', isCorrect: false },
          { content: 'Cầu viện nước ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Nguyễn Ái Quốc đọc bản Sơ thảo lần thứ nhất Luận cương về vấn đề dân tộc và thuộc địa của Lênin vào năm nào?',
        answers: [
          { content: '1918', isCorrect: false },
          { content: '1919', isCorrect: false },
          { content: '1920', isCorrect: true },
          { content: '1921', isCorrect: false },
        ],
      },
      {
        content: 'Tờ báo "Thanh niên" do Nguyễn Ái Quốc sáng lập ra số đầu tiên vào:',
        answers: [
          { content: '21/6/1925', isCorrect: true },
          { content: '1/5/1925', isCorrect: false },
          { content: '19/5/1925', isCorrect: false },
          { content: '2/9/1925', isCorrect: false },
        ],
      },
      {
        content: 'Tác phẩm "Bản án chế độ thực dân Pháp" được Nguyễn Ái Quốc viết bằng tiếng:',
        answers: [
          { content: 'Tiếng Việt', isCorrect: false },
          { content: 'Tiếng Pháp', isCorrect: true },
          { content: 'Tiếng Nga', isCorrect: false },
          { content: 'Tiếng Trung', isCorrect: false },
        ],
      },
      {
        content: 'Đông Dương Cộng sản Đảng được thành lập vào tháng nào năm 1929?',
        answers: [
          { content: 'Tháng 3/1929', isCorrect: false },
          { content: 'Tháng 6/1929', isCorrect: true },
          { content: 'Tháng 9/1929', isCorrect: false },
          { content: 'Tháng 12/1929', isCorrect: false },
        ],
      },
      {
        content: 'Quốc tế Cộng sản gửi thư yêu cầu các tổ chức cộng sản ở Đông Dương hợp nhất vào:',
        answers: [
          { content: 'Tháng 6/1929', isCorrect: false },
          { content: 'Tháng 10/1929', isCorrect: true },
          { content: 'Tháng 1/1930', isCorrect: false },
          { content: 'Tháng 3/1930', isCorrect: false },
        ],
      },
      {
        content: 'Tên gọi ban đầu của Đảng khi mới thành lập (3/2/1930) là:',
        answers: [
          { content: 'Đảng Cộng sản Đông Dương', isCorrect: false },
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: true },
          { content: 'Đảng Lao động Việt Nam', isCorrect: false },
          { content: 'Đảng Nhân dân Cách mạng', isCorrect: false },
        ],
      },
      {
        content: 'An Nam Cộng sản Đảng được thành lập vào thời gian nào?',
        answers: [
          { content: 'Tháng 6/1929', isCorrect: false },
          { content: 'Tháng 8/1929', isCorrect: true },
          { content: 'Tháng 10/1929', isCorrect: false },
          { content: 'Tháng 1/1930', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Đảng lãnh đạo CM 1930-1945
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-lich-su-dang-cong-san-viet-nam',
    title: 'Trắc nghiệm Lịch sử Đảng CSVN - Đề số 2',
    slug: 'trac-nghiem-dh-lich-su-dang-de-2',
    description:
      'Đảng lãnh đạo CM 1930-1945: Xô viết Nghệ Tĩnh, phong trào dân chủ, CMT8.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Phong trào Xô viết Nghệ Tĩnh diễn ra vào năm nào?',
        answers: [
          { content: '1929', isCorrect: false },
          { content: '1930-1931', isCorrect: true },
          { content: '1932-1933', isCorrect: false },
          { content: '1936-1939', isCorrect: false },
        ],
      },
      {
        content: 'Xô viết Nghệ Tĩnh là đỉnh cao của phong trào cách mạng nào?',
        answers: [
          { content: 'Phong trào cách mạng 1930-1931', isCorrect: true },
          { content: 'Phong trào dân chủ 1936-1939', isCorrect: false },
          { content: 'Phong trào giải phóng dân tộc 1939-1945', isCorrect: false },
          { content: 'Phong trào Cần Vương', isCorrect: false },
        ],
      },
      {
        content: 'Luận cương chính trị tháng 10/1930 do ai soạn thảo?',
        answers: [
          { content: 'Nguyễn Ái Quốc', isCorrect: false },
          { content: 'Trần Phú', isCorrect: true },
          { content: 'Lê Hồng Phong', isCorrect: false },
          { content: 'Hà Huy Tập', isCorrect: false },
        ],
      },
      {
        content: 'Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam là ai?',
        answers: [
          { content: 'Nguyễn Ái Quốc', isCorrect: false },
          { content: 'Trần Phú', isCorrect: true },
          { content: 'Lê Hồng Phong', isCorrect: false },
          { content: 'Nguyễn Văn Cừ', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội lần thứ I của Đảng diễn ra ở đâu, năm nào?',
        answers: [
          { content: 'Hà Nội, 1935', isCorrect: false },
          { content: 'Ma Cao (Trung Quốc), 3/1935', isCorrect: true },
          { content: 'Quảng Châu, 1936', isCorrect: false },
          { content: 'Mát-xcơ-va, 1935', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào dân chủ 1936-1939 diễn ra trong bối cảnh nào?',
        answers: [
          { content: 'Chiến tranh thế giới thứ hai bùng nổ', isCorrect: false },
          { content: 'Mặt trận Nhân dân Pháp lên cầm quyền, nới lỏng chính sách thuộc địa', isCorrect: true },
          { content: 'Nhật xâm lược Đông Dương', isCorrect: false },
          { content: 'Pháp tăng cường đàn áp', isCorrect: false },
        ],
      },
      {
        content: 'Trong phong trào 1936-1939, Đảng chủ trương thành lập mặt trận nào?',
        answers: [
          { content: 'Mặt trận Việt Minh', isCorrect: false },
          { content: 'Mặt trận Dân chủ Đông Dương', isCorrect: true },
          { content: 'Mặt trận Liên Việt', isCorrect: false },
          { content: 'Mặt trận Tổ quốc', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị Trung ương lần thứ 8 (5/1941) quyết định:',
        answers: [
          { content: 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu', isCorrect: true },
          { content: 'Tiến hành cách mạng ruộng đất', isCorrect: false },
          { content: 'Thành lập Đảng Cộng sản', isCorrect: false },
          { content: 'Đàm phán với Pháp', isCorrect: false },
        ],
      },
      {
        content: 'Mặt trận Việt Minh được thành lập vào ngày tháng năm nào?',
        answers: [
          { content: '19/5/1941', isCorrect: true },
          { content: '3/2/1941', isCorrect: false },
          { content: '22/12/1944', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Mặt trận Việt Minh có tên đầy đủ là:',
        answers: [
          { content: 'Việt Nam Độc lập Đồng minh', isCorrect: true },
          { content: 'Việt Nam Dân chủ Cộng hòa', isCorrect: false },
          { content: 'Việt Nam Giải phóng Quân', isCorrect: false },
          { content: 'Việt Nam Cách mạng Đồng minh Hội', isCorrect: false },
        ],
      },
      {
        content: 'Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập ngày:',
        answers: [
          { content: '19/5/1941', isCorrect: false },
          { content: '22/12/1944', isCorrect: true },
          { content: '19/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Nhật đảo chính Pháp ở Đông Dương vào ngày:',
        answers: [
          { content: '9/3/1945', isCorrect: true },
          { content: '15/8/1945', isCorrect: false },
          { content: '19/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Sau khi Nhật đảo chính Pháp, Đảng ra chỉ thị gì?',
        answers: [
          { content: '"Nhật - Pháp bắn nhau và hành động của chúng ta"', isCorrect: true },
          { content: '"Kháng chiến kiến quốc"', isCorrect: false },
          { content: '"Toàn dân kháng chiến"', isCorrect: false },
          { content: '"Tổng khởi nghĩa"', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị toàn quốc của Đảng (13-15/8/1945) quyết định:',
        answers: [
          { content: 'Phát động Tổng khởi nghĩa giành chính quyền trong cả nước', isCorrect: true },
          { content: 'Đàm phán với Nhật', isCorrect: false },
          { content: 'Chờ đợi Đồng minh', isCorrect: false },
          { content: 'Tiếp tục xây dựng lực lượng', isCorrect: false },
        ],
      },
      {
        content: 'Quốc dân Đại hội Tân Trào họp vào ngày:',
        answers: [
          { content: '13/8/1945', isCorrect: false },
          { content: '16/8/1945', isCorrect: true },
          { content: '19/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng Tháng Tám thành công trên phạm vi cả nước vào:',
        answers: [
          { content: 'Tháng 7/1945', isCorrect: false },
          { content: 'Tháng 8/1945', isCorrect: true },
          { content: 'Tháng 9/1945', isCorrect: false },
          { content: 'Tháng 10/1945', isCorrect: false },
        ],
      },
      {
        content: 'Khởi nghĩa giành chính quyền ở Hà Nội thắng lợi vào ngày:',
        answers: [
          { content: '16/8/1945', isCorrect: false },
          { content: '19/8/1945', isCorrect: true },
          { content: '23/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
        ],
      },
      {
        content: 'Vua Bảo Đại thoái vị vào ngày:',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
          { content: '30/8/1945', isCorrect: true },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Nước Việt Nam Dân chủ Cộng hòa ra đời vào ngày:',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
          { content: '30/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: true },
        ],
      },
      {
        content: 'Bản Tuyên ngôn Độc lập do ai soạn thảo và đọc?',
        answers: [
          { content: 'Trần Phú', isCorrect: false },
          { content: 'Hồ Chí Minh', isCorrect: true },
          { content: 'Võ Nguyên Giáp', isCorrect: false },
          { content: 'Phạm Văn Đồng', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa lớn nhất của Cách mạng Tháng Tám 1945 là:',
        answers: [
          { content: 'Lật đổ chế độ phong kiến và ách thống trị thực dân, lập nên nước Việt Nam DCCH', isCorrect: true },
          { content: 'Đánh bại phát xít Nhật', isCorrect: false },
          { content: 'Thống nhất đất nước', isCorrect: false },
          { content: 'Hoàn thành cách mạng ruộng đất', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân quyết định thắng lợi của Cách mạng Tháng Tám là:',
        answers: [
          { content: 'Sự lãnh đạo đúng đắn của Đảng và Chủ tịch Hồ Chí Minh', isCorrect: true },
          { content: 'Sự giúp đỡ của Liên Xô', isCorrect: false },
          { content: 'Nhật đầu hàng Đồng minh', isCorrect: false },
          { content: 'Pháp rút khỏi Đông Dương', isCorrect: false },
        ],
      },
      {
        content: 'Trong Cương lĩnh chính trị đầu tiên, lực lượng cách mạng được xác định là:',
        answers: [
          { content: 'Chỉ giai cấp công nhân', isCorrect: false },
          { content: 'Công nhân, nông dân, tiểu tư sản, trí thức; liên lạc với tư sản dân tộc', isCorrect: true },
          { content: 'Chỉ nông dân', isCorrect: false },
          { content: 'Toàn bộ giai cấp tư sản', isCorrect: false },
        ],
      },
      {
        content: 'Tháng 10/1930, Hội nghị Ban Chấp hành Trung ương lần thứ nhất đổi tên Đảng thành:',
        answers: [
          { content: 'Đảng Lao động Việt Nam', isCorrect: false },
          { content: 'Đảng Cộng sản Đông Dương', isCorrect: true },
          { content: 'Đảng Nhân dân Cách mạng', isCorrect: false },
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Khu giải phóng Việt Bắc được thành lập vào tháng:',
        answers: [
          { content: 'Tháng 3/1945', isCorrect: false },
          { content: 'Tháng 6/1945', isCorrect: true },
          { content: 'Tháng 8/1945', isCorrect: false },
          { content: 'Tháng 9/1945', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Đảng lãnh đạo kháng chiến 1945-1975
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-lich-su-dang-cong-san-viet-nam',
    title: 'Trắc nghiệm Lịch sử Đảng CSVN - Đề số 3',
    slug: 'trac-nghiem-dh-lich-su-dang-de-3',
    description:
      'Đảng lãnh đạo kháng chiến 1945-1975: chống Pháp, chống Mỹ, thống nhất.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Sau Cách mạng Tháng Tám, Việt Nam đối mặt với những khó khăn nào?',
        answers: [
          { content: 'Giặc đói, giặc dốt, giặc ngoại xâm', isCorrect: true },
          { content: 'Chỉ có giặc ngoại xâm', isCorrect: false },
          { content: 'Chỉ có khó khăn kinh tế', isCorrect: false },
          { content: 'Không có khó khăn đáng kể', isCorrect: false },
        ],
      },
      {
        content: 'Ngày Toàn quốc kháng chiến chống Pháp là:',
        answers: [
          { content: '23/9/1945', isCorrect: false },
          { content: '19/12/1946', isCorrect: true },
          { content: '6/3/1946', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Lời kêu gọi Toàn quốc kháng chiến do ai viết?',
        answers: [
          { content: 'Võ Nguyên Giáp', isCorrect: false },
          { content: 'Hồ Chí Minh', isCorrect: true },
          { content: 'Trường Chinh', isCorrect: false },
          { content: 'Phạm Văn Đồng', isCorrect: false },
        ],
      },
      {
        content: 'Đường lối kháng chiến chống Pháp của Đảng là:',
        answers: [
          { content: 'Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh', isCorrect: true },
          { content: 'Đánh nhanh thắng nhanh', isCorrect: false },
          { content: 'Chỉ dựa vào viện trợ quốc tế', isCorrect: false },
          { content: 'Đàm phán hòa bình', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Việt Bắc Thu Đông diễn ra năm nào?',
        answers: [
          { content: '1946', isCorrect: false },
          { content: '1947', isCorrect: true },
          { content: '1950', isCorrect: false },
          { content: '1954', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Biên giới Thu Đông 1950 có ý nghĩa gì?',
        answers: [
          { content: 'Khai thông biên giới Việt-Trung, mở rộng căn cứ địa', isCorrect: true },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Giải phóng Hà Nội', isCorrect: false },
          { content: 'Đánh bại hoàn toàn quân Pháp', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội lần thứ II của Đảng (2/1951) quyết định:',
        answers: [
          { content: 'Đổi tên Đảng thành Đảng Lao động Việt Nam', isCorrect: true },
          { content: 'Đổi tên Đảng thành Đảng Cộng sản Việt Nam', isCorrect: false },
          { content: 'Giải tán Đảng', isCorrect: false },
          { content: 'Sáp nhập với Đảng Cộng sản Trung Quốc', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Điện Biên Phủ diễn ra từ ngày nào đến ngày nào?',
        answers: [
          { content: '13/3/1954 đến 7/5/1954', isCorrect: true },
          { content: '1/1/1954 đến 30/4/1954', isCorrect: false },
          { content: '5/1/1954 đến 21/7/1954', isCorrect: false },
          { content: '1/3/1954 đến 1/6/1954', isCorrect: false },
        ],
      },
      {
        content: 'Tổng chỉ huy chiến dịch Điện Biên Phủ là ai?',
        answers: [
          { content: 'Hồ Chí Minh', isCorrect: false },
          { content: 'Võ Nguyên Giáp', isCorrect: true },
          { content: 'Trường Chinh', isCorrect: false },
          { content: 'Lê Duẩn', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Giơ-ne-vơ về Đông Dương được ký kết ngày:',
        answers: [
          { content: '7/5/1954', isCorrect: false },
          { content: '21/7/1954', isCorrect: true },
          { content: '2/9/1954', isCorrect: false },
          { content: '1/1/1955', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Giơ-ne-vơ quy định giới tuyến quân sự tạm thời ở:',
        answers: [
          { content: 'Vĩ tuyến 17', isCorrect: true },
          { content: 'Vĩ tuyến 16', isCorrect: false },
          { content: 'Vĩ tuyến 20', isCorrect: false },
          { content: 'Vĩ tuyến 13', isCorrect: false },
        ],
      },
      {
        content: 'Nghị quyết 15 (1/1959) của Ban Chấp hành Trung ương Đảng quyết định:',
        answers: [
          { content: 'Sử dụng bạo lực cách mạng để giải phóng miền Nam', isCorrect: true },
          { content: 'Đàm phán hòa bình với Mỹ', isCorrect: false },
          { content: 'Tập trung xây dựng miền Bắc', isCorrect: false },
          { content: 'Giải tán lực lượng vũ trang miền Nam', isCorrect: false },
        ],
      },
      {
        content: 'Mặt trận Dân tộc Giải phóng miền Nam Việt Nam được thành lập ngày:',
        answers: [
          { content: '20/12/1960', isCorrect: true },
          { content: '1/1/1960', isCorrect: false },
          { content: '30/4/1960', isCorrect: false },
          { content: '2/9/1960', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào "Đồng khởi" ở miền Nam diễn ra vào năm:',
        answers: [
          { content: '1958', isCorrect: false },
          { content: '1959-1960', isCorrect: true },
          { content: '1961-1962', isCorrect: false },
          { content: '1963-1964', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Ấp Bắc (1/1963) chứng tỏ:',
        answers: [
          { content: 'Quân dân miền Nam có khả năng đánh bại chiến lược "Chiến tranh đặc biệt" của Mỹ', isCorrect: true },
          { content: 'Mỹ rút quân khỏi miền Nam', isCorrect: false },
          { content: 'Chiến tranh kết thúc', isCorrect: false },
          { content: 'Ngụy quyền Sài Gòn sụp đổ', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra năm:',
        answers: [
          { content: '1967', isCorrect: false },
          { content: '1968', isCorrect: true },
          { content: '1969', isCorrect: false },
          { content: '1972', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa quan trọng nhất của cuộc Tổng tiến công Mậu Thân 1968 là:',
        answers: [
          { content: 'Buộc Mỹ phải ngồi vào bàn đàm phán tại Pa-ri', isCorrect: true },
          { content: 'Giải phóng hoàn toàn miền Nam', isCorrect: false },
          { content: 'Đánh bại hoàn toàn quân Mỹ', isCorrect: false },
          { content: 'Thống nhất đất nước', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Pa-ri về chấm dứt chiến tranh ở Việt Nam được ký ngày:',
        answers: [
          { content: '27/1/1973', isCorrect: true },
          { content: '30/4/1975', isCorrect: false },
          { content: '21/7/1954', isCorrect: false },
          { content: '1/1/1973', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Hồ Chí Minh bắt đầu từ ngày:',
        answers: [
          { content: '10/3/1975', isCorrect: false },
          { content: '26/4/1975', isCorrect: true },
          { content: '1/4/1975', isCorrect: false },
          { content: '30/4/1975', isCorrect: false },
        ],
      },
      {
        content: 'Ngày giải phóng miền Nam, thống nhất đất nước là:',
        answers: [
          { content: '27/1/1973', isCorrect: false },
          { content: '30/4/1975', isCorrect: true },
          { content: '2/9/1975', isCorrect: false },
          { content: '25/4/1976', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng "Điện Biên Phủ trên không" diễn ra vào tháng 12/1972 là chiến thắng:',
        answers: [
          { content: 'Đánh bại cuộc tập kích chiến lược bằng B-52 của Mỹ vào Hà Nội, Hải Phòng', isCorrect: true },
          { content: 'Giải phóng Điện Biên Phủ lần thứ hai', isCorrect: false },
          { content: 'Đánh bại quân Pháp ở Điện Biên Phủ', isCorrect: false },
          { content: 'Giải phóng Sài Gòn', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Tây Nguyên (3/1975) mở đầu cho:',
        answers: [
          { content: 'Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975', isCorrect: true },
          { content: 'Cuộc kháng chiến chống Pháp', isCorrect: false },
          { content: 'Phong trào Đồng khởi', isCorrect: false },
          { content: 'Cuộc Tổng tiến công Mậu Thân', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch giải phóng Huế-Đà Nẵng diễn ra vào:',
        answers: [
          { content: 'Tháng 1/1975', isCorrect: false },
          { content: 'Tháng 3/1975', isCorrect: true },
          { content: 'Tháng 4/1975', isCorrect: false },
          { content: 'Tháng 5/1975', isCorrect: false },
        ],
      },
      {
        content: 'Đại thắng mùa Xuân 1975 có ý nghĩa lịch sử gì?',
        answers: [
          { content: 'Kết thúc 30 năm chiến tranh, hoàn thành sự nghiệp giải phóng dân tộc, thống nhất đất nước', isCorrect: true },
          { content: 'Chỉ giải phóng miền Nam', isCorrect: false },
          { content: 'Chỉ đánh bại quân Mỹ', isCorrect: false },
          { content: 'Bắt đầu thời kỳ đổi mới', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Đường 14 - Phước Long (1/1975) có ý nghĩa gì?',
        answers: [
          { content: 'Chứng tỏ khả năng giải phóng hoàn toàn miền Nam và Mỹ không can thiệp trở lại', isCorrect: true },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Mỹ quay lại tham chiến', isCorrect: false },
          { content: 'Bắt đầu đàm phán hòa bình', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Đảng lãnh đạo xây dựng CNXH và Đổi mới
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-lich-su-dang-cong-san-viet-nam',
    title: 'Trắc nghiệm Lịch sử Đảng CSVN - Đề số 4',
    slug: 'trac-nghiem-dh-lich-su-dang-de-4',
    description:
      'Đảng lãnh đạo xây dựng CNXH và Đổi mới: Đại hội IV-VI, đường lối đổi mới 1986.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Đại hội đại biểu toàn quốc lần thứ IV của Đảng (12/1976) có ý nghĩa gì?',
        answers: [
          { content: 'Đại hội thống nhất đất nước về mặt Đảng, đề ra đường lối xây dựng CNXH trên cả nước', isCorrect: true },
          { content: 'Đại hội khởi xướng đổi mới', isCorrect: false },
          { content: 'Đại hội quyết định kháng chiến chống Mỹ', isCorrect: false },
          { content: 'Đại hội thành lập Đảng', isCorrect: false },
        ],
      },
      {
        content: 'Tại Đại hội IV, Đảng đổi tên thành:',
        answers: [
          { content: 'Đảng Cộng sản Đông Dương', isCorrect: false },
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: true },
          { content: 'Đảng Lao động Việt Nam', isCorrect: false },
          { content: 'Đảng Nhân dân Cách mạng Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội lần thứ V của Đảng (3/1982) diễn ra trong bối cảnh:',
        answers: [
          { content: 'Đất nước gặp nhiều khó khăn về kinh tế-xã hội, chiến tranh biên giới', isCorrect: true },
          { content: 'Kinh tế phát triển mạnh mẽ', isCorrect: false },
          { content: 'Đang tiến hành kháng chiến chống Pháp', isCorrect: false },
          { content: 'Vừa giành được độc lập', isCorrect: false },
        ],
      },
      {
        content: 'Đường lối đổi mới được chính thức đề ra tại Đại hội nào?',
        answers: [
          { content: 'Đại hội IV (1976)', isCorrect: false },
          { content: 'Đại hội V (1982)', isCorrect: false },
          { content: 'Đại hội VI (1986)', isCorrect: true },
          { content: 'Đại hội VII (1991)', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội VI (12/1986) xác định đổi mới trước hết là đổi mới:',
        answers: [
          { content: 'Kinh tế', isCorrect: false },
          { content: 'Tư duy, trước hết là tư duy kinh tế', isCorrect: true },
          { content: 'Chính trị', isCorrect: false },
          { content: 'Văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Trước đổi mới, nền kinh tế Việt Nam vận hành theo cơ chế nào?',
        answers: [
          { content: 'Kinh tế thị trường', isCorrect: false },
          { content: 'Kế hoạch hóa tập trung, quan liêu, bao cấp', isCorrect: true },
          { content: 'Kinh tế hỗn hợp', isCorrect: false },
          { content: 'Kinh tế tự do', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội VI đề ra chủ trương phát triển nền kinh tế:',
        answers: [
          { content: 'Kinh tế kế hoạch hóa tập trung', isCorrect: false },
          { content: 'Kinh tế hàng hóa nhiều thành phần', isCorrect: true },
          { content: 'Kinh tế tư bản chủ nghĩa', isCorrect: false },
          { content: 'Kinh tế tự cung tự cấp', isCorrect: false },
        ],
      },
      {
        content: 'Ba chương trình kinh tế lớn được Đại hội VI đề ra là:',
        answers: [
          { content: 'Lương thực-thực phẩm, hàng tiêu dùng, hàng xuất khẩu', isCorrect: true },
          { content: 'Công nghiệp nặng, công nghiệp nhẹ, nông nghiệp', isCorrect: false },
          { content: 'Giáo dục, y tế, quốc phòng', isCorrect: false },
          { content: 'Giao thông, năng lượng, viễn thông', isCorrect: false },
        ],
      },
      {
        content: 'Tổng Bí thư Đảng tại Đại hội VI là ai?',
        answers: [
          { content: 'Lê Duẩn', isCorrect: false },
          { content: 'Trường Chinh', isCorrect: false },
          { content: 'Nguyễn Văn Linh', isCorrect: true },
          { content: 'Đỗ Mười', isCorrect: false },
        ],
      },
      {
        content: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH được thông qua tại Đại hội nào?',
        answers: [
          { content: 'Đại hội V', isCorrect: false },
          { content: 'Đại hội VI', isCorrect: false },
          { content: 'Đại hội VII (1991)', isCorrect: true },
          { content: 'Đại hội VIII', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội VII (6/1991) khẳng định Đảng lấy chủ nghĩa nào làm nền tảng tư tưởng?',
        answers: [
          { content: 'Chủ nghĩa Mác-Lênin', isCorrect: false },
          { content: 'Chủ nghĩa Mác-Lênin và tư tưởng Hồ Chí Minh', isCorrect: true },
          { content: 'Tư tưởng Hồ Chí Minh', isCorrect: false },
          { content: 'Chủ nghĩa dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội VIII (6/1996) nhận định Việt Nam đã:',
        answers: [
          { content: 'Hoàn thành công nghiệp hóa', isCorrect: false },
          { content: 'Ra khỏi khủng hoảng kinh tế-xã hội, chuyển sang thời kỳ đẩy mạnh CNH-HĐH', isCorrect: true },
          { content: 'Trở thành nước phát triển', isCorrect: false },
          { content: 'Hoàn thành xây dựng CNXH', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam gia nhập ASEAN vào năm nào?',
        answers: [
          { content: '1986', isCorrect: false },
          { content: '1991', isCorrect: false },
          { content: '1995', isCorrect: true },
          { content: '2000', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam bình thường hóa quan hệ với Mỹ vào năm nào?',
        answers: [
          { content: '1986', isCorrect: false },
          { content: '1991', isCorrect: false },
          { content: '1995', isCorrect: true },
          { content: '2000', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội IX (4/2001) xác định nền kinh tế Việt Nam là:',
        answers: [
          { content: 'Kinh tế kế hoạch hóa', isCorrect: false },
          { content: 'Kinh tế thị trường định hướng xã hội chủ nghĩa', isCorrect: true },
          { content: 'Kinh tế thị trường tự do', isCorrect: false },
          { content: 'Kinh tế hỗn hợp', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam gia nhập WTO vào năm nào?',
        answers: [
          { content: '2000', isCorrect: false },
          { content: '2005', isCorrect: false },
          { content: '2007', isCorrect: true },
          { content: '2010', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội XI (1/2011) thông qua:',
        answers: [
          { content: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011)', isCorrect: true },
          { content: 'Đường lối đổi mới lần đầu tiên', isCorrect: false },
          { content: 'Quyết định thống nhất đất nước', isCorrect: false },
          { content: 'Hiến pháp mới', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân chủ yếu dẫn đến khủng hoảng kinh tế-xã hội trước đổi mới là:',
        answers: [
          { content: 'Sai lầm trong chính sách kinh tế, duy trì quá lâu cơ chế tập trung quan liêu bao cấp', isCorrect: true },
          { content: 'Do chiến tranh kéo dài', isCorrect: false },
          { content: 'Do thiên tai', isCorrect: false },
          { content: 'Do bị cấm vận', isCorrect: false },
        ],
      },
      {
        content: 'Chính sách "khoán 10" trong nông nghiệp được ban hành năm:',
        answers: [
          { content: '1981', isCorrect: false },
          { content: '1986', isCorrect: false },
          { content: '1988', isCorrect: true },
          { content: '1990', isCorrect: false },
        ],
      },
      {
        content: 'Đổi mới ở Việt Nam KHÔNG bao gồm:',
        answers: [
          { content: 'Đổi mới kinh tế', isCorrect: false },
          { content: 'Đổi mới chính trị', isCorrect: false },
          { content: 'Thay đổi mục tiêu CNXH và vai trò lãnh đạo của Đảng', isCorrect: true },
          { content: 'Đổi mới tư duy', isCorrect: false },
        ],
      },
      {
        content: 'Thành tựu nổi bật nhất sau hơn 35 năm đổi mới là:',
        answers: [
          { content: 'Đất nước ra khỏi tình trạng kém phát triển, đời sống nhân dân được cải thiện rõ rệt', isCorrect: true },
          { content: 'Trở thành nước công nghiệp phát triển', isCorrect: false },
          { content: 'Xóa bỏ hoàn toàn nghèo đói', isCorrect: false },
          { content: 'GDP đứng đầu khu vực', isCorrect: false },
        ],
      },
      {
        content: 'Nước Cộng hòa Xã hội Chủ nghĩa Việt Nam chính thức ra đời vào:',
        answers: [
          { content: '30/4/1975', isCorrect: false },
          { content: '25/4/1976', isCorrect: false },
          { content: '2/7/1976', isCorrect: true },
          { content: '2/9/1976', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị Trung ương 6 khóa IV (8/1979) được coi là bước đột phá đầu tiên về đổi mới tư duy kinh tế vì:',
        answers: [
          { content: 'Chủ trương làm cho sản xuất "bung ra", xóa bỏ cơ chế tập trung quan liêu bao cấp', isCorrect: true },
          { content: 'Quyết định gia nhập ASEAN', isCorrect: false },
          { content: 'Thông qua Hiến pháp mới', isCorrect: false },
          { content: 'Quyết định mở cửa hoàn toàn nền kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Chính sách "khoán 100" trong nông nghiệp được ban hành năm:',
        answers: [
          { content: '1979', isCorrect: false },
          { content: '1981', isCorrect: true },
          { content: '1986', isCorrect: false },
          { content: '1988', isCorrect: false },
        ],
      },
      {
        content: 'Luật Đầu tư nước ngoài tại Việt Nam được ban hành lần đầu vào năm:',
        answers: [
          { content: '1986', isCorrect: false },
          { content: '1987', isCorrect: true },
          { content: '1990', isCorrect: false },
          { content: '1995', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Tổng hợp
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-lich-su-dang-cong-san-viet-nam',
    title: 'Trắc nghiệm Lịch sử Đảng CSVN - Đề số 5',
    slug: 'trac-nghiem-dh-lich-su-dang-de-5',
    description:
      'Tổng hợp: các kỳ Đại hội, đường lối, tư tưởng Hồ Chí Minh.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Đảng Cộng sản Việt Nam đã trải qua bao nhiêu lần Đại hội đại biểu toàn quốc (tính đến Đại hội XIII)?',
        answers: [
          { content: '11 lần', isCorrect: false },
          { content: '12 lần', isCorrect: false },
          { content: '13 lần', isCorrect: true },
          { content: '14 lần', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội XIII của Đảng (1/2021) xác định mục tiêu đến năm 2045:',
        answers: [
          { content: 'Trở thành nước phát triển, thu nhập cao', isCorrect: true },
          { content: 'Trở thành nước công nghiệp', isCorrect: false },
          { content: 'Hoàn thành CNH-HĐH', isCorrect: false },
          { content: 'Xóa bỏ nghèo đói', isCorrect: false },
        ],
      },
      {
        content: 'Tư tưởng Hồ Chí Minh được Đảng chính thức ghi nhận là nền tảng tư tưởng tại Đại hội nào?',
        answers: [
          { content: 'Đại hội V', isCorrect: false },
          { content: 'Đại hội VI', isCorrect: false },
          { content: 'Đại hội VII (1991)', isCorrect: true },
          { content: 'Đại hội VIII', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh sinh ngày tháng năm nào?',
        answers: [
          { content: '19/5/1890', isCorrect: true },
          { content: '2/9/1890', isCorrect: false },
          { content: '3/2/1890', isCorrect: false },
          { content: '1/1/1890', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh qua đời ngày:',
        answers: [
          { content: '19/5/1969', isCorrect: false },
          { content: '2/9/1969', isCorrect: true },
          { content: '3/2/1969', isCorrect: false },
          { content: '22/12/1969', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung cốt lõi của tư tưởng Hồ Chí Minh là:',
        answers: [
          { content: 'Độc lập dân tộc gắn liền với chủ nghĩa xã hội', isCorrect: true },
          { content: 'Phát triển kinh tế thị trường', isCorrect: false },
          { content: 'Hội nhập quốc tế', isCorrect: false },
          { content: 'Xây dựng quân đội mạnh', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội III của Đảng (9/1960) xác định nhiệm vụ chiến lược:',
        answers: [
          { content: 'Tiến hành đồng thời hai chiến lược cách mạng: CMXHCN ở miền Bắc và CM dân tộc dân chủ nhân dân ở miền Nam', isCorrect: true },
          { content: 'Chỉ xây dựng CNXH ở miền Bắc', isCorrect: false },
          { content: 'Chỉ giải phóng miền Nam', isCorrect: false },
          { content: 'Đàm phán hòa bình', isCorrect: false },
        ],
      },
      {
        content: 'Tổng Bí thư Lê Duẩn giữ chức vụ từ năm nào đến năm nào?',
        answers: [
          { content: '1951-1969', isCorrect: false },
          { content: '1960-1986', isCorrect: true },
          { content: '1976-1991', isCorrect: false },
          { content: '1986-1991', isCorrect: false },
        ],
      },
      {
        content: 'Di chúc của Chủ tịch Hồ Chí Minh được công bố lần đầu vào năm:',
        answers: [
          { content: '1969', isCorrect: true },
          { content: '1975', isCorrect: false },
          { content: '1986', isCorrect: false },
          { content: '1990', isCorrect: false },
        ],
      },
      {
        content: 'Trong Di chúc, Hồ Chí Minh nhấn mạnh "Đầu tiên là công việc đối với":',
        answers: [
          { content: 'Kinh tế', isCorrect: false },
          { content: 'Quân sự', isCorrect: false },
          { content: 'Con người (Đảng)', isCorrect: true },
          { content: 'Ngoại giao', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội X (4/2006) cho phép:',
        answers: [
          { content: 'Đảng viên được làm kinh tế tư nhân', isCorrect: true },
          { content: 'Đa đảng', isCorrect: false },
          { content: 'Tư nhân hóa toàn bộ nền kinh tế', isCorrect: false },
          { content: 'Bỏ chế độ XHCN', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội XII (1/2016) nhấn mạnh nhiệm vụ trọng tâm:',
        answers: [
          { content: 'Xây dựng Đảng trong sạch, vững mạnh; ngăn chặn suy thoái tư tưởng chính trị, đạo đức', isCorrect: true },
          { content: 'Phát triển công nghiệp nặng', isCorrect: false },
          { content: 'Mở rộng chiến tranh', isCorrect: false },
          { content: 'Giải tán các tổ chức xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc tổ chức cơ bản của Đảng Cộng sản Việt Nam là:',
        answers: [
          { content: 'Tập trung dân chủ', isCorrect: true },
          { content: 'Dân chủ tập trung', isCorrect: false },
          { content: 'Tự do cá nhân', isCorrect: false },
          { content: 'Đa nguyên chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh khẳng định: "Không có gì quý hơn":',
        answers: [
          { content: 'Tiền bạc', isCorrect: false },
          { content: 'Độc lập, tự do', isCorrect: true },
          { content: 'Quyền lực', isCorrect: false },
          { content: 'Danh vọng', isCorrect: false },
        ],
      },
      {
        content: 'Đường lối đối ngoại của Đảng trong thời kỳ đổi mới là:',
        answers: [
          { content: 'Đóng cửa, tự cung tự cấp', isCorrect: false },
          { content: 'Đa phương hóa, đa dạng hóa quan hệ quốc tế', isCorrect: true },
          { content: 'Chỉ quan hệ với các nước XHCN', isCorrect: false },
          { content: 'Chỉ quan hệ với các nước phương Tây', isCorrect: false },
        ],
      },
      {
        content: 'Quan điểm của Hồ Chí Minh về đạo đức cách mạng nhấn mạnh:',
        answers: [
          { content: 'Cần, kiệm, liêm, chính, chí công vô tư', isCorrect: true },
          { content: 'Giàu có, quyền lực', isCorrect: false },
          { content: 'Danh vọng cá nhân', isCorrect: false },
          { content: 'Hưởng thụ vật chất', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội nào đề ra chủ trương "công nghiệp hóa, hiện đại hóa đất nước"?',
        answers: [
          { content: 'Đại hội VI', isCorrect: false },
          { content: 'Đại hội VII', isCorrect: false },
          { content: 'Đại hội VIII (1996)', isCorrect: true },
          { content: 'Đại hội IX', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh viết tác phẩm "Sửa đổi lối làm việc" vào năm:',
        answers: [
          { content: '1945', isCorrect: false },
          { content: '1947', isCorrect: true },
          { content: '1954', isCorrect: false },
          { content: '1960', isCorrect: false },
        ],
      },
      {
        content: 'Theo Hồ Chí Minh, Đảng phải là:',
        answers: [
          { content: 'Đảng của giai cấp tư sản', isCorrect: false },
          { content: 'Đảng của giai cấp công nhân, đồng thời là Đảng của nhân dân lao động và của dân tộc', isCorrect: true },
          { content: 'Đảng của trí thức', isCorrect: false },
          { content: 'Đảng của quân đội', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội XIII xác định đột phá chiến lược nào?',
        answers: [
          { content: 'Hoàn thiện thể chế, phát triển nguồn nhân lực, xây dựng hạ tầng', isCorrect: true },
          { content: 'Phát triển công nghiệp nặng', isCorrect: false },
          { content: 'Mở rộng lãnh thổ', isCorrect: false },
          { content: 'Tăng cường quân sự', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh quan niệm về dân chủ: "Dân là":',
        answers: [
          { content: 'Người phục vụ nhà nước', isCorrect: false },
          { content: 'Gốc của nước', isCorrect: true },
          { content: 'Công cụ của Đảng', isCorrect: false },
          { content: 'Đối tượng quản lý', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh" được phát động từ:',
        answers: [
          { content: '2003', isCorrect: false },
          { content: '2006', isCorrect: false },
          { content: '2007', isCorrect: true },
          { content: '2011', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản Việt Nam hiện nay có bao nhiêu đảng viên (tính đến 2024)?',
        answers: [
          { content: 'Khoảng 3 triệu', isCorrect: false },
          { content: 'Khoảng 5,4 triệu', isCorrect: true },
          { content: 'Khoảng 8 triệu', isCorrect: false },
          { content: 'Khoảng 10 triệu', isCorrect: false },
        ],
      },
      {
        content: 'Bài học kinh nghiệm lớn nhất qua các thời kỳ cách mạng của Đảng là:',
        answers: [
          { content: 'Nắm vững ngọn cờ độc lập dân tộc và CNXH', isCorrect: true },
          { content: 'Phát triển kinh tế bằng mọi giá', isCorrect: false },
          { content: 'Dựa hoàn toàn vào viện trợ nước ngoài', isCorrect: false },
          { content: 'Tập trung phát triển quân sự', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội XIII (1/2021) bầu ai làm Tổng Bí thư?',
        answers: [
          { content: 'Nguyễn Phú Trọng', isCorrect: true },
          { content: 'Nguyễn Xuân Phúc', isCorrect: false },
          { content: 'Phạm Minh Chính', isCorrect: false },
          { content: 'Vương Đình Huệ', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
