import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Sản xuất hàng hóa và quy luật giá trị
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-kinh-te-chinh-tri-mac-lenin',
    title: 'Trắc nghiệm KTCT Mác-Lênin - Đề số 1',
    slug: 'trac-nghiem-dh-ktct-mac-lenin-de-1',
    description:
      'Trắc nghiệm Kinh tế chính trị Mác-Lênin - Đề số 1. Sản xuất hàng hóa và quy luật giá trị: hàng hóa, giá trị, giá trị sử dụng, tiền tệ.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Hàng hóa là gì?',
        answers: [
          { content: 'Sản phẩm của lao động có thể thỏa mãn nhu cầu nào đó của con người thông qua trao đổi, mua bán', isCorrect: true },
          { content: 'Mọi sản phẩm do con người tạo ra', isCorrect: false },
          { content: 'Sản phẩm tự nhiên có sẵn trong tự nhiên', isCorrect: false },
          { content: 'Sản phẩm chỉ dùng để tiêu dùng cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Hàng hóa có mấy thuộc tính cơ bản?',
        answers: [
          { content: '1 thuộc tính', isCorrect: false },
          { content: '2 thuộc tính: giá trị sử dụng và giá trị', isCorrect: true },
          { content: '3 thuộc tính', isCorrect: false },
          { content: '4 thuộc tính', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị sử dụng của hàng hóa là gì?',
        answers: [
          { content: 'Công dụng của vật phẩm có thể thỏa mãn nhu cầu nào đó của con người', isCorrect: true },
          { content: 'Lượng lao động kết tinh trong hàng hóa', isCorrect: false },
          { content: 'Giá cả của hàng hóa trên thị trường', isCorrect: false },
          { content: 'Khả năng trao đổi giữa các hàng hóa', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị của hàng hóa được biểu hiện thông qua đâu?',
        answers: [
          { content: 'Giá trị sử dụng', isCorrect: false },
          { content: 'Giá trị trao đổi', isCorrect: true },
          { content: 'Số lượng hàng hóa', isCorrect: false },
          { content: 'Chất lượng hàng hóa', isCorrect: false },
        ],
      },
      {
        content: 'Lao động trừu tượng là gì?',
        answers: [
          { content: 'Lao động cụ thể trong một ngành nghề nhất định', isCorrect: false },
          { content: 'Lao động của con người nói chung, không kể đến hình thức cụ thể, là sự hao phí sức lao động', isCorrect: true },
          { content: 'Lao động sử dụng máy móc hiện đại', isCorrect: false },
          { content: 'Lao động trong lĩnh vực dịch vụ', isCorrect: false },
        ],
      },
      {
        content: 'Lao động cụ thể tạo ra thuộc tính nào của hàng hóa?',
        answers: [
          { content: 'Giá trị', isCorrect: false },
          { content: 'Giá trị sử dụng', isCorrect: true },
          { content: 'Giá trị trao đổi', isCorrect: false },
          { content: 'Giá cả', isCorrect: false },
        ],
      },
      {
        content: 'Lao động trừu tượng tạo ra thuộc tính nào của hàng hóa?',
        answers: [
          { content: 'Giá trị sử dụng', isCorrect: false },
          { content: 'Giá trị', isCorrect: true },
          { content: 'Công dụng', isCorrect: false },
          { content: 'Hình thức bên ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Thời gian lao động xã hội cần thiết là gì?',
        answers: [
          { content: 'Thời gian lao động cá biệt của từng người sản xuất', isCorrect: false },
          { content: 'Thời gian lao động ngắn nhất để sản xuất hàng hóa', isCorrect: false },
          { content: 'Thời gian cần thiết để sản xuất hàng hóa trong điều kiện trung bình của xã hội', isCorrect: true },
          { content: 'Thời gian lao động dài nhất để sản xuất hàng hóa', isCorrect: false },
        ],
      },
      {
        content: 'Lượng giá trị của hàng hóa được đo bằng gì?',
        answers: [
          { content: 'Thời gian lao động cá biệt', isCorrect: false },
          { content: 'Thời gian lao động xã hội cần thiết', isCorrect: true },
          { content: 'Số lượng nguyên vật liệu', isCorrect: false },
          { content: 'Giá cả thị trường', isCorrect: false },
        ],
      },
      {
        content: 'Năng suất lao động tăng lên thì giá trị của một đơn vị hàng hóa sẽ như thế nào?',
        answers: [
          { content: 'Tăng lên', isCorrect: false },
          { content: 'Giảm xuống', isCorrect: true },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Có thể tăng hoặc giảm', isCorrect: false },
        ],
      },
      {
        content: 'Cường độ lao động tăng lên thì tổng giá trị sản phẩm sẽ như thế nào?',
        answers: [
          { content: 'Giảm xuống', isCorrect: false },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Tăng lên', isCorrect: true },
          { content: 'Giảm một nửa', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện ra đời của sản xuất hàng hóa bao gồm những gì?',
        answers: [
          { content: 'Phân công lao động xã hội và sự tách biệt tương đối về mặt kinh tế giữa những người sản xuất', isCorrect: true },
          { content: 'Chỉ cần có phân công lao động xã hội', isCorrect: false },
          { content: 'Chỉ cần có sở hữu tư nhân', isCorrect: false },
          { content: 'Có nhà nước và pháp luật', isCorrect: false },
        ],
      },
      {
        content: 'Tiền tệ xuất hiện là kết quả của quá trình nào?',
        answers: [
          { content: 'Do nhà nước quy định', isCorrect: false },
          { content: 'Quá trình phát triển lâu dài của sản xuất và trao đổi hàng hóa', isCorrect: true },
          { content: 'Do các nhà kinh tế phát minh ra', isCorrect: false },
          { content: 'Do nhu cầu tích trữ của cải', isCorrect: false },
        ],
      },
      {
        content: 'Tiền tệ có mấy chức năng cơ bản theo quan điểm của Mác?',
        answers: [
          { content: '3 chức năng', isCorrect: false },
          { content: '4 chức năng', isCorrect: false },
          { content: '5 chức năng', isCorrect: true },
          { content: '6 chức năng', isCorrect: false },
        ],
      },
      {
        content: 'Chức năng nào của tiền tệ được thực hiện khi tiền dùng để đo lường giá trị hàng hóa?',
        answers: [
          { content: 'Phương tiện lưu thông', isCorrect: false },
          { content: 'Thước đo giá trị', isCorrect: true },
          { content: 'Phương tiện thanh toán', isCorrect: false },
          { content: 'Phương tiện cất trữ', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật giá trị yêu cầu điều gì?',
        answers: [
          { content: 'Sản xuất và trao đổi hàng hóa phải dựa trên cơ sở thời gian lao động xã hội cần thiết', isCorrect: true },
          { content: 'Giá cả luôn bằng giá trị', isCorrect: false },
          { content: 'Người sản xuất được tự do định giá', isCorrect: false },
          { content: 'Nhà nước quy định giá cả', isCorrect: false },
        ],
      },
      {
        content: 'Giá cả hàng hóa trên thị trường xoay quanh yếu tố nào?',
        answers: [
          { content: 'Chi phí sản xuất', isCorrect: false },
          { content: 'Giá trị của hàng hóa', isCorrect: true },
          { content: 'Cung cầu thị trường', isCorrect: false },
          { content: 'Ý muốn của người bán', isCorrect: false },
        ],
      },
      {
        content: 'Tính chất hai mặt của lao động sản xuất hàng hóa là gì?',
        answers: [
          { content: 'Lao động giản đơn và lao động phức tạp', isCorrect: false },
          { content: 'Lao động cụ thể và lao động trừu tượng', isCorrect: true },
          { content: 'Lao động tư nhân và lao động xã hội', isCorrect: false },
          { content: 'Lao động chân tay và lao động trí óc', isCorrect: false },
        ],
      },
      {
        content: 'Mâu thuẫn cơ bản của sản xuất hàng hóa giản đơn là gì?',
        answers: [
          { content: 'Mâu thuẫn giữa giá trị sử dụng và giá trị', isCorrect: false },
          { content: 'Mâu thuẫn giữa lao động tư nhân và lao động xã hội', isCorrect: true },
          { content: 'Mâu thuẫn giữa cung và cầu', isCorrect: false },
          { content: 'Mâu thuẫn giữa người mua và người bán', isCorrect: false },
        ],
      },
      {
        content: 'Hình thái giá trị phát triển qua mấy giai đoạn?',
        answers: [
          { content: '2 giai đoạn', isCorrect: false },
          { content: '3 giai đoạn', isCorrect: false },
          { content: '4 giai đoạn', isCorrect: true },
          { content: '5 giai đoạn', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật giá trị có tác dụng gì trong nền kinh tế hàng hóa?',
        answers: [
          { content: 'Điều tiết sản xuất và lưu thông hàng hóa, kích thích cải tiến kỹ thuật, phân hóa người sản xuất', isCorrect: true },
          { content: 'Chỉ điều tiết sản xuất', isCorrect: false },
          { content: 'Chỉ kích thích cải tiến kỹ thuật', isCorrect: false },
          { content: 'Chỉ phân hóa người sản xuất', isCorrect: false },
        ],
      },
      {
        content: 'Khi cung lớn hơn cầu, giá cả hàng hóa sẽ như thế nào?',
        answers: [
          { content: 'Cao hơn giá trị', isCorrect: false },
          { content: 'Thấp hơn giá trị', isCorrect: true },
          { content: 'Bằng giá trị', isCorrect: false },
          { content: 'Không xác định được', isCorrect: false },
        ],
      },
      {
        content: 'Lao động phức tạp và lao động giản đơn khác nhau ở điểm nào?',
        answers: [
          { content: 'Lao động phức tạp là bội số của lao động giản đơn', isCorrect: true },
          { content: 'Lao động phức tạp không tạo ra giá trị', isCorrect: false },
          { content: 'Lao động giản đơn tạo ra nhiều giá trị hơn', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Phân công lao động xã hội là gì?',
        answers: [
          { content: 'Sự phân chia lao động trong một xưởng sản xuất', isCorrect: false },
          { content: 'Sự chuyên môn hóa sản xuất, phân chia lao động xã hội thành các ngành, các lĩnh vực khác nhau', isCorrect: true },
          { content: 'Sự phân chia giàu nghèo trong xã hội', isCorrect: false },
          { content: 'Sự phân chia giai cấp trong xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Sự tách biệt tương đối về mặt kinh tế giữa những người sản xuất có nghĩa là gì?',
        answers: [
          { content: 'Mọi người sản xuất chung', isCorrect: false },
          { content: 'Những người sản xuất có quyền sở hữu hoặc quyền sử dụng độc lập đối với tư liệu sản xuất và sản phẩm lao động', isCorrect: true },
          { content: 'Mọi người không được trao đổi', isCorrect: false },
          { content: 'Nhà nước sở hữu tất cả', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Giá trị thặng dư
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-kinh-te-chinh-tri-mac-lenin',
    title: 'Trắc nghiệm KTCT Mác-Lênin - Đề số 2',
    slug: 'trac-nghiem-dh-ktct-mac-lenin-de-2',
    description:
      'Trắc nghiệm Kinh tế chính trị Mác-Lênin - Đề số 2. Giá trị thặng dư: sức lao động, tư bản bất biến, tư bản khả biến, tỉ suất giá trị thặng dư.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Sức lao động là gì?',
        answers: [
          { content: 'Toàn bộ năng lực thể chất và tinh thần tồn tại trong cơ thể con người, được vận dụng vào sản xuất', isCorrect: true },
          { content: 'Quá trình lao động cụ thể', isCorrect: false },
          { content: 'Kết quả của quá trình lao động', isCorrect: false },
          { content: 'Công cụ lao động', isCorrect: false },
        ],
      },
      {
        content: 'Điều kiện để sức lao động trở thành hàng hóa là gì?',
        answers: [
          { content: 'Người lao động được tự do về thân thể và không có tư liệu sản xuất', isCorrect: true },
          { content: 'Người lao động có nhiều tài sản', isCorrect: false },
          { content: 'Người lao động có trình độ cao', isCorrect: false },
          { content: 'Người lao động là nô lệ', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị hàng hóa sức lao động được xác định bởi yếu tố nào?',
        answers: [
          { content: 'Do nhà tư bản quy định', isCorrect: false },
          { content: 'Giá trị các tư liệu sinh hoạt cần thiết để tái sản xuất sức lao động', isCorrect: true },
          { content: 'Do thị trường quyết định', isCorrect: false },
          { content: 'Do năng suất lao động quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị thặng dư là gì?',
        answers: [
          { content: 'Toàn bộ giá trị do công nhân tạo ra', isCorrect: false },
          { content: 'Phần giá trị mới dôi ra ngoài giá trị sức lao động do công nhân tạo ra và bị nhà tư bản chiếm không', isCorrect: true },
          { content: 'Lợi nhuận của nhà tư bản', isCorrect: false },
          { content: 'Tiền lương của công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản bất biến (c) là gì?',
        answers: [
          { content: 'Bộ phận tư bản dùng để mua sức lao động', isCorrect: false },
          { content: 'Bộ phận tư bản tồn tại dưới hình thức tư liệu sản xuất, giá trị được bảo tồn và chuyển vào sản phẩm mới', isCorrect: true },
          { content: 'Toàn bộ tư bản của nhà tư bản', isCorrect: false },
          { content: 'Bộ phận tư bản tạo ra giá trị thặng dư', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản khả biến (v) là gì?',
        answers: [
          { content: 'Bộ phận tư bản dùng để mua tư liệu sản xuất', isCorrect: false },
          { content: 'Bộ phận tư bản dùng để mua sức lao động, có khả năng tăng thêm giá trị trong quá trình sản xuất', isCorrect: true },
          { content: 'Bộ phận tư bản cố định', isCorrect: false },
          { content: 'Bộ phận tư bản lưu động', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ suất giá trị thặng dư (m\') được tính bằng công thức nào?',
        answers: [
          { content: 'm\' = m / (c + v) × 100%', isCorrect: false },
          { content: 'm\' = m / v × 100%', isCorrect: true },
          { content: 'm\' = m / c × 100%', isCorrect: false },
          { content: 'm\' = v / m × 100%', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ suất giá trị thặng dư phản ánh điều gì?',
        answers: [
          { content: 'Hiệu quả sử dụng tư bản bất biến', isCorrect: false },
          { content: 'Trình độ bóc lột của nhà tư bản đối với công nhân', isCorrect: true },
          { content: 'Lợi nhuận của nhà tư bản', isCorrect: false },
          { content: 'Năng suất lao động xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị thặng dư tuyệt đối được tạo ra bằng cách nào?',
        answers: [
          { content: 'Rút ngắn thời gian lao động cần thiết', isCorrect: false },
          { content: 'Kéo dài ngày lao động hoặc tăng cường độ lao động trong khi thời gian lao động cần thiết không đổi', isCorrect: true },
          { content: 'Tăng năng suất lao động', isCorrect: false },
          { content: 'Giảm tiền lương công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị thặng dư tương đối được tạo ra bằng cách nào?',
        answers: [
          { content: 'Kéo dài ngày lao động', isCorrect: false },
          { content: 'Tăng cường độ lao động', isCorrect: false },
          { content: 'Rút ngắn thời gian lao động cần thiết nhờ tăng năng suất lao động xã hội', isCorrect: true },
          { content: 'Giảm chi phí nguyên vật liệu', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị thặng dư siêu ngạch là gì?',
        answers: [
          { content: 'Phần giá trị thặng dư thu được do áp dụng công nghệ mới, có năng suất cao hơn mức trung bình xã hội', isCorrect: true },
          { content: 'Giá trị thặng dư tuyệt đối cộng giá trị thặng dư tương đối', isCorrect: false },
          { content: 'Lợi nhuận siêu ngạch của độc quyền', isCorrect: false },
          { content: 'Giá trị thặng dư do tăng giá bán', isCorrect: false },
        ],
      },
      {
        content: 'Ngày lao động của công nhân được chia thành mấy phần?',
        answers: [
          { content: '3 phần', isCorrect: false },
          { content: '2 phần: thời gian lao động cần thiết và thời gian lao động thặng dư', isCorrect: true },
          { content: '4 phần', isCorrect: false },
          { content: '1 phần', isCorrect: false },
        ],
      },
      {
        content: 'Thời gian lao động cần thiết là gì?',
        answers: [
          { content: 'Thời gian công nhân tạo ra giá trị thặng dư', isCorrect: false },
          { content: 'Thời gian công nhân tạo ra một lượng giá trị ngang bằng giá trị sức lao động của mình', isCorrect: true },
          { content: 'Toàn bộ thời gian làm việc trong ngày', isCorrect: false },
          { content: 'Thời gian nghỉ ngơi của công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Thời gian lao động thặng dư là gì?',
        answers: [
          { content: 'Thời gian công nhân tạo ra giá trị bằng giá trị sức lao động', isCorrect: false },
          { content: 'Thời gian công nhân lao động ngoài thời gian lao động cần thiết, tạo ra giá trị thặng dư', isCorrect: true },
          { content: 'Thời gian làm thêm giờ', isCorrect: false },
          { content: 'Thời gian nghỉ giữa ca', isCorrect: false },
        ],
      },
      {
        content: 'Tiền công trong chủ nghĩa tư bản thực chất là gì?',
        answers: [
          { content: 'Giá cả của lao động', isCorrect: false },
          { content: 'Giá cả của sức lao động', isCorrect: true },
          { content: 'Toàn bộ giá trị do công nhân tạo ra', isCorrect: false },
          { content: 'Phần lợi nhuận chia cho công nhân', isCorrect: false },
        ],
      },
      {
        content: 'Có mấy hình thức tiền công cơ bản?',
        answers: [
          { content: '1 hình thức', isCorrect: false },
          { content: '2 hình thức: tiền công theo thời gian và tiền công theo sản phẩm', isCorrect: true },
          { content: '3 hình thức', isCorrect: false },
          { content: '4 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị hàng hóa trong CNTB được biểu hiện bằng công thức nào?',
        answers: [
          { content: 'W = c + v + m', isCorrect: true },
          { content: 'W = c + v', isCorrect: false },
          { content: 'W = v + m', isCorrect: false },
          { content: 'W = c + m', isCorrect: false },
        ],
      },
      {
        content: 'Trong công thức W = c + v + m, phần (v + m) đại diện cho gì?',
        answers: [
          { content: 'Giá trị tư liệu sản xuất', isCorrect: false },
          { content: 'Giá trị mới do lao động sống tạo ra', isCorrect: true },
          { content: 'Chi phí sản xuất tư bản chủ nghĩa', isCorrect: false },
          { content: 'Lợi nhuận của nhà tư bản', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật kinh tế cơ bản của CNTB là quy luật nào?',
        answers: [
          { content: 'Quy luật giá trị', isCorrect: false },
          { content: 'Quy luật cung cầu', isCorrect: false },
          { content: 'Quy luật giá trị thặng dư', isCorrect: true },
          { content: 'Quy luật cạnh tranh', isCorrect: false },
        ],
      },
      {
        content: 'Giá trị sử dụng đặc biệt của hàng hóa sức lao động là gì?',
        answers: [
          { content: 'Tạo ra sản phẩm vật chất', isCorrect: false },
          { content: 'Khi sử dụng nó tạo ra một giá trị mới lớn hơn giá trị bản thân nó', isCorrect: true },
          { content: 'Có thể trao đổi trên thị trường', isCorrect: false },
          { content: 'Có thể cất trữ được', isCorrect: false },
        ],
      },
      {
        content: 'Khối lượng giá trị thặng dư (M) được tính bằng công thức nào?',
        answers: [
          { content: 'M = m\' × c', isCorrect: false },
          { content: 'M = m\' × V (V là tổng tư bản khả biến)', isCorrect: true },
          { content: 'M = m\' × (c + v)', isCorrect: false },
          { content: 'M = c + v + m', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản là gì theo quan điểm của Mác?',
        answers: [
          { content: 'Tiền tệ', isCorrect: false },
          { content: 'Tư liệu sản xuất', isCorrect: false },
          { content: 'Giá trị mang lại giá trị thặng dư bằng cách bóc lột lao động làm thuê', isCorrect: true },
          { content: 'Tài sản của nhà tư bản', isCorrect: false },
        ],
      },
      {
        content: 'Công thức chung của tư bản là gì?',
        answers: [
          { content: 'H - T - H', isCorrect: false },
          { content: 'T - H - T\'', isCorrect: true },
          { content: 'T - T\'', isCorrect: false },
          { content: 'H - H\'', isCorrect: false },
        ],
      },
      {
        content: 'Mâu thuẫn của công thức chung của tư bản là gì?',
        answers: [
          { content: 'Giá trị thặng dư vừa được tạo ra trong lưu thông vừa không được tạo ra trong lưu thông', isCorrect: true },
          { content: 'Tiền vừa là phương tiện lưu thông vừa là phương tiện cất trữ', isCorrect: false },
          { content: 'Hàng hóa vừa có giá trị sử dụng vừa có giá trị', isCorrect: false },
          { content: 'Lao động vừa cụ thể vừa trừu tượng', isCorrect: false },
        ],
      },
      {
        content: 'Tiền công danh nghĩa và tiền công thực tế khác nhau ở điểm nào?',
        answers: [
          { content: 'Tiền công danh nghĩa là số tiền nhận được, tiền công thực tế là số lượng hàng hóa và dịch vụ mua được bằng tiền công danh nghĩa', isCorrect: true },
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'Tiền công thực tế luôn cao hơn tiền công danh nghĩa', isCorrect: false },
          { content: 'Tiền công danh nghĩa luôn thấp hơn tiền công thực tế', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Tích lũy tư bản và lưu thông tư bản
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-kinh-te-chinh-tri-mac-lenin',
    title: 'Trắc nghiệm KTCT Mác-Lênin - Đề số 3',
    slug: 'trac-nghiem-dh-ktct-mac-lenin-de-3',
    description:
      'Trắc nghiệm Kinh tế chính trị Mác-Lênin - Đề số 3. Tích lũy tư bản và lưu thông tư bản: tái sản xuất, chu chuyển tư bản.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Tích lũy tư bản là gì?',
        answers: [
          { content: 'Việc tiết kiệm tiền của nhà tư bản', isCorrect: false },
          { content: 'Việc biến một phần giá trị thặng dư thành tư bản, tức là tái sản xuất mở rộng', isCorrect: true },
          { content: 'Việc vay vốn ngân hàng', isCorrect: false },
          { content: 'Việc mua thêm máy móc', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn gốc duy nhất của tích lũy tư bản là gì?',
        answers: [
          { content: 'Lợi nhuận thương mại', isCorrect: false },
          { content: 'Giá trị thặng dư', isCorrect: true },
          { content: 'Tiền tiết kiệm', isCorrect: false },
          { content: 'Vốn vay ngân hàng', isCorrect: false },
        ],
      },
      {
        content: 'Quy mô tích lũy tư bản phụ thuộc vào những nhân tố nào?',
        answers: [
          { content: 'Chỉ phụ thuộc vào tỉ suất giá trị thặng dư', isCorrect: false },
          { content: 'Tỉ suất giá trị thặng dư, năng suất lao động, chênh lệch giữa tư bản sử dụng và tư bản tiêu dùng, quy mô tư bản ứng trước', isCorrect: true },
          { content: 'Chỉ phụ thuộc vào quy mô tư bản ứng trước', isCorrect: false },
          { content: 'Chỉ phụ thuộc vào năng suất lao động', isCorrect: false },
        ],
      },
      {
        content: 'Tái sản xuất giản đơn là gì?',
        answers: [
          { content: 'Quá trình sản xuất được lặp lại với quy mô như cũ', isCorrect: true },
          { content: 'Quá trình sản xuất được mở rộng', isCorrect: false },
          { content: 'Quá trình sản xuất bị thu hẹp', isCorrect: false },
          { content: 'Quá trình sản xuất bị ngừng lại', isCorrect: false },
        ],
      },
      {
        content: 'Tái sản xuất mở rộng tư bản chủ nghĩa là gì?',
        answers: [
          { content: 'Quá trình sản xuất được lặp lại với quy mô lớn hơn trước nhờ biến một phần giá trị thặng dư thành tư bản phụ thêm', isCorrect: true },
          { content: 'Quá trình sản xuất được lặp lại với quy mô như cũ', isCorrect: false },
          { content: 'Quá trình sản xuất bị thu hẹp', isCorrect: false },
          { content: 'Quá trình sản xuất chỉ tăng về chất lượng', isCorrect: false },
        ],
      },
      {
        content: 'Cấu tạo hữu cơ của tư bản (C/V) phản ánh điều gì?',
        answers: [
          { content: 'Tỉ lệ giữa tư bản bất biến và tư bản khả biến, phản ánh cấu tạo kỹ thuật của tư bản', isCorrect: true },
          { content: 'Tỉ lệ giữa lợi nhuận và chi phí', isCorrect: false },
          { content: 'Tỉ lệ giữa giá trị thặng dư và tư bản', isCorrect: false },
          { content: 'Tỉ lệ giữa tư bản cố định và tư bản lưu động', isCorrect: false },
        ],
      },
      {
        content: 'Tích tụ tư bản là gì?',
        answers: [
          { content: 'Sự hợp nhất nhiều tư bản nhỏ thành tư bản lớn', isCorrect: false },
          { content: 'Sự tăng thêm quy mô tư bản cá biệt bằng cách tư bản hóa giá trị thặng dư', isCorrect: true },
          { content: 'Sự vay mượn tư bản', isCorrect: false },
          { content: 'Sự phân chia tư bản', isCorrect: false },
        ],
      },
      {
        content: 'Tập trung tư bản là gì?',
        answers: [
          { content: 'Sự tăng quy mô tư bản bằng tích lũy', isCorrect: false },
          { content: 'Sự hợp nhất nhiều tư bản nhỏ thành một tư bản lớn hơn', isCorrect: true },
          { content: 'Sự phân tán tư bản', isCorrect: false },
          { content: 'Sự tích lũy giá trị thặng dư', isCorrect: false },
        ],
      },
      {
        content: 'Tuần hoàn tư bản trải qua mấy giai đoạn?',
        answers: [
          { content: '2 giai đoạn', isCorrect: false },
          { content: '3 giai đoạn: mua, sản xuất, bán', isCorrect: true },
          { content: '4 giai đoạn', isCorrect: false },
          { content: '5 giai đoạn', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản tồn tại dưới mấy hình thái trong quá trình tuần hoàn?',
        answers: [
          { content: '2 hình thái', isCorrect: false },
          { content: '3 hình thái: tư bản tiền tệ, tư bản sản xuất, tư bản hàng hóa', isCorrect: true },
          { content: '4 hình thái', isCorrect: false },
          { content: '1 hình thái', isCorrect: false },
        ],
      },
      {
        content: 'Chu chuyển tư bản là gì?',
        answers: [
          { content: 'Một vòng tuần hoàn tư bản', isCorrect: false },
          { content: 'Tuần hoàn tư bản được xét là quá trình định kỳ, lặp đi lặp lại', isCorrect: true },
          { content: 'Quá trình lưu thông hàng hóa', isCorrect: false },
          { content: 'Quá trình sản xuất', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản cố định là gì?',
        answers: [
          { content: 'Bộ phận tư bản sản xuất tham gia toàn bộ vào quá trình sản xuất nhưng giá trị chuyển dần vào sản phẩm', isCorrect: true },
          { content: 'Bộ phận tư bản chuyển toàn bộ giá trị vào sản phẩm trong một chu kỳ', isCorrect: false },
          { content: 'Tiền mặt của nhà tư bản', isCorrect: false },
          { content: 'Hàng hóa tồn kho', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản lưu động là gì?',
        answers: [
          { content: 'Bộ phận tư bản sản xuất mà giá trị được chuyển toàn bộ vào sản phẩm trong một chu kỳ sản xuất', isCorrect: true },
          { content: 'Bộ phận tư bản chuyển giá trị dần dần', isCorrect: false },
          { content: 'Tiền trong ngân hàng', isCorrect: false },
          { content: 'Máy móc thiết bị', isCorrect: false },
        ],
      },
      {
        content: 'Hao mòn hữu hình của tư bản cố định là gì?',
        answers: [
          { content: 'Sự giảm giá trị do tiến bộ khoa học kỹ thuật', isCorrect: false },
          { content: 'Sự hao mòn về vật chất, mất dần giá trị sử dụng do sử dụng hoặc tác động của tự nhiên', isCorrect: true },
          { content: 'Sự mất giá do lạm phát', isCorrect: false },
          { content: 'Sự hao mòn do không sử dụng', isCorrect: false },
        ],
      },
      {
        content: 'Hao mòn vô hình của tư bản cố định là gì?',
        answers: [
          { content: 'Sự hao mòn về mặt vật chất', isCorrect: false },
          { content: 'Sự giảm giá trị do xuất hiện máy móc mới hiện đại hơn hoặc rẻ hơn', isCorrect: true },
          { content: 'Sự hao mòn do thiên tai', isCorrect: false },
          { content: 'Sự hao mòn do sử dụng quá mức', isCorrect: false },
        ],
      },
      {
        content: 'Tốc độ chu chuyển tư bản được tính bằng công thức nào?',
        answers: [
          { content: 'n = ch/CH (ch: thời gian trong năm, CH: thời gian một vòng chu chuyển)', isCorrect: true },
          { content: 'n = CH/ch', isCorrect: false },
          { content: 'n = c/v', isCorrect: false },
          { content: 'n = m/v', isCorrect: false },
        ],
      },
      {
        content: 'Tăng tốc độ chu chuyển tư bản có tác dụng gì?',
        answers: [
          { content: 'Giảm giá trị thặng dư', isCorrect: false },
          { content: 'Tiết kiệm tư bản ứng trước, tăng tỉ suất và khối lượng giá trị thặng dư hàng năm', isCorrect: true },
          { content: 'Tăng chi phí sản xuất', isCorrect: false },
          { content: 'Giảm năng suất lao động', isCorrect: false },
        ],
      },
      {
        content: 'Thời gian chu chuyển tư bản bao gồm những gì?',
        answers: [
          { content: 'Chỉ có thời gian sản xuất', isCorrect: false },
          { content: 'Thời gian sản xuất và thời gian lưu thông', isCorrect: true },
          { content: 'Chỉ có thời gian lưu thông', isCorrect: false },
          { content: 'Thời gian nghỉ ngơi', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật chung của tích lũy tư bản là gì?',
        answers: [
          { content: 'Tích lũy tư bản càng tăng thì đời sống công nhân càng được cải thiện', isCorrect: false },
          { content: 'Tích lũy tư bản càng tăng, sự giàu có tập trung ở một cực, sự nghèo khổ tập trung ở cực kia', isCorrect: true },
          { content: 'Tích lũy tư bản dẫn đến bình đẳng xã hội', isCorrect: false },
          { content: 'Tích lũy tư bản không ảnh hưởng đến xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Tích lũy nguyên thủy tư bản là gì?',
        answers: [
          { content: 'Quá trình tích lũy đầu tiên của CNTB', isCorrect: false },
          { content: 'Quá trình lịch sử tách người lao động ra khỏi tư liệu sản xuất, biến họ thành người làm thuê', isCorrect: true },
          { content: 'Quá trình tiết kiệm của nhà tư bản', isCorrect: false },
          { content: 'Quá trình vay vốn ngân hàng', isCorrect: false },
        ],
      },
      {
        content: 'Cấu tạo kỹ thuật của tư bản phản ánh điều gì?',
        answers: [
          { content: 'Tỉ lệ giữa số lượng tư liệu sản xuất và số lượng lao động sử dụng chúng', isCorrect: true },
          { content: 'Tỉ lệ giữa tư bản bất biến và tư bản khả biến', isCorrect: false },
          { content: 'Tỉ lệ giữa lợi nhuận và chi phí', isCorrect: false },
          { content: 'Tỉ lệ giữa tư bản cố định và tư bản lưu động', isCorrect: false },
        ],
      },
      {
        content: 'Khi cấu tạo hữu cơ của tư bản tăng lên, điều gì xảy ra?',
        answers: [
          { content: 'Nhu cầu về sức lao động tăng tương ứng', isCorrect: false },
          { content: 'Nhu cầu tương đối về sức lao động giảm, dẫn đến nạn thất nghiệp', isCorrect: true },
          { content: 'Tiền lương công nhân tăng', isCorrect: false },
          { content: 'Giá trị thặng dư giảm', isCorrect: false },
        ],
      },
      {
        content: 'Nhân khẩu thừa tương đối trong CNTB tồn tại dưới mấy hình thức?',
        answers: [
          { content: '2 hình thức', isCorrect: false },
          { content: '3 hình thức: nhân khẩu thừa lưu động, nhân khẩu thừa tiềm tàng, nhân khẩu thừa trì trệ', isCorrect: true },
          { content: '4 hình thức', isCorrect: false },
          { content: '1 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Thời gian sản xuất bao gồm những gì?',
        answers: [
          { content: 'Chỉ có thời gian lao động', isCorrect: false },
          { content: 'Thời gian lao động, thời gian gián đoạn lao động, thời gian dự trữ sản xuất', isCorrect: true },
          { content: 'Chỉ có thời gian dự trữ', isCorrect: false },
          { content: 'Thời gian vận chuyển', isCorrect: false },
        ],
      },
      {
        content: 'Thời gian lưu thông bao gồm những gì?',
        answers: [
          { content: 'Chỉ có thời gian bán hàng', isCorrect: false },
          { content: 'Thời gian mua và thời gian bán hàng hóa', isCorrect: true },
          { content: 'Chỉ có thời gian vận chuyển', isCorrect: false },
          { content: 'Chỉ có thời gian quảng cáo', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Chủ nghĩa tư bản độc quyền
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-kinh-te-chinh-tri-mac-lenin',
    title: 'Trắc nghiệm KTCT Mác-Lênin - Đề số 4',
    slug: 'trac-nghiem-dh-ktct-mac-lenin-de-4',
    description:
      'Trắc nghiệm Kinh tế chính trị Mác-Lênin - Đề số 4. Chủ nghĩa tư bản độc quyền: đặc điểm, CNTB độc quyền nhà nước.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Chủ nghĩa tư bản độc quyền hình thành vào khoảng thời gian nào?',
        answers: [
          { content: 'Cuối thế kỷ XVIII', isCorrect: false },
          { content: 'Cuối thế kỷ XIX đầu thế kỷ XX', isCorrect: true },
          { content: 'Giữa thế kỷ XX', isCorrect: false },
          { content: 'Đầu thế kỷ XXI', isCorrect: false },
        ],
      },
      {
        content: 'Theo Lênin, chủ nghĩa đế quốc có mấy đặc điểm kinh tế cơ bản?',
        answers: [
          { content: '3 đặc điểm', isCorrect: false },
          { content: '4 đặc điểm', isCorrect: false },
          { content: '5 đặc điểm', isCorrect: true },
          { content: '6 đặc điểm', isCorrect: false },
        ],
      },
      {
        content: 'Tập trung sản xuất và các tổ chức độc quyền là đặc điểm thứ mấy của CNĐQ?',
        answers: [
          { content: 'Đặc điểm thứ nhất', isCorrect: true },
          { content: 'Đặc điểm thứ hai', isCorrect: false },
          { content: 'Đặc điểm thứ ba', isCorrect: false },
          { content: 'Đặc điểm thứ tư', isCorrect: false },
        ],
      },
      {
        content: 'Tư bản tài chính là gì?',
        answers: [
          { content: 'Tư bản ngân hàng', isCorrect: false },
          { content: 'Sự dung hợp giữa tư bản ngân hàng độc quyền và tư bản công nghiệp độc quyền', isCorrect: true },
          { content: 'Tư bản công nghiệp', isCorrect: false },
          { content: 'Tư bản thương nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Đầu sỏ tài chính là gì?',
        answers: [
          { content: 'Các nhà tư bản nhỏ', isCorrect: false },
          { content: 'Nhóm nhỏ các nhà tư bản lớn nhất nắm trong tay quyền lực kinh tế và chính trị', isCorrect: true },
          { content: 'Các nhà quản lý ngân hàng', isCorrect: false },
          { content: 'Các chính trị gia', isCorrect: false },
        ],
      },
      {
        content: 'Xuất khẩu tư bản khác với xuất khẩu hàng hóa ở điểm nào?',
        answers: [
          { content: 'Xuất khẩu tư bản là đưa tư bản ra nước ngoài để bóc lột giá trị thặng dư', isCorrect: true },
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'Xuất khẩu tư bản chỉ là bán máy móc', isCorrect: false },
          { content: 'Xuất khẩu tư bản là viện trợ không hoàn lại', isCorrect: false },
        ],
      },
      {
        content: 'Xuất khẩu tư bản có mấy hình thức chủ yếu?',
        answers: [
          { content: '1 hình thức', isCorrect: false },
          { content: '2 hình thức: xuất khẩu tư bản trực tiếp và xuất khẩu tư bản gián tiếp', isCorrect: true },
          { content: '3 hình thức', isCorrect: false },
          { content: '4 hình thức', isCorrect: false },
        ],
      },
      {
        content: 'Sự phân chia thế giới về kinh tế giữa các tổ chức độc quyền quốc tế là đặc điểm thứ mấy?',
        answers: [
          { content: 'Đặc điểm thứ hai', isCorrect: false },
          { content: 'Đặc điểm thứ ba', isCorrect: false },
          { content: 'Đặc điểm thứ tư', isCorrect: true },
          { content: 'Đặc điểm thứ năm', isCorrect: false },
        ],
      },
      {
        content: 'Sự phân chia thế giới về lãnh thổ giữa các cường quốc đế quốc là đặc điểm thứ mấy?',
        answers: [
          { content: 'Đặc điểm thứ ba', isCorrect: false },
          { content: 'Đặc điểm thứ tư', isCorrect: false },
          { content: 'Đặc điểm thứ năm', isCorrect: true },
          { content: 'Đặc điểm thứ nhất', isCorrect: false },
        ],
      },
      {
        content: 'Các hình thức tổ chức độc quyền cơ bản bao gồm những gì?',
        answers: [
          { content: 'Cartel, Syndicate, Trust, Consortium', isCorrect: true },
          { content: 'Chỉ có Cartel và Trust', isCorrect: false },
          { content: 'Chỉ có công ty cổ phần', isCorrect: false },
          { content: 'Chỉ có tập đoàn đa quốc gia', isCorrect: false },
        ],
      },
      {
        content: 'Cartel là hình thức tổ chức độc quyền như thế nào?',
        answers: [
          { content: 'Các xí nghiệp thỏa thuận về giá cả, thị trường nhưng vẫn độc lập về sản xuất và thương mại', isCorrect: true },
          { content: 'Các xí nghiệp hợp nhất hoàn toàn', isCorrect: false },
          { content: 'Các xí nghiệp chỉ hợp nhất về tài chính', isCorrect: false },
          { content: 'Các xí nghiệp chỉ hợp nhất về kỹ thuật', isCorrect: false },
        ],
      },
      {
        content: 'Trust là hình thức tổ chức độc quyền như thế nào?',
        answers: [
          { content: 'Các xí nghiệp chỉ thỏa thuận về giá', isCorrect: false },
          { content: 'Các xí nghiệp hợp nhất cả sản xuất và thương mại, chỉ còn là cổ đông', isCorrect: true },
          { content: 'Các xí nghiệp chỉ hợp nhất khâu tiêu thụ', isCorrect: false },
          { content: 'Các xí nghiệp hoàn toàn độc lập', isCorrect: false },
        ],
      },
      {
        content: 'CNTB độc quyền nhà nước là gì?',
        answers: [
          { content: 'Nhà nước sở hữu toàn bộ nền kinh tế', isCorrect: false },
          { content: 'Sự kết hợp sức mạnh của các tổ chức độc quyền tư nhân với sức mạnh của nhà nước tư sản', isCorrect: true },
          { content: 'Nhà nước không can thiệp vào kinh tế', isCorrect: false },
          { content: 'Chỉ có doanh nghiệp nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên nhân ra đời của CNTB độc quyền nhà nước là gì?',
        answers: [
          { content: 'Do ý muốn chủ quan của nhà nước', isCorrect: false },
          { content: 'Do lực lượng sản xuất phát triển đòi hỏi sự điều tiết của nhà nước, mâu thuẫn xã hội gay gắt', isCorrect: true },
          { content: 'Do chiến tranh thế giới', isCorrect: false },
          { content: 'Do khủng hoảng kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Lợi nhuận độc quyền là gì?',
        answers: [
          { content: 'Lợi nhuận bình quân', isCorrect: false },
          { content: 'Lợi nhuận siêu ngạch mà các tổ chức độc quyền thu được nhờ vị thế độc quyền', isCorrect: true },
          { content: 'Lợi nhuận thương mại', isCorrect: false },
          { content: 'Lợi nhuận ngân hàng', isCorrect: false },
        ],
      },
      {
        content: 'Giá cả độc quyền là gì?',
        answers: [
          { content: 'Giá cả bằng giá trị', isCorrect: false },
          { content: 'Giá cả do các tổ chức độc quyền áp đặt, gồm chi phí sản xuất cộng lợi nhuận độc quyền', isCorrect: true },
          { content: 'Giá cả do nhà nước quy định', isCorrect: false },
          { content: 'Giá cả thị trường tự do', isCorrect: false },
        ],
      },
      {
        content: 'Biểu hiện của CNTB độc quyền nhà nước trong kinh tế bao gồm những gì?',
        answers: [
          { content: 'Sở hữu nhà nước, điều tiết kinh tế, chính sách tài chính tiền tệ', isCorrect: true },
          { content: 'Chỉ có sở hữu nhà nước', isCorrect: false },
          { content: 'Chỉ có chính sách thuế', isCorrect: false },
          { content: 'Chỉ có doanh nghiệp nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Syndicate là hình thức tổ chức độc quyền như thế nào?',
        answers: [
          { content: 'Các xí nghiệp hợp nhất hoàn toàn', isCorrect: false },
          { content: 'Các xí nghiệp vẫn độc lập về sản xuất nhưng mất độc lập về thương mại', isCorrect: true },
          { content: 'Các xí nghiệp hoàn toàn độc lập', isCorrect: false },
          { content: 'Các xí nghiệp chỉ hợp nhất về tài chính', isCorrect: false },
        ],
      },
      {
        content: 'Consortium là hình thức tổ chức độc quyền như thế nào?',
        answers: [
          { content: 'Tổ chức độc quyền đa ngành, liên kết nhiều xí nghiệp thuộc các ngành khác nhau', isCorrect: true },
          { content: 'Chỉ liên kết trong một ngành', isCorrect: false },
          { content: 'Chỉ liên kết về thương mại', isCorrect: false },
          { content: 'Chỉ liên kết về tài chính', isCorrect: false },
        ],
      },
      {
        content: 'Cạnh tranh trong giai đoạn độc quyền có đặc điểm gì?',
        answers: [
          { content: 'Cạnh tranh hoàn toàn biến mất', isCorrect: false },
          { content: 'Cạnh tranh vẫn tồn tại nhưng gay gắt hơn, đa dạng hơn, có sức phá hoại lớn hơn', isCorrect: true },
          { content: 'Cạnh tranh chỉ diễn ra giữa các nước', isCorrect: false },
          { content: 'Cạnh tranh chỉ diễn ra trong nội bộ tổ chức độc quyền', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò lịch sử của CNTB là gì?',
        answers: [
          { content: 'Phát triển lực lượng sản xuất, xã hội hóa sản xuất, tạo tiền đề vật chất cho CNXH', isCorrect: true },
          { content: 'Chỉ bóc lột người lao động', isCorrect: false },
          { content: 'Không có vai trò tích cực nào', isCorrect: false },
          { content: 'Chỉ phát triển khoa học kỹ thuật', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn lịch sử của CNTB thể hiện ở đâu?',
        answers: [
          { content: 'Mâu thuẫn giữa tính chất xã hội hóa của lực lượng sản xuất với chế độ chiếm hữu tư nhân TBCN', isCorrect: true },
          { content: 'CNTB không có giới hạn', isCorrect: false },
          { content: 'Chỉ ở mâu thuẫn giai cấp', isCorrect: false },
          { content: 'Chỉ ở khủng hoảng kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Xu hướng vận động của CNTB theo quan điểm Mác-Lênin là gì?',
        answers: [
          { content: 'CNTB tồn tại vĩnh viễn', isCorrect: false },
          { content: 'CNTB tất yếu bị thay thế bởi một hình thái kinh tế - xã hội cao hơn', isCorrect: true },
          { content: 'CNTB ngày càng hoàn thiện', isCorrect: false },
          { content: 'CNTB sẽ tự điều chỉnh hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ suất lợi nhuận bình quân hình thành do đâu?',
        answers: [
          { content: 'Do nhà nước quy định', isCorrect: false },
          { content: 'Do cạnh tranh giữa các ngành, tư bản tự do di chuyển từ ngành này sang ngành khác', isCorrect: true },
          { content: 'Do thỏa thuận giữa các nhà tư bản', isCorrect: false },
          { content: 'Do công nhân quyết định', isCorrect: false },
        ],
      },
      {
        content: 'Khủng hoảng kinh tế trong CNTB có nguyên nhân sâu xa là gì?',
        answers: [
          { content: 'Do thiên tai', isCorrect: false },
          { content: 'Do mâu thuẫn cơ bản của CNTB giữa tính chất xã hội hóa của sản xuất với hình thức chiếm hữu tư nhân TBCN', isCorrect: true },
          { content: 'Do chiến tranh', isCorrect: false },
          { content: 'Do dân số tăng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Kinh tế thị trường định hướng XHCN ở Việt Nam
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-kinh-te-chinh-tri-mac-lenin',
    title: 'Trắc nghiệm KTCT Mác-Lênin - Đề số 5',
    slug: 'trac-nghiem-dh-ktct-mac-lenin-de-5',
    description:
      'Trắc nghiệm Kinh tế chính trị Mác-Lênin - Đề số 5. Kinh tế thị trường định hướng XHCN ở Việt Nam: đặc trưng, vai trò nhà nước.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Kinh tế thị trường định hướng XHCN ở Việt Nam là gì?',
        answers: [
          { content: 'Nền kinh tế TBCN', isCorrect: false },
          { content: 'Nền kinh tế thị trường hiện đại, hội nhập quốc tế, vận hành theo quy luật thị trường, có sự quản lý của Nhà nước do Đảng Cộng sản lãnh đạo', isCorrect: true },
          { content: 'Nền kinh tế kế hoạch hóa tập trung', isCorrect: false },
          { content: 'Nền kinh tế tự cung tự cấp', isCorrect: false },
        ],
      },
      {
        content: 'Đặc trưng cơ bản của kinh tế thị trường định hướng XHCN ở Việt Nam về mục tiêu là gì?',
        answers: [
          { content: 'Tối đa hóa lợi nhuận', isCorrect: false },
          { content: 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh', isCorrect: true },
          { content: 'Phát triển kinh tế bằng mọi giá', isCorrect: false },
          { content: 'Xóa bỏ hoàn toàn kinh tế tư nhân', isCorrect: false },
        ],
      },
      {
        content: 'Nền kinh tế Việt Nam có mấy thành phần kinh tế?',
        answers: [
          { content: '3 thành phần', isCorrect: false },
          { content: '4 thành phần: kinh tế nhà nước, kinh tế tập thể, kinh tế tư nhân, kinh tế có vốn đầu tư nước ngoài', isCorrect: true },
          { content: '5 thành phần', isCorrect: false },
          { content: '6 thành phần', isCorrect: false },
        ],
      },
      {
        content: 'Thành phần kinh tế nào giữ vai trò chủ đạo trong nền kinh tế Việt Nam?',
        answers: [
          { content: 'Kinh tế tư nhân', isCorrect: false },
          { content: 'Kinh tế nhà nước', isCorrect: true },
          { content: 'Kinh tế có vốn đầu tư nước ngoài', isCorrect: false },
          { content: 'Kinh tế tập thể', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của Nhà nước trong kinh tế thị trường định hướng XHCN là gì?',
        answers: [
          { content: 'Nhà nước không can thiệp vào kinh tế', isCorrect: false },
          { content: 'Nhà nước quản lý, điều tiết nền kinh tế bằng pháp luật, chiến lược, quy hoạch, chính sách', isCorrect: true },
          { content: 'Nhà nước quyết định mọi hoạt động kinh tế', isCorrect: false },
          { content: 'Nhà nước chỉ thu thuế', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ phân phối trong kinh tế thị trường định hướng XHCN ở Việt Nam dựa trên nguyên tắc nào?',
        answers: [
          { content: 'Phân phối bình quân', isCorrect: false },
          { content: 'Phân phối theo lao động là chủ yếu, đồng thời phân phối theo mức đóng góp vốn và các nguồn lực khác', isCorrect: true },
          { content: 'Phân phối theo nhu cầu', isCorrect: false },
          { content: 'Phân phối theo chức vụ', isCorrect: false },
        ],
      },
      {
        content: 'Công nghiệp hóa, hiện đại hóa ở Việt Nam nhằm mục đích gì?',
        answers: [
          { content: 'Chỉ phát triển công nghiệp nặng', isCorrect: false },
          { content: 'Xây dựng cơ sở vật chất kỹ thuật cho CNXH, phát triển lực lượng sản xuất', isCorrect: true },
          { content: 'Chỉ phát triển nông nghiệp', isCorrect: false },
          { content: 'Chỉ phát triển dịch vụ', isCorrect: false },
        ],
      },
      {
        content: 'Hội nhập kinh tế quốc tế của Việt Nam dựa trên nguyên tắc nào?',
        answers: [
          { content: 'Phụ thuộc hoàn toàn vào nước ngoài', isCorrect: false },
          { content: 'Độc lập, tự chủ, đa phương hóa, đa dạng hóa quan hệ kinh tế quốc tế', isCorrect: true },
          { content: 'Chỉ hợp tác với các nước XHCN', isCorrect: false },
          { content: 'Đóng cửa nền kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'Kinh tế tư nhân được xác định có vai trò gì trong nền kinh tế Việt Nam?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Là một động lực quan trọng của nền kinh tế', isCorrect: true },
          { content: 'Là thành phần kinh tế chủ đạo', isCorrect: false },
          { content: 'Cần xóa bỏ hoàn toàn', isCorrect: false },
        ],
      },
      {
        content: 'Đổi mới kinh tế ở Việt Nam bắt đầu từ năm nào?',
        answers: [
          { content: '1975', isCorrect: false },
          { content: '1986', isCorrect: true },
          { content: '1990', isCorrect: false },
          { content: '2000', isCorrect: false },
        ],
      },
      {
        content: 'Trước đổi mới, Việt Nam thực hiện mô hình kinh tế nào?',
        answers: [
          { content: 'Kinh tế thị trường', isCorrect: false },
          { content: 'Kinh tế kế hoạch hóa tập trung, bao cấp', isCorrect: true },
          { content: 'Kinh tế hỗn hợp', isCorrect: false },
          { content: 'Kinh tế tự do', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ sở hữu trong kinh tế thị trường định hướng XHCN ở Việt Nam có đặc điểm gì?',
        answers: [
          { content: 'Chỉ có sở hữu nhà nước', isCorrect: false },
          { content: 'Đa dạng hình thức sở hữu, trong đó sở hữu toàn dân và sở hữu tập thể là nền tảng', isCorrect: true },
          { content: 'Chỉ có sở hữu tư nhân', isCorrect: false },
          { content: 'Không có sở hữu tư nhân', isCorrect: false },
        ],
      },
      {
        content: 'Thể chế kinh tế thị trường định hướng XHCN bao gồm những yếu tố nào?',
        answers: [
          { content: 'Chỉ có hệ thống pháp luật', isCorrect: false },
          { content: 'Hệ thống pháp luật, cơ chế vận hành, các chủ thể và các loại thị trường', isCorrect: true },
          { content: 'Chỉ có các loại thị trường', isCorrect: false },
          { content: 'Chỉ có các chủ thể kinh tế', isCorrect: false },
        ],
      },
      {
        content: 'An sinh xã hội trong kinh tế thị trường định hướng XHCN có vai trò gì?',
        answers: [
          { content: 'Không quan trọng', isCorrect: false },
          { content: 'Đảm bảo tiến bộ và công bằng xã hội, là mục tiêu và động lực phát triển', isCorrect: true },
          { content: 'Chỉ là gánh nặng cho ngân sách', isCorrect: false },
          { content: 'Chỉ dành cho người nghèo', isCorrect: false },
        ],
      },
      {
        content: 'Phát triển bền vững trong kinh tế thị trường định hướng XHCN bao gồm những khía cạnh nào?',
        answers: [
          { content: 'Chỉ phát triển kinh tế', isCorrect: false },
          { content: 'Kết hợp phát triển kinh tế với bảo vệ môi trường và thực hiện tiến bộ, công bằng xã hội', isCorrect: true },
          { content: 'Chỉ bảo vệ môi trường', isCorrect: false },
          { content: 'Chỉ thực hiện công bằng xã hội', isCorrect: false },
        ],
      },
      {
        content: 'Cơ cấu kinh tế Việt Nam đang chuyển dịch theo hướng nào?',
        answers: [
          { content: 'Tăng tỉ trọng nông nghiệp', isCorrect: false },
          { content: 'Tăng tỉ trọng công nghiệp và dịch vụ, giảm tỉ trọng nông nghiệp', isCorrect: true },
          { content: 'Giữ nguyên cơ cấu', isCorrect: false },
          { content: 'Tăng tỉ trọng khai thác tài nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Vai trò của thị trường trong nền kinh tế thị trường định hướng XHCN là gì?',
        answers: [
          { content: 'Thị trường không có vai trò gì', isCorrect: false },
          { content: 'Thị trường đóng vai trò chủ yếu trong phân bổ nguồn lực', isCorrect: true },
          { content: 'Nhà nước phân bổ toàn bộ nguồn lực', isCorrect: false },
          { content: 'Thị trường chỉ phân phối hàng tiêu dùng', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa Nhà nước và thị trường trong kinh tế thị trường định hướng XHCN là gì?',
        answers: [
          { content: 'Nhà nước thay thế thị trường', isCorrect: false },
          { content: 'Nhà nước và thị trường bổ sung cho nhau, Nhà nước khắc phục khuyết tật của thị trường', isCorrect: true },
          { content: 'Thị trường thay thế Nhà nước', isCorrect: false },
          { content: 'Không có mối quan hệ', isCorrect: false },
        ],
      },
      {
        content: 'Kinh tế tập thể trong nền kinh tế Việt Nam bao gồm những hình thức nào?',
        answers: [
          { content: 'Chỉ có hợp tác xã', isCorrect: false },
          { content: 'Hợp tác xã, tổ hợp tác và các hình thức kinh tế hợp tác khác', isCorrect: true },
          { content: 'Chỉ có nông trường quốc doanh', isCorrect: false },
          { content: 'Chỉ có doanh nghiệp nhà nước', isCorrect: false },
        ],
      },
      {
        content: 'Mục tiêu tổng quát của phát triển kinh tế - xã hội Việt Nam đến năm 2030 là gì?',
        answers: [
          { content: 'Trở thành nước phát triển', isCorrect: false },
          { content: 'Trở thành nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao', isCorrect: true },
          { content: 'Trở thành cường quốc quân sự', isCorrect: false },
          { content: 'Trở thành nước nông nghiệp phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Đảng Cộng sản Việt Nam có vai trò gì trong kinh tế thị trường định hướng XHCN?',
        answers: [
          { content: 'Không có vai trò gì', isCorrect: false },
          { content: 'Lãnh đạo toàn diện, đề ra đường lối, chủ trương phát triển kinh tế', isCorrect: true },
          { content: 'Chỉ quản lý doanh nghiệp nhà nước', isCorrect: false },
          { content: 'Chỉ thu thuế', isCorrect: false },
        ],
      },
      {
        content: 'Tại sao Việt Nam phải phát triển kinh tế thị trường?',
        answers: [
          { content: 'Vì các nước khác đều làm vậy', isCorrect: false },
          { content: 'Vì kinh tế thị trường là phương thức phân bổ nguồn lực hiệu quả, phù hợp với quy luật khách quan', isCorrect: true },
          { content: 'Vì bị ép buộc bởi quốc tế', isCorrect: false },
          { content: 'Vì kinh tế kế hoạch không tồn tại', isCorrect: false },
        ],
      },
      {
        content: 'Hoàn thiện thể chế kinh tế thị trường định hướng XHCN ở Việt Nam cần tập trung vào vấn đề gì?',
        answers: [
          { content: 'Chỉ cần hoàn thiện pháp luật', isCorrect: false },
          { content: 'Hoàn thiện thể chế về sở hữu, phát triển các thành phần kinh tế, phát triển đồng bộ các loại thị trường', isCorrect: true },
          { content: 'Chỉ cần phát triển thị trường chứng khoán', isCorrect: false },
          { content: 'Chỉ cần thu hút đầu tư nước ngoài', isCorrect: false },
        ],
      },
      {
        content: 'Các loại thị trường cần phát triển đồng bộ trong nền kinh tế Việt Nam bao gồm những gì?',
        answers: [
          { content: 'Chỉ có thị trường hàng hóa', isCorrect: false },
          { content: 'Thị trường hàng hóa - dịch vụ, thị trường tài chính, thị trường lao động, thị trường bất động sản, thị trường khoa học công nghệ', isCorrect: true },
          { content: 'Chỉ có thị trường tài chính', isCorrect: false },
          { content: 'Chỉ có thị trường lao động', isCorrect: false },
        ],
      },
      {
        content: 'Nguyên tắc phân phối chủ yếu trong kinh tế thị trường định hướng XHCN ở Việt Nam là gì?',
        answers: [
          { content: 'Phân phối bình quân', isCorrect: false },
          { content: 'Phân phối theo lao động và hiệu quả kinh tế', isCorrect: true },
          { content: 'Phân phối theo nhu cầu', isCorrect: false },
          { content: 'Phân phối theo chức vụ', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
