import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Đối tượng và phương pháp - bản chất tâm lý, các trường phái tâm lý học
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-tam-ly-hoc-dai-cuong',
    title: 'Trắc nghiệm Tâm lý học đại cương - Đề số 1',
    slug: 'trac-nghiem-dh-tam-ly-hoc-de-1',
    description:
      'Đối tượng và phương pháp: bản chất tâm lý, các trường phái tâm lý học.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Đối tượng nghiên cứu của tâm lý học là gì?',
        answers: [
          { content: 'Các hiện tượng tâm lý với tư cách là hiện tượng tinh thần do thế giới khách quan tác động vào não người sinh ra', isCorrect: true },
          { content: 'Các hiện tượng sinh lý của não bộ', isCorrect: false },
          { content: 'Các hiện tượng xã hội', isCorrect: false },
          { content: 'Các hiện tượng tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Theo quan điểm duy vật biện chứng, bản chất của tâm lý người là:',
        answers: [
          { content: 'Sự phản ánh hiện thực khách quan vào não người thông qua chủ thể', isCorrect: true },
          { content: 'Do thần linh ban tặng', isCorrect: false },
          { content: 'Là thuộc tính bẩm sinh của con người', isCorrect: false },
          { content: 'Là sản phẩm thuần túy của não bộ', isCorrect: false },
        ],
      },
      {
        content: 'Tâm lý người mang tính chủ thể nghĩa là:',
        answers: [
          { content: 'Mỗi người phản ánh thế giới khách quan theo cách riêng, mang đặc điểm riêng của cá nhân', isCorrect: true },
          { content: 'Tâm lý do chủ thể tự tạo ra không cần tác động bên ngoài', isCorrect: false },
          { content: 'Tâm lý giống nhau ở mọi người', isCorrect: false },
          { content: 'Tâm lý không phụ thuộc vào thế giới khách quan', isCorrect: false },
        ],
      },
      {
        content: 'Trường phái phân tâm học do ai sáng lập?',
        answers: [
          { content: 'S. Freud', isCorrect: true },
          { content: 'J. Watson', isCorrect: false },
          { content: 'W. Wundt', isCorrect: false },
          { content: 'A. Maslow', isCorrect: false },
        ],
      },
      {
        content: 'Trường phái tâm lý học hành vi (Behaviorism) nhấn mạnh:',
        answers: [
          { content: 'Nghiên cứu hành vi quan sát được thông qua công thức S → R', isCorrect: true },
          { content: 'Nghiên cứu vô thức', isCorrect: false },
          { content: 'Nghiên cứu ý thức bằng phương pháp nội quan', isCorrect: false },
          { content: 'Nghiên cứu nhu cầu tự thực hiện hóa', isCorrect: false },
        ],
      },
      {
        content: 'Người sáng lập trường phái tâm lý học hành vi là:',
        answers: [
          { content: 'J. Watson', isCorrect: true },
          { content: 'S. Freud', isCorrect: false },
          { content: 'W. Wundt', isCorrect: false },
          { content: 'L.S. Vygotsky', isCorrect: false },
        ],
      },
      {
        content: 'Trường phái tâm lý học Gestalt nghiên cứu chủ yếu về:',
        answers: [
          { content: 'Các quy luật tổ chức tri giác và tính chỉnh thể của tâm lý', isCorrect: true },
          { content: 'Hành vi quan sát được', isCorrect: false },
          { content: 'Vô thức', isCorrect: false },
          { content: 'Phản xạ có điều kiện', isCorrect: false },
        ],
      },
      {
        content: 'Trường phái tâm lý học nhân văn do ai đề xướng?',
        answers: [
          { content: 'A. Maslow và C. Rogers', isCorrect: true },
          { content: 'S. Freud và C. Jung', isCorrect: false },
          { content: 'J. Watson và B.F. Skinner', isCorrect: false },
          { content: 'W. Wundt và E. Titchener', isCorrect: false },
        ],
      },
      {
        content: 'Tâm lý học hoạt động do các nhà tâm lý học nào phát triển?',
        answers: [
          { content: 'L.S. Vygotsky, A.N. Leontiev, S.L. Rubinstein', isCorrect: true },
          { content: 'S. Freud, C. Jung, A. Adler', isCorrect: false },
          { content: 'J. Watson, B.F. Skinner, E. Thorndike', isCorrect: false },
          { content: 'A. Maslow, C. Rogers, R. May', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp quan sát trong tâm lý học là:',
        answers: [
          { content: 'Tri giác có chủ đích các biểu hiện bên ngoài của tâm lý để rút ra kết luận về tâm lý bên trong', isCorrect: true },
          { content: 'Tự quan sát các trạng thái tâm lý của bản thân', isCorrect: false },
          { content: 'Tạo ra tình huống nhân tạo để nghiên cứu', isCorrect: false },
          { content: 'Dùng bảng hỏi để thu thập thông tin', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp thực nghiệm trong tâm lý học có đặc điểm:',
        answers: [
          { content: 'Chủ động tạo ra điều kiện để làm nảy sinh hiện tượng tâm lý cần nghiên cứu', isCorrect: true },
          { content: 'Chỉ quan sát tự nhiên không can thiệp', isCorrect: false },
          { content: 'Chỉ dùng bảng hỏi', isCorrect: false },
          { content: 'Chỉ phân tích sản phẩm hoạt động', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp trắc nghiệm (test) tâm lý là:',
        answers: [
          { content: 'Phép thử đã được chuẩn hóa dùng để đo lường các đặc điểm tâm lý', isCorrect: true },
          { content: 'Phương pháp quan sát tự nhiên', isCorrect: false },
          { content: 'Phương pháp phỏng vấn sâu', isCorrect: false },
          { content: 'Phương pháp thực nghiệm trong phòng thí nghiệm', isCorrect: false },
        ],
      },
      {
        content: 'W. Wundt được coi là người sáng lập:',
        answers: [
          { content: 'Phòng thí nghiệm tâm lý học đầu tiên trên thế giới (1879)', isCorrect: true },
          { content: 'Trường phái phân tâm học', isCorrect: false },
          { content: 'Trường phái tâm lý học hành vi', isCorrect: false },
          { content: 'Trường phái tâm lý học nhân văn', isCorrect: false },
        ],
      },
      {
        content: 'Theo S. Freud, cấu trúc nhân cách gồm ba tầng:',
        answers: [
          { content: 'Cái ấy (Id), cái tôi (Ego), cái siêu tôi (Superego)', isCorrect: true },
          { content: 'Ý thức, tiền ý thức, vô thức', isCorrect: false },
          { content: 'Nhận thức, tình cảm, ý chí', isCorrect: false },
          { content: 'Xu hướng, tính cách, năng lực', isCorrect: false },
        ],
      },
      {
        content: 'Tâm lý có chức năng nào sau đây?',
        answers: [
          { content: 'Định hướng, điều khiển, điều chỉnh hoạt động và hành vi', isCorrect: true },
          { content: 'Chỉ phản ánh thế giới khách quan', isCorrect: false },
          { content: 'Chỉ điều khiển hoạt động sinh lý', isCorrect: false },
          { content: 'Chỉ tạo ra cảm xúc', isCorrect: false },
        ],
      },
      {
        content: 'Ý thức là gì?',
        answers: [
          { content: 'Hình thức phản ánh tâm lý cao nhất chỉ có ở người, là sự phản ánh bằng ngôn ngữ', isCorrect: true },
          { content: 'Mọi hiện tượng tâm lý của con người', isCorrect: false },
          { content: 'Phản xạ có điều kiện', isCorrect: false },
          { content: 'Bản năng sinh tồn', isCorrect: false },
        ],
      },
      {
        content: 'Vô thức là:',
        answers: [
          { content: 'Những hiện tượng tâm lý xảy ra ngoài sự kiểm soát của ý thức', isCorrect: true },
          { content: 'Trạng thái ngủ', isCorrect: false },
          { content: 'Trạng thái hôn mê', isCorrect: false },
          { content: 'Không có tâm lý', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc quyết định luận duy vật trong tâm lý học khẳng định:',
        answers: [
          { content: 'Tâm lý có nguồn gốc từ thế giới khách quan, trong đó quan trọng nhất là môi trường xã hội', isCorrect: true },
          { content: 'Tâm lý do di truyền quyết định', isCorrect: false },
          { content: 'Tâm lý do thần linh quyết định', isCorrect: false },
          { content: 'Tâm lý tự phát sinh không cần nguyên nhân', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc thống nhất giữa tâm lý, ý thức và hoạt động khẳng định:',
        answers: [
          { content: 'Tâm lý, ý thức được hình thành, phát triển và thể hiện trong hoạt động', isCorrect: true },
          { content: 'Tâm lý và hoạt động là hai lĩnh vực tách biệt', isCorrect: false },
          { content: 'Ý thức quyết định hoạt động một chiều', isCorrect: false },
          { content: 'Hoạt động không ảnh hưởng đến tâm lý', isCorrect: false },
        ],
      },
      {
        content: 'Phản ánh tâm lý khác phản ánh cơ học, vật lý, hóa học ở chỗ:',
        answers: [
          { content: 'Tạo ra hình ảnh tinh thần (hình ảnh tâm lý) mang tính chủ thể', isCorrect: true },
          { content: 'Không cần vật chất tác động', isCorrect: false },
          { content: 'Xảy ra ở mọi vật chất', isCorrect: false },
          { content: 'Không có tính quy luật', isCorrect: false },
        ],
      },
      {
        content: 'Tâm lý người khác tâm lý động vật ở điểm cơ bản nào?',
        answers: [
          { content: 'Tâm lý người mang bản chất xã hội - lịch sử, có ý thức và ngôn ngữ', isCorrect: true },
          { content: 'Tâm lý người phức tạp hơn về mặt sinh lý', isCorrect: false },
          { content: 'Tâm lý người không có bản năng', isCorrect: false },
          { content: 'Tâm lý người không phụ thuộc vào não bộ', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp đàm thoại (phỏng vấn) trong tâm lý học là:',
        answers: [
          { content: 'Thu thập thông tin tâm lý thông qua giao tiếp trực tiếp theo mục đích nghiên cứu', isCorrect: true },
          { content: 'Quan sát hành vi của đối tượng', isCorrect: false },
          { content: 'Tạo tình huống thực nghiệm', isCorrect: false },
          { content: 'Phân tích sản phẩm hoạt động', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nghiên cứu sản phẩm hoạt động là:',
        answers: [
          { content: 'Phân tích kết quả hoạt động (bài viết, tranh vẽ, sản phẩm lao động) để tìm hiểu tâm lý', isCorrect: true },
          { content: 'Quan sát quá trình hoạt động', isCorrect: false },
          { content: 'Phỏng vấn về hoạt động', isCorrect: false },
          { content: 'Thực nghiệm trong phòng thí nghiệm', isCorrect: false },
        ],
      },
      {
        content: 'Tâm lý học nhận thức (Cognitive Psychology) tập trung nghiên cứu:',
        answers: [
          { content: 'Các quá trình nhận thức: tri giác, trí nhớ, tư duy, giải quyết vấn đề', isCorrect: true },
          { content: 'Hành vi quan sát được', isCorrect: false },
          { content: 'Vô thức và bản năng', isCorrect: false },
          { content: 'Nhu cầu tự thực hiện hóa', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp điều tra bằng bảng hỏi (anketa) trong tâm lý học là:',
        answers: [
          { content: 'Thu thập thông tin tâm lý từ nhiều người cùng lúc thông qua hệ thống câu hỏi đã chuẩn bị sẵn', isCorrect: true },
          { content: 'Quan sát hành vi trực tiếp', isCorrect: false },
          { content: 'Tạo tình huống thực nghiệm', isCorrect: false },
          { content: 'Phân tích sản phẩm hoạt động', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Nhận thức - cảm giác, tri giác, tư duy, tưởng tượng, trí nhớ, chú ý
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-tam-ly-hoc-dai-cuong',
    title: 'Trắc nghiệm Tâm lý học đại cương - Đề số 2',
    slug: 'trac-nghiem-dh-tam-ly-hoc-de-2',
    description:
      'Nhận thức: cảm giác, tri giác, tư duy, tưởng tượng, trí nhớ, chú ý.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Cảm giác là quá trình tâm lý phản ánh:',
        answers: [
          { content: 'Từng thuộc tính riêng lẻ của sự vật, hiện tượng khi chúng tác động trực tiếp vào giác quan', isCorrect: true },
          { content: 'Sự vật, hiện tượng một cách trọn vẹn', isCorrect: false },
          { content: 'Thuộc tính bản chất và quy luật của sự vật', isCorrect: false },
          { content: 'Hình ảnh mới chưa từng có trong kinh nghiệm', isCorrect: false },
        ],
      },
      {
        content: 'Tri giác là quá trình tâm lý phản ánh:',
        answers: [
          { content: 'Một cách trọn vẹn các thuộc tính bề ngoài của sự vật khi chúng tác động trực tiếp vào giác quan', isCorrect: true },
          { content: 'Từng thuộc tính riêng lẻ của sự vật', isCorrect: false },
          { content: 'Bản chất và quy luật của sự vật', isCorrect: false },
          { content: 'Hình ảnh mới trên cơ sở biểu tượng đã có', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật ngưỡng cảm giác cho biết:',
        answers: [
          { content: 'Cường độ kích thích tối thiểu để gây ra cảm giác và khả năng phân biệt sự khác nhau giữa các kích thích', isCorrect: true },
          { content: 'Cảm giác luôn tăng tỷ lệ thuận với cường độ kích thích', isCorrect: false },
          { content: 'Mọi kích thích đều gây ra cảm giác', isCorrect: false },
          { content: 'Cảm giác không phụ thuộc vào cường độ kích thích', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật thích ứng của cảm giác là:',
        answers: [
          { content: 'Độ nhạy cảm của cảm giác thay đổi cho phù hợp với cường độ kích thích', isCorrect: true },
          { content: 'Cảm giác luôn giữ nguyên không đổi', isCorrect: false },
          { content: 'Cảm giác chỉ xảy ra một lần', isCorrect: false },
          { content: 'Cảm giác không thể thay đổi', isCorrect: false },
        ],
      },
      {
        content: 'Tính có ý nghĩa của tri giác thể hiện ở:',
        answers: [
          { content: 'Khi tri giác, con người gọi tên được sự vật và xếp nó vào nhóm nhất định', isCorrect: true },
          { content: 'Tri giác phản ánh sự vật một cách trọn vẹn', isCorrect: false },
          { content: 'Tri giác phụ thuộc vào kinh nghiệm cá nhân', isCorrect: false },
          { content: 'Tri giác tách đối tượng ra khỏi bối cảnh', isCorrect: false },
        ],
      },
      {
        content: 'Tính trọn vẹn của tri giác thể hiện ở:',
        answers: [
          { content: 'Tri giác phản ánh sự vật như một chỉnh thể thống nhất, không phải từng thuộc tính rời rạc', isCorrect: true },
          { content: 'Tri giác luôn đúng', isCorrect: false },
          { content: 'Tri giác không phụ thuộc vào kinh nghiệm', isCorrect: false },
          { content: 'Tri giác chỉ phản ánh một thuộc tính', isCorrect: false },
        ],
      },
      {
        content: 'Tư duy là quá trình tâm lý phản ánh:',
        answers: [
          { content: 'Những thuộc tính bản chất, những mối liên hệ và quan hệ có tính quy luật của sự vật, hiện tượng một cách gián tiếp và khái quát', isCorrect: true },
          { content: 'Từng thuộc tính riêng lẻ của sự vật', isCorrect: false },
          { content: 'Sự vật một cách trọn vẹn khi tác động trực tiếp vào giác quan', isCorrect: false },
          { content: 'Hình ảnh mới chưa từng có', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nào sau đây KHÔNG phải là đặc điểm của tư duy?',
        answers: [
          { content: 'Tính trực tiếp', isCorrect: true },
          { content: 'Tính gián tiếp', isCorrect: false },
          { content: 'Tính khái quát', isCorrect: false },
          { content: 'Tính có vấn đề', isCorrect: false },
        ],
      },
      {
        content: 'Các thao tác tư duy cơ bản gồm:',
        answers: [
          { content: 'Phân tích, tổng hợp, so sánh, trừu tượng hóa, khái quát hóa', isCorrect: true },
          { content: 'Ghi nhớ, giữ gìn, tái hiện', isCorrect: false },
          { content: 'Cảm giác, tri giác, biểu tượng', isCorrect: false },
          { content: 'Liên tưởng, tưởng tượng, mơ mộng', isCorrect: false },
        ],
      },
      {
        content: 'Tưởng tượng là quá trình tâm lý:',
        answers: [
          { content: 'Tạo ra hình ảnh mới trên cơ sở các biểu tượng đã có trong kinh nghiệm', isCorrect: true },
          { content: 'Phản ánh thuộc tính bản chất của sự vật', isCorrect: false },
          { content: 'Ghi nhớ và tái hiện kinh nghiệm', isCorrect: false },
          { content: 'Phản ánh trực tiếp sự vật qua giác quan', isCorrect: false },
        ],
      },
      {
        content: 'Tưởng tượng tái tạo là:',
        answers: [
          { content: 'Tạo ra hình ảnh mới dựa trên sự mô tả của người khác hoặc tài liệu', isCorrect: true },
          { content: 'Tạo ra hình ảnh hoàn toàn mới không dựa trên mô tả nào', isCorrect: false },
          { content: 'Tưởng tượng trong giấc mơ', isCorrect: false },
          { content: 'Tưởng tượng không có chủ đích', isCorrect: false },
        ],
      },
      {
        content: 'Tưởng tượng sáng tạo là:',
        answers: [
          { content: 'Tạo ra hình ảnh mới một cách độc lập, không dựa trên mô tả có sẵn', isCorrect: true },
          { content: 'Tạo ra hình ảnh dựa trên mô tả của người khác', isCorrect: false },
          { content: 'Nhớ lại hình ảnh đã tri giác', isCorrect: false },
          { content: 'Tri giác sự vật trực tiếp', isCorrect: false },
        ],
      },
      {
        content: 'Trí nhớ là quá trình tâm lý:',
        answers: [
          { content: 'Ghi nhớ, giữ gìn và tái hiện lại những gì cá nhân đã trải qua', isCorrect: true },
          { content: 'Phản ánh thuộc tính bản chất của sự vật', isCorrect: false },
          { content: 'Tạo ra hình ảnh mới', isCorrect: false },
          { content: 'Phản ánh trực tiếp sự vật qua giác quan', isCorrect: false },
        ],
      },
      {
        content: 'Quên theo quy luật Ebbinghaus diễn ra như thế nào?',
        answers: [
          { content: 'Quên nhanh ở giai đoạn đầu, sau đó chậm dần', isCorrect: true },
          { content: 'Quên đều đặn theo thời gian', isCorrect: false },
          { content: 'Quên chậm ở giai đoạn đầu, sau đó nhanh dần', isCorrect: false },
          { content: 'Không quên nếu đã ghi nhớ', isCorrect: false },
        ],
      },
      {
        content: 'Ghi nhớ có chủ định là:',
        answers: [
          { content: 'Ghi nhớ có mục đích, có sử dụng phương pháp và nỗ lực ý chí', isCorrect: true },
          { content: 'Ghi nhớ tự động không cần nỗ lực', isCorrect: false },
          { content: 'Ghi nhớ trong giấc ngủ', isCorrect: false },
          { content: 'Ghi nhớ bằng cách lặp lại máy móc', isCorrect: false },
        ],
      },
      {
        content: 'Chú ý là gì?',
        answers: [
          { content: 'Sự tập trung của ý thức vào một hay một nhóm sự vật, hiện tượng để định hướng hoạt động', isCorrect: true },
          { content: 'Một quá trình nhận thức độc lập', isCorrect: false },
          { content: 'Một loại cảm giác đặc biệt', isCorrect: false },
          { content: 'Trạng thái cảm xúc', isCorrect: false },
        ],
      },
      {
        content: 'Chú ý không chủ định là:',
        answers: [
          { content: 'Chú ý không có mục đích đặt ra trước, không cần nỗ lực ý chí', isCorrect: true },
          { content: 'Chú ý có mục đích và nỗ lực ý chí', isCorrect: false },
          { content: 'Chú ý ban đầu có chủ định, sau trở thành tự động', isCorrect: false },
          { content: 'Không tập trung vào bất cứ điều gì', isCorrect: false },
        ],
      },
      {
        content: 'Chú ý có chủ định là:',
        answers: [
          { content: 'Chú ý có mục đích đặt ra trước và cần nỗ lực ý chí để duy trì', isCorrect: true },
          { content: 'Chú ý tự phát do kích thích mới lạ', isCorrect: false },
          { content: 'Chú ý không cần nỗ lực', isCorrect: false },
          { content: 'Chú ý trong giấc mơ', isCorrect: false },
        ],
      },
      {
        content: 'Tính bền vững của chú ý là:',
        answers: [
          { content: 'Khả năng duy trì chú ý vào đối tượng trong thời gian dài', isCorrect: true },
          { content: 'Khả năng chuyển chú ý từ đối tượng này sang đối tượng khác', isCorrect: false },
          { content: 'Khả năng chú ý đến nhiều đối tượng cùng lúc', isCorrect: false },
          { content: 'Mức độ tập trung cao vào một đối tượng', isCorrect: false },
        ],
      },
      {
        content: 'Sự phân phối chú ý là:',
        answers: [
          { content: 'Khả năng cùng lúc chú ý đến nhiều đối tượng hoặc nhiều hoạt động', isCorrect: true },
          { content: 'Khả năng duy trì chú ý lâu dài', isCorrect: false },
          { content: 'Khả năng chuyển chú ý nhanh', isCorrect: false },
          { content: 'Mức độ tập trung cao', isCorrect: false },
        ],
      },
      {
        content: 'Nhận thức cảm tính bao gồm:',
        answers: [
          { content: 'Cảm giác và tri giác', isCorrect: true },
          { content: 'Tư duy và tưởng tượng', isCorrect: false },
          { content: 'Trí nhớ và chú ý', isCorrect: false },
          { content: 'Tư duy và ngôn ngữ', isCorrect: false },
        ],
      },
      {
        content: 'Nhận thức lý tính bao gồm:',
        answers: [
          { content: 'Tư duy và tưởng tượng', isCorrect: true },
          { content: 'Cảm giác và tri giác', isCorrect: false },
          { content: 'Trí nhớ và chú ý', isCorrect: false },
          { content: 'Cảm giác và tư duy', isCorrect: false },
        ],
      },
      {
        content: 'Biểu tượng là:',
        answers: [
          { content: 'Hình ảnh của sự vật, hiện tượng được giữ lại trong ý thức sau khi sự vật không còn tác động trực tiếp', isCorrect: true },
          { content: 'Hình ảnh của sự vật khi đang tác động trực tiếp vào giác quan', isCorrect: false },
          { content: 'Khái niệm về sự vật', isCorrect: false },
          { content: 'Phán đoán về sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Tư duy trực quan hành động là loại tư duy:',
        answers: [
          { content: 'Giải quyết vấn đề bằng hành động thực tế với đồ vật', isCorrect: true },
          { content: 'Giải quyết vấn đề bằng hình ảnh', isCorrect: false },
          { content: 'Giải quyết vấn đề bằng khái niệm trừu tượng', isCorrect: false },
          { content: 'Giải quyết vấn đề bằng ngôn ngữ', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật tổng giác (apperception) của tri giác thể hiện ở:',
        answers: [
          { content: 'Tri giác phụ thuộc vào kinh nghiệm, vốn hiểu biết, thái độ, nhu cầu của chủ thể', isCorrect: true },
          { content: 'Tri giác không phụ thuộc vào chủ thể', isCorrect: false },
          { content: 'Tri giác luôn chính xác tuyệt đối', isCorrect: false },
          { content: 'Tri giác chỉ phụ thuộc vào đối tượng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Tình cảm và ý chí - xúc cảm, tình cảm, stress, ý chí, hành động ý chí
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-tam-ly-hoc-dai-cuong',
    title: 'Trắc nghiệm Tâm lý học đại cương - Đề số 3',
    slug: 'trac-nghiem-dh-tam-ly-hoc-de-3',
    description:
      'Tình cảm và ý chí: xúc cảm, tình cảm, stress, ý chí, hành động ý chí.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Xúc cảm là gì?',
        answers: [
          { content: 'Những rung động nhất thời, phản ánh thái độ của cá nhân đối với hiện thực trong tình huống cụ thể', isCorrect: true },
          { content: 'Thái độ ổn định, bền vững đối với sự vật, hiện tượng', isCorrect: false },
          { content: 'Quá trình nhận thức thế giới', isCorrect: false },
          { content: 'Quá trình điều khiển hành vi', isCorrect: false },
        ],
      },
      {
        content: 'Tình cảm khác xúc cảm ở điểm nào?',
        answers: [
          { content: 'Tình cảm ổn định, bền vững, khái quát hơn xúc cảm', isCorrect: true },
          { content: 'Tình cảm nhất thời hơn xúc cảm', isCorrect: false },
          { content: 'Tình cảm không liên quan đến nhận thức', isCorrect: false },
          { content: 'Tình cảm chỉ có ở động vật', isCorrect: false },
        ],
      },
      {
        content: 'Xúc động là:',
        answers: [
          { content: 'Xúc cảm mạnh, xảy ra trong thời gian ngắn, có thể làm mất khả năng tự chủ', isCorrect: true },
          { content: 'Trạng thái cảm xúc kéo dài, cường độ yếu', isCorrect: false },
          { content: 'Tình cảm ổn định', isCorrect: false },
          { content: 'Trạng thái căng thẳng tâm lý', isCorrect: false },
        ],
      },
      {
        content: 'Tâm trạng là:',
        answers: [
          { content: 'Trạng thái xúc cảm bao trùm, kéo dài, cường độ vừa phải, ảnh hưởng đến toàn bộ hoạt động', isCorrect: true },
          { content: 'Xúc cảm mạnh, ngắn hạn', isCorrect: false },
          { content: 'Tình cảm đạo đức', isCorrect: false },
          { content: 'Trạng thái căng thẳng cấp tính', isCorrect: false },
        ],
      },
      {
        content: 'Stress là:',
        answers: [
          { content: 'Trạng thái căng thẳng tâm lý xuất hiện khi con người phải đối mặt với tình huống khó khăn, đe dọa', isCorrect: true },
          { content: 'Trạng thái vui vẻ, phấn khởi', isCorrect: false },
          { content: 'Tình cảm đạo đức', isCorrect: false },
          { content: 'Quá trình nhận thức', isCorrect: false },
        ],
      },
      {
        content: 'Theo Hans Selye, hội chứng thích ứng chung (GAS) gồm mấy giai đoạn?',
        answers: [
          { content: 'Ba giai đoạn: báo động, kháng cự, kiệt sức', isCorrect: true },
          { content: 'Hai giai đoạn: căng thẳng và thư giãn', isCorrect: false },
          { content: 'Bốn giai đoạn: nhận biết, phản ứng, thích ứng, hồi phục', isCorrect: false },
          { content: 'Một giai đoạn duy nhất', isCorrect: false },
        ],
      },
      {
        content: 'Tình cảm đạo đức là:',
        answers: [
          { content: 'Tình cảm liên quan đến việc thỏa mãn hay không thỏa mãn nhu cầu đạo đức của con người', isCorrect: true },
          { content: 'Tình cảm liên quan đến cái đẹp', isCorrect: false },
          { content: 'Tình cảm liên quan đến hoạt động nhận thức', isCorrect: false },
          { content: 'Tình cảm liên quan đến bản năng sinh tồn', isCorrect: false },
        ],
      },
      {
        content: 'Tình cảm thẩm mỹ là:',
        answers: [
          { content: 'Tình cảm liên quan đến nhu cầu thưởng thức và sáng tạo cái đẹp', isCorrect: true },
          { content: 'Tình cảm liên quan đến đạo đức', isCorrect: false },
          { content: 'Tình cảm liên quan đến nhận thức khoa học', isCorrect: false },
          { content: 'Tình cảm liên quan đến lao động', isCorrect: false },
        ],
      },
      {
        content: 'Tình cảm trí tuệ là:',
        answers: [
          { content: 'Tình cảm nảy sinh trong quá trình hoạt động trí tuệ, nhận thức', isCorrect: true },
          { content: 'Tình cảm liên quan đến cái đẹp', isCorrect: false },
          { content: 'Tình cảm liên quan đến đạo đức', isCorrect: false },
          { content: 'Tình cảm liên quan đến bản năng', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật "lây lan" của tình cảm thể hiện ở:',
        answers: [
          { content: 'Tình cảm, xúc cảm của người này có thể truyền sang người khác', isCorrect: true },
          { content: 'Tình cảm luôn giữ nguyên cường độ', isCorrect: false },
          { content: 'Tình cảm đối lập triệt tiêu nhau', isCorrect: false },
          { content: 'Tình cảm chuyển từ đối tượng này sang đối tượng khác có liên quan', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật "thích ứng" của tình cảm thể hiện ở:',
        answers: [
          { content: 'Xúc cảm, tình cảm lặp đi lặp lại nhiều lần sẽ bị suy yếu (chai sạn)', isCorrect: true },
          { content: 'Tình cảm luôn tăng lên theo thời gian', isCorrect: false },
          { content: 'Tình cảm truyền từ người này sang người khác', isCorrect: false },
          { content: 'Tình cảm đối lập xuất hiện đồng thời', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật "tương phản" của tình cảm thể hiện ở:',
        answers: [
          { content: 'Sự xuất hiện hoặc suy yếu của một xúc cảm có thể làm tăng hoặc giảm xúc cảm khác xảy ra đồng thời hoặc nối tiếp', isCorrect: true },
          { content: 'Tình cảm luôn giống nhau', isCorrect: false },
          { content: 'Tình cảm truyền từ người này sang người khác', isCorrect: false },
          { content: 'Tình cảm bị chai sạn theo thời gian', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật "di chuyển" của tình cảm thể hiện ở:',
        answers: [
          { content: 'Tình cảm có thể chuyển từ đối tượng này sang đối tượng khác có liên quan', isCorrect: true },
          { content: 'Tình cảm truyền từ người này sang người khác', isCorrect: false },
          { content: 'Tình cảm bị suy yếu khi lặp lại', isCorrect: false },
          { content: 'Tình cảm đối lập triệt tiêu nhau', isCorrect: false },
        ],
      },
      {
        content: 'Ý chí là gì?',
        answers: [
          { content: 'Phẩm chất tâm lý cho phép con người điều khiển hành vi một cách có ý thức, vượt qua khó khăn để đạt mục đích', isCorrect: true },
          { content: 'Quá trình nhận thức thế giới', isCorrect: false },
          { content: 'Trạng thái cảm xúc mạnh', isCorrect: false },
          { content: 'Bản năng sinh tồn', isCorrect: false },
        ],
      },
      {
        content: 'Hành động ý chí có đặc điểm:',
        answers: [
          { content: 'Có mục đích tự giác, có sự nỗ lực khắc phục khó khăn', isCorrect: true },
          { content: 'Xảy ra tự động không cần ý thức', isCorrect: false },
          { content: 'Không có mục đích rõ ràng', isCorrect: false },
          { content: 'Chỉ do bản năng chi phối', isCorrect: false },
        ],
      },
      {
        content: 'Các giai đoạn của hành động ý chí gồm:',
        answers: [
          { content: 'Đặt mục đích, lập kế hoạch, thực hiện quyết định', isCorrect: true },
          { content: 'Cảm giác, tri giác, tư duy', isCorrect: false },
          { content: 'Ghi nhớ, giữ gìn, tái hiện', isCorrect: false },
          { content: 'Xúc cảm, tình cảm, tâm trạng', isCorrect: false },
        ],
      },
      {
        content: 'Tính mục đích là phẩm chất ý chí thể hiện ở:',
        answers: [
          { content: 'Khả năng đặt ra mục đích và hướng hoạt động vào việc đạt mục đích đó', isCorrect: true },
          { content: 'Khả năng kiềm chế hành vi không phù hợp', isCorrect: false },
          { content: 'Khả năng quyết định nhanh chóng', isCorrect: false },
          { content: 'Khả năng chịu đựng khó khăn', isCorrect: false },
        ],
      },
      {
        content: 'Tính tự chủ là phẩm chất ý chí thể hiện ở:',
        answers: [
          { content: 'Khả năng kiểm soát hành vi, kiềm chế những hành động không cần thiết', isCorrect: true },
          { content: 'Khả năng đặt mục đích', isCorrect: false },
          { content: 'Khả năng quyết định nhanh', isCorrect: false },
          { content: 'Khả năng kiên trì theo đuổi mục đích', isCorrect: false },
        ],
      },
      {
        content: 'Tính kiên trì là phẩm chất ý chí thể hiện ở:',
        answers: [
          { content: 'Khả năng theo đuổi mục đích đến cùng, vượt qua mọi khó khăn, trở ngại', isCorrect: true },
          { content: 'Khả năng quyết định nhanh chóng', isCorrect: false },
          { content: 'Khả năng kiềm chế cảm xúc', isCorrect: false },
          { content: 'Khả năng tự đặt mục đích', isCorrect: false },
        ],
      },
      {
        content: 'Tính quyết đoán là phẩm chất ý chí thể hiện ở:',
        answers: [
          { content: 'Khả năng đưa ra quyết định kịp thời, dứt khoát và thực hiện quyết định đó', isCorrect: true },
          { content: 'Khả năng kiên trì theo đuổi mục đích', isCorrect: false },
          { content: 'Khả năng kiềm chế hành vi', isCorrect: false },
          { content: 'Khả năng chịu đựng đau khổ', isCorrect: false },
        ],
      },
      {
        content: 'Đấu tranh động cơ trong hành động ý chí xảy ra khi:',
        answers: [
          { content: 'Có nhiều động cơ mâu thuẫn nhau, cá nhân phải lựa chọn', isCorrect: true },
          { content: 'Chỉ có một động cơ duy nhất', isCorrect: false },
          { content: 'Không có động cơ nào', isCorrect: false },
          { content: 'Hành động diễn ra tự động', isCorrect: false },
        ],
      },
      {
        content: 'Frustration (trạng thái hẫng hụt) xảy ra khi:',
        answers: [
          { content: 'Con người gặp trở ngại không thể vượt qua trên đường đạt mục đích, gây thất vọng, bực bội', isCorrect: true },
          { content: 'Con người đạt được mục đích', isCorrect: false },
          { content: 'Con người không có mục đích', isCorrect: false },
          { content: 'Con người đang ngủ', isCorrect: false },
        ],
      },
      {
        content: 'Cảm xúc cơ bản theo Paul Ekman gồm:',
        answers: [
          { content: 'Vui, buồn, giận, sợ, ngạc nhiên, ghê tởm', isCorrect: true },
          { content: 'Vui, buồn, yêu, ghét', isCorrect: false },
          { content: 'Hạnh phúc, đau khổ, lo lắng', isCorrect: false },
          { content: 'Tích cực và tiêu cực', isCorrect: false },
        ],
      },
      {
        content: 'Tình cảm có vai trò gì đối với nhận thức?',
        answers: [
          { content: 'Là động lực thúc đẩy hoặc kìm hãm quá trình nhận thức', isCorrect: true },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Luôn cản trở nhận thức', isCorrect: false },
          { content: 'Thay thế nhận thức', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật "pha trộn" của tình cảm thể hiện ở:',
        answers: [
          { content: 'Trong cùng một sự việc, con người có thể trải nghiệm đồng thời nhiều xúc cảm, tình cảm khác nhau, thậm chí đối lập', isCorrect: true },
          { content: 'Tình cảm luôn thuần nhất, không pha trộn', isCorrect: false },
          { content: 'Tình cảm truyền từ người này sang người khác', isCorrect: false },
          { content: 'Tình cảm bị chai sạn theo thời gian', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Nhân cách - khái niệm, cấu trúc, xu hướng, tính cách, khí chất, năng lực
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-tam-ly-hoc-dai-cuong',
    title: 'Trắc nghiệm Tâm lý học đại cương - Đề số 4',
    slug: 'trac-nghiem-dh-tam-ly-hoc-de-4',
    description:
      'Nhân cách: khái niệm, cấu trúc, xu hướng, tính cách, khí chất, năng lực.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Nhân cách là gì?',
        answers: [
          { content: 'Tổ hợp các thuộc tính tâm lý của cá nhân, biểu hiện bản sắc và giá trị xã hội của con người', isCorrect: true },
          { content: 'Tất cả các đặc điểm sinh lý của con người', isCorrect: false },
          { content: 'Chỉ bao gồm tính cách', isCorrect: false },
          { content: 'Chỉ bao gồm năng lực', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nào sau đây KHÔNG phải là đặc điểm của nhân cách?',
        answers: [
          { content: 'Tính bẩm sinh di truyền hoàn toàn', isCorrect: true },
          { content: 'Tính ổn định', isCorrect: false },
          { content: 'Tính thống nhất', isCorrect: false },
          { content: 'Tính tích cực', isCorrect: false },
        ],
      },
      {
        content: 'Cấu trúc nhân cách theo tâm lý học Việt Nam thường gồm bốn thuộc tính:',
        answers: [
          { content: 'Xu hướng, tính cách, khí chất, năng lực', isCorrect: true },
          { content: 'Nhận thức, tình cảm, ý chí, hành động', isCorrect: false },
          { content: 'Cảm giác, tri giác, tư duy, tưởng tượng', isCorrect: false },
          { content: 'Id, Ego, Superego, Self', isCorrect: false },
        ],
      },
      {
        content: 'Xu hướng nhân cách bao gồm:',
        answers: [
          { content: 'Nhu cầu, hứng thú, lý tưởng, thế giới quan, niềm tin', isCorrect: true },
          { content: 'Tính cách, khí chất, năng lực', isCorrect: false },
          { content: 'Cảm giác, tri giác, tư duy', isCorrect: false },
          { content: 'Xúc cảm, tình cảm, ý chí', isCorrect: false },
        ],
      },
      {
        content: 'Nhu cầu là gì?',
        answers: [
          { content: 'Trạng thái của cá nhân khi thiếu thốn một điều gì đó cần thiết cho sự tồn tại và phát triển', isCorrect: true },
          { content: 'Sở thích nhất thời', isCorrect: false },
          { content: 'Mong muốn không có cơ sở', isCorrect: false },
          { content: 'Thói quen hàng ngày', isCorrect: false },
        ],
      },
      {
        content: 'Theo tháp nhu cầu Maslow, nhu cầu nào ở bậc cao nhất?',
        answers: [
          { content: 'Nhu cầu tự thực hiện hóa (self-actualization)', isCorrect: true },
          { content: 'Nhu cầu an toàn', isCorrect: false },
          { content: 'Nhu cầu được tôn trọng', isCorrect: false },
          { content: 'Nhu cầu sinh lý', isCorrect: false },
        ],
      },
      {
        content: 'Hứng thú là gì?',
        answers: [
          { content: 'Thái độ đặc biệt của cá nhân đối với đối tượng, vừa có ý nghĩa trong đời sống vừa có khả năng mang lại khoái cảm', isCorrect: true },
          { content: 'Nhu cầu sinh lý cơ bản', isCorrect: false },
          { content: 'Trạng thái căng thẳng', isCorrect: false },
          { content: 'Phản xạ không điều kiện', isCorrect: false },
        ],
      },
      {
        content: 'Lý tưởng là gì?',
        answers: [
          { content: 'Mục tiêu cao đẹp, hình mẫu hoàn chỉnh mà cá nhân hướng tới', isCorrect: true },
          { content: 'Ước mơ viển vông', isCorrect: false },
          { content: 'Nhu cầu sinh lý', isCorrect: false },
          { content: 'Thói quen hàng ngày', isCorrect: false },
        ],
      },
      {
        content: 'Tính cách là gì?',
        answers: [
          { content: 'Tổ hợp các thuộc tính tâm lý ổn định của cá nhân, biểu hiện thái độ và hành vi ứng xử', isCorrect: true },
          { content: 'Kiểu hoạt động thần kinh bẩm sinh', isCorrect: false },
          { content: 'Năng lực trí tuệ', isCorrect: false },
          { content: 'Nhu cầu và hứng thú', isCorrect: false },
        ],
      },
      {
        content: 'Tính cách được hình thành chủ yếu do:',
        answers: [
          { content: 'Điều kiện sống, giáo dục và hoạt động của cá nhân', isCorrect: true },
          { content: 'Di truyền hoàn toàn', isCorrect: false },
          { content: 'Kiểu thần kinh bẩm sinh', isCorrect: false },
          { content: 'Yếu tố sinh lý thuần túy', isCorrect: false },
        ],
      },
      {
        content: 'Khí chất là gì?',
        answers: [
          { content: 'Thuộc tính tâm lý phức hợp biểu hiện cường độ, tốc độ, nhịp độ của hoạt động tâm lý, thể hiện sắc thái hành vi', isCorrect: true },
          { content: 'Thái độ đối với công việc', isCorrect: false },
          { content: 'Năng lực trí tuệ', isCorrect: false },
          { content: 'Nhu cầu và động cơ', isCorrect: false },
        ],
      },
      {
        content: 'Bốn kiểu khí chất cơ bản theo Hippocrates là:',
        answers: [
          { content: 'Hăng hái (sanguine), nóng nảy (choleric), bình thản (phlegmatic), ưu tư (melancholic)', isCorrect: true },
          { content: 'Hướng nội, hướng ngoại, lưỡng hướng, vô hướng', isCorrect: false },
          { content: 'Mạnh, yếu, nhanh, chậm', isCorrect: false },
          { content: 'Tích cực, tiêu cực, trung tính, hỗn hợp', isCorrect: false },
        ],
      },
      {
        content: 'Người có khí chất hăng hái (sanguine) có đặc điểm:',
        answers: [
          { content: 'Hoạt bát, vui vẻ, dễ thích nghi, nhưng tình cảm không sâu sắc', isCorrect: true },
          { content: 'Nóng nảy, dễ bùng nổ, khó kiềm chế', isCorrect: false },
          { content: 'Bình tĩnh, chậm chạp, kiên trì', isCorrect: false },
          { content: 'Nhạy cảm, hay lo lắng, dễ tổn thương', isCorrect: false },
        ],
      },
      {
        content: 'Người có khí chất nóng nảy (choleric) có đặc điểm:',
        answers: [
          { content: 'Mạnh mẽ, quyết đoán, dễ bùng nổ cảm xúc, khó kiềm chế', isCorrect: true },
          { content: 'Hoạt bát, vui vẻ, dễ thích nghi', isCorrect: false },
          { content: 'Bình tĩnh, chậm chạp, ít biểu lộ cảm xúc', isCorrect: false },
          { content: 'Nhạy cảm, hay lo lắng, thu mình', isCorrect: false },
        ],
      },
      {
        content: 'Người có khí chất bình thản (phlegmatic) có đặc điểm:',
        answers: [
          { content: 'Bình tĩnh, điềm đạm, kiên trì, ít biểu lộ cảm xúc ra bên ngoài', isCorrect: true },
          { content: 'Hoạt bát, vui vẻ, hay thay đổi', isCorrect: false },
          { content: 'Nóng nảy, dễ bùng nổ', isCorrect: false },
          { content: 'Nhạy cảm, dễ tổn thương', isCorrect: false },
        ],
      },
      {
        content: 'Người có khí chất ưu tư (melancholic) có đặc điểm:',
        answers: [
          { content: 'Nhạy cảm, sâu sắc, hay lo lắng, dễ tổn thương, thiên về nội tâm', isCorrect: true },
          { content: 'Hoạt bát, vui vẻ', isCorrect: false },
          { content: 'Nóng nảy, quyết đoán', isCorrect: false },
          { content: 'Bình tĩnh, chậm chạp', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực là gì?',
        answers: [
          { content: 'Tổ hợp các thuộc tính tâm lý đáp ứng yêu cầu của hoạt động và đảm bảo hoạt động đạt kết quả', isCorrect: true },
          { content: 'Kiến thức đã học được', isCorrect: false },
          { content: 'Kỹ năng thực hành', isCorrect: false },
          { content: 'Bằng cấp và chứng chỉ', isCorrect: false },
        ],
      },
      {
        content: 'Năng khiếu là gì?',
        answers: [
          { content: 'Tổ hợp các tư chất bẩm sinh tạo tiền đề thuận lợi cho sự phát triển năng lực', isCorrect: true },
          { content: 'Năng lực đã phát triển hoàn chỉnh', isCorrect: false },
          { content: 'Kỹ năng đã được rèn luyện', isCorrect: false },
          { content: 'Kiến thức chuyên môn', isCorrect: false },
        ],
      },
      {
        content: 'Tài năng là:',
        answers: [
          { content: 'Mức độ phát triển cao của năng lực, cho phép hoàn thành xuất sắc hoạt động sáng tạo', isCorrect: true },
          { content: 'Năng khiếu bẩm sinh', isCorrect: false },
          { content: 'Kiến thức sách vở', isCorrect: false },
          { content: 'Kinh nghiệm sống', isCorrect: false },
        ],
      },
      {
        content: 'Thiên tài là:',
        answers: [
          { content: 'Mức độ phát triển cao nhất của năng lực, tạo ra những giá trị có ý nghĩa lịch sử cho nhân loại', isCorrect: true },
          { content: 'Người có IQ cao', isCorrect: false },
          { content: 'Người có nhiều bằng cấp', isCorrect: false },
          { content: 'Người giàu có', isCorrect: false },
        ],
      },
      {
        content: 'Nhân cách được hình thành và phát triển thông qua:',
        answers: [
          { content: 'Hoạt động, giao tiếp, giáo dục và tự giáo dục', isCorrect: true },
          { content: 'Chỉ do di truyền', isCorrect: false },
          { content: 'Chỉ do môi trường tự nhiên', isCorrect: false },
          { content: 'Chỉ do giáo dục nhà trường', isCorrect: false },
        ],
      },
      {
        content: 'Tự ý thức là:',
        answers: [
          { content: 'Ý thức của cá nhân về bản thân mình: nhận thức, đánh giá, điều chỉnh bản thân', isCorrect: true },
          { content: 'Ý thức về thế giới bên ngoài', isCorrect: false },
          { content: 'Vô thức', isCorrect: false },
          { content: 'Bản năng sinh tồn', isCorrect: false },
        ],
      },
      {
        content: 'Thế giới quan là:',
        answers: [
          { content: 'Hệ thống quan điểm về tự nhiên, xã hội và bản thân, xác định phương hướng hoạt động của cá nhân', isCorrect: true },
          { content: 'Kiến thức về một lĩnh vực cụ thể', isCorrect: false },
          { content: 'Sở thích cá nhân', isCorrect: false },
          { content: 'Thói quen hàng ngày', isCorrect: false },
        ],
      },
      {
        content: 'Khí chất có cơ sở sinh lý là:',
        answers: [
          { content: 'Kiểu hoạt động thần kinh cấp cao (theo I.P. Pavlov)', isCorrect: true },
          { content: 'Cấu trúc não bộ', isCorrect: false },
          { content: 'Hệ thống nội tiết', isCorrect: false },
          { content: 'Hệ thống cơ xương', isCorrect: false },
        ],
      },
      {
        content: 'Động cơ là gì trong tâm lý học?',
        answers: [
          { content: 'Cái thúc đẩy con người hoạt động nhằm thỏa mãn nhu cầu, là nguyên nhân trực tiếp của hành vi', isCorrect: true },
          { content: 'Mục đích cuối cùng của hoạt động', isCorrect: false },
          { content: 'Phương tiện thực hiện hoạt động', isCorrect: false },
          { content: 'Kết quả của hoạt động', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Tổng hợp - hoạt động, giao tiếp, nhóm xã hội, phát triển tâm lý
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-tam-ly-hoc-dai-cuong',
    title: 'Trắc nghiệm Tâm lý học đại cương - Đề số 5',
    slug: 'trac-nghiem-dh-tam-ly-hoc-de-5',
    description:
      'Tổng hợp: hoạt động, giao tiếp, nhóm xã hội, phát triển tâm lý.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Hoạt động là gì theo tâm lý học?',
        answers: [
          { content: 'Quá trình tác động qua lại giữa con người với thế giới khách quan nhằm thỏa mãn nhu cầu', isCorrect: true },
          { content: 'Mọi cử động của cơ thể', isCorrect: false },
          { content: 'Chỉ là lao động chân tay', isCorrect: false },
          { content: 'Phản xạ sinh lý', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nào sau đây là đặc điểm của hoạt động?',
        answers: [
          { content: 'Tính đối tượng, tính chủ thể, tính mục đích, tính gián tiếp', isCorrect: true },
          { content: 'Tính tự phát, tính ngẫu nhiên', isCorrect: false },
          { content: 'Tính bản năng, tính di truyền', isCorrect: false },
          { content: 'Tính máy móc, tính lặp lại', isCorrect: false },
        ],
      },
      {
        content: 'Cấu trúc vĩ mô của hoạt động theo A.N. Leontiev gồm:',
        answers: [
          { content: 'Hoạt động - hành động - thao tác, tương ứng với động cơ - mục đích - phương tiện', isCorrect: true },
          { content: 'Nhận thức - tình cảm - ý chí', isCorrect: false },
          { content: 'Cảm giác - tri giác - tư duy', isCorrect: false },
          { content: 'Nhu cầu - hứng thú - lý tưởng', isCorrect: false },
        ],
      },
      {
        content: 'Động cơ hoạt động là:',
        answers: [
          { content: 'Đối tượng (vật chất hoặc tinh thần) thúc đẩy và hướng dẫn hoạt động nhằm thỏa mãn nhu cầu', isCorrect: true },
          { content: 'Mục đích cụ thể của hành động', isCorrect: false },
          { content: 'Phương tiện thực hiện hoạt động', isCorrect: false },
          { content: 'Kết quả của hoạt động', isCorrect: false },
        ],
      },
      {
        content: 'Các loại hoạt động cơ bản của con người gồm:',
        answers: [
          { content: 'Vui chơi, học tập, lao động', isCorrect: true },
          { content: 'Ăn, ngủ, nghỉ', isCorrect: false },
          { content: 'Đi, đứng, nằm, ngồi', isCorrect: false },
          { content: 'Nói, viết, đọc', isCorrect: false },
        ],
      },
      {
        content: 'Giao tiếp là gì?',
        answers: [
          { content: 'Quá trình tiếp xúc tâm lý giữa người với người nhằm trao đổi thông tin, cảm xúc, tác động qua lại', isCorrect: true },
          { content: 'Chỉ là quá trình truyền đạt thông tin', isCorrect: false },
          { content: 'Chỉ là quá trình nói chuyện', isCorrect: false },
          { content: 'Chỉ là quá trình viết thư', isCorrect: false },
        ],
      },
      {
        content: 'Các chức năng cơ bản của giao tiếp gồm:',
        answers: [
          { content: 'Chức năng thông tin, chức năng cảm xúc, chức năng nhận thức và đánh giá lẫn nhau, chức năng điều chỉnh hành vi', isCorrect: true },
          { content: 'Chỉ có chức năng truyền đạt thông tin', isCorrect: false },
          { content: 'Chỉ có chức năng giải trí', isCorrect: false },
          { content: 'Chỉ có chức năng kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Giao tiếp bằng ngôn ngữ thuộc loại:',
        answers: [
          { content: 'Giao tiếp ngôn ngữ (verbal communication)', isCorrect: true },
          { content: 'Giao tiếp phi ngôn ngữ', isCorrect: false },
          { content: 'Giao tiếp gián tiếp', isCorrect: false },
          { content: 'Giao tiếp nhóm', isCorrect: false },
        ],
      },
      {
        content: 'Giao tiếp phi ngôn ngữ bao gồm:',
        answers: [
          { content: 'Cử chỉ, nét mặt, ánh mắt, tư thế, khoảng cách, giọng nói', isCorrect: true },
          { content: 'Chỉ lời nói', isCorrect: false },
          { content: 'Chỉ chữ viết', isCorrect: false },
          { content: 'Chỉ email và tin nhắn', isCorrect: false },
        ],
      },
      {
        content: 'Nhóm xã hội là:',
        answers: [
          { content: 'Tập hợp người có mối quan hệ qua lại, có mục đích chung và hoạt động chung', isCorrect: true },
          { content: 'Bất kỳ tập hợp người nào', isCorrect: false },
          { content: 'Chỉ gia đình', isCorrect: false },
          { content: 'Chỉ tổ chức chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Nhóm nhỏ là nhóm có đặc điểm:',
        answers: [
          { content: 'Số lượng thành viên ít, có quan hệ trực tiếp, mặt đối mặt', isCorrect: true },
          { content: 'Số lượng thành viên rất lớn', isCorrect: false },
          { content: 'Không có quan hệ trực tiếp', isCorrect: false },
          { content: 'Không có mục đích chung', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng "áp lực nhóm" (conformity) là:',
        answers: [
          { content: 'Cá nhân thay đổi hành vi hoặc quan điểm để phù hợp với nhóm', isCorrect: true },
          { content: 'Cá nhân luôn chống đối nhóm', isCorrect: false },
          { content: 'Cá nhân rời khỏi nhóm', isCorrect: false },
          { content: 'Nhóm tan rã', isCorrect: false },
        ],
      },
      {
        content: 'Bầu không khí tâm lý nhóm là:',
        answers: [
          { content: 'Trạng thái tâm lý chung của nhóm, phản ánh mối quan hệ giữa các thành viên', isCorrect: true },
          { content: 'Nhiệt độ trong phòng làm việc', isCorrect: false },
          { content: 'Số lượng thành viên nhóm', isCorrect: false },
          { content: 'Quy mô hoạt động của nhóm', isCorrect: false },
        ],
      },
      {
        content: 'Ngôn ngữ có vai trò gì đối với tâm lý người?',
        answers: [
          { content: 'Là công cụ của tư duy, phương tiện giao tiếp, và điều kiện hình thành ý thức', isCorrect: true },
          { content: 'Chỉ là phương tiện giao tiếp', isCorrect: false },
          { content: 'Không có vai trò đặc biệt', isCorrect: false },
          { content: 'Chỉ dùng để biểu đạt cảm xúc', isCorrect: false },
        ],
      },
      {
        content: 'Hoạt động chủ đạo ở lứa tuổi mẫu giáo là:',
        answers: [
          { content: 'Vui chơi (đặc biệt là trò chơi đóng vai theo chủ đề)', isCorrect: true },
          { content: 'Học tập', isCorrect: false },
          { content: 'Lao động', isCorrect: false },
          { content: 'Giao tiếp bạn bè', isCorrect: false },
        ],
      },
      {
        content: 'Hoạt động chủ đạo ở lứa tuổi học sinh tiểu học là:',
        answers: [
          { content: 'Học tập', isCorrect: true },
          { content: 'Vui chơi', isCorrect: false },
          { content: 'Lao động', isCorrect: false },
          { content: 'Giao tiếp bạn bè thân mật', isCorrect: false },
        ],
      },
      {
        content: 'Hoạt động chủ đạo ở lứa tuổi thiếu niên (THCS) là:',
        answers: [
          { content: 'Giao tiếp bạn bè thân mật - cá nhân', isCorrect: true },
          { content: 'Vui chơi', isCorrect: false },
          { content: 'Học tập thuần túy', isCorrect: false },
          { content: 'Lao động sản xuất', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm "vùng phát triển gần nhất" (ZPD) của Vygotsky chỉ:',
        answers: [
          { content: 'Khoảng cách giữa trình độ hiện tại và trình độ có thể đạt được với sự giúp đỡ của người lớn', isCorrect: true },
          { content: 'Trình độ phát triển hiện tại của trẻ', isCorrect: false },
          { content: 'Trình độ phát triển tối đa của trẻ', isCorrect: false },
          { content: 'Khoảng cách giữa các lứa tuổi', isCorrect: false },
        ],
      },
      {
        content: 'Kỹ năng là gì?',
        answers: [
          { content: 'Khả năng vận dụng kiến thức vào thực tiễn một cách có ý thức', isCorrect: true },
          { content: 'Hành động đã trở thành tự động hóa', isCorrect: false },
          { content: 'Kiến thức lý thuyết', isCorrect: false },
          { content: 'Năng khiếu bẩm sinh', isCorrect: false },
        ],
      },
      {
        content: 'Kỹ xảo là gì?',
        answers: [
          { content: 'Hành động đã được tự động hóa nhờ luyện tập', isCorrect: true },
          { content: 'Khả năng vận dụng kiến thức có ý thức', isCorrect: false },
          { content: 'Kiến thức lý thuyết', isCorrect: false },
          { content: 'Năng lực sáng tạo', isCorrect: false },
        ],
      },
      {
        content: 'Thói quen khác kỹ xảo ở chỗ:',
        answers: [
          { content: 'Thói quen gắn với nhu cầu, trở thành nhu cầu của cá nhân', isCorrect: true },
          { content: 'Thói quen không cần luyện tập', isCorrect: false },
          { content: 'Thói quen luôn có ý thức', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Phong cách lãnh đạo dân chủ có đặc điểm:',
        answers: [
          { content: 'Lãnh đạo tôn trọng ý kiến tập thể, khuyến khích sự tham gia của mọi người', isCorrect: true },
          { content: 'Lãnh đạo quyết định mọi việc, không cần ý kiến tập thể', isCorrect: false },
          { content: 'Lãnh đạo không can thiệp, để mặc tập thể', isCorrect: false },
          { content: 'Lãnh đạo chỉ quan tâm đến kết quả, không quan tâm đến con người', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng "phân cực nhóm" (group polarization) là:',
        answers: [
          { content: 'Sau thảo luận nhóm, quan điểm của nhóm trở nên cực đoan hơn so với quan điểm ban đầu của từng cá nhân', isCorrect: true },
          { content: 'Nhóm chia thành hai phe đối lập', isCorrect: false },
          { content: 'Nhóm tan rã', isCorrect: false },
          { content: 'Các thành viên đều có quan điểm trung lập', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục có vai trò gì đối với sự phát triển nhân cách?',
        answers: [
          { content: 'Giữ vai trò chủ đạo trong sự hình thành và phát triển nhân cách', isCorrect: true },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Chỉ cung cấp kiến thức', isCorrect: false },
          { content: 'Chỉ rèn luyện thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Tập thể có vai trò gì đối với sự phát triển nhân cách?',
        answers: [
          { content: 'Là môi trường xã hội trực tiếp, nơi cá nhân giao tiếp, hoạt động và hình thành nhân cách', isCorrect: true },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Chỉ ảnh hưởng tiêu cực', isCorrect: false },
          { content: 'Chỉ ảnh hưởng đến thể chất', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
