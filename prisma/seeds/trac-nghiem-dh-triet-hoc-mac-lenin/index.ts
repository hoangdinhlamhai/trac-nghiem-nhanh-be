import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Chủ nghĩa duy vật biện chứng
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-triet-hoc-mac-lenin',
    title: 'Trắc nghiệm Triết học Mác-Lênin - Đề số 1',
    slug: 'trac-nghiem-dh-triet-hoc-mac-lenin-de-1',
    description:
      'Chủ nghĩa duy vật biện chứng: vật chất, ý thức, mối quan hệ vật chất-ý thức.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Vấn đề cơ bản của triết học là gì?',
        answers: [
          { content: 'Mối quan hệ giữa vật chất và ý thức', isCorrect: true },
          { content: 'Mối quan hệ giữa con người và tự nhiên', isCorrect: false },
          { content: 'Mối quan hệ giữa lý luận và thực tiễn', isCorrect: false },
          { content: 'Mối quan hệ giữa cá nhân và xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa duy vật cho rằng:',
        answers: [
          { content: 'Ý thức có trước, vật chất có sau', isCorrect: false },
          { content: 'Vật chất có trước, ý thức có sau; vật chất quyết định ý thức', isCorrect: true },
          { content: 'Vật chất và ý thức tồn tại độc lập', isCorrect: false },
          { content: 'Không thể nhận thức được thế giới', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa duy tâm cho rằng:',
        answers: [
          { content: 'Vật chất có trước, quyết định ý thức', isCorrect: false },
          { content: 'Ý thức có trước, quyết định vật chất', isCorrect: true },
          { content: 'Vật chất và ý thức cùng tồn tại', isCorrect: false },
          { content: 'Thế giới không thể nhận thức được', isCorrect: false },
        ],
      },
      {
        content: 'Theo Lênin, vật chất là:',
        answers: [
          { content: 'Thực tại khách quan được đem lại cho con người trong cảm giác, tồn tại không lệ thuộc vào cảm giác', isCorrect: true },
          { content: 'Những gì con người nhìn thấy được', isCorrect: false },
          { content: 'Nguyên tử và phân tử', isCorrect: false },
          { content: 'Những gì có khối lượng', isCorrect: false },
        ],
      },
      {
        content: 'Thuộc tính cơ bản nhất của vật chất là:',
        answers: [
          { content: 'Có khối lượng', isCorrect: false },
          { content: 'Có hình dạng', isCorrect: false },
          { content: 'Thực tại khách quan (tồn tại khách quan)', isCorrect: true },
          { content: 'Có màu sắc', isCorrect: false },
        ],
      },
      {
        content: 'Phương thức tồn tại của vật chất là:',
        answers: [
          { content: 'Không gian', isCorrect: false },
          { content: 'Thời gian', isCorrect: false },
          { content: 'Vận động', isCorrect: true },
          { content: 'Đứng im', isCorrect: false },
        ],
      },
      {
        content: 'Theo triết học Mác-Lênin, vận động có mấy hình thức cơ bản?',
        answers: [
          { content: '3 hình thức', isCorrect: false },
          { content: '4 hình thức', isCorrect: false },
          { content: '5 hình thức: cơ học, vật lý, hóa học, sinh học, xã hội', isCorrect: true },
          { content: '6 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Không gian và thời gian là:',
        answers: [
          { content: 'Hình thức tồn tại của vật chất', isCorrect: true },
          { content: 'Phương thức tồn tại của vật chất', isCorrect: false },
          { content: 'Thuộc tính của ý thức', isCorrect: false },
          { content: 'Sản phẩm của tư duy', isCorrect: false },
        ],
      },
      {
        content: 'Ý thức là gì theo quan điểm duy vật biện chứng?',
        answers: [
          { content: 'Sự phản ánh hiện thực khách quan vào bộ óc con người một cách năng động, sáng tạo', isCorrect: true },
          { content: 'Sản phẩm của thần linh', isCorrect: false },
          { content: 'Tồn tại độc lập với vật chất', isCorrect: false },
          { content: 'Bản sao chính xác của hiện thực', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc tự nhiên của ý thức là:',
        answers: [
          { content: 'Lao động và ngôn ngữ', isCorrect: false },
          { content: 'Bộ óc người và thế giới khách quan tác động vào bộ óc', isCorrect: true },
          { content: 'Giáo dục và đào tạo', isCorrect: false },
          { content: 'Kinh nghiệm sống', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc xã hội của ý thức là:',
        answers: [
          { content: 'Bộ óc người', isCorrect: false },
          { content: 'Thế giới khách quan', isCorrect: false },
          { content: 'Lao động và ngôn ngữ', isCorrect: true },
          { content: 'Di truyền sinh học', isCorrect: false },
        ],
      },
      {
        content: 'Trong mối quan hệ giữa vật chất và ý thức, vật chất có vai trò:',
        answers: [
          { content: 'Quyết định ý thức', isCorrect: true },
          { content: 'Phụ thuộc vào ý thức', isCorrect: false },
          { content: 'Không liên quan đến ý thức', isCorrect: false },
          { content: 'Bị ý thức quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Ý thức có tác động trở lại vật chất thông qua:',
        answers: [
          { content: 'Hoạt động thực tiễn của con người', isCorrect: true },
          { content: 'Suy nghĩ thuần túy', isCorrect: false },
          { content: 'Cầu nguyện', isCorrect: false },
          { content: 'Ý thức tự động thay đổi vật chất', isCorrect: false },
        ],
      },
      {
        content: 'Tính thống nhất vật chất của thế giới thể hiện ở:',
        answers: [
          { content: 'Thế giới chỉ có một bản chất duy nhất là vật chất', isCorrect: true },
          { content: 'Thế giới có hai bản chất: vật chất và tinh thần', isCorrect: false },
          { content: 'Thế giới do thần linh tạo ra', isCorrect: false },
          { content: 'Thế giới là sản phẩm của ý thức', isCorrect: false },
        ],
      },
      {
        content: 'Đứng im là:',
        answers: [
          { content: 'Trạng thái không vận động', isCorrect: false },
          { content: 'Trạng thái vận động trong thăng bằng, ổn định tương đối', isCorrect: true },
          { content: 'Trạng thái vĩnh viễn', isCorrect: false },
          { content: 'Không tồn tại', isCorrect: false },
        ],
      },
      {
        content: 'Kết cấu của ý thức bao gồm:',
        answers: [
          { content: 'Tri thức, tình cảm, ý chí', isCorrect: true },
          { content: 'Chỉ có tri thức', isCorrect: false },
          { content: 'Chỉ có tình cảm', isCorrect: false },
          { content: 'Chỉ có ý chí', isCorrect: false },
        ],
      },
      {
        content: 'Trong kết cấu ý thức, yếu tố nào là quan trọng nhất?',
        answers: [
          { content: 'Tình cảm', isCorrect: false },
          { content: 'Tri thức', isCorrect: true },
          { content: 'Ý chí', isCorrect: false },
          { content: 'Niềm tin', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết "nhất nguyên" trong triết học là:',
        answers: [
          { content: 'Thừa nhận chỉ có một bản nguyên (vật chất hoặc ý thức) là cơ sở của thế giới', isCorrect: true },
          { content: 'Thừa nhận hai bản nguyên', isCorrect: false },
          { content: 'Phủ nhận sự tồn tại của thế giới', isCorrect: false },
          { content: 'Thừa nhận nhiều bản nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết "nhị nguyên" trong triết học cho rằng:',
        answers: [
          { content: 'Chỉ có vật chất tồn tại', isCorrect: false },
          { content: 'Chỉ có ý thức tồn tại', isCorrect: false },
          { content: 'Vật chất và ý thức là hai bản nguyên tồn tại độc lập, song song', isCorrect: true },
          { content: 'Thế giới không thể nhận thức', isCorrect: false },
        ],
      },
      {
        content: 'Thuyết "bất khả tri" cho rằng:',
        answers: [
          { content: 'Con người có thể nhận thức được thế giới', isCorrect: false },
          { content: 'Con người không thể nhận thức được thế giới hoặc nhận thức không đáng tin cậy', isCorrect: true },
          { content: 'Thế giới do ý thức tạo ra', isCorrect: false },
          { content: 'Vật chất quyết định ý thức', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa phương pháp luận của mối quan hệ vật chất-ý thức là:',
        answers: [
          { content: 'Xuất phát từ thực tế khách quan, đồng thời phát huy tính năng động chủ quan', isCorrect: true },
          { content: 'Chỉ cần xuất phát từ ý muốn chủ quan', isCorrect: false },
          { content: 'Không cần quan tâm đến thực tế', isCorrect: false },
          { content: 'Ý thức không có vai trò gì', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa duy vật đã trải qua mấy hình thức lịch sử?',
        answers: [
          { content: '2 hình thức', isCorrect: false },
          { content: '3 hình thức: duy vật chất phác, duy vật siêu hình, duy vật biện chứng', isCorrect: true },
          { content: '4 hình thức', isCorrect: false },
          { content: '5 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Chủ nghĩa duy vật biện chứng là sự thống nhất giữa:',
        answers: [
          { content: 'Chủ nghĩa duy vật và phép biện chứng', isCorrect: true },
          { content: 'Chủ nghĩa duy tâm và phép siêu hình', isCorrect: false },
          { content: 'Chủ nghĩa duy vật và phép siêu hình', isCorrect: false },
          { content: 'Chủ nghĩa duy tâm và phép biện chứng', isCorrect: false },
        ],
      },
      {
        content: 'Phản ánh là thuộc tính của:',
        answers: [
          { content: 'Chỉ con người', isCorrect: false },
          { content: 'Chỉ sinh vật', isCorrect: false },
          { content: 'Mọi dạng vật chất', isCorrect: true },
          { content: 'Chỉ máy tính', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức vận động cao nhất và phức tạp nhất là:',
        answers: [
          { content: 'Vận động cơ học', isCorrect: false },
          { content: 'Vận động vật lý', isCorrect: false },
          { content: 'Vận động sinh học', isCorrect: false },
          { content: 'Vận động xã hội', isCorrect: true },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Phép biện chứng duy vật
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-triet-hoc-mac-lenin',
    title: 'Trắc nghiệm Triết học Mác-Lênin - Đề số 2',
    slug: 'trac-nghiem-dh-triet-hoc-mac-lenin-de-2',
    description:
      'Phép biện chứng duy vật: hai nguyên lý, ba quy luật cơ bản.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Phép biện chứng duy vật có mấy nguyên lý cơ bản?',
        answers: [
          { content: '1 nguyên lý', isCorrect: false },
          { content: '2 nguyên lý', isCorrect: true },
          { content: '3 nguyên lý', isCorrect: false },
          { content: '4 nguyên lý', isCorrect: false },
        ],
      },
      {
        content: 'Hai nguyên lý cơ bản của phép biện chứng duy vật là:',
        answers: [
          { content: 'Nguyên lý về mối liên hệ phổ biến và nguyên lý về sự phát triển', isCorrect: true },
          { content: 'Nguyên lý nhân quả và nguyên lý mâu thuẫn', isCorrect: false },
          { content: 'Nguyên lý thống nhất và nguyên lý đấu tranh', isCorrect: false },
          { content: 'Nguyên lý lượng-chất và nguyên lý phủ định', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên lý về mối liên hệ phổ biến khẳng định:',
        answers: [
          { content: 'Các sự vật, hiện tượng tồn tại cô lập', isCorrect: false },
          { content: 'Các sự vật, hiện tượng tồn tại trong mối liên hệ, tác động qua lại lẫn nhau', isCorrect: true },
          { content: 'Chỉ một số sự vật có liên hệ với nhau', isCorrect: false },
          { content: 'Mối liên hệ do con người tạo ra', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên lý về sự phát triển khẳng định:',
        answers: [
          { content: 'Mọi sự vật đều đứng im', isCorrect: false },
          { content: 'Sự vật vận động đi lên từ thấp đến cao, từ đơn giản đến phức tạp', isCorrect: true },
          { content: 'Sự vật chỉ thay đổi về lượng', isCorrect: false },
          { content: 'Sự vật luôn đi theo vòng tròn', isCorrect: false },
        ],
      },
      {
        content: 'Phép biện chứng duy vật có mấy quy luật cơ bản?',
        answers: [
          { content: '2 quy luật', isCorrect: false },
          { content: '3 quy luật', isCorrect: true },
          { content: '4 quy luật', isCorrect: false },
          { content: '5 quy luật', isCorrect: false },
        ],
      },
      {
        content: 'Ba quy luật cơ bản của phép biện chứng duy vật là:',
        answers: [
          { content: 'Quy luật thống nhất và đấu tranh của các mặt đối lập, quy luật chuyển hóa lượng-chất, quy luật phủ định của phủ định', isCorrect: true },
          { content: 'Quy luật nhân quả, quy luật tất yếu, quy luật ngẫu nhiên', isCorrect: false },
          { content: 'Quy luật cung cầu, quy luật giá trị, quy luật cạnh tranh', isCorrect: false },
          { content: 'Quy luật di truyền, quy luật biến dị, quy luật chọn lọc', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật thống nhất và đấu tranh của các mặt đối lập chỉ ra:',
        answers: [
          { content: 'Nguồn gốc, động lực của sự vận động và phát triển', isCorrect: true },
          { content: 'Cách thức của sự phát triển', isCorrect: false },
          { content: 'Khuynh hướng của sự phát triển', isCorrect: false },
          { content: 'Kết quả của sự phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Mâu thuẫn biện chứng là:',
        answers: [
          { content: 'Sự xung đột giữa hai người', isCorrect: false },
          { content: 'Sự thống nhất và đấu tranh giữa các mặt đối lập trong cùng một sự vật', isCorrect: true },
          { content: 'Sự khác biệt giữa hai sự vật', isCorrect: false },
          { content: 'Sự mâu thuẫn trong lời nói', isCorrect: false },
        ],
      },
      {
        content: 'Trong mâu thuẫn biện chứng, "thống nhất" có nghĩa là:',
        answers: [
          { content: 'Hai mặt đối lập hoàn toàn giống nhau', isCorrect: false },
          { content: 'Hai mặt đối lập nương tựa, ràng buộc, làm tiền đề cho nhau', isCorrect: true },
          { content: 'Hai mặt đối lập hòa hợp hoàn toàn', isCorrect: false },
          { content: 'Không có đấu tranh', isCorrect: false },
        ],
      },
      {
        content: 'Đấu tranh giữa các mặt đối lập dẫn đến:',
        answers: [
          { content: 'Sự tiêu diệt cả hai mặt', isCorrect: false },
          { content: 'Sự chuyển hóa của mâu thuẫn, sự vật cũ mất đi, sự vật mới ra đời', isCorrect: true },
          { content: 'Sự đứng im của sự vật', isCorrect: false },
          { content: 'Sự quay lại trạng thái ban đầu', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật chuyển hóa từ những thay đổi về lượng thành những thay đổi về chất chỉ ra:',
        answers: [
          { content: 'Nguồn gốc của sự phát triển', isCorrect: false },
          { content: 'Cách thức (phương thức) của sự vận động và phát triển', isCorrect: true },
          { content: 'Khuynh hướng của sự phát triển', isCorrect: false },
          { content: 'Mục đích của sự phát triển', isCorrect: false },
        ],
      },
      {
        content: '"Chất" trong triết học là:',
        answers: [
          { content: 'Chất liệu cấu tạo nên sự vật', isCorrect: false },
          { content: 'Tính quy định khách quan vốn có của sự vật, là sự thống nhất hữu cơ các thuộc tính', isCorrect: true },
          { content: 'Chất lượng sản phẩm', isCorrect: false },
          { content: 'Thành phần hóa học', isCorrect: false },
        ],
      },
      {
        content: '"Lượng" trong triết học là:',
        answers: [
          { content: 'Số lượng sản phẩm', isCorrect: false },
          { content: 'Tính quy định khách quan vốn có của sự vật về mặt số lượng, quy mô, tốc độ, nhịp điệu', isCorrect: true },
          { content: 'Khối lượng vật chất', isCorrect: false },
          { content: 'Trọng lượng', isCorrect: false },
        ],
      },
      {
        content: '"Độ" trong quy luật lượng-chất là:',
        answers: [
          { content: 'Khoảng giới hạn mà trong đó sự thay đổi về lượng chưa làm thay đổi về chất', isCorrect: true },
          { content: 'Nhiệt độ của sự vật', isCorrect: false },
          { content: 'Mức độ phát triển', isCorrect: false },
          { content: 'Điểm nút', isCorrect: false },
        ],
      },
      {
        content: '"Điểm nút" là:',
        answers: [
          { content: 'Điểm mà tại đó sự thay đổi về lượng đủ để làm thay đổi về chất', isCorrect: true },
          { content: 'Điểm bắt đầu của sự vật', isCorrect: false },
          { content: 'Điểm kết thúc của sự vật', isCorrect: false },
          { content: 'Điểm giữa của quá trình', isCorrect: false },
        ],
      },
      {
        content: '"Bước nhảy" là:',
        answers: [
          { content: 'Sự thay đổi dần dần về lượng', isCorrect: false },
          { content: 'Sự chuyển hóa về chất do sự thay đổi về lượng trước đó gây ra', isCorrect: true },
          { content: 'Sự đứng im của sự vật', isCorrect: false },
          { content: 'Sự quay lại trạng thái cũ', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phủ định của phủ định chỉ ra:',
        answers: [
          { content: 'Nguồn gốc của sự phát triển', isCorrect: false },
          { content: 'Cách thức của sự phát triển', isCorrect: false },
          { content: 'Khuynh hướng của sự phát triển (đi lên theo hình xoáy ốc)', isCorrect: true },
          { content: 'Tốc độ của sự phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Phủ định biện chứng khác phủ định siêu hình ở chỗ:',
        answers: [
          { content: 'Phủ định biện chứng có kế thừa, là tiền đề cho sự phát triển tiếp theo', isCorrect: true },
          { content: 'Phủ định biện chứng xóa bỏ hoàn toàn cái cũ', isCorrect: false },
          { content: 'Phủ định biện chứng không liên quan đến cái cũ', isCorrect: false },
          { content: 'Phủ định biện chứng là sự phá hủy', isCorrect: false },
        ],
      },
      {
        content: 'Đặc trưng cơ bản của phủ định biện chứng là:',
        answers: [
          { content: 'Tính khách quan và tính kế thừa', isCorrect: true },
          { content: 'Tính chủ quan và tính phá hủy', isCorrect: false },
          { content: 'Tính ngẫu nhiên', isCorrect: false },
          { content: 'Tính lặp lại hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Sự phát triển theo quy luật phủ định của phủ định diễn ra theo hình:',
        answers: [
          { content: 'Đường thẳng', isCorrect: false },
          { content: 'Đường tròn', isCorrect: false },
          { content: 'Đường xoáy ốc (xoắn ốc)', isCorrect: true },
          { content: 'Đường zích zắc', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa phương pháp luận của quy luật mâu thuẫn là:',
        answers: [
          { content: 'Phải phát hiện mâu thuẫn và tìm cách giải quyết mâu thuẫn', isCorrect: true },
          { content: 'Phải tránh mâu thuẫn', isCorrect: false },
          { content: 'Phải xóa bỏ mọi mâu thuẫn', isCorrect: false },
          { content: 'Mâu thuẫn không có ý nghĩa gì', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa phương pháp luận của quy luật lượng-chất là:',
        answers: [
          { content: 'Phải tích lũy dần về lượng để tạo ra sự thay đổi về chất, tránh nóng vội hoặc bảo thủ', isCorrect: true },
          { content: 'Chỉ cần thay đổi về chất', isCorrect: false },
          { content: 'Không cần tích lũy về lượng', isCorrect: false },
          { content: 'Lượng và chất không liên quan', isCorrect: false },
        ],
      },
      {
        content: 'Mâu thuẫn bên trong là:',
        answers: [
          { content: 'Mâu thuẫn giữa các mặt đối lập trong cùng một sự vật', isCorrect: true },
          { content: 'Mâu thuẫn giữa sự vật này với sự vật khác', isCorrect: false },
          { content: 'Mâu thuẫn giữa con người với tự nhiên', isCorrect: false },
          { content: 'Mâu thuẫn giữa các quốc gia', isCorrect: false },
        ],
      },
      {
        content: 'Mâu thuẫn cơ bản là:',
        answers: [
          { content: 'Mâu thuẫn quy định bản chất của sự vật, tồn tại suốt quá trình phát triển', isCorrect: true },
          { content: 'Mâu thuẫn nổi lên hàng đầu ở mỗi giai đoạn', isCorrect: false },
          { content: 'Mâu thuẫn giữa hai sự vật', isCorrect: false },
          { content: 'Mâu thuẫn không quan trọng', isCorrect: false },
        ],
      },
      {
        content: 'Mâu thuẫn chủ yếu là:',
        answers: [
          { content: 'Mâu thuẫn nổi lên hàng đầu ở mỗi giai đoạn phát triển, chi phối các mâu thuẫn khác', isCorrect: true },
          { content: 'Mâu thuẫn tồn tại suốt quá trình phát triển', isCorrect: false },
          { content: 'Mâu thuẫn bên ngoài sự vật', isCorrect: false },
          { content: 'Mâu thuẫn không cần giải quyết', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Các cặp phạm trù
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-triet-hoc-mac-lenin',
    title: 'Trắc nghiệm Triết học Mác-Lênin - Đề số 3',
    slug: 'trac-nghiem-dh-triet-hoc-mac-lenin-de-3',
    description:
      'Các cặp phạm trù: nguyên nhân-kết quả, tất nhiên-ngẫu nhiên, nội dung-hình thức, bản chất-hiện tượng, khả năng-hiện thực, cái riêng-cái chung.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Phép biện chứng duy vật có mấy cặp phạm trù cơ bản?',
        answers: [
          { content: '4 cặp', isCorrect: false },
          { content: '5 cặp', isCorrect: false },
          { content: '6 cặp', isCorrect: true },
          { content: '7 cặp', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân là:',
        answers: [
          { content: 'Sự tác động lẫn nhau giữa các mặt trong một sự vật hoặc giữa các sự vật gây ra biến đổi', isCorrect: true },
          { content: 'Kết quả của sự biến đổi', isCorrect: false },
          { content: 'Điều kiện bên ngoài', isCorrect: false },
          { content: 'Mục đích của sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ nhân quả có tính chất:',
        answers: [
          { content: 'Khách quan, phổ biến, tất yếu', isCorrect: true },
          { content: 'Chủ quan, ngẫu nhiên', isCorrect: false },
          { content: 'Chỉ tồn tại trong tự nhiên', isCorrect: false },
          { content: 'Do con người tạo ra', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân và kết quả có thể:',
        answers: [
          { content: 'Chuyển hóa lẫn nhau trong những điều kiện nhất định', isCorrect: true },
          { content: 'Không bao giờ chuyển hóa', isCorrect: false },
          { content: 'Luôn cố định không thay đổi', isCorrect: false },
          { content: 'Tồn tại độc lập hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Tất nhiên là:',
        answers: [
          { content: 'Cái do nguyên nhân bên trong quy định, trong điều kiện nhất định phải xảy ra', isCorrect: true },
          { content: 'Cái có thể xảy ra hoặc không', isCorrect: false },
          { content: 'Cái do nguyên nhân bên ngoài quy định', isCorrect: false },
          { content: 'Cái không thể dự đoán', isCorrect: false },
        ],
      },
      {
        content: 'Ngẫu nhiên là:',
        answers: [
          { content: 'Cái không có nguyên nhân', isCorrect: false },
          { content: 'Cái do nguyên nhân bên ngoài, do sự ngẫu hợp nhiều hoàn cảnh quy định, có thể xảy ra hoặc không', isCorrect: true },
          { content: 'Cái luôn luôn xảy ra', isCorrect: false },
          { content: 'Cái do con người tạo ra', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa tất nhiên và ngẫu nhiên là:',
        answers: [
          { content: 'Tất nhiên vạch đường đi cho mình thông qua ngẫu nhiên', isCorrect: true },
          { content: 'Tất nhiên và ngẫu nhiên không liên quan', isCorrect: false },
          { content: 'Ngẫu nhiên quyết định tất nhiên', isCorrect: false },
          { content: 'Tất nhiên loại trừ ngẫu nhiên', isCorrect: false },
        ],
      },
      {
        content: 'Nội dung là:',
        answers: [
          { content: 'Hình dáng bên ngoài của sự vật', isCorrect: false },
          { content: 'Tổng hợp tất cả các mặt, yếu tố, quá trình tạo nên sự vật', isCorrect: true },
          { content: 'Cấu trúc bên ngoài', isCorrect: false },
          { content: 'Vỏ bọc của sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức là:',
        answers: [
          { content: 'Phương thức tồn tại và phát triển của nội dung, là hệ thống các mối liên hệ tương đối bền vững giữa các yếu tố', isCorrect: true },
          { content: 'Chỉ là vẻ bề ngoài', isCorrect: false },
          { content: 'Không liên quan đến nội dung', isCorrect: false },
          { content: 'Luôn thay đổi trước nội dung', isCorrect: false },
        ],
      },
      {
        content: 'Trong mối quan hệ nội dung-hình thức:',
        answers: [
          { content: 'Nội dung quyết định hình thức, hình thức tác động trở lại nội dung', isCorrect: true },
          { content: 'Hình thức quyết định nội dung', isCorrect: false },
          { content: 'Nội dung và hình thức không liên quan', isCorrect: false },
          { content: 'Hình thức luôn phù hợp với nội dung', isCorrect: false },
        ],
      },
      {
        content: 'Bản chất là:',
        answers: [
          { content: 'Tổng hợp tất cả các mặt, mối liên hệ tất nhiên, tương đối ổn định bên trong sự vật', isCorrect: true },
          { content: 'Những gì biểu hiện ra bên ngoài', isCorrect: false },
          { content: 'Hình dáng bên ngoài', isCorrect: false },
          { content: 'Hiện tượng quan sát được', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng là:',
        answers: [
          { content: 'Cái bên trong của sự vật', isCorrect: false },
          { content: 'Sự biểu hiện ra bên ngoài của bản chất', isCorrect: true },
          { content: 'Bản chất của sự vật', isCorrect: false },
          { content: 'Cái không thể quan sát', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa bản chất và hiện tượng:',
        answers: [
          { content: 'Bản chất bộc lộ qua hiện tượng, hiện tượng là biểu hiện của bản chất', isCorrect: true },
          { content: 'Bản chất và hiện tượng không liên quan', isCorrect: false },
          { content: 'Hiện tượng quyết định bản chất', isCorrect: false },
          { content: 'Bản chất luôn trùng khớp với hiện tượng', isCorrect: false },
        ],
      },
      {
        content: 'Khả năng là:',
        answers: [
          { content: 'Cái đã xảy ra', isCorrect: false },
          { content: 'Cái chưa xuất hiện nhưng sẽ xuất hiện khi có điều kiện thích hợp', isCorrect: true },
          { content: 'Cái không bao giờ xảy ra', isCorrect: false },
          { content: 'Cái đang tồn tại', isCorrect: false },
        ],
      },
      {
        content: 'Hiện thực là:',
        answers: [
          { content: 'Cái chưa xảy ra', isCorrect: false },
          { content: 'Cái đang tồn tại thực sự', isCorrect: true },
          { content: 'Cái tưởng tượng', isCorrect: false },
          { content: 'Cái không thể xảy ra', isCorrect: false },
        ],
      },
      {
        content: 'Khả năng chuyển hóa thành hiện thực khi:',
        answers: [
          { content: 'Có đủ điều kiện cần thiết', isCorrect: true },
          { content: 'Tự động chuyển hóa', isCorrect: false },
          { content: 'Không cần điều kiện gì', isCorrect: false },
          { content: 'Do ý muốn chủ quan', isCorrect: false },
        ],
      },
      {
        content: 'Cái riêng là:',
        answers: [
          { content: 'Một sự vật, hiện tượng, quá trình riêng lẻ nhất định', isCorrect: true },
          { content: 'Thuộc tính chung của nhiều sự vật', isCorrect: false },
          { content: 'Cái giống nhau giữa các sự vật', isCorrect: false },
          { content: 'Cái phổ biến', isCorrect: false },
        ],
      },
      {
        content: 'Cái chung là:',
        answers: [
          { content: 'Một sự vật cụ thể', isCorrect: false },
          { content: 'Những mặt, thuộc tính giống nhau được lặp lại ở nhiều sự vật', isCorrect: true },
          { content: 'Cái duy nhất', isCorrect: false },
          { content: 'Cái không lặp lại', isCorrect: false },
        ],
      },
      {
        content: 'Cái đơn nhất là:',
        answers: [
          { content: 'Cái chung cho mọi sự vật', isCorrect: false },
          { content: 'Những nét, thuộc tính chỉ có ở một sự vật, không lặp lại ở sự vật khác', isCorrect: true },
          { content: 'Cái giống nhau giữa các sự vật', isCorrect: false },
          { content: 'Cái phổ biến nhất', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa cái riêng và cái chung:',
        answers: [
          { content: 'Cái chung chỉ tồn tại trong cái riêng, thông qua cái riêng; cái riêng chứa đựng cái chung', isCorrect: true },
          { content: 'Cái chung tồn tại độc lập ngoài cái riêng', isCorrect: false },
          { content: 'Cái riêng không chứa cái chung', isCorrect: false },
          { content: 'Cái chung và cái riêng không liên quan', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa phương pháp luận của cặp phạm trù nguyên nhân-kết quả:',
        answers: [
          { content: 'Muốn nhận thức sự vật phải tìm nguyên nhân, muốn loại bỏ sự vật phải loại bỏ nguyên nhân', isCorrect: true },
          { content: 'Không cần tìm nguyên nhân', isCorrect: false },
          { content: 'Chỉ cần quan sát kết quả', isCorrect: false },
          { content: 'Nguyên nhân không quan trọng', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng "giả tượng" (giả dối) là:',
        answers: [
          { content: 'Hiện tượng biểu hiện sai lệch, xuyên tạc bản chất', isCorrect: true },
          { content: 'Hiện tượng phản ánh đúng bản chất', isCorrect: false },
          { content: 'Hiện tượng không tồn tại', isCorrect: false },
          { content: 'Hiện tượng do con người tạo ra', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa phương pháp luận của cặp bản chất-hiện tượng:',
        answers: [
          { content: 'Phải thông qua nhiều hiện tượng mới nhận thức đúng bản chất, không dừng lại ở hiện tượng bề ngoài', isCorrect: true },
          { content: 'Chỉ cần quan sát hiện tượng là đủ', isCorrect: false },
          { content: 'Bản chất không thể nhận thức', isCorrect: false },
          { content: 'Hiện tượng luôn phản ánh đúng bản chất', isCorrect: false },
        ],
      },
      {
        content: 'Trong cặp phạm trù nội dung-hình thức, khi hình thức không phù hợp với nội dung thì:',
        answers: [
          { content: 'Hình thức cản trở sự phát triển của nội dung', isCorrect: true },
          { content: 'Nội dung tự thay đổi', isCorrect: false },
          { content: 'Không có ảnh hưởng gì', isCorrect: false },
          { content: 'Hình thức tự điều chỉnh', isCorrect: false },
        ],
      },
      {
        content: 'Ý nghĩa phương pháp luận của cặp phạm trù khả năng-hiện thực:',
        answers: [
          { content: 'Phải dựa vào hiện thực, đồng thời tạo điều kiện để khả năng chuyển hóa thành hiện thực', isCorrect: true },
          { content: 'Chỉ cần dựa vào khả năng', isCorrect: false },
          { content: 'Không cần quan tâm đến khả năng', isCorrect: false },
          { content: 'Khả năng tự động thành hiện thực', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Nhận thức luận
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-triet-hoc-mac-lenin',
    title: 'Trắc nghiệm Triết học Mác-Lênin - Đề số 4',
    slug: 'trac-nghiem-dh-triet-hoc-mac-lenin-de-4',
    description:
      'Nhận thức luận: thực tiễn, nhận thức, chân lý.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Theo triết học Mác-Lênin, nhận thức là:',
        answers: [
          { content: 'Quá trình phản ánh hiện thực khách quan vào bộ óc con người một cách năng động, sáng tạo', isCorrect: true },
          { content: 'Sự sao chép máy móc hiện thực', isCorrect: false },
          { content: 'Sản phẩm của thần linh', isCorrect: false },
          { content: 'Quá trình hoàn toàn chủ quan', isCorrect: false },
        ],
      },
      {
        content: 'Thực tiễn là:',
        answers: [
          { content: 'Hoạt động vật chất có mục đích, mang tính lịch sử-xã hội của con người nhằm cải tạo tự nhiên và xã hội', isCorrect: true },
          { content: 'Mọi hoạt động của con người', isCorrect: false },
          { content: 'Hoạt động tư duy', isCorrect: false },
          { content: 'Hoạt động tinh thần', isCorrect: false },
        ],
      },
      {
        content: 'Thực tiễn có mấy hình thức cơ bản?',
        answers: [
          { content: '2 hình thức', isCorrect: false },
          { content: '3 hình thức: sản xuất vật chất, hoạt động chính trị-xã hội, thực nghiệm khoa học', isCorrect: true },
          { content: '4 hình thức', isCorrect: false },
          { content: '5 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Hình thức thực tiễn cơ bản nhất là:',
        answers: [
          { content: 'Hoạt động chính trị-xã hội', isCorrect: false },
          { content: 'Thực nghiệm khoa học', isCorrect: false },
          { content: 'Sản xuất vật chất', isCorrect: true },
          { content: 'Hoạt động nghệ thuật', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của thực tiễn đối với nhận thức:',
        answers: [
          { content: 'Là cơ sở, động lực, mục đích của nhận thức và là tiêu chuẩn kiểm tra chân lý', isCorrect: true },
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Chỉ là mục đích của nhận thức', isCorrect: false },
          { content: 'Chỉ là tiêu chuẩn kiểm tra chân lý', isCorrect: false },
        ],
      },
      {
        content: 'Con đường biện chứng của nhận thức chân lý theo Lênin là:',
        answers: [
          { content: 'Từ trực quan sinh động đến tư duy trừu tượng, từ tư duy trừu tượng đến thực tiễn', isCorrect: true },
          { content: 'Từ tư duy đến thực tiễn', isCorrect: false },
          { content: 'Từ thực tiễn đến lý luận', isCorrect: false },
          { content: 'Từ lý luận đến tư duy', isCorrect: false },
        ],
      },
      {
        content: 'Nhận thức cảm tính bao gồm:',
        answers: [
          { content: 'Cảm giác, tri giác, biểu tượng', isCorrect: true },
          { content: 'Khái niệm, phán đoán, suy luận', isCorrect: false },
          { content: 'Phân tích, tổng hợp', isCorrect: false },
          { content: 'Quy nạp, diễn dịch', isCorrect: false },
        ],
      },
      {
        content: 'Nhận thức lý tính bao gồm:',
        answers: [
          { content: 'Cảm giác, tri giác, biểu tượng', isCorrect: false },
          { content: 'Khái niệm, phán đoán, suy luận', isCorrect: true },
          { content: 'Cảm giác và khái niệm', isCorrect: false },
          { content: 'Tri giác và phán đoán', isCorrect: false },
        ],
      },
      {
        content: 'Cảm giác là:',
        answers: [
          { content: 'Hình thức phản ánh từng thuộc tính riêng lẻ của sự vật khi tác động trực tiếp vào giác quan', isCorrect: true },
          { content: 'Hình ảnh hoàn chỉnh về sự vật', isCorrect: false },
          { content: 'Hình ảnh được tái hiện trong óc', isCorrect: false },
          { content: 'Phản ánh bản chất sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Tri giác là:',
        answers: [
          { content: 'Phản ánh từng thuộc tính riêng lẻ', isCorrect: false },
          { content: 'Hình ảnh tương đối hoàn chỉnh về sự vật khi sự vật tác động trực tiếp vào giác quan', isCorrect: true },
          { content: 'Hình ảnh được tái hiện khi sự vật không còn', isCorrect: false },
          { content: 'Phản ánh bản chất sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Biểu tượng là:',
        answers: [
          { content: 'Phản ánh trực tiếp sự vật', isCorrect: false },
          { content: 'Hình ảnh về sự vật được tái hiện trong óc khi sự vật không còn tác động trực tiếp', isCorrect: true },
          { content: 'Khái niệm về sự vật', isCorrect: false },
          { content: 'Phán đoán về sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm là:',
        answers: [
          { content: 'Hình thức tư duy phản ánh những thuộc tính bản chất, chung của một lớp sự vật', isCorrect: true },
          { content: 'Hình ảnh trực quan về sự vật', isCorrect: false },
          { content: 'Cảm giác về sự vật', isCorrect: false },
          { content: 'Tri giác về sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán là:',
        answers: [
          { content: 'Hình thức tư duy liên kết các khái niệm để khẳng định hoặc phủ định một thuộc tính của sự vật', isCorrect: true },
          { content: 'Cảm giác về sự vật', isCorrect: false },
          { content: 'Hình ảnh trực quan', isCorrect: false },
          { content: 'Biểu tượng về sự vật', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận là:',
        answers: [
          { content: 'Hình thức tư duy rút ra phán đoán mới từ những phán đoán đã biết', isCorrect: true },
          { content: 'Cảm giác trực tiếp', isCorrect: false },
          { content: 'Tri giác về sự vật', isCorrect: false },
          { content: 'Biểu tượng trong óc', isCorrect: false },
        ],
      },
      {
        content: 'Chân lý là:',
        answers: [
          { content: 'Tri thức phù hợp với hiện thực khách quan và được thực tiễn kiểm nghiệm', isCorrect: true },
          { content: 'Mọi tri thức con người có', isCorrect: false },
          { content: 'Ý kiến của đa số', isCorrect: false },
          { content: 'Quan điểm của người có quyền lực', isCorrect: false },
        ],
      },
      {
        content: 'Tiêu chuẩn của chân lý là:',
        answers: [
          { content: 'Ý kiến của đa số', isCorrect: false },
          { content: 'Thực tiễn', isCorrect: true },
          { content: 'Lý luận', isCorrect: false },
          { content: 'Kinh nghiệm cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Chân lý có tính:',
        answers: [
          { content: 'Khách quan, tuyệt đối, tương đối, cụ thể', isCorrect: true },
          { content: 'Chỉ có tính khách quan', isCorrect: false },
          { content: 'Chỉ có tính tuyệt đối', isCorrect: false },
          { content: 'Chỉ có tính tương đối', isCorrect: false },
        ],
      },
      {
        content: 'Tính khách quan của chân lý có nghĩa là:',
        answers: [
          { content: 'Nội dung của chân lý phù hợp với hiện thực khách quan, không phụ thuộc vào ý muốn chủ quan', isCorrect: true },
          { content: 'Chân lý do con người tạo ra', isCorrect: false },
          { content: 'Chân lý phụ thuộc vào ý kiến đa số', isCorrect: false },
          { content: 'Chân lý thay đổi theo thời gian', isCorrect: false },
        ],
      },
      {
        content: 'Chân lý tuyệt đối là:',
        answers: [
          { content: 'Tri thức hoàn toàn đầy đủ về thế giới', isCorrect: false },
          { content: 'Tri thức phản ánh đúng đắn hiện thực khách quan mà con người đạt được qua từng giai đoạn', isCorrect: true },
          { content: 'Tri thức không bao giờ thay đổi', isCorrect: false },
          { content: 'Tri thức của một cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Chân lý tương đối là:',
        answers: [
          { content: 'Tri thức sai lầm', isCorrect: false },
          { content: 'Tri thức phản ánh đúng nhưng chưa đầy đủ, chưa hoàn toàn chính xác về hiện thực', isCorrect: true },
          { content: 'Tri thức hoàn toàn đúng', isCorrect: false },
          { content: 'Tri thức không có giá trị', isCorrect: false },
        ],
      },
      {
        content: 'Tính cụ thể của chân lý có nghĩa là:',
        answers: [
          { content: 'Chân lý luôn gắn với điều kiện lịch sử cụ thể', isCorrect: true },
          { content: 'Chân lý áp dụng cho mọi nơi, mọi lúc', isCorrect: false },
          { content: 'Chân lý không thay đổi', isCorrect: false },
          { content: 'Chân lý là trừu tượng', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa nhận thức cảm tính và nhận thức lý tính:',
        answers: [
          { content: 'Nhận thức cảm tính là cơ sở cho nhận thức lý tính; nhận thức lý tính sâu sắc hơn nhận thức cảm tính', isCorrect: true },
          { content: 'Nhận thức cảm tính cao hơn nhận thức lý tính', isCorrect: false },
          { content: 'Hai loại nhận thức không liên quan', isCorrect: false },
          { content: 'Nhận thức lý tính không cần nhận thức cảm tính', isCorrect: false },
        ],
      },
      {
        content: 'Nhận thức là một quá trình:',
        answers: [
          { content: 'Diễn ra một lần là xong', isCorrect: false },
          { content: 'Biện chứng, đi từ chưa biết đến biết, từ biết ít đến biết nhiều, từ chưa sâu sắc đến sâu sắc hơn', isCorrect: true },
          { content: 'Hoàn toàn ngẫu nhiên', isCorrect: false },
          { content: 'Không có quy luật', isCorrect: false },
        ],
      },
      {
        content: 'Sai lầm của chủ nghĩa duy lý là:',
        answers: [
          { content: 'Đề cao vai trò của nhận thức cảm tính', isCorrect: false },
          { content: 'Tuyệt đối hóa vai trò của nhận thức lý tính, hạ thấp nhận thức cảm tính', isCorrect: true },
          { content: 'Coi trọng thực tiễn', isCorrect: false },
          { content: 'Kết hợp cảm tính và lý tính', isCorrect: false },
        ],
      },
      {
        content: 'Sai lầm của chủ nghĩa duy cảm (chủ nghĩa kinh nghiệm) là:',
        answers: [
          { content: 'Tuyệt đối hóa vai trò của nhận thức cảm tính, hạ thấp nhận thức lý tính', isCorrect: true },
          { content: 'Đề cao vai trò của lý tính', isCorrect: false },
          { content: 'Coi trọng thực tiễn', isCorrect: false },
          { content: 'Kết hợp cảm tính và lý tính', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Chủ nghĩa duy vật lịch sử
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-triet-hoc-mac-lenin',
    title: 'Trắc nghiệm Triết học Mác-Lênin - Đề số 5',
    slug: 'trac-nghiem-dh-triet-hoc-mac-lenin-de-5',
    description:
      'Chủ nghĩa duy vật lịch sử: hình thái KT-XH, giai cấp, nhà nước, cách mạng xã hội.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Chủ nghĩa duy vật lịch sử là:',
        answers: [
          { content: 'Sự vận dụng chủ nghĩa duy vật biện chứng vào nghiên cứu đời sống xã hội và lịch sử', isCorrect: true },
          { content: 'Nghiên cứu về tự nhiên', isCorrect: false },
          { content: 'Nghiên cứu về vũ trụ', isCorrect: false },
          { content: 'Nghiên cứu về tâm lý con người', isCorrect: false },
        ],
      },
      {
        content: 'Tồn tại xã hội là:',
        answers: [
          { content: 'Đời sống tinh thần của xã hội', isCorrect: false },
          { content: 'Đời sống vật chất và các điều kiện sinh hoạt vật chất của xã hội', isCorrect: true },
          { content: 'Tư tưởng, quan điểm của xã hội', isCorrect: false },
          { content: 'Hệ thống pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Ý thức xã hội là:',
        answers: [
          { content: 'Đời sống vật chất của xã hội', isCorrect: false },
          { content: 'Mặt tinh thần của đời sống xã hội, bao gồm tư tưởng, quan điểm, tình cảm xã hội', isCorrect: true },
          { content: 'Phương thức sản xuất', isCorrect: false },
          { content: 'Lực lượng sản xuất', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa tồn tại xã hội và ý thức xã hội:',
        answers: [
          { content: 'Tồn tại xã hội quyết định ý thức xã hội, ý thức xã hội tác động trở lại tồn tại xã hội', isCorrect: true },
          { content: 'Ý thức xã hội quyết định tồn tại xã hội', isCorrect: false },
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Tồn tại xã hội và ý thức xã hội đồng nhất', isCorrect: false },
        ],
      },
      {
        content: 'Hình thái kinh tế-xã hội là:',
        answers: [
          { content: 'Xã hội ở từng giai đoạn lịch sử nhất định với kiểu quan hệ sản xuất phù hợp với lực lượng sản xuất và kiến trúc thượng tầng tương ứng', isCorrect: true },
          { content: 'Chỉ là nền kinh tế', isCorrect: false },
          { content: 'Chỉ là hệ thống chính trị', isCorrect: false },
          { content: 'Chỉ là văn hóa xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Cấu trúc của hình thái kinh tế-xã hội gồm:',
        answers: [
          { content: 'Lực lượng sản xuất, quan hệ sản xuất (cơ sở hạ tầng), kiến trúc thượng tầng', isCorrect: true },
          { content: 'Kinh tế, chính trị, văn hóa', isCorrect: false },
          { content: 'Giai cấp thống trị và giai cấp bị trị', isCorrect: false },
          { content: 'Nhà nước và pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Lực lượng sản xuất bao gồm:',
        answers: [
          { content: 'Người lao động và tư liệu sản xuất', isCorrect: true },
          { content: 'Chỉ có máy móc', isCorrect: false },
          { content: 'Chỉ có người lao động', isCorrect: false },
          { content: 'Chỉ có nguyên vật liệu', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ sản xuất bao gồm:',
        answers: [
          { content: 'Quan hệ sở hữu tư liệu sản xuất, quan hệ tổ chức quản lý, quan hệ phân phối sản phẩm', isCorrect: true },
          { content: 'Chỉ có quan hệ sở hữu', isCorrect: false },
          { content: 'Chỉ có quan hệ phân phối', isCorrect: false },
          { content: 'Quan hệ giữa người mua và người bán', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật quan hệ sản xuất phù hợp với trình độ phát triển của lực lượng sản xuất có nghĩa:',
        answers: [
          { content: 'Lực lượng sản xuất quyết định quan hệ sản xuất, quan hệ sản xuất tác động trở lại lực lượng sản xuất', isCorrect: true },
          { content: 'Quan hệ sản xuất quyết định lực lượng sản xuất', isCorrect: false },
          { content: 'Lực lượng sản xuất và quan hệ sản xuất không liên quan', isCorrect: false },
          { content: 'Quan hệ sản xuất luôn phù hợp với lực lượng sản xuất', isCorrect: false },
        ],
      },
      {
        content: 'Cơ sở hạ tầng là:',
        answers: [
          { content: 'Hệ thống đường sá, cầu cống', isCorrect: false },
          { content: 'Toàn bộ quan hệ sản xuất hợp thành cơ cấu kinh tế của xã hội', isCorrect: true },
          { content: 'Hệ thống chính trị', isCorrect: false },
          { content: 'Hệ thống giáo dục', isCorrect: false },
        ],
      },
      {
        content: 'Kiến trúc thượng tầng là:',
        answers: [
          { content: 'Toàn bộ quan hệ sản xuất', isCorrect: false },
          { content: 'Toàn bộ quan điểm chính trị, pháp quyền, triết học, đạo đức, tôn giáo cùng các thiết chế tương ứng', isCorrect: true },
          { content: 'Lực lượng sản xuất', isCorrect: false },
          { content: 'Cơ sở vật chất kỹ thuật', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa cơ sở hạ tầng và kiến trúc thượng tầng:',
        answers: [
          { content: 'Cơ sở hạ tầng quyết định kiến trúc thượng tầng, kiến trúc thượng tầng tác động trở lại cơ sở hạ tầng', isCorrect: true },
          { content: 'Kiến trúc thượng tầng quyết định cơ sở hạ tầng', isCorrect: false },
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Cơ sở hạ tầng phụ thuộc kiến trúc thượng tầng', isCorrect: false },
        ],
      },
      {
        content: 'Giai cấp là:',
        answers: [
          { content: 'Những tập đoàn người khác nhau về địa vị trong hệ thống sản xuất xã hội, về quan hệ với tư liệu sản xuất', isCorrect: true },
          { content: 'Nhóm người có cùng sở thích', isCorrect: false },
          { content: 'Nhóm người cùng dân tộc', isCorrect: false },
          { content: 'Nhóm người cùng tôn giáo', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc của giai cấp là:',
        answers: [
          { content: 'Do thần linh tạo ra', isCorrect: false },
          { content: 'Do sự phát triển của lực lượng sản xuất dẫn đến dư thừa sản phẩm và chế độ tư hữu', isCorrect: true },
          { content: 'Do chiến tranh', isCorrect: false },
          { content: 'Do sự khác biệt về trí tuệ', isCorrect: false },
        ],
      },
      {
        content: 'Đấu tranh giai cấp là:',
        answers: [
          { content: 'Cuộc đấu tranh giữa các giai cấp có lợi ích đối lập nhau', isCorrect: true },
          { content: 'Cuộc đấu tranh giữa các dân tộc', isCorrect: false },
          { content: 'Cuộc đấu tranh giữa các tôn giáo', isCorrect: false },
          { content: 'Cuộc đấu tranh giữa nam và nữ', isCorrect: false },
        ],
      },
      {
        content: 'Theo Mác, đấu tranh giai cấp là:',
        answers: [
          { content: 'Động lực phát triển của xã hội có giai cấp', isCorrect: true },
          { content: 'Nguyên nhân của mọi sự tụt hậu', isCorrect: false },
          { content: 'Hiện tượng tiêu cực cần loại bỏ', isCorrect: false },
          { content: 'Không có vai trò gì', isCorrect: false },
        ],
      },
      {
        content: 'Nhà nước ra đời khi:',
        answers: [
          { content: 'Xã hội phân chia thành giai cấp và mâu thuẫn giai cấp không thể điều hòa', isCorrect: true },
          { content: 'Con người bắt đầu sống thành cộng đồng', isCorrect: false },
          { content: 'Xã hội không có giai cấp', isCorrect: false },
          { content: 'Do ý chí của một cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Cách mạng xã hội là:',
        answers: [
          { content: 'Sự thay đổi căn bản về chất của hình thái kinh tế-xã hội, thay thế hình thái cũ bằng hình thái mới tiến bộ hơn', isCorrect: true },
          { content: 'Sự thay đổi nhỏ trong xã hội', isCorrect: false },
          { content: 'Cuộc đảo chính quân sự', isCorrect: false },
          { content: 'Sự thay đổi chính phủ', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân sâu xa của cách mạng xã hội là:',
        answers: [
          { content: 'Mâu thuẫn giữa lực lượng sản xuất phát triển với quan hệ sản xuất lỗi thời', isCorrect: true },
          { content: 'Ý muốn của lãnh tụ', isCorrect: false },
          { content: 'Sự can thiệp từ bên ngoài', isCorrect: false },
          { content: 'Thiên tai', isCorrect: false },
        ],
      },
      {
        content: 'Trong lịch sử, có mấy hình thái kinh tế-xã hội?',
        answers: [
          { content: '3 hình thái', isCorrect: false },
          { content: '4 hình thái', isCorrect: false },
          { content: '5 hình thái: cộng sản nguyên thủy, chiếm hữu nô lệ, phong kiến, tư bản chủ nghĩa, cộng sản chủ nghĩa', isCorrect: true },
          { content: '6 hình thái', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của quần chúng nhân dân trong lịch sử:',
        answers: [
          { content: 'Quần chúng nhân dân là chủ thể sáng tạo lịch sử, là lực lượng quyết định sự phát triển xã hội', isCorrect: true },
          { content: 'Quần chúng nhân dân không có vai trò gì', isCorrect: false },
          { content: 'Chỉ có lãnh tụ mới tạo ra lịch sử', isCorrect: false },
          { content: 'Lịch sử do thần linh quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của cá nhân (lãnh tụ) trong lịch sử:',
        answers: [
          { content: 'Lãnh tụ quyết định tất cả', isCorrect: false },
          { content: 'Lãnh tụ có vai trò quan trọng trong việc thúc đẩy hoặc kìm hãm sự phát triển, nhưng không thể thay đổi quy luật khách quan', isCorrect: true },
          { content: 'Lãnh tụ không có vai trò gì', isCorrect: false },
          { content: 'Lãnh tụ tạo ra quy luật lịch sử', isCorrect: false },
        ],
      },
      {
        content: 'Ý thức xã hội có tính độc lập tương đối thể hiện ở:',
        answers: [
          { content: 'Ý thức xã hội có thể lạc hậu hoặc vượt trước tồn tại xã hội', isCorrect: true },
          { content: 'Ý thức xã hội hoàn toàn độc lập với tồn tại xã hội', isCorrect: false },
          { content: 'Ý thức xã hội luôn phản ánh đúng tồn tại xã hội', isCorrect: false },
          { content: 'Ý thức xã hội không có tính độc lập', isCorrect: false },
        ],
      },
      {
        content: 'Trong quan hệ sản xuất, yếu tố nào giữ vai trò quyết định?',
        answers: [
          { content: 'Quan hệ tổ chức quản lý', isCorrect: false },
          { content: 'Quan hệ phân phối sản phẩm', isCorrect: false },
          { content: 'Quan hệ sở hữu tư liệu sản xuất', isCorrect: true },
          { content: 'Quan hệ trao đổi', isCorrect: false },
        ],
      },
      {
        content: 'Theo chủ nghĩa duy vật lịch sử, yếu tố nào là yếu tố năng động nhất trong lực lượng sản xuất?',
        answers: [
          { content: 'Đối tượng lao động', isCorrect: false },
          { content: 'Tư liệu lao động', isCorrect: false },
          { content: 'Người lao động', isCorrect: true },
          { content: 'Nguyên vật liệu', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
