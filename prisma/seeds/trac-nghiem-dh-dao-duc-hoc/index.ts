import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Đối tượng và phương pháp nghiên cứu đạo đức học
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-dao-duc-hoc',
    title: 'Trắc nghiệm Đạo đức học - Đề số 1',
    slug: 'trac-nghiem-dh-dao-duc-hoc-de-1',
    description:
      'Trắc nghiệm Đạo đức học - Đề số 1. Đối tượng và phương pháp nghiên cứu đạo đức học: khái niệm, phạm trù cơ bản.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Đạo đức học là gì?',
        answers: [
          { content: 'Khoa học nghiên cứu về pháp luật', isCorrect: false },
          { content: 'Khoa học nghiên cứu về đạo đức với tư cách là một hình thái ý thức xã hội đặc biệt', isCorrect: true },
          { content: 'Khoa học nghiên cứu về tâm lý con người', isCorrect: false },
          { content: 'Khoa học nghiên cứu về kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Đối tượng nghiên cứu của đạo đức học là gì?',
        answers: [
          { content: 'Các hiện tượng tự nhiên', isCorrect: false },
          { content: 'Bản chất, quy luật, chuẩn mực và các phạm trù đạo đức', isCorrect: true },
          { content: 'Các hiện tượng kinh tế', isCorrect: false },
          { content: 'Các hiện tượng chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức là gì?',
        answers: [
          { content: 'Hệ thống pháp luật', isCorrect: false },
          { content: 'Hệ thống các quy tắc, chuẩn mực xã hội mà nhờ đó con người tự giác điều chỉnh hành vi cho phù hợp với lợi ích cộng đồng', isCorrect: true },
          { content: 'Phong tục tập quán', isCorrect: false },
          { content: 'Tín ngưỡng tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức khác với pháp luật ở điểm nào cơ bản nhất?',
        answers: [
          { content: 'Đạo đức do nhà nước ban hành', isCorrect: false },
          { content: 'Đạo đức được thực hiện bằng sự tự giác, dư luận xã hội; pháp luật được thực hiện bằng cưỡng chế nhà nước', isCorrect: true },
          { content: 'Pháp luật không có tính bắt buộc', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng cơ bản của đạo đức bao gồm những gì?',
        answers: [
          { content: 'Chỉ có chức năng giáo dục', isCorrect: false },
          { content: 'Điều chỉnh hành vi, giáo dục, nhận thức', isCorrect: true },
          { content: 'Chỉ có chức năng điều chỉnh', isCorrect: false },
          { content: 'Chỉ có chức năng nhận thức', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc của đạo đức theo quan điểm duy vật là gì?',
        answers: [
          { content: 'Do thần linh ban cho', isCorrect: false },
          { content: 'Đạo đức bắt nguồn từ thực tiễn đời sống xã hội, từ lao động và quan hệ giữa người với người', isCorrect: true },
          { content: 'Do bẩm sinh', isCorrect: false },
          { content: 'Do giáo dục nhà trường', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức có tính giai cấp không?',
        answers: [
          { content: 'Không, đạo đức là chung cho mọi người', isCorrect: false },
          { content: 'Có, trong xã hội có giai cấp, đạo đức mang tính giai cấp, nhưng cũng có những giá trị đạo đức chung', isCorrect: true },
          { content: 'Đạo đức chỉ thuộc về giai cấp thống trị', isCorrect: false },
          { content: 'Đạo đức không liên quan đến giai cấp', isCorrect: false },
        ],
      },
      {
        content: 'Phạm trù đạo đức là gì?',
        answers: [
          { content: 'Các quy định pháp luật', isCorrect: false },
          { content: 'Những khái niệm cơ bản phản ánh các mặt, các mối quan hệ đạo đức cơ bản nhất', isCorrect: true },
          { content: 'Các phong tục tập quán', isCorrect: false },
          { content: 'Các nghi lễ tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Ý thức đạo đức bao gồm những yếu tố nào?',
        answers: [
          { content: 'Chỉ có tri thức đạo đức', isCorrect: false },
          { content: 'Tri thức đạo đức, tình cảm đạo đức, ý chí đạo đức', isCorrect: true },
          { content: 'Chỉ có tình cảm đạo đức', isCorrect: false },
          { content: 'Chỉ có ý chí đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Hành vi đạo đức là gì?',
        answers: [
          { content: 'Mọi hành vi của con người', isCorrect: false },
          { content: 'Hành vi tự giác, có ý thức, được thúc đẩy bởi động cơ đạo đức và phù hợp với chuẩn mực đạo đức', isCorrect: true },
          { content: 'Hành vi bản năng', isCorrect: false },
          { content: 'Hành vi bắt buộc bởi pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ đạo đức là gì?',
        answers: [
          { content: 'Quan hệ kinh tế', isCorrect: false },
          { content: 'Quan hệ giữa người với người xét từ góc độ đạo đức, được điều chỉnh bởi các chuẩn mực đạo đức', isCorrect: true },
          { content: 'Quan hệ pháp luật', isCorrect: false },
          { content: 'Quan hệ chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Chuẩn mực đạo đức là gì?',
        answers: [
          { content: 'Các điều luật', isCorrect: false },
          { content: 'Những yêu cầu, đòi hỏi của xã hội đối với hành vi của mỗi cá nhân, được xã hội thừa nhận', isCorrect: true },
          { content: 'Các quy định hành chính', isCorrect: false },
          { content: 'Các phong tục cổ hủ', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nghiên cứu chủ yếu của đạo đức học Mác-Lênin là gì?',
        answers: [
          { content: 'Phương pháp siêu hình', isCorrect: false },
          { content: 'Phương pháp duy vật biện chứng và duy vật lịch sử', isCorrect: true },
          { content: 'Phương pháp duy tâm', isCorrect: false },
          { content: 'Phương pháp thực nghiệm', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức có tính lịch sử không?',
        answers: [
          { content: 'Không, đạo đức bất biến', isCorrect: false },
          { content: 'Có, đạo đức thay đổi theo sự phát triển của xã hội, mỗi thời đại có hệ thống đạo đức riêng', isCorrect: true },
          { content: 'Đạo đức chỉ thay đổi khi có chiến tranh', isCorrect: false },
          { content: 'Đạo đức chỉ thay đổi khi có cách mạng', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa đạo đức và kinh tế là gì?',
        answers: [
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Kinh tế là cơ sở quyết định đạo đức, đạo đức tác động trở lại kinh tế', isCorrect: true },
          { content: 'Đạo đức quyết định kinh tế', isCorrect: false },
          { content: 'Kinh tế và đạo đức đối lập nhau', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa đạo đức và chính trị là gì?',
        answers: [
          { content: 'Không liên quan', isCorrect: false },
          { content: 'Đạo đức và chính trị có mối quan hệ chặt chẽ, chính trị chi phối đạo đức, đạo đức ảnh hưởng đến chính trị', isCorrect: true },
          { content: 'Đạo đức quyết định chính trị', isCorrect: false },
          { content: 'Chính trị không ảnh hưởng đến đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa đạo đức và pháp luật là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Bổ sung cho nhau trong việc điều chỉnh hành vi con người, pháp luật là đạo đức tối thiểu', isCorrect: true },
          { content: 'Đạo đức thay thế pháp luật', isCorrect: false },
          { content: 'Pháp luật thay thế đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức có tính kế thừa không?',
        answers: [
          { content: 'Không, mỗi thời đại tạo ra đạo đức hoàn toàn mới', isCorrect: false },
          { content: 'Có, đạo đức có tính kế thừa, các giá trị đạo đức tốt đẹp được truyền từ thế hệ này sang thế hệ khác', isCorrect: true },
          { content: 'Chỉ kế thừa đạo đức phong kiến', isCorrect: false },
          { content: 'Chỉ kế thừa đạo đức tư sản', isCorrect: false },
        ],
      },
      {
        content: 'Tiến bộ đạo đức là gì?',
        answers: [
          { content: 'Sự thay đổi bất kỳ trong đạo đức', isCorrect: false },
          { content: 'Sự phát triển đạo đức theo hướng nhân đạo, công bằng, tự do hơn, phù hợp với sự phát triển xã hội', isCorrect: true },
          { content: 'Sự quay lại đạo đức cổ xưa', isCorrect: false },
          { content: 'Sự xóa bỏ mọi chuẩn mực đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của đạo đức trong đời sống xã hội là gì?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Điều chỉnh hành vi, duy trì trật tự xã hội, hoàn thiện nhân cách con người', isCorrect: true },
          { content: 'Chỉ có vai trò trong gia đình', isCorrect: false },
          { content: 'Chỉ có vai trò trong nhà trường', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học Mác-Lênin khác với đạo đức học trước Mác ở điểm nào?',
        answers: [
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'Đạo đức học Mác-Lênin đặt đạo đức trên cơ sở duy vật, gắn đạo đức với thực tiễn cách mạng', isCorrect: true },
          { content: 'Đạo đức học Mác-Lênin phủ nhận mọi giá trị đạo đức cũ', isCorrect: false },
          { content: 'Đạo đức học trước Mác khoa học hơn', isCorrect: false },
        ],
      },
      {
        content: 'Tự ý thức đạo đức là gì?',
        answers: [
          { content: 'Sự ép buộc từ bên ngoài', isCorrect: false },
          { content: 'Khả năng tự đánh giá, tự kiểm tra hành vi của mình theo các chuẩn mực đạo đức', isCorrect: true },
          { content: 'Sự tuân thủ pháp luật', isCorrect: false },
          { content: 'Sự bắt chước người khác', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị đạo đức là gì?',
        answers: [
          { content: 'Giá trị kinh tế', isCorrect: false },
          { content: 'Những phẩm chất, hành vi được xã hội đánh giá là tốt đẹp, có ý nghĩa tích cực', isCorrect: true },
          { content: 'Giá trị vật chất', isCorrect: false },
          { content: 'Giá trị pháp lý', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức có tính dân tộc không?',
        answers: [
          { content: 'Không, đạo đức giống nhau ở mọi dân tộc', isCorrect: false },
          { content: 'Có, mỗi dân tộc có những giá trị đạo đức đặc thù phản ánh truyền thống, văn hóa riêng', isCorrect: true },
          { content: 'Chỉ có ở dân tộc phát triển', isCorrect: false },
          { content: 'Chỉ có ở dân tộc phương Đông', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phát triển của đạo đức là gì?',
        answers: [
          { content: 'Đạo đức phát triển ngẫu nhiên', isCorrect: false },
          { content: 'Đạo đức phát triển phù hợp với sự phát triển của lực lượng sản xuất và quan hệ sản xuất', isCorrect: true },
          { content: 'Đạo đức không phát triển', isCorrect: false },
          { content: 'Đạo đức phát triển theo chu kỳ', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Các phạm trù đạo đức
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-dao-duc-hoc',
    title: 'Trắc nghiệm Đạo đức học - Đề số 2',
    slug: 'trac-nghiem-dh-dao-duc-hoc-de-2',
    description:
      'Trắc nghiệm Đạo đức học - Đề số 2. Các phạm trù đạo đức: thiện-ác, nghĩa vụ, lương tâm, danh dự, nhân phẩm, hạnh phúc.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Thiện là gì trong đạo đức học?',
        answers: [
          { content: 'Những gì có lợi cho cá nhân', isCorrect: false },
          { content: 'Những gì phù hợp với yêu cầu đạo đức xã hội, có lợi cho con người và sự tiến bộ xã hội', isCorrect: true },
          { content: 'Những gì được pháp luật cho phép', isCorrect: false },
          { content: 'Những gì mang lại lợi nhuận', isCorrect: false },
        ],
      },
      {
        content: 'Ác là gì trong đạo đức học?',
        answers: [
          { content: 'Những gì trái pháp luật', isCorrect: false },
          { content: 'Những gì trái với yêu cầu đạo đức xã hội, gây hại cho con người và cản trở tiến bộ xã hội', isCorrect: true },
          { content: 'Những gì không có lợi cho cá nhân', isCorrect: false },
          { content: 'Những gì gây mất tiền', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ đạo đức là gì?',
        answers: [
          { content: 'Nghĩa vụ pháp lý', isCorrect: false },
          { content: 'Sự ý thức của cá nhân về trách nhiệm của mình đối với người khác và xã hội, được thực hiện tự giác', isCorrect: true },
          { content: 'Nghĩa vụ quân sự', isCorrect: false },
          { content: 'Nghĩa vụ thuế', isCorrect: false },
        ],
      },
      {
        content: 'Nghĩa vụ đạo đức khác với nghĩa vụ pháp lý ở điểm nào?',
        answers: [
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'Nghĩa vụ đạo đức được thực hiện bằng sự tự giác, lương tâm; nghĩa vụ pháp lý bằng cưỡng chế', isCorrect: true },
          { content: 'Nghĩa vụ pháp lý quan trọng hơn', isCorrect: false },
          { content: 'Nghĩa vụ đạo đức có tính bắt buộc hơn', isCorrect: false },
        ],
      },
      {
        content: 'Lương tâm là gì?',
        answers: [
          { content: 'Sự đánh giá của người khác', isCorrect: false },
          { content: 'Năng lực tự đánh giá, tự phán xét hành vi của bản thân theo các chuẩn mực đạo đức', isCorrect: true },
          { content: 'Sự phán xét của tòa án', isCorrect: false },
          { content: 'Dư luận xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Lương tâm có mấy trạng thái cơ bản?',
        answers: [
          { content: '1 trạng thái', isCorrect: false },
          { content: '2 trạng thái: lương tâm thanh thản và lương tâm cắn rứt', isCorrect: true },
          { content: '3 trạng thái', isCorrect: false },
          { content: '4 trạng thái', isCorrect: false },
        ],
      },
      {
        content: 'Danh dự là gì?',
        answers: [
          { content: 'Sự giàu có', isCorrect: false },
          { content: 'Sự đánh giá của xã hội đối với giá trị đạo đức của một cá nhân, và sự tự ý thức của cá nhân về giá trị đó', isCorrect: true },
          { content: 'Chức vụ trong xã hội', isCorrect: false },
          { content: 'Bằng cấp học vấn', isCorrect: false },
        ],
      },
      {
        content: 'Nhân phẩm là gì?',
        answers: [
          { content: 'Địa vị xã hội', isCorrect: false },
          { content: 'Toàn bộ những phẩm chất đạo đức mà mỗi cá nhân có được, là giá trị làm người của mỗi con người', isCorrect: true },
          { content: 'Tài sản vật chất', isCorrect: false },
          { content: 'Ngoại hình bên ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Hạnh phúc là gì theo quan điểm đạo đức học Mác-Lênin?',
        answers: [
          { content: 'Chỉ là sự thỏa mãn vật chất', isCorrect: false },
          { content: 'Trạng thái thỏa mãn, hài lòng khi nhu cầu vật chất và tinh thần được đáp ứng, gắn liền với đấu tranh và lao động sáng tạo', isCorrect: true },
          { content: 'Chỉ là sự giàu có', isCorrect: false },
          { content: 'Chỉ là sự hưởng thụ', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa hạnh phúc cá nhân và hạnh phúc xã hội là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Thống nhất biện chứng, hạnh phúc cá nhân gắn liền với hạnh phúc xã hội', isCorrect: true },
          { content: 'Không liên quan', isCorrect: false },
          { content: 'Hạnh phúc cá nhân quan trọng hơn', isCorrect: false },
        ],
      },
      {
        content: 'Phạm trù "thiện" và "ác" có tính lịch sử không?',
        answers: [
          { content: 'Không, thiện ác là bất biến', isCorrect: false },
          { content: 'Có, nội dung của thiện và ác thay đổi theo từng thời đại, giai cấp, dân tộc', isCorrect: true },
          { content: 'Chỉ thay đổi khi có chiến tranh', isCorrect: false },
          { content: 'Chỉ thay đổi khi có cách mạng', isCorrect: false },
        ],
      },
      {
        content: 'Lòng tự trọng là gì?',
        answers: [
          { content: 'Sự kiêu ngạo', isCorrect: false },
          { content: 'Ý thức bảo vệ danh dự, nhân phẩm của bản thân, không cho phép mình và người khác xúc phạm', isCorrect: true },
          { content: 'Sự tự ti', isCorrect: false },
          { content: 'Sự thờ ơ', isCorrect: false },
        ],
      },
      {
        content: 'Công bằng là gì trong đạo đức học?',
        answers: [
          { content: 'Mọi người đều giống nhau', isCorrect: false },
          { content: 'Sự tương xứng giữa cống hiến và hưởng thụ, giữa quyền lợi và nghĩa vụ', isCorrect: true },
          { content: 'Chia đều mọi thứ', isCorrect: false },
          { content: 'Người giàu chia cho người nghèo', isCorrect: false },
        ],
      },
      {
        content: 'Lý tưởng đạo đức là gì?',
        answers: [
          { content: 'Ước mơ viển vông', isCorrect: false },
          { content: 'Hình mẫu đạo đức hoàn thiện mà con người hướng tới, là mục tiêu cao nhất của sự phấn đấu đạo đức', isCorrect: true },
          { content: 'Quy định pháp luật', isCorrect: false },
          { content: 'Phong tục tập quán', isCorrect: false },
        ],
      },
      {
        content: 'Tình yêu thương con người là phạm trù đạo đức thể hiện điều gì?',
        answers: [
          { content: 'Sự yếu đuối', isCorrect: false },
          { content: 'Sự quan tâm, chia sẻ, giúp đỡ lẫn nhau giữa con người với con người', isCorrect: true },
          { content: 'Sự phụ thuộc', isCorrect: false },
          { content: 'Sự lợi dụng', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm đạo đức là gì?',
        answers: [
          { content: 'Trách nhiệm pháp lý', isCorrect: false },
          { content: 'Sự tự giác nhận lấy bổn phận đạo đức và chịu trách nhiệm về hậu quả hành vi của mình trước lương tâm và dư luận', isCorrect: true },
          { content: 'Trách nhiệm tài chính', isCorrect: false },
          { content: 'Trách nhiệm hành chính', isCorrect: false },
        ],
      },
      {
        content: 'Sự khiêm tốn là phẩm chất đạo đức thể hiện điều gì?',
        answers: [
          { content: 'Sự tự ti, thiếu tự tin', isCorrect: false },
          { content: 'Sự đánh giá đúng mức bản thân, không tự cao tự đại, luôn học hỏi', isCorrect: true },
          { content: 'Sự giả tạo', isCorrect: false },
          { content: 'Sự yếu kém', isCorrect: false },
        ],
      },
      {
        content: 'Lòng dũng cảm là phẩm chất đạo đức thể hiện điều gì?',
        answers: [
          { content: 'Sự liều lĩnh, bất chấp', isCorrect: false },
          { content: 'Khả năng vượt qua khó khăn, nguy hiểm để bảo vệ lẽ phải, bảo vệ người khác', isCorrect: true },
          { content: 'Sự hung hăng', isCorrect: false },
          { content: 'Sự thách thức', isCorrect: false },
        ],
      },
      {
        content: 'Đánh giá đạo đức là gì?',
        answers: [
          { content: 'Chấm điểm hành vi', isCorrect: false },
          { content: 'Sự phán xét hành vi con người theo các chuẩn mực đạo đức, phân biệt thiện - ác, tốt - xấu', isCorrect: true },
          { content: 'Xếp hạng con người', isCorrect: false },
          { content: 'Khen thưởng và kỷ luật', isCorrect: false },
        ],
      },
      {
        content: 'Dư luận xã hội có vai trò gì trong đạo đức?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Là phương thức đánh giá và điều chỉnh hành vi đạo đức, khen ngợi cái thiện, lên án cái ác', isCorrect: true },
          { content: 'Chỉ gây áp lực tiêu cực', isCorrect: false },
          { content: 'Chỉ có vai trò giải trí', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa nghĩa vụ và lương tâm là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Nghĩa vụ là yêu cầu từ bên ngoài được nội tâm hóa, lương tâm là sự tự đánh giá việc thực hiện nghĩa vụ', isCorrect: true },
          { content: 'Không liên quan', isCorrect: false },
          { content: 'Lương tâm quyết định nghĩa vụ', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa danh dự và nhân phẩm là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Nhân phẩm là cơ sở của danh dự, danh dự là sự thừa nhận xã hội đối với nhân phẩm', isCorrect: true },
          { content: 'Không liên quan', isCorrect: false },
          { content: 'Danh dự quan trọng hơn nhân phẩm', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa cá nhân trong đạo đức là gì?',
        answers: [
          { content: 'Tôn trọng cá nhân', isCorrect: false },
          { content: 'Tư tưởng đặt lợi ích cá nhân lên trên lợi ích tập thể và xã hội', isCorrect: true },
          { content: 'Phát triển cá nhân', isCorrect: false },
          { content: 'Tự do cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa tập thể trong đạo đức XHCN là gì?',
        answers: [
          { content: 'Xóa bỏ cá nhân', isCorrect: false },
          { content: 'Nguyên tắc kết hợp hài hòa lợi ích cá nhân với lợi ích tập thể và xã hội', isCorrect: true },
          { content: 'Chỉ quan tâm đến tập thể', isCorrect: false },
          { content: 'Hy sinh cá nhân vô điều kiện', isCorrect: false },
        ],
      },
      {
        content: 'Phẩm giá con người là gì?',
        answers: [
          { content: 'Chức vụ xã hội', isCorrect: false },
          { content: 'Giá trị tự thân của mỗi con người, được tôn trọng và bảo vệ bất kể hoàn cảnh', isCorrect: true },
          { content: 'Tài sản vật chất', isCorrect: false },
          { content: 'Bằng cấp học vấn', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Đạo đức và các lĩnh vực đời sống
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-dao-duc-hoc',
    title: 'Trắc nghiệm Đạo đức học - Đề số 3',
    slug: 'trac-nghiem-dh-dao-duc-hoc-de-3',
    description:
      'Trắc nghiệm Đạo đức học - Đề số 3. Đạo đức và các lĩnh vực đời sống: đạo đức nghề nghiệp, đạo đức gia đình, đạo đức xã hội.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Đạo đức nghề nghiệp là gì?',
        answers: [
          { content: 'Quy định pháp luật về nghề nghiệp', isCorrect: false },
          { content: 'Hệ thống các chuẩn mực đạo đức đặc thù điều chỉnh hành vi của người làm nghề trong hoạt động nghề nghiệp', isCorrect: true },
          { content: 'Kỹ năng nghề nghiệp', isCorrect: false },
          { content: 'Bằng cấp chuyên môn', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức nghề nghiệp có vai trò gì?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Nâng cao chất lượng công việc, xây dựng uy tín nghề nghiệp, bảo vệ lợi ích xã hội', isCorrect: true },
          { content: 'Chỉ để trang trí', isCorrect: false },
          { content: 'Chỉ để kiểm soát nhân viên', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức của người thầy thuốc yêu cầu phẩm chất nào quan trọng nhất?',
        answers: [
          { content: 'Giàu có', isCorrect: false },
          { content: 'Lương y như từ mẫu - yêu thương, tận tụy với bệnh nhân', isCorrect: true },
          { content: 'Nổi tiếng', isCorrect: false },
          { content: 'Có nhiều bằng cấp', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức của người giáo viên yêu cầu phẩm chất nào?',
        answers: [
          { content: 'Chỉ cần giỏi chuyên môn', isCorrect: false },
          { content: 'Yêu nghề, yêu trò, mẫu mực, công bằng, không ngừng học hỏi', isCorrect: true },
          { content: 'Chỉ cần nghiêm khắc', isCorrect: false },
          { content: 'Chỉ cần có bằng cấp', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức kinh doanh là gì?',
        answers: [
          { content: 'Kinh doanh bằng mọi giá', isCorrect: false },
          { content: 'Hệ thống chuẩn mực đạo đức trong hoạt động kinh doanh: trung thực, công bằng, trách nhiệm xã hội', isCorrect: true },
          { content: 'Chỉ cần tuân thủ pháp luật', isCorrect: false },
          { content: 'Tối đa hóa lợi nhuận', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức gia đình bao gồm những mối quan hệ nào?',
        answers: [
          { content: 'Chỉ có quan hệ vợ chồng', isCorrect: false },
          { content: 'Quan hệ vợ chồng, cha mẹ - con cái, anh chị em, ông bà - cháu', isCorrect: true },
          { content: 'Chỉ có quan hệ cha mẹ - con cái', isCorrect: false },
          { content: 'Chỉ có quan hệ anh chị em', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong quan hệ vợ chồng yêu cầu điều gì?',
        answers: [
          { content: 'Chồng là chủ gia đình', isCorrect: false },
          { content: 'Yêu thương, chung thủy, tôn trọng, bình đẳng, chia sẻ trách nhiệm', isCorrect: true },
          { content: 'Vợ phải phục tùng chồng', isCorrect: false },
          { content: 'Chỉ cần có kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức của cha mẹ đối với con cái yêu cầu điều gì?',
        answers: [
          { content: 'Chỉ cần nuôi sống', isCorrect: false },
          { content: 'Yêu thương, chăm sóc, giáo dục, làm gương, tôn trọng nhân cách con cái', isCorrect: true },
          { content: 'Áp đặt mọi thứ', isCorrect: false },
          { content: 'Chỉ cần cho tiền', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức của con cái đối với cha mẹ yêu cầu điều gì?',
        answers: [
          { content: 'Chỉ cần vâng lời', isCorrect: false },
          { content: 'Hiếu thảo, kính trọng, biết ơn, chăm sóc cha mẹ khi già yếu', isCorrect: true },
          { content: 'Chỉ cần kiếm tiền', isCorrect: false },
          { content: 'Không cần quan tâm', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức xã hội là gì?',
        answers: [
          { content: 'Đạo đức cá nhân', isCorrect: false },
          { content: 'Hệ thống chuẩn mực đạo đức điều chỉnh hành vi con người trong các quan hệ xã hội rộng lớn', isCorrect: true },
          { content: 'Đạo đức gia đình', isCorrect: false },
          { content: 'Đạo đức nghề nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức sinh thái là gì?',
        answers: [
          { content: 'Khai thác tài nguyên tối đa', isCorrect: false },
          { content: 'Ý thức trách nhiệm của con người đối với môi trường tự nhiên, bảo vệ và sống hài hòa với thiên nhiên', isCorrect: true },
          { content: 'Không liên quan đến đạo đức', isCorrect: false },
          { content: 'Chỉ là vấn đề kỹ thuật', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong hoạt động khoa học yêu cầu điều gì?',
        answers: [
          { content: 'Nghiên cứu bằng mọi giá', isCorrect: false },
          { content: 'Trung thực, khách quan, trách nhiệm xã hội, không đạo văn, tôn trọng quyền sở hữu trí tuệ', isCorrect: true },
          { content: 'Chỉ cần có kết quả', isCorrect: false },
          { content: 'Chỉ cần công bố nhiều', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong hoạt động chính trị yêu cầu điều gì?',
        answers: [
          { content: 'Mưu cầu lợi ích cá nhân', isCorrect: false },
          { content: 'Phục vụ nhân dân, liêm chính, công tâm, không tham nhũng, lạm quyền', isCorrect: true },
          { content: 'Chỉ cần có quyền lực', isCorrect: false },
          { content: 'Chỉ cần tuân thủ cấp trên', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong quan hệ bạn bè yêu cầu điều gì?',
        answers: [
          { content: 'Lợi dụng lẫn nhau', isCorrect: false },
          { content: 'Chân thành, tin cậy, giúp đỡ lẫn nhau, thẳng thắn góp ý', isCorrect: true },
          { content: 'Chỉ cần vui vẻ', isCorrect: false },
          { content: 'Chỉ cần có lợi', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong hoạt động truyền thông yêu cầu điều gì?',
        answers: [
          { content: 'Đưa tin giật gân để thu hút', isCorrect: false },
          { content: 'Trung thực, khách quan, tôn trọng sự thật, bảo vệ quyền riêng tư, trách nhiệm xã hội', isCorrect: true },
          { content: 'Chỉ cần nhiều lượt xem', isCorrect: false },
          { content: 'Đưa tin theo ý muốn', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong hoạt động tư pháp yêu cầu điều gì?',
        answers: [
          { content: 'Thiên vị người giàu', isCorrect: false },
          { content: 'Công bằng, khách quan, liêm chính, bảo vệ công lý, không nhận hối lộ', isCorrect: true },
          { content: 'Chỉ cần tuân thủ luật', isCorrect: false },
          { content: 'Xử nhanh cho xong', isCorrect: false },
        ],
      },
      {
        content: 'Trách nhiệm xã hội của doanh nghiệp (CSR) là gì?',
        answers: [
          { content: 'Chỉ cần nộp thuế', isCorrect: false },
          { content: 'Cam kết đóng góp cho phát triển bền vững, bảo vệ môi trường, phúc lợi cộng đồng', isCorrect: true },
          { content: 'Chỉ cần tạo việc làm', isCorrect: false },
          { content: 'Chỉ cần có lợi nhuận', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong sử dụng mạng xã hội yêu cầu điều gì?',
        answers: [
          { content: 'Tự do phát ngôn không giới hạn', isCorrect: false },
          { content: 'Tôn trọng người khác, không phát tán thông tin sai lệch, không bắt nạt trực tuyến', isCorrect: true },
          { content: 'Đăng mọi thứ mình muốn', isCorrect: false },
          { content: 'Không cần quan tâm hậu quả', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong quan hệ giữa các thế hệ yêu cầu điều gì?',
        answers: [
          { content: 'Thế hệ trẻ phải phục tùng hoàn toàn', isCorrect: false },
          { content: 'Kính trọng người lớn tuổi, yêu thương thế hệ trẻ, kế thừa và phát huy truyền thống', isCorrect: true },
          { content: 'Mỗi thế hệ sống riêng', isCorrect: false },
          { content: 'Thế hệ già phải nhường hết cho trẻ', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức công vụ là gì?',
        answers: [
          { content: 'Quy định hành chính', isCorrect: false },
          { content: 'Hệ thống chuẩn mực đạo đức của cán bộ, công chức trong thực thi công vụ: tận tụy, liêm chính, phục vụ nhân dân', isCorrect: true },
          { content: 'Kỹ năng hành chính', isCorrect: false },
          { content: 'Bằng cấp chuyên môn', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa đạo đức cá nhân và đạo đức xã hội là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Thống nhất biện chứng, đạo đức cá nhân là biểu hiện cụ thể của đạo đức xã hội, đạo đức xã hội định hướng đạo đức cá nhân', isCorrect: true },
          { content: 'Không liên quan', isCorrect: false },
          { content: 'Đạo đức cá nhân quyết định đạo đức xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong hoạt động giáo dục yêu cầu điều gì đối với nhà trường?',
        answers: [
          { content: 'Chỉ cần dạy kiến thức', isCorrect: false },
          { content: 'Kết hợp dạy chữ với dạy người, xây dựng môi trường giáo dục lành mạnh, công bằng', isCorrect: true },
          { content: 'Chỉ cần có cơ sở vật chất tốt', isCorrect: false },
          { content: 'Chỉ cần tuyển sinh nhiều', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong hoạt động y tế yêu cầu điều gì?',
        answers: [
          { content: 'Chỉ cần chữa bệnh', isCorrect: false },
          { content: 'Tận tâm với bệnh nhân, không phân biệt đối xử, bảo mật thông tin, không lạm dụng nghề nghiệp', isCorrect: true },
          { content: 'Chỉ cần có bằng cấp', isCorrect: false },
          { content: 'Chỉ cần tuân thủ quy trình', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức môi trường yêu cầu con người phải làm gì?',
        answers: [
          { content: 'Khai thác tài nguyên tối đa', isCorrect: false },
          { content: 'Sống hài hòa với tự nhiên, bảo vệ môi trường, phát triển bền vững', isCorrect: true },
          { content: 'Chinh phục tự nhiên bằng mọi giá', isCorrect: false },
          { content: 'Không cần quan tâm đến môi trường', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong quan hệ quốc tế yêu cầu điều gì?',
        answers: [
          { content: 'Áp đặt giá trị lên nước khác', isCorrect: false },
          { content: 'Tôn trọng chủ quyền, bình đẳng, hợp tác cùng có lợi, giải quyết tranh chấp hòa bình', isCorrect: true },
          { content: 'Chỉ quan tâm lợi ích quốc gia mình', isCorrect: false },
          { content: 'Can thiệp vào nội bộ nước khác', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Các học thuyết đạo đức
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-dao-duc-hoc',
    title: 'Trắc nghiệm Đạo đức học - Đề số 4',
    slug: 'trac-nghiem-dh-dao-duc-hoc-de-4',
    description:
      'Trắc nghiệm Đạo đức học - Đề số 4. Các học thuyết đạo đức: đạo đức Nho giáo, Phật giáo, phương Tây, Mác-Lênin.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Nho giáo đề cao đức tính nào nhất?',
        answers: [
          { content: 'Dũng', isCorrect: false },
          { content: 'Nhân (lòng thương người)', isCorrect: true },
          { content: 'Trí', isCorrect: false },
          { content: 'Tín', isCorrect: false },
        ],
      },
      {
        content: 'Ngũ thường trong Nho giáo bao gồm những đức tính nào?',
        answers: [
          { content: 'Nhân, Nghĩa, Lễ, Trí, Tín', isCorrect: true },
          { content: 'Nhân, Nghĩa, Lễ, Trí, Dũng', isCorrect: false },
          { content: 'Nhân, Nghĩa, Lễ, Trí, Hiếu', isCorrect: false },
          { content: 'Nhân, Nghĩa, Lễ, Trí, Đức', isCorrect: false },
        ],
      },
      {
        content: 'Tam cương trong Nho giáo là gì?',
        answers: [
          { content: 'Cha - con, vợ - chồng, anh - em', isCorrect: false },
          { content: 'Vua - tôi, cha - con, chồng - vợ', isCorrect: true },
          { content: 'Thầy - trò, cha - con, vua - tôi', isCorrect: false },
          { content: 'Bạn - bè, cha - con, vua - tôi', isCorrect: false },
        ],
      },
      {
        content: 'Khổng Tử quan niệm "Nhân" là gì?',
        answers: [
          { content: 'Sự giàu có', isCorrect: false },
          { content: 'Yêu thương con người, "Kỷ sở bất dục, vật thi ư nhân" (Điều mình không muốn, đừng làm cho người khác)', isCorrect: true },
          { content: 'Sự thông minh', isCorrect: false },
          { content: 'Sự dũng cảm', isCorrect: false },
        ],
      },
      {
        content: 'Phật giáo quan niệm nguồn gốc của khổ đau là gì?',
        answers: [
          { content: 'Do thần linh trừng phạt', isCorrect: false },
          { content: 'Do tham, sân, si (tam độc)', isCorrect: true },
          { content: 'Do nghèo khổ', isCorrect: false },
          { content: 'Do thiếu học vấn', isCorrect: false },
        ],
      },
      {
        content: 'Tứ diệu đế trong Phật giáo bao gồm những gì?',
        answers: [
          { content: 'Sinh, lão, bệnh, tử', isCorrect: false },
          { content: 'Khổ đế, Tập đế, Diệt đế, Đạo đế', isCorrect: true },
          { content: 'Từ, Bi, Hỷ, Xả', isCorrect: false },
          { content: 'Giới, Định, Tuệ', isCorrect: false },
        ],
      },
      {
        content: 'Ngũ giới trong Phật giáo bao gồm những gì?',
        answers: [
          { content: 'Không sát sinh, không trộm cắp, không tà dâm, không nói dối, không uống rượu', isCorrect: true },
          { content: 'Không ăn thịt, không uống rượu, không hút thuốc, không cờ bạc, không trộm cắp', isCorrect: false },
          { content: 'Không giận dữ, không tham lam, không si mê, không kiêu ngạo, không ghen tị', isCorrect: false },
          { content: 'Không nói dối, không nói lời ác, không nói lời thêu dệt, không nói hai lưỡi, không nói lời vô ích', isCorrect: false },
        ],
      },
      {
        content: 'Từ bi trong Phật giáo có nghĩa là gì?',
        answers: [
          { content: 'Sự yếu đuối', isCorrect: false },
          { content: 'Từ là mang lại niềm vui cho chúng sinh, Bi là cứu khổ cho chúng sinh', isCorrect: true },
          { content: 'Sự thờ ơ', isCorrect: false },
          { content: 'Sự sợ hãi', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học của Socrates nhấn mạnh điều gì?',
        answers: [
          { content: 'Sức mạnh thể chất', isCorrect: false },
          { content: 'Tri thức là đức hạnh, người biết điều thiện sẽ làm điều thiện', isCorrect: true },
          { content: 'Sự giàu có', isCorrect: false },
          { content: 'Quyền lực chính trị', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học của Aristotle quan niệm hạnh phúc là gì?',
        answers: [
          { content: 'Sự hưởng thụ vật chất', isCorrect: false },
          { content: 'Hoạt động của linh hồn phù hợp với đức hạnh, hạnh phúc đạt được qua trung dung (mesotes)', isCorrect: true },
          { content: 'Sự nổi tiếng', isCorrect: false },
          { content: 'Sự giàu có', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết đạo đức vị lợi (Utilitarianism) của J.S. Mill chủ trương điều gì?',
        answers: [
          { content: 'Chỉ quan tâm lợi ích cá nhân', isCorrect: false },
          { content: 'Hành vi đạo đức là hành vi mang lại hạnh phúc lớn nhất cho số đông nhất', isCorrect: true },
          { content: 'Không quan tâm đến hậu quả', isCorrect: false },
          { content: 'Chỉ tuân theo nghĩa vụ', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học nghĩa vụ của Kant nhấn mạnh điều gì?',
        answers: [
          { content: 'Hậu quả của hành vi', isCorrect: false },
          { content: 'Hành vi đạo đức phải xuất phát từ nghĩa vụ, tuân theo mệnh lệnh tuyệt đối (categorical imperative)', isCorrect: true },
          { content: 'Lợi ích cá nhân', isCorrect: false },
          { content: 'Cảm xúc cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Mệnh lệnh tuyệt đối của Kant là gì?',
        answers: [
          { content: 'Làm theo cảm xúc', isCorrect: false },
          { content: 'Hành động sao cho nguyên tắc hành động của bạn có thể trở thành quy luật phổ quát', isCorrect: true },
          { content: 'Làm theo lợi ích', isCorrect: false },
          { content: 'Làm theo mệnh lệnh cấp trên', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học Mác-Lênin có đặc điểm gì nổi bật?',
        answers: [
          { content: 'Tách rời đạo đức khỏi thực tiễn', isCorrect: false },
          { content: 'Gắn đạo đức với thực tiễn cách mạng, với lợi ích giai cấp công nhân và nhân dân lao động', isCorrect: true },
          { content: 'Đạo đức trừu tượng, phi giai cấp', isCorrect: false },
          { content: 'Chỉ quan tâm đến cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa khắc kỷ (Stoicism) quan niệm đạo đức như thế nào?',
        answers: [
          { content: 'Hưởng thụ tối đa', isCorrect: false },
          { content: 'Sống theo lý trí, chấp nhận số phận, kiểm soát cảm xúc, đức hạnh là điều duy nhất tốt đẹp', isCorrect: true },
          { content: 'Sống theo bản năng', isCorrect: false },
          { content: 'Tìm kiếm quyền lực', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa khoái lạc (Epicureanism) quan niệm hạnh phúc là gì?',
        answers: [
          { content: 'Hưởng thụ vô độ', isCorrect: false },
          { content: 'Sự thanh thản của tâm hồn (ataraxia), tránh đau khổ, hưởng thụ có chừng mực', isCorrect: true },
          { content: 'Sự giàu có', isCorrect: false },
          { content: 'Quyền lực', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức Nho giáo có hạn chế gì?',
        answers: [
          { content: 'Không có hạn chế', isCorrect: false },
          { content: 'Mang tính đẳng cấp, trọng nam khinh nữ, bảo thủ, phục vụ giai cấp phong kiến', isCorrect: true },
          { content: 'Quá tiến bộ', isCorrect: false },
          { content: 'Quá đơn giản', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức Phật giáo có giá trị tích cực gì?',
        answers: [
          { content: 'Không có giá trị gì', isCorrect: false },
          { content: 'Đề cao lòng từ bi, bình đẳng, hướng thiện, sống hòa hợp với tự nhiên', isCorrect: true },
          { content: 'Chỉ có giá trị tôn giáo', isCorrect: false },
          { content: 'Chỉ có giá trị lịch sử', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết đạo đức đức hạnh (Virtue Ethics) nhấn mạnh điều gì?',
        answers: [
          { content: 'Hậu quả của hành vi', isCorrect: false },
          { content: 'Phẩm chất đạo đức của con người, trở thành người có đức hạnh thay vì chỉ làm hành vi đúng', isCorrect: true },
          { content: 'Nghĩa vụ và quy tắc', isCorrect: false },
          { content: 'Lợi ích xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh kế thừa và phát triển đạo đức truyền thống Việt Nam như thế nào?',
        answers: [
          { content: 'Phủ nhận hoàn toàn', isCorrect: false },
          { content: 'Kế thừa tinh hoa đạo đức dân tộc, kết hợp với đạo đức cách mạng Mác-Lênin', isCorrect: true },
          { content: 'Sao chép hoàn toàn', isCorrect: false },
          { content: 'Không quan tâm đến đạo đức', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học hiện sinh (Existentialism) nhấn mạnh điều gì?',
        answers: [
          { content: 'Tuân theo quy tắc xã hội', isCorrect: false },
          { content: 'Tự do lựa chọn và trách nhiệm cá nhân, con người tự tạo ra bản chất của mình qua hành động', isCorrect: true },
          { content: 'Tuân theo số phận', isCorrect: false },
          { content: 'Phục tùng tập thể', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức Lão - Trang (Đạo giáo) đề cao điều gì?',
        answers: [
          { content: 'Tranh giành quyền lực', isCorrect: false },
          { content: 'Sống thuận theo tự nhiên (vô vi), giản dị, không tranh giành', isCorrect: true },
          { content: 'Tích lũy của cải', isCorrect: false },
          { content: 'Chinh phục tự nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết khế ước xã hội của Rousseau có ảnh hưởng gì đến đạo đức?',
        answers: [
          { content: 'Không có ảnh hưởng', isCorrect: false },
          { content: 'Đề cao quyền tự nhiên, bình đẳng, tự do của con người, đạo đức gắn với ý chí chung', isCorrect: true },
          { content: 'Phủ nhận đạo đức', isCorrect: false },
          { content: 'Chỉ quan tâm đến pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức học thực dụng (Pragmatism) quan niệm đạo đức như thế nào?',
        answers: [
          { content: 'Đạo đức là bất biến', isCorrect: false },
          { content: 'Giá trị đạo đức được đánh giá qua hiệu quả thực tế, cái gì có ích là đúng', isCorrect: true },
          { content: 'Đạo đức không liên quan đến thực tiễn', isCorrect: false },
          { content: 'Đạo đức chỉ là lý thuyết', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức Kitô giáo đề cao giá trị nào?',
        answers: [
          { content: 'Sự giàu có', isCorrect: false },
          { content: 'Tình yêu thương, tha thứ, bác ái, phục vụ tha nhân', isCorrect: true },
          { content: 'Quyền lực', isCorrect: false },
          { content: 'Sự trả thù', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Tổng hợp - Giáo dục đạo đức, xây dựng đạo đức mới
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-dao-duc-hoc',
    title: 'Trắc nghiệm Đạo đức học - Đề số 5',
    slug: 'trac-nghiem-dh-dao-duc-hoc-de-5',
    description:
      'Trắc nghiệm Đạo đức học - Đề số 5. Tổng hợp: giáo dục đạo đức, xây dựng đạo đức mới trong xã hội Việt Nam.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Giáo dục đạo đức là gì?',
        answers: [
          { content: 'Chỉ là dạy lý thuyết về đạo đức', isCorrect: false },
          { content: 'Quá trình tác động có mục đích, có kế hoạch nhằm hình thành ý thức, tình cảm và hành vi đạo đức cho con người', isCorrect: true },
          { content: 'Chỉ là trừng phạt người vi phạm', isCorrect: false },
          { content: 'Chỉ là khen thưởng người tốt', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp giáo dục đạo đức cơ bản bao gồm những gì?',
        answers: [
          { content: 'Chỉ có thuyết phục', isCorrect: false },
          { content: 'Thuyết phục, nêu gương, rèn luyện thực tiễn, khen thưởng và kỷ luật', isCorrect: true },
          { content: 'Chỉ có kỷ luật', isCorrect: false },
          { content: 'Chỉ có nêu gương', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Chí Minh quan niệm đạo đức cách mạng bao gồm những phẩm chất nào?',
        answers: [
          { content: 'Chỉ có trung thành', isCorrect: false },
          { content: 'Cần, kiệm, liêm, chính, chí công vô tư', isCorrect: true },
          { content: 'Chỉ có dũng cảm', isCorrect: false },
          { content: 'Chỉ có thông minh', isCorrect: false },
        ],
      },
      {
        content: '"Cần" trong tư tưởng đạo đức Hồ Chí Minh có nghĩa là gì?',
        answers: [
          { content: 'Cần tiền', isCorrect: false },
          { content: 'Siêng năng, chăm chỉ, cố gắng, dẻo dai trong lao động và công tác', isCorrect: true },
          { content: 'Cần quyền lực', isCorrect: false },
          { content: 'Cần danh vọng', isCorrect: false },
        ],
      },
      {
        content: '"Kiệm" trong tư tưởng đạo đức Hồ Chí Minh có nghĩa là gì?',
        answers: [
          { content: 'Keo kiệt, bủn xỉn', isCorrect: false },
          { content: 'Tiết kiệm, không xa xỉ, không hoang phí, biết sử dụng hợp lý tài sản', isCorrect: true },
          { content: 'Không tiêu tiền', isCorrect: false },
          { content: 'Sống khổ hạnh', isCorrect: false },
        ],
      },
      {
        content: '"Liêm" trong tư tưởng đạo đức Hồ Chí Minh có nghĩa là gì?',
        answers: [
          { content: 'Sự giàu có', isCorrect: false },
          { content: 'Trong sạch, không tham lam, không tham ô, không nhận hối lộ', isCorrect: true },
          { content: 'Sự nổi tiếng', isCorrect: false },
          { content: 'Sự quyền lực', isCorrect: false },
        ],
      },
      {
        content: '"Chính" trong tư tưởng đạo đức Hồ Chí Minh có nghĩa là gì?',
        answers: [
          { content: 'Chính trị', isCorrect: false },
          { content: 'Ngay thẳng, đứng đắn, không gian dối, không xu nịnh', isCorrect: true },
          { content: 'Chính xác', isCorrect: false },
          { content: 'Chính thức', isCorrect: false },
        ],
      },
      {
        content: '"Chí công vô tư" theo Hồ Chí Minh có nghĩa là gì?',
        answers: [
          { content: 'Không quan tâm đến ai', isCorrect: false },
          { content: 'Đặt lợi ích chung lên trên lợi ích riêng, hết lòng phục vụ nhân dân', isCorrect: true },
          { content: 'Không có tài sản riêng', isCorrect: false },
          { content: 'Không có gia đình', isCorrect: false },
        ],
      },
      {
        content: 'Xây dựng đạo đức mới ở Việt Nam hiện nay cần tập trung vào vấn đề gì?',
        answers: [
          { content: 'Chỉ cần phát triển kinh tế', isCorrect: false },
          { content: 'Kết hợp giáo dục đạo đức với xây dựng pháp luật, phát triển kinh tế, xây dựng văn hóa', isCorrect: true },
          { content: 'Chỉ cần giáo dục nhà trường', isCorrect: false },
          { content: 'Chỉ cần tuyên truyền', isCorrect: false },
        ],
      },
      {
        content: 'Suy thoái đạo đức trong xã hội Việt Nam hiện nay biểu hiện ở đâu?',
        answers: [
          { content: 'Không có suy thoái', isCorrect: false },
          { content: 'Tham nhũng, lối sống thực dụng, vô cảm, bạo lực, gian lận, suy thoái tư tưởng chính trị', isCorrect: true },
          { content: 'Chỉ ở lĩnh vực kinh tế', isCorrect: false },
          { content: 'Chỉ ở giới trẻ', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân của suy thoái đạo đức trong xã hội Việt Nam hiện nay là gì?',
        answers: [
          { content: 'Chỉ do kinh tế thị trường', isCorrect: false },
          { content: 'Mặt trái kinh tế thị trường, toàn cầu hóa, hạn chế trong giáo dục, quản lý xã hội', isCorrect: true },
          { content: 'Chỉ do giáo dục yếu kém', isCorrect: false },
          { content: 'Chỉ do ảnh hưởng nước ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của gia đình trong giáo dục đạo đức là gì?',
        answers: [
          { content: 'Không có vai trò', isCorrect: false },
          { content: 'Là môi trường đầu tiên và quan trọng nhất hình thành nhân cách đạo đức cho trẻ em', isCorrect: true },
          { content: 'Chỉ có vai trò kinh tế', isCorrect: false },
          { content: 'Ít quan trọng hơn nhà trường', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của nhà trường trong giáo dục đạo đức là gì?',
        answers: [
          { content: 'Chỉ dạy kiến thức', isCorrect: false },
          { content: 'Giáo dục đạo đức có hệ thống, khoa học, kết hợp dạy chữ với dạy người', isCorrect: true },
          { content: 'Chỉ quản lý học sinh', isCorrect: false },
          { content: 'Chỉ tổ chức thi cử', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của xã hội trong giáo dục đạo đức là gì?',
        answers: [
          { content: 'Không có vai trò', isCorrect: false },
          { content: 'Tạo môi trường xã hội lành mạnh, dư luận xã hội tích cực, các tổ chức xã hội tham gia giáo dục', isCorrect: true },
          { content: 'Chỉ có vai trò trừng phạt', isCorrect: false },
          { content: 'Chỉ có vai trò kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Tự giáo dục đạo đức là gì?',
        answers: [
          { content: 'Không cần ai dạy', isCorrect: false },
          { content: 'Quá trình cá nhân tự ý thức, tự rèn luyện, tự hoàn thiện đạo đức của bản thân', isCorrect: true },
          { content: 'Tự khen mình', isCorrect: false },
          { content: 'Tự do làm mọi thứ', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức truyền thống Việt Nam có những giá trị nổi bật nào?',
        answers: [
          { content: 'Chỉ có lòng yêu nước', isCorrect: false },
          { content: 'Yêu nước, đoàn kết, nhân ái, cần cù, hiếu học, tôn sư trọng đạo', isCorrect: true },
          { content: 'Chỉ có tính cần cù', isCorrect: false },
          { content: 'Chỉ có tính đoàn kết', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa đạo đức truyền thống và đạo đức mới ở Việt Nam là gì?',
        answers: [
          { content: 'Đối lập nhau', isCorrect: false },
          { content: 'Kế thừa và phát triển, giữ gìn giá trị tốt đẹp, loại bỏ yếu tố lạc hậu, bổ sung giá trị mới', isCorrect: true },
          { content: 'Xóa bỏ hoàn toàn đạo đức cũ', isCorrect: false },
          { content: 'Giữ nguyên đạo đức cũ', isCorrect: false },
        ],
      },
      {
        content: 'Phong trào "Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh" có ý nghĩa gì?',
        answers: [
          { content: 'Chỉ là hình thức', isCorrect: false },
          { content: 'Góp phần xây dựng đạo đức mới, ngăn chặn suy thoái, nâng cao phẩm chất cán bộ, đảng viên', isCorrect: true },
          { content: 'Chỉ dành cho đảng viên', isCorrect: false },
          { content: 'Không có ý nghĩa thực tiễn', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong bối cảnh toàn cầu hóa đặt ra thách thức gì?',
        answers: [
          { content: 'Không có thách thức', isCorrect: false },
          { content: 'Xung đột giá trị, ảnh hưởng lối sống thực dụng, cần giữ gìn bản sắc đạo đức dân tộc', isCorrect: true },
          { content: 'Chỉ có cơ hội', isCorrect: false },
          { content: 'Chỉ ảnh hưởng đến kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức cách mạng theo Hồ Chí Minh có vai trò gì?',
        answers: [
          { content: 'Không quan trọng', isCorrect: false },
          { content: 'Là gốc, là nền tảng của người cách mạng, "Người cách mạng phải có đạo đức cách mạng làm nền tảng"', isCorrect: true },
          { content: 'Chỉ là phụ', isCorrect: false },
          { content: 'Chỉ cần cho lãnh đạo', isCorrect: false },
        ],
      },
      {
        content: 'Xây dựng đạo đức mới cần kết hợp những yếu tố nào?',
        answers: [
          { content: 'Chỉ cần giáo dục', isCorrect: false },
          { content: 'Xây đi đôi với chống, giáo dục đi đôi với pháp luật, nêu gương đi đôi với thực hành', isCorrect: true },
          { content: 'Chỉ cần pháp luật', isCorrect: false },
          { content: 'Chỉ cần nêu gương', isCorrect: false },
        ],
      },
      {
        content: 'Đạo đức trong kinh tế thị trường ở Việt Nam cần đảm bảo nguyên tắc gì?',
        answers: [
          { content: 'Kinh doanh bằng mọi giá', isCorrect: false },
          { content: 'Kết hợp lợi ích kinh tế với đạo đức, phát triển kinh tế gắn với công bằng xã hội', isCorrect: true },
          { content: 'Chỉ cần lợi nhuận', isCorrect: false },
          { content: 'Đạo đức không liên quan đến kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của pháp luật trong xây dựng đạo đức mới là gì?',
        answers: [
          { content: 'Pháp luật thay thế đạo đức', isCorrect: false },
          { content: 'Pháp luật hỗ trợ, bảo vệ các giá trị đạo đức, trừng phạt hành vi vi phạm đạo đức nghiêm trọng', isCorrect: true },
          { content: 'Pháp luật không liên quan đến đạo đức', isCorrect: false },
          { content: 'Đạo đức thay thế pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Giáo dục đạo đức cho thanh niên Việt Nam hiện nay cần chú trọng điều gì?',
        answers: [
          { content: 'Chỉ cần dạy lý thuyết', isCorrect: false },
          { content: 'Giáo dục lý tưởng cách mạng, lòng yêu nước, ý thức công dân, kỹ năng sống, phòng chống tiêu cực', isCorrect: true },
          { content: 'Chỉ cần dạy kỹ năng nghề', isCorrect: false },
          { content: 'Chỉ cần dạy ngoại ngữ', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa giáo dục đạo đức gia đình, nhà trường và xã hội là gì?',
        answers: [
          { content: 'Độc lập, không liên quan', isCorrect: false },
          { content: 'Phối hợp chặt chẽ, bổ sung cho nhau, tạo thành hệ thống giáo dục đạo đức toàn diện', isCorrect: true },
          { content: 'Nhà trường quan trọng nhất', isCorrect: false },
          { content: 'Gia đình không quan trọng', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
