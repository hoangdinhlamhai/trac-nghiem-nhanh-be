import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Sứ mệnh lịch sử của giai cấp công nhân
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-chu-nghia-xa-hoi-khoa-hoc',
    title: 'Trắc nghiệm CNXH khoa học - Đề số 1',
    slug: 'trac-nghiem-dh-cnxhkh-de-1',
    description:
      'Trắc nghiệm Chủ nghĩa xã hội khoa học - Đề số 1. Sứ mệnh lịch sử của giai cấp công nhân: khái niệm, đặc điểm, điều kiện.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Giai cấp công nhân là gì theo quan điểm của chủ nghĩa Mác-Lênin?',
        answers: [
          { content: 'Tất cả những người lao động chân tay', isCorrect: false },
          { content: 'Giai cấp những người lao động làm thuê, không có hoặc về cơ bản không có tư liệu sản xuất, phải bán sức lao động để sống', isCorrect: true },
          { content: 'Những người làm việc trong nhà máy', isCorrect: false },
          { content: 'Những người có thu nhập thấp', isCorrect: false },
        ],
      },
      {
        content: 'Sứ mệnh lịch sử của giai cấp công nhân là gì?',
        answers: [
          { content: 'Đấu tranh đòi tăng lương', isCorrect: false },
          { content: 'Xóa bỏ chế độ TBCN, xóa bỏ chế độ người bóc lột người, xây dựng xã hội CSCN', isCorrect: true },
          { content: 'Phát triển kinh tế thị trường', isCorrect: false },
          { content: 'Bảo vệ quyền lợi của giai cấp tư sản', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nào sau đây KHÔNG phải là đặc điểm của giai cấp công nhân?',
        answers: [
          { content: 'Là sản phẩm của nền đại công nghiệp', isCorrect: false },
          { content: 'Có tính tổ chức kỷ luật cao', isCorrect: false },
          { content: 'Sở hữu nhiều tư liệu sản xuất', isCorrect: true },
          { content: 'Có tinh thần cách mạng triệt để', isCorrect: false },
        ],
      },
      {
        content: 'Tại sao giai cấp công nhân có tinh thần cách mạng triệt để nhất?',
        answers: [
          { content: 'Vì họ đông đảo nhất', isCorrect: false },
          { content: 'Vì họ không có tư liệu sản xuất, bị bóc lột nặng nề nhất, lợi ích đối lập hoàn toàn với giai cấp tư sản', isCorrect: true },
          { content: 'Vì họ có trình độ học vấn cao', isCorrect: false },
          { content: 'Vì họ sống ở thành thị', isCorrect: false },
        ],
      },
      {
        content: 'Giai cấp công nhân đại diện cho lực lượng sản xuất nào?',
        answers: [
          { content: 'Lực lượng sản xuất thủ công', isCorrect: false },
          { content: 'Lực lượng sản xuất tiên tiến, hiện đại', isCorrect: true },
          { content: 'Lực lượng sản xuất nông nghiệp', isCorrect: false },
          { content: 'Lực lượng sản xuất truyền thống', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?',
        answers: [
          { content: 'Ý chí của lãnh tụ', isCorrect: false },
          { content: 'Địa vị kinh tế - xã hội của giai cấp công nhân trong phương thức sản xuất TBCN', isCorrect: true },
          { content: 'Số lượng đông đảo', isCorrect: false },
          { content: 'Trình độ văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện chủ quan để giai cấp công nhân thực hiện sứ mệnh lịch sử là gì?',
        answers: [
          { content: 'Có số lượng đông', isCorrect: false },
          { content: 'Sự phát triển của bản thân giai cấp công nhân, đặc biệt là sự hình thành Đảng Cộng sản', isCorrect: true },
          { content: 'Có nhiều tiền', isCorrect: false },
          { content: 'Được giai cấp tư sản ủng hộ', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản có vai trò gì đối với giai cấp công nhân?',
        answers: [
          { content: 'Là tổ chức từ thiện', isCorrect: false },
          { content: 'Là đội tiên phong, lãnh đạo giai cấp công nhân thực hiện sứ mệnh lịch sử', isCorrect: true },
          { content: 'Là tổ chức kinh tế', isCorrect: false },
          { content: 'Là tổ chức quân sự', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung sứ mệnh lịch sử của giai cấp công nhân về kinh tế là gì?',
        answers: [
          { content: 'Phát triển kinh tế TBCN', isCorrect: false },
          { content: 'Xóa bỏ chế độ sở hữu tư nhân TBCN, xây dựng chế độ công hữu về tư liệu sản xuất', isCorrect: true },
          { content: 'Duy trì kinh tế tự nhiên', isCorrect: false },
          { content: 'Phát triển kinh tế cá thể', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung sứ mệnh lịch sử của giai cấp công nhân về chính trị là gì?',
        answers: [
          { content: 'Duy trì nhà nước tư sản', isCorrect: false },
          { content: 'Đập tan nhà nước tư sản, thiết lập chuyên chính vô sản', isCorrect: true },
          { content: 'Xóa bỏ mọi nhà nước', isCorrect: false },
          { content: 'Thiết lập chế độ quân chủ', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung sứ mệnh lịch sử của giai cấp công nhân về tư tưởng - văn hóa là gì?',
        answers: [
          { content: 'Duy trì hệ tư tưởng tư sản', isCorrect: false },
          { content: 'Xây dựng hệ tư tưởng khoa học của giai cấp công nhân, nền văn hóa mới XHCN', isCorrect: true },
          { content: 'Xóa bỏ mọi văn hóa', isCorrect: false },
          { content: 'Phục hồi văn hóa phong kiến', isCorrect: false },
        ],
      },
      {
        content: 'Giai cấp công nhân thực hiện sứ mệnh lịch sử thông qua con đường nào?',
        answers: [
          { content: 'Cải lương', isCorrect: false },
          { content: 'Cách mạng xã hội chủ nghĩa', isCorrect: true },
          { content: 'Đảo chính quân sự', isCorrect: false },
          { content: 'Thỏa hiệp giai cấp', isCorrect: false },
        ],
      },
      {
        content: 'Liên minh công - nông - trí thức có ý nghĩa gì?',
        answers: [
          { content: 'Không có ý nghĩa gì', isCorrect: false },
          { content: 'Tạo nên lực lượng cách mạng to lớn, là cơ sở vững chắc cho khối đại đoàn kết toàn dân', isCorrect: true },
          { content: 'Chỉ có ý nghĩa kinh tế', isCorrect: false },
          { content: 'Chỉ có ý nghĩa quân sự', isCorrect: false },
        ],
      },
      {
        content: 'Giai cấp công nhân Việt Nam ra đời trong hoàn cảnh nào?',
        answers: [
          { content: 'Trong cuộc cách mạng công nghiệp', isCorrect: false },
          { content: 'Trong quá trình khai thác thuộc địa của thực dân Pháp', isCorrect: true },
          { content: 'Trong thời kỳ phong kiến', isCorrect: false },
          { content: 'Sau năm 1975', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm riêng của giai cấp công nhân Việt Nam là gì?',
        answers: [
          { content: 'Chỉ có tinh thần yêu nước', isCorrect: false },
          { content: 'Ra đời trước giai cấp tư sản dân tộc, có truyền thống yêu nước, sớm tiếp thu chủ nghĩa Mác-Lênin', isCorrect: true },
          { content: 'Có số lượng rất đông', isCorrect: false },
          { content: 'Có trình độ kỹ thuật cao', isCorrect: false },
        ],
      },
      {
        content: 'Ai là người đã tìm ra con đường cứu nước đúng đắn cho cách mạng Việt Nam?',
        answers: [
          { content: 'Phan Bội Châu', isCorrect: false },
          { content: 'Nguyễn Ái Quốc (Hồ Chí Minh)', isCorrect: true },
          { content: 'Phan Châu Trinh', isCorrect: false },
          { content: 'Nguyễn Thái Học', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản Việt Nam được thành lập vào năm nào?',
        answers: [
          { content: '1925', isCorrect: false },
          { content: '1930', isCorrect: true },
          { content: '1935', isCorrect: false },
          { content: '1945', isCorrect: false },
        ],
      },
      {
        content: 'Tính tổ chức kỷ luật cao của giai cấp công nhân bắt nguồn từ đâu?',
        answers: [
          { content: 'Từ truyền thống gia đình', isCorrect: false },
          { content: 'Từ nền sản xuất đại công nghiệp, lao động tập trung, có tính xã hội hóa cao', isCorrect: true },
          { content: 'Từ giáo dục nhà trường', isCorrect: false },
          { content: 'Từ quân đội', isCorrect: false },
        ],
      },
      {
        content: 'Giai cấp công nhân có tính quốc tế vì lý do gì?',
        answers: [
          { content: 'Vì họ sống ở nhiều nước', isCorrect: false },
          { content: 'Vì họ có chung kẻ thù giai cấp, chung mục tiêu giải phóng, chung hệ tư tưởng', isCorrect: true },
          { content: 'Vì họ nói nhiều ngôn ngữ', isCorrect: false },
          { content: 'Vì họ thường di cư', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào công nhân trải qua mấy giai đoạn phát triển?',
        answers: [
          { content: '2 giai đoạn: tự phát và tự giác', isCorrect: true },
          { content: '3 giai đoạn', isCorrect: false },
          { content: '4 giai đoạn', isCorrect: false },
          { content: '1 giai đoạn', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào công nhân tự phát có đặc điểm gì?',
        answers: [
          { content: 'Có sự lãnh đạo của Đảng Cộng sản', isCorrect: false },
          { content: 'Đấu tranh chủ yếu vì mục tiêu kinh tế, chưa có ý thức giai cấp rõ ràng', isCorrect: true },
          { content: 'Đấu tranh vì mục tiêu chính trị', isCorrect: false },
          { content: 'Có tổ chức chặt chẽ', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào công nhân tự giác có đặc điểm gì?',
        answers: [
          { content: 'Chỉ đấu tranh kinh tế', isCorrect: false },
          { content: 'Có sự lãnh đạo của Đảng Cộng sản, đấu tranh vì mục tiêu chính trị, lật đổ CNTB', isCorrect: true },
          { content: 'Không có tổ chức', isCorrect: false },
          { content: 'Chỉ đấu tranh ở một nước', isCorrect: false },
        ],
      },
      {
        content: 'Trong thời đại ngày nay, giai cấp công nhân có những biến đổi gì?',
        answers: [
          { content: 'Không có biến đổi gì', isCorrect: false },
          { content: 'Trình độ học vấn, chuyên môn tăng, cơ cấu đa dạng hơn, nhưng bản chất giai cấp không thay đổi', isCorrect: true },
          { content: 'Mất đi tính cách mạng', isCorrect: false },
          { content: 'Trở thành giai cấp tư sản', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa giai cấp công nhân và giai cấp nông dân là gì?',
        answers: [
          { content: 'Đối kháng giai cấp', isCorrect: false },
          { content: 'Liên minh tự nhiên, giai cấp công nhân lãnh đạo, nông dân là lực lượng cách mạng to lớn', isCorrect: true },
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Nông dân lãnh đạo công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của tầng lớp trí thức trong cách mạng XHCN là gì?',
        answers: [
          { content: 'Không có vai trò', isCorrect: false },
          { content: 'Là lực lượng quan trọng trong liên minh công - nông - trí thức, đóng góp trí tuệ cho sự nghiệp cách mạng', isCorrect: true },
          { content: 'Là giai cấp lãnh đạo', isCorrect: false },
          { content: 'Là đối tượng cách mạng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Cách mạng XHCN và thời kỳ quá độ
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-chu-nghia-xa-hoi-khoa-hoc',
    title: 'Trắc nghiệm CNXH khoa học - Đề số 2',
    slug: 'trac-nghiem-dh-cnxhkh-de-2',
    description:
      'Trắc nghiệm Chủ nghĩa xã hội khoa học - Đề số 2. Cách mạng XHCN và thời kỳ quá độ: nội dung, đặc điểm, con đường.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Cách mạng xã hội chủ nghĩa là gì?',
        answers: [
          { content: 'Cuộc cách mạng thay thế chế độ phong kiến bằng chế độ TBCN', isCorrect: false },
          { content: 'Cuộc cách mạng thay thế chế độ TBCN bằng chế độ XHCN, do giai cấp công nhân lãnh đạo', isCorrect: true },
          { content: 'Cuộc cách mạng kỹ thuật', isCorrect: false },
          { content: 'Cuộc cách mạng văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân sâu xa của cách mạng XHCN là gì?',
        answers: [
          { content: 'Ý muốn chủ quan của lãnh tụ', isCorrect: false },
          { content: 'Mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa cao với quan hệ sản xuất dựa trên chế độ chiếm hữu tư nhân TBCN', isCorrect: true },
          { content: 'Chiến tranh thế giới', isCorrect: false },
          { content: 'Khủng hoảng kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Mục tiêu của cách mạng XHCN là gì?',
        answers: [
          { content: 'Giành chính quyền', isCorrect: false },
          { content: 'Giải phóng giai cấp công nhân và nhân dân lao động, xây dựng xã hội không có người bóc lột người', isCorrect: true },
          { content: 'Phát triển kinh tế', isCorrect: false },
          { content: 'Mở rộng lãnh thổ', isCorrect: false },
        ],
      },
      {
        content: 'Động lực của cách mạng XHCN là gì?',
        answers: [
          { content: 'Giai cấp tư sản', isCorrect: false },
          { content: 'Giai cấp công nhân, nông dân và tầng lớp trí thức', isCorrect: true },
          { content: 'Quân đội', isCorrect: false },
          { content: 'Tầng lớp tiểu tư sản', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung kinh tế của cách mạng XHCN là gì?',
        answers: [
          { content: 'Phát triển kinh tế TBCN', isCorrect: false },
          { content: 'Thay đổi quan hệ sản xuất cũ, xây dựng quan hệ sản xuất mới XHCN, phát triển lực lượng sản xuất', isCorrect: true },
          { content: 'Quốc hữu hóa toàn bộ', isCorrect: false },
          { content: 'Xóa bỏ mọi hình thức sở hữu', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung chính trị của cách mạng XHCN là gì?',
        answers: [
          { content: 'Duy trì nhà nước tư sản', isCorrect: false },
          { content: 'Giành chính quyền về tay giai cấp công nhân, thiết lập nhà nước chuyên chính vô sản', isCorrect: true },
          { content: 'Xóa bỏ mọi nhà nước', isCorrect: false },
          { content: 'Thiết lập chế độ đa đảng', isCorrect: false },
        ],
      },
      {
        content: 'Thời kỳ quá độ từ CNTB lên CNXH là gì?',
        answers: [
          { content: 'Giai đoạn CNTB phát triển cao', isCorrect: false },
          { content: 'Thời kỳ cải biến cách mạng từ xã hội TBCN sang xã hội XHCN, bắt đầu từ khi giai cấp công nhân giành chính quyền', isCorrect: true },
          { content: 'Giai đoạn CNXH hoàn chỉnh', isCorrect: false },
          { content: 'Giai đoạn CSCN', isCorrect: false },
        ],
      },
      {
        content: 'Theo Mác, thời kỳ quá độ có tính tất yếu vì lý do gì?',
        answers: [
          { content: 'Vì lãnh tụ muốn vậy', isCorrect: false },
          { content: 'Vì CNXH không thể ra đời ngay lập tức, cần có thời gian để cải tạo xã hội cũ, xây dựng xã hội mới', isCorrect: true },
          { content: 'Vì giai cấp tư sản đồng ý', isCorrect: false },
          { content: 'Vì kinh tế chưa phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Có mấy loại hình quá độ lên CNXH?',
        answers: [
          { content: '1 loại hình', isCorrect: false },
          { content: '2 loại hình: quá độ trực tiếp từ CNTB và quá độ gián tiếp bỏ qua chế độ TBCN', isCorrect: true },
          { content: '3 loại hình', isCorrect: false },
          { content: '4 loại hình', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam quá độ lên CNXH theo loại hình nào?',
        answers: [
          { content: 'Quá độ trực tiếp từ CNTB', isCorrect: false },
          { content: 'Quá độ gián tiếp, bỏ qua chế độ TBCN', isCorrect: true },
          { content: 'Không quá độ', isCorrect: false },
          { content: 'Quá độ từ chế độ phong kiến', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm của thời kỳ quá độ là gì?',
        answers: [
          { content: 'Xã hội thuần nhất', isCorrect: false },
          { content: 'Tồn tại đan xen giữa các yếu tố cũ và mới trên mọi lĩnh vực', isCorrect: true },
          { content: 'Xã hội XHCN hoàn chỉnh', isCorrect: false },
          { content: 'Không có mâu thuẫn', isCorrect: false },
        ],
      },
      {
        content: 'Nhiệm vụ kinh tế trong thời kỳ quá độ là gì?',
        answers: [
          { content: 'Xóa bỏ ngay mọi hình thức sở hữu tư nhân', isCorrect: false },
          { content: 'Phát triển lực lượng sản xuất, xây dựng quan hệ sản xuất mới phù hợp', isCorrect: true },
          { content: 'Duy trì kinh tế tự nhiên', isCorrect: false },
          { content: 'Chỉ phát triển công nghiệp nặng', isCorrect: false },
        ],
      },
      {
        content: 'Chuyên chính vô sản là gì?',
        answers: [
          { content: 'Chế độ độc tài', isCorrect: false },
          { content: 'Quyền lực nhà nước thuộc về giai cấp công nhân và nhân dân lao động, thực hiện dân chủ với nhân dân, chuyên chính với kẻ thù', isCorrect: true },
          { content: 'Chế độ quân chủ', isCorrect: false },
          { content: 'Chế độ đa đảng', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng XHCN khác với cách mạng tư sản ở điểm nào?',
        answers: [
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'Cách mạng XHCN do giai cấp công nhân lãnh đạo, nhằm xóa bỏ mọi chế độ bóc lột', isCorrect: true },
          { content: 'Cách mạng XHCN chỉ thay đổi chính quyền', isCorrect: false },
          { content: 'Cách mạng XHCN không cần bạo lực', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung văn hóa - tư tưởng của cách mạng XHCN là gì?',
        answers: [
          { content: 'Xóa bỏ mọi văn hóa cũ', isCorrect: false },
          { content: 'Xây dựng nền văn hóa mới, con người mới XHCN, đấu tranh chống tư tưởng lạc hậu', isCorrect: true },
          { content: 'Duy trì văn hóa phong kiến', isCorrect: false },
          { content: 'Tiếp nhận hoàn toàn văn hóa phương Tây', isCorrect: false },
        ],
      },
      {
        content: 'Lênin phát triển lý luận về cách mạng XHCN như thế nào?',
        answers: [
          { content: 'Phủ nhận hoàn toàn lý luận của Mác', isCorrect: false },
          { content: 'Chỉ ra cách mạng XHCN có thể thắng lợi ở một số nước, thậm chí một nước riêng lẻ', isCorrect: true },
          { content: 'Cho rằng cách mạng phải nổ ra đồng thời ở tất cả các nước', isCorrect: false },
          { content: 'Cho rằng cách mạng chỉ nổ ra ở nước phát triển nhất', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng Tháng Mười Nga năm 1917 có ý nghĩa gì?',
        answers: [
          { content: 'Chỉ có ý nghĩa với nước Nga', isCorrect: false },
          { content: 'Mở ra thời đại mới - thời đại quá độ từ CNTB lên CNXH trên phạm vi toàn thế giới', isCorrect: true },
          { content: 'Không có ý nghĩa lịch sử', isCorrect: false },
          { content: 'Chỉ là cuộc đảo chính', isCorrect: false },
        ],
      },
      {
        content: 'Bỏ qua chế độ TBCN ở Việt Nam có nghĩa là gì?',
        answers: [
          { content: 'Bỏ qua hoàn toàn mọi thành tựu của CNTB', isCorrect: false },
          { content: 'Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất TBCN, nhưng tiếp thu thành tựu của CNTB', isCorrect: true },
          { content: 'Không phát triển kinh tế thị trường', isCorrect: false },
          { content: 'Không hội nhập quốc tế', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức của cách mạng XHCN bao gồm những gì?',
        answers: [
          { content: 'Chỉ có bạo lực cách mạng', isCorrect: false },
          { content: 'Bạo lực cách mạng và hòa bình, tùy thuộc vào điều kiện cụ thể', isCorrect: true },
          { content: 'Chỉ có hòa bình', isCorrect: false },
          { content: 'Chỉ có đảo chính', isCorrect: false },
        ],
      },
      {
        content: 'Trong thời kỳ quá độ, các thành phần kinh tế tồn tại như thế nào?',
        answers: [
          { content: 'Chỉ có kinh tế XHCN', isCorrect: false },
          { content: 'Nhiều thành phần kinh tế cùng tồn tại, đan xen, cạnh tranh và hợp tác', isCorrect: true },
          { content: 'Chỉ có kinh tế nhà nước', isCorrect: false },
          { content: 'Chỉ có kinh tế tư nhân', isCorrect: false },
        ],
      },
      {
        content: 'Tại sao thời kỳ quá độ ở Việt Nam là lâu dài?',
        answers: [
          { content: 'Vì Việt Nam không muốn phát triển nhanh', isCorrect: false },
          { content: 'Vì xuất phát điểm thấp, bỏ qua chế độ TBCN, cần thời gian xây dựng cơ sở vật chất kỹ thuật', isCorrect: true },
          { content: 'Vì không có sự giúp đỡ quốc tế', isCorrect: false },
          { content: 'Vì dân số đông', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung xã hội của cách mạng XHCN là gì?',
        answers: [
          { content: 'Duy trì bất bình đẳng xã hội', isCorrect: false },
          { content: 'Xóa bỏ áp bức bóc lột, thực hiện công bằng xã hội, nâng cao đời sống nhân dân', isCorrect: true },
          { content: 'Chỉ phát triển kinh tế', isCorrect: false },
          { content: 'Chỉ thay đổi chính quyền', isCorrect: false },
        ],
      },
      {
        content: 'Lực lượng lãnh đạo cách mạng XHCN là ai?',
        answers: [
          { content: 'Giai cấp tư sản', isCorrect: false },
          { content: 'Giai cấp công nhân thông qua đội tiên phong là Đảng Cộng sản', isCorrect: true },
          { content: 'Giai cấp nông dân', isCorrect: false },
          { content: 'Tầng lớp trí thức', isCorrect: false },
        ],
      },
      {
        content: 'Đối tượng của cách mạng XHCN là gì?',
        answers: [
          { content: 'Giai cấp công nhân', isCorrect: false },
          { content: 'Chế độ tư bản chủ nghĩa, quan hệ sản xuất TBCN lỗi thời', isCorrect: true },
          { content: 'Giai cấp nông dân', isCorrect: false },
          { content: 'Tầng lớp trí thức', isCorrect: false },
        ],
      },
      {
        content: 'Nhiệm vụ chính trị trong thời kỳ quá độ là gì?',
        answers: [
          { content: 'Xóa bỏ mọi nhà nước', isCorrect: false },
          { content: 'Xây dựng và hoàn thiện nhà nước XHCN, mở rộng dân chủ, tăng cường pháp chế', isCorrect: true },
          { content: 'Duy trì nhà nước tư sản', isCorrect: false },
          { content: 'Thiết lập chế độ quân sự', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Dân chủ XHCN và nhà nước XHCN
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-chu-nghia-xa-hoi-khoa-hoc',
    title: 'Trắc nghiệm CNXH khoa học - Đề số 3',
    slug: 'trac-nghiem-dh-cnxhkh-de-3',
    description:
      'Trắc nghiệm Chủ nghĩa xã hội khoa học - Đề số 3. Dân chủ XHCN và nhà nước XHCN: bản chất, đặc trưng.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Dân chủ XHCN là gì?',
        answers: [
          { content: 'Dân chủ của giai cấp tư sản', isCorrect: false },
          { content: 'Nền dân chủ mà quyền lực thuộc về nhân dân lao động, do giai cấp công nhân lãnh đạo thông qua Đảng Cộng sản', isCorrect: true },
          { content: 'Dân chủ hình thức', isCorrect: false },
          { content: 'Dân chủ trực tiếp tuyệt đối', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất chính trị của dân chủ XHCN là gì?',
        answers: [
          { content: 'Đa đảng đối lập', isCorrect: false },
          { content: 'Quyền lực thuộc về nhân dân, do Đảng Cộng sản lãnh đạo, dựa trên liên minh công - nông - trí thức', isCorrect: true },
          { content: 'Quyền lực thuộc về giai cấp tư sản', isCorrect: false },
          { content: 'Không có đảng lãnh đạo', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất kinh tế của dân chủ XHCN là gì?',
        answers: [
          { content: 'Dựa trên chế độ tư hữu', isCorrect: false },
          { content: 'Dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu, thực hiện phân phối theo lao động', isCorrect: true },
          { content: 'Dựa trên kinh tế tự nhiên', isCorrect: false },
          { content: 'Dựa trên kinh tế thị trường tự do', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất tư tưởng - văn hóa - xã hội của dân chủ XHCN là gì?',
        answers: [
          { content: 'Đa nguyên tư tưởng', isCorrect: false },
          { content: 'Lấy chủ nghĩa Mác-Lênin làm nền tảng tư tưởng, kế thừa tinh hoa văn hóa nhân loại', isCorrect: true },
          { content: 'Xóa bỏ mọi tư tưởng', isCorrect: false },
          { content: 'Chỉ có một loại văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước XHCN là gì?',
        answers: [
          { content: 'Nhà nước của giai cấp tư sản', isCorrect: false },
          { content: 'Nhà nước của nhân dân, do nhân dân, vì nhân dân, do giai cấp công nhân lãnh đạo', isCorrect: true },
          { content: 'Nhà nước quân chủ', isCorrect: false },
          { content: 'Nhà nước không có giai cấp', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng cơ bản của nhà nước XHCN là gì?',
        answers: [
          { content: 'Chỉ có chức năng trấn áp', isCorrect: false },
          { content: 'Tổ chức xây dựng xã hội mới và bảo vệ thành quả cách mạng', isCorrect: true },
          { content: 'Chỉ có chức năng kinh tế', isCorrect: false },
          { content: 'Chỉ có chức năng quốc phòng', isCorrect: false },
        ],
      },
      {
        content: 'Dân chủ XHCN khác dân chủ tư sản ở điểm nào cơ bản nhất?',
        answers: [
          { content: 'Hình thức bầu cử', isCorrect: false },
          { content: 'Dân chủ XHCN là dân chủ của đa số nhân dân lao động, dân chủ tư sản thực chất là dân chủ của thiểu số giai cấp tư sản', isCorrect: true },
          { content: 'Số lượng đảng phái', isCorrect: false },
          { content: 'Cơ cấu nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc tổ chức cơ bản của nhà nước XHCN là gì?',
        answers: [
          { content: 'Tam quyền phân lập', isCorrect: false },
          { content: 'Tập trung dân chủ', isCorrect: true },
          { content: 'Phân quyền tuyệt đối', isCorrect: false },
          { content: 'Tập trung quan liêu', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước pháp quyền XHCN Việt Nam có đặc trưng gì?',
        answers: [
          { content: 'Nhà nước đứng trên pháp luật', isCorrect: false },
          { content: 'Nhà nước của nhân dân, do nhân dân, vì nhân dân, quản lý xã hội bằng pháp luật, do Đảng Cộng sản lãnh đạo', isCorrect: true },
          { content: 'Nhà nước không có pháp luật', isCorrect: false },
          { content: 'Nhà nước chỉ phục vụ giai cấp công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Hệ thống chính trị XHCN bao gồm những thành tố nào?',
        answers: [
          { content: 'Chỉ có Đảng Cộng sản', isCorrect: false },
          { content: 'Đảng Cộng sản, Nhà nước, các tổ chức chính trị - xã hội', isCorrect: true },
          { content: 'Chỉ có Nhà nước', isCorrect: false },
          { content: 'Chỉ có các tổ chức xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản có vị trí gì trong hệ thống chính trị XHCN?',
        answers: [
          { content: 'Là một bộ phận bình thường', isCorrect: false },
          { content: 'Là hạt nhân lãnh đạo hệ thống chính trị', isCorrect: true },
          { content: 'Là cơ quan hành pháp', isCorrect: false },
          { content: 'Là cơ quan lập pháp', isCorrect: false },
        ],
      },
      {
        content: 'Dân chủ trực tiếp là gì?',
        answers: [
          { content: 'Nhân dân bầu đại biểu', isCorrect: false },
          { content: 'Nhân dân trực tiếp tham gia quyết định các vấn đề quan trọng của đất nước', isCorrect: true },
          { content: 'Nhân dân ủy quyền cho đại biểu', isCorrect: false },
          { content: 'Nhân dân không tham gia chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Dân chủ đại diện là gì?',
        answers: [
          { content: 'Nhân dân trực tiếp quyết định mọi việc', isCorrect: false },
          { content: 'Nhân dân thực hiện quyền lực thông qua các đại biểu và cơ quan đại diện do mình bầu ra', isCorrect: true },
          { content: 'Nhân dân không có quyền gì', isCorrect: false },
          { content: 'Chỉ có lãnh đạo quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước XHCN sẽ tiêu vong khi nào theo quan điểm Mác-Lênin?',
        answers: [
          { content: 'Ngay sau cách mạng', isCorrect: false },
          { content: 'Khi xã hội CSCN được xây dựng hoàn chỉnh, không còn giai cấp và đấu tranh giai cấp', isCorrect: true },
          { content: 'Khi kinh tế phát triển', isCorrect: false },
          { content: 'Nhà nước không bao giờ tiêu vong', isCorrect: false },
        ],
      },
      {
        content: 'Mặt trận Tổ quốc Việt Nam có vai trò gì trong hệ thống chính trị?',
        answers: [
          { content: 'Là cơ quan quyền lực nhà nước', isCorrect: false },
          { content: 'Là tổ chức liên minh chính trị, liên hiệp tự nguyện, đại diện cho khối đại đoàn kết toàn dân', isCorrect: true },
          { content: 'Là đảng đối lập', isCorrect: false },
          { content: 'Là cơ quan hành pháp', isCorrect: false },
        ],
      },
      {
        content: 'Quyền con người trong dân chủ XHCN được đảm bảo như thế nào?',
        answers: [
          { content: 'Không được đảm bảo', isCorrect: false },
          { content: 'Được đảm bảo bằng pháp luật và các điều kiện kinh tế, chính trị, xã hội thực tế', isCorrect: true },
          { content: 'Chỉ được đảm bảo trên giấy tờ', isCorrect: false },
          { content: 'Chỉ dành cho đảng viên', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước Cộng hòa XHCN Việt Nam được tổ chức theo nguyên tắc nào?',
        answers: [
          { content: 'Tam quyền phân lập', isCorrect: false },
          { content: 'Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan', isCorrect: true },
          { content: 'Phân quyền tuyệt đối', isCorrect: false },
          { content: 'Tập trung tuyệt đối', isCorrect: false },
        ],
      },
      {
        content: 'Quốc hội Việt Nam có vị trí gì trong bộ máy nhà nước?',
        answers: [
          { content: 'Là cơ quan hành pháp', isCorrect: false },
          { content: 'Là cơ quan đại biểu cao nhất của nhân dân, cơ quan quyền lực nhà nước cao nhất', isCorrect: true },
          { content: 'Là cơ quan tư pháp', isCorrect: false },
          { content: 'Là cơ quan tham mưu', isCorrect: false },
        ],
      },
      {
        content: 'Xây dựng dân chủ XHCN ở Việt Nam hiện nay cần tập trung vào vấn đề gì?',
        answers: [
          { content: 'Chỉ cần phát triển kinh tế', isCorrect: false },
          { content: 'Hoàn thiện thể chế, mở rộng dân chủ, phát huy quyền làm chủ của nhân dân', isCorrect: true },
          { content: 'Chỉ cần xây dựng pháp luật', isCorrect: false },
          { content: 'Chỉ cần tăng cường quốc phòng', isCorrect: false },
        ],
      },
      {
        content: 'Phương châm "dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng" thể hiện điều gì?',
        answers: [
          { content: 'Dân chủ hình thức', isCorrect: false },
          { content: 'Bản chất dân chủ XHCN, quyền làm chủ thực sự của nhân dân', isCorrect: true },
          { content: 'Dân chủ tư sản', isCorrect: false },
          { content: 'Chế độ quan liêu', isCorrect: false },
        ],
      },
      {
        content: 'Các tổ chức chính trị - xã hội ở Việt Nam bao gồm những tổ chức nào?',
        answers: [
          { content: 'Chỉ có Công đoàn', isCorrect: false },
          { content: 'Công đoàn, Đoàn Thanh niên, Hội Phụ nữ, Hội Nông dân, Hội Cựu chiến binh', isCorrect: true },
          { content: 'Chỉ có Đoàn Thanh niên', isCorrect: false },
          { content: 'Chỉ có Hội Nông dân', isCorrect: false },
        ],
      },
      {
        content: 'Dân chủ cơ sở ở Việt Nam được thực hiện thông qua hình thức nào?',
        answers: [
          { content: 'Chỉ thông qua bầu cử', isCorrect: false },
          { content: 'Quy chế dân chủ ở cơ sở, nhân dân tham gia quản lý ở cấp xã, phường, cơ quan, doanh nghiệp', isCorrect: true },
          { content: 'Chỉ thông qua khiếu nại', isCorrect: false },
          { content: 'Không có dân chủ cơ sở', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước XHCN khác nhà nước tư sản ở điểm nào cơ bản nhất?',
        answers: [
          { content: 'Hình thức tổ chức', isCorrect: false },
          { content: 'Bản chất giai cấp: nhà nước XHCN phục vụ lợi ích đa số nhân dân lao động', isCorrect: true },
          { content: 'Số lượng cơ quan', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Chính phủ Việt Nam có vị trí gì trong bộ máy nhà nước?',
        answers: [
          { content: 'Là cơ quan lập pháp', isCorrect: false },
          { content: 'Là cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp', isCorrect: true },
          { content: 'Là cơ quan tư pháp', isCorrect: false },
          { content: 'Là cơ quan giám sát', isCorrect: false },
        ],
      },
      {
        content: 'Giám sát quyền lực nhà nước trong hệ thống chính trị XHCN được thực hiện như thế nào?',
        answers: [
          { content: 'Không có giám sát', isCorrect: false },
          { content: 'Thông qua Đảng, Quốc hội, Mặt trận Tổ quốc, nhân dân và các cơ quan thanh tra, kiểm tra', isCorrect: true },
          { content: 'Chỉ do tòa án giám sát', isCorrect: false },
          { content: 'Chỉ do báo chí giám sát', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Vấn đề dân tộc, tôn giáo và gia đình trong CNXH
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-chu-nghia-xa-hoi-khoa-hoc',
    title: 'Trắc nghiệm CNXH khoa học - Đề số 4',
    slug: 'trac-nghiem-dh-cnxhkh-de-4',
    description:
      'Trắc nghiệm Chủ nghĩa xã hội khoa học - Đề số 4. Vấn đề dân tộc, tôn giáo và gia đình trong CNXH.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Dân tộc theo nghĩa rộng (quốc gia - dân tộc) là gì?',
        answers: [
          { content: 'Một nhóm người có cùng ngôn ngữ', isCorrect: false },
          { content: 'Cộng đồng người ổn định trên một lãnh thổ, có chung kinh tế, ngôn ngữ, văn hóa, ý thức về sự thống nhất', isCorrect: true },
          { content: 'Một nhóm người có cùng tôn giáo', isCorrect: false },
          { content: 'Một nhóm người sống cùng khu vực', isCorrect: false },
        ],
      },
      {
        content: 'Cương lĩnh dân tộc của Lênin bao gồm mấy nội dung?',
        answers: [
          { content: '2 nội dung', isCorrect: false },
          { content: '3 nội dung: quyền tự quyết, bình đẳng, đoàn kết giai cấp công nhân các dân tộc', isCorrect: true },
          { content: '4 nội dung', isCorrect: false },
          { content: '5 nội dung', isCorrect: false },
        ],
      },
      {
        content: 'Quyền dân tộc tự quyết bao gồm những gì?',
        answers: [
          { content: 'Chỉ có quyền ly khai', isCorrect: false },
          { content: 'Quyền tự do phân lập thành quốc gia riêng và quyền tự nguyện liên hiệp với các dân tộc khác', isCorrect: true },
          { content: 'Chỉ có quyền liên hiệp', isCorrect: false },
          { content: 'Quyền xâm lược nước khác', isCorrect: false },
        ],
      },
      {
        content: 'Chính sách dân tộc của Đảng và Nhà nước Việt Nam dựa trên nguyên tắc nào?',
        answers: [
          { content: 'Đồng hóa các dân tộc', isCorrect: false },
          { content: 'Bình đẳng, đoàn kết, tương trợ giữa các dân tộc', isCorrect: true },
          { content: 'Ưu tiên dân tộc đa số', isCorrect: false },
          { content: 'Tách biệt các dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam có bao nhiêu dân tộc?',
        answers: [
          { content: '50 dân tộc', isCorrect: false },
          { content: '54 dân tộc', isCorrect: true },
          { content: '56 dân tộc', isCorrect: false },
          { content: '60 dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Tôn giáo theo quan điểm của chủ nghĩa Mác-Lênin là gì?',
        answers: [
          { content: 'Hiện tượng tự nhiên', isCorrect: false },
          { content: 'Một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan', isCorrect: true },
          { content: 'Chân lý tuyệt đối', isCorrect: false },
          { content: 'Sản phẩm của thần linh', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc nhận thức của tôn giáo là gì?',
        answers: [
          { content: 'Do thần linh tạo ra', isCorrect: false },
          { content: 'Do trình độ nhận thức của con người còn hạn chế, chưa giải thích được nhiều hiện tượng tự nhiên và xã hội', isCorrect: true },
          { content: 'Do con người thông minh', isCorrect: false },
          { content: 'Do khoa học phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc kinh tế - xã hội của tôn giáo là gì?',
        answers: [
          { content: 'Do kinh tế phát triển', isCorrect: false },
          { content: 'Do sự bất lực, bế tắc của con người trước các lực lượng tự nhiên và xã hội áp bức, bóc lột', isCorrect: true },
          { content: 'Do con người giàu có', isCorrect: false },
          { content: 'Do xã hội công bằng', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc giải quyết vấn đề tôn giáo trong CNXH là gì?',
        answers: [
          { content: 'Xóa bỏ tôn giáo bằng bạo lực', isCorrect: false },
          { content: 'Tôn trọng tự do tín ngưỡng, tôn giáo; đoàn kết lương - giáo; chống lợi dụng tôn giáo', isCorrect: true },
          { content: 'Cấm mọi hoạt động tôn giáo', isCorrect: false },
          { content: 'Bắt buộc theo một tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Tại sao tôn giáo vẫn tồn tại trong CNXH?',
        answers: [
          { content: 'Vì nhà nước khuyến khích', isCorrect: false },
          { content: 'Vì nguồn gốc nhận thức, tâm lý, xã hội của tôn giáo chưa hoàn toàn mất đi', isCorrect: true },
          { content: 'Vì tôn giáo là chân lý', isCorrect: false },
          { content: 'Vì không ai quan tâm', isCorrect: false },
        ],
      },
      {
        content: 'Gia đình trong CNXH có đặc trưng gì?',
        answers: [
          { content: 'Gia đình phong kiến', isCorrect: false },
          { content: 'Gia đình bình đẳng, tiến bộ, hạnh phúc, xây dựng trên cơ sở tình yêu tự nguyện', isCorrect: true },
          { content: 'Gia đình đa thê', isCorrect: false },
          { content: 'Gia đình không có quy tắc', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng cơ bản của gia đình bao gồm những gì?',
        answers: [
          { content: 'Chỉ có chức năng sinh sản', isCorrect: false },
          { content: 'Tái sản xuất con người, kinh tế, giáo dục, thỏa mãn nhu cầu tâm sinh lý', isCorrect: true },
          { content: 'Chỉ có chức năng kinh tế', isCorrect: false },
          { content: 'Chỉ có chức năng giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Xây dựng gia đình mới trong CNXH cần đảm bảo nguyên tắc nào?',
        answers: [
          { content: 'Hôn nhân sắp đặt', isCorrect: false },
          { content: 'Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, bình đẳng', isCorrect: true },
          { content: 'Hôn nhân vì kinh tế', isCorrect: false },
          { content: 'Hôn nhân theo giai cấp', isCorrect: false },
        ],
      },
      {
        content: 'Vấn đề giải phóng phụ nữ trong CNXH có ý nghĩa gì?',
        answers: [
          { content: 'Không quan trọng', isCorrect: false },
          { content: 'Là một nội dung quan trọng của cách mạng XHCN, thực hiện bình đẳng giới thực sự', isCorrect: true },
          { content: 'Chỉ là vấn đề hình thức', isCorrect: false },
          { content: 'Chỉ liên quan đến kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa dân tộc hẹp hòi là gì?',
        answers: [
          { content: 'Yêu nước chân chính', isCorrect: false },
          { content: 'Tư tưởng đề cao quá mức dân tộc mình, coi thường, kỳ thị các dân tộc khác', isCorrect: true },
          { content: 'Đoàn kết dân tộc', isCorrect: false },
          { content: 'Bình đẳng dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa dân tộc lớn (sô-vanh nước lớn) là gì?',
        answers: [
          { content: 'Tôn trọng các dân tộc nhỏ', isCorrect: false },
          { content: 'Tư tưởng của dân tộc lớn áp đặt, đồng hóa các dân tộc nhỏ', isCorrect: true },
          { content: 'Bình đẳng giữa các dân tộc', isCorrect: false },
          { content: 'Đoàn kết quốc tế', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa vấn đề dân tộc và vấn đề giai cấp là gì?',
        answers: [
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Gắn bó chặt chẽ, giải phóng dân tộc gắn liền với giải phóng giai cấp', isCorrect: true },
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Vấn đề dân tộc quan trọng hơn', isCorrect: false },
        ],
      },
      {
        content: 'Tự do tín ngưỡng, tôn giáo ở Việt Nam được quy định trong văn bản nào?',
        answers: [
          { content: 'Chỉ trong nghị quyết Đảng', isCorrect: false },
          { content: 'Hiến pháp và Luật Tín ngưỡng, tôn giáo', isCorrect: true },
          { content: 'Chỉ trong thông tư', isCorrect: false },
          { content: 'Không có quy định', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam có bao nhiêu tôn giáo lớn được công nhận?',
        answers: [
          { content: '5 tôn giáo', isCorrect: false },
          { content: '16 tôn giáo', isCorrect: true },
          { content: '3 tôn giáo', isCorrect: false },
          { content: '10 tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc tâm lý của tôn giáo là gì?',
        answers: [
          { content: 'Do con người vui vẻ', isCorrect: false },
          { content: 'Do sự sợ hãi, bất lực trước các lực lượng tự nhiên và xã hội, tâm lý muốn được che chở', isCorrect: true },
          { content: 'Do con người tự tin', isCorrect: false },
          { content: 'Do khoa học phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Gia đình có vai trò gì đối với xã hội?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Là tế bào của xã hội, là môi trường quan trọng hình thành và giáo dục nhân cách con người', isCorrect: true },
          { content: 'Chỉ có vai trò kinh tế', isCorrect: false },
          { content: 'Chỉ có vai trò sinh sản', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng giới trong gia đình XHCN thể hiện ở đâu?',
        answers: [
          { content: 'Chỉ ở quyền kinh tế', isCorrect: false },
          { content: 'Vợ chồng bình đẳng trong mọi quan hệ gia đình, cùng chia sẻ trách nhiệm nuôi dạy con cái', isCorrect: true },
          { content: 'Chỉ ở quyền chính trị', isCorrect: false },
          { content: 'Không có bình đẳng giới', isCorrect: false },
        ],
      },
      {
        content: 'Chống lợi dụng tôn giáo có nghĩa là gì?',
        answers: [
          { content: 'Cấm mọi hoạt động tôn giáo', isCorrect: false },
          { content: 'Chống các hành vi lợi dụng tín ngưỡng, tôn giáo để chống phá nhà nước, chia rẽ đoàn kết dân tộc', isCorrect: true },
          { content: 'Xóa bỏ tôn giáo', isCorrect: false },
          { content: 'Bắt bớ tín đồ', isCorrect: false },
        ],
      },
      {
        content: 'Phát triển vùng dân tộc thiểu số ở Việt Nam cần tập trung vào vấn đề gì?',
        answers: [
          { content: 'Chỉ cần hỗ trợ tài chính', isCorrect: false },
          { content: 'Phát triển kinh tế - xã hội, giáo dục, y tế, bảo tồn văn hóa, xóa đói giảm nghèo', isCorrect: true },
          { content: 'Chỉ cần xây dựng đường sá', isCorrect: false },
          { content: 'Chỉ cần bảo tồn văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Luật Hôn nhân và Gia đình Việt Nam quy định nguyên tắc nào?',
        answers: [
          { content: 'Hôn nhân sắp đặt', isCorrect: false },
          { content: 'Hôn nhân tự nguyện, tiến bộ, một vợ một chồng, vợ chồng bình đẳng', isCorrect: true },
          { content: 'Đa thê', isCorrect: false },
          { content: 'Hôn nhân vì kinh tế', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Tổng hợp - CNXH và con đường đi lên CNXH ở Việt Nam
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-chu-nghia-xa-hoi-khoa-hoc',
    title: 'Trắc nghiệm CNXH khoa học - Đề số 5',
    slug: 'trac-nghiem-dh-cnxhkh-de-5',
    description:
      'Trắc nghiệm Chủ nghĩa xã hội khoa học - Đề số 5. Tổng hợp: CNXH và con đường đi lên CNXH ở Việt Nam.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'CNXH khoa học ra đời vào thời gian nào?',
        answers: [
          { content: 'Thế kỷ XVII', isCorrect: false },
          { content: 'Những năm 40 của thế kỷ XIX', isCorrect: true },
          { content: 'Đầu thế kỷ XX', isCorrect: false },
          { content: 'Cuối thế kỷ XX', isCorrect: false },
        ],
      },
      {
        content: 'Ai là người sáng lập CNXH khoa học?',
        answers: [
          { content: 'Lênin và Stalin', isCorrect: false },
          { content: 'C.Mác và Ph.Ăngghen', isCorrect: true },
          { content: 'Hồ Chí Minh', isCorrect: false },
          { content: 'Saint-Simon và Fourier', isCorrect: false },
        ],
      },
      {
        content: 'CNXH khoa học khác với CNXH không tưởng ở điểm nào?',
        answers: [
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'CNXH khoa học dựa trên cơ sở khoa học, chỉ ra con đường, lực lượng và phương thức thực hiện', isCorrect: true },
          { content: 'CNXH không tưởng khoa học hơn', isCorrect: false },
          { content: 'CNXH khoa học chỉ là lý thuyết', isCorrect: false },
        ],
      },
      {
        content: 'Hai phát kiến vĩ đại của Mác làm cơ sở cho CNXH khoa học là gì?',
        answers: [
          { content: 'Thuyết tiến hóa và thuyết tương đối', isCorrect: false },
          { content: 'Chủ nghĩa duy vật lịch sử và học thuyết giá trị thặng dư', isCorrect: true },
          { content: 'Thuyết nguyên tử và thuyết tế bào', isCorrect: false },
          { content: 'Phép biện chứng và logic học', isCorrect: false },
        ],
      },
      {
        content: 'Đặc trưng cơ bản của xã hội XHCN là gì?',
        answers: [
          { content: 'Có giai cấp bóc lột', isCorrect: false },
          { content: 'Cơ sở vật chất kỹ thuật cao, chế độ công hữu, phân phối theo lao động, nhà nước của dân', isCorrect: true },
          { content: 'Kinh tế tư nhân chiếm ưu thế', isCorrect: false },
          { content: 'Không có nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Mô hình CNXH ở Liên Xô sụp đổ năm nào?',
        answers: [
          { content: '1985', isCorrect: false },
          { content: '1991', isCorrect: true },
          { content: '1995', isCorrect: false },
          { content: '2000', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân chủ yếu dẫn đến sự sụp đổ của CNXH ở Liên Xô và Đông Âu là gì?',
        answers: [
          { content: 'Do CNXH không có tính khoa học', isCorrect: false },
          { content: 'Do sai lầm trong đường lối lãnh đạo, mô hình CNXH quan liêu bao cấp, sự phá hoại của các thế lực thù địch', isCorrect: true },
          { content: 'Do kinh tế thế giới suy thoái', isCorrect: false },
          { content: 'Do nhân dân không ủng hộ CNXH', isCorrect: false },
        ],
      },
      {
        content: 'Sự sụp đổ của CNXH ở Liên Xô và Đông Âu có phải là sự sụp đổ của CNXH với tư cách là một học thuyết khoa học không?',
        answers: [
          { content: 'Có, CNXH đã thất bại hoàn toàn', isCorrect: false },
          { content: 'Không, đó chỉ là sự sụp đổ của một mô hình CNXH cụ thể, không phải bản chất CNXH', isCorrect: true },
          { content: 'Có, cần từ bỏ CNXH', isCorrect: false },
          { content: 'Không liên quan đến CNXH', isCorrect: false },
        ],
      },
      {
        content: 'Con đường đi lên CNXH ở Việt Nam được xác định tại Đại hội nào?',
        answers: [
          { content: 'Đại hội III', isCorrect: false },
          { content: 'Đại hội IV (1976)', isCorrect: true },
          { content: 'Đại hội VI', isCorrect: false },
          { content: 'Đại hội VII', isCorrect: false },
        ],
      },
      {
        content: 'Mục tiêu tổng quát khi kết thúc thời kỳ quá độ ở Việt Nam là gì?',
        answers: [
          { content: 'Trở thành nước TBCN phát triển', isCorrect: false },
          { content: 'Xây dựng xong về cơ bản nền tảng kinh tế của CNXH, hoàn thiện thể chế', isCorrect: true },
          { content: 'Trở thành siêu cường', isCorrect: false },
          { content: 'Xóa bỏ mọi hình thức sở hữu', isCorrect: false },
        ],
      },
      {
        content: 'Phương hướng cơ bản xây dựng CNXH ở Việt Nam bao gồm mấy phương hướng?',
        answers: [
          { content: '5 phương hướng', isCorrect: false },
          { content: '8 phương hướng', isCorrect: true },
          { content: '10 phương hướng', isCorrect: false },
          { content: '3 phương hướng', isCorrect: false },
        ],
      },
      {
        content: 'Đổi mới ở Việt Nam là gì?',
        answers: [
          { content: 'Thay đổi mục tiêu CNXH', isCorrect: false },
          { content: 'Quá trình đổi mới toàn diện, đồng bộ, trước hết là đổi mới tư duy, nhưng không thay đổi mục tiêu CNXH', isCorrect: true },
          { content: 'Từ bỏ CNXH', isCorrect: false },
          { content: 'Chỉ đổi mới kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa đổi mới kinh tế và đổi mới chính trị ở Việt Nam là gì?',
        answers: [
          { content: 'Chỉ đổi mới kinh tế, không đổi mới chính trị', isCorrect: false },
          { content: 'Đổi mới kinh tế là trọng tâm, đồng thời từng bước đổi mới chính trị phù hợp', isCorrect: true },
          { content: 'Đổi mới chính trị trước, kinh tế sau', isCorrect: false },
          { content: 'Đổi mới đồng thời cả hai với tốc độ như nhau', isCorrect: false },
        ],
      },
      {
        content: 'Bài học kinh nghiệm quan trọng nhất từ quá trình đổi mới ở Việt Nam là gì?',
        answers: [
          { content: 'Phát triển kinh tế bằng mọi giá', isCorrect: false },
          { content: 'Kiên định mục tiêu CNXH, vận dụng sáng tạo chủ nghĩa Mác-Lênin, tư tưởng Hồ Chí Minh', isCorrect: true },
          { content: 'Từ bỏ vai trò lãnh đạo của Đảng', isCorrect: false },
          { content: 'Chỉ học tập mô hình nước ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Xã hội CSCN (giai đoạn cao) có đặc trưng gì?',
        answers: [
          { content: 'Vẫn có giai cấp bóc lột', isCorrect: false },
          { content: 'Lực lượng sản xuất phát triển cao, không còn giai cấp, phân phối theo nhu cầu, nhà nước tiêu vong', isCorrect: true },
          { content: 'Vẫn có nhà nước', isCorrect: false },
          { content: 'Phân phối theo lao động', isCorrect: false },
        ],
      },
      {
        content: 'Tư tưởng Hồ Chí Minh về CNXH ở Việt Nam có đặc điểm gì?',
        answers: [
          { content: 'Sao chép hoàn toàn mô hình Liên Xô', isCorrect: false },
          { content: 'Vận dụng sáng tạo chủ nghĩa Mác-Lênin vào điều kiện cụ thể của Việt Nam', isCorrect: true },
          { content: 'Phủ nhận chủ nghĩa Mác-Lênin', isCorrect: false },
          { content: 'Chỉ tập trung vào cách mạng dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của khoa học - công nghệ trong xây dựng CNXH ở Việt Nam là gì?',
        answers: [
          { content: 'Không quan trọng', isCorrect: false },
          { content: 'Là động lực then chốt để phát triển lực lượng sản xuất, nâng cao năng suất lao động', isCorrect: true },
          { content: 'Chỉ phục vụ quốc phòng', isCorrect: false },
          { content: 'Chỉ phục vụ giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Xây dựng con người mới XHCN ở Việt Nam cần những phẩm chất gì?',
        answers: [
          { content: 'Chỉ cần giỏi chuyên môn', isCorrect: false },
          { content: 'Có đức, có tài, yêu nước, yêu CNXH, có ý thức cộng đồng, lối sống lành mạnh', isCorrect: true },
          { content: 'Chỉ cần có đạo đức', isCorrect: false },
          { content: 'Chỉ cần có tiền', isCorrect: false },
        ],
      },
      {
        content: 'Quốc phòng - an ninh trong xây dựng CNXH ở Việt Nam có vai trò gì?',
        answers: [
          { content: 'Không liên quan đến xây dựng CNXH', isCorrect: false },
          { content: 'Bảo vệ thành quả cách mạng, tạo môi trường hòa bình, ổn định cho phát triển', isCorrect: true },
          { content: 'Chỉ để chống ngoại xâm', isCorrect: false },
          { content: 'Chỉ để duy trì trật tự', isCorrect: false },
        ],
      },
      {
        content: 'Đối ngoại của Việt Nam trong xây dựng CNXH theo đường lối nào?',
        answers: [
          { content: 'Đóng cửa, tự cô lập', isCorrect: false },
          { content: 'Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác và phát triển, đa phương hóa, đa dạng hóa', isCorrect: true },
          { content: 'Chỉ hợp tác với các nước XHCN', isCorrect: false },
          { content: 'Phụ thuộc vào nước lớn', isCorrect: false },
        ],
      },
      {
        content: 'Thách thức lớn nhất đối với con đường đi lên CNXH ở Việt Nam hiện nay là gì?',
        answers: [
          { content: 'Thiếu tài nguyên', isCorrect: false },
          { content: 'Nguy cơ tụt hậu về kinh tế, diễn biến hòa bình, tham nhũng, suy thoái tư tưởng', isCorrect: true },
          { content: 'Dân số đông', isCorrect: false },
          { content: 'Thiếu đất đai', isCorrect: false },
        ],
      },
      {
        content: 'CNXH ở Việt Nam có mấy đặc trưng theo Cương lĩnh 2011?',
        answers: [
          { content: '5 đặc trưng', isCorrect: false },
          { content: '8 đặc trưng', isCorrect: true },
          { content: '10 đặc trưng', isCorrect: false },
          { content: '3 đặc trưng', isCorrect: false },
        ],
      },
      {
        content: 'Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011) được thông qua tại Đại hội nào?',
        answers: [
          { content: 'Đại hội X', isCorrect: false },
          { content: 'Đại hội XI', isCorrect: true },
          { content: 'Đại hội XII', isCorrect: false },
          { content: 'Đại hội XIII', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa độc lập dân tộc và CNXH ở Việt Nam là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Gắn bó chặt chẽ, độc lập dân tộc là điều kiện tiên quyết, CNXH là con đường bảo đảm vững chắc độc lập dân tộc', isCorrect: true },
          { content: 'Không liên quan', isCorrect: false },
          { content: 'Chỉ cần độc lập dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Xây dựng Đảng trong sạch, vững mạnh có ý nghĩa gì đối với con đường đi lên CNXH?',
        answers: [
          { content: 'Không quan trọng', isCorrect: false },
          { content: 'Là nhân tố quyết định thành công của sự nghiệp xây dựng CNXH ở Việt Nam', isCorrect: true },
          { content: 'Chỉ có ý nghĩa chính trị', isCorrect: false },
          { content: 'Chỉ có ý nghĩa tổ chức', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
