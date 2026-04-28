import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Đối tượng và phương pháp - khái niệm giáo dục, chức năng xã hội, mục đích giáo dục
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-giao-duc-hoc-dai-cuong',
    title: 'Trắc nghiệm Giáo dục học đại cương - Đề số 1',
    slug: 'trac-nghiem-dh-giao-duc-hoc-de-1',
    description:
      'Đối tượng và phương pháp: khái niệm giáo dục, chức năng xã hội, mục đích giáo dục.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Giáo dục (theo nghĩa rộng) là gì?',
        answers: [
          { content: 'Quá trình truyền đạt và tiếp nhận kinh nghiệm lịch sử - xã hội giữa các thế hệ', isCorrect: true },
          { content: 'Chỉ là hoạt động dạy học trong nhà trường', isCorrect: false },
          { content: 'Chỉ là quá trình rèn luyện đạo đức', isCorrect: false },
          { content: 'Chỉ là quá trình truyền đạt kiến thức khoa học', isCorrect: false },
        ],
      },
      {
        content: 'Đối tượng nghiên cứu của giáo dục học là:',
        answers: [
          { content: 'Quá trình giáo dục (quá trình sư phạm) với tư cách là một quá trình xã hội đặc biệt', isCorrect: true },
          { content: 'Tâm lý con người', isCorrect: false },
          { content: 'Cấu trúc xã hội', isCorrect: false },
          { content: 'Lịch sử phát triển của loài người', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục có tính chất nào sau đây?',
        answers: [
          { content: 'Tính xã hội - lịch sử, tính giai cấp, tính nhân văn', isCorrect: true },
          { content: 'Chỉ có tính sinh học', isCorrect: false },
          { content: 'Chỉ có tính cá nhân', isCorrect: false },
          { content: 'Không có tính lịch sử', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng kinh tế - sản xuất của giáo dục thể hiện ở:',
        answers: [
          { content: 'Giáo dục đào tạo nguồn nhân lực cho nền kinh tế, tái sản xuất sức lao động xã hội', isCorrect: true },
          { content: 'Giáo dục truyền bá tư tưởng chính trị', isCorrect: false },
          { content: 'Giáo dục bảo tồn văn hóa', isCorrect: false },
          { content: 'Giáo dục phát triển thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng chính trị - xã hội của giáo dục thể hiện ở:',
        answers: [
          { content: 'Giáo dục tác động đến cấu trúc xã hội, hình thành ý thức xã hội, thúc đẩy dân chủ hóa', isCorrect: true },
          { content: 'Giáo dục chỉ đào tạo lao động', isCorrect: false },
          { content: 'Giáo dục chỉ truyền đạt kiến thức', isCorrect: false },
          { content: 'Giáo dục chỉ rèn luyện thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng văn hóa - tư tưởng của giáo dục thể hiện ở:',
        answers: [
          { content: 'Giáo dục bảo tồn, truyền bá và phát triển văn hóa, hình thành thế giới quan', isCorrect: true },
          { content: 'Giáo dục chỉ đào tạo nghề', isCorrect: false },
          { content: 'Giáo dục chỉ phát triển kinh tế', isCorrect: false },
          { content: 'Giáo dục chỉ rèn luyện kỹ năng', isCorrect: false },
        ],
      },
      {
        content: 'Mục đích giáo dục là gì?',
        answers: [
          { content: 'Mô hình nhân cách mà giáo dục cần đào tạo, phản ánh yêu cầu của xã hội', isCorrect: true },
          { content: 'Nội dung các môn học', isCorrect: false },
          { content: 'Phương pháp giảng dạy', isCorrect: false },
          { content: 'Cơ sở vật chất nhà trường', isCorrect: false },
        ],
      },
      {
        content: 'Mục đích giáo dục Việt Nam hiện nay hướng đến:',
        answers: [
          { content: 'Đào tạo con người phát triển toàn diện: đức, trí, thể, mỹ, có năng lực nghề nghiệp', isCorrect: true },
          { content: 'Chỉ đào tạo kiến thức chuyên môn', isCorrect: false },
          { content: 'Chỉ rèn luyện đạo đức', isCorrect: false },
          { content: 'Chỉ phát triển thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Các yếu tố ảnh hưởng đến sự phát triển nhân cách gồm:',
        answers: [
          { content: 'Di truyền, môi trường, giáo dục, hoạt động cá nhân', isCorrect: true },
          { content: 'Chỉ di truyền', isCorrect: false },
          { content: 'Chỉ môi trường', isCorrect: false },
          { content: 'Chỉ giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của di truyền đối với sự phát triển nhân cách là:',
        answers: [
          { content: 'Tạo tiền đề vật chất (tư chất) cho sự phát triển nhân cách', isCorrect: true },
          { content: 'Quyết định hoàn toàn nhân cách', isCorrect: false },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Quyết định tính cách', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của giáo dục đối với sự phát triển nhân cách là:',
        answers: [
          { content: 'Giữ vai trò chủ đạo, định hướng và tổ chức sự phát triển nhân cách', isCorrect: true },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Quyết định hoàn toàn nhân cách', isCorrect: false },
          { content: 'Chỉ cung cấp kiến thức', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của hoạt động cá nhân đối với sự phát triển nhân cách là:',
        answers: [
          { content: 'Là yếu tố quyết định trực tiếp sự hình thành và phát triển nhân cách', isCorrect: true },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Chỉ là yếu tố phụ', isCorrect: false },
          { content: 'Chỉ ảnh hưởng đến thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nghiên cứu giáo dục học bao gồm:',
        answers: [
          { content: 'Quan sát sư phạm, thực nghiệm sư phạm, điều tra giáo dục, nghiên cứu sản phẩm hoạt động', isCorrect: true },
          { content: 'Chỉ có phương pháp thực nghiệm', isCorrect: false },
          { content: 'Chỉ có phương pháp quan sát', isCorrect: false },
          { content: 'Chỉ có phương pháp điều tra', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục học là một ngành khoa học vì:',
        answers: [
          { content: 'Có đối tượng nghiên cứu riêng, có hệ thống khái niệm, quy luật và phương pháp nghiên cứu', isCorrect: true },
          { content: 'Vì được giảng dạy trong nhà trường', isCorrect: false },
          { content: 'Vì có nhiều người nghiên cứu', isCorrect: false },
          { content: 'Vì có lịch sử lâu đời', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục học có mối quan hệ mật thiết với ngành khoa học nào nhất?',
        answers: [
          { content: 'Tâm lý học', isCorrect: true },
          { content: 'Vật lý học', isCorrect: false },
          { content: 'Hóa học', isCorrect: false },
          { content: 'Thiên văn học', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên lý giáo dục "Học đi đôi với hành" có nghĩa:',
        answers: [
          { content: 'Kết hợp lý thuyết với thực tiễn, nhà trường gắn liền với xã hội', isCorrect: true },
          { content: 'Chỉ cần thực hành, không cần lý thuyết', isCorrect: false },
          { content: 'Chỉ cần lý thuyết, không cần thực hành', isCorrect: false },
          { content: 'Học và hành là hai việc tách biệt', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục theo nghĩa hẹp (giáo dục nhà trường) là:',
        answers: [
          { content: 'Hoạt động có mục đích, có kế hoạch, có tổ chức của nhà giáo dục tác động đến người được giáo dục', isCorrect: true },
          { content: 'Mọi tác động của xã hội đến con người', isCorrect: false },
          { content: 'Chỉ là quá trình tự học', isCorrect: false },
          { content: 'Chỉ là quá trình rèn luyện thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Tính nhân văn của giáo dục thể hiện ở:',
        answers: [
          { content: 'Giáo dục hướng đến phát triển con người, tôn trọng nhân phẩm và quyền con người', isCorrect: true },
          { content: 'Giáo dục chỉ phục vụ giai cấp thống trị', isCorrect: false },
          { content: 'Giáo dục chỉ nhằm mục đích kinh tế', isCorrect: false },
          { content: 'Giáo dục không quan tâm đến cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Các phạm trù cơ bản của giáo dục học gồm:',
        answers: [
          { content: 'Giáo dục, dạy học, giáo dưỡng (hình thành nhân cách)', isCorrect: true },
          { content: 'Chỉ có dạy học', isCorrect: false },
          { content: 'Chỉ có giáo dục đạo đức', isCorrect: false },
          { content: 'Chỉ có kiểm tra đánh giá', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục là hiện tượng xã hội đặc biệt vì:',
        answers: [
          { content: 'Chỉ có trong xã hội loài người, là điều kiện tồn tại và phát triển của xã hội', isCorrect: true },
          { content: 'Có ở mọi sinh vật', isCorrect: false },
          { content: 'Chỉ xuất hiện khi có nhà trường', isCorrect: false },
          { content: 'Chỉ tồn tại trong xã hội hiện đại', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục xuất hiện cùng với:',
        answers: [
          { content: 'Sự xuất hiện của xã hội loài người', isCorrect: true },
          { content: 'Sự xuất hiện của nhà trường', isCorrect: false },
          { content: 'Sự xuất hiện của chữ viết', isCorrect: false },
          { content: 'Sự xuất hiện của nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'J.A. Comenius (Komensky) được coi là:',
        answers: [
          { content: 'Ông tổ của nền giáo dục cận đại, tác giả "Khoa sư phạm vĩ đại"', isCorrect: true },
          { content: 'Người sáng lập tâm lý học', isCorrect: false },
          { content: 'Người sáng lập xã hội học', isCorrect: false },
          { content: 'Người sáng lập triết học giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Môi trường có vai trò gì đối với sự phát triển nhân cách?',
        answers: [
          { content: 'Là điều kiện, hoàn cảnh cho sự phát triển nhân cách, đặc biệt là môi trường xã hội', isCorrect: true },
          { content: 'Quyết định hoàn toàn nhân cách', isCorrect: false },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Chỉ ảnh hưởng đến thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Nhiệm vụ nghiên cứu của giáo dục học bao gồm:',
        answers: [
          { content: 'Nghiên cứu bản chất, quy luật của quá trình giáo dục; xây dựng lý luận và phương pháp giáo dục', isCorrect: true },
          { content: 'Chỉ nghiên cứu phương pháp dạy học', isCorrect: false },
          { content: 'Chỉ nghiên cứu tâm lý học sinh', isCorrect: false },
          { content: 'Chỉ nghiên cứu quản lý giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Tính giai cấp của giáo dục thể hiện ở:',
        answers: [
          { content: 'Giáo dục phục vụ lợi ích của giai cấp thống trị, phản ánh hệ tư tưởng của giai cấp cầm quyền', isCorrect: true },
          { content: 'Giáo dục không liên quan đến giai cấp', isCorrect: false },
          { content: 'Giáo dục chỉ dành cho giai cấp thống trị', isCorrect: false },
          { content: 'Giáo dục luôn trung lập về chính trị', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Quá trình dạy học - nguyên tắc, phương pháp, hình thức tổ chức dạy học
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-giao-duc-hoc-dai-cuong',
    title: 'Trắc nghiệm Giáo dục học đại cương - Đề số 2',
    slug: 'trac-nghiem-dh-giao-duc-hoc-de-2',
    description:
      'Quá trình dạy học: nguyên tắc, phương pháp, hình thức tổ chức dạy học.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quá trình dạy học là:',
        answers: [
          { content: 'Quá trình tương tác có mục đích giữa giáo viên và học sinh nhằm truyền đạt và lĩnh hội tri thức, kỹ năng, kỹ xảo', isCorrect: true },
          { content: 'Chỉ là quá trình giáo viên giảng bài', isCorrect: false },
          { content: 'Chỉ là quá trình học sinh tự học', isCorrect: false },
          { content: 'Chỉ là quá trình kiểm tra đánh giá', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất của quá trình dạy học là:',
        answers: [
          { content: 'Quá trình nhận thức độc đáo của học sinh dưới sự tổ chức, hướng dẫn của giáo viên', isCorrect: true },
          { content: 'Quá trình truyền đạt một chiều từ giáo viên', isCorrect: false },
          { content: 'Quá trình ghi nhớ máy móc', isCorrect: false },
          { content: 'Quá trình tự phát của học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Nhiệm vụ cơ bản của quá trình dạy học gồm:',
        answers: [
          { content: 'Giáo dưỡng (truyền đạt tri thức), phát triển (trí tuệ, năng lực), giáo dục (nhân cách)', isCorrect: true },
          { content: 'Chỉ truyền đạt kiến thức', isCorrect: false },
          { content: 'Chỉ rèn luyện kỹ năng', isCorrect: false },
          { content: 'Chỉ kiểm tra đánh giá', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc dạy học là:',
        answers: [
          { content: 'Những luận điểm cơ bản có tính quy luật, chỉ đạo việc tổ chức quá trình dạy học', isCorrect: true },
          { content: 'Phương pháp giảng dạy cụ thể', isCorrect: false },
          { content: 'Nội dung bài học', isCorrect: false },
          { content: 'Hình thức tổ chức lớp học', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo tính khoa học và tính vừa sức" yêu cầu:',
        answers: [
          { content: 'Nội dung dạy học phải chính xác, hiện đại và phù hợp với trình độ nhận thức của học sinh', isCorrect: true },
          { content: 'Chỉ dạy những gì dễ hiểu', isCorrect: false },
          { content: 'Chỉ dạy kiến thức hàn lâm', isCorrect: false },
          { content: 'Không cần quan tâm đến trình độ học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo tính trực quan" trong dạy học yêu cầu:',
        answers: [
          { content: 'Sử dụng phương tiện trực quan để học sinh tri giác trực tiếp đối tượng học tập', isCorrect: true },
          { content: 'Chỉ dùng lời nói để giảng dạy', isCorrect: false },
          { content: 'Chỉ cho học sinh đọc sách', isCorrect: false },
          { content: 'Không cần sử dụng đồ dùng dạy học', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "phát huy tính tích cực, tự giác, sáng tạo của học sinh" yêu cầu:',
        answers: [
          { content: 'Giáo viên tổ chức để học sinh chủ động, tích cực tham gia vào quá trình học tập', isCorrect: true },
          { content: 'Giáo viên làm mọi việc thay học sinh', isCorrect: false },
          { content: 'Học sinh chỉ nghe giảng thụ động', isCorrect: false },
          { content: 'Không cần sự hướng dẫn của giáo viên', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo tính hệ thống và liên tục" yêu cầu:',
        answers: [
          { content: 'Dạy học theo trình tự logic, từ đơn giản đến phức tạp, kiến thức mới dựa trên kiến thức cũ', isCorrect: true },
          { content: 'Dạy ngẫu nhiên, không cần trình tự', isCorrect: false },
          { content: 'Chỉ dạy kiến thức mới, không ôn tập', isCorrect: false },
          { content: 'Dạy từ phức tạp đến đơn giản', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo sự thống nhất giữa lý luận và thực tiễn" yêu cầu:',
        answers: [
          { content: 'Kết hợp giữa kiến thức lý thuyết với vận dụng vào thực tiễn cuộc sống', isCorrect: true },
          { content: 'Chỉ dạy lý thuyết', isCorrect: false },
          { content: 'Chỉ cho thực hành', isCorrect: false },
          { content: 'Lý thuyết và thực tiễn tách biệt', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp dạy học là:',
        answers: [
          { content: 'Cách thức hoạt động phối hợp giữa giáo viên và học sinh nhằm đạt mục tiêu dạy học', isCorrect: true },
          { content: 'Chỉ là cách giáo viên giảng bài', isCorrect: false },
          { content: 'Chỉ là cách học sinh học bài', isCorrect: false },
          { content: 'Chỉ là phương tiện dạy học', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp thuyết trình thuộc nhóm phương pháp:',
        answers: [
          { content: 'Phương pháp dùng lời', isCorrect: true },
          { content: 'Phương pháp trực quan', isCorrect: false },
          { content: 'Phương pháp thực hành', isCorrect: false },
          { content: 'Phương pháp kiểm tra', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp đàm thoại (vấn đáp) trong dạy học là:',
        answers: [
          { content: 'Giáo viên đặt câu hỏi, học sinh trả lời, qua đó lĩnh hội tri thức mới hoặc củng cố kiến thức', isCorrect: true },
          { content: 'Giáo viên giảng bài liên tục', isCorrect: false },
          { content: 'Học sinh tự đọc sách', isCorrect: false },
          { content: 'Học sinh làm thí nghiệm', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp dạy học nêu vấn đề (problem-based learning) có đặc điểm:',
        answers: [
          { content: 'Giáo viên tạo tình huống có vấn đề, học sinh tích cực tìm cách giải quyết', isCorrect: true },
          { content: 'Giáo viên giảng giải mọi vấn đề', isCorrect: false },
          { content: 'Học sinh chỉ ghi chép', isCorrect: false },
          { content: 'Không cần sự tham gia của học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp thảo luận nhóm trong dạy học có ưu điểm:',
        answers: [
          { content: 'Phát huy tính tích cực, chủ động, rèn kỹ năng giao tiếp và hợp tác', isCorrect: true },
          { content: 'Tiết kiệm thời gian nhất', isCorrect: false },
          { content: 'Không cần sự chuẩn bị của giáo viên', isCorrect: false },
          { content: 'Phù hợp với mọi nội dung', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức tổ chức dạy học cơ bản trong nhà trường hiện nay là:',
        answers: [
          { content: 'Hình thức lớp - bài (bài lên lớp)', isCorrect: true },
          { content: 'Hình thức dạy cá nhân', isCorrect: false },
          { content: 'Hình thức tham quan', isCorrect: false },
          { content: 'Hình thức ngoại khóa', isCorrect: false },
        ],
      },
      {
        content: 'Bài lên lớp hỗn hợp (kết hợp) thường gồm các bước:',
        answers: [
          { content: 'Ổn định, kiểm tra bài cũ, giảng bài mới, củng cố, dặn dò', isCorrect: true },
          { content: 'Chỉ giảng bài mới', isCorrect: false },
          { content: 'Chỉ kiểm tra bài cũ', isCorrect: false },
          { content: 'Chỉ làm bài tập', isCorrect: false },
        ],
      },
      {
        content: 'Kiểm tra đánh giá trong dạy học có chức năng:',
        answers: [
          { content: 'Xác nhận kết quả học tập, phát hiện lỗ hổng kiến thức, điều chỉnh quá trình dạy học', isCorrect: true },
          { content: 'Chỉ để xếp loại học sinh', isCorrect: false },
          { content: 'Chỉ để kỷ luật học sinh', isCorrect: false },
          { content: 'Chỉ để báo cáo lên cấp trên', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo tính cá biệt trong dạy học" yêu cầu:',
        answers: [
          { content: 'Quan tâm đến đặc điểm riêng của từng học sinh trong quá trình dạy học chung', isCorrect: true },
          { content: 'Dạy riêng từng học sinh', isCorrect: false },
          { content: 'Không cần quan tâm đến sự khác biệt', isCorrect: false },
          { content: 'Chỉ quan tâm đến học sinh giỏi', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung dạy học được quy định trong:',
        answers: [
          { content: 'Chương trình giáo dục, sách giáo khoa và tài liệu dạy học', isCorrect: true },
          { content: 'Chỉ trong sách giáo khoa', isCorrect: false },
          { content: 'Chỉ do giáo viên tự quyết định', isCorrect: false },
          { content: 'Chỉ do học sinh yêu cầu', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp trực quan trong dạy học bao gồm:',
        answers: [
          { content: 'Minh họa (tranh ảnh, mô hình) và trình bày (thí nghiệm, phim)', isCorrect: true },
          { content: 'Chỉ thuyết trình', isCorrect: false },
          { content: 'Chỉ đàm thoại', isCorrect: false },
          { content: 'Chỉ làm bài tập', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp thực hành trong dạy học bao gồm:',
        answers: [
          { content: 'Luyện tập, thí nghiệm, thực hành sản xuất', isCorrect: true },
          { content: 'Chỉ nghe giảng', isCorrect: false },
          { content: 'Chỉ đọc sách', isCorrect: false },
          { content: 'Chỉ xem phim', isCorrect: false },
        ],
      },
      {
        content: 'Động lực của quá trình dạy học là:',
        answers: [
          { content: 'Mâu thuẫn giữa yêu cầu học tập ngày càng cao với trình độ hiện có của học sinh', isCorrect: true },
          { content: 'Sự ép buộc của giáo viên', isCorrect: false },
          { content: 'Điểm số và phần thưởng', isCorrect: false },
          { content: 'Sự cạnh tranh giữa học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Dạy học phân hóa là:',
        answers: [
          { content: 'Tổ chức dạy học phù hợp với năng lực, nhu cầu, sở thích của từng nhóm hoặc từng học sinh', isCorrect: true },
          { content: 'Dạy giống nhau cho tất cả học sinh', isCorrect: false },
          { content: 'Chỉ dạy học sinh giỏi', isCorrect: false },
          { content: 'Chỉ dạy học sinh yếu', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo tính vững chắc của tri thức" yêu cầu:',
        answers: [
          { content: 'Học sinh phải nắm vững, nhớ lâu và vận dụng được kiến thức đã học', isCorrect: true },
          { content: 'Chỉ cần học thuộc lòng', isCorrect: false },
          { content: 'Không cần ôn tập', isCorrect: false },
          { content: 'Chỉ cần hiểu, không cần nhớ', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp dạy học theo nhóm nhỏ có đặc điểm:',
        answers: [
          { content: 'Chia lớp thành nhóm nhỏ, mỗi nhóm thảo luận và giải quyết nhiệm vụ học tập', isCorrect: true },
          { content: 'Giáo viên giảng cho từng học sinh', isCorrect: false },
          { content: 'Cả lớp cùng nghe giảng', isCorrect: false },
          { content: 'Học sinh tự học không cần nhóm', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Quá trình giáo dục - nguyên tắc, phương pháp, nội dung giáo dục đạo đức
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-giao-duc-hoc-dai-cuong',
    title: 'Trắc nghiệm Giáo dục học đại cương - Đề số 3',
    slug: 'trac-nghiem-dh-giao-duc-hoc-de-3',
    description:
      'Quá trình giáo dục: nguyên tắc, phương pháp, nội dung giáo dục đạo đức.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quá trình giáo dục (theo nghĩa hẹp) là:',
        answers: [
          { content: 'Quá trình hình thành phẩm chất đạo đức, thái độ, hành vi, thói quen cho người được giáo dục', isCorrect: true },
          { content: 'Quá trình truyền đạt kiến thức khoa học', isCorrect: false },
          { content: 'Quá trình rèn luyện kỹ năng nghề nghiệp', isCorrect: false },
          { content: 'Quá trình kiểm tra đánh giá', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nào sau đây là đặc điểm của quá trình giáo dục?',
        answers: [
          { content: 'Tính lâu dài, phức tạp, đa dạng, mang tính cụ thể', isCorrect: true },
          { content: 'Đơn giản, ngắn hạn', isCorrect: false },
          { content: 'Chỉ diễn ra trong nhà trường', isCorrect: false },
          { content: 'Không cần sự tham gia của học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "tôn trọng nhân cách học sinh kết hợp với yêu cầu hợp lý" yêu cầu:',
        answers: [
          { content: 'Tin tưởng, tôn trọng học sinh đồng thời đặt ra yêu cầu phù hợp để phát triển', isCorrect: true },
          { content: 'Chỉ tôn trọng, không đặt yêu cầu', isCorrect: false },
          { content: 'Chỉ đặt yêu cầu, không cần tôn trọng', isCorrect: false },
          { content: 'Để học sinh tự do hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "giáo dục trong tập thể và bằng tập thể" do ai đề xuất?',
        answers: [
          { content: 'A.S. Makarenko', isCorrect: true },
          { content: 'J.A. Comenius', isCorrect: false },
          { content: 'J.J. Rousseau', isCorrect: false },
          { content: 'J. Dewey', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "phát huy ưu điểm, khắc phục nhược điểm" trong giáo dục yêu cầu:',
        answers: [
          { content: 'Nhìn nhận mặt tích cực của học sinh, dựa vào đó để khắc phục mặt tiêu cực', isCorrect: true },
          { content: 'Chỉ phê bình nhược điểm', isCorrect: false },
          { content: 'Chỉ khen ngợi ưu điểm', isCorrect: false },
          { content: 'Bỏ qua mọi nhược điểm', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "thống nhất giữa giáo dục nhà trường, gia đình và xã hội" yêu cầu:',
        answers: [
          { content: 'Ba lực lượng giáo dục phối hợp thống nhất về mục tiêu, nội dung, phương pháp', isCorrect: true },
          { content: 'Chỉ nhà trường chịu trách nhiệm giáo dục', isCorrect: false },
          { content: 'Chỉ gia đình chịu trách nhiệm', isCorrect: false },
          { content: 'Ba lực lượng hoạt động độc lập', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "giáo dục phù hợp với đặc điểm lứa tuổi và cá nhân" yêu cầu:',
        answers: [
          { content: 'Nội dung và phương pháp giáo dục phải phù hợp với đặc điểm tâm sinh lý lứa tuổi và cá nhân', isCorrect: true },
          { content: 'Giáo dục giống nhau cho mọi lứa tuổi', isCorrect: false },
          { content: 'Không cần quan tâm đến lứa tuổi', isCorrect: false },
          { content: 'Chỉ giáo dục người lớn', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp giáo dục thuyết phục là:',
        answers: [
          { content: 'Dùng lời nói hoặc hành động mẫu để tác động vào nhận thức, tình cảm, ý chí của học sinh', isCorrect: true },
          { content: 'Dùng hình phạt để buộc học sinh tuân theo', isCorrect: false },
          { content: 'Dùng phần thưởng vật chất', isCorrect: false },
          { content: 'Để học sinh tự quyết định mọi việc', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nêu gương trong giáo dục là:',
        answers: [
          { content: 'Dùng hình mẫu tốt đẹp để học sinh noi theo, hình thành phẩm chất đạo đức', isCorrect: true },
          { content: 'Dùng hình phạt', isCorrect: false },
          { content: 'Dùng lời giảng giải', isCorrect: false },
          { content: 'Dùng bài tập thực hành', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp rèn luyện (tập luyện) trong giáo dục là:',
        answers: [
          { content: 'Tổ chức cho học sinh thực hiện các hành vi, hành động lặp đi lặp lại để hình thành thói quen', isCorrect: true },
          { content: 'Giảng giải lý thuyết đạo đức', isCorrect: false },
          { content: 'Nêu gương người tốt', isCorrect: false },
          { content: 'Khen thưởng và kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp khen thưởng trong giáo dục có tác dụng:',
        answers: [
          { content: 'Khẳng định hành vi đúng, tạo động lực tích cực, khuyến khích học sinh tiếp tục phấn đấu', isCorrect: true },
          { content: 'Làm học sinh kiêu ngạo', isCorrect: false },
          { content: 'Không có tác dụng gì', isCorrect: false },
          { content: 'Chỉ có tác dụng với học sinh giỏi', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp trách phạt trong giáo dục cần:',
        answers: [
          { content: 'Công bằng, đúng mức, tôn trọng nhân phẩm, nhằm giúp học sinh nhận ra lỗi và sửa chữa', isCorrect: true },
          { content: 'Trừng phạt nặng để răn đe', isCorrect: false },
          { content: 'Xúc phạm nhân phẩm học sinh', isCorrect: false },
          { content: 'Trách phạt trước đám đông', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung giáo dục đạo đức bao gồm:',
        answers: [
          { content: 'Giáo dục ý thức đạo đức, tình cảm đạo đức, hành vi và thói quen đạo đức', isCorrect: true },
          { content: 'Chỉ giáo dục kiến thức đạo đức', isCorrect: false },
          { content: 'Chỉ rèn luyện hành vi', isCorrect: false },
          { content: 'Chỉ giáo dục tình cảm', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục thể chất nhằm:',
        answers: [
          { content: 'Phát triển thể lực, rèn luyện sức khỏe, hình thành kỹ năng vận động', isCorrect: true },
          { content: 'Chỉ đào tạo vận động viên', isCorrect: false },
          { content: 'Chỉ giảm cân', isCorrect: false },
          { content: 'Chỉ giải trí', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục thẩm mỹ nhằm:',
        answers: [
          { content: 'Hình thành năng lực cảm thụ, đánh giá và sáng tạo cái đẹp', isCorrect: true },
          { content: 'Chỉ dạy vẽ và hát', isCorrect: false },
          { content: 'Chỉ trang trí lớp học', isCorrect: false },
          { content: 'Chỉ dành cho học sinh có năng khiếu', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục lao động nhằm:',
        answers: [
          { content: 'Hình thành thái độ đúng đắn với lao động, rèn kỹ năng lao động, hướng nghiệp', isCorrect: true },
          { content: 'Bắt học sinh lao động nặng nhọc', isCorrect: false },
          { content: 'Chỉ dạy nghề', isCorrect: false },
          { content: 'Thay thế hoạt động học tập', isCorrect: false },
        ],
      },
      {
        content: 'Tự giáo dục là:',
        answers: [
          { content: 'Hoạt động có ý thức, có mục đích của cá nhân nhằm tự hoàn thiện nhân cách', isCorrect: true },
          { content: 'Giáo dục do nhà trường thực hiện', isCorrect: false },
          { content: 'Giáo dục do gia đình thực hiện', isCorrect: false },
          { content: 'Giáo dục do xã hội thực hiện', isCorrect: false },
        ],
      },
      {
        content: 'Động lực của quá trình giáo dục là:',
        answers: [
          { content: 'Mâu thuẫn giữa yêu cầu giáo dục ngày càng cao với trình độ phát triển hiện có của học sinh', isCorrect: true },
          { content: 'Sự ép buộc của giáo viên', isCorrect: false },
          { content: 'Phần thưởng vật chất', isCorrect: false },
          { content: 'Sự cạnh tranh giữa học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "đảm bảo tính toàn vẹn của quá trình giáo dục" yêu cầu:',
        answers: [
          { content: 'Giáo dục phải tác động đồng bộ đến nhận thức, tình cảm, ý chí và hành vi', isCorrect: true },
          { content: 'Chỉ tác động đến nhận thức', isCorrect: false },
          { content: 'Chỉ tác động đến hành vi', isCorrect: false },
          { content: 'Chỉ tác động đến tình cảm', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp giáo dục bằng hoạt động thực tiễn bao gồm:',
        answers: [
          { content: 'Giao việc, rèn luyện, tạo tình huống giáo dục', isCorrect: true },
          { content: 'Chỉ giảng giải lý thuyết', isCorrect: false },
          { content: 'Chỉ nêu gương', isCorrect: false },
          { content: 'Chỉ khen thưởng', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục ý thức đạo đức là:',
        answers: [
          { content: 'Giúp học sinh hiểu biết các chuẩn mực, quy tắc đạo đức của xã hội', isCorrect: true },
          { content: 'Bắt học sinh thuộc lòng các quy tắc', isCorrect: false },
          { content: 'Trừng phạt khi vi phạm đạo đức', isCorrect: false },
          { content: 'Chỉ nêu gương', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi đạo đức là:',
        answers: [
          { content: 'Hành động tự giác, có mục đích phù hợp với chuẩn mực đạo đức xã hội', isCorrect: true },
          { content: 'Mọi hành động của con người', isCorrect: false },
          { content: 'Hành động do bị ép buộc', isCorrect: false },
          { content: 'Hành động theo bản năng', isCorrect: false },
        ],
      },
      {
        content: 'Thói quen đạo đức là:',
        answers: [
          { content: 'Hành vi đạo đức đã trở thành nhu cầu, được thực hiện tự động trong tình huống tương ứng', isCorrect: true },
          { content: 'Hành vi bị ép buộc', isCorrect: false },
          { content: 'Kiến thức về đạo đức', isCorrect: false },
          { content: 'Tình cảm đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc "giáo dục trong lao động" yêu cầu:',
        answers: [
          { content: 'Kết hợp giáo dục với lao động sản xuất, hình thành thái độ yêu lao động', isCorrect: true },
          { content: 'Bắt học sinh lao động thay cho học tập', isCorrect: false },
          { content: 'Chỉ giáo dục lý thuyết về lao động', isCorrect: false },
          { content: 'Không cần lao động trong giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Tình cảm đạo đức được hình thành thông qua:',
        answers: [
          { content: 'Trải nghiệm thực tế, giáo dục, giao tiếp và hoạt động trong tập thể', isCorrect: true },
          { content: 'Chỉ qua đọc sách', isCorrect: false },
          { content: 'Chỉ qua nghe giảng', isCorrect: false },
          { content: 'Di truyền từ cha mẹ', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Người giáo viên và quản lý giáo dục - vai trò, phẩm chất, năng lực, đổi mới GD
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-giao-duc-hoc-dai-cuong',
    title: 'Trắc nghiệm Giáo dục học đại cương - Đề số 4',
    slug: 'trac-nghiem-dh-giao-duc-hoc-de-4',
    description:
      'Người giáo viên và quản lý giáo dục: vai trò, phẩm chất, năng lực, đổi mới GD.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Vai trò chủ đạo của giáo viên trong quá trình dạy học thể hiện ở:',
        answers: [
          { content: 'Tổ chức, hướng dẫn, điều khiển hoạt động nhận thức của học sinh', isCorrect: true },
          { content: 'Làm mọi việc thay học sinh', isCorrect: false },
          { content: 'Chỉ truyền đạt kiến thức một chiều', isCorrect: false },
          { content: 'Để học sinh tự do hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Phẩm chất đạo đức nghề nghiệp quan trọng nhất của giáo viên là:',
        answers: [
          { content: 'Lòng yêu nghề, yêu thương học sinh, có trách nhiệm với nghề', isCorrect: true },
          { content: 'Có bằng cấp cao', isCorrect: false },
          { content: 'Có ngoại hình đẹp', isCorrect: false },
          { content: 'Có thu nhập cao', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực sư phạm của giáo viên bao gồm:',
        answers: [
          { content: 'Năng lực dạy học, năng lực giáo dục, năng lực tổ chức, năng lực giao tiếp sư phạm', isCorrect: true },
          { content: 'Chỉ năng lực chuyên môn', isCorrect: false },
          { content: 'Chỉ năng lực quản lý', isCorrect: false },
          { content: 'Chỉ năng lực nghiên cứu', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực dạy học của giáo viên bao gồm:',
        answers: [
          { content: 'Hiểu biết chuyên môn sâu, biết truyền đạt dễ hiểu, biết tổ chức hoạt động học tập', isCorrect: true },
          { content: 'Chỉ cần biết nhiều kiến thức', isCorrect: false },
          { content: 'Chỉ cần nói to, rõ ràng', isCorrect: false },
          { content: 'Chỉ cần viết bảng đẹp', isCorrect: false },
        ],
      },
      {
        content: 'Giao tiếp sư phạm là:',
        answers: [
          { content: 'Giao tiếp có mục đích giáo dục giữa giáo viên và học sinh trong quá trình dạy học và giáo dục', isCorrect: true },
          { content: 'Mọi cuộc trò chuyện giữa giáo viên và học sinh', isCorrect: false },
          { content: 'Chỉ là việc giáo viên giảng bài', isCorrect: false },
          { content: 'Chỉ là việc giáo viên phê bình học sinh', isCorrect: false },
        ],
      },
      {
        content: 'Tình huống sư phạm là:',
        answers: [
          { content: 'Tình huống có vấn đề nảy sinh trong quá trình giáo dục, đòi hỏi giáo viên phải giải quyết', isCorrect: true },
          { content: 'Mọi tình huống trong cuộc sống', isCorrect: false },
          { content: 'Chỉ tình huống trong giờ học', isCorrect: false },
          { content: 'Chỉ tình huống vi phạm kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Uy tín của giáo viên được xây dựng trên cơ sở:',
        answers: [
          { content: 'Phẩm chất đạo đức, năng lực chuyên môn, phong cách sư phạm', isCorrect: true },
          { content: 'Chức vụ và quyền lực', isCorrect: false },
          { content: 'Sự nghiêm khắc và trừng phạt', isCorrect: false },
          { content: 'Tuổi tác và thâm niên', isCorrect: false },
        ],
      },
      {
        content: 'Quản lý giáo dục là:',
        answers: [
          { content: 'Tác động có mục đích, có kế hoạch của chủ thể quản lý đến đối tượng quản lý nhằm đạt mục tiêu giáo dục', isCorrect: true },
          { content: 'Chỉ là việc ra lệnh', isCorrect: false },
          { content: 'Chỉ là việc kiểm tra', isCorrect: false },
          { content: 'Chỉ là việc phân công công việc', isCorrect: false },
        ],
      },
      {
        content: 'Các chức năng cơ bản của quản lý giáo dục gồm:',
        answers: [
          { content: 'Lập kế hoạch, tổ chức, chỉ đạo, kiểm tra', isCorrect: true },
          { content: 'Chỉ có lập kế hoạch', isCorrect: false },
          { content: 'Chỉ có kiểm tra', isCorrect: false },
          { content: 'Chỉ có tổ chức', isCorrect: false },
        ],
      },
      {
        content: 'Đổi mới giáo dục Việt Nam hiện nay hướng đến:',
        answers: [
          { content: 'Chuyển từ giáo dục nặng về truyền thụ kiến thức sang phát triển năng lực và phẩm chất người học', isCorrect: true },
          { content: 'Giữ nguyên phương pháp truyền thống', isCorrect: false },
          { content: 'Bỏ hoàn toàn kiến thức lý thuyết', isCorrect: false },
          { content: 'Chỉ tập trung vào thi cử', isCorrect: false },
        ],
      },
      {
        content: 'Dạy học tích hợp là:',
        answers: [
          { content: 'Kết hợp kiến thức từ nhiều môn học, lĩnh vực để giải quyết vấn đề thực tiễn', isCorrect: true },
          { content: 'Dạy nhiều môn cùng lúc không liên quan', isCorrect: false },
          { content: 'Dạy một môn duy nhất', isCorrect: false },
          { content: 'Bỏ bớt các môn học', isCorrect: false },
        ],
      },
      {
        content: 'Đánh giá năng lực học sinh khác đánh giá kiến thức ở chỗ:',
        answers: [
          { content: 'Đánh giá khả năng vận dụng kiến thức, kỹ năng vào giải quyết vấn đề thực tiễn', isCorrect: true },
          { content: 'Chỉ kiểm tra khả năng ghi nhớ', isCorrect: false },
          { content: 'Chỉ dùng bài thi trắc nghiệm', isCorrect: false },
          { content: 'Không cần đánh giá', isCorrect: false },
        ],
      },
      {
        content: 'Giáo viên chủ nhiệm lớp có nhiệm vụ:',
        answers: [
          { content: 'Quản lý toàn diện lớp học, phối hợp các lực lượng giáo dục, tổ chức hoạt động tập thể', isCorrect: true },
          { content: 'Chỉ dạy môn chuyên môn', isCorrect: false },
          { content: 'Chỉ điểm danh', isCorrect: false },
          { content: 'Chỉ xử lý kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Phong cách sư phạm dân chủ của giáo viên thể hiện ở:',
        answers: [
          { content: 'Tôn trọng ý kiến học sinh, tạo không khí cởi mở, khuyến khích sáng tạo', isCorrect: true },
          { content: 'Áp đặt mọi quyết định', isCorrect: false },
          { content: 'Để mặc học sinh', isCorrect: false },
          { content: 'Chỉ quan tâm đến kết quả học tập', isCorrect: false },
        ],
      },
      {
        content: 'Phong cách sư phạm độc đoán có đặc điểm:',
        answers: [
          { content: 'Giáo viên quyết định mọi việc, ít lắng nghe ý kiến học sinh, dùng mệnh lệnh', isCorrect: true },
          { content: 'Tôn trọng ý kiến học sinh', isCorrect: false },
          { content: 'Để học sinh tự quyết định', isCorrect: false },
          { content: 'Khuyến khích sáng tạo', isCorrect: false },
        ],
      },
      {
        content: 'Phong cách sư phạm tự do có đặc điểm:',
        answers: [
          { content: 'Giáo viên ít can thiệp, để học sinh tự do, thiếu kiểm soát', isCorrect: true },
          { content: 'Giáo viên kiểm soát chặt chẽ', isCorrect: false },
          { content: 'Giáo viên tôn trọng nhưng có yêu cầu', isCorrect: false },
          { content: 'Giáo viên áp đặt mọi quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực nghiên cứu khoa học giáo dục của giáo viên thể hiện ở:',
        answers: [
          { content: 'Khả năng phát hiện vấn đề, nghiên cứu và áp dụng kết quả vào thực tiễn giáo dục', isCorrect: true },
          { content: 'Chỉ đọc sách giáo khoa', isCorrect: false },
          { content: 'Chỉ soạn giáo án', isCorrect: false },
          { content: 'Chỉ chấm bài', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức nghề nghiệp giáo viên theo Luật Giáo dục Việt Nam yêu cầu:',
        answers: [
          { content: 'Có phẩm chất, đạo đức, tư tưởng tốt, gương mẫu trước học sinh', isCorrect: true },
          { content: 'Chỉ cần có bằng cấp', isCorrect: false },
          { content: 'Chỉ cần dạy giỏi', isCorrect: false },
          { content: 'Chỉ cần có thâm niên', isCorrect: false },
        ],
      },
      {
        content: 'Công nghệ thông tin trong giáo dục có vai trò:',
        answers: [
          { content: 'Hỗ trợ đổi mới phương pháp dạy học, tăng tính trực quan, tạo môi trường học tập tương tác', isCorrect: true },
          { content: 'Thay thế hoàn toàn giáo viên', isCorrect: false },
          { content: 'Chỉ dùng để giải trí', isCorrect: false },
          { content: 'Không có vai trò gì', isCorrect: false },
        ],
      },
      {
        content: 'Giáo viên cần phát triển chuyên môn liên tục vì:',
        answers: [
          { content: 'Khoa học và xã hội luôn phát triển, yêu cầu giáo dục luôn thay đổi', isCorrect: true },
          { content: 'Để được tăng lương', isCorrect: false },
          { content: 'Để được khen thưởng', isCorrect: false },
          { content: 'Vì bị bắt buộc', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa giáo viên và học sinh trong giáo dục hiện đại là:',
        answers: [
          { content: 'Quan hệ hợp tác, tôn trọng lẫn nhau, giáo viên là người hướng dẫn, học sinh là chủ thể', isCorrect: true },
          { content: 'Giáo viên là người ra lệnh, học sinh phải tuân theo', isCorrect: false },
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Học sinh quyết định mọi việc', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực thiết kế bài dạy của giáo viên bao gồm:',
        answers: [
          { content: 'Xác định mục tiêu, lựa chọn nội dung, phương pháp, phương tiện và hình thức đánh giá phù hợp', isCorrect: true },
          { content: 'Chỉ soạn nội dung bài giảng', isCorrect: false },
          { content: 'Chỉ chuẩn bị đồ dùng dạy học', isCorrect: false },
          { content: 'Chỉ viết câu hỏi kiểm tra', isCorrect: false },
        ],
      },
      {
        content: 'Chương trình giáo dục phổ thông 2018 của Việt Nam hướng đến:',
        answers: [
          { content: 'Phát triển phẩm chất và năng lực học sinh, với 5 phẩm chất và 10 năng lực cốt lõi', isCorrect: true },
          { content: 'Chỉ truyền đạt kiến thức', isCorrect: false },
          { content: 'Chỉ rèn luyện kỹ năng thi cử', isCorrect: false },
          { content: 'Giảm bớt các môn học', isCorrect: false },
        ],
      },
      {
        content: 'Năng lực giáo dục của giáo viên thể hiện ở:',
        answers: [
          { content: 'Khả năng tác động đến nhận thức, tình cảm, hành vi của học sinh để hình thành nhân cách', isCorrect: true },
          { content: 'Chỉ khả năng giảng bài hay', isCorrect: false },
          { content: 'Chỉ khả năng quản lý lớp', isCorrect: false },
          { content: 'Chỉ khả năng soạn giáo án', isCorrect: false },
        ],
      },
      {
        content: 'Tự bồi dưỡng chuyên môn của giáo viên bao gồm:',
        answers: [
          { content: 'Tự học, tự nghiên cứu, tham gia tập huấn, sinh hoạt chuyên môn, học hỏi đồng nghiệp', isCorrect: true },
          { content: 'Chỉ đi học lấy bằng cấp', isCorrect: false },
          { content: 'Chỉ đọc sách giáo khoa', isCorrect: false },
          { content: 'Không cần tự bồi dưỡng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Tổng hợp - hệ thống giáo dục quốc dân VN, xu hướng giáo dục hiện đại
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-giao-duc-hoc-dai-cuong',
    title: 'Trắc nghiệm Giáo dục học đại cương - Đề số 5',
    slug: 'trac-nghiem-dh-giao-duc-hoc-de-5',
    description:
      'Tổng hợp: hệ thống giáo dục quốc dân VN, xu hướng giáo dục hiện đại.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Hệ thống giáo dục quốc dân Việt Nam gồm mấy cấp học và trình độ đào tạo?',
        answers: [
          { content: 'Giáo dục mầm non, giáo dục phổ thông, giáo dục nghề nghiệp, giáo dục đại học', isCorrect: true },
          { content: 'Chỉ có giáo dục phổ thông và đại học', isCorrect: false },
          { content: 'Chỉ có giáo dục mầm non và phổ thông', isCorrect: false },
          { content: 'Chỉ có giáo dục đại học', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục mầm non bao gồm:',
        answers: [
          { content: 'Nhà trẻ (3 tháng - 3 tuổi) và mẫu giáo (3 - 6 tuổi)', isCorrect: true },
          { content: 'Chỉ có mẫu giáo', isCorrect: false },
          { content: 'Chỉ có nhà trẻ', isCorrect: false },
          { content: 'Lớp 1 đến lớp 3', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục phổ thông Việt Nam gồm:',
        answers: [
          { content: 'Tiểu học (5 năm), THCS (4 năm), THPT (3 năm)', isCorrect: true },
          { content: 'Tiểu học (4 năm), THCS (4 năm), THPT (4 năm)', isCorrect: false },
          { content: 'Tiểu học (6 năm), THCS (3 năm), THPT (3 năm)', isCorrect: false },
          { content: 'Tiểu học (5 năm), THCS (3 năm), THPT (4 năm)', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục tiểu học ở Việt Nam là:',
        answers: [
          { content: 'Bắt buộc, phổ cập, miễn học phí', isCorrect: true },
          { content: 'Không bắt buộc', isCorrect: false },
          { content: 'Chỉ dành cho trẻ em thành phố', isCorrect: false },
          { content: 'Phải đóng học phí', isCorrect: false },
        ],
      },
      {
        content: 'Luật Giáo dục Việt Nam hiện hành quy định giáo dục là:',
        answers: [
          { content: 'Quốc sách hàng đầu', isCorrect: true },
          { content: 'Lĩnh vực phụ trợ', isCorrect: false },
          { content: 'Hoạt động tự nguyện', isCorrect: false },
          { content: 'Trách nhiệm riêng của gia đình', isCorrect: false },
        ],
      },
      {
        content: 'Xu hướng giáo dục suốt đời (lifelong learning) có nghĩa:',
        answers: [
          { content: 'Con người cần học tập liên tục trong suốt cuộc đời, không chỉ trong nhà trường', isCorrect: true },
          { content: 'Chỉ học trong nhà trường', isCorrect: false },
          { content: 'Chỉ học khi còn trẻ', isCorrect: false },
          { content: 'Chỉ học để lấy bằng cấp', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục STEM là:',
        answers: [
          { content: 'Giáo dục tích hợp Khoa học, Công nghệ, Kỹ thuật và Toán học', isCorrect: true },
          { content: 'Giáo dục chỉ về toán học', isCorrect: false },
          { content: 'Giáo dục chỉ về công nghệ thông tin', isCorrect: false },
          { content: 'Giáo dục thể chất', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục hòa nhập là:',
        answers: [
          { content: 'Giáo dục đảm bảo mọi trẻ em, kể cả trẻ khuyết tật, được học chung trong môi trường giáo dục bình thường', isCorrect: true },
          { content: 'Giáo dục riêng cho trẻ khuyết tật', isCorrect: false },
          { content: 'Giáo dục chỉ cho trẻ bình thường', isCorrect: false },
          { content: 'Giáo dục tại nhà', isCorrect: false },
        ],
      },
      {
        content: 'Xu hướng quốc tế hóa giáo dục thể hiện ở:',
        answers: [
          { content: 'Hợp tác quốc tế, trao đổi sinh viên, công nhận bằng cấp lẫn nhau, chương trình liên kết', isCorrect: true },
          { content: 'Đóng cửa hệ thống giáo dục', isCorrect: false },
          { content: 'Chỉ sử dụng chương trình trong nước', isCorrect: false },
          { content: 'Cấm du học', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục trực tuyến (e-learning) có ưu điểm:',
        answers: [
          { content: 'Linh hoạt về thời gian, không gian, tiếp cận nguồn học liệu phong phú', isCorrect: true },
          { content: 'Thay thế hoàn toàn giáo dục truyền thống', isCorrect: false },
          { content: 'Không cần giáo viên', isCorrect: false },
          { content: 'Chỉ phù hợp với người lớn', isCorrect: false },
        ],
      },
      {
        content: 'Dạy học theo dự án (Project-Based Learning) có đặc điểm:',
        answers: [
          { content: 'Học sinh thực hiện dự án thực tế, vận dụng kiến thức liên môn, phát triển kỹ năng tổng hợp', isCorrect: true },
          { content: 'Giáo viên giảng bài, học sinh ghi chép', isCorrect: false },
          { content: 'Chỉ làm bài tập trong sách', isCorrect: false },
          { content: 'Chỉ học lý thuyết', isCorrect: false },
        ],
      },
      {
        content: 'Lớp học đảo ngược (Flipped Classroom) là:',
        answers: [
          { content: 'Học sinh tự học lý thuyết ở nhà qua video/tài liệu, đến lớp thực hành và thảo luận', isCorrect: true },
          { content: 'Giáo viên giảng bài ở lớp, học sinh làm bài ở nhà', isCorrect: false },
          { content: 'Đảo ngược vị trí bàn ghế trong lớp', isCorrect: false },
          { content: 'Học sinh dạy giáo viên', isCorrect: false },
        ],
      },
      {
        content: 'Đánh giá quá trình (formative assessment) là:',
        answers: [
          { content: 'Đánh giá liên tục trong quá trình học tập nhằm cung cấp phản hồi để cải thiện', isCorrect: true },
          { content: 'Đánh giá cuối kỳ để xếp loại', isCorrect: false },
          { content: 'Đánh giá một lần duy nhất', isCorrect: false },
          { content: 'Không đánh giá', isCorrect: false },
        ],
      },
      {
        content: 'Đánh giá tổng kết (summative assessment) là:',
        answers: [
          { content: 'Đánh giá cuối giai đoạn học tập nhằm xác nhận kết quả đạt được', isCorrect: true },
          { content: 'Đánh giá liên tục trong quá trình học', isCorrect: false },
          { content: 'Đánh giá trước khi bắt đầu học', isCorrect: false },
          { content: 'Không có mục đích cụ thể', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục phát triển bền vững (ESD) hướng đến:',
        answers: [
          { content: 'Giáo dục con người có ý thức bảo vệ môi trường, phát triển kinh tế - xã hội bền vững', isCorrect: true },
          { content: 'Chỉ giáo dục về kinh tế', isCorrect: false },
          { content: 'Chỉ giáo dục về môi trường', isCorrect: false },
          { content: 'Chỉ giáo dục về công nghệ', isCorrect: false },
        ],
      },
      {
        content: 'Kỹ năng thế kỷ 21 mà giáo dục cần hình thành cho học sinh gồm:',
        answers: [
          { content: 'Tư duy phản biện, sáng tạo, giao tiếp, hợp tác (4C)', isCorrect: true },
          { content: 'Chỉ cần đọc, viết, tính toán', isCorrect: false },
          { content: 'Chỉ cần kỹ năng máy tính', isCorrect: false },
          { content: 'Chỉ cần kỹ năng ngoại ngữ', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục đa văn hóa (multicultural education) nhằm:',
        answers: [
          { content: 'Giúp học sinh hiểu, tôn trọng sự đa dạng văn hóa và sống hòa hợp trong xã hội đa văn hóa', isCorrect: true },
          { content: 'Áp đặt một nền văn hóa duy nhất', isCorrect: false },
          { content: 'Loại bỏ các nền văn hóa thiểu số', isCorrect: false },
          { content: 'Chỉ dạy về văn hóa phương Tây', isCorrect: false },
        ],
      },
      {
        content: 'Triết lý giáo dục "lấy người học làm trung tâm" có nghĩa:',
        answers: [
          { content: 'Tổ chức quá trình giáo dục xuất phát từ nhu cầu, năng lực, đặc điểm của người học', isCorrect: true },
          { content: 'Người học quyết định mọi thứ, giáo viên không cần thiết', isCorrect: false },
          { content: 'Giáo viên là trung tâm', isCorrect: false },
          { content: 'Nội dung là trung tâm', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục mở (Open Education) có đặc điểm:',
        answers: [
          { content: 'Chia sẻ tài nguyên giáo dục mở, tạo cơ hội học tập cho mọi người', isCorrect: true },
          { content: 'Giáo dục chỉ dành cho người giàu', isCorrect: false },
          { content: 'Giáo dục đóng cửa', isCorrect: false },
          { content: 'Giáo dục chỉ trong nhà trường', isCorrect: false },
        ],
      },
      {
        content: 'Trí tuệ nhân tạo (AI) trong giáo dục có thể:',
        answers: [
          { content: 'Cá nhân hóa lộ trình học tập, hỗ trợ đánh giá, cung cấp phản hồi tức thì', isCorrect: true },
          { content: 'Thay thế hoàn toàn giáo viên', isCorrect: false },
          { content: 'Chỉ dùng để chấm bài', isCorrect: false },
          { content: 'Không có ứng dụng trong giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục công dân toàn cầu (Global Citizenship Education) nhằm:',
        answers: [
          { content: 'Hình thành ý thức trách nhiệm với cộng đồng toàn cầu, hiểu biết các vấn đề toàn cầu', isCorrect: true },
          { content: 'Chỉ giáo dục về quốc gia mình', isCorrect: false },
          { content: 'Bỏ qua bản sắc dân tộc', isCorrect: false },
          { content: 'Chỉ dạy ngoại ngữ', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp học tập trải nghiệm (Experiential Learning) theo David Kolb gồm:',
        answers: [
          { content: 'Trải nghiệm cụ thể → Quan sát phản ánh → Khái niệm hóa trừu tượng → Thử nghiệm tích cực', isCorrect: true },
          { content: 'Chỉ nghe giảng và ghi chép', isCorrect: false },
          { content: 'Chỉ đọc sách', isCorrect: false },
          { content: 'Chỉ làm bài tập', isCorrect: false },
        ],
      },
      {
        content: 'Gamification (trò chơi hóa) trong giáo dục là:',
        answers: [
          { content: 'Áp dụng yếu tố trò chơi (điểm, huy hiệu, bảng xếp hạng) vào hoạt động học tập để tăng động lực', isCorrect: true },
          { content: 'Cho học sinh chơi game thay vì học', isCorrect: false },
          { content: 'Dạy học sinh thiết kế game', isCorrect: false },
          { content: 'Cấm học sinh chơi game', isCorrect: false },
        ],
      },
      {
        content: 'Mục tiêu phát triển bền vững số 4 (SDG 4) của Liên Hợp Quốc là:',
        answers: [
          { content: 'Đảm bảo giáo dục chất lượng, công bằng, toàn diện và thúc đẩy cơ hội học tập suốt đời cho tất cả mọi người', isCorrect: true },
          { content: 'Xóa đói giảm nghèo', isCorrect: false },
          { content: 'Bảo vệ môi trường biển', isCorrect: false },
          { content: 'Phát triển năng lượng sạch', isCorrect: false },
        ],
      },
      {
        content: 'Học tập kết hợp (Blended Learning) là:',
        answers: [
          { content: 'Kết hợp giữa học trực tiếp trên lớp và học trực tuyến, tận dụng ưu điểm của cả hai hình thức', isCorrect: true },
          { content: 'Chỉ học trực tuyến', isCorrect: false },
          { content: 'Chỉ học trên lớp', isCorrect: false },
          { content: 'Học qua truyền hình', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
