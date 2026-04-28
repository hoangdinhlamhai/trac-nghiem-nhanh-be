import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Nhà nước và pháp luật
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-phap-luat-dai-cuong',
    title: 'Trắc nghiệm Pháp luật đại cương - Đề số 1',
    slug: 'trac-nghiem-dh-phap-luat-dai-cuong-de-1',
    description:
      'Nhà nước và pháp luật: khái niệm, bản chất, chức năng nhà nước, hình thức nhà nước.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Nhà nước là sản phẩm của:',
        answers: [
          { content: 'Xã hội có giai cấp và đấu tranh giai cấp', isCorrect: true },
          { content: 'Ý chí của thần linh', isCorrect: false },
          { content: 'Sự thỏa thuận giữa các cá nhân trong xã hội', isCorrect: false },
          { content: 'Sự phát triển tự nhiên của gia đình', isCorrect: false },
        ],
      },
      {
        content: 'Theo quan điểm Mác-Lênin, bản chất của nhà nước là gì?',
        answers: [
          { content: 'Là tổ chức quyền lực công cộng phục vụ toàn xã hội', isCorrect: false },
          { content: 'Là bộ máy trấn áp của giai cấp này đối với giai cấp khác', isCorrect: true },
          { content: 'Là tổ chức quản lý kinh tế xã hội', isCorrect: false },
          { content: 'Là sản phẩm của khế ước xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Đặc trưng nào sau đây KHÔNG phải là đặc trưng cơ bản của nhà nước?',
        answers: [
          { content: 'Thiết lập quyền lực công cộng đặc biệt', isCorrect: false },
          { content: 'Phân chia dân cư theo lãnh thổ', isCorrect: false },
          { content: 'Có chủ quyền quốc gia', isCorrect: false },
          { content: 'Tồn tại vĩnh viễn cùng xã hội loài người', isCorrect: true },
        ],
      },
      {
        content: 'Chức năng đối nội của nhà nước bao gồm:',
        answers: [
          { content: 'Bảo vệ chế độ chính trị, kinh tế, trật tự xã hội', isCorrect: true },
          { content: 'Phòng thủ đất nước', isCorrect: false },
          { content: 'Thiết lập quan hệ ngoại giao', isCorrect: false },
          { content: 'Tham gia các tổ chức quốc tế', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức chính thể quân chủ tuyệt đối có đặc điểm gì?',
        answers: [
          { content: 'Quyền lực nhà nước tập trung toàn bộ trong tay nhà vua', isCorrect: true },
          { content: 'Nhà vua chỉ mang tính hình thức, không có thực quyền', isCorrect: false },
          { content: 'Quyền lực được chia sẻ giữa nhà vua và nghị viện', isCorrect: false },
          { content: 'Người đứng đầu nhà nước do bầu cử', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức chính thể cộng hòa tổng thống có đặc điểm nào?',
        answers: [
          { content: 'Tổng thống vừa là nguyên thủ quốc gia vừa đứng đầu chính phủ', isCorrect: true },
          { content: 'Tổng thống chỉ là nguyên thủ quốc gia, không có thực quyền', isCorrect: false },
          { content: 'Chính phủ chịu trách nhiệm trước nghị viện', isCorrect: false },
          { content: 'Nghị viện có quyền bất tín nhiệm chính phủ', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước đơn nhất có đặc điểm gì?',
        answers: [
          { content: 'Gồm nhiều bang hoặc tiểu bang hợp thành', isCorrect: false },
          { content: 'Có một hệ thống pháp luật thống nhất, một chính quyền trung ương', isCorrect: true },
          { content: 'Mỗi vùng lãnh thổ có hiến pháp riêng', isCorrect: false },
          { content: 'Các thành viên có quyền tách ra khỏi liên bang', isCorrect: false },
        ],
      },
      {
        content: 'Chế độ chính trị dân chủ có đặc trưng cơ bản nào?',
        answers: [
          { content: 'Quyền lực tập trung vào một cá nhân', isCorrect: false },
          { content: 'Nhân dân được tham gia quản lý nhà nước', isCorrect: true },
          { content: 'Không có bầu cử', isCorrect: false },
          { content: 'Pháp luật do một người ban hành', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật ra đời cùng với:',
        answers: [
          { content: 'Nhà nước', isCorrect: true },
          { content: 'Xã hội loài người', isCorrect: false },
          { content: 'Tôn giáo', isCorrect: false },
          { content: 'Đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Thuộc tính nào sau đây là thuộc tính cơ bản của pháp luật?',
        answers: [
          { content: 'Tính tự nguyện', isCorrect: false },
          { content: 'Tính quy phạm phổ biến', isCorrect: true },
          { content: 'Tính tùy nghi', isCorrect: false },
          { content: 'Tính cục bộ', isCorrect: false },
        ],
      },
      {
        content: 'Tính xác định chặt chẽ về mặt hình thức của pháp luật thể hiện ở:',
        answers: [
          { content: 'Pháp luật được thể hiện trong các văn bản quy phạm pháp luật rõ ràng', isCorrect: true },
          { content: 'Pháp luật áp dụng cho mọi người', isCorrect: false },
          { content: 'Pháp luật được nhà nước bảo đảm thực hiện', isCorrect: false },
          { content: 'Pháp luật mang tính giai cấp', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật khác với đạo đức ở điểm nào?',
        answers: [
          { content: 'Pháp luật do nhà nước ban hành và bảo đảm thực hiện bằng quyền lực nhà nước', isCorrect: true },
          { content: 'Pháp luật điều chỉnh hành vi con người', isCorrect: false },
          { content: 'Pháp luật có tính quy phạm', isCorrect: false },
          { content: 'Pháp luật tồn tại trong mọi xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Kiểu nhà nước nào là kiểu nhà nước đầu tiên trong lịch sử?',
        answers: [
          { content: 'Nhà nước phong kiến', isCorrect: false },
          { content: 'Nhà nước chủ nô', isCorrect: true },
          { content: 'Nhà nước tư sản', isCorrect: false },
          { content: 'Nhà nước xã hội chủ nghĩa', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng lập pháp thuộc về cơ quan nào trong bộ máy nhà nước?',
        answers: [
          { content: 'Cơ quan hành pháp', isCorrect: false },
          { content: 'Cơ quan tư pháp', isCorrect: false },
          { content: 'Cơ quan lập pháp (Quốc hội/Nghị viện)', isCorrect: true },
          { content: 'Cơ quan kiểm sát', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước liên bang khác nhà nước đơn nhất ở điểm nào?',
        answers: [
          { content: 'Có hai hệ thống pháp luật: liên bang và bang', isCorrect: true },
          { content: 'Chỉ có một hệ thống pháp luật duy nhất', isCorrect: false },
          { content: 'Không có chủ quyền quốc gia', isCorrect: false },
          { content: 'Không thu thuế', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc ra đời của nhà nước theo học thuyết Mác-Lênin là:',
        answers: [
          { content: 'Do thần linh tạo ra', isCorrect: false },
          { content: 'Do khế ước xã hội', isCorrect: false },
          { content: 'Do sự tan rã của chế độ cộng sản nguyên thủy và sự xuất hiện giai cấp', isCorrect: true },
          { content: 'Do bạo lực chiến tranh', isCorrect: false },
        ],
      },
      {
        content: 'Tính giai cấp của pháp luật thể hiện ở:',
        answers: [
          { content: 'Pháp luật phản ánh ý chí của giai cấp thống trị', isCorrect: true },
          { content: 'Pháp luật áp dụng cho mọi giai cấp như nhau', isCorrect: false },
          { content: 'Pháp luật không liên quan đến giai cấp', isCorrect: false },
          { content: 'Pháp luật chỉ bảo vệ giai cấp bị trị', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức nhà nước bao gồm những yếu tố nào?',
        answers: [
          { content: 'Hình thức chính thể, hình thức cấu trúc nhà nước, chế độ chính trị', isCorrect: true },
          { content: 'Lập pháp, hành pháp, tư pháp', isCorrect: false },
          { content: 'Kinh tế, chính trị, văn hóa', isCorrect: false },
          { content: 'Đối nội và đối ngoại', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng đối ngoại của nhà nước bao gồm:',
        answers: [
          { content: 'Quản lý kinh tế trong nước', isCorrect: false },
          { content: 'Giữ gìn trật tự xã hội', isCorrect: false },
          { content: 'Bảo vệ đất nước, thiết lập quan hệ ngoại giao với các nước khác', isCorrect: true },
          { content: 'Thu thuế và quản lý ngân sách', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước thu thuế nhằm mục đích gì?',
        answers: [
          { content: 'Duy trì hoạt động của bộ máy nhà nước và thực hiện các chức năng', isCorrect: true },
          { content: 'Làm giàu cho giai cấp thống trị', isCorrect: false },
          { content: 'Trừng phạt người dân', isCorrect: false },
          { content: 'Tạo sự bất bình đẳng xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức chính thể quân chủ lập hiến (hạn chế) có đặc điểm gì?',
        answers: [
          { content: 'Nhà vua có toàn quyền', isCorrect: false },
          { content: 'Quyền lực nhà vua bị hạn chế bởi hiến pháp và nghị viện', isCorrect: true },
          { content: 'Không có nghị viện', isCorrect: false },
          { content: 'Nhà vua do nhân dân bầu ra', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật có vai trò gì đối với nhà nước?',
        answers: [
          { content: 'Là phương tiện để nhà nước quản lý xã hội', isCorrect: true },
          { content: 'Là công cụ để xóa bỏ nhà nước', isCorrect: false },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Chỉ phục vụ lợi ích cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Tính cưỡng chế của pháp luật được bảo đảm bởi:',
        answers: [
          { content: 'Dư luận xã hội', isCorrect: false },
          { content: 'Lương tâm con người', isCorrect: false },
          { content: 'Quyền lực nhà nước', isCorrect: true },
          { content: 'Phong tục tập quán', isCorrect: false },
        ],
      },
      {
        content: 'Trong lịch sử, có bao nhiêu kiểu nhà nước?',
        answers: [
          { content: '2 kiểu', isCorrect: false },
          { content: '3 kiểu', isCorrect: false },
          { content: '4 kiểu', isCorrect: true },
          { content: '5 kiểu', isCorrect: false },
        ],
      },
      {
        content: 'Quyền lực công cộng đặc biệt của nhà nước khác với quyền lực xã hội ở chỗ:',
        answers: [
          { content: 'Có bộ máy cưỡng chế chuyên nghiệp (quân đội, cảnh sát, nhà tù)', isCorrect: true },
          { content: 'Do toàn dân thực hiện trực tiếp', isCorrect: false },
          { content: 'Không cần bộ máy chuyên trách', isCorrect: false },
          { content: 'Dựa trên sự tự nguyện của mọi người', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Quy phạm pháp luật và quan hệ pháp luật
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-phap-luat-dai-cuong',
    title: 'Trắc nghiệm Pháp luật đại cương - Đề số 2',
    slug: 'trac-nghiem-dh-phap-luat-dai-cuong-de-2',
    description:
      'Quy phạm pháp luật và quan hệ pháp luật: cấu trúc QPPL, năng lực pháp luật, năng lực hành vi.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quy phạm pháp luật là gì?',
        answers: [
          { content: 'Quy tắc xử sự chung do nhà nước ban hành và bảo đảm thực hiện', isCorrect: true },
          { content: 'Quy tắc đạo đức trong xã hội', isCorrect: false },
          { content: 'Phong tục tập quán của cộng đồng', isCorrect: false },
          { content: 'Quy định nội bộ của tổ chức', isCorrect: false },
        ],
      },
      {
        content: 'Cấu trúc của quy phạm pháp luật gồm mấy bộ phận?',
        answers: [
          { content: '2 bộ phận', isCorrect: false },
          { content: '3 bộ phận: giả định, quy định, chế tài', isCorrect: true },
          { content: '4 bộ phận', isCorrect: false },
          { content: '5 bộ phận', isCorrect: false },
        ],
      },
      {
        content: 'Bộ phận giả định của quy phạm pháp luật nêu lên:',
        answers: [
          { content: 'Hoàn cảnh, điều kiện mà chủ thể gặp phải trong thực tế', isCorrect: true },
          { content: 'Cách xử sự mà chủ thể phải tuân theo', isCorrect: false },
          { content: 'Hậu quả pháp lý bất lợi', isCorrect: false },
          { content: 'Quyền và nghĩa vụ của chủ thể', isCorrect: false },
        ],
      },
      {
        content: 'Bộ phận quy định của quy phạm pháp luật nêu lên:',
        answers: [
          { content: 'Điều kiện áp dụng quy phạm', isCorrect: false },
          { content: 'Cách xử sự mà nhà nước yêu cầu hoặc cho phép chủ thể thực hiện', isCorrect: true },
          { content: 'Biện pháp cưỡng chế', isCorrect: false },
          { content: 'Hoàn cảnh thực tế', isCorrect: false },
        ],
      },
      {
        content: 'Bộ phận chế tài của quy phạm pháp luật nêu lên:',
        answers: [
          { content: 'Điều kiện áp dụng quy phạm', isCorrect: false },
          { content: 'Quyền lợi của chủ thể', isCorrect: false },
          { content: 'Hậu quả pháp lý bất lợi mà chủ thể phải gánh chịu khi vi phạm', isCorrect: true },
          { content: 'Cách xử sự được phép', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ pháp luật là gì?',
        answers: [
          { content: 'Quan hệ xã hội được quy phạm pháp luật điều chỉnh', isCorrect: true },
          { content: 'Mọi quan hệ xã hội', isCorrect: false },
          { content: 'Quan hệ đạo đức', isCorrect: false },
          { content: 'Quan hệ tình cảm giữa các cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Thành phần của quan hệ pháp luật bao gồm:',
        answers: [
          { content: 'Chủ thể, khách thể, nội dung', isCorrect: true },
          { content: 'Nguyên đơn và bị đơn', isCorrect: false },
          { content: 'Giả định, quy định, chế tài', isCorrect: false },
          { content: 'Quyền và nghĩa vụ', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực pháp luật của cá nhân phát sinh từ khi nào?',
        answers: [
          { content: 'Từ khi sinh ra', isCorrect: true },
          { content: 'Từ khi đủ 18 tuổi', isCorrect: false },
          { content: 'Từ khi đủ 16 tuổi', isCorrect: false },
          { content: 'Từ khi có việc làm', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực hành vi dân sự đầy đủ của cá nhân phát sinh khi:',
        answers: [
          { content: 'Sinh ra', isCorrect: false },
          { content: 'Đủ 14 tuổi', isCorrect: false },
          { content: 'Đủ 18 tuổi và không bị mất năng lực hành vi', isCorrect: true },
          { content: 'Đủ 21 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Sự kiện pháp lý là gì?',
        answers: [
          { content: 'Sự kiện xảy ra trong thực tế làm phát sinh, thay đổi hoặc chấm dứt quan hệ pháp luật', isCorrect: true },
          { content: 'Mọi sự kiện xảy ra trong đời sống', isCorrect: false },
          { content: 'Chỉ những sự kiện do con người tạo ra', isCorrect: false },
          { content: 'Chỉ những sự kiện tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi pháp lý khác với sự biến pháp lý ở chỗ:',
        answers: [
          { content: 'Hành vi pháp lý phụ thuộc vào ý chí con người, sự biến không phụ thuộc', isCorrect: true },
          { content: 'Hành vi pháp lý không phụ thuộc ý chí con người', isCorrect: false },
          { content: 'Sự biến pháp lý do con người tạo ra', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Chủ thể của quan hệ pháp luật bao gồm:',
        answers: [
          { content: 'Chỉ cá nhân', isCorrect: false },
          { content: 'Chỉ tổ chức', isCorrect: false },
          { content: 'Cá nhân, tổ chức có năng lực chủ thể', isCorrect: true },
          { content: 'Chỉ công dân Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Khách thể của quan hệ pháp luật là:',
        answers: [
          { content: 'Lợi ích mà các chủ thể hướng tới khi tham gia quan hệ pháp luật', isCorrect: true },
          { content: 'Người bị hại trong vụ án', isCorrect: false },
          { content: 'Cơ quan nhà nước', isCorrect: false },
          { content: 'Bộ phận giả định của quy phạm', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung của quan hệ pháp luật bao gồm:',
        answers: [
          { content: 'Chủ thể và khách thể', isCorrect: false },
          { content: 'Quyền và nghĩa vụ pháp lý của các chủ thể', isCorrect: true },
          { content: 'Giả định và chế tài', isCorrect: false },
          { content: 'Năng lực pháp luật và năng lực hành vi', isCorrect: false },
        ],
      },
      {
        content: 'Người từ đủ 6 tuổi đến chưa đủ 15 tuổi có năng lực hành vi dân sự:',
        answers: [
          { content: 'Đầy đủ', isCorrect: false },
          { content: 'Một phần (chưa đầy đủ)', isCorrect: true },
          { content: 'Không có năng lực hành vi', isCorrect: false },
          { content: 'Bị hạn chế', isCorrect: false },
        ],
      },
      {
        content: 'Pháp nhân là:',
        answers: [
          { content: 'Cá nhân có đăng ký kinh doanh', isCorrect: false },
          { content: 'Tổ chức được thành lập hợp pháp, có cơ cấu tổ chức, có tài sản độc lập và tự chịu trách nhiệm', isCorrect: true },
          { content: 'Bất kỳ tổ chức nào', isCorrect: false },
          { content: 'Nhóm cá nhân hợp tác với nhau', isCorrect: false },
        ],
      },
      {
        content: 'Quy phạm pháp luật mệnh lệnh (bắt buộc) yêu cầu chủ thể:',
        answers: [
          { content: 'Phải thực hiện hành vi nhất định', isCorrect: true },
          { content: 'Được tự do lựa chọn cách xử sự', isCorrect: false },
          { content: 'Không được làm gì', isCorrect: false },
          { content: 'Được phép hoặc không thực hiện', isCorrect: false },
        ],
      },
      {
        content: 'Quy phạm pháp luật tùy nghi cho phép chủ thể:',
        answers: [
          { content: 'Phải thực hiện nghĩa vụ bắt buộc', isCorrect: false },
          { content: 'Tự lựa chọn cách xử sự trong khuôn khổ pháp luật', isCorrect: true },
          { content: 'Không phải tuân theo pháp luật', isCorrect: false },
          { content: 'Vi phạm pháp luật mà không bị xử lý', isCorrect: false },
        ],
      },
      {
        content: 'Quy phạm pháp luật cấm đoán yêu cầu chủ thể:',
        answers: [
          { content: 'Thực hiện hành vi nhất định', isCorrect: false },
          { content: 'Không được thực hiện hành vi nhất định', isCorrect: true },
          { content: 'Tự do lựa chọn', isCorrect: false },
          { content: 'Báo cáo cơ quan nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Văn bản quy phạm pháp luật có hiệu lực pháp lý cao nhất ở Việt Nam là:',
        answers: [
          { content: 'Luật', isCorrect: false },
          { content: 'Nghị định', isCorrect: false },
          { content: 'Hiến pháp', isCorrect: true },
          { content: 'Pháp lệnh', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực pháp luật của cá nhân chấm dứt khi nào?',
        answers: [
          { content: 'Khi đủ 60 tuổi', isCorrect: false },
          { content: 'Khi nghỉ hưu', isCorrect: false },
          { content: 'Khi chết', isCorrect: true },
          { content: 'Khi bị kết án', isCorrect: false },
        ],
      },
      {
        content: 'Người bị Tòa án tuyên bố mất năng lực hành vi dân sự là người:',
        answers: [
          { content: 'Dưới 18 tuổi', isCorrect: false },
          { content: 'Bị bệnh tâm thần hoặc bệnh khác không thể nhận thức, làm chủ hành vi', isCorrect: true },
          { content: 'Nghiện ma túy', isCorrect: false },
          { content: 'Phạm tội hình sự', isCorrect: false },
        ],
      },
      {
        content: 'Áp dụng pháp luật là hoạt động của:',
        answers: [
          { content: 'Mọi cá nhân trong xã hội', isCorrect: false },
          { content: 'Cơ quan nhà nước có thẩm quyền', isCorrect: true },
          { content: 'Tổ chức xã hội', isCorrect: false },
          { content: 'Doanh nghiệp tư nhân', isCorrect: false },
        ],
      },
      {
        content: 'Hệ thống pháp luật Việt Nam được cấu thành bởi:',
        answers: [
          { content: 'Quy phạm pháp luật, chế định pháp luật, ngành luật', isCorrect: true },
          { content: 'Hiến pháp, luật, nghị định', isCorrect: false },
          { content: 'Luật công và luật tư', isCorrect: false },
          { content: 'Luật nội dung và luật hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Chế định pháp luật là:',
        answers: [
          { content: 'Nhóm quy phạm pháp luật điều chỉnh một nhóm quan hệ xã hội cùng loại', isCorrect: true },
          { content: 'Toàn bộ hệ thống pháp luật', isCorrect: false },
          { content: 'Một ngành luật cụ thể', isCorrect: false },
          { content: 'Một văn bản pháp luật', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Vi phạm pháp luật và trách nhiệm pháp lý
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-phap-luat-dai-cuong',
    title: 'Trắc nghiệm Pháp luật đại cương - Đề số 3',
    slug: 'trac-nghiem-dh-phap-luat-dai-cuong-de-3',
    description:
      'Vi phạm pháp luật và trách nhiệm pháp lý: các loại vi phạm, lỗi, trách nhiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Vi phạm pháp luật là hành vi:',
        answers: [
          { content: 'Trái pháp luật, có lỗi, do chủ thể có năng lực trách nhiệm pháp lý thực hiện', isCorrect: true },
          { content: 'Bất kỳ hành vi nào gây thiệt hại', isCorrect: false },
          { content: 'Trái đạo đức xã hội', isCorrect: false },
          { content: 'Vi phạm nội quy cơ quan', isCorrect: false },
        ],
      },
      {
        content: 'Dấu hiệu nào sau đây KHÔNG phải là dấu hiệu của vi phạm pháp luật?',
        answers: [
          { content: 'Hành vi trái pháp luật', isCorrect: false },
          { content: 'Có lỗi của chủ thể', isCorrect: false },
          { content: 'Do chủ thể có năng lực trách nhiệm pháp lý thực hiện', isCorrect: false },
          { content: 'Phải gây ra thiệt hại vật chất', isCorrect: true },
        ],
      },
      {
        content: 'Cấu thành vi phạm pháp luật gồm mấy yếu tố?',
        answers: [
          { content: '2 yếu tố', isCorrect: false },
          { content: '3 yếu tố', isCorrect: false },
          { content: '4 yếu tố: mặt khách quan, mặt chủ quan, chủ thể, khách thể', isCorrect: true },
          { content: '5 yếu tố', isCorrect: false },
        ],
      },
      {
        content: 'Mặt khách quan của vi phạm pháp luật bao gồm:',
        answers: [
          { content: 'Hành vi trái pháp luật, hậu quả, mối quan hệ nhân quả, thời gian, địa điểm, công cụ, phương tiện', isCorrect: true },
          { content: 'Lỗi và động cơ', isCorrect: false },
          { content: 'Năng lực trách nhiệm pháp lý', isCorrect: false },
          { content: 'Quan hệ xã hội bị xâm hại', isCorrect: false },
        ],
      },
      {
        content: 'Mặt chủ quan của vi phạm pháp luật bao gồm:',
        answers: [
          { content: 'Hành vi và hậu quả', isCorrect: false },
          { content: 'Lỗi, động cơ, mục đích vi phạm', isCorrect: true },
          { content: 'Chủ thể vi phạm', isCorrect: false },
          { content: 'Quan hệ xã hội bị xâm hại', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi cố ý trực tiếp là:',
        answers: [
          { content: 'Chủ thể nhận thức rõ hành vi nguy hiểm, thấy trước hậu quả và mong muốn hậu quả xảy ra', isCorrect: true },
          { content: 'Chủ thể không nhận thức được hành vi nguy hiểm', isCorrect: false },
          { content: 'Chủ thể thấy trước hậu quả nhưng tin rằng có thể ngăn ngừa', isCorrect: false },
          { content: 'Chủ thể không thấy trước hậu quả dù phải thấy trước', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi cố ý gián tiếp là:',
        answers: [
          { content: 'Chủ thể nhận thức rõ hành vi nguy hiểm, thấy trước hậu quả, không mong muốn nhưng có ý thức để mặc hậu quả xảy ra', isCorrect: true },
          { content: 'Chủ thể mong muốn hậu quả xảy ra', isCorrect: false },
          { content: 'Chủ thể không nhận thức được hành vi', isCorrect: false },
          { content: 'Chủ thể tin rằng hậu quả không xảy ra', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi vô ý vì quá tự tin là:',
        answers: [
          { content: 'Chủ thể không thấy trước hậu quả', isCorrect: false },
          { content: 'Chủ thể thấy trước hậu quả nhưng tin rằng có thể ngăn ngừa được', isCorrect: true },
          { content: 'Chủ thể mong muốn hậu quả xảy ra', isCorrect: false },
          { content: 'Chủ thể để mặc hậu quả xảy ra', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi vô ý do cẩu thả là:',
        answers: [
          { content: 'Chủ thể thấy trước hậu quả nhưng để mặc', isCorrect: false },
          { content: 'Chủ thể mong muốn hậu quả', isCorrect: false },
          { content: 'Chủ thể không thấy trước hậu quả mặc dù phải thấy trước và có thể thấy trước', isCorrect: true },
          { content: 'Chủ thể tin rằng ngăn ngừa được hậu quả', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm hình sự (tội phạm) là loại vi phạm pháp luật:',
        answers: [
          { content: 'Nguy hiểm nhất cho xã hội, được quy định trong Bộ luật Hình sự', isCorrect: true },
          { content: 'Xâm phạm trật tự quản lý hành chính', isCorrect: false },
          { content: 'Vi phạm kỷ luật lao động', isCorrect: false },
          { content: 'Vi phạm hợp đồng dân sự', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm hành chính là:',
        answers: [
          { content: 'Hành vi vi phạm pháp luật xâm phạm quy tắc quản lý nhà nước mà không phải là tội phạm', isCorrect: true },
          { content: 'Tội phạm ít nghiêm trọng', isCorrect: false },
          { content: 'Vi phạm hợp đồng', isCorrect: false },
          { content: 'Vi phạm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm dân sự là:',
        answers: [
          { content: 'Vi phạm quy tắc quản lý nhà nước', isCorrect: false },
          { content: 'Hành vi xâm phạm quan hệ tài sản, quan hệ nhân thân', isCorrect: true },
          { content: 'Vi phạm kỷ luật lao động', isCorrect: false },
          { content: 'Tội phạm hình sự', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm kỷ luật là:',
        answers: [
          { content: 'Vi phạm quy định quản lý nhà nước', isCorrect: false },
          { content: 'Vi phạm nội quy, quy chế trong cơ quan, tổ chức', isCorrect: true },
          { content: 'Vi phạm hợp đồng dân sự', isCorrect: false },
          { content: 'Tội phạm hình sự', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm pháp lý là:',
        answers: [
          { content: 'Hậu quả bất lợi mà chủ thể vi phạm phải gánh chịu do nhà nước áp dụng', isCorrect: true },
          { content: 'Nghĩa vụ đạo đức', isCorrect: false },
          { content: 'Trách nhiệm xã hội', isCorrect: false },
          { content: 'Nghĩa vụ tự nguyện', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm hình sự được áp dụng đối với:',
        answers: [
          { content: 'Người vi phạm hành chính', isCorrect: false },
          { content: 'Người phạm tội được quy định trong Bộ luật Hình sự', isCorrect: true },
          { content: 'Người vi phạm hợp đồng', isCorrect: false },
          { content: 'Người vi phạm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức xử phạt vi phạm hành chính phổ biến nhất là:',
        answers: [
          { content: 'Phạt tù', isCorrect: false },
          { content: 'Phạt tiền', isCorrect: true },
          { content: 'Bồi thường thiệt hại', isCorrect: false },
          { content: 'Kỷ luật sa thải', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm dân sự chủ yếu mang tính chất:',
        answers: [
          { content: 'Trừng phạt', isCorrect: false },
          { content: 'Bồi thường, khôi phục lại tình trạng ban đầu', isCorrect: true },
          { content: 'Giáo dục', isCorrect: false },
          { content: 'Răn đe', isCorrect: false },
        ],
      },
      {
        content: 'Người chưa đủ 14 tuổi phạm tội thì:',
        answers: [
          { content: 'Phải chịu trách nhiệm hình sự về mọi tội', isCorrect: false },
          { content: 'Không phải chịu trách nhiệm hình sự', isCorrect: true },
          { content: 'Chỉ chịu trách nhiệm hình sự về tội ít nghiêm trọng', isCorrect: false },
          { content: 'Bị phạt tù nhưng giảm nhẹ', isCorrect: false },
        ],
      },
      {
        content: 'Người từ đủ 14 tuổi đến dưới 16 tuổi phải chịu trách nhiệm hình sự về:',
        answers: [
          { content: 'Mọi loại tội phạm', isCorrect: false },
          { content: 'Tội phạm rất nghiêm trọng và đặc biệt nghiêm trọng do cố ý', isCorrect: true },
          { content: 'Chỉ tội phạm ít nghiêm trọng', isCorrect: false },
          { content: 'Không phải chịu trách nhiệm hình sự', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc nào sau đây là nguyên tắc cơ bản của trách nhiệm pháp lý?',
        answers: [
          { content: 'Trách nhiệm pháp lý chỉ áp dụng khi có vi phạm pháp luật', isCorrect: true },
          { content: 'Trách nhiệm pháp lý áp dụng theo cảm tính', isCorrect: false },
          { content: 'Trách nhiệm pháp lý không cần căn cứ pháp luật', isCorrect: false },
          { content: 'Trách nhiệm pháp lý do cá nhân tự quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Phòng vệ chính đáng là:',
        answers: [
          { content: 'Vi phạm pháp luật', isCorrect: false },
          { content: 'Hành vi chống trả cần thiết để bảo vệ lợi ích hợp pháp trước sự tấn công trái pháp luật', isCorrect: true },
          { content: 'Hành vi trả thù cá nhân', isCorrect: false },
          { content: 'Hành vi tự xử lý mâu thuẫn', isCorrect: false },
        ],
      },
      {
        content: 'Tình thế cấp thiết là:',
        answers: [
          { content: 'Hành vi gây thiệt hại nhỏ hơn để ngăn ngừa thiệt hại lớn hơn đang xảy ra', isCorrect: true },
          { content: 'Hành vi phạm tội trong tình trạng say rượu', isCorrect: false },
          { content: 'Hành vi vi phạm do bị ép buộc', isCorrect: false },
          { content: 'Hành vi phạm tội do thiếu hiểu biết', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm kỷ luật do ai áp dụng?',
        answers: [
          { content: 'Tòa án', isCorrect: false },
          { content: 'Cơ quan, tổ chức nơi người vi phạm làm việc', isCorrect: true },
          { content: 'Cơ quan công an', isCorrect: false },
          { content: 'Viện kiểm sát', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức kỷ luật nặng nhất đối với cán bộ, công chức là:',
        answers: [
          { content: 'Khiển trách', isCorrect: false },
          { content: 'Cảnh cáo', isCorrect: false },
          { content: 'Hạ bậc lương', isCorrect: false },
          { content: 'Buộc thôi việc', isCorrect: true },
        ],
      },
      {
        content: 'Sự kiện pháp lý nào sau đây là sự biến pháp lý?',
        answers: [
          { content: 'Thiên tai gây thiệt hại tài sản (phát sinh quan hệ bảo hiểm)', isCorrect: true },
          { content: 'Ký kết hợp đồng mua bán', isCorrect: false },
          { content: 'Nộp đơn khởi kiện', isCorrect: false },
          { content: 'Đăng ký kết hôn', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Luật Hiến pháp và bộ máy nhà nước VN
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-phap-luat-dai-cuong',
    title: 'Trắc nghiệm Pháp luật đại cương - Đề số 4',
    slug: 'trac-nghiem-dh-phap-luat-dai-cuong-de-4',
    description:
      'Luật Hiến pháp và bộ máy nhà nước VN: Quốc hội, Chính phủ, Tòa án, Viện kiểm sát.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Hiến pháp hiện hành của Việt Nam được ban hành năm nào?',
        answers: [
          { content: '1992', isCorrect: false },
          { content: '2001', isCorrect: false },
          { content: '2013', isCorrect: true },
          { content: '2015', isCorrect: false },
        ],
      },
      {
        content: 'Quốc hội Việt Nam là:',
        answers: [
          { content: 'Cơ quan hành pháp cao nhất', isCorrect: false },
          { content: 'Cơ quan đại biểu cao nhất của nhân dân, cơ quan quyền lực nhà nước cao nhất', isCorrect: true },
          { content: 'Cơ quan tư pháp cao nhất', isCorrect: false },
          { content: 'Cơ quan kiểm sát cao nhất', isCorrect: false },
        ],
      },
      {
        content: 'Nhiệm kỳ của Quốc hội Việt Nam là bao nhiêu năm?',
        answers: [
          { content: '4 năm', isCorrect: false },
          { content: '5 năm', isCorrect: true },
          { content: '6 năm', isCorrect: false },
          { content: '7 năm', isCorrect: false },
        ],
      },
      {
        content: 'Chủ tịch nước Việt Nam do ai bầu ra?',
        answers: [
          { content: 'Nhân dân trực tiếp bầu', isCorrect: false },
          { content: 'Quốc hội bầu trong số đại biểu Quốc hội', isCorrect: true },
          { content: 'Chính phủ bầu', isCorrect: false },
          { content: 'Đảng Cộng sản chỉ định', isCorrect: false },
        ],
      },
      {
        content: 'Chính phủ Việt Nam là:',
        answers: [
          { content: 'Cơ quan lập pháp', isCorrect: false },
          { content: 'Cơ quan hành chính nhà nước cao nhất, thực hiện quyền hành pháp', isCorrect: true },
          { content: 'Cơ quan tư pháp', isCorrect: false },
          { content: 'Cơ quan kiểm sát', isCorrect: false },
        ],
      },
      {
        content: 'Thủ tướng Chính phủ do ai bầu?',
        answers: [
          { content: 'Nhân dân trực tiếp bầu', isCorrect: false },
          { content: 'Chủ tịch nước bổ nhiệm', isCorrect: false },
          { content: 'Quốc hội bầu theo đề nghị của Chủ tịch nước', isCorrect: true },
          { content: 'Chính phủ tự bầu', isCorrect: false },
        ],
      },
      {
        content: 'Tòa án nhân dân là cơ quan:',
        answers: [
          { content: 'Hành pháp', isCorrect: false },
          { content: 'Lập pháp', isCorrect: false },
          { content: 'Xét xử, thực hiện quyền tư pháp', isCorrect: true },
          { content: 'Kiểm sát', isCorrect: false },
        ],
      },
      {
        content: 'Viện kiểm sát nhân dân có chức năng gì?',
        answers: [
          { content: 'Xét xử các vụ án', isCorrect: false },
          { content: 'Thực hành quyền công tố và kiểm sát hoạt động tư pháp', isCorrect: true },
          { content: 'Ban hành pháp luật', isCorrect: false },
          { content: 'Quản lý hành chính', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc tổ chức và hoạt động cơ bản của bộ máy nhà nước Việt Nam là:',
        answers: [
          { content: 'Tam quyền phân lập', isCorrect: false },
          { content: 'Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát', isCorrect: true },
          { content: 'Tập trung quyền lực vào một cơ quan', isCorrect: false },
          { content: 'Phân quyền hoàn toàn giữa các cơ quan', isCorrect: false },
        ],
      },
      {
        content: 'Hội đồng nhân dân là:',
        answers: [
          { content: 'Cơ quan hành chính ở địa phương', isCorrect: false },
          { content: 'Cơ quan quyền lực nhà nước ở địa phương, do nhân dân địa phương bầu ra', isCorrect: true },
          { content: 'Cơ quan tư pháp ở địa phương', isCorrect: false },
          { content: 'Cơ quan của Đảng ở địa phương', isCorrect: false },
        ],
      },
      {
        content: 'Ủy ban nhân dân là:',
        answers: [
          { content: 'Cơ quan quyền lực nhà nước ở địa phương', isCorrect: false },
          { content: 'Cơ quan hành chính nhà nước ở địa phương, do HĐND bầu ra', isCorrect: true },
          { content: 'Cơ quan tư pháp ở địa phương', isCorrect: false },
          { content: 'Cơ quan lập pháp ở địa phương', isCorrect: false },
        ],
      },
      {
        content: 'Quyền con người, quyền công dân được quy định ở chương mấy của Hiến pháp 2013?',
        answers: [
          { content: 'Chương I', isCorrect: false },
          { content: 'Chương II', isCorrect: true },
          { content: 'Chương III', isCorrect: false },
          { content: 'Chương IV', isCorrect: false },
        ],
      },
      {
        content: 'Theo Hiến pháp 2013, mọi người có quyền:',
        answers: [
          { content: 'Sống, tự do, mưu cầu hạnh phúc', isCorrect: false },
          { content: 'Bất khả xâm phạm về thân thể, được pháp luật bảo hộ về tính mạng, sức khỏe', isCorrect: true },
          { content: 'Tự do tuyệt đối không bị hạn chế', isCorrect: false },
          { content: 'Không phải thực hiện nghĩa vụ nào', isCorrect: false },
        ],
      },
      {
        content: 'Quốc hội có quyền nào sau đây?',
        answers: [
          { content: 'Xét xử các vụ án hình sự', isCorrect: false },
          { content: 'Lập hiến, lập pháp, giám sát tối cao, quyết định vấn đề quan trọng của đất nước', isCorrect: true },
          { content: 'Quản lý hành chính nhà nước', isCorrect: false },
          { content: 'Thực hành quyền công tố', isCorrect: false },
        ],
      },
      {
        content: 'Ủy ban Thường vụ Quốc hội là:',
        answers: [
          { content: 'Cơ quan thường trực của Quốc hội', isCorrect: true },
          { content: 'Cơ quan hành pháp', isCorrect: false },
          { content: 'Cơ quan tư pháp', isCorrect: false },
          { content: 'Cơ quan của Chính phủ', isCorrect: false },
        ],
      },
      {
        content: 'Chủ tịch nước có quyền nào sau đây?',
        answers: [
          { content: 'Ban hành luật', isCorrect: false },
          { content: 'Công bố Hiến pháp, luật, pháp lệnh; thống lĩnh lực lượng vũ trang', isCorrect: true },
          { content: 'Xét xử các vụ án', isCorrect: false },
          { content: 'Quản lý ngân sách nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Chánh án Tòa án nhân dân tối cao do ai bầu?',
        answers: [
          { content: 'Chủ tịch nước', isCorrect: false },
          { content: 'Thủ tướng Chính phủ', isCorrect: false },
          { content: 'Quốc hội bầu', isCorrect: true },
          { content: 'Hội đồng Thẩm phán', isCorrect: false },
        ],
      },
      {
        content: 'Viện trưởng Viện kiểm sát nhân dân tối cao do ai bầu?',
        answers: [
          { content: 'Chủ tịch nước', isCorrect: false },
          { content: 'Quốc hội bầu', isCorrect: true },
          { content: 'Thủ tướng Chính phủ', isCorrect: false },
          { content: 'Chánh án TAND tối cao', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc xét xử của Tòa án nhân dân là:',
        answers: [
          { content: 'Xét xử kín', isCorrect: false },
          { content: 'Xét xử công khai, trừ trường hợp luật định', isCorrect: true },
          { content: 'Xét xử theo chỉ đạo của cơ quan hành chính', isCorrect: false },
          { content: 'Xét xử không cần hội thẩm', isCorrect: false },
        ],
      },
      {
        content: 'Theo Hiến pháp 2013, nước CHXHCN Việt Nam do ai làm chủ?',
        answers: [
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: false },
          { content: 'Nhân dân', isCorrect: true },
          { content: 'Quốc hội', isCorrect: false },
          { content: 'Chính phủ', isCorrect: false },
        ],
      },
      {
        content: 'Hiến pháp Việt Nam đầu tiên được ban hành năm nào?',
        answers: [
          { content: '1945', isCorrect: false },
          { content: '1946', isCorrect: true },
          { content: '1959', isCorrect: false },
          { content: '1980', isCorrect: false },
        ],
      },
      {
        content: 'Đại biểu Quốc hội có quyền:',
        answers: [
          { content: 'Chất vấn Chủ tịch nước, Thủ tướng, các thành viên Chính phủ', isCorrect: true },
          { content: 'Xét xử các vụ án', isCorrect: false },
          { content: 'Ban hành nghị định', isCorrect: false },
          { content: 'Bổ nhiệm thẩm phán', isCorrect: false },
        ],
      },
      {
        content: 'Chính phủ chịu trách nhiệm trước:',
        answers: [
          { content: 'Chủ tịch nước', isCorrect: false },
          { content: 'Quốc hội, Ủy ban Thường vụ Quốc hội, Chủ tịch nước', isCorrect: true },
          { content: 'Tòa án nhân dân tối cao', isCorrect: false },
          { content: 'Viện kiểm sát nhân dân tối cao', isCorrect: false },
        ],
      },
      {
        content: 'Hệ thống chính quyền địa phương ở Việt Nam gồm:',
        answers: [
          { content: 'Hội đồng nhân dân và Ủy ban nhân dân', isCorrect: true },
          { content: 'Chỉ có Ủy ban nhân dân', isCorrect: false },
          { content: 'Chỉ có Hội đồng nhân dân', isCorrect: false },
          { content: 'Tòa án và Viện kiểm sát', isCorrect: false },
        ],
      },
      {
        content: 'Theo Hiến pháp 2013, Mặt trận Tổ quốc Việt Nam có vai trò gì?',
        answers: [
          { content: 'Là cơ sở chính trị của chính quyền nhân dân, đại diện bảo vệ quyền lợi nhân dân', isCorrect: true },
          { content: 'Là cơ quan lập pháp', isCorrect: false },
          { content: 'Là cơ quan hành pháp', isCorrect: false },
          { content: 'Là cơ quan tư pháp', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Luật Dân sự và Luật Hình sự cơ bản
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-phap-luat-dai-cuong',
    title: 'Trắc nghiệm Pháp luật đại cương - Đề số 5',
    slug: 'trac-nghiem-dh-phap-luat-dai-cuong-de-5',
    description:
      'Luật Dân sự và Luật Hình sự cơ bản: quyền sở hữu, hợp đồng, tội phạm, hình phạt.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quyền sở hữu bao gồm những quyền nào?',
        answers: [
          { content: 'Quyền chiếm hữu, quyền sử dụng, quyền định đoạt', isCorrect: true },
          { content: 'Quyền mua và quyền bán', isCorrect: false },
          { content: 'Quyền thừa kế và quyền tặng cho', isCorrect: false },
          { content: 'Quyền vay và quyền cho vay', isCorrect: false },
        ],
      },
      {
        content: 'Hợp đồng dân sự là:',
        answers: [
          { content: 'Sự thỏa thuận giữa các bên về việc xác lập, thay đổi hoặc chấm dứt quyền, nghĩa vụ dân sự', isCorrect: true },
          { content: 'Văn bản do nhà nước ban hành', isCorrect: false },
          { content: 'Quyết định hành chính', isCorrect: false },
          { content: 'Bản án của tòa án', isCorrect: false },
        ],
      },
      {
        content: 'Hợp đồng dân sự vô hiệu khi:',
        answers: [
          { content: 'Vi phạm điều cấm của luật, trái đạo đức xã hội', isCorrect: true },
          { content: 'Được lập bằng văn bản', isCorrect: false },
          { content: 'Các bên tự nguyện thỏa thuận', isCorrect: false },
          { content: 'Có công chứng, chứng thực', isCorrect: false },
        ],
      },
      {
        content: 'Thời hiệu khởi kiện vụ án dân sự về hợp đồng là:',
        answers: [
          { content: '1 năm', isCorrect: false },
          { content: '2 năm', isCorrect: false },
          { content: '3 năm kể từ ngày người có quyền yêu cầu biết hoặc phải biết quyền bị xâm phạm', isCorrect: true },
          { content: '5 năm', isCorrect: false },
        ],
      },
      {
        content: 'Tội phạm theo Bộ luật Hình sự là:',
        answers: [
          { content: 'Hành vi nguy hiểm cho xã hội được quy định trong BLHS, do người có năng lực TNHS thực hiện', isCorrect: true },
          { content: 'Mọi hành vi vi phạm pháp luật', isCorrect: false },
          { content: 'Hành vi vi phạm đạo đức', isCorrect: false },
          { content: 'Hành vi vi phạm hành chính', isCorrect: false },
        ],
      },
      {
        content: 'Tội phạm được phân loại thành mấy loại theo mức độ nguy hiểm?',
        answers: [
          { content: '2 loại', isCorrect: false },
          { content: '3 loại', isCorrect: false },
          { content: '4 loại: ít nghiêm trọng, nghiêm trọng, rất nghiêm trọng, đặc biệt nghiêm trọng', isCorrect: true },
          { content: '5 loại', isCorrect: false },
        ],
      },
      {
        content: 'Hình phạt chính trong Luật Hình sự Việt Nam bao gồm:',
        answers: [
          { content: 'Cảnh cáo, phạt tiền, cải tạo không giam giữ, tù có thời hạn, tù chung thân, tử hình', isCorrect: true },
          { content: 'Chỉ có phạt tù và tử hình', isCorrect: false },
          { content: 'Chỉ có phạt tiền và phạt tù', isCorrect: false },
          { content: 'Cảnh cáo và phạt tiền', isCorrect: false },
        ],
      },
      {
        content: 'Quyền thừa kế theo pháp luật được chia thành mấy hàng?',
        answers: [
          { content: '2 hàng', isCorrect: false },
          { content: '3 hàng', isCorrect: true },
          { content: '4 hàng', isCorrect: false },
          { content: '5 hàng', isCorrect: false },
        ],
      },
      {
        content: 'Hàng thừa kế thứ nhất bao gồm:',
        answers: [
          { content: 'Vợ, chồng, cha mẹ đẻ, cha mẹ nuôi, con đẻ, con nuôi', isCorrect: true },
          { content: 'Anh chị em ruột', isCorrect: false },
          { content: 'Ông bà nội, ông bà ngoại', isCorrect: false },
          { content: 'Cô, dì, chú, bác', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực chịu trách nhiệm hình sự đầy đủ bắt đầu từ:',
        answers: [
          { content: 'Đủ 14 tuổi', isCorrect: false },
          { content: 'Đủ 16 tuổi', isCorrect: true },
          { content: 'Đủ 18 tuổi', isCorrect: false },
          { content: 'Đủ 21 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc suy đoán vô tội có nghĩa là:',
        answers: [
          { content: 'Người bị buộc tội được coi là không có tội cho đến khi được chứng minh và có bản án kết tội có hiệu lực', isCorrect: true },
          { content: 'Người bị bắt là có tội', isCorrect: false },
          { content: 'Người bị khởi tố là có tội', isCorrect: false },
          { content: 'Người bị tạm giam là có tội', isCorrect: false },
        ],
      },
      {
        content: 'Bồi thường thiệt hại ngoài hợp đồng phát sinh khi:',
        answers: [
          { content: 'Vi phạm hợp đồng', isCorrect: false },
          { content: 'Gây thiệt hại cho người khác mà không có quan hệ hợp đồng', isCorrect: true },
          { content: 'Thực hiện đúng hợp đồng', isCorrect: false },
          { content: 'Hai bên thỏa thuận', isCorrect: false },
        ],
      },
      {
        content: 'Hình phạt tù có thời hạn tối đa là bao nhiêu năm?',
        answers: [
          { content: '15 năm', isCorrect: false },
          { content: '20 năm', isCorrect: true },
          { content: '25 năm', isCorrect: false },
          { content: '30 năm', isCorrect: false },
        ],
      },
      {
        content: 'Tình tiết giảm nhẹ trách nhiệm hình sự bao gồm:',
        answers: [
          { content: 'Phạm tội có tổ chức', isCorrect: false },
          { content: 'Tự thú, thành khẩn khai báo, ăn năn hối cải', isCorrect: true },
          { content: 'Tái phạm nguy hiểm', isCorrect: false },
          { content: 'Lợi dụng chức vụ quyền hạn', isCorrect: false },
        ],
      },
      {
        content: 'Quyền nhân thân trong Luật Dân sự bao gồm:',
        answers: [
          { content: 'Quyền sở hữu tài sản', isCorrect: false },
          { content: 'Quyền đối với họ tên, hình ảnh, danh dự, nhân phẩm, uy tín', isCorrect: true },
          { content: 'Quyền thừa kế', isCorrect: false },
          { content: 'Quyền kinh doanh', isCorrect: false },
        ],
      },
      {
        content: 'Giao dịch dân sự có hiệu lực khi đáp ứng điều kiện nào?',
        answers: [
          { content: 'Chủ thể có năng lực, tự nguyện, mục đích và nội dung không vi phạm điều cấm, hình thức phù hợp', isCorrect: true },
          { content: 'Chỉ cần có chữ ký của các bên', isCorrect: false },
          { content: 'Chỉ cần được công chứng', isCorrect: false },
          { content: 'Chỉ cần có người làm chứng', isCorrect: false },
        ],
      },
      {
        content: 'Đồng phạm là:',
        answers: [
          { content: 'Một người thực hiện tội phạm', isCorrect: false },
          { content: 'Hai người trở lên cố ý cùng thực hiện một tội phạm', isCorrect: true },
          { content: 'Người vô ý gây thiệt hại', isCorrect: false },
          { content: 'Người che giấu tội phạm', isCorrect: false },
        ],
      },
      {
        content: 'Các loại đồng phạm bao gồm:',
        answers: [
          { content: 'Người thực hành, người tổ chức, người xúi giục, người giúp sức', isCorrect: true },
          { content: 'Người chủ mưu và người thực hiện', isCorrect: false },
          { content: 'Người ra lệnh và người thi hành', isCorrect: false },
          { content: 'Người cầm đầu và người tham gia', isCorrect: false },
        ],
      },
      {
        content: 'Thời hiệu truy cứu trách nhiệm hình sự đối với tội phạm đặc biệt nghiêm trọng là:',
        answers: [
          { content: '5 năm', isCorrect: false },
          { content: '10 năm', isCorrect: false },
          { content: '15 năm', isCorrect: false },
          { content: '20 năm', isCorrect: true },
        ],
      },
      {
        content: 'Hợp đồng mua bán tài sản phát sinh hiệu lực từ thời điểm:',
        answers: [
          { content: 'Giao tài sản', isCorrect: false },
          { content: 'Giao kết hợp đồng, trừ trường hợp có thỏa thuận khác hoặc luật có quy định khác', isCorrect: true },
          { content: 'Thanh toán tiền', isCorrect: false },
          { content: 'Đăng ký tại cơ quan nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Tội phạm ít nghiêm trọng có mức cao nhất của khung hình phạt là:',
        answers: [
          { content: 'Phạt tiền hoặc phạt tù đến 3 năm', isCorrect: true },
          { content: 'Phạt tù đến 7 năm', isCorrect: false },
          { content: 'Phạt tù đến 15 năm', isCorrect: false },
          { content: 'Phạt tù trên 15 năm', isCorrect: false },
        ],
      },
      {
        content: 'Quyền sử dụng tài sản là:',
        answers: [
          { content: 'Quyền khai thác công dụng, hưởng hoa lợi, lợi tức từ tài sản', isCorrect: true },
          { content: 'Quyền bán tài sản', isCorrect: false },
          { content: 'Quyền nắm giữ tài sản', isCorrect: false },
          { content: 'Quyền tặng cho tài sản', isCorrect: false },
        ],
      },
      {
        content: 'Quyền định đoạt tài sản là:',
        answers: [
          { content: 'Quyền nắm giữ tài sản', isCorrect: false },
          { content: 'Quyền khai thác công dụng tài sản', isCorrect: false },
          { content: 'Quyền chuyển giao quyền sở hữu, từ bỏ hoặc tiêu dùng, tiêu hủy tài sản', isCorrect: true },
          { content: 'Quyền bảo quản tài sản', isCorrect: false },
        ],
      },
      {
        content: 'Miễn trách nhiệm hình sự được áp dụng trong trường hợp nào?',
        answers: [
          { content: 'Khi người phạm tội tự thú trước khi bị phát giác và tội phạm ít nghiêm trọng hoặc nghiêm trọng', isCorrect: true },
          { content: 'Khi người phạm tội bỏ trốn', isCorrect: false },
          { content: 'Khi người phạm tội tái phạm', isCorrect: false },
          { content: 'Khi người phạm tội không thừa nhận hành vi', isCorrect: false },
        ],
      },
      {
        content: 'Thừa kế theo di chúc là:',
        answers: [
          { content: 'Việc chuyển dịch tài sản theo ý chí của người để lại di sản thể hiện trong di chúc', isCorrect: true },
          { content: 'Việc chia tài sản theo hàng thừa kế', isCorrect: false },
          { content: 'Việc nhà nước phân chia tài sản', isCorrect: false },
          { content: 'Việc tặng cho tài sản khi còn sống', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
