import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: VN 1919-1930, thành lập Đảng, phong trào yêu nước
  // =============================================
  {
    categorySlug: 'on-thi-thpt-lich-su',
    title: 'Đề ôn thi THPT QG 2025 - Lịch Sử - Đề số 1',
    slug: 'on-thi-thpt-lich-su-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Lịch Sử - Đề số 1. Tổng hợp: Việt Nam 1919-1930, thành lập Đảng, phong trào yêu nước đầu thế kỷ XX.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Nguyễn Ái Quốc ra đi tìm đường cứu nước vào năm nào?',
        answers: [
          { content: '1911', isCorrect: true },
          { content: '1917', isCorrect: false },
          { content: '1919', isCorrect: false },
          { content: '1920', isCorrect: false },
        ],
      },
      {
        content: 'Sự kiện nào đánh dấu bước ngoặt trong hoạt động cách mạng của Nguyễn Ái Quốc từ chủ nghĩa yêu nước sang chủ nghĩa cộng sản?',
        answers: [
          { content: 'Gửi bản Yêu sách đến Hội nghị Véc-xai (1919)', isCorrect: false },
          { content: 'Đọc Sơ thảo Luận cương của Lê-nin về vấn đề dân tộc và thuộc địa (7/1920)', isCorrect: true },
          { content: 'Tham gia thành lập Đảng Cộng sản Pháp (12/1920)', isCorrect: false },
          { content: 'Thành lập Hội Việt Nam Cách mạng Thanh niên (1925)', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp ở Đông Dương (1919-1929) tập trung đầu tư vào lĩnh vực nào nhiều nhất?',
        answers: [
          { content: 'Công nghiệp nặng', isCorrect: false },
          { content: 'Nông nghiệp và khai mỏ', isCorrect: true },
          { content: 'Thương mại quốc tế', isCorrect: false },
          { content: 'Giáo dục và y tế', isCorrect: false },
        ],
      },
      {
        content: 'Giai cấp nào ở Việt Nam ra đời do tác động trực tiếp của cuộc khai thác thuộc địa lần thứ hai?',
        answers: [
          { content: 'Giai cấp nông dân', isCorrect: false },
          { content: 'Giai cấp địa chủ phong kiến', isCorrect: false },
          { content: 'Giai cấp công nhân', isCorrect: true },
          { content: 'Giai cấp tư sản dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Tờ báo "Người cùng khổ" (Le Paria) do Nguyễn Ái Quốc sáng lập tại Pháp vào năm nào?',
        answers: [
          { content: '1921', isCorrect: false },
          { content: '1922', isCorrect: true },
          { content: '1924', isCorrect: false },
          { content: '1925', isCorrect: false },
        ],
      },
      {
        content: 'Hội Việt Nam Cách mạng Thanh niên được thành lập tại đâu vào tháng 6/1925?',
        answers: [
          { content: 'Pari (Pháp)', isCorrect: false },
          { content: 'Mát-xcơ-va (Liên Xô)', isCorrect: false },
          { content: 'Quảng Châu (Trung Quốc)', isCorrect: true },
          { content: 'Hà Nội (Việt Nam)', isCorrect: false },
        ],
      },
      {
        content: 'Tác phẩm "Đường Kách mệnh" của Nguyễn Ái Quốc được xuất bản năm nào?',
        answers: [
          { content: '1925', isCorrect: false },
          { content: '1926', isCorrect: false },
          { content: '1927', isCorrect: true },
          { content: '1930', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào "vô sản hóa" do Hội Việt Nam Cách mạng Thanh niên phát động vào năm nào?',
        answers: [
          { content: '1925', isCorrect: false },
          { content: '1926', isCorrect: false },
          { content: '1928', isCorrect: true },
          { content: '1930', isCorrect: false },
        ],
      },
      {
        content: 'Ba tổ chức cộng sản ra đời ở Việt Nam năm 1929 là những tổ chức nào?',
        answers: [
          { content: 'Đông Dương Cộng sản Đảng, An Nam Cộng sản Đảng, Đông Dương Cộng sản Liên đoàn', isCorrect: true },
          { content: 'Việt Nam Quốc dân Đảng, Tân Việt, Thanh niên', isCorrect: false },
          { content: 'Đảng Lập hiến, Đảng Thanh niên, Đảng Dân chủ', isCorrect: false },
          { content: 'Hội Phục Việt, Hội Hưng Nam, Tân Việt', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản Việt Nam được thành lập vào ngày tháng năm nào?',
        answers: [
          { content: '3/2/1930', isCorrect: true },
          { content: '6/1/1930', isCorrect: false },
          { content: '24/2/1930', isCorrect: false },
          { content: '1/5/1930', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị hợp nhất các tổ chức cộng sản thành Đảng Cộng sản Việt Nam diễn ra ở đâu?',
        answers: [
          { content: 'Quảng Châu (Trung Quốc)', isCorrect: false },
          { content: 'Hương Cảng (Trung Quốc)', isCorrect: true },
          { content: 'Mát-xcơ-va (Liên Xô)', isCorrect: false },
          { content: 'Hà Nội (Việt Nam)', isCorrect: false },
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
        content: 'Theo Cương lĩnh chính trị đầu tiên, cách mạng Việt Nam phải trải qua mấy giai đoạn?',
        answers: [
          { content: 'Một giai đoạn: cách mạng xã hội chủ nghĩa', isCorrect: false },
          { content: 'Hai giai đoạn: cách mạng tư sản dân quyền và cách mạng xã hội chủ nghĩa', isCorrect: true },
          { content: 'Ba giai đoạn', isCorrect: false },
          { content: 'Không xác định giai đoạn', isCorrect: false },
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
        content: 'Phan Bội Châu chủ trương cứu nước theo con đường nào?',
        answers: [
          { content: 'Dựa vào Pháp để cải cách', isCorrect: false },
          { content: 'Bạo lực cách mạng, dựa vào Nhật Bản', isCorrect: true },
          { content: 'Đấu tranh nghị trường', isCorrect: false },
          { content: 'Đi theo con đường cách mạng vô sản', isCorrect: false },
        ],
      },
      {
        content: 'Phan Châu Trinh chủ trương cứu nước theo phương pháp nào?',
        answers: [
          { content: 'Bạo lực vũ trang', isCorrect: false },
          { content: 'Cải cách, nâng cao dân trí, dân quyền', isCorrect: true },
          { content: 'Dựa vào Nhật Bản', isCorrect: false },
          { content: 'Đi theo con đường cách mạng vô sản', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào Đông Du (1905-1908) do ai khởi xướng?',
        answers: [
          { content: 'Phan Châu Trinh', isCorrect: false },
          { content: 'Phan Bội Châu', isCorrect: true },
          { content: 'Lương Văn Can', isCorrect: false },
          { content: 'Nguyễn Thái Học', isCorrect: false },
        ],
      },
      {
        content: 'Trường Đông Kinh Nghĩa Thục được thành lập tại Hà Nội vào năm nào?',
        answers: [
          { content: '1905', isCorrect: false },
          { content: '1906', isCorrect: false },
          { content: '1907', isCorrect: true },
          { content: '1908', isCorrect: false },
        ],
      },
      {
        content: 'Nguyễn Ái Quốc tham dự Đại hội lần thứ V Quốc tế Cộng sản tại Mát-xcơ-va vào năm nào?',
        answers: [
          { content: '1922', isCorrect: false },
          { content: '1923', isCorrect: false },
          { content: '1924', isCorrect: true },
          { content: '1925', isCorrect: false },
        ],
      },
      {
        content: 'Tại Đại hội Tua (12/1920), Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập tổ chức nào?',
        answers: [
          { content: 'Quốc tế thứ nhất', isCorrect: false },
          { content: 'Quốc tế thứ hai', isCorrect: false },
          { content: 'Quốc tế thứ ba (Quốc tế Cộng sản)', isCorrect: true },
          { content: 'Hội Quốc liên', isCorrect: false },
        ],
      },
      {
        content: 'Luận cương chính trị (10/1930) của Đảng Cộng sản Đông Dương do ai soạn thảo?',
        answers: [
          { content: 'Nguyễn Ái Quốc', isCorrect: false },
          { content: 'Trần Phú', isCorrect: true },
          { content: 'Lê Hồng Phong', isCorrect: false },
          { content: 'Nguyễn Văn Cừ', isCorrect: false },
        ],
      },
      {
        content: 'Hạn chế lớn nhất của Luận cương chính trị (10/1930) so với Cương lĩnh chính trị đầu tiên là gì?',
        answers: [
          { content: 'Không đề cập đến vai trò của Đảng', isCorrect: false },
          { content: 'Không nhận thức đúng mâu thuẫn chủ yếu, nặng về đấu tranh giai cấp, xem nhẹ vấn đề dân tộc', isCorrect: true },
          { content: 'Không đề cập đến cách mạng ruộng đất', isCorrect: false },
          { content: 'Không xác định lực lượng cách mạng', isCorrect: false },
        ],
      },
      {
        content: 'Tân Việt Cách mạng Đảng (1928) có tiền thân là tổ chức nào?',
        answers: [
          { content: 'Hội Phục Việt', isCorrect: true },
          { content: 'Việt Nam Quốc dân Đảng', isCorrect: false },
          { content: 'Hội Việt Nam Cách mạng Thanh niên', isCorrect: false },
          { content: 'Đông Dương Cộng sản Đảng', isCorrect: false },
        ],
      },
      {
        content: 'Đông Dương Cộng sản Đảng (6/1929) được thành lập trên cơ sở phân hóa từ tổ chức nào?',
        answers: [
          { content: 'Tân Việt Cách mạng Đảng', isCorrect: false },
          { content: 'Hội Việt Nam Cách mạng Thanh niên', isCorrect: true },
          { content: 'Việt Nam Quốc dân Đảng', isCorrect: false },
          { content: 'Đảng Lập hiến', isCorrect: false },
        ],
      },
      {
        content: 'Nguyễn Thái Học là lãnh tụ của tổ chức cách mạng nào?',
        answers: [
          { content: 'Hội Việt Nam Cách mạng Thanh niên', isCorrect: false },
          { content: 'Việt Nam Quốc dân Đảng', isCorrect: true },
          { content: 'Tân Việt Cách mạng Đảng', isCorrect: false },
          { content: 'Đông Dương Cộng sản Đảng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: VN 1930-1945, Xô viết Nghệ Tĩnh, Cách mạng tháng Tám
  // =============================================
  {
    categorySlug: 'on-thi-thpt-lich-su',
    title: 'Đề ôn thi THPT QG 2025 - Lịch Sử - Đề số 2',
    slug: 'on-thi-thpt-lich-su-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Lịch Sử - Đề số 2. Tổng hợp: Việt Nam 1930-1945, Xô viết Nghệ Tĩnh, Cách mạng tháng Tám.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Phong trào Xô viết Nghệ - Tĩnh diễn ra trong giai đoạn nào?',
        answers: [
          { content: '1929 - 1930', isCorrect: false },
          { content: '1930 - 1931', isCorrect: true },
          { content: '1932 - 1933', isCorrect: false },
          { content: '1936 - 1939', isCorrect: false },
        ],
      },
      {
        content: 'Xô viết Nghệ - Tĩnh là đỉnh cao của phong trào cách mạng nào?',
        answers: [
          { content: 'Phong trào dân chủ 1936-1939', isCorrect: false },
          { content: 'Phong trào cách mạng 1930-1931', isCorrect: true },
          { content: 'Phong trào giải phóng dân tộc 1939-1945', isCorrect: false },
          { content: 'Phong trào Đông Du', isCorrect: false },
        ],
      },
      {
        content: 'Trong phong trào Xô viết Nghệ - Tĩnh, chính quyền Xô viết đã thực hiện chính sách gì?',
        answers: [
          { content: 'Chia ruộng đất cho dân cày, bỏ thuế vô lý, mở lớp dạy chữ Quốc ngữ', isCorrect: true },
          { content: 'Tăng thuế để phát triển kinh tế', isCorrect: false },
          { content: 'Hợp tác với thực dân Pháp', isCorrect: false },
          { content: 'Xây dựng quân đội chính quy', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào dân chủ 1936-1939 ở Việt Nam diễn ra trong bối cảnh quốc tế nào?',
        answers: [
          { content: 'Chiến tranh thế giới thứ hai bùng nổ', isCorrect: false },
          { content: 'Mặt trận Nhân dân Pháp lên cầm quyền, Quốc tế Cộng sản chủ trương thành lập Mặt trận Nhân dân', isCorrect: true },
          { content: 'Cách mạng tháng Mười Nga thành công', isCorrect: false },
          { content: 'Nhật xâm lược Đông Dương', isCorrect: false },
        ],
      },
      {
        content: 'Mục tiêu đấu tranh trước mắt của phong trào dân chủ 1936-1939 là gì?',
        answers: [
          { content: 'Đánh đổ đế quốc Pháp, giành độc lập', isCorrect: false },
          { content: 'Chống phát xít, chống chiến tranh, đòi tự do, dân chủ, cơm áo, hòa bình', isCorrect: true },
          { content: 'Thực hiện cách mạng ruộng đất', isCorrect: false },
          { content: 'Thành lập chính phủ cộng hòa', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức đấu tranh chủ yếu trong phong trào dân chủ 1936-1939 là gì?',
        answers: [
          { content: 'Đấu tranh vũ trang', isCorrect: false },
          { content: 'Đấu tranh công khai, hợp pháp và nửa hợp pháp', isCorrect: true },
          { content: 'Đấu tranh bí mật', isCorrect: false },
          { content: 'Khởi nghĩa vũ trang', isCorrect: false },
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
        content: 'Sau khi Nhật đảo chính Pháp, Ban Thường vụ Trung ương Đảng ra chỉ thị gì?',
        answers: [
          { content: '"Kháng chiến kiến quốc"', isCorrect: false },
          { content: '"Nhật - Pháp bắn nhau và hành động của chúng ta"', isCorrect: true },
          { content: '"Toàn dân kháng chiến"', isCorrect: false },
          { content: '"Tổng khởi nghĩa"', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị lần thứ 8 Ban Chấp hành Trung ương Đảng (5/1941) quyết định thành lập mặt trận nào?',
        answers: [
          { content: 'Mặt trận Dân chủ Đông Dương', isCorrect: false },
          { content: 'Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh)', isCorrect: true },
          { content: 'Mặt trận Liên Việt', isCorrect: false },
          { content: 'Mặt trận Tổ quốc', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị lần thứ 8 (5/1941) xác định nhiệm vụ chủ yếu trước mắt của cách mạng Việt Nam là gì?',
        answers: [
          { content: 'Cách mạng ruộng đất', isCorrect: false },
          { content: 'Giải phóng dân tộc', isCorrect: true },
          { content: 'Đấu tranh giai cấp', isCorrect: false },
          { content: 'Xây dựng chủ nghĩa xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập vào ngày nào?',
        answers: [
          { content: '22/12/1944', isCorrect: true },
          { content: '19/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
          { content: '15/5/1945', isCorrect: false },
        ],
      },
      {
        content: 'Đội Việt Nam Tuyên truyền Giải phóng quân ban đầu có bao nhiêu chiến sĩ?',
        answers: [
          { content: '24 chiến sĩ', isCorrect: false },
          { content: '34 chiến sĩ', isCorrect: true },
          { content: '44 chiến sĩ', isCorrect: false },
          { content: '54 chiến sĩ', isCorrect: false },
        ],
      },
      {
        content: 'Khu giải phóng Việt Bắc được thành lập vào tháng nào năm 1945?',
        answers: [
          { content: 'Tháng 3/1945', isCorrect: false },
          { content: 'Tháng 6/1945', isCorrect: true },
          { content: 'Tháng 8/1945', isCorrect: false },
          { content: 'Tháng 9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị toàn quốc của Đảng họp tại Tân Trào (8/1945) quyết định vấn đề gì?',
        answers: [
          { content: 'Phát động Tổng khởi nghĩa trong cả nước', isCorrect: true },
          { content: 'Thành lập Mặt trận Việt Minh', isCorrect: false },
          { content: 'Đàm phán với Nhật', isCorrect: false },
          { content: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân', isCorrect: false },
        ],
      },
      {
        content: 'Đại hội Quốc dân Tân Trào (16-17/8/1945) đã bầu ra cơ quan nào?',
        answers: [
          { content: 'Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch', isCorrect: true },
          { content: 'Ban Chấp hành Trung ương Đảng', isCorrect: false },
          { content: 'Quốc hội khóa I', isCorrect: false },
          { content: 'Chính phủ liên hiệp', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng tháng Tám 1945 giành được chính quyền ở Hà Nội vào ngày nào?',
        answers: [
          { content: '15/8/1945', isCorrect: false },
          { content: '19/8/1945', isCorrect: true },
          { content: '23/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng tháng Tám giành chính quyền ở Huế vào ngày nào?',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '23/8/1945', isCorrect: true },
          { content: '25/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng tháng Tám giành chính quyền ở Sài Gòn vào ngày nào?',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '23/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: true },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Vua Bảo Đại tuyên bố thoái vị vào ngày nào?',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '25/8/1945', isCorrect: false },
          { content: '30/8/1945', isCorrect: true },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình vào ngày nào?',
        answers: [
          { content: '19/8/1945', isCorrect: false },
          { content: '30/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: true },
          { content: '6/1/1946', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân chủ yếu và có ý nghĩa quyết định nhất đưa đến thắng lợi của Cách mạng tháng Tám là gì?',
        answers: [
          { content: 'Truyền thống yêu nước của dân tộc', isCorrect: false },
          { content: 'Sự lãnh đạo đúng đắn, sáng tạo của Đảng Cộng sản Đông Dương', isCorrect: true },
          { content: 'Phát xít Nhật đầu hàng Đồng minh', isCorrect: false },
          { content: 'Lực lượng vũ trang mạnh', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa quốc tế của Cách mạng tháng Tám 1945 là gì?',
        answers: [
          { content: 'Chỉ có ý nghĩa trong nước', isCorrect: false },
          { content: 'Cổ vũ mạnh mẽ phong trào giải phóng dân tộc trên thế giới', isCorrect: true },
          { content: 'Kết thúc Chiến tranh thế giới thứ hai', isCorrect: false },
          { content: 'Xóa bỏ hoàn toàn chủ nghĩa thực dân', isCorrect: false },
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
        content: 'Tuyên ngôn Độc lập ngày 2/9/1945 trích dẫn nội dung từ tuyên ngôn của những nước nào?',
        answers: [
          { content: 'Tuyên ngôn Độc lập của Mỹ (1776) và Tuyên ngôn Nhân quyền và Dân quyền của Pháp (1789)', isCorrect: true },
          { content: 'Tuyên ngôn của Liên Xô và Trung Quốc', isCorrect: false },
          { content: 'Tuyên ngôn của Anh và Pháp', isCorrect: false },
          { content: 'Hiến chương Liên Hợp Quốc', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào "Tuần lễ vàng" (9/1945) nhằm mục đích gì?',
        answers: [
          { content: 'Quyên góp vàng để giải quyết khó khăn tài chính cho chính quyền cách mạng', isCorrect: true },
          { content: 'Mua vũ khí từ nước ngoài', isCorrect: false },
          { content: 'Phát triển kinh tế tư nhân', isCorrect: false },
          { content: 'Xây dựng cơ sở hạ tầng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Kháng chiến chống Pháp 1945-1954, Điện Biên Phủ
  // =============================================
  {
    categorySlug: 'on-thi-thpt-lich-su',
    title: 'Đề ôn thi THPT QG 2025 - Lịch Sử - Đề số 3',
    slug: 'on-thi-thpt-lich-su-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Lịch Sử - Đề số 3. Tổng hợp: kháng chiến chống Pháp 1945-1954, chiến dịch Điện Biên Phủ.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Sau Cách mạng tháng Tám 1945, nước Việt Nam Dân chủ Cộng hòa đứng trước những khó khăn, thử thách nào?',
        answers: [
          { content: 'Giặc đói, giặc dốt, giặc ngoại xâm và nội phản', isCorrect: true },
          { content: 'Chỉ có giặc ngoại xâm', isCorrect: false },
          { content: 'Chỉ có khó khăn về kinh tế', isCorrect: false },
          { content: 'Chỉ có nạn mù chữ', isCorrect: false },
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
        content: 'Hiệp định Sơ bộ ngày 6/3/1946 có nội dung cơ bản gì?',
        answers: [
          { content: 'Pháp công nhận Việt Nam là quốc gia tự do, có chính phủ, nghị viện, quân đội và tài chính riêng nằm trong Liên bang Đông Dương và Liên hiệp Pháp', isCorrect: true },
          { content: 'Pháp công nhận Việt Nam hoàn toàn độc lập', isCorrect: false },
          { content: 'Pháp rút quân khỏi Việt Nam ngay lập tức', isCorrect: false },
          { content: 'Việt Nam gia nhập Liên Hợp Quốc', isCorrect: false },
        ],
      },
      {
        content: 'Chủ tịch Hồ Chí Minh ký Hiệp định Sơ bộ 6/3/1946 nhằm mục đích chính là gì?',
        answers: [
          { content: 'Đuổi quân Trung Hoa Dân Quốc ra khỏi miền Bắc, tranh thủ thời gian chuẩn bị lực lượng', isCorrect: true },
          { content: 'Chấp nhận sự cai trị của Pháp', isCorrect: false },
          { content: 'Chia cắt đất nước', isCorrect: false },
          { content: 'Liên minh với Pháp chống Nhật', isCorrect: false },
        ],
      },
      {
        content: 'Lời kêu gọi toàn quốc kháng chiến của Chủ tịch Hồ Chí Minh được phát đi vào ngày nào?',
        answers: [
          { content: '19/12/1946', isCorrect: true },
          { content: '6/3/1946', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
          { content: '22/12/1946', isCorrect: false },
        ],
      },
      {
        content: 'Đường lối kháng chiến chống Pháp của Đảng và Chính phủ là gì?',
        answers: [
          { content: 'Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh và tranh thủ sự ủng hộ quốc tế', isCorrect: true },
          { content: 'Đánh nhanh thắng nhanh', isCorrect: false },
          { content: 'Chỉ dựa vào viện trợ quốc tế', isCorrect: false },
          { content: 'Chỉ đánh du kích', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Việt Bắc thu - đông 1947 có ý nghĩa gì quan trọng nhất?',
        answers: [
          { content: 'Kết thúc cuộc kháng chiến chống Pháp', isCorrect: false },
          { content: 'Đánh bại chiến lược "đánh nhanh thắng nhanh" của Pháp, bảo vệ cơ quan đầu não kháng chiến', isCorrect: true },
          { content: 'Giải phóng hoàn toàn miền Bắc', isCorrect: false },
          { content: 'Buộc Pháp ký hiệp định đình chiến', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Biên giới thu - đông 1950 nhằm mục đích chính là gì?',
        answers: [
          { content: 'Giải phóng Hà Nội', isCorrect: false },
          { content: 'Khai thông biên giới Việt - Trung, mở rộng và củng cố căn cứ địa Việt Bắc', isCorrect: true },
          { content: 'Đánh chiếm Điện Biên Phủ', isCorrect: false },
          { content: 'Giải phóng toàn bộ Đông Dương', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Đông Khê (9/1950) trong chiến dịch Biên giới có ý nghĩa gì?',
        answers: [
          { content: 'Là trận mở đầu, tạo điều kiện bao vây tiêu diệt quân Pháp trên Đường số 4', isCorrect: true },
          { content: 'Kết thúc chiến dịch Biên giới', isCorrect: false },
          { content: 'Buộc Pháp rút khỏi Đông Dương', isCorrect: false },
          { content: 'Giải phóng Hà Nội', isCorrect: false },
        ],
      },
      {
        content: 'Sau chiến dịch Biên giới 1950, quân đội Việt Nam giành được điều gì?',
        answers: [
          { content: 'Quyền chủ động chiến lược trên chiến trường chính Bắc Bộ', isCorrect: true },
          { content: 'Giải phóng hoàn toàn miền Bắc', isCorrect: false },
          { content: 'Buộc Pháp ký hiệp định hòa bình', isCorrect: false },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
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
        content: 'Kế hoạch Na-va được Pháp - Mỹ đề ra nhằm mục đích gì?',
        answers: [
          { content: 'Xây dựng lực lượng quân sự mạnh, giành thắng lợi quyết định trong 18 tháng', isCorrect: true },
          { content: 'Rút quân khỏi Đông Dương', isCorrect: false },
          { content: 'Đàm phán hòa bình', isCorrect: false },
          { content: 'Trao trả độc lập cho Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Pháp xây dựng tập đoàn cứ điểm Điện Biên Phủ gồm bao nhiêu cứ điểm?',
        answers: [
          { content: '36 cứ điểm', isCorrect: false },
          { content: '49 cứ điểm', isCorrect: true },
          { content: '52 cứ điểm', isCorrect: false },
          { content: '60 cứ điểm', isCorrect: false },
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
        content: 'Phương châm tác chiến của ta trong chiến dịch Điện Biên Phủ được thay đổi từ "đánh nhanh thắng nhanh" sang phương châm nào?',
        answers: [
          { content: '"Đánh du kích"', isCorrect: false },
          { content: '"Đánh chắc, tiến chắc"', isCorrect: true },
          { content: '"Đánh điểm, diệt viện"', isCorrect: false },
          { content: '"Vây hãm"', isCorrect: false },
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
        content: 'Đợt tiến công thứ nhất của chiến dịch Điện Biên Phủ (13/3 - 17/3/1954) ta tiêu diệt cứ điểm nào?',
        answers: [
          { content: 'Him Lam và toàn bộ phân khu Bắc', isCorrect: true },
          { content: 'Phân khu Trung tâm', isCorrect: false },
          { content: 'Phân khu Nam', isCorrect: false },
          { content: 'Sân bay Mường Thanh', isCorrect: false },
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
        content: 'Chiến thắng Điện Biên Phủ (7/5/1954) có ý nghĩa lịch sử gì?',
        answers: [
          { content: 'Đập tan hoàn toàn kế hoạch Na-va, buộc Pháp ký Hiệp định Giơ-ne-vơ', isCorrect: true },
          { content: 'Chỉ có ý nghĩa quân sự', isCorrect: false },
          { content: 'Kết thúc hoàn toàn chiến tranh ở Việt Nam', isCorrect: false },
          { content: 'Thống nhất đất nước', isCorrect: false },
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
        content: 'Theo Hiệp định Giơ-ne-vơ, cuộc tổng tuyển cử thống nhất Việt Nam sẽ được tổ chức vào thời gian nào?',
        answers: [
          { content: 'Tháng 7/1955', isCorrect: false },
          { content: 'Tháng 7/1956', isCorrect: true },
          { content: 'Tháng 7/1957', isCorrect: false },
          { content: 'Tháng 7/1958', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Điện Biên Phủ có ý nghĩa quốc tế gì?',
        answers: [
          { content: 'Chỉ có ý nghĩa với Việt Nam', isCorrect: false },
          { content: 'Cổ vũ phong trào giải phóng dân tộc trên thế giới, góp phần làm sụp đổ chủ nghĩa thực dân cũ', isCorrect: true },
          { content: 'Kết thúc Chiến tranh thế giới thứ hai', isCorrect: false },
          { content: 'Chấm dứt hoàn toàn chủ nghĩa thực dân', isCorrect: false },
        ],
      },
      {
        content: 'Anh hùng Phan Đình Giót đã hy sinh anh dũng trong trận đánh nào của chiến dịch Điện Biên Phủ?',
        answers: [
          { content: 'Trận đánh đồi A1', isCorrect: false },
          { content: 'Trận đánh cứ điểm Him Lam', isCorrect: true },
          { content: 'Trận đánh sân bay Mường Thanh', isCorrect: false },
          { content: 'Trận đánh phân khu Nam', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Kháng chiến chống Mỹ 1954-1975, thống nhất đất nước
  // =============================================
  {
    categorySlug: 'on-thi-thpt-lich-su',
    title: 'Đề ôn thi THPT QG 2025 - Lịch Sử - Đề số 4',
    slug: 'on-thi-thpt-lich-su-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Lịch Sử - Đề số 4. Tổng hợp: kháng chiến chống Mỹ 1954-1975, thống nhất đất nước.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Sau Hiệp định Giơ-ne-vơ 1954, Mỹ thay Pháp dựng lên chính quyền nào ở miền Nam Việt Nam?',
        answers: [
          { content: 'Chính quyền Bảo Đại', isCorrect: false },
          { content: 'Chính quyền Ngô Đình Diệm', isCorrect: true },
          { content: 'Chính quyền Nguyễn Văn Thiệu', isCorrect: false },
          { content: 'Chính quyền Dương Văn Minh', isCorrect: false },
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
        content: 'Phong trào "Đồng khởi" ở miền Nam diễn ra vào thời gian nào?',
        answers: [
          { content: '1958', isCorrect: false },
          { content: '1959 - 1960', isCorrect: true },
          { content: '1961 - 1962', isCorrect: false },
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
        content: 'Nội dung chính của chiến lược "Chiến tranh đặc biệt" là gì?',
        answers: [
          { content: 'Dùng quân Mỹ trực tiếp chiến đấu', isCorrect: false },
          { content: 'Dùng quân đội Sài Gòn, do cố vấn Mỹ chỉ huy, với vũ khí và phương tiện chiến tranh của Mỹ', isCorrect: true },
          { content: 'Dùng quân đội các nước đồng minh', isCorrect: false },
          { content: 'Rút quân Mỹ về nước', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Ấp Bắc (1/1963) chứng tỏ điều gì?',
        answers: [
          { content: 'Quân dân miền Nam có khả năng đánh bại chiến lược "Chiến tranh đặc biệt" của Mỹ', isCorrect: true },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Mỹ rút quân khỏi Việt Nam', isCorrect: false },
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
        content: 'Chiến thắng Vạn Tường (8/1965) có ý nghĩa gì?',
        answers: [
          { content: 'Chứng tỏ quân dân miền Nam có khả năng đánh bại quân viễn chinh Mỹ', isCorrect: true },
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Buộc Mỹ ký hiệp định', isCorrect: false },
          { content: 'Giải phóng Đà Nẵng', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân 1968 buộc Mỹ phải làm gì?',
        answers: [
          { content: 'Tăng quân sang Việt Nam', isCorrect: false },
          { content: 'Tuyên bố "phi Mỹ hóa" chiến tranh, chấp nhận đàm phán tại Hội nghị Pa-ri', isCorrect: true },
          { content: 'Rút quân ngay lập tức', isCorrect: false },
          { content: 'Ký Hiệp định Pa-ri', isCorrect: false },
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
        content: 'Đường Trường Sơn (đường Hồ Chí Minh) được mở vào năm nào?',
        answers: [
          { content: '1954', isCorrect: false },
          { content: '1959', isCorrect: true },
          { content: '1961', isCorrect: false },
          { content: '1965', isCorrect: false },
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
        content: 'Tổng thống Mỹ nào ra lệnh ném bom B-52 vào Hà Nội dịp Giáng sinh 1972?',
        answers: [
          { content: 'Kennedy', isCorrect: false },
          { content: 'Johnson', isCorrect: false },
          { content: 'Nixon', isCorrect: true },
          { content: 'Ford', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp định Pa-ri về chấm dứt chiến tranh ở Việt Nam được ký kết vào ngày nào?',
        answers: [
          { content: '27/1/1973', isCorrect: true },
          { content: '30/4/1975', isCorrect: false },
          { content: '21/7/1954', isCorrect: false },
          { content: '1/1/1973', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung quan trọng nhất của Hiệp định Pa-ri 1973 là gì?',
        answers: [
          { content: 'Mỹ và các nước cam kết tôn trọng độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam', isCorrect: true },
          { content: 'Mỹ tiếp tục viện trợ cho Sài Gòn', isCorrect: false },
          { content: 'Chia cắt vĩnh viễn Việt Nam', isCorrect: false },
          { content: 'Mỹ được giữ quân ở miền Nam', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc Tổng tiến công và nổi dậy mùa Xuân 1975 mở đầu bằng chiến dịch nào?',
        answers: [
          { content: 'Chiến dịch Huế - Đà Nẵng', isCorrect: false },
          { content: 'Chiến dịch Tây Nguyên', isCorrect: true },
          { content: 'Chiến dịch Hồ Chí Minh', isCorrect: false },
          { content: 'Chiến dịch đường 14 - Phước Long', isCorrect: false },
        ],
      },
      {
        content: 'Trận mở đầu chiến dịch Tây Nguyên (3/1975) là trận đánh nào?',
        answers: [
          { content: 'Đánh Huế', isCorrect: false },
          { content: 'Đánh Buôn Ma Thuột', isCorrect: true },
          { content: 'Đánh Đà Nẵng', isCorrect: false },
          { content: 'Đánh Sài Gòn', isCorrect: false },
        ],
      },
      {
        content: 'Chiến dịch Huế - Đà Nẵng kết thúc thắng lợi vào ngày nào?',
        answers: [
          { content: '26/3/1975', isCorrect: false },
          { content: '29/3/1975', isCorrect: true },
          { content: '30/4/1975', isCorrect: false },
          { content: '1/4/1975', isCorrect: false },
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
        content: 'Xe tăng quân giải phóng húc đổ cổng Dinh Độc Lập vào lúc nào?',
        answers: [
          { content: '10 giờ 45 phút ngày 30/4/1975', isCorrect: false },
          { content: '11 giờ 30 phút ngày 30/4/1975', isCorrect: true },
          { content: '12 giờ ngày 30/4/1975', isCorrect: false },
          { content: '9 giờ ngày 30/4/1975', isCorrect: false },
        ],
      },
      {
        content: 'Tổng thống cuối cùng của chính quyền Sài Gòn tuyên bố đầu hàng vô điều kiện là ai?',
        answers: [
          { content: 'Nguyễn Văn Thiệu', isCorrect: false },
          { content: 'Dương Văn Minh', isCorrect: true },
          { content: 'Trần Văn Hương', isCorrect: false },
          { content: 'Nguyễn Cao Kỳ', isCorrect: false },
        ],
      },
      {
        content: 'Ngày 30/4/1975 đánh dấu sự kiện lịch sử gì?',
        answers: [
          { content: 'Ký Hiệp định Pa-ri', isCorrect: false },
          { content: 'Giải phóng hoàn toàn miền Nam, thống nhất đất nước', isCorrect: true },
          { content: 'Bắt đầu chiến dịch Hồ Chí Minh', isCorrect: false },
          { content: 'Mỹ rút quân khỏi Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Chiến thắng Phước Long (1/1975) có ý nghĩa gì đối với cuộc Tổng tiến công mùa Xuân 1975?',
        answers: [
          { content: 'Kết thúc chiến tranh', isCorrect: false },
          { content: 'Chứng tỏ khả năng can thiệp trở lại của Mỹ rất hạn chế, tạo tiền đề cho quyết tâm giải phóng miền Nam', isCorrect: true },
          { content: 'Buộc Mỹ ký hiệp định mới', isCorrect: false },
          { content: 'Giải phóng Sài Gòn', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Đề thi thử tổng hợp - Lịch sử VN + thế giới thế kỷ XX
  // =============================================
  {
    categorySlug: 'on-thi-thpt-lich-su',
    title: 'Đề ôn thi THPT QG 2025 - Lịch Sử - Đề số 5',
    slug: 'on-thi-thpt-lich-su-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Lịch Sử - Đề số 5. Đề thi thử tổng hợp: lịch sử Việt Nam và thế giới thế kỷ XX.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Cách mạng tháng Mười Nga năm 1917 thành công có ý nghĩa gì đối với phong trào cách mạng thế giới?',
        answers: [
          { content: 'Mở ra thời đại mới - thời đại cách mạng chống đế quốc, giải phóng dân tộc', isCorrect: true },
          { content: 'Chỉ có ý nghĩa với nước Nga', isCorrect: false },
          { content: 'Kết thúc Chiến tranh thế giới thứ nhất', isCorrect: false },
          { content: 'Xóa bỏ chủ nghĩa tư bản trên toàn thế giới', isCorrect: false },
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
        content: 'Chiến tranh thế giới thứ hai kết thúc vào năm nào?',
        answers: [
          { content: '1944', isCorrect: false },
          { content: '1945', isCorrect: true },
          { content: '1946', isCorrect: false },
          { content: '1947', isCorrect: false },
        ],
      },
      {
        content: 'Trật tự thế giới hai cực I-an-ta được hình thành sau sự kiện nào?',
        answers: [
          { content: 'Chiến tranh thế giới thứ nhất', isCorrect: false },
          { content: 'Chiến tranh thế giới thứ hai', isCorrect: true },
          { content: 'Chiến tranh Triều Tiên', isCorrect: false },
          { content: 'Chiến tranh Việt Nam', isCorrect: false },
        ],
      },
      {
        content: '"Chiến tranh lạnh" giữa Mỹ và Liên Xô bắt đầu từ sự kiện nào?',
        answers: [
          { content: 'Mỹ ném bom nguyên tử xuống Nhật Bản (1945)', isCorrect: false },
          { content: 'Thông điệp của Tổng thống Tru-man và "Kế hoạch Mác-san" (1947)', isCorrect: true },
          { content: 'Liên Xô phóng vệ tinh nhân tạo (1957)', isCorrect: false },
          { content: 'Xây dựng bức tường Béc-lin (1961)', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào giải phóng dân tộc ở châu Phi đạt đỉnh cao vào năm nào, được gọi là "Năm châu Phi"?',
        answers: [
          { content: '1955', isCorrect: false },
          { content: '1960', isCorrect: true },
          { content: '1965', isCorrect: false },
          { content: '1975', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng Cuba thành công vào năm nào?',
        answers: [
          { content: '1953', isCorrect: false },
          { content: '1959', isCorrect: true },
          { content: '1961', isCorrect: false },
          { content: '1962', isCorrect: false },
        ],
      },
      {
        content: 'Hiệp hội các quốc gia Đông Nam Á (ASEAN) được thành lập vào năm nào?',
        answers: [
          { content: '1955', isCorrect: false },
          { content: '1967', isCorrect: true },
          { content: '1975', isCorrect: false },
          { content: '1995', isCorrect: false },
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
        content: 'Liên Xô tan rã vào năm nào?',
        answers: [
          { content: '1989', isCorrect: false },
          { content: '1990', isCorrect: false },
          { content: '1991', isCorrect: true },
          { content: '1992', isCorrect: false },
        ],
      },
      {
        content: 'Bức tường Béc-lin sụp đổ vào năm nào?',
        answers: [
          { content: '1987', isCorrect: false },
          { content: '1989', isCorrect: true },
          { content: '1990', isCorrect: false },
          { content: '1991', isCorrect: false },
        ],
      },
      {
        content: 'Nhật Bản trở thành nền kinh tế lớn thứ hai thế giới (sau Mỹ) vào khoảng thời gian nào?',
        answers: [
          { content: 'Cuối thập niên 1950', isCorrect: false },
          { content: 'Cuối thập niên 1960 - đầu thập niên 1970', isCorrect: true },
          { content: 'Cuối thập niên 1980', isCorrect: false },
          { content: 'Đầu thập niên 2000', isCorrect: false },
        ],
      },
      {
        content: 'Cuộc kháng chiến chống Mỹ cứu nước của nhân dân Việt Nam (1954-1975) kết thúc thắng lợi có ý nghĩa quốc tế gì?',
        answers: [
          { content: 'Chỉ có ý nghĩa với Việt Nam', isCorrect: false },
          { content: 'Cổ vũ phong trào đấu tranh vì hòa bình, độc lập dân tộc và tiến bộ xã hội trên thế giới', isCorrect: true },
          { content: 'Kết thúc Chiến tranh lạnh', isCorrect: false },
          { content: 'Xóa bỏ chủ nghĩa thực dân mới', isCorrect: false },
        ],
      },
      {
        content: 'Xu thế toàn cầu hóa bắt đầu diễn ra mạnh mẽ từ thập niên nào?',
        answers: [
          { content: 'Thập niên 1970', isCorrect: false },
          { content: 'Thập niên 1980', isCorrect: false },
          { content: 'Thập niên 1990 (sau Chiến tranh lạnh)', isCorrect: true },
          { content: 'Thập niên 2000', isCorrect: false },
        ],
      },
      {
        content: 'Quốc gia nào là nước đầu tiên phóng thành công vệ tinh nhân tạo vào vũ trụ (1957)?',
        answers: [
          { content: 'Mỹ', isCorrect: false },
          { content: 'Liên Xô', isCorrect: true },
          { content: 'Anh', isCorrect: false },
          { content: 'Pháp', isCorrect: false },
        ],
      },
      {
        content: 'Hội nghị I-an-ta (2/1945) có sự tham gia của nguyên thủ ba nước nào?',
        answers: [
          { content: 'Mỹ, Anh, Pháp', isCorrect: false },
          { content: 'Liên Xô, Mỹ, Anh', isCorrect: true },
          { content: 'Liên Xô, Mỹ, Trung Quốc', isCorrect: false },
          { content: 'Mỹ, Anh, Trung Quốc', isCorrect: false },
        ],
      },
      {
        content: 'Kế hoạch Mác-san (1947) của Mỹ nhằm mục đích gì?',
        answers: [
          { content: 'Viện trợ kinh tế cho Tây Âu phục hồi sau chiến tranh, đồng thời ngăn chặn ảnh hưởng của chủ nghĩa cộng sản', isCorrect: true },
          { content: 'Viện trợ quân sự cho Đông Âu', isCorrect: false },
          { content: 'Phát triển kinh tế châu Á', isCorrect: false },
          { content: 'Giải trừ vũ khí hạt nhân', isCorrect: false },
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
        content: 'Nước Cộng hòa Nhân dân Trung Hoa được thành lập vào ngày nào?',
        answers: [
          { content: '1/10/1949', isCorrect: true },
          { content: '1/1/1950', isCorrect: false },
          { content: '15/8/1945', isCorrect: false },
          { content: '2/9/1945', isCorrect: false },
        ],
      },
      {
        content: 'Công cuộc Đổi mới ở Việt Nam được khởi xướng từ Đại hội Đảng lần thứ mấy?',
        answers: [
          { content: 'Đại hội IV (1976)', isCorrect: false },
          { content: 'Đại hội V (1982)', isCorrect: false },
          { content: 'Đại hội VI (1986)', isCorrect: true },
          { content: 'Đại hội VII (1991)', isCorrect: false },
        ],
      },
      {
        content: 'Quốc hội khóa VI (1976) quyết định đổi tên nước thành gì?',
        answers: [
          { content: 'Việt Nam Dân chủ Cộng hòa', isCorrect: false },
          { content: 'Cộng hòa Xã hội Chủ nghĩa Việt Nam', isCorrect: true },
          { content: 'Cộng hòa Việt Nam', isCorrect: false },
          { content: 'Liên bang Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Tổ chức Hiệp ước Bắc Đại Tây Dương (NATO) được thành lập vào năm nào?',
        answers: [
          { content: '1947', isCorrect: false },
          { content: '1949', isCorrect: true },
          { content: '1955', isCorrect: false },
          { content: '1961', isCorrect: false },
        ],
      },
      {
        content: 'Tổ chức Hiệp ước Vác-sa-va được thành lập vào năm nào?',
        answers: [
          { content: '1949', isCorrect: false },
          { content: '1953', isCorrect: false },
          { content: '1955', isCorrect: true },
          { content: '1961', isCorrect: false },
        ],
      },
      {
        content: 'Sau Chiến tranh lạnh, xu thế chủ đạo trong quan hệ quốc tế là gì?',
        answers: [
          { content: 'Chạy đua vũ trang', isCorrect: false },
          { content: 'Hòa bình, hợp tác và phát triển', isCorrect: true },
          { content: 'Đối đầu quân sự', isCorrect: false },
          { content: 'Cô lập kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Liên minh châu Âu (EU) được thành lập theo Hiệp ước nào?',
        answers: [
          { content: 'Hiệp ước Rô-ma (1957)', isCorrect: false },
          { content: 'Hiệp ước Ma-xtrích (1992)', isCorrect: true },
          { content: 'Hiệp ước Véc-xai (1919)', isCorrect: false },
          { content: 'Hiệp ước Oa-sinh-tơn (1949)', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
