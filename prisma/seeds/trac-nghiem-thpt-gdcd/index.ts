import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // ===================== ĐỀ SỐ 1: Pháp luật và đời sống =====================
  {
    categorySlug: 'trac-nghiem-thpt-gdcd',
    title: 'Đề trắc nghiệm GDCD 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-gdcd-de-1',
    description:
      'Đề trắc nghiệm GDCD 12 chủ đề Pháp luật và đời sống: khái niệm, vai trò, đặc điểm pháp luật.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Pháp luật là hệ thống các quy tắc xử sự chung do cơ quan nào ban hành?',
        answers: [
          { content: 'Nhà nước', isCorrect: true },
          { content: 'Quốc hội', isCorrect: false },
          { content: 'Chính phủ', isCorrect: false },
          { content: 'Đảng Cộng sản Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Đặc trưng nào sau đây KHÔNG phải là đặc trưng của pháp luật?',
        answers: [
          { content: 'Tính tự giác', isCorrect: true },
          { content: 'Tính quy phạm phổ biến', isCorrect: false },
          { content: 'Tính quyền lực, bắt buộc chung', isCorrect: false },
          { content: 'Tính xác định chặt chẽ về mặt hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật mang tính quy phạm phổ biến nghĩa là:',
        answers: [
          { content: 'Áp dụng cho tất cả mọi người trong phạm vi lãnh thổ quốc gia', isCorrect: true },
          { content: 'Chỉ áp dụng cho cán bộ, công chức nhà nước', isCorrect: false },
          { content: 'Chỉ áp dụng cho công dân Việt Nam', isCorrect: false },
          { content: 'Áp dụng tùy theo từng trường hợp cụ thể', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò quan trọng nhất của pháp luật đối với xã hội là gì?',
        answers: [
          { content: 'Là phương tiện để Nhà nước quản lý xã hội', isCorrect: true },
          { content: 'Là công cụ để trừng phạt người vi phạm', isCorrect: false },
          { content: 'Là phương tiện để bảo vệ quyền lợi của Nhà nước', isCorrect: false },
          { content: 'Là công cụ để hạn chế quyền tự do của công dân', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật và đạo đức có mối quan hệ như thế nào?',
        answers: [
          { content: 'Pháp luật và đạo đức có mối quan hệ chặt chẽ, hỗ trợ lẫn nhau', isCorrect: true },
          { content: 'Pháp luật hoàn toàn thay thế đạo đức', isCorrect: false },
          { content: 'Đạo đức cao hơn pháp luật', isCorrect: false },
          { content: 'Pháp luật và đạo đức không liên quan đến nhau', isCorrect: false },
        ],
      },
      {
        content: 'Tính xác định chặt chẽ về mặt hình thức của pháp luật thể hiện ở điều gì?',
        answers: [
          { content: 'Pháp luật được thể hiện bằng văn bản có nội dung rõ ràng, cụ thể', isCorrect: true },
          { content: 'Pháp luật do Nhà nước ban hành', isCorrect: false },
          { content: 'Pháp luật áp dụng cho mọi người', isCorrect: false },
          { content: 'Pháp luật được đảm bảo bằng sức mạnh cưỡng chế', isCorrect: false },
        ],
      },
      {
        content: 'Hệ thống pháp luật Việt Nam được chia thành các bộ phận nào?',
        answers: [
          { content: 'Ngành luật, chế định luật và quy phạm pháp luật', isCorrect: true },
          { content: 'Luật và dưới luật', isCorrect: false },
          { content: 'Hiến pháp, luật và nghị định', isCorrect: false },
          { content: 'Luật hình sự, luật dân sự và luật hành chính', isCorrect: false },
        ],
      },
      {
        content: 'Văn bản nào có giá trị pháp lý cao nhất trong hệ thống pháp luật Việt Nam?',
        answers: [
          { content: 'Hiến pháp', isCorrect: true },
          { content: 'Bộ luật Hình sự', isCorrect: false },
          { content: 'Bộ luật Dân sự', isCorrect: false },
          { content: 'Luật Tổ chức Quốc hội', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật được đảm bảo thực hiện bằng:',
        answers: [
          { content: 'Sức mạnh quyền lực nhà nước', isCorrect: true },
          { content: 'Dư luận xã hội', isCorrect: false },
          { content: 'Lương tâm con người', isCorrect: false },
          { content: 'Phong tục tập quán', isCorrect: false },
        ],
      },
      {
        content: 'Quy phạm pháp luật bao gồm mấy bộ phận?',
        answers: [
          { content: '3 bộ phận: giả định, quy định, chế tài', isCorrect: true },
          { content: '2 bộ phận: giả định và quy định', isCorrect: false },
          { content: '4 bộ phận: giả định, quy định, chế tài, biện pháp', isCorrect: false },
          { content: '1 bộ phận: quy định', isCorrect: false },
        ],
      },
      {
        content: 'Thực hiện pháp luật là quá trình hoạt động có mục đích làm cho các quy định pháp luật đi vào:',
        answers: [
          { content: 'Cuộc sống, trở thành hành vi hợp pháp của các cá nhân, tổ chức', isCorrect: true },
          { content: 'Sách giáo khoa để giảng dạy', isCorrect: false },
          { content: 'Các văn bản hành chính', isCorrect: false },
          { content: 'Các nghị quyết của Đảng', isCorrect: false },
        ],
      },
      {
        content: 'Có mấy hình thức thực hiện pháp luật?',
        answers: [
          { content: '4 hình thức', isCorrect: true },
          { content: '2 hình thức', isCorrect: false },
          { content: '3 hình thức', isCorrect: false },
          { content: '5 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Sử dụng pháp luật là hình thức thực hiện pháp luật trong đó các cá nhân, tổ chức:',
        answers: [
          { content: 'Thực hiện quyền (được làm) mà pháp luật cho phép', isCorrect: true },
          { content: 'Thực hiện nghĩa vụ bắt buộc', isCorrect: false },
          { content: 'Không làm những điều pháp luật cấm', isCorrect: false },
          { content: 'Ra quyết định áp dụng pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Tuân thủ pháp luật là hình thức thực hiện pháp luật trong đó các cá nhân, tổ chức:',
        answers: [
          { content: 'Không làm những điều mà pháp luật cấm', isCorrect: true },
          { content: 'Làm những điều pháp luật cho phép', isCorrect: false },
          { content: 'Thực hiện đầy đủ nghĩa vụ', isCorrect: false },
          { content: 'Ban hành các văn bản pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Thi hành pháp luật là hình thức thực hiện pháp luật trong đó các cá nhân, tổ chức:',
        answers: [
          { content: 'Chủ động thực hiện nghĩa vụ mà pháp luật quy định phải làm', isCorrect: true },
          { content: 'Không làm những điều pháp luật cấm', isCorrect: false },
          { content: 'Thực hiện quyền mà pháp luật cho phép', isCorrect: false },
          { content: 'Ra quyết định xử phạt', isCorrect: false },
        ],
      },
      {
        content: 'Áp dụng pháp luật là hình thức thực hiện pháp luật do chủ thể nào thực hiện?',
        answers: [
          { content: 'Cơ quan, công chức nhà nước có thẩm quyền', isCorrect: true },
          { content: 'Mọi công dân', isCorrect: false },
          { content: 'Các tổ chức xã hội', isCorrect: false },
          { content: 'Các doanh nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật có nguồn gốc từ đâu?',
        answers: [
          { content: 'Từ xã hội, do các quan hệ xã hội quyết định', isCorrect: true },
          { content: 'Từ ý chí của nhà lãnh đạo', isCorrect: false },
          { content: 'Từ phong tục tập quán', isCorrect: false },
          { content: 'Từ tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất giai cấp của pháp luật thể hiện ở chỗ:',
        answers: [
          { content: 'Pháp luật phản ánh ý chí của giai cấp cầm quyền', isCorrect: true },
          { content: 'Pháp luật bảo vệ quyền lợi của mọi giai cấp', isCorrect: false },
          { content: 'Pháp luật do nhân dân xây dựng', isCorrect: false },
          { content: 'Pháp luật không mang tính giai cấp', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất xã hội của pháp luật thể hiện ở chỗ:',
        answers: [
          { content: 'Pháp luật bắt nguồn từ đời sống xã hội, phản ánh nhu cầu, lợi ích của các giai cấp và tầng lớp trong xã hội', isCorrect: true },
          { content: 'Pháp luật chỉ phục vụ giai cấp thống trị', isCorrect: false },
          { content: 'Pháp luật không liên quan đến đời sống xã hội', isCorrect: false },
          { content: 'Pháp luật chỉ áp dụng trong lĩnh vực kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Trong các hành vi sau, hành vi nào thể hiện việc tuân thủ pháp luật?',
        answers: [
          { content: 'Không sử dụng chất ma túy', isCorrect: true },
          { content: 'Đi bầu cử đại biểu Quốc hội', isCorrect: false },
          { content: 'Nộp thuế đúng hạn', isCorrect: false },
          { content: 'Cảnh sát giao thông xử phạt người vi phạm', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật nước Cộng hòa xã hội chủ nghĩa Việt Nam thể hiện ý chí của:',
        answers: [
          { content: 'Giai cấp công nhân và nhân dân lao động', isCorrect: true },
          { content: 'Giai cấp tư sản', isCorrect: false },
          { content: 'Tầng lớp trí thức', isCorrect: false },
          { content: 'Riêng giai cấp công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Điểm giống nhau giữa pháp luật và đạo đức là gì?',
        answers: [
          { content: 'Đều là phương tiện để điều chỉnh hành vi con người', isCorrect: true },
          { content: 'Đều do Nhà nước ban hành', isCorrect: false },
          { content: 'Đều mang tính bắt buộc', isCorrect: false },
          { content: 'Đều được thể hiện bằng văn bản', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây là vi phạm pháp luật?',
        answers: [
          { content: 'Vượt đèn đỏ khi tham gia giao thông', isCorrect: true },
          { content: 'Không chào hỏi người lớn tuổi', isCorrect: false },
          { content: 'Không tham gia hoạt động từ thiện', isCorrect: false },
          { content: 'Nói chuyện riêng trong lớp học', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật khác với đạo đức ở điểm nào?',
        answers: [
          { content: 'Pháp luật do Nhà nước ban hành và đảm bảo thực hiện bằng quyền lực nhà nước', isCorrect: true },
          { content: 'Pháp luật điều chỉnh hành vi con người', isCorrect: false },
          { content: 'Pháp luật hướng con người đến cái thiện', isCorrect: false },
          { content: 'Pháp luật tồn tại trong mọi xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Nhận định nào sau đây đúng về mối quan hệ giữa pháp luật và kinh tế?',
        answers: [
          { content: 'Pháp luật vừa phụ thuộc vào kinh tế, vừa tác động trở lại đối với kinh tế', isCorrect: true },
          { content: 'Pháp luật hoàn toàn độc lập với kinh tế', isCorrect: false },
          { content: 'Kinh tế phụ thuộc hoàn toàn vào pháp luật', isCorrect: false },
          { content: 'Pháp luật không ảnh hưởng đến kinh tế', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 2: Quyền và nghĩa vụ công dân =====================
  {
    categorySlug: 'trac-nghiem-thpt-gdcd',
    title: 'Đề trắc nghiệm GDCD 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-gdcd-de-2',
    description:
      'Đề trắc nghiệm GDCD 12 chủ đề Quyền và nghĩa vụ công dân: bầu cử, ứng cử, khiếu nại, tố cáo.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Công dân Việt Nam đủ bao nhiêu tuổi trở lên có quyền bầu cử?',
        answers: [
          { content: '18 tuổi', isCorrect: true },
          { content: '16 tuổi', isCorrect: false },
          { content: '20 tuổi', isCorrect: false },
          { content: '21 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Công dân Việt Nam đủ bao nhiêu tuổi trở lên có quyền ứng cử vào Quốc hội và Hội đồng nhân dân?',
        answers: [
          { content: '21 tuổi', isCorrect: true },
          { content: '18 tuổi', isCorrect: false },
          { content: '25 tuổi', isCorrect: false },
          { content: '30 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bầu cử và ứng cử là quyền thuộc nhóm quyền nào?',
        answers: [
          { content: 'Quyền tham gia quản lý nhà nước và xã hội', isCorrect: true },
          { content: 'Quyền tự do cơ bản', isCorrect: false },
          { content: 'Quyền kinh tế', isCorrect: false },
          { content: 'Quyền văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Khiếu nại là việc công dân đề nghị cơ quan có thẩm quyền xem xét lại:',
        answers: [
          { content: 'Quyết định hành chính hoặc hành vi hành chính khi có căn cứ cho rằng quyết định, hành vi đó trái pháp luật, xâm phạm quyền, lợi ích hợp pháp của mình', isCorrect: true },
          { content: 'Hành vi vi phạm pháp luật của bất kỳ ai', isCorrect: false },
          { content: 'Bản án của tòa án', isCorrect: false },
          { content: 'Nghị quyết của Quốc hội', isCorrect: false },
        ],
      },
      {
        content: 'Tố cáo là việc công dân báo cho cơ quan có thẩm quyền biết về:',
        answers: [
          { content: 'Hành vi vi phạm pháp luật của bất kỳ cơ quan, tổ chức, cá nhân nào gây thiệt hại hoặc đe dọa gây thiệt hại đến lợi ích của Nhà nước, quyền và lợi ích hợp pháp của công dân', isCorrect: true },
          { content: 'Quyết định hành chính xâm phạm quyền lợi của mình', isCorrect: false },
          { content: 'Hành vi vi phạm đạo đức', isCorrect: false },
          { content: 'Mâu thuẫn giữa các cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Điểm khác nhau cơ bản giữa khiếu nại và tố cáo là gì?',
        answers: [
          { content: 'Khiếu nại liên quan đến quyền lợi của người khiếu nại; tố cáo liên quan đến hành vi vi phạm pháp luật nói chung', isCorrect: true },
          { content: 'Khiếu nại do cơ quan nhà nước thực hiện; tố cáo do công dân thực hiện', isCorrect: false },
          { content: 'Khiếu nại bằng văn bản; tố cáo bằng miệng', isCorrect: false },
          { content: 'Không có sự khác nhau', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc bầu cử ở Việt Nam là:',
        answers: [
          { content: 'Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín', isCorrect: true },
          { content: 'Phổ thông, tự do, trực tiếp', isCorrect: false },
          { content: 'Bình đẳng, gián tiếp, bỏ phiếu kín', isCorrect: false },
          { content: 'Phổ thông, bình đẳng, gián tiếp', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tham gia quản lý nhà nước và xã hội bao gồm những nội dung nào?',
        answers: [
          { content: 'Tham gia xây dựng bộ máy nhà nước, thảo luận và kiến nghị các vấn đề của đất nước, địa phương', isCorrect: true },
          { content: 'Chỉ có quyền bầu cử và ứng cử', isCorrect: false },
          { content: 'Chỉ có quyền khiếu nại và tố cáo', isCorrect: false },
          { content: 'Chỉ có quyền giám sát hoạt động của cơ quan nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Người nào sau đây KHÔNG có quyền bầu cử?',
        answers: [
          { content: 'Người đang bị tước quyền bầu cử theo bản án của tòa án', isCorrect: true },
          { content: 'Người khuyết tật', isCorrect: false },
          { content: 'Người nghỉ hưu', isCorrect: false },
          { content: 'Người đang đi công tác nước ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Quyền khiếu nại, tố cáo của công dân được quy định trong văn bản pháp luật nào?',
        answers: [
          { content: 'Hiến pháp và Luật Khiếu nại, Luật Tố cáo', isCorrect: true },
          { content: 'Chỉ trong Bộ luật Hình sự', isCorrect: false },
          { content: 'Chỉ trong Bộ luật Dân sự', isCorrect: false },
          { content: 'Chỉ trong Luật Hành chính', isCorrect: false },
        ],
      },
      {
        content: 'Anh A bị cơ quan thuế ra quyết định truy thu thuế sai. Anh A nên thực hiện quyền gì?',
        answers: [
          { content: 'Quyền khiếu nại', isCorrect: true },
          { content: 'Quyền tố cáo', isCorrect: false },
          { content: 'Quyền biểu tình', isCorrect: false },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
        ],
      },
      {
        content: 'Chị B phát hiện ông C (cán bộ xã) nhận hối lộ. Chị B nên thực hiện quyền gì?',
        answers: [
          { content: 'Quyền tố cáo', isCorrect: true },
          { content: 'Quyền khiếu nại', isCorrect: false },
          { content: 'Quyền bầu cử', isCorrect: false },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ cơ bản của công dân Việt Nam bao gồm:',
        answers: [
          { content: 'Bảo vệ Tổ quốc, tuân theo Hiến pháp và pháp luật, đóng thuế, bảo vệ môi trường', isCorrect: true },
          { content: 'Chỉ có nghĩa vụ đóng thuế', isCorrect: false },
          { content: 'Chỉ có nghĩa vụ bảo vệ Tổ quốc', isCorrect: false },
          { content: 'Chỉ có nghĩa vụ tuân theo pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bầu cử của công dân thể hiện quyền nào?',
        answers: [
          { content: 'Quyền dân chủ trực tiếp', isCorrect: true },
          { content: 'Quyền tự do cá nhân', isCorrect: false },
          { content: 'Quyền kinh tế', isCorrect: false },
          { content: 'Quyền văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Cơ quan nào có thẩm quyền giải quyết khiếu nại lần đầu?',
        answers: [
          { content: 'Người đã ra quyết định hành chính hoặc cơ quan có người có hành vi hành chính bị khiếu nại', isCorrect: true },
          { content: 'Tòa án nhân dân', isCorrect: false },
          { content: 'Viện kiểm sát nhân dân', isCorrect: false },
          { content: 'Quốc hội', isCorrect: false },
        ],
      },
      {
        content: 'Thời hiệu khiếu nại lần đầu là bao lâu kể từ ngày nhận được quyết định hành chính?',
        answers: [
          { content: '90 ngày', isCorrect: true },
          { content: '30 ngày', isCorrect: false },
          { content: '60 ngày', isCorrect: false },
          { content: '180 ngày', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi trả thù người tố cáo bị xử lý như thế nào?',
        answers: [
          { content: 'Bị xử lý theo quy định của pháp luật, có thể bị truy cứu trách nhiệm hình sự', isCorrect: true },
          { content: 'Chỉ bị phê bình', isCorrect: false },
          { content: 'Không bị xử lý', isCorrect: false },
          { content: 'Chỉ bị cảnh cáo', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bình đẳng trong bầu cử có nghĩa là:',
        answers: [
          { content: 'Mỗi cử tri có một phiếu bầu và giá trị mỗi phiếu bầu là ngang nhau', isCorrect: true },
          { content: 'Mọi người đều phải đi bầu cử', isCorrect: false },
          { content: 'Ai cũng có thể ứng cử', isCorrect: false },
          { content: 'Kết quả bầu cử phải bằng nhau', isCorrect: false },
        ],
      },
      {
        content: 'Công dân có quyền tham gia góp ý kiến vào dự thảo luật là thể hiện quyền gì?',
        answers: [
          { content: 'Quyền tham gia quản lý nhà nước và xã hội', isCorrect: true },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền khiếu nại', isCorrect: false },
          { content: 'Quyền tố cáo', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ bảo vệ Tổ quốc là nghĩa vụ của:',
        answers: [
          { content: 'Mọi công dân Việt Nam', isCorrect: true },
          { content: 'Chỉ quân nhân', isCorrect: false },
          { content: 'Chỉ nam giới', isCorrect: false },
          { content: 'Chỉ người trong độ tuổi nghĩa vụ quân sự', isCorrect: false },
        ],
      },
      {
        content: 'Quyền và nghĩa vụ của công dân có mối quan hệ như thế nào?',
        answers: [
          { content: 'Không tách rời nhau, công dân được hưởng quyền đồng thời phải thực hiện nghĩa vụ', isCorrect: true },
          { content: 'Hoàn toàn độc lập với nhau', isCorrect: false },
          { content: 'Quyền quan trọng hơn nghĩa vụ', isCorrect: false },
          { content: 'Nghĩa vụ quan trọng hơn quyền', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức dân chủ gián tiếp là gì?',
        answers: [
          { content: 'Nhân dân thực hiện quyền lực thông qua các đại biểu do mình bầu ra', isCorrect: true },
          { content: 'Nhân dân trực tiếp quyết định mọi vấn đề', isCorrect: false },
          { content: 'Nhà nước quyết định thay nhân dân', isCorrect: false },
          { content: 'Đảng quyết định thay nhân dân', isCorrect: false },
        ],
      },
      {
        content: 'Trường hợp nào sau đây thể hiện quyền tham gia quản lý nhà nước ở phạm vi cơ sở?',
        answers: [
          { content: 'Nhân dân bàn và quyết định trực tiếp việc đóng góp xây dựng đường giao thông nông thôn', isCorrect: true },
          { content: 'Bầu cử đại biểu Quốc hội', isCorrect: false },
          { content: 'Góp ý dự thảo Hiến pháp', isCorrect: false },
          { content: 'Ứng cử vào Hội đồng nhân dân tỉnh', isCorrect: false },
        ],
      },
      {
        content: 'Người tố cáo được pháp luật bảo vệ như thế nào?',
        answers: [
          { content: 'Được bảo vệ tính mạng, sức khỏe, tài sản, danh dự, nhân phẩm và các quyền lợi hợp pháp khác', isCorrect: true },
          { content: 'Không được bảo vệ', isCorrect: false },
          { content: 'Chỉ được bảo vệ tài sản', isCorrect: false },
          { content: 'Chỉ được bảo vệ khi tố cáo đúng', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bầu cử trực tiếp có nghĩa là:',
        answers: [
          { content: 'Cử tri trực tiếp bỏ phiếu bầu người mình tín nhiệm, không qua người đại diện', isCorrect: true },
          { content: 'Cử tri bầu qua đại diện', isCorrect: false },
          { content: 'Cử tri bầu qua mạng internet', isCorrect: false },
          { content: 'Cử tri nhờ người khác bỏ phiếu', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 3: Quyền tự do cơ bản =====================
  {
    categorySlug: 'trac-nghiem-thpt-gdcd',
    title: 'Đề trắc nghiệm GDCD 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-gdcd-de-3',
    description:
      'Đề trắc nghiệm GDCD 12 chủ đề Quyền tự do cơ bản: tự do ngôn luận, tín ngưỡng, bất khả xâm phạm thân thể.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quyền bất khả xâm phạm về thân thể của công dân có nghĩa là:',
        answers: [
          { content: 'Không ai bị bắt nếu không có quyết định của Tòa án, phê chuẩn của Viện kiểm sát, trừ trường hợp phạm tội quả tang', isCorrect: true },
          { content: 'Không ai được đánh người khác', isCorrect: false },
          { content: 'Mọi người đều được tự do đi lại', isCorrect: false },
          { content: 'Không ai bị giam giữ', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được pháp luật bảo hộ về tính mạng, sức khỏe, danh dự và nhân phẩm có nghĩa là:',
        answers: [
          { content: 'Mọi hành vi xâm phạm tính mạng, sức khỏe, danh dự, nhân phẩm của người khác đều bị xử lý theo pháp luật', isCorrect: true },
          { content: 'Nhà nước cung cấp bảo vệ cho mọi công dân', isCorrect: false },
          { content: 'Công dân được mua bảo hiểm nhân thọ', isCorrect: false },
          { content: 'Công dân không bao giờ bị thương', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bất khả xâm phạm về chỗ ở của công dân có nghĩa là:',
        answers: [
          { content: 'Không ai được tự ý vào chỗ ở của người khác nếu không được người đó đồng ý, trừ trường hợp pháp luật cho phép', isCorrect: true },
          { content: 'Mọi người đều có nhà ở', isCorrect: false },
          { content: 'Nhà nước cấp nhà cho mọi công dân', isCorrect: false },
          { content: 'Không ai được phá nhà của người khác', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được đảm bảo an toàn và bí mật thư tín, điện thoại, điện tín có nghĩa là:',
        answers: [
          { content: 'Không ai được tự ý bóc mở, kiểm soát, thu giữ thư tín, điện thoại, điện tín của người khác trái pháp luật', isCorrect: true },
          { content: 'Mọi người đều được sử dụng điện thoại miễn phí', isCorrect: false },
          { content: 'Nhà nước cung cấp dịch vụ bưu chính miễn phí', isCorrect: false },
          { content: 'Thư tín không bao giờ bị thất lạc', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do ngôn luận của công dân có nghĩa là:',
        answers: [
          { content: 'Công dân có quyền tự do phát biểu ý kiến, bày tỏ quan điểm của mình về các vấn đề chính trị, kinh tế, xã hội theo quy định pháp luật', isCorrect: true },
          { content: 'Công dân muốn nói gì cũng được', isCorrect: false },
          { content: 'Công dân được tự do xúc phạm người khác', isCorrect: false },
          { content: 'Công dân được tự do tuyên truyền chống Nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do tín ngưỡng, tôn giáo có nghĩa là:',
        answers: [
          { content: 'Công dân có quyền theo hoặc không theo một tín ngưỡng, tôn giáo nào; không ai được ép buộc hoặc cản trở', isCorrect: true },
          { content: 'Mọi người bắt buộc phải theo một tôn giáo', isCorrect: false },
          { content: 'Chỉ được theo tôn giáo do Nhà nước quy định', isCorrect: false },
          { content: 'Không ai được theo tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Trường hợp nào sau đây vi phạm quyền bất khả xâm phạm về thân thể?',
        answers: [
          { content: 'Công an xã tự ý bắt giữ người mà không có lệnh bắt', isCorrect: true },
          { content: 'Cảnh sát bắt người đang phạm tội quả tang', isCorrect: false },
          { content: 'Tòa án ra lệnh bắt tạm giam bị can', isCorrect: false },
          { content: 'Viện kiểm sát phê chuẩn lệnh bắt khẩn cấp', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây vi phạm quyền bất khả xâm phạm về chỗ ở?',
        answers: [
          { content: 'Tự ý vào nhà người khác lục soát khi không có lệnh', isCorrect: true },
          { content: 'Cảnh sát khám nhà theo lệnh của cơ quan có thẩm quyền', isCorrect: false },
          { content: 'Chủ nhà mời khách vào nhà', isCorrect: false },
          { content: 'Nhân viên bưu điện giao thư tại nhà', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do ngôn luận được thực hiện thông qua hình thức nào?',
        answers: [
          { content: 'Tất cả các hình thức: trực tiếp phát biểu, viết bài đăng báo, góp ý kiến với đại biểu Quốc hội', isCorrect: true },
          { content: 'Chỉ thông qua báo chí', isCorrect: false },
          { content: 'Chỉ thông qua phát biểu trực tiếp', isCorrect: false },
          { content: 'Chỉ thông qua mạng xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn của quyền tự do ngôn luận là gì?',
        answers: [
          { content: 'Không được lợi dụng quyền tự do ngôn luận để xâm phạm lợi ích quốc gia, quyền và lợi ích hợp pháp của tổ chức, cá nhân', isCorrect: true },
          { content: 'Không có giới hạn', isCorrect: false },
          { content: 'Chỉ được nói những điều tốt đẹp', isCorrect: false },
          { content: 'Phải được sự đồng ý của chính quyền trước khi phát biểu', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây vi phạm quyền được đảm bảo an toàn và bí mật thư tín?',
        answers: [
          { content: 'Tự ý đọc tin nhắn điện thoại của người khác', isCorrect: true },
          { content: 'Gửi thư cho bạn bè', isCorrect: false },
          { content: 'Nhận thư từ bưu điện', isCorrect: false },
          { content: 'Gọi điện thoại cho người thân', isCorrect: false },
        ],
      },
      {
        content: 'Trong trường hợp nào cơ quan nhà nước được khám xét chỗ ở của công dân?',
        answers: [
          { content: 'Khi có căn cứ cho rằng chỗ ở có chứa công cụ, phương tiện phạm tội và phải có lệnh của cơ quan có thẩm quyền', isCorrect: true },
          { content: 'Bất cứ khi nào cơ quan nhà nước muốn', isCorrect: false },
          { content: 'Khi hàng xóm tố cáo', isCorrect: false },
          { content: 'Khi có nghi ngờ', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do tín ngưỡng, tôn giáo KHÔNG bao gồm:',
        answers: [
          { content: 'Lợi dụng tín ngưỡng, tôn giáo để hoạt động mê tín dị đoan, vi phạm pháp luật', isCorrect: true },
          { content: 'Quyền theo một tôn giáo', isCorrect: false },
          { content: 'Quyền không theo tôn giáo nào', isCorrect: false },
          { content: 'Quyền thay đổi tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Anh D đăng bài trên mạng xã hội vu khống, bôi nhọ danh dự của chị E. Anh D vi phạm quyền gì của chị E?',
        answers: [
          { content: 'Quyền được pháp luật bảo hộ về danh dự và nhân phẩm', isCorrect: true },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền bất khả xâm phạm về thân thể', isCorrect: false },
          { content: 'Quyền bất khả xâm phạm về chỗ ở', isCorrect: false },
        ],
      },
      {
        content: 'Trường hợp bắt người khẩn cấp được áp dụng khi nào?',
        answers: [
          { content: 'Khi có căn cứ cho rằng người đó đang chuẩn bị thực hiện tội phạm rất nghiêm trọng hoặc đặc biệt nghiêm trọng', isCorrect: true },
          { content: 'Khi muốn hỏi cung', isCorrect: false },
          { content: 'Khi nghi ngờ ai đó', isCorrect: false },
          { content: 'Bất cứ khi nào công an muốn', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được pháp luật bảo hộ về tính mạng, sức khỏe được quy định trong:',
        answers: [
          { content: 'Hiến pháp và Bộ luật Hình sự', isCorrect: true },
          { content: 'Chỉ trong Bộ luật Dân sự', isCorrect: false },
          { content: 'Chỉ trong Luật Hành chính', isCorrect: false },
          { content: 'Chỉ trong nội quy trường học', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây thể hiện việc thực hiện đúng quyền tự do ngôn luận?',
        answers: [
          { content: 'Công dân góp ý kiến vào dự thảo luật trên cổng thông tin điện tử của Quốc hội', isCorrect: true },
          { content: 'Tung tin đồn thất thiệt trên mạng xã hội', isCorrect: false },
          { content: 'Xúc phạm danh dự người khác trên diễn đàn', isCorrect: false },
          { content: 'Kích động bạo lực qua mạng', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bất khả xâm phạm về thân thể thuộc nhóm quyền nào?',
        answers: [
          { content: 'Quyền tự do cơ bản của công dân', isCorrect: true },
          { content: 'Quyền kinh tế', isCorrect: false },
          { content: 'Quyền văn hóa', isCorrect: false },
          { content: 'Quyền chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Ông F ép buộc con gái phải theo tôn giáo của mình. Ông F vi phạm quyền gì?',
        answers: [
          { content: 'Quyền tự do tín ngưỡng, tôn giáo', isCorrect: true },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền bất khả xâm phạm về thân thể', isCorrect: false },
          { content: 'Quyền bầu cử', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước Việt Nam đảm bảo quyền tự do tín ngưỡng, tôn giáo bằng cách nào?',
        answers: [
          { content: 'Ban hành pháp luật về tín ngưỡng, tôn giáo; tôn trọng và bảo hộ quyền tự do tín ngưỡng', isCorrect: true },
          { content: 'Cấm tất cả các tôn giáo', isCorrect: false },
          { content: 'Chỉ cho phép một tôn giáo duy nhất', isCorrect: false },
          { content: 'Không quan tâm đến vấn đề tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi đánh người gây thương tích vi phạm quyền gì của công dân?',
        answers: [
          { content: 'Quyền được pháp luật bảo hộ về tính mạng, sức khỏe', isCorrect: true },
          { content: 'Quyền bất khả xâm phạm về chỗ ở', isCorrect: false },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền tự do tín ngưỡng', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do báo chí là biểu hiện cụ thể của quyền nào?',
        answers: [
          { content: 'Quyền tự do ngôn luận', isCorrect: true },
          { content: 'Quyền tự do kinh doanh', isCorrect: false },
          { content: 'Quyền bất khả xâm phạm về thân thể', isCorrect: false },
          { content: 'Quyền tự do tín ngưỡng', isCorrect: false },
        ],
      },
      {
        content: 'Trường hợp nào sau đây KHÔNG vi phạm quyền tự do cơ bản của công dân?',
        answers: [
          { content: 'Cơ quan điều tra khám xét chỗ ở theo đúng trình tự pháp luật', isCorrect: true },
          { content: 'Tự ý bắt giữ người không có lệnh', isCorrect: false },
          { content: 'Đọc trộm thư của người khác', isCorrect: false },
          { content: 'Ép buộc người khác bỏ đạo', isCorrect: false },
        ],
      },
      {
        content: 'Mục đích của việc quy định các quyền tự do cơ bản của công dân là gì?',
        answers: [
          { content: 'Bảo vệ quyền con người, quyền công dân, đảm bảo cho công dân được sống tự do, an toàn trong khuôn khổ pháp luật', isCorrect: true },
          { content: 'Hạn chế quyền lực nhà nước', isCorrect: false },
          { content: 'Tạo ra sự bất bình đẳng', isCorrect: false },
          { content: 'Phục vụ lợi ích của giai cấp cầm quyền', isCorrect: false },
        ],
      },
      {
        content: 'Công dân có quyền tự do cư trú có nghĩa là:',
        answers: [
          { content: 'Công dân có quyền tự do lựa chọn nơi cư trú theo quy định của pháp luật', isCorrect: true },
          { content: 'Công dân muốn ở đâu cũng được mà không cần đăng ký', isCorrect: false },
          { content: 'Chỉ được cư trú tại nơi đăng ký hộ khẩu', isCorrect: false },
          { content: 'Chỉ công dân thành phố mới có quyền này', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 4: Pháp luật kinh tế =====================
  {
    categorySlug: 'trac-nghiem-thpt-gdcd',
    title: 'Đề trắc nghiệm GDCD 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-gdcd-de-4',
    description:
      'Đề trắc nghiệm GDCD 12 chủ đề Pháp luật kinh tế: quyền sở hữu, hợp đồng, kinh doanh, thuế.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quyền sở hữu bao gồm những quyền nào?',
        answers: [
          { content: 'Quyền chiếm hữu, quyền sử dụng và quyền định đoạt', isCorrect: true },
          { content: 'Quyền mua và quyền bán', isCorrect: false },
          { content: 'Quyền sử dụng và quyền cho thuê', isCorrect: false },
          { content: 'Quyền chiếm hữu và quyền thừa kế', isCorrect: false },
        ],
      },
      {
        content: 'Quyền chiếm hữu là quyền:',
        answers: [
          { content: 'Nắm giữ, quản lý tài sản', isCorrect: true },
          { content: 'Khai thác công dụng của tài sản', isCorrect: false },
          { content: 'Bán, tặng, cho, để thừa kế tài sản', isCorrect: false },
          { content: 'Cho người khác mượn tài sản', isCorrect: false },
        ],
      },
      {
        content: 'Quyền sử dụng là quyền:',
        answers: [
          { content: 'Khai thác công dụng, hưởng hoa lợi, lợi tức từ tài sản', isCorrect: true },
          { content: 'Nắm giữ, quản lý tài sản', isCorrect: false },
          { content: 'Bán, tặng, cho tài sản', isCorrect: false },
          { content: 'Tiêu hủy tài sản', isCorrect: false },
        ],
      },
      {
        content: 'Quyền định đoạt là quyền:',
        answers: [
          { content: 'Quyết định số phận pháp lý của tài sản như bán, tặng, cho, để thừa kế, tiêu hủy', isCorrect: true },
          { content: 'Nắm giữ tài sản', isCorrect: false },
          { content: 'Sử dụng tài sản', isCorrect: false },
          { content: 'Bảo quản tài sản', isCorrect: false },
        ],
      },
      {
        content: 'Hợp đồng dân sự là gì?',
        answers: [
          { content: 'Sự thỏa thuận giữa các bên về việc xác lập, thay đổi hoặc chấm dứt quyền, nghĩa vụ dân sự', isCorrect: true },
          { content: 'Văn bản do Nhà nước ban hành', isCorrect: false },
          { content: 'Cam kết đơn phương của một bên', isCorrect: false },
          { content: 'Quyết định của tòa án', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc cơ bản của hợp đồng dân sự là:',
        answers: [
          { content: 'Tự do, tự nguyện cam kết, thỏa thuận; bình đẳng; không trái pháp luật và đạo đức xã hội', isCorrect: true },
          { content: 'Bên mạnh hơn quyết định', isCorrect: false },
          { content: 'Nhà nước quyết định nội dung hợp đồng', isCorrect: false },
          { content: 'Chỉ cần một bên đồng ý', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do kinh doanh của công dân có nghĩa là:',
        answers: [
          { content: 'Công dân có quyền kinh doanh trong những ngành nghề mà pháp luật không cấm, sau khi đăng ký kinh doanh theo quy định', isCorrect: true },
          { content: 'Công dân muốn kinh doanh gì cũng được', isCorrect: false },
          { content: 'Chỉ cán bộ nhà nước mới được kinh doanh', isCorrect: false },
          { content: 'Kinh doanh không cần đăng ký', isCorrect: false },
        ],
      },
      {
        content: 'Thuế là gì?',
        answers: [
          { content: 'Khoản thu bắt buộc mà các tổ chức, cá nhân phải nộp vào ngân sách nhà nước theo quy định pháp luật', isCorrect: true },
          { content: 'Khoản đóng góp tự nguyện', isCorrect: false },
          { content: 'Tiền phạt vi phạm hành chính', isCorrect: false },
          { content: 'Phí dịch vụ công', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò quan trọng nhất của thuế đối với Nhà nước là:',
        answers: [
          { content: 'Là nguồn thu chủ yếu của ngân sách nhà nước', isCorrect: true },
          { content: 'Là công cụ trừng phạt doanh nghiệp', isCorrect: false },
          { content: 'Là phương tiện hạn chế kinh doanh', isCorrect: false },
          { content: 'Là cách để kiểm soát công dân', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ nộp thuế là nghĩa vụ của:',
        answers: [
          { content: 'Mọi tổ chức, cá nhân theo quy định của pháp luật', isCorrect: true },
          { content: 'Chỉ doanh nghiệp', isCorrect: false },
          { content: 'Chỉ cá nhân', isCorrect: false },
          { content: 'Chỉ người giàu', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi trốn thuế bị xử lý như thế nào?',
        answers: [
          { content: 'Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự tùy mức độ vi phạm', isCorrect: true },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
          { content: 'Không bị xử lý', isCorrect: false },
          { content: 'Chỉ bị phạt tiền', isCorrect: false },
        ],
      },
      {
        content: 'Loại thuế nào sau đây là thuế trực thu?',
        answers: [
          { content: 'Thuế thu nhập cá nhân', isCorrect: true },
          { content: 'Thuế giá trị gia tăng (VAT)', isCorrect: false },
          { content: 'Thuế tiêu thụ đặc biệt', isCorrect: false },
          { content: 'Thuế xuất khẩu', isCorrect: false },
        ],
      },
      {
        content: 'Thuế giá trị gia tăng (VAT) thuộc loại thuế nào?',
        answers: [
          { content: 'Thuế gián thu', isCorrect: true },
          { content: 'Thuế trực thu', isCorrect: false },
          { content: 'Thuế tài sản', isCorrect: false },
          { content: 'Thuế thu nhập', isCorrect: false },
        ],
      },
      {
        content: 'Hợp đồng lao động là sự thỏa thuận giữa:',
        answers: [
          { content: 'Người lao động và người sử dụng lao động về việc làm, tiền lương, điều kiện lao động', isCorrect: true },
          { content: 'Hai doanh nghiệp với nhau', isCorrect: false },
          { content: 'Nhà nước và doanh nghiệp', isCorrect: false },
          { content: 'Công đoàn và doanh nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Quyền sở hữu trí tuệ bao gồm:',
        answers: [
          { content: 'Quyền tác giả, quyền sở hữu công nghiệp và quyền đối với giống cây trồng', isCorrect: true },
          { content: 'Chỉ quyền tác giả', isCorrect: false },
          { content: 'Chỉ quyền sáng chế', isCorrect: false },
          { content: 'Chỉ quyền nhãn hiệu', isCorrect: false },
        ],
      },
      {
        content: 'Anh G mở cửa hàng kinh doanh nhưng không đăng ký kinh doanh. Anh G vi phạm:',
        answers: [
          { content: 'Pháp luật về đăng ký kinh doanh', isCorrect: true },
          { content: 'Pháp luật hình sự', isCorrect: false },
          { content: 'Đạo đức kinh doanh', isCorrect: false },
          { content: 'Không vi phạm gì', isCorrect: false },
        ],
      },
      {
        content: 'Doanh nghiệp có nghĩa vụ gì đối với người lao động?',
        answers: [
          { content: 'Trả lương đúng hạn, đóng bảo hiểm xã hội, đảm bảo điều kiện lao động an toàn', isCorrect: true },
          { content: 'Chỉ cần trả lương', isCorrect: false },
          { content: 'Không có nghĩa vụ gì', isCorrect: false },
          { content: 'Chỉ cần ký hợp đồng', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật bảo vệ quyền lợi người tiêu dùng bằng cách nào?',
        answers: [
          { content: 'Quy định quyền được thông tin, quyền lựa chọn, quyền khiếu nại và được bồi thường thiệt hại', isCorrect: true },
          { content: 'Cấm mọi hoạt động kinh doanh', isCorrect: false },
          { content: 'Chỉ bảo vệ người bán hàng', isCorrect: false },
          { content: 'Không có quy định bảo vệ', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi sản xuất hàng giả bị xử lý theo:',
        answers: [
          { content: 'Pháp luật hành chính hoặc hình sự tùy mức độ vi phạm', isCorrect: true },
          { content: 'Chỉ bị phê bình', isCorrect: false },
          { content: 'Không bị xử lý', isCorrect: false },
          { content: 'Chỉ bị thu hồi sản phẩm', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do kinh doanh được quy định trong văn bản nào?',
        answers: [
          { content: 'Hiến pháp và Luật Doanh nghiệp', isCorrect: true },
          { content: 'Chỉ trong Bộ luật Hình sự', isCorrect: false },
          { content: 'Chỉ trong Luật Đất đai', isCorrect: false },
          { content: 'Chỉ trong nội quy công ty', isCorrect: false },
        ],
      },
      {
        content: 'Hợp đồng dân sự vô hiệu khi nào?',
        answers: [
          { content: 'Khi vi phạm điều cấm của pháp luật, trái đạo đức xã hội, hoặc do lừa dối, ép buộc', isCorrect: true },
          { content: 'Khi một bên không muốn thực hiện', isCorrect: false },
          { content: 'Khi hợp đồng có giá trị lớn', isCorrect: false },
          { content: 'Khi hợp đồng được ký bằng miệng', isCorrect: false },
        ],
      },
      {
        content: 'Chị H mua điện thoại bị lỗi nhưng cửa hàng từ chối đổi trả. Chị H có quyền gì?',
        answers: [
          { content: 'Quyền khiếu nại và yêu cầu bồi thường theo Luật Bảo vệ quyền lợi người tiêu dùng', isCorrect: true },
          { content: 'Không có quyền gì', isCorrect: false },
          { content: 'Chỉ có thể chấp nhận', isCorrect: false },
          { content: 'Tự sửa chữa', isCorrect: false },
        ],
      },
      {
        content: 'Ngành nghề kinh doanh nào sau đây bị pháp luật cấm?',
        answers: [
          { content: 'Kinh doanh chất ma túy', isCorrect: true },
          { content: 'Kinh doanh thực phẩm', isCorrect: false },
          { content: 'Kinh doanh quần áo', isCorrect: false },
          { content: 'Kinh doanh dịch vụ du lịch', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật quy định mức lương tối thiểu nhằm mục đích gì?',
        answers: [
          { content: 'Bảo vệ quyền lợi của người lao động, đảm bảo mức sống tối thiểu', isCorrect: true },
          { content: 'Hạn chế doanh nghiệp phát triển', isCorrect: false },
          { content: 'Tăng thu ngân sách nhà nước', isCorrect: false },
          { content: 'Kiểm soát lạm phát', isCorrect: false },
        ],
      },
      {
        content: 'Quyền sở hữu tài sản của công dân được Nhà nước bảo hộ bằng cách nào?',
        answers: [
          { content: 'Ban hành pháp luật bảo vệ quyền sở hữu và xử lý nghiêm hành vi xâm phạm tài sản', isCorrect: true },
          { content: 'Nhà nước quản lý toàn bộ tài sản của công dân', isCorrect: false },
          { content: 'Công dân tự bảo vệ tài sản của mình', isCorrect: false },
          { content: 'Không có quy định bảo hộ', isCorrect: false },
        ],
      },
    ],
  },

  // ===================== ĐỀ SỐ 5: Vi phạm pháp luật và trách nhiệm pháp lý =====================
  {
    categorySlug: 'trac-nghiem-thpt-gdcd',
    title: 'Đề trắc nghiệm GDCD 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-gdcd-de-5',
    description:
      'Đề trắc nghiệm GDCD 12 chủ đề Vi phạm pháp luật và trách nhiệm pháp lý: hình sự, dân sự, hành chính.',
    instruction: 'Chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Vi phạm pháp luật là hành vi có đặc điểm nào?',
        answers: [
          { content: 'Trái pháp luật, có lỗi và do người có năng lực trách nhiệm pháp lý thực hiện', isCorrect: true },
          { content: 'Chỉ cần trái pháp luật', isCorrect: false },
          { content: 'Chỉ cần có lỗi', isCorrect: false },
          { content: 'Chỉ cần gây thiệt hại', isCorrect: false },
        ],
      },
      {
        content: 'Có mấy loại vi phạm pháp luật?',
        answers: [
          { content: '4 loại: hình sự, hành chính, dân sự, kỷ luật', isCorrect: true },
          { content: '2 loại: hình sự và dân sự', isCorrect: false },
          { content: '3 loại: hình sự, hành chính, dân sự', isCorrect: false },
          { content: '5 loại', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm hình sự là:',
        answers: [
          { content: 'Hành vi nguy hiểm cho xã hội, được quy định trong Bộ luật Hình sự', isCorrect: true },
          { content: 'Hành vi vi phạm nội quy cơ quan', isCorrect: false },
          { content: 'Hành vi vi phạm hợp đồng', isCorrect: false },
          { content: 'Hành vi vi phạm quy tắc quản lý nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm hành chính là:',
        answers: [
          { content: 'Hành vi xâm phạm các quy tắc quản lý nhà nước mà không phải là tội phạm', isCorrect: true },
          { content: 'Hành vi nguy hiểm cho xã hội', isCorrect: false },
          { content: 'Hành vi vi phạm hợp đồng', isCorrect: false },
          { content: 'Hành vi vi phạm kỷ luật lao động', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm dân sự là:',
        answers: [
          { content: 'Hành vi xâm phạm các quan hệ tài sản và quan hệ nhân thân', isCorrect: true },
          { content: 'Hành vi nguy hiểm cho xã hội', isCorrect: false },
          { content: 'Hành vi vi phạm quy tắc quản lý nhà nước', isCorrect: false },
          { content: 'Hành vi vi phạm nội quy cơ quan', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm kỷ luật là:',
        answers: [
          { content: 'Hành vi vi phạm kỷ luật lao động, nội quy cơ quan, đơn vị', isCorrect: true },
          { content: 'Hành vi nguy hiểm cho xã hội', isCorrect: false },
          { content: 'Hành vi vi phạm hợp đồng dân sự', isCorrect: false },
          { content: 'Hành vi vi phạm luật giao thông', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm pháp lý là:',
        answers: [
          { content: 'Nghĩa vụ mà các cá nhân, tổ chức vi phạm pháp luật phải gánh chịu hậu quả bất lợi do hành vi vi phạm', isCorrect: true },
          { content: 'Nghĩa vụ nộp thuế', isCorrect: false },
          { content: 'Trách nhiệm đạo đức', isCorrect: false },
          { content: 'Nghĩa vụ bảo vệ Tổ quốc', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm hình sự được áp dụng đối với:',
        answers: [
          { content: 'Người phạm tội theo quy định của Bộ luật Hình sự', isCorrect: true },
          { content: 'Người vi phạm hành chính', isCorrect: false },
          { content: 'Người vi phạm hợp đồng', isCorrect: false },
          { content: 'Người vi phạm nội quy', isCorrect: false },
        ],
      },
      {
        content: 'Hình phạt nào sau đây là hình phạt chính trong luật hình sự?',
        answers: [
          { content: 'Tù có thời hạn', isCorrect: true },
          { content: 'Cấm đảm nhiệm chức vụ', isCorrect: false },
          { content: 'Tịch thu tài sản', isCorrect: false },
          { content: 'Quản chế', isCorrect: false },
        ],
      },
      {
        content: 'Người bao nhiêu tuổi phải chịu trách nhiệm hình sự về mọi tội phạm?',
        answers: [
          { content: 'Từ đủ 16 tuổi trở lên', isCorrect: true },
          { content: 'Từ đủ 14 tuổi trở lên', isCorrect: false },
          { content: 'Từ đủ 18 tuổi trở lên', isCorrect: false },
          { content: 'Từ đủ 12 tuổi trở lên', isCorrect: false },
        ],
      },
      {
        content: 'Người từ đủ 14 tuổi đến dưới 16 tuổi phải chịu trách nhiệm hình sự về:',
        answers: [
          { content: 'Tội phạm rất nghiêm trọng và đặc biệt nghiêm trọng do cố ý', isCorrect: true },
          { content: 'Mọi tội phạm', isCorrect: false },
          { content: 'Không phải chịu trách nhiệm hình sự', isCorrect: false },
          { content: 'Chỉ tội phạm đặc biệt nghiêm trọng', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi cố ý trực tiếp là:',
        answers: [
          { content: 'Người vi phạm nhận thức rõ hành vi của mình là nguy hiểm, thấy trước hậu quả và mong muốn hậu quả xảy ra', isCorrect: true },
          { content: 'Người vi phạm không nhận thức được hành vi của mình', isCorrect: false },
          { content: 'Người vi phạm thấy trước hậu quả nhưng tin rằng có thể ngăn ngừa', isCorrect: false },
          { content: 'Người vi phạm không thấy trước hậu quả dù phải thấy trước', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi cố ý gián tiếp là:',
        answers: [
          { content: 'Người vi phạm nhận thức rõ hành vi nguy hiểm, thấy trước hậu quả nhưng để mặc cho hậu quả xảy ra', isCorrect: true },
          { content: 'Người vi phạm mong muốn hậu quả xảy ra', isCorrect: false },
          { content: 'Người vi phạm không nhận thức được hành vi', isCorrect: false },
          { content: 'Người vi phạm tin rằng có thể ngăn ngừa hậu quả', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi vô ý do cẩu thả là:',
        answers: [
          { content: 'Người vi phạm không thấy trước hậu quả mặc dù phải thấy trước và có thể thấy trước', isCorrect: true },
          { content: 'Người vi phạm thấy trước hậu quả nhưng mong muốn', isCorrect: false },
          { content: 'Người vi phạm thấy trước hậu quả nhưng tin có thể ngăn ngừa', isCorrect: false },
          { content: 'Người vi phạm để mặc hậu quả xảy ra', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức xử phạt hành chính phổ biến nhất là:',
        answers: [
          { content: 'Phạt tiền', isCorrect: true },
          { content: 'Phạt tù', isCorrect: false },
          { content: 'Cải tạo không giam giữ', isCorrect: false },
          { content: 'Tịch thu tài sản', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm dân sự chủ yếu là:',
        answers: [
          { content: 'Bồi thường thiệt hại về vật chất và tinh thần', isCorrect: true },
          { content: 'Phạt tù', isCorrect: false },
          { content: 'Phạt tiền nộp ngân sách nhà nước', isCorrect: false },
          { content: 'Kỷ luật sa thải', isCorrect: false },
        ],
      },
      {
        content: 'Anh I (20 tuổi) trộm cắp tài sản trị giá 50 triệu đồng. Anh I phải chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm hình sự', isCorrect: true },
          { content: 'Trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm dân sự', isCorrect: false },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Anh K vượt đèn đỏ và bị cảnh sát giao thông xử phạt. Anh K chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm hành chính', isCorrect: true },
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm dân sự', isCorrect: false },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Chị L không thực hiện đúng hợp đồng mua bán, gây thiệt hại cho đối tác. Chị L chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm dân sự', isCorrect: true },
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Anh M thường xuyên đi làm muộn, vi phạm nội quy cơ quan. Anh M chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm kỷ luật', isCorrect: true },
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm dân sự', isCorrect: false },
        ],
      },
      {
        content: 'Yếu tố nào sau đây KHÔNG phải là dấu hiệu của vi phạm pháp luật?',
        answers: [
          { content: 'Hành vi trái đạo đức nhưng không trái pháp luật', isCorrect: true },
          { content: 'Hành vi trái pháp luật', isCorrect: false },
          { content: 'Có lỗi của chủ thể', isCorrect: false },
          { content: 'Do người có năng lực trách nhiệm pháp lý thực hiện', isCorrect: false },
        ],
      },
      {
        content: 'Mục đích của trách nhiệm pháp lý là gì?',
        answers: [
          { content: 'Trừng phạt, giáo dục người vi phạm và răn đe, phòng ngừa vi phạm pháp luật', isCorrect: true },
          { content: 'Chỉ để trừng phạt', isCorrect: false },
          { content: 'Chỉ để thu tiền phạt', isCorrect: false },
          { content: 'Chỉ để giam giữ người vi phạm', isCorrect: false },
        ],
      },
      {
        content: 'Tội phạm được phân loại thành mấy loại theo mức độ nguy hiểm?',
        answers: [
          { content: '4 loại: ít nghiêm trọng, nghiêm trọng, rất nghiêm trọng, đặc biệt nghiêm trọng', isCorrect: true },
          { content: '2 loại: nghiêm trọng và không nghiêm trọng', isCorrect: false },
          { content: '3 loại: nhẹ, trung bình, nặng', isCorrect: false },
          { content: '5 loại', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây là vi phạm hành chính?',
        answers: [
          { content: 'Buôn bán hàng hóa không có hóa đơn chứng từ với giá trị nhỏ', isCorrect: true },
          { content: 'Giết người', isCorrect: false },
          { content: 'Vi phạm hợp đồng mua bán', isCorrect: false },
          { content: 'Đi làm muộn', isCorrect: false },
        ],
      },
      {
        content: 'Người chưa thành niên vi phạm pháp luật được xử lý theo nguyên tắc nào?',
        answers: [
          { content: 'Chủ yếu áp dụng biện pháp giáo dục, giúp đỡ sửa chữa sai lầm, phát triển lành mạnh', isCorrect: true },
          { content: 'Xử lý giống như người thành niên', isCorrect: false },
          { content: 'Không bị xử lý', isCorrect: false },
          { content: 'Chỉ bị phạt tiền', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
