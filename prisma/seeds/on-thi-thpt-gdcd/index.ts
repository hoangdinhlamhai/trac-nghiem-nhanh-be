import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Pháp luật và đời sống, thực hiện pháp luật
  // =============================================
  {
    categorySlug: 'on-thi-thpt-gdcd',
    title: 'Đề ôn thi THPT QG 2025 - GDCD - Đề số 1',
    slug: 'on-thi-thpt-gdcd-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn GDCD - Đề số 1. Tổng hợp: pháp luật và đời sống, thực hiện pháp luật.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Pháp luật là gì?',
        answers: [
          { content: 'Hệ thống các quy tắc xử sự chung do nhà nước ban hành và được bảo đảm thực hiện bằng quyền lực nhà nước', isCorrect: true },
          { content: 'Những quy định do cộng đồng tự đặt ra', isCorrect: false },
          { content: 'Những phong tục tập quán của dân tộc', isCorrect: false },
          { content: 'Những quy tắc đạo đức xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Đặc trưng nào sau đây KHÔNG phải là đặc trưng của pháp luật?',
        answers: [
          { content: 'Tính quy phạm phổ biến', isCorrect: false },
          { content: 'Tính quyền lực, bắt buộc chung', isCorrect: false },
          { content: 'Tính tự nguyện', isCorrect: true },
          { content: 'Tính xác định chặt chẽ về mặt hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật mang tính quy phạm phổ biến nghĩa là gì?',
        answers: [
          { content: 'Chỉ áp dụng cho một số người', isCorrect: false },
          { content: 'Là khuôn mẫu chung, áp dụng cho tất cả mọi người trong phạm vi lãnh thổ', isCorrect: true },
          { content: 'Chỉ áp dụng cho cán bộ nhà nước', isCorrect: false },
          { content: 'Chỉ áp dụng khi có tranh chấp', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất giai cấp của pháp luật thể hiện ở điều gì?',
        answers: [
          { content: 'Pháp luật do mọi người cùng xây dựng', isCorrect: false },
          { content: 'Pháp luật thể hiện ý chí của giai cấp cầm quyền', isCorrect: true },
          { content: 'Pháp luật không liên quan đến giai cấp', isCorrect: false },
          { content: 'Pháp luật chỉ bảo vệ người giàu', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa pháp luật và đạo đức là gì?',
        answers: [
          { content: 'Pháp luật và đạo đức không liên quan đến nhau', isCorrect: false },
          { content: 'Pháp luật và đạo đức có mối quan hệ chặt chẽ, nhiều quy phạm pháp luật mang nội dung đạo đức', isCorrect: true },
          { content: 'Đạo đức cao hơn pháp luật', isCorrect: false },
          { content: 'Pháp luật thay thế hoàn toàn đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của pháp luật đối với đời sống xã hội là gì?',
        answers: [
          { content: 'Chỉ để trừng phạt người vi phạm', isCorrect: false },
          { content: 'Là phương tiện để nhà nước quản lý xã hội, bảo vệ quyền và lợi ích hợp pháp của công dân', isCorrect: true },
          { content: 'Chỉ để giải quyết tranh chấp', isCorrect: false },
          { content: 'Không có vai trò quan trọng', isCorrect: false },
        ],
      },
      {
        content: 'Thực hiện pháp luật là gì?',
        answers: [
          { content: 'Quá trình hoạt động có mục đích, làm cho các quy định của pháp luật đi vào cuộc sống', isCorrect: true },
          { content: 'Chỉ là việc tuân thủ pháp luật', isCorrect: false },
          { content: 'Chỉ là việc xử phạt vi phạm', isCorrect: false },
          { content: 'Chỉ là việc ban hành pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Có mấy hình thức thực hiện pháp luật?',
        answers: [
          { content: '2 hình thức', isCorrect: false },
          { content: '3 hình thức', isCorrect: false },
          { content: '4 hình thức', isCorrect: true },
          { content: '5 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Sử dụng pháp luật là hình thức thực hiện pháp luật nào?',
        answers: [
          { content: 'Cá nhân, tổ chức thực hiện quyền (được làm) theo quy định của pháp luật', isCorrect: true },
          { content: 'Cá nhân, tổ chức không làm những điều pháp luật cấm', isCorrect: false },
          { content: 'Cá nhân, tổ chức thực hiện nghĩa vụ bắt buộc', isCorrect: false },
          { content: 'Cơ quan nhà nước ra quyết định xử phạt', isCorrect: false },
        ],
      },
      {
        content: 'Tuân thủ pháp luật là hình thức thực hiện pháp luật nào?',
        answers: [
          { content: 'Cá nhân, tổ chức thực hiện quyền theo pháp luật', isCorrect: false },
          { content: 'Cá nhân, tổ chức không làm những điều mà pháp luật cấm', isCorrect: true },
          { content: 'Cá nhân, tổ chức chủ động thực hiện nghĩa vụ', isCorrect: false },
          { content: 'Cơ quan nhà nước ban hành văn bản', isCorrect: false },
        ],
      },
      {
        content: 'Thi hành pháp luật (chấp hành pháp luật) là hình thức nào?',
        answers: [
          { content: 'Không làm điều pháp luật cấm', isCorrect: false },
          { content: 'Cá nhân, tổ chức chủ động thực hiện nghĩa vụ mà pháp luật quy định phải làm', isCorrect: true },
          { content: 'Thực hiện quyền được pháp luật cho phép', isCorrect: false },
          { content: 'Cơ quan nhà nước ra quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Áp dụng pháp luật là hình thức thực hiện pháp luật của chủ thể nào?',
        answers: [
          { content: 'Mọi công dân', isCorrect: false },
          { content: 'Cơ quan, công chức nhà nước có thẩm quyền', isCorrect: true },
          { content: 'Doanh nghiệp tư nhân', isCorrect: false },
          { content: 'Tổ chức xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm pháp luật là hành vi có đặc điểm nào?',
        answers: [
          { content: 'Trái pháp luật, có lỗi, do người có năng lực trách nhiệm pháp lý thực hiện', isCorrect: true },
          { content: 'Bất kỳ hành vi nào gây thiệt hại', isCorrect: false },
          { content: 'Hành vi trái đạo đức', isCorrect: false },
          { content: 'Hành vi không được mọi người đồng ý', isCorrect: false },
        ],
      },
      {
        content: 'Có mấy loại vi phạm pháp luật?',
        answers: [
          { content: '2 loại', isCorrect: false },
          { content: '3 loại', isCorrect: false },
          { content: '4 loại', isCorrect: true },
          { content: '5 loại', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm hình sự là loại vi phạm pháp luật nào?',
        answers: [
          { content: 'Vi phạm các quy tắc quản lý nhà nước', isCorrect: false },
          { content: 'Hành vi nguy hiểm cho xã hội được quy định trong Bộ luật Hình sự (tội phạm)', isCorrect: true },
          { content: 'Vi phạm hợp đồng dân sự', isCorrect: false },
          { content: 'Vi phạm kỷ luật lao động', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm hành chính là loại vi phạm pháp luật nào?',
        answers: [
          { content: 'Vi phạm Bộ luật Hình sự', isCorrect: false },
          { content: 'Xâm phạm các quy tắc quản lý nhà nước mà không phải là tội phạm', isCorrect: true },
          { content: 'Vi phạm hợp đồng lao động', isCorrect: false },
          { content: 'Vi phạm quy định nội bộ cơ quan', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm dân sự là loại vi phạm pháp luật nào?',
        answers: [
          { content: 'Vi phạm Bộ luật Hình sự', isCorrect: false },
          { content: 'Vi phạm các quy tắc quản lý nhà nước', isCorrect: false },
          { content: 'Vi phạm các quan hệ tài sản và quan hệ nhân thân', isCorrect: true },
          { content: 'Vi phạm kỷ luật lao động', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm kỷ luật là loại vi phạm pháp luật nào?',
        answers: [
          { content: 'Vi phạm Bộ luật Hình sự', isCorrect: false },
          { content: 'Vi phạm các quy tắc quản lý nhà nước', isCorrect: false },
          { content: 'Vi phạm kỷ luật lao động, kỷ luật công vụ', isCorrect: true },
          { content: 'Vi phạm hợp đồng mua bán', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm pháp lý là gì?',
        answers: [
          { content: 'Nghĩa vụ mà các chủ thể vi phạm pháp luật phải gánh chịu hậu quả bất lợi do nhà nước áp dụng', isCorrect: true },
          { content: 'Trách nhiệm đạo đức', isCorrect: false },
          { content: 'Trách nhiệm với gia đình', isCorrect: false },
          { content: 'Trách nhiệm với cộng đồng', isCorrect: false },
        ],
      },
      {
        content: 'Người bao nhiêu tuổi phải chịu trách nhiệm hình sự về mọi tội phạm?',
        answers: [
          { content: 'Đủ 14 tuổi', isCorrect: false },
          { content: 'Đủ 16 tuổi', isCorrect: true },
          { content: 'Đủ 18 tuổi', isCorrect: false },
          { content: 'Đủ 21 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Người từ đủ 14 tuổi đến dưới 16 tuổi phải chịu trách nhiệm hình sự về loại tội phạm nào?',
        answers: [
          { content: 'Mọi tội phạm', isCorrect: false },
          { content: 'Tội phạm rất nghiêm trọng và đặc biệt nghiêm trọng do cố ý', isCorrect: true },
          { content: 'Chỉ tội phạm ít nghiêm trọng', isCorrect: false },
          { content: 'Không phải chịu trách nhiệm hình sự', isCorrect: false },
        ],
      },
      {
        content: 'Người bao nhiêu tuổi phải chịu trách nhiệm hành chính?',
        answers: [
          { content: 'Đủ 14 tuổi', isCorrect: true },
          { content: 'Đủ 16 tuổi', isCorrect: false },
          { content: 'Đủ 18 tuổi', isCorrect: false },
          { content: 'Đủ 12 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi cố ý trực tiếp là gì?',
        answers: [
          { content: 'Người vi phạm nhận thức rõ hành vi của mình là nguy hiểm, thấy trước hậu quả và mong muốn hậu quả xảy ra', isCorrect: true },
          { content: 'Người vi phạm không nhận thức được hành vi của mình', isCorrect: false },
          { content: 'Người vi phạm thấy trước hậu quả nhưng tin rằng có thể ngăn ngừa', isCorrect: false },
          { content: 'Người vi phạm không thấy trước hậu quả', isCorrect: false },
        ],
      },
      {
        content: 'Anh A vượt đèn đỏ khi tham gia giao thông. Hành vi này thuộc loại vi phạm pháp luật nào?',
        answers: [
          { content: 'Vi phạm hình sự', isCorrect: false },
          { content: 'Vi phạm hành chính', isCorrect: true },
          { content: 'Vi phạm dân sự', isCorrect: false },
          { content: 'Vi phạm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật có tính xác định chặt chẽ về mặt hình thức nghĩa là gì?',
        answers: [
          { content: 'Pháp luật được truyền miệng', isCorrect: false },
          { content: 'Pháp luật được thể hiện bằng văn bản, diễn đạt chính xác, một nghĩa, rõ ràng', isCorrect: true },
          { content: 'Pháp luật do nhân dân tự ban hành', isCorrect: false },
          { content: 'Pháp luật không cần văn bản', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Quyền bình đẳng, quyền tự do cơ bản
  // =============================================
  {
    categorySlug: 'on-thi-thpt-gdcd',
    title: 'Đề ôn thi THPT QG 2025 - GDCD - Đề số 2',
    slug: 'on-thi-thpt-gdcd-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn GDCD - Đề số 2. Tổng hợp: quyền bình đẳng, quyền tự do cơ bản của công dân.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Quyền bình đẳng của công dân trước pháp luật có nghĩa là gì?',
        answers: [
          { content: 'Mọi công dân đều được hưởng quyền, thực hiện nghĩa vụ và chịu trách nhiệm pháp lý theo quy định pháp luật', isCorrect: true },
          { content: 'Mọi công dân đều có thu nhập như nhau', isCorrect: false },
          { content: 'Mọi công dân đều giữ chức vụ như nhau', isCorrect: false },
          { content: 'Mọi công dân đều được miễn trách nhiệm pháp lý', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng trong hôn nhân và gia đình thể hiện ở điều gì?',
        answers: [
          { content: 'Chồng có quyền quyết định mọi việc', isCorrect: false },
          { content: 'Vợ chồng bình đẳng với nhau về mọi mặt trong gia đình', isCorrect: true },
          { content: 'Vợ có quyền quyết định mọi việc', isCorrect: false },
          { content: 'Con cái quyết định mọi việc', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng giữa các dân tộc thể hiện ở lĩnh vực nào?',
        answers: [
          { content: 'Chỉ về chính trị', isCorrect: false },
          { content: 'Chỉ về kinh tế', isCorrect: false },
          { content: 'Về chính trị, kinh tế, văn hóa, giáo dục', isCorrect: true },
          { content: 'Chỉ về văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng giữa các tôn giáo có nghĩa là gì?',
        answers: [
          { content: 'Mọi người phải theo cùng một tôn giáo', isCorrect: false },
          { content: 'Các tôn giáo đều bình đẳng trước pháp luật, được tự do hoạt động trong khuôn khổ pháp luật', isCorrect: true },
          { content: 'Nhà nước ưu tiên một tôn giáo', isCorrect: false },
          { content: 'Không ai được theo tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bất khả xâm phạm về thân thể của công dân có nghĩa là gì?',
        answers: [
          { content: 'Không ai bị bắt nếu không có quyết định của Tòa án, phê chuẩn của Viện kiểm sát, trừ trường hợp phạm tội quả tang', isCorrect: true },
          { content: 'Không ai được chạm vào người khác', isCorrect: false },
          { content: 'Công dân không bao giờ bị bắt', isCorrect: false },
          { content: 'Chỉ công an mới được bắt người', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được pháp luật bảo hộ về tính mạng, sức khỏe, danh dự và nhân phẩm có nghĩa là gì?',
        answers: [
          { content: 'Công dân có quyền tự bảo vệ mình bằng mọi cách', isCorrect: false },
          { content: 'Không ai được xâm phạm đến tính mạng, sức khỏe, danh dự, nhân phẩm của người khác', isCorrect: true },
          { content: 'Chỉ người giàu mới được bảo vệ', isCorrect: false },
          { content: 'Chỉ áp dụng cho người lớn', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bất khả xâm phạm về chỗ ở của công dân có nghĩa là gì?',
        answers: [
          { content: 'Không ai được tự ý vào chỗ ở của người khác nếu không được người đó đồng ý, trừ trường hợp pháp luật cho phép', isCorrect: true },
          { content: 'Mọi người đều có nhà ở', isCorrect: false },
          { content: 'Nhà nước cấp nhà cho mọi người', isCorrect: false },
          { content: 'Không ai được mua bán nhà', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín có nghĩa là gì?',
        answers: [
          { content: 'Không ai được kiểm soát thư tín, điện thoại, điện tín của người khác, trừ trường hợp pháp luật cho phép', isCorrect: true },
          { content: 'Mọi người đều được sử dụng điện thoại miễn phí', isCorrect: false },
          { content: 'Nhà nước kiểm soát mọi thư tín', isCorrect: false },
          { content: 'Chỉ áp dụng cho thư tín giấy', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do ngôn luận của công dân có nghĩa là gì?',
        answers: [
          { content: 'Công dân được nói bất cứ điều gì', isCorrect: false },
          { content: 'Công dân có quyền tự do phát biểu ý kiến, bày tỏ quan điểm trong khuôn khổ pháp luật', isCorrect: true },
          { content: 'Công dân được xúc phạm người khác', isCorrect: false },
          { content: 'Công dân được tuyên truyền chống nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng trong lao động thể hiện ở những khía cạnh nào?',
        answers: [
          { content: 'Bình đẳng trong thực hiện quyền lao động, giao kết hợp đồng lao động, hưởng lương', isCorrect: true },
          { content: 'Mọi người đều làm cùng một công việc', isCorrect: false },
          { content: 'Mọi người đều có mức lương như nhau', isCorrect: false },
          { content: 'Chỉ bình đẳng về giờ làm việc', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng trong kinh doanh có nghĩa là gì?',
        answers: [
          { content: 'Mọi doanh nghiệp đều có lợi nhuận như nhau', isCorrect: false },
          { content: 'Mọi cá nhân, tổ chức kinh doanh đều bình đẳng theo quy định pháp luật, được tự do lựa chọn ngành nghề, hình thức kinh doanh', isCorrect: true },
          { content: 'Nhà nước ưu tiên doanh nghiệp nhà nước', isCorrect: false },
          { content: 'Chỉ người giàu mới được kinh doanh', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do tín ngưỡng, tôn giáo có nghĩa là gì?',
        answers: [
          { content: 'Mọi người bắt buộc phải theo một tôn giáo', isCorrect: false },
          { content: 'Công dân có quyền theo hoặc không theo một tín ngưỡng, tôn giáo nào', isCorrect: true },
          { content: 'Nhà nước cấm mọi tôn giáo', isCorrect: false },
          { content: 'Chỉ được theo tôn giáo do nhà nước chỉ định', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây vi phạm quyền bất khả xâm phạm về thân thể?',
        answers: [
          { content: 'Công an bắt người theo lệnh của Tòa án', isCorrect: false },
          { content: 'Tự ý bắt giữ người khác mà không có căn cứ pháp luật', isCorrect: true },
          { content: 'Bắt người phạm tội quả tang', isCorrect: false },
          { content: 'Tạm giữ người theo quyết định của Viện kiểm sát', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây vi phạm quyền bất khả xâm phạm về chỗ ở?',
        answers: [
          { content: 'Khám nhà theo lệnh của cơ quan có thẩm quyền', isCorrect: false },
          { content: 'Tự ý vào nhà người khác lục soát khi không được đồng ý và không có lệnh', isCorrect: true },
          { content: 'Vào nhà người khác khi được mời', isCorrect: false },
          { content: 'Cứu người trong trường hợp khẩn cấp', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng giữa nam và nữ trong lĩnh vực chính trị thể hiện ở điều gì?',
        answers: [
          { content: 'Chỉ nam giới được tham gia chính trị', isCorrect: false },
          { content: 'Nam và nữ bình đẳng trong tham gia quản lý nhà nước, bầu cử, ứng cử', isCorrect: true },
          { content: 'Nữ giới được ưu tiên hơn nam giới', isCorrect: false },
          { content: 'Nam giới được ưu tiên hơn nữ giới', isCorrect: false },
        ],
      },
      {
        content: 'Chị B bị chồng đánh đập thường xuyên. Hành vi của người chồng vi phạm quyền gì?',
        answers: [
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền được pháp luật bảo hộ về tính mạng, sức khỏe, danh dự, nhân phẩm', isCorrect: true },
          { content: 'Quyền bất khả xâm phạm về chỗ ở', isCorrect: false },
          { content: 'Quyền tự do tín ngưỡng', isCorrect: false },
        ],
      },
      {
        content: 'Anh C đọc trộm tin nhắn điện thoại của bạn gái. Hành vi này vi phạm quyền gì?',
        answers: [
          { content: 'Quyền bất khả xâm phạm về thân thể', isCorrect: false },
          { content: 'Quyền được bảo đảm an toàn và bí mật thư tín, điện thoại, điện tín', isCorrect: true },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền bất khả xâm phạm về chỗ ở', isCorrect: false },
        ],
      },
      {
        content: 'Công ty X từ chối tuyển dụng lao động nữ vì lý do giới tính. Hành vi này vi phạm quyền gì?',
        answers: [
          { content: 'Quyền tự do kinh doanh', isCorrect: false },
          { content: 'Quyền bình đẳng giữa nam và nữ trong lao động', isCorrect: true },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền bất khả xâm phạm về thân thể', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bình đẳng giữa vợ và chồng trong quan hệ tài sản thể hiện ở điều gì?',
        answers: [
          { content: 'Chồng quản lý toàn bộ tài sản', isCorrect: false },
          { content: 'Vợ chồng có quyền ngang nhau trong sở hữu tài sản chung, định đoạt tài sản chung', isCorrect: true },
          { content: 'Vợ quản lý toàn bộ tài sản', isCorrect: false },
          { content: 'Tài sản thuộc về người có thu nhập cao hơn', isCorrect: false },
        ],
      },
      {
        content: 'Ông D phân biệt đối xử giữa con trai và con gái trong việc cho đi học. Hành vi này vi phạm quyền gì?',
        answers: [
          { content: 'Quyền tự do tín ngưỡng', isCorrect: false },
          { content: 'Quyền bình đẳng giữa nam và nữ, quyền bình đẳng trong gia đình', isCorrect: true },
          { content: 'Quyền bất khả xâm phạm về chỗ ở', isCorrect: false },
          { content: 'Quyền tự do kinh doanh', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước có chính sách ưu tiên phát triển kinh tế - xã hội vùng đồng bào dân tộc thiểu số nhằm mục đích gì?',
        answers: [
          { content: 'Phân biệt đối xử giữa các dân tộc', isCorrect: false },
          { content: 'Thực hiện quyền bình đẳng giữa các dân tộc, rút ngắn khoảng cách phát triển', isCorrect: true },
          { content: 'Ưu tiên dân tộc Kinh', isCorrect: false },
          { content: 'Hạn chế phát triển vùng đồng bằng', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bình đẳng giữa cha mẹ và con cái thể hiện ở điều gì?',
        answers: [
          { content: 'Cha mẹ có quyền quyết định mọi việc của con', isCorrect: false },
          { content: 'Cha mẹ có nghĩa vụ nuôi dạy con, con có nghĩa vụ kính trọng, chăm sóc cha mẹ', isCorrect: true },
          { content: 'Con cái không có nghĩa vụ gì với cha mẹ', isCorrect: false },
          { content: 'Cha mẹ không có nghĩa vụ nuôi con sau ly hôn', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi nào sau đây thể hiện sự bình đẳng trong hôn nhân?',
        answers: [
          { content: 'Chồng quyết định mọi việc lớn trong gia đình', isCorrect: false },
          { content: 'Vợ chồng cùng bàn bạc, thống nhất các vấn đề quan trọng của gia đình', isCorrect: true },
          { content: 'Vợ phải nghe theo mọi quyết định của chồng', isCorrect: false },
          { content: 'Chỉ người có thu nhập cao hơn mới có quyền quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Bình đẳng giữa các dân tộc trong lĩnh vực văn hóa thể hiện ở điều gì?',
        answers: [
          { content: 'Mọi dân tộc phải theo văn hóa của dân tộc Kinh', isCorrect: false },
          { content: 'Các dân tộc có quyền dùng tiếng nói, chữ viết, giữ gìn bản sắc văn hóa dân tộc', isCorrect: true },
          { content: 'Chỉ dân tộc đa số mới có văn hóa', isCorrect: false },
          { content: 'Nhà nước không quan tâm đến văn hóa dân tộc thiểu số', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do báo chí của công dân có nghĩa là gì?',
        answers: [
          { content: 'Công dân được viết bất cứ điều gì trên báo', isCorrect: false },
          { content: 'Công dân có quyền sáng tạo tác phẩm báo chí, tiếp cận thông tin báo chí theo quy định pháp luật', isCorrect: true },
          { content: 'Công dân được tự ý xuất bản báo', isCorrect: false },
          { content: 'Chỉ nhà báo mới có quyền này', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Quyền và nghĩa vụ công dân, bầu cử, khiếu nại, tố cáo
  // =============================================
  {
    categorySlug: 'on-thi-thpt-gdcd',
    title: 'Đề ôn thi THPT QG 2025 - GDCD - Đề số 3',
    slug: 'on-thi-thpt-gdcd-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn GDCD - Đề số 3. Tổng hợp: quyền và nghĩa vụ công dân, bầu cử, khiếu nại, tố cáo.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Công dân Việt Nam đủ bao nhiêu tuổi có quyền bầu cử?',
        answers: [
          { content: 'Đủ 16 tuổi', isCorrect: false },
          { content: 'Đủ 18 tuổi', isCorrect: true },
          { content: 'Đủ 20 tuổi', isCorrect: false },
          { content: 'Đủ 21 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Công dân Việt Nam đủ bao nhiêu tuổi có quyền ứng cử vào Quốc hội và Hội đồng nhân dân?',
        answers: [
          { content: 'Đủ 18 tuổi', isCorrect: false },
          { content: 'Đủ 21 tuổi', isCorrect: true },
          { content: 'Đủ 25 tuổi', isCorrect: false },
          { content: 'Đủ 30 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Quyền bầu cử và ứng cử là quyền thuộc lĩnh vực nào?',
        answers: [
          { content: 'Quyền kinh tế', isCorrect: false },
          { content: 'Quyền chính trị', isCorrect: true },
          { content: 'Quyền văn hóa', isCorrect: false },
          { content: 'Quyền dân sự', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc bầu cử ở Việt Nam là gì?',
        answers: [
          { content: 'Phổ thông, bình đẳng, trực tiếp và bỏ phiếu kín', isCorrect: true },
          { content: 'Chỉ phổ thông và bình đẳng', isCorrect: false },
          { content: 'Chỉ trực tiếp và bỏ phiếu kín', isCorrect: false },
          { content: 'Gián tiếp và công khai', isCorrect: false },
        ],
      },
      {
        content: 'Quyền khiếu nại là gì?',
        answers: [
          { content: 'Quyền đề nghị cơ quan có thẩm quyền xem xét lại quyết định hành chính, hành vi hành chính khi có căn cứ cho rằng quyết định, hành vi đó trái pháp luật, xâm phạm quyền, lợi ích hợp pháp của mình', isCorrect: true },
          { content: 'Quyền báo cho cơ quan biết về hành vi vi phạm pháp luật của người khác', isCorrect: false },
          { content: 'Quyền kiện ra tòa án', isCorrect: false },
          { content: 'Quyền biểu tình', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tố cáo là gì?',
        answers: [
          { content: 'Quyền yêu cầu xem xét lại quyết định hành chính', isCorrect: false },
          { content: 'Quyền báo cho cơ quan, tổ chức, cá nhân có thẩm quyền biết về hành vi vi phạm pháp luật của bất cứ cơ quan, tổ chức, cá nhân nào gây thiệt hại hoặc đe dọa gây thiệt hại', isCorrect: true },
          { content: 'Quyền kiện ra tòa', isCorrect: false },
          { content: 'Quyền tự xử lý vi phạm', isCorrect: false },
        ],
      },
      {
        content: 'Điểm khác biệt cơ bản giữa khiếu nại và tố cáo là gì?',
        answers: [
          { content: 'Khiếu nại liên quan đến quyền lợi của chính người khiếu nại; tố cáo báo cho cơ quan biết về vi phạm pháp luật của người khác', isCorrect: true },
          { content: 'Khiếu nại và tố cáo giống nhau hoàn toàn', isCorrect: false },
          { content: 'Tố cáo chỉ dành cho cán bộ nhà nước', isCorrect: false },
          { content: 'Khiếu nại chỉ dành cho doanh nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tham gia quản lý nhà nước và xã hội của công dân thể hiện ở những hoạt động nào?',
        answers: [
          { content: 'Tham gia bầu cử, ứng cử, thảo luận, góp ý kiến xây dựng pháp luật, giám sát hoạt động của cơ quan nhà nước', isCorrect: true },
          { content: 'Chỉ bầu cử', isCorrect: false },
          { content: 'Chỉ ứng cử', isCorrect: false },
          { content: 'Chỉ đóng thuế', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ bảo vệ Tổ quốc là nghĩa vụ của ai?',
        answers: [
          { content: 'Chỉ của quân đội', isCorrect: false },
          { content: 'Của mọi công dân Việt Nam', isCorrect: true },
          { content: 'Chỉ của nam giới', isCorrect: false },
          { content: 'Chỉ của người trưởng thành', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ đóng thuế là nghĩa vụ của ai?',
        answers: [
          { content: 'Chỉ của doanh nghiệp', isCorrect: false },
          { content: 'Của mọi tổ chức, cá nhân theo quy định pháp luật', isCorrect: true },
          { content: 'Chỉ của người giàu', isCorrect: false },
          { content: 'Chỉ của cán bộ nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Quyền học tập của công dân thể hiện ở điều gì?',
        answers: [
          { content: 'Chỉ người giàu mới được học', isCorrect: false },
          { content: 'Mọi công dân đều có quyền học tập, học không hạn chế, bình đẳng về cơ hội học tập', isCorrect: true },
          { content: 'Chỉ trẻ em mới có quyền học tập', isCorrect: false },
          { content: 'Nhà nước không hỗ trợ việc học', isCorrect: false },
        ],
      },
      {
        content: 'Quyền sáng tạo của công dân bao gồm những quyền nào?',
        answers: [
          { content: 'Quyền tác giả, quyền sở hữu công nghiệp, quyền hoạt động khoa học công nghệ', isCorrect: true },
          { content: 'Chỉ quyền tác giả', isCorrect: false },
          { content: 'Chỉ quyền sáng chế', isCorrect: false },
          { content: 'Chỉ quyền biểu diễn nghệ thuật', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được phát triển của công dân có nghĩa là gì?',
        answers: [
          { content: 'Chỉ quyền được giàu có', isCorrect: false },
          { content: 'Quyền được hưởng đời sống vật chất và tinh thần đầy đủ để phát triển toàn diện', isCorrect: true },
          { content: 'Chỉ quyền được đi du lịch', isCorrect: false },
          { content: 'Chỉ quyền được mua sắm', isCorrect: false },
        ],
      },
      {
        content: 'Ai có quyền khiếu nại?',
        answers: [
          { content: 'Chỉ cán bộ nhà nước', isCorrect: false },
          { content: 'Cơ quan, tổ chức, cá nhân khi cho rằng quyết định hành chính, hành vi hành chính xâm phạm quyền, lợi ích hợp pháp của mình', isCorrect: true },
          { content: 'Chỉ doanh nghiệp', isCorrect: false },
          { content: 'Chỉ người nước ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Ai có quyền tố cáo?',
        answers: [
          { content: 'Chỉ cán bộ nhà nước', isCorrect: false },
          { content: 'Mọi công dân', isCorrect: true },
          { content: 'Chỉ tổ chức', isCorrect: false },
          { content: 'Chỉ người bị hại', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ tôn trọng, bảo vệ tài sản nhà nước và lợi ích công cộng là nghĩa vụ của ai?',
        answers: [
          { content: 'Chỉ của cán bộ nhà nước', isCorrect: false },
          { content: 'Của mọi công dân', isCorrect: true },
          { content: 'Chỉ của doanh nghiệp nhà nước', isCorrect: false },
          { content: 'Chỉ của lực lượng vũ trang', isCorrect: false },
        ],
      },
      {
        content: 'Anh E đủ 18 tuổi nhưng không đi bầu cử. Anh E đã không thực hiện quyền gì?',
        answers: [
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
          { content: 'Quyền bầu cử', isCorrect: true },
          { content: 'Quyền ứng cử', isCorrect: false },
          { content: 'Quyền khiếu nại', isCorrect: false },
        ],
      },
      {
        content: 'Chị F phát hiện hàng xóm buôn bán ma túy và báo cho công an. Chị F đã thực hiện quyền gì?',
        answers: [
          { content: 'Quyền khiếu nại', isCorrect: false },
          { content: 'Quyền tố cáo', isCorrect: true },
          { content: 'Quyền bầu cử', isCorrect: false },
          { content: 'Quyền tự do ngôn luận', isCorrect: false },
        ],
      },
      {
        content: 'Ông G bị UBND xã thu hồi đất trái pháp luật. Ông G nên thực hiện quyền gì?',
        answers: [
          { content: 'Quyền tố cáo', isCorrect: false },
          { content: 'Quyền khiếu nại', isCorrect: true },
          { content: 'Quyền biểu tình', isCorrect: false },
          { content: 'Tự ý lấy lại đất', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ quân sự là nghĩa vụ của công dân nam trong độ tuổi nào?',
        answers: [
          { content: 'Từ 16 đến 25 tuổi', isCorrect: false },
          { content: 'Từ đủ 18 đến hết 25 tuổi', isCorrect: true },
          { content: 'Từ 20 đến 30 tuổi', isCorrect: false },
          { content: 'Từ 18 đến 35 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do cư trú của công dân có nghĩa là gì?',
        answers: [
          { content: 'Công dân được ở bất cứ đâu mà không cần đăng ký', isCorrect: false },
          { content: 'Công dân có quyền tự do lựa chọn nơi cư trú theo quy định pháp luật', isCorrect: true },
          { content: 'Công dân không được chuyển nơi ở', isCorrect: false },
          { content: 'Chỉ áp dụng cho người thành thị', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do đi lại của công dân có nghĩa là gì?',
        answers: [
          { content: 'Công dân được đi bất cứ đâu mà không cần giấy tờ', isCorrect: false },
          { content: 'Công dân có quyền tự do đi lại trong nước, ra nước ngoài và từ nước ngoài về nước theo quy định pháp luật', isCorrect: true },
          { content: 'Công dân không được ra nước ngoài', isCorrect: false },
          { content: 'Chỉ áp dụng cho người có hộ chiếu', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ tuân theo Hiến pháp và pháp luật là nghĩa vụ của ai?',
        answers: [
          { content: 'Chỉ của cán bộ nhà nước', isCorrect: false },
          { content: 'Của mọi công dân và tổ chức', isCorrect: true },
          { content: 'Chỉ của người trưởng thành', isCorrect: false },
          { content: 'Chỉ của doanh nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Hiến pháp là gì?',
        answers: [
          { content: 'Luật thường', isCorrect: false },
          { content: 'Luật cơ bản của nhà nước, có hiệu lực pháp lý cao nhất', isCorrect: true },
          { content: 'Nghị định của Chính phủ', isCorrect: false },
          { content: 'Thông tư của Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Quyền được thông tin của công dân có nghĩa là gì?',
        answers: [
          { content: 'Công dân được tiếp cận mọi thông tin bí mật nhà nước', isCorrect: false },
          { content: 'Công dân có quyền được thông tin về hoạt động của cơ quan nhà nước theo quy định pháp luật', isCorrect: true },
          { content: 'Công dân không có quyền tiếp cận thông tin', isCorrect: false },
          { content: 'Chỉ cán bộ nhà nước mới có quyền này', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Pháp luật kinh tế, lao động, kinh doanh, thuế
  // =============================================
  {
    categorySlug: 'on-thi-thpt-gdcd',
    title: 'Đề ôn thi THPT QG 2025 - GDCD - Đề số 4',
    slug: 'on-thi-thpt-gdcd-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn GDCD - Đề số 4. Tổng hợp: pháp luật kinh tế, lao động, kinh doanh, thuế.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Quyền tự do kinh doanh của công dân có nghĩa là gì?',
        answers: [
          { content: 'Công dân được kinh doanh bất cứ ngành nghề gì', isCorrect: false },
          { content: 'Công dân có quyền lựa chọn hình thức tổ chức kinh doanh, ngành nghề và quy mô kinh doanh theo quy định pháp luật', isCorrect: true },
          { content: 'Chỉ người giàu mới được kinh doanh', isCorrect: false },
          { content: 'Kinh doanh không cần đăng ký', isCorrect: false },
        ],
      },
      {
        content: 'Để kinh doanh hợp pháp, cá nhân hoặc tổ chức cần phải làm gì?',
        answers: [
          { content: 'Chỉ cần có vốn', isCorrect: false },
          { content: 'Đăng ký kinh doanh theo quy định pháp luật, kinh doanh đúng ngành nghề đã đăng ký', isCorrect: true },
          { content: 'Chỉ cần thông báo cho hàng xóm', isCorrect: false },
          { content: 'Không cần thủ tục gì', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ nộp thuế có ý nghĩa gì?',
        answers: [
          { content: 'Chỉ để nhà nước thu tiền', isCorrect: false },
          { content: 'Góp phần tạo nguồn thu cho ngân sách nhà nước, phục vụ phát triển kinh tế - xã hội, quốc phòng, an ninh', isCorrect: true },
          { content: 'Không có ý nghĩa gì', isCorrect: false },
          { content: 'Chỉ để trả lương cho cán bộ', isCorrect: false },
        ],
      },
      {
        content: 'Thuế thu nhập cá nhân áp dụng cho đối tượng nào?',
        answers: [
          { content: 'Chỉ doanh nghiệp', isCorrect: false },
          { content: 'Cá nhân có thu nhập chịu thuế theo quy định pháp luật', isCorrect: true },
          { content: 'Chỉ người nước ngoài', isCorrect: false },
          { content: 'Chỉ cán bộ nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Hợp đồng lao động là gì?',
        answers: [
          { content: 'Thỏa thuận miệng giữa hai bên', isCorrect: false },
          { content: 'Sự thỏa thuận giữa người lao động và người sử dụng lao động về việc làm có trả công, điều kiện lao động, quyền và nghĩa vụ của mỗi bên', isCorrect: true },
          { content: 'Quyết định của người sử dụng lao động', isCorrect: false },
          { content: 'Giấy phép lao động', isCorrect: false },
        ],
      },
      {
        content: 'Người lao động đủ bao nhiêu tuổi mới được giao kết hợp đồng lao động?',
        answers: [
          { content: 'Đủ 14 tuổi', isCorrect: false },
          { content: 'Đủ 15 tuổi', isCorrect: true },
          { content: 'Đủ 16 tuổi', isCorrect: false },
          { content: 'Đủ 18 tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Thời giờ làm việc bình thường theo quy định pháp luật lao động Việt Nam là bao nhiêu?',
        answers: [
          { content: 'Không quá 10 giờ/ngày', isCorrect: false },
          { content: 'Không quá 8 giờ/ngày và 48 giờ/tuần', isCorrect: true },
          { content: 'Không quá 6 giờ/ngày', isCorrect: false },
          { content: 'Không quá 12 giờ/ngày', isCorrect: false },
        ],
      },
      {
        content: 'Người lao động có quyền gì khi bị sa thải trái pháp luật?',
        answers: [
          { content: 'Không có quyền gì', isCorrect: false },
          { content: 'Có quyền khiếu nại, khởi kiện ra tòa án để bảo vệ quyền lợi', isCorrect: true },
          { content: 'Chỉ được phép xin việc mới', isCorrect: false },
          { content: 'Phải chấp nhận', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật quy định người sử dụng lao động không được sử dụng lao động chưa thành niên làm những công việc nào?',
        answers: [
          { content: 'Mọi công việc', isCorrect: false },
          { content: 'Công việc nặng nhọc, độc hại, nguy hiểm hoặc nơi ảnh hưởng xấu đến nhân cách', isCorrect: true },
          { content: 'Công việc văn phòng', isCorrect: false },
          { content: 'Công việc nhẹ nhàng', isCorrect: false },
        ],
      },
      {
        content: 'Thuế giá trị gia tăng (VAT) là loại thuế nào?',
        answers: [
          { content: 'Thuế trực thu', isCorrect: false },
          { content: 'Thuế gián thu, đánh vào giá trị tăng thêm của hàng hóa, dịch vụ', isCorrect: true },
          { content: 'Thuế tài sản', isCorrect: false },
          { content: 'Thuế thu nhập', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi trốn thuế bị xử lý như thế nào?',
        answers: [
          { content: 'Không bị xử lý', isCorrect: false },
          { content: 'Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự tùy mức độ', isCorrect: true },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
          { content: 'Chỉ bị phạt tiền nhẹ', isCorrect: false },
        ],
      },
      {
        content: 'Quyền sở hữu tài sản của công dân bao gồm những quyền nào?',
        answers: [
          { content: 'Quyền chiếm hữu, quyền sử dụng và quyền định đoạt', isCorrect: true },
          { content: 'Chỉ quyền sử dụng', isCorrect: false },
          { content: 'Chỉ quyền chiếm hữu', isCorrect: false },
          { content: 'Chỉ quyền định đoạt', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật bảo vệ quyền sở hữu tài sản của công dân bằng cách nào?',
        answers: [
          { content: 'Không bảo vệ', isCorrect: false },
          { content: 'Quy định các biện pháp xử lý đối với hành vi xâm phạm quyền sở hữu (trộm cắp, cướp, lừa đảo...)', isCorrect: true },
          { content: 'Chỉ bảo vệ tài sản nhà nước', isCorrect: false },
          { content: 'Chỉ bảo vệ tài sản của người giàu', isCorrect: false },
        ],
      },
      {
        content: 'Anh H mở cửa hàng kinh doanh nhưng không đăng ký kinh doanh. Anh H vi phạm quy định nào?',
        answers: [
          { content: 'Không vi phạm gì', isCorrect: false },
          { content: 'Vi phạm quy định về đăng ký kinh doanh', isCorrect: true },
          { content: 'Vi phạm quyền tự do cư trú', isCorrect: false },
          { content: 'Vi phạm quyền bầu cử', isCorrect: false },
        ],
      },
      {
        content: 'Chị K kinh doanh thực phẩm không rõ nguồn gốc. Hành vi này vi phạm quy định nào?',
        answers: [
          { content: 'Quy định về an toàn giao thông', isCorrect: false },
          { content: 'Quy định về an toàn vệ sinh thực phẩm và bảo vệ quyền lợi người tiêu dùng', isCorrect: true },
          { content: 'Quy định về bầu cử', isCorrect: false },
          { content: 'Quy định về tự do tín ngưỡng', isCorrect: false },
        ],
      },
      {
        content: 'Người sử dụng lao động có nghĩa vụ gì đối với người lao động?',
        answers: [
          { content: 'Không có nghĩa vụ gì', isCorrect: false },
          { content: 'Trả lương đầy đủ, đúng hạn; đóng bảo hiểm xã hội; bảo đảm điều kiện lao động an toàn', isCorrect: true },
          { content: 'Chỉ trả lương', isCorrect: false },
          { content: 'Chỉ cung cấp bữa ăn', isCorrect: false },
        ],
      },
      {
        content: 'Bảo hiểm xã hội có vai trò gì?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Bảo đảm thay thế hoặc bù đắp một phần thu nhập cho người lao động khi ốm đau, thai sản, tai nạn, hưu trí, thất nghiệp', isCorrect: true },
          { content: 'Chỉ dành cho cán bộ nhà nước', isCorrect: false },
          { content: 'Chỉ dành cho người giàu', isCorrect: false },
        ],
      },
      {
        content: 'Doanh nghiệp nào sau đây có tư cách pháp nhân?',
        answers: [
          { content: 'Doanh nghiệp tư nhân', isCorrect: false },
          { content: 'Công ty trách nhiệm hữu hạn', isCorrect: true },
          { content: 'Hộ kinh doanh cá thể', isCorrect: false },
          { content: 'Cá nhân kinh doanh nhỏ lẻ', isCorrect: false },
        ],
      },
      {
        content: 'Thuế thu nhập doanh nghiệp đánh vào đối tượng nào?',
        answers: [
          { content: 'Thu nhập cá nhân', isCorrect: false },
          { content: 'Thu nhập chịu thuế của doanh nghiệp', isCorrect: true },
          { content: 'Giá trị hàng hóa', isCorrect: false },
          { content: 'Tài sản cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Anh L làm việc tại công ty nhưng không được ký hợp đồng lao động. Quyền nào của anh L bị vi phạm?',
        answers: [
          { content: 'Quyền tự do tín ngưỡng', isCorrect: false },
          { content: 'Quyền được giao kết hợp đồng lao động', isCorrect: true },
          { content: 'Quyền bầu cử', isCorrect: false },
          { content: 'Quyền tự do cư trú', isCorrect: false },
        ],
      },
      {
        content: 'Công ty M nợ lương công nhân 3 tháng. Công nhân có quyền làm gì?',
        answers: [
          { content: 'Tự ý lấy tài sản công ty', isCorrect: false },
          { content: 'Khiếu nại, khởi kiện ra tòa án lao động để đòi quyền lợi', isCorrect: true },
          { content: 'Đập phá công ty', isCorrect: false },
          { content: 'Không có quyền gì', isCorrect: false },
        ],
      },
      {
        content: 'Pháp luật quy định mức lương tối thiểu nhằm mục đích gì?',
        answers: [
          { content: 'Hạn chế thu nhập của người lao động', isCorrect: false },
          { content: 'Bảo vệ quyền lợi tối thiểu của người lao động, đảm bảo mức sống cơ bản', isCorrect: true },
          { content: 'Tăng lợi nhuận cho doanh nghiệp', isCorrect: false },
          { content: 'Giảm số lượng lao động', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi sản xuất hàng giả bị xử lý như thế nào?',
        answers: [
          { content: 'Không bị xử lý', isCorrect: false },
          { content: 'Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự tùy mức độ', isCorrect: true },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
          { content: 'Chỉ bị tịch thu hàng hóa', isCorrect: false },
        ],
      },
      {
        content: 'Quyền tự do kinh doanh bị hạn chế trong trường hợp nào?',
        answers: [
          { content: 'Không bao giờ bị hạn chế', isCorrect: false },
          { content: 'Kinh doanh các ngành nghề mà pháp luật cấm (ma túy, mại dâm, vũ khí...)', isCorrect: true },
          { content: 'Kinh doanh thực phẩm', isCorrect: false },
          { content: 'Kinh doanh quần áo', isCorrect: false },
        ],
      },
      {
        content: 'Người lao động có quyền đơn phương chấm dứt hợp đồng lao động trong trường hợp nào?',
        answers: [
          { content: 'Bất cứ lúc nào mà không cần lý do', isCorrect: false },
          { content: 'Khi không được trả lương đầy đủ, đúng hạn; bị ngược đãi; hoặc theo quy định pháp luật', isCorrect: true },
          { content: 'Chỉ khi hết hợp đồng', isCorrect: false },
          { content: 'Không bao giờ được chấm dứt', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Đề thi thử tổng hợp - Vi phạm pháp luật, trách nhiệm pháp lý, tình huống thực tế
  // =============================================
  {
    categorySlug: 'on-thi-thpt-gdcd',
    title: 'Đề ôn thi THPT QG 2025 - GDCD - Đề số 5',
    slug: 'on-thi-thpt-gdcd-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn GDCD - Đề số 5. Đề thi thử tổng hợp: vi phạm pháp luật, trách nhiệm pháp lý, tình huống thực tế.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Anh N (20 tuổi) trộm cắp tài sản trị giá 50 triệu đồng. Anh N phải chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm hình sự', isCorrect: true },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
          { content: 'Trách nhiệm dân sự', isCorrect: false },
        ],
      },
      {
        content: 'Chị P lái xe máy không đội mũ bảo hiểm. Chị P phải chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm hành chính', isCorrect: true },
          { content: 'Trách nhiệm dân sự', isCorrect: false },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Anh Q không thực hiện đúng hợp đồng mua bán đã ký, gây thiệt hại cho đối tác. Anh Q phải chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm dân sự', isCorrect: true },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Cán bộ R thường xuyên đi làm muộn, không hoàn thành nhiệm vụ. Cán bộ R phải chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm dân sự', isCorrect: false },
          { content: 'Trách nhiệm kỷ luật', isCorrect: true },
        ],
      },
      {
        content: 'Anh S (17 tuổi) cố ý gây thương tích cho người khác với tỉ lệ thương tật 35%. Anh S có phải chịu trách nhiệm hình sự không?',
        answers: [
          { content: 'Không, vì chưa đủ 18 tuổi', isCorrect: false },
          { content: 'Có, vì đã đủ 14 tuổi và đây là tội phạm rất nghiêm trọng do cố ý', isCorrect: true },
          { content: 'Chỉ chịu trách nhiệm hành chính', isCorrect: false },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
        ],
      },
      {
        content: 'Bà T bán thực phẩm bẩn gây ngộ độc cho nhiều người. Bà T có thể bị truy cứu trách nhiệm gì?',
        answers: [
          { content: 'Chỉ bị phạt hành chính', isCorrect: false },
          { content: 'Trách nhiệm hình sự về tội vi phạm quy định về an toàn thực phẩm', isCorrect: true },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
          { content: 'Không bị xử lý', isCorrect: false },
        ],
      },
      {
        content: 'Ông U lái xe ô tô trong tình trạng say rượu gây tai nạn chết người. Ông U phải chịu trách nhiệm pháp lý nào?',
        answers: [
          { content: 'Chỉ trách nhiệm hành chính', isCorrect: false },
          { content: 'Trách nhiệm hình sự và trách nhiệm dân sự (bồi thường thiệt hại)', isCorrect: true },
          { content: 'Chỉ trách nhiệm dân sự', isCorrect: false },
          { content: 'Chỉ trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Chị V đăng thông tin sai sự thật trên mạng xã hội xúc phạm danh dự người khác. Chị V vi phạm quyền gì của người bị hại?',
        answers: [
          { content: 'Quyền tự do kinh doanh', isCorrect: false },
          { content: 'Quyền được bảo hộ về danh dự và nhân phẩm', isCorrect: true },
          { content: 'Quyền bầu cử', isCorrect: false },
          { content: 'Quyền tự do cư trú', isCorrect: false },
        ],
      },
      {
        content: 'Anh X (15 tuổi) đánh nhau gây thương tích nhẹ cho bạn. Anh X phải chịu trách nhiệm gì?',
        answers: [
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Trách nhiệm hành chính (xử phạt vi phạm hành chính)', isCorrect: true },
          { content: 'Không phải chịu trách nhiệm gì', isCorrect: false },
          { content: 'Trách nhiệm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Công ty Y xả thải chưa qua xử lý ra sông gây ô nhiễm. Công ty Y vi phạm pháp luật về lĩnh vực nào?',
        answers: [
          { content: 'Pháp luật lao động', isCorrect: false },
          { content: 'Pháp luật bảo vệ môi trường', isCorrect: true },
          { content: 'Pháp luật giao thông', isCorrect: false },
          { content: 'Pháp luật thuế', isCorrect: false },
        ],
      },
      {
        content: 'Người nào sau đây KHÔNG phải chịu trách nhiệm hình sự?',
        answers: [
          { content: 'Người đủ 16 tuổi phạm tội', isCorrect: false },
          { content: 'Người mắc bệnh tâm thần không có khả năng nhận thức và điều khiển hành vi', isCorrect: true },
          { content: 'Người đủ 18 tuổi phạm tội', isCorrect: false },
          { content: 'Người đủ 14 tuổi phạm tội rất nghiêm trọng do cố ý', isCorrect: false },
        ],
      },
      {
        content: 'Hình phạt nào sau đây là hình phạt chính trong luật hình sự?',
        answers: [
          { content: 'Phạt tiền (khi là hình phạt bổ sung)', isCorrect: false },
          { content: 'Tù có thời hạn', isCorrect: true },
          { content: 'Cấm đảm nhiệm chức vụ', isCorrect: false },
          { content: 'Tịch thu tài sản (khi là hình phạt bổ sung)', isCorrect: false },
        ],
      },
      {
        content: 'Anh Z nhặt được chiếc ví có 10 triệu đồng và giấy tờ tùy thân. Theo pháp luật, anh Z nên làm gì?',
        answers: [
          { content: 'Giữ lại làm của riêng', isCorrect: false },
          { content: 'Trả lại cho người mất hoặc giao nộp cho cơ quan có thẩm quyền', isCorrect: true },
          { content: 'Chia cho bạn bè', isCorrect: false },
          { content: 'Vứt đi', isCorrect: false },
        ],
      },
      {
        content: 'Bạn A1 (16 tuổi) bị bạn bè rủ rê sử dụng ma túy. Theo pháp luật, bạn A1 nên làm gì?',
        answers: [
          { content: 'Thử một lần cho biết', isCorrect: false },
          { content: 'Từ chối và báo cho người lớn hoặc cơ quan chức năng', isCorrect: true },
          { content: 'Đồng ý để không bị bạn bè xa lánh', isCorrect: false },
          { content: 'Giữ bí mật cho bạn', isCorrect: false },
        ],
      },
      {
        content: 'Ông B1 phát hiện cán bộ xã tham nhũng. Ông B1 nên thực hiện quyền gì?',
        answers: [
          { content: 'Quyền khiếu nại', isCorrect: false },
          { content: 'Quyền tố cáo', isCorrect: true },
          { content: 'Quyền bầu cử', isCorrect: false },
          { content: 'Tự xử lý', isCorrect: false },
        ],
      },
      {
        content: 'Chị C1 bị công ty cho nghỉ việc khi đang mang thai. Hành vi này vi phạm quy định nào?',
        answers: [
          { content: 'Quy định về giao thông', isCorrect: false },
          { content: 'Quy định về bảo vệ quyền lợi lao động nữ trong Bộ luật Lao động', isCorrect: true },
          { content: 'Quy định về thuế', isCorrect: false },
          { content: 'Quy định về bầu cử', isCorrect: false },
        ],
      },
      {
        content: 'Anh D1 sử dụng bằng lái xe giả. Anh D1 vi phạm pháp luật về lĩnh vực nào?',
        answers: [
          { content: 'Pháp luật dân sự', isCorrect: false },
          { content: 'Pháp luật hành chính (có thể bị truy cứu hình sự nếu nghiêm trọng)', isCorrect: true },
          { content: 'Pháp luật lao động', isCorrect: false },
          { content: 'Pháp luật thuế', isCorrect: false },
        ],
      },
      {
        content: 'Bạn E1 (17 tuổi) lấy trộm xe đạp của bạn cùng lớp. Bạn E1 phải chịu trách nhiệm gì?',
        answers: [
          { content: 'Không phải chịu trách nhiệm gì', isCorrect: false },
          { content: 'Trách nhiệm hành chính và bồi thường thiệt hại (cha mẹ chịu trách nhiệm bồi thường)', isCorrect: true },
          { content: 'Trách nhiệm hình sự', isCorrect: false },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
        ],
      },
      {
        content: 'Phòng vệ chính đáng là gì?',
        answers: [
          { content: 'Đánh trả người khác bất cứ lúc nào', isCorrect: false },
          { content: 'Hành vi chống trả lại một cách cần thiết người đang có hành vi xâm phạm lợi ích của Nhà nước, tổ chức, cá nhân', isCorrect: true },
          { content: 'Trả thù người đã gây hại cho mình', isCorrect: false },
          { content: 'Tự vệ bằng vũ khí', isCorrect: false },
        ],
      },
      {
        content: 'Tình thế cấp thiết là gì?',
        answers: [
          { content: 'Tình huống bình thường', isCorrect: false },
          { content: 'Tình thế của người vì muốn tránh gây thiệt hại cho lợi ích hợp pháp mà không còn cách nào khác là phải gây một thiệt hại nhỏ hơn', isCorrect: true },
          { content: 'Tình huống nguy hiểm do mình tạo ra', isCorrect: false },
          { content: 'Tình huống không liên quan đến pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Ông F1 bị hàng xóm xây nhà lấn sang đất của mình. Ông F1 nên giải quyết bằng cách nào?',
        answers: [
          { content: 'Tự ý phá dỡ phần xây lấn', isCorrect: false },
          { content: 'Thương lượng, hòa giải; nếu không được thì khởi kiện ra tòa án', isCorrect: true },
          { content: 'Đánh nhau với hàng xóm', isCorrect: false },
          { content: 'Bỏ qua không quan tâm', isCorrect: false },
        ],
      },
      {
        content: 'Chị G1 mua hàng online bị lừa đảo, nhận hàng không đúng mô tả. Chị G1 có quyền gì?',
        answers: [
          { content: 'Không có quyền gì', isCorrect: false },
          { content: 'Quyền khiếu nại, yêu cầu đổi trả, bồi thường; tố cáo nếu có dấu hiệu lừa đảo', isCorrect: true },
          { content: 'Chỉ được chấp nhận', isCorrect: false },
          { content: 'Chỉ được đăng lên mạng xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi bạo lực học đường vi phạm quyền gì của nạn nhân?',
        answers: [
          { content: 'Quyền tự do kinh doanh', isCorrect: false },
          { content: 'Quyền được bảo hộ về tính mạng, sức khỏe, danh dự, nhân phẩm', isCorrect: true },
          { content: 'Quyền bầu cử', isCorrect: false },
          { content: 'Quyền tự do tín ngưỡng', isCorrect: false },
        ],
      },
      {
        content: 'Anh H1 tung tin đồn thất thiệt về dịch bệnh trên mạng xã hội gây hoang mang dư luận. Anh H1 có thể bị xử lý như thế nào?',
        answers: [
          { content: 'Không bị xử lý vì có quyền tự do ngôn luận', isCorrect: false },
          { content: 'Bị xử phạt hành chính hoặc truy cứu trách nhiệm hình sự về tội đưa thông tin sai sự thật', isCorrect: true },
          { content: 'Chỉ bị nhắc nhở', isCorrect: false },
          { content: 'Chỉ bị khóa tài khoản mạng xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "pháp luật không có hiệu lực hồi tố" có nghĩa là gì?',
        answers: [
          { content: 'Pháp luật áp dụng cho mọi thời điểm', isCorrect: false },
          { content: 'Văn bản pháp luật không áp dụng đối với hành vi xảy ra trước ngày văn bản có hiệu lực, trừ trường hợp luật định', isCorrect: true },
          { content: 'Pháp luật chỉ áp dụng trong tương lai xa', isCorrect: false },
          { content: 'Pháp luật luôn áp dụng cho quá khứ', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
