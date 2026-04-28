import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Khái niệm - nội hàm, ngoại diên, quan hệ giữa các khái niệm, định nghĩa, phân chia
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-logic-hoc',
    title: 'Trắc nghiệm Logic học - Đề số 1',
    slug: 'trac-nghiem-dh-logic-hoc-de-1',
    description:
      'Khái niệm: nội hàm, ngoại diên, quan hệ giữa các khái niệm, định nghĩa, phân chia.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Nội hàm của khái niệm là gì?',
        answers: [
          { content: 'Tập hợp các đối tượng mà khái niệm phản ánh', isCorrect: false },
          { content: 'Tập hợp các dấu hiệu bản chất của đối tượng được phản ánh trong khái niệm', isCorrect: true },
          { content: 'Tên gọi của khái niệm', isCorrect: false },
          { content: 'Phạm vi áp dụng của khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Ngoại diên của khái niệm là gì?',
        answers: [
          { content: 'Tập hợp các dấu hiệu bản chất của đối tượng', isCorrect: false },
          { content: 'Tập hợp các đối tượng có chung dấu hiệu bản chất được phản ánh trong khái niệm', isCorrect: true },
          { content: 'Định nghĩa của khái niệm', isCorrect: false },
          { content: 'Hình thức ngôn ngữ biểu đạt khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Mối quan hệ giữa nội hàm và ngoại diên của khái niệm là:',
        answers: [
          { content: 'Tỷ lệ thuận: nội hàm tăng thì ngoại diên tăng', isCorrect: false },
          { content: 'Tỷ lệ nghịch: nội hàm tăng thì ngoại diên giảm', isCorrect: true },
          { content: 'Không có mối quan hệ', isCorrect: false },
          { content: 'Luôn bằng nhau', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm "sinh viên Đại học Quốc gia Hà Nội" so với khái niệm "sinh viên" có quan hệ gì?',
        answers: [
          { content: 'Quan hệ đồng nhất', isCorrect: false },
          { content: 'Quan hệ bao hàm (sinh viên bao hàm sinh viên ĐHQGHN)', isCorrect: true },
          { content: 'Quan hệ giao nhau', isCorrect: false },
          { content: 'Quan hệ mâu thuẫn', isCorrect: false },
        ],
      },
      {
        content: 'Hai khái niệm có quan hệ đồng nhất khi:',
        answers: [
          { content: 'Ngoại diên của chúng hoàn toàn trùng nhau', isCorrect: true },
          { content: 'Nội hàm của chúng hoàn toàn khác nhau', isCorrect: false },
          { content: 'Ngoại diên của chúng không có phần tử chung', isCorrect: false },
          { content: 'Một khái niệm nằm trong khái niệm kia', isCorrect: false },
        ],
      },
      {
        content: 'Hai khái niệm có quan hệ giao nhau khi:',
        answers: [
          { content: 'Ngoại diên của chúng có một phần chung và một phần riêng', isCorrect: true },
          { content: 'Ngoại diên của chúng hoàn toàn trùng nhau', isCorrect: false },
          { content: 'Ngoại diên của chúng không có phần tử chung', isCorrect: false },
          { content: 'Ngoại diên của khái niệm này nằm trọn trong khái niệm kia', isCorrect: false },
        ],
      },
      {
        content: 'Hai khái niệm "số chẵn" và "số lẻ" có quan hệ gì?',
        answers: [
          { content: 'Quan hệ đồng nhất', isCorrect: false },
          { content: 'Quan hệ giao nhau', isCorrect: false },
          { content: 'Quan hệ mâu thuẫn', isCorrect: true },
          { content: 'Quan hệ bao hàm', isCorrect: false },
        ],
      },
      {
        content: 'Quan hệ đối lập giữa hai khái niệm khác quan hệ mâu thuẫn ở chỗ:',
        answers: [
          { content: 'Tổng ngoại diên của hai khái niệm đối lập không bằng ngoại diên khái niệm giống', isCorrect: true },
          { content: 'Hai khái niệm đối lập luôn có ngoại diên bằng nhau', isCorrect: false },
          { content: 'Hai khái niệm đối lập không cùng thuộc một khái niệm giống', isCorrect: false },
          { content: 'Không có sự khác biệt', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm đơn nhất là khái niệm có ngoại diên gồm:',
        answers: [
          { content: 'Nhiều đối tượng', isCorrect: false },
          { content: 'Một đối tượng duy nhất', isCorrect: true },
          { content: 'Không có đối tượng nào', isCorrect: false },
          { content: 'Tất cả các đối tượng', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm rỗng là khái niệm:',
        answers: [
          { content: 'Có ngoại diên gồm một đối tượng', isCorrect: false },
          { content: 'Không có đối tượng nào trong thực tế tương ứng', isCorrect: true },
          { content: 'Có nội hàm không xác định', isCorrect: false },
          { content: 'Không thể định nghĩa được', isCorrect: false },
        ],
      },
      {
        content: 'Phép thu hẹp khái niệm là:',
        answers: [
          { content: 'Chuyển từ khái niệm có ngoại diên rộng sang khái niệm có ngoại diên hẹp hơn', isCorrect: true },
          { content: 'Chuyển từ khái niệm có ngoại diên hẹp sang khái niệm có ngoại diên rộng hơn', isCorrect: false },
          { content: 'Giảm bớt nội hàm của khái niệm', isCorrect: false },
          { content: 'Loại bỏ các dấu hiệu bản chất', isCorrect: false },
        ],
      },
      {
        content: 'Giới hạn của phép mở rộng khái niệm là:',
        answers: [
          { content: 'Khái niệm đơn nhất', isCorrect: false },
          { content: 'Phạm trù (khái niệm rộng nhất trong một lĩnh vực)', isCorrect: true },
          { content: 'Khái niệm rỗng', isCorrect: false },
          { content: 'Khái niệm cụ thể', isCorrect: false },
        ],
      },
      {
        content: 'Định nghĩa khái niệm qua giống gần nhất và khác biệt loài là:',
        answers: [
          { content: 'Chỉ ra khái niệm giống gần nhất và dấu hiệu khác biệt loài của khái niệm được định nghĩa', isCorrect: true },
          { content: 'Liệt kê tất cả các đối tượng thuộc ngoại diên', isCorrect: false },
          { content: 'Nêu nguồn gốc phát sinh của đối tượng', isCorrect: false },
          { content: 'Chỉ ra mối quan hệ giữa các khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc nào sau đây KHÔNG phải là quy tắc của định nghĩa khái niệm?',
        answers: [
          { content: 'Định nghĩa phải cân đối', isCorrect: false },
          { content: 'Định nghĩa không được vòng quanh', isCorrect: false },
          { content: 'Định nghĩa phải rõ ràng', isCorrect: false },
          { content: 'Định nghĩa phải sử dụng ngôn ngữ khoa học chuyên ngành', isCorrect: true },
        ],
      },
      {
        content: 'Lỗi "định nghĩa quá rộng" xảy ra khi:',
        answers: [
          { content: 'Ngoại diên của khái niệm dùng để định nghĩa rộng hơn ngoại diên khái niệm được định nghĩa', isCorrect: true },
          { content: 'Ngoại diên của khái niệm dùng để định nghĩa hẹp hơn ngoại diên khái niệm được định nghĩa', isCorrect: false },
          { content: 'Định nghĩa sử dụng khái niệm phủ định', isCorrect: false },
          { content: 'Định nghĩa chứa thuật ngữ mơ hồ', isCorrect: false },
        ],
      },
      {
        content: 'Phân chia khái niệm là thao tác logic nhằm:',
        answers: [
          { content: 'Vạch ra nội hàm của khái niệm', isCorrect: false },
          { content: 'Vạch ra ngoại diên của khái niệm bằng cách chia thành các nhóm nhỏ hơn', isCorrect: true },
          { content: 'Thu hẹp khái niệm', isCorrect: false },
          { content: 'Mở rộng khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Cơ sở phân chia (tiêu chí phân chia) khái niệm là:',
        answers: [
          { content: 'Dấu hiệu dùng làm căn cứ để chia ngoại diên khái niệm thành các nhóm', isCorrect: true },
          { content: 'Số lượng đối tượng trong ngoại diên', isCorrect: false },
          { content: 'Nội hàm của khái niệm được phân chia', isCorrect: false },
          { content: 'Tên gọi của khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc "phân chia phải cân đối" có nghĩa là:',
        answers: [
          { content: 'Tổng ngoại diên các thành phần phân chia phải bằng ngoại diên khái niệm bị phân chia', isCorrect: true },
          { content: 'Các thành phần phân chia phải có số lượng đối tượng bằng nhau', isCorrect: false },
          { content: 'Phải chia thành số lượng thành phần chẵn', isCorrect: false },
          { content: 'Mỗi thành phần phải có cùng số dấu hiệu', isCorrect: false },
        ],
      },
      {
        content: 'Phân đôi khái niệm là trường hợp đặc biệt của phân chia, trong đó:',
        answers: [
          { content: 'Ngoại diên được chia thành hai phần: A và không-A', isCorrect: true },
          { content: 'Ngoại diên được chia thành hai phần bằng nhau', isCorrect: false },
          { content: 'Ngoại diên được chia theo hai tiêu chí khác nhau', isCorrect: false },
          { content: 'Ngoại diên được chia thành hai khái niệm đồng nhất', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi "phân chia không theo một cơ sở" xảy ra khi:',
        answers: [
          { content: 'Sử dụng nhiều tiêu chí phân chia cùng lúc trong một lần phân chia', isCorrect: true },
          { content: 'Phân chia thành quá nhiều thành phần', isCorrect: false },
          { content: 'Phân chia thành quá ít thành phần', isCorrect: false },
          { content: 'Các thành phần phân chia có ngoại diên giao nhau', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm cụ thể phản ánh:',
        answers: [
          { content: 'Đối tượng hoặc lớp đối tượng tồn tại độc lập', isCorrect: true },
          { content: 'Thuộc tính, quan hệ của đối tượng', isCorrect: false },
          { content: 'Chỉ một đối tượng duy nhất', isCorrect: false },
          { content: 'Đối tượng không tồn tại trong thực tế', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm trừu tượng phản ánh:',
        answers: [
          { content: 'Đối tượng tồn tại độc lập', isCorrect: false },
          { content: 'Thuộc tính hoặc quan hệ của đối tượng', isCorrect: true },
          { content: 'Nhiều đối tượng cùng loại', isCorrect: false },
          { content: 'Đối tượng không có thực', isCorrect: false },
        ],
      },
      {
        content: 'Khái niệm "Thủ đô Hà Nội" là khái niệm thuộc loại nào?',
        answers: [
          { content: 'Khái niệm chung', isCorrect: false },
          { content: 'Khái niệm đơn nhất', isCorrect: true },
          { content: 'Khái niệm rỗng', isCorrect: false },
          { content: 'Khái niệm trừu tượng', isCorrect: false },
        ],
      },
      {
        content: 'Hai khái niệm "tam giác đều" và "tam giác có ba góc bằng nhau" có quan hệ:',
        answers: [
          { content: 'Đồng nhất', isCorrect: true },
          { content: 'Giao nhau', isCorrect: false },
          { content: 'Bao hàm', isCorrect: false },
          { content: 'Đối lập', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi "định nghĩa vòng quanh" là gì?',
        answers: [
          { content: 'Khái niệm dùng để định nghĩa lại được định nghĩa thông qua khái niệm cần định nghĩa', isCorrect: true },
          { content: 'Định nghĩa quá dài dòng', isCorrect: false },
          { content: 'Định nghĩa sử dụng phủ định', isCorrect: false },
          { content: 'Định nghĩa quá ngắn gọn', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Phán đoán - phán đoán đơn, phán đoán phức, hình vuông logic
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-logic-hoc',
    title: 'Trắc nghiệm Logic học - Đề số 2',
    slug: 'trac-nghiem-dh-logic-hoc-de-2',
    description:
      'Phán đoán: phán đoán đơn, phán đoán phức, hình vuông logic.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Phán đoán là gì?',
        answers: [
          { content: 'Hình thức tư duy phản ánh mối liên hệ giữa đối tượng với dấu hiệu của nó, được biểu đạt dưới dạng khẳng định hoặc phủ định', isCorrect: true },
          { content: 'Hình thức tư duy phản ánh dấu hiệu bản chất của đối tượng', isCorrect: false },
          { content: 'Hình thức tư duy rút ra tri thức mới từ tri thức đã có', isCorrect: false },
          { content: 'Hình thức ngôn ngữ biểu đạt khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán đơn có cấu trúc logic gồm:',
        answers: [
          { content: 'Chủ từ (S), vị từ (P) và hệ từ', isCorrect: true },
          { content: 'Tiền đề và kết luận', isCorrect: false },
          { content: 'Luận đề và luận cứ', isCorrect: false },
          { content: 'Hai phán đoán và liên từ logic', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán "Mọi sinh viên đều phải học logic" thuộc loại nào?',
        answers: [
          { content: 'Phán đoán khẳng định toàn thể (A)', isCorrect: true },
          { content: 'Phán đoán khẳng định bộ phận (I)', isCorrect: false },
          { content: 'Phán đoán phủ định toàn thể (E)', isCorrect: false },
          { content: 'Phán đoán phủ định bộ phận (O)', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán loại I (khẳng định bộ phận) có dạng logic là:',
        answers: [
          { content: 'Mọi S là P', isCorrect: false },
          { content: 'Một số S là P', isCorrect: true },
          { content: 'Không S nào là P', isCorrect: false },
          { content: 'Một số S không là P', isCorrect: false },
        ],
      },
      {
        content: 'Trong phán đoán loại A (Mọi S là P), thuật ngữ nào có ngoại diên đầy đủ (chu diên)?',
        answers: [
          { content: 'Chỉ chủ từ S', isCorrect: true },
          { content: 'Chỉ vị từ P', isCorrect: false },
          { content: 'Cả S và P', isCorrect: false },
          { content: 'Không thuật ngữ nào', isCorrect: false },
        ],
      },
      {
        content: 'Trong phán đoán loại E (Không S nào là P), tính chu diên của S và P là:',
        answers: [
          { content: 'S chu diên, P không chu diên', isCorrect: false },
          { content: 'S không chu diên, P chu diên', isCorrect: false },
          { content: 'Cả S và P đều chu diên', isCorrect: true },
          { content: 'Cả S và P đều không chu diên', isCorrect: false },
        ],
      },
      {
        content: 'Theo hình vuông logic, quan hệ giữa phán đoán A và O là:',
        answers: [
          { content: 'Quan hệ mâu thuẫn', isCorrect: true },
          { content: 'Quan hệ đối chọi trên', isCorrect: false },
          { content: 'Quan hệ đối chọi dưới', isCorrect: false },
          { content: 'Quan hệ lệ thuộc', isCorrect: false },
        ],
      },
      {
        content: 'Theo hình vuông logic, quan hệ giữa phán đoán A và E là:',
        answers: [
          { content: 'Quan hệ mâu thuẫn', isCorrect: false },
          { content: 'Quan hệ đối chọi trên (không thể cùng đúng, có thể cùng sai)', isCorrect: true },
          { content: 'Quan hệ đối chọi dưới', isCorrect: false },
          { content: 'Quan hệ lệ thuộc', isCorrect: false },
        ],
      },
      {
        content: 'Theo hình vuông logic, quan hệ giữa phán đoán I và O là:',
        answers: [
          { content: 'Quan hệ mâu thuẫn', isCorrect: false },
          { content: 'Quan hệ đối chọi trên', isCorrect: false },
          { content: 'Quan hệ đối chọi dưới (không thể cùng sai, có thể cùng đúng)', isCorrect: true },
          { content: 'Quan hệ lệ thuộc', isCorrect: false },
        ],
      },
      {
        content: 'Nếu phán đoán A đúng thì theo hình vuông logic, phán đoán I:',
        answers: [
          { content: 'Chắc chắn đúng', isCorrect: true },
          { content: 'Chắc chắn sai', isCorrect: false },
          { content: 'Không xác định', isCorrect: false },
          { content: 'Có thể đúng hoặc sai', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán phức là phán đoán được tạo thành từ:',
        answers: [
          { content: 'Hai hay nhiều phán đoán đơn liên kết bởi liên từ logic', isCorrect: true },
          { content: 'Một phán đoán đơn có nhiều chủ từ', isCorrect: false },
          { content: 'Một phán đoán đơn có nhiều vị từ', isCorrect: false },
          { content: 'Một phán đoán đơn và một khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán hội (liên kết) "p ∧ q" đúng khi nào?',
        answers: [
          { content: 'Khi cả p và q đều đúng', isCorrect: true },
          { content: 'Khi ít nhất một trong hai đúng', isCorrect: false },
          { content: 'Khi p đúng và q sai', isCorrect: false },
          { content: 'Khi cả p và q đều sai', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán tuyển (lựa chọn) "p ∨ q" sai khi nào?',
        answers: [
          { content: 'Khi cả p và q đều đúng', isCorrect: false },
          { content: 'Khi cả p và q đều sai', isCorrect: true },
          { content: 'Khi p đúng và q sai', isCorrect: false },
          { content: 'Khi p sai và q đúng', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán kéo theo (điều kiện) "p → q" sai khi nào?',
        answers: [
          { content: 'Khi p đúng và q sai', isCorrect: true },
          { content: 'Khi p sai và q đúng', isCorrect: false },
          { content: 'Khi cả p và q đều sai', isCorrect: false },
          { content: 'Khi cả p và q đều đúng', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán tương đương "p ↔ q" đúng khi nào?',
        answers: [
          { content: 'Khi p và q cùng giá trị chân lý (cùng đúng hoặc cùng sai)', isCorrect: true },
          { content: 'Khi p đúng và q sai', isCorrect: false },
          { content: 'Khi ít nhất một trong hai đúng', isCorrect: false },
          { content: 'Khi p sai và q đúng', isCorrect: false },
        ],
      },
      {
        content: 'Phép phủ định phán đoán "¬p" có đặc điểm gì?',
        answers: [
          { content: 'Đổi giá trị chân lý của phán đoán: đúng thành sai, sai thành đúng', isCorrect: true },
          { content: 'Giữ nguyên giá trị chân lý', isCorrect: false },
          { content: 'Luôn cho kết quả đúng', isCorrect: false },
          { content: 'Luôn cho kết quả sai', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán "Nếu trời mưa thì đường ướt" thuộc loại phán đoán phức nào?',
        answers: [
          { content: 'Phán đoán hội', isCorrect: false },
          { content: 'Phán đoán tuyển', isCorrect: false },
          { content: 'Phán đoán kéo theo (điều kiện)', isCorrect: true },
          { content: 'Phán đoán tương đương', isCorrect: false },
        ],
      },
      {
        content: 'Tuyển chặt (tuyển loại trừ) "p ⊻ q" đúng khi nào?',
        answers: [
          { content: 'Khi đúng một trong hai phán đoán thành phần đúng', isCorrect: true },
          { content: 'Khi cả hai đều đúng', isCorrect: false },
          { content: 'Khi cả hai đều sai', isCorrect: false },
          { content: 'Khi ít nhất một đúng', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán tất yếu (tình thái) "Tất yếu p" khẳng định rằng:',
        answers: [
          { content: 'p đúng trong mọi trường hợp có thể', isCorrect: true },
          { content: 'p đúng trong một số trường hợp', isCorrect: false },
          { content: 'p có thể đúng hoặc sai', isCorrect: false },
          { content: 'p sai trong mọi trường hợp', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán "Một số sinh viên là đảng viên và một số sinh viên là đoàn viên" là:',
        answers: [
          { content: 'Phán đoán đơn', isCorrect: false },
          { content: 'Phán đoán hội', isCorrect: true },
          { content: 'Phán đoán tuyển', isCorrect: false },
          { content: 'Phán đoán kéo theo', isCorrect: false },
        ],
      },
      {
        content: 'Nếu A đúng, theo hình vuông logic thì E:',
        answers: [
          { content: 'Chắc chắn đúng', isCorrect: false },
          { content: 'Chắc chắn sai', isCorrect: true },
          { content: 'Không xác định', isCorrect: false },
          { content: 'Có thể đúng hoặc sai', isCorrect: false },
        ],
      },
      {
        content: 'Nếu E sai, theo hình vuông logic thì I:',
        answers: [
          { content: 'Chắc chắn đúng', isCorrect: true },
          { content: 'Chắc chắn sai', isCorrect: false },
          { content: 'Không xác định', isCorrect: false },
          { content: 'Có thể đúng hoặc sai', isCorrect: false },
        ],
      },
      {
        content: 'Nếu I sai, theo hình vuông logic thì A:',
        answers: [
          { content: 'Chắc chắn đúng', isCorrect: false },
          { content: 'Chắc chắn sai', isCorrect: true },
          { content: 'Không xác định', isCorrect: false },
          { content: 'Có thể đúng hoặc sai', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán đặc tính là phán đoán:',
        answers: [
          { content: 'Khẳng định hoặc phủ định một thuộc tính nào đó của đối tượng', isCorrect: true },
          { content: 'Khẳng định mối quan hệ giữa các đối tượng', isCorrect: false },
          { content: 'Khẳng định sự tồn tại của đối tượng', isCorrect: false },
          { content: 'Phản ánh số lượng đối tượng', isCorrect: false },
        ],
      },
      {
        content: 'Phán đoán quan hệ là phán đoán:',
        answers: [
          { content: 'Khẳng định thuộc tính của đối tượng', isCorrect: false },
          { content: 'Phản ánh mối quan hệ giữa các đối tượng', isCorrect: true },
          { content: 'Phản ánh sự tồn tại của đối tượng', isCorrect: false },
          { content: 'Phản ánh số lượng đối tượng', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Suy luận - tam đoạn luận, suy luận diễn dịch, quy nạp
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-logic-hoc',
    title: 'Trắc nghiệm Logic học - Đề số 3',
    slug: 'trac-nghiem-dh-logic-hoc-de-3',
    description:
      'Suy luận: tam đoạn luận, suy luận diễn dịch, quy nạp.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Suy luận là gì?',
        answers: [
          { content: 'Hình thức tư duy rút ra phán đoán mới từ một hay nhiều phán đoán đã biết theo quy tắc logic', isCorrect: true },
          { content: 'Hình thức tư duy phản ánh dấu hiệu bản chất của đối tượng', isCorrect: false },
          { content: 'Hình thức tư duy khẳng định hoặc phủ định dấu hiệu của đối tượng', isCorrect: false },
          { content: 'Quá trình chứng minh một luận đề', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận diễn dịch là suy luận đi từ:',
        answers: [
          { content: 'Cái chung đến cái riêng', isCorrect: true },
          { content: 'Cái riêng đến cái chung', isCorrect: false },
          { content: 'Cái riêng đến cái riêng', isCorrect: false },
          { content: 'Cái chung đến cái chung', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận quy nạp là suy luận đi từ:',
        answers: [
          { content: 'Cái chung đến cái riêng', isCorrect: false },
          { content: 'Cái riêng đến cái chung', isCorrect: true },
          { content: 'Tiền đề tổng quát đến kết luận tổng quát', isCorrect: false },
          { content: 'Kết luận đến tiền đề', isCorrect: false },
        ],
      },
      {
        content: 'Tam đoạn luận (syllogism) là suy luận diễn dịch gồm:',
        answers: [
          { content: 'Hai tiền đề và một kết luận, trong đó có ba thuật ngữ', isCorrect: true },
          { content: 'Ba tiền đề và một kết luận', isCorrect: false },
          { content: 'Một tiền đề và hai kết luận', isCorrect: false },
          { content: 'Hai tiền đề và hai kết luận', isCorrect: false },
        ],
      },
      {
        content: 'Trong tam đoạn luận, thuật ngữ giữa (M) là:',
        answers: [
          { content: 'Thuật ngữ có mặt trong cả hai tiền đề nhưng không có trong kết luận', isCorrect: true },
          { content: 'Thuật ngữ làm chủ từ của kết luận', isCorrect: false },
          { content: 'Thuật ngữ làm vị từ của kết luận', isCorrect: false },
          { content: 'Thuật ngữ có mặt trong kết luận', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc nào sau đây là quy tắc của thuật ngữ trong tam đoạn luận?',
        answers: [
          { content: 'Thuật ngữ giữa phải chu diên ít nhất một lần trong tiền đề', isCorrect: true },
          { content: 'Thuật ngữ giữa phải chu diên trong cả hai tiền đề', isCorrect: false },
          { content: 'Thuật ngữ giữa không cần chu diên', isCorrect: false },
          { content: 'Thuật ngữ giữa phải có mặt trong kết luận', isCorrect: false },
        ],
      },
      {
        content: 'Tam đoạn luận loại hình 1 có đặc điểm:',
        answers: [
          { content: 'M là chủ từ của tiền đề lớn và vị từ của tiền đề nhỏ', isCorrect: true },
          { content: 'M là vị từ của cả hai tiền đề', isCorrect: false },
          { content: 'M là chủ từ của cả hai tiền đề', isCorrect: false },
          { content: 'M là vị từ của tiền đề lớn và chủ từ của tiền đề nhỏ', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc "Từ hai tiền đề phủ định không rút ra được kết luận" thuộc nhóm quy tắc nào?',
        answers: [
          { content: 'Quy tắc của tiền đề', isCorrect: true },
          { content: 'Quy tắc của thuật ngữ', isCorrect: false },
          { content: 'Quy tắc của kết luận', isCorrect: false },
          { content: 'Quy tắc của loại hình', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc "Từ hai tiền đề bộ phận không rút ra được kết luận" là vì:',
        answers: [
          { content: 'Thuật ngữ giữa không thể chu diên trong cả hai tiền đề bộ phận', isCorrect: true },
          { content: 'Kết luận luôn là phán đoán toàn thể', isCorrect: false },
          { content: 'Hai tiền đề bộ phận luôn mâu thuẫn nhau', isCorrect: false },
          { content: 'Không có lý do logic nào', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận trực tiếp bằng phép đổi chỗ (conversion) là:',
        answers: [
          { content: 'Đổi vị trí chủ từ và vị từ của phán đoán', isCorrect: true },
          { content: 'Đổi chất của phán đoán', isCorrect: false },
          { content: 'Đổi lượng của phán đoán', isCorrect: false },
          { content: 'Phủ định phán đoán', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận trực tiếp bằng phép đổi chất (obversion) là:',
        answers: [
          { content: 'Đổi chất phán đoán (khẳng định thành phủ định hoặc ngược lại) và phủ định vị từ', isCorrect: true },
          { content: 'Đổi vị trí chủ từ và vị từ', isCorrect: false },
          { content: 'Đổi lượng của phán đoán', isCorrect: false },
          { content: 'Phủ định toàn bộ phán đoán', isCorrect: false },
        ],
      },
      {
        content: 'Phép đổi chỗ phán đoán A (Mọi S là P) cho kết quả:',
        answers: [
          { content: 'Mọi P là S (A)', isCorrect: false },
          { content: 'Một số P là S (I)', isCorrect: true },
          { content: 'Không P nào là S (E)', isCorrect: false },
          { content: 'Một số P không là S (O)', isCorrect: false },
        ],
      },
      {
        content: 'Quy nạp hoàn toàn là:',
        answers: [
          { content: 'Xét tất cả các trường hợp riêng rồi rút ra kết luận chung', isCorrect: true },
          { content: 'Xét một số trường hợp riêng rồi rút ra kết luận chung', isCorrect: false },
          { content: 'Đi từ cái chung đến cái riêng', isCorrect: false },
          { content: 'Rút ra kết luận từ một trường hợp duy nhất', isCorrect: false },
        ],
      },
      {
        content: 'Quy nạp không hoàn toàn có đặc điểm:',
        answers: [
          { content: 'Kết luận chỉ có tính chất xác suất (có thể đúng hoặc sai)', isCorrect: true },
          { content: 'Kết luận luôn đúng', isCorrect: false },
          { content: 'Kết luận luôn sai', isCorrect: false },
          { content: 'Không rút ra được kết luận', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp tương đồng (Mill) trong quy nạp khoa học phát biểu:',
        answers: [
          { content: 'Nếu các trường hợp có chung một yếu tố và cùng xảy ra hiện tượng, thì yếu tố chung đó là nguyên nhân', isCorrect: true },
          { content: 'Nếu hai trường hợp khác nhau ở một yếu tố thì yếu tố đó là nguyên nhân', isCorrect: false },
          { content: 'Nguyên nhân và kết quả biến đổi cùng chiều', isCorrect: false },
          { content: 'Loại trừ các yếu tố không phải nguyên nhân', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp khác biệt (Mill) trong quy nạp khoa học phát biểu:',
        answers: [
          { content: 'Nếu các trường hợp có chung một yếu tố thì yếu tố đó là nguyên nhân', isCorrect: false },
          { content: 'Nếu trường hợp có hiện tượng và trường hợp không có hiện tượng chỉ khác nhau ở một yếu tố, thì yếu tố đó là nguyên nhân', isCorrect: true },
          { content: 'Nguyên nhân và kết quả biến đổi cùng chiều', isCorrect: false },
          { content: 'Loại trừ tất cả các yếu tố', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận tương tự (analogy) là:',
        answers: [
          { content: 'Suy luận từ sự giống nhau của hai đối tượng ở một số dấu hiệu để kết luận chúng giống nhau ở dấu hiệu khác', isCorrect: true },
          { content: 'Suy luận từ cái chung đến cái riêng', isCorrect: false },
          { content: 'Suy luận từ cái riêng đến cái chung', isCorrect: false },
          { content: 'Suy luận từ hai tiền đề có thuật ngữ chung', isCorrect: false },
        ],
      },
      {
        content: 'Tam đoạn luận rút gọn (enthymeme) là tam đoạn luận:',
        answers: [
          { content: 'Bỏ bớt một tiền đề hoặc kết luận', isCorrect: true },
          { content: 'Có ba tiền đề', isCorrect: false },
          { content: 'Không có kết luận', isCorrect: false },
          { content: 'Có hai kết luận', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận điều kiện thuần túy có dạng:',
        answers: [
          { content: 'Nếu p thì q; nếu q thì r; vậy nếu p thì r', isCorrect: true },
          { content: 'Nếu p thì q; p; vậy q', isCorrect: false },
          { content: 'p hoặc q; không p; vậy q', isCorrect: false },
          { content: 'Nếu p thì q; không q; vậy không p', isCorrect: false },
        ],
      },
      {
        content: 'Modus Ponens (khẳng định tiền kiện) có dạng:',
        answers: [
          { content: 'Nếu p thì q; p đúng; vậy q đúng', isCorrect: true },
          { content: 'Nếu p thì q; q đúng; vậy p đúng', isCorrect: false },
          { content: 'Nếu p thì q; không p; vậy không q', isCorrect: false },
          { content: 'Nếu p thì q; không q; vậy không p', isCorrect: false },
        ],
      },
      {
        content: 'Modus Tollens (phủ định hậu kiện) có dạng:',
        answers: [
          { content: 'Nếu p thì q; p đúng; vậy q đúng', isCorrect: false },
          { content: 'Nếu p thì q; không q; vậy không p', isCorrect: true },
          { content: 'Nếu p thì q; q đúng; vậy p đúng', isCorrect: false },
          { content: 'Nếu p thì q; không p; vậy không q', isCorrect: false },
        ],
      },
      {
        content: 'Suy luận lựa chọn-khẳng định (Modus Tollendo Ponens) có dạng:',
        answers: [
          { content: 'p hoặc q; không p; vậy q', isCorrect: true },
          { content: 'p hoặc q; p; vậy không q', isCorrect: false },
          { content: 'Nếu p thì q; p; vậy q', isCorrect: false },
          { content: 'Nếu p thì q; không q; vậy không p', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi "khẳng định hậu kiện" trong suy luận điều kiện là:',
        answers: [
          { content: 'Từ "nếu p thì q" và "q đúng" kết luận "p đúng"', isCorrect: true },
          { content: 'Từ "nếu p thì q" và "p đúng" kết luận "q đúng"', isCorrect: false },
          { content: 'Từ "nếu p thì q" và "không q" kết luận "không p"', isCorrect: false },
          { content: 'Từ "nếu p thì q" và "không p" kết luận "q đúng"', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp biến đổi kèm theo (Mill) phát biểu:',
        answers: [
          { content: 'Nếu yếu tố A biến đổi thì hiện tượng B cũng biến đổi theo, thì A là nguyên nhân của B', isCorrect: true },
          { content: 'Nếu các trường hợp có chung yếu tố thì yếu tố đó là nguyên nhân', isCorrect: false },
          { content: 'Loại trừ các yếu tố không phải nguyên nhân', isCorrect: false },
          { content: 'Hai trường hợp khác nhau ở một yếu tố thì yếu tố đó là nguyên nhân', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp phần dư (Mill) phát biểu:',
        answers: [
          { content: 'Nếu loại trừ các phần của hiện tượng đã biết nguyên nhân, thì phần còn lại là kết quả của yếu tố còn lại', isCorrect: true },
          { content: 'Nếu các trường hợp có chung yếu tố thì yếu tố đó là nguyên nhân', isCorrect: false },
          { content: 'Nếu yếu tố biến đổi thì hiện tượng biến đổi theo', isCorrect: false },
          { content: 'Hai trường hợp khác nhau ở một yếu tố thì yếu tố đó là nguyên nhân', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Các quy luật logic - đồng nhất, phi mâu thuẫn, bài trung, lý do đầy đủ
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-logic-hoc',
    title: 'Trắc nghiệm Logic học - Đề số 4',
    slug: 'trac-nghiem-dh-logic-hoc-de-4',
    description:
      'Các quy luật logic: đồng nhất, phi mâu thuẫn, bài trung, lý do đầy đủ.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Quy luật đồng nhất phát biểu:',
        answers: [
          { content: 'Trong quá trình tư duy, mỗi tư tưởng phải đồng nhất với chính nó', isCorrect: true },
          { content: 'Hai tư tưởng mâu thuẫn không thể cùng đúng', isCorrect: false },
          { content: 'Trong hai tư tưởng mâu thuẫn, phải có một đúng', isCorrect: false },
          { content: 'Mọi tư tưởng đều phải có lý do đầy đủ', isCorrect: false },
        ],
      },
      {
        content: 'Công thức logic của quy luật đồng nhất là:',
        answers: [
          { content: 'A là A (A ≡ A)', isCorrect: true },
          { content: '¬(A ∧ ¬A)', isCorrect: false },
          { content: 'A ∨ ¬A', isCorrect: false },
          { content: 'A → B', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm quy luật đồng nhất dẫn đến lỗi logic nào?',
        answers: [
          { content: 'Lỗi đánh tráo khái niệm hoặc đánh tráo luận đề', isCorrect: true },
          { content: 'Lỗi mâu thuẫn', isCorrect: false },
          { content: 'Lỗi luận chứng vòng quanh', isCorrect: false },
          { content: 'Lỗi khái quát vội vàng', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phi mâu thuẫn (không mâu thuẫn) phát biểu:',
        answers: [
          { content: 'Hai phán đoán mâu thuẫn không thể cùng đúng', isCorrect: true },
          { content: 'Hai phán đoán mâu thuẫn không thể cùng sai', isCorrect: false },
          { content: 'Mỗi tư tưởng phải đồng nhất với chính nó', isCorrect: false },
          { content: 'Mọi tư tưởng phải có lý do đầy đủ', isCorrect: false },
        ],
      },
      {
        content: 'Công thức logic của quy luật phi mâu thuẫn là:',
        answers: [
          { content: 'A là A', isCorrect: false },
          { content: '¬(A ∧ ¬A) - Không thể vừa A vừa không A', isCorrect: true },
          { content: 'A ∨ ¬A', isCorrect: false },
          { content: 'A → B', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phi mâu thuẫn áp dụng cho hai phán đoán:',
        answers: [
          { content: 'Cùng chủ thể, cùng thời gian, cùng quan hệ nhưng khẳng định và phủ định cùng dấu hiệu', isCorrect: true },
          { content: 'Khác chủ thể, khác thời gian', isCorrect: false },
          { content: 'Bất kỳ hai phán đoán nào', isCorrect: false },
          { content: 'Chỉ áp dụng cho phán đoán đơn', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật bài trung (loại trừ cái thứ ba) phát biểu:',
        answers: [
          { content: 'Trong hai phán đoán mâu thuẫn, phải có một đúng và một sai, không có khả năng thứ ba', isCorrect: true },
          { content: 'Hai phán đoán mâu thuẫn không thể cùng đúng', isCorrect: false },
          { content: 'Mỗi tư tưởng phải đồng nhất với chính nó', isCorrect: false },
          { content: 'Mọi tư tưởng phải có căn cứ', isCorrect: false },
        ],
      },
      {
        content: 'Công thức logic của quy luật bài trung là:',
        answers: [
          { content: 'A là A', isCorrect: false },
          { content: '¬(A ∧ ¬A)', isCorrect: false },
          { content: 'A ∨ ¬A - Hoặc A hoặc không A', isCorrect: true },
          { content: 'A → B', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật bài trung khác quy luật phi mâu thuẫn ở điểm nào?',
        answers: [
          { content: 'Quy luật bài trung khẳng định phải có một đúng; quy luật phi mâu thuẫn chỉ nói không thể cùng đúng', isCorrect: true },
          { content: 'Không có sự khác biệt', isCorrect: false },
          { content: 'Quy luật bài trung chỉ áp dụng cho phán đoán phức', isCorrect: false },
          { content: 'Quy luật phi mâu thuẫn mạnh hơn quy luật bài trung', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật bài trung chỉ áp dụng cho:',
        answers: [
          { content: 'Hai phán đoán mâu thuẫn (không áp dụng cho phán đoán đối lập)', isCorrect: true },
          { content: 'Mọi cặp phán đoán', isCorrect: false },
          { content: 'Hai phán đoán đối lập', isCorrect: false },
          { content: 'Hai phán đoán bất kỳ có cùng chủ từ', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật lý do đầy đủ phát biểu:',
        answers: [
          { content: 'Mọi tư tưởng được coi là đúng phải có lý do đầy đủ (căn cứ xác thực)', isCorrect: true },
          { content: 'Mỗi tư tưởng phải đồng nhất với chính nó', isCorrect: false },
          { content: 'Hai tư tưởng mâu thuẫn không thể cùng đúng', isCorrect: false },
          { content: 'Trong hai tư tưởng mâu thuẫn phải có một đúng', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật lý do đầy đủ yêu cầu:',
        answers: [
          { content: 'Phải chỉ ra được căn cứ xác thực cho tư tưởng được khẳng định', isCorrect: true },
          { content: 'Phải chứng minh bằng thực nghiệm', isCorrect: false },
          { content: 'Phải có sự đồng ý của đa số', isCorrect: false },
          { content: 'Phải dựa trên quyền uy', isCorrect: false },
        ],
      },
      {
        content: 'Vi phạm quy luật lý do đầy đủ thường gặp trong trường hợp nào?',
        answers: [
          { content: 'Khẳng định một điều mà không đưa ra căn cứ hoặc căn cứ không xác thực', isCorrect: true },
          { content: 'Sử dụng hai khái niệm khác nhau cho cùng một đối tượng', isCorrect: false },
          { content: 'Khẳng định và phủ định cùng một điều', isCorrect: false },
          { content: 'Không chọn được giữa hai phương án', isCorrect: false },
        ],
      },
      {
        content: '"Anh ta là người tốt vì anh ta nói anh ta là người tốt" vi phạm quy luật nào?',
        answers: [
          { content: 'Quy luật đồng nhất', isCorrect: false },
          { content: 'Quy luật phi mâu thuẫn', isCorrect: false },
          { content: 'Quy luật bài trung', isCorrect: false },
          { content: 'Quy luật lý do đầy đủ', isCorrect: true },
        ],
      },
      {
        content: '"Hôm nay trời vừa nóng vừa không nóng" (cùng thời điểm, cùng địa điểm) vi phạm quy luật nào?',
        answers: [
          { content: 'Quy luật đồng nhất', isCorrect: false },
          { content: 'Quy luật phi mâu thuẫn', isCorrect: true },
          { content: 'Quy luật bài trung', isCorrect: false },
          { content: 'Quy luật lý do đầy đủ', isCorrect: false },
        ],
      },
      {
        content: 'Trong tranh luận, một người dùng từ "tự do" với nghĩa khác nhau ở các lập luận khác nhau. Người đó vi phạm quy luật nào?',
        answers: [
          { content: 'Quy luật đồng nhất', isCorrect: true },
          { content: 'Quy luật phi mâu thuẫn', isCorrect: false },
          { content: 'Quy luật bài trung', isCorrect: false },
          { content: 'Quy luật lý do đầy đủ', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật đồng nhất KHÔNG yêu cầu:',
        answers: [
          { content: 'Tư tưởng không bao giờ thay đổi', isCorrect: true },
          { content: 'Trong một lập luận, khái niệm phải được dùng với cùng một nghĩa', isCorrect: false },
          { content: 'Không được đánh tráo luận đề', isCorrect: false },
          { content: 'Tư tưởng phải xác định và nhất quán trong quá trình lập luận', isCorrect: false },
        ],
      },
      {
        content: 'Hai phán đoán "Mọi sinh viên đều chăm chỉ" và "Có sinh viên không chăm chỉ" có quan hệ:',
        answers: [
          { content: 'Mâu thuẫn (theo hình vuông logic: A và O)', isCorrect: true },
          { content: 'Đối lập trên', isCorrect: false },
          { content: 'Đối lập dưới', isCorrect: false },
          { content: 'Lệ thuộc', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật phi mâu thuẫn có ý nghĩa thực tiễn:',
        answers: [
          { content: 'Đảm bảo tính nhất quán trong tư duy và lập luận', isCorrect: true },
          { content: 'Cho phép tồn tại nhiều quan điểm khác nhau', isCorrect: false },
          { content: 'Buộc phải chọn một trong hai phương án', isCorrect: false },
          { content: 'Yêu cầu mọi phán đoán phải có chứng minh', isCorrect: false },
        ],
      },
      {
        content: 'Khi nào quy luật bài trung KHÔNG áp dụng được?',
        answers: [
          { content: 'Khi hai phán đoán có quan hệ đối lập (không phải mâu thuẫn)', isCorrect: true },
          { content: 'Khi hai phán đoán có quan hệ mâu thuẫn', isCorrect: false },
          { content: 'Khi phán đoán là phán đoán đơn', isCorrect: false },
          { content: 'Khi phán đoán là phán đoán phức', isCorrect: false },
        ],
      },
      {
        content: '"Vì sao bạn cho rằng thuốc này tốt?" - "Vì bác sĩ nổi tiếng X nói vậy." Lập luận này:',
        answers: [
          { content: 'Hoàn toàn đúng logic', isCorrect: false },
          { content: 'Vi phạm quy luật lý do đầy đủ (viện dẫn quyền uy thay vì căn cứ khoa học)', isCorrect: true },
          { content: 'Vi phạm quy luật đồng nhất', isCorrect: false },
          { content: 'Vi phạm quy luật bài trung', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật logic hình thức có tính chất:',
        answers: [
          { content: 'Khách quan, phổ biến, tất yếu trong tư duy đúng đắn', isCorrect: true },
          { content: 'Chỉ áp dụng trong toán học', isCorrect: false },
          { content: 'Chỉ đúng trong một số nền văn hóa', isCorrect: false },
          { content: 'Có thể thay đổi theo thời gian', isCorrect: false },
        ],
      },
      {
        content: 'Bốn quy luật logic cơ bản có mối quan hệ:',
        answers: [
          { content: 'Bổ sung cho nhau, cùng đảm bảo tính đúng đắn của tư duy', isCorrect: true },
          { content: 'Độc lập hoàn toàn, không liên quan đến nhau', isCorrect: false },
          { content: 'Mâu thuẫn với nhau', isCorrect: false },
          { content: 'Chỉ cần tuân thủ một quy luật là đủ', isCorrect: false },
        ],
      },
      {
        content: '"Sinh viên A nói: Tôi luôn nói dối." Phát biểu này gặp vấn đề gì về logic?',
        answers: [
          { content: 'Vi phạm quy luật đồng nhất', isCorrect: false },
          { content: 'Đây là nghịch lý (paradox) liên quan đến tự quy chiếu, vi phạm quy luật phi mâu thuẫn', isCorrect: true },
          { content: 'Vi phạm quy luật lý do đầy đủ', isCorrect: false },
          { content: 'Không có vấn đề gì', isCorrect: false },
        ],
      },
      {
        content: 'Quy luật đồng nhất có ý nghĩa thực tiễn quan trọng nhất trong lĩnh vực nào?',
        answers: [
          { content: 'Trong tranh luận, lập luận và soạn thảo văn bản pháp luật', isCorrect: true },
          { content: 'Chỉ trong toán học', isCorrect: false },
          { content: 'Chỉ trong văn học', isCorrect: false },
          { content: 'Chỉ trong đời sống hàng ngày', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Chứng minh và bác bỏ - luận đề, luận cứ, luận chứng, ngụy biện
  // =============================================
  {
    categorySlug: 'trac-nghiem-dh-logic-hoc',
    title: 'Trắc nghiệm Logic học - Đề số 5',
    slug: 'trac-nghiem-dh-logic-hoc-de-5',
    description:
      'Chứng minh và bác bỏ: luận đề, luận cứ, luận chứng, ngụy biện.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Chứng minh trong logic học là:',
        answers: [
          { content: 'Thao tác logic xác lập tính chân thực của luận đề bằng các luận cứ và luận chứng', isCorrect: true },
          { content: 'Quá trình thí nghiệm khoa học', isCorrect: false },
          { content: 'Quá trình thu thập dữ liệu', isCorrect: false },
          { content: 'Quá trình đưa ra ý kiến cá nhân', isCorrect: false },
        ],
      },
      {
        content: 'Luận đề trong chứng minh là:',
        answers: [
          { content: 'Phán đoán cần được chứng minh tính chân thực', isCorrect: true },
          { content: 'Các phán đoán dùng làm căn cứ để chứng minh', isCorrect: false },
          { content: 'Cách thức liên kết luận cứ với luận đề', isCorrect: false },
          { content: 'Kết luận của suy luận', isCorrect: false },
        ],
      },
      {
        content: 'Luận cứ trong chứng minh là:',
        answers: [
          { content: 'Phán đoán cần được chứng minh', isCorrect: false },
          { content: 'Các phán đoán đã được xác nhận tính chân thực, dùng làm căn cứ chứng minh luận đề', isCorrect: true },
          { content: 'Hình thức suy luận dùng trong chứng minh', isCorrect: false },
          { content: 'Phương pháp bác bỏ', isCorrect: false },
        ],
      },
      {
        content: 'Luận chứng trong chứng minh là:',
        answers: [
          { content: 'Phán đoán cần chứng minh', isCorrect: false },
          { content: 'Các căn cứ dùng để chứng minh', isCorrect: false },
          { content: 'Cách thức logic liên kết luận cứ với luận đề (hình thức suy luận)', isCorrect: true },
          { content: 'Kết quả của chứng minh', isCorrect: false },
        ],
      },
      {
        content: 'Chứng minh trực tiếp là:',
        answers: [
          { content: 'Tính chân thực của luận đề được rút ra trực tiếp từ luận cứ', isCorrect: true },
          { content: 'Chứng minh bằng cách bác bỏ phản đề', isCorrect: false },
          { content: 'Chứng minh bằng phương pháp phản chứng', isCorrect: false },
          { content: 'Chứng minh bằng cách loại trừ', isCorrect: false },
        ],
      },
      {
        content: 'Chứng minh gián tiếp bằng phản chứng (reductio ad absurdum) là:',
        answers: [
          { content: 'Giả sử phản đề đúng, suy ra mâu thuẫn, từ đó kết luận luận đề đúng', isCorrect: true },
          { content: 'Chứng minh trực tiếp từ luận cứ', isCorrect: false },
          { content: 'Loại trừ tất cả các khả năng khác', isCorrect: false },
          { content: 'Dùng quyền uy để chứng minh', isCorrect: false },
        ],
      },
      {
        content: 'Chứng minh gián tiếp bằng phương pháp loại trừ là:',
        answers: [
          { content: 'Bác bỏ tất cả các khả năng khác, chỉ còn lại luận đề là đúng', isCorrect: true },
          { content: 'Giả sử phản đề đúng rồi suy ra mâu thuẫn', isCorrect: false },
          { content: 'Chứng minh trực tiếp từ luận cứ', isCorrect: false },
          { content: 'Dùng ví dụ để minh họa', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc "Luận đề phải rõ ràng, chính xác" nhằm tránh lỗi gì?',
        answers: [
          { content: 'Lỗi luận đề mơ hồ, không xác định', isCorrect: true },
          { content: 'Lỗi luận cứ sai', isCorrect: false },
          { content: 'Lỗi luận chứng không hợp logic', isCorrect: false },
          { content: 'Lỗi ngụy biện', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi "đánh tráo luận đề" xảy ra khi:',
        answers: [
          { content: 'Trong quá trình chứng minh, luận đề bị thay đổi so với ban đầu', isCorrect: true },
          { content: 'Luận cứ không đúng', isCorrect: false },
          { content: 'Luận chứng không hợp logic', isCorrect: false },
          { content: 'Sử dụng quá nhiều luận cứ', isCorrect: false },
        ],
      },
      {
        content: 'Quy tắc "Luận cứ phải là những phán đoán đã được chứng minh tính chân thực" nhằm tránh lỗi gì?',
        answers: [
          { content: 'Lỗi luận cứ không có cơ sở (luận cứ nêu ra chưa được chứng minh)', isCorrect: true },
          { content: 'Lỗi đánh tráo luận đề', isCorrect: false },
          { content: 'Lỗi luận chứng vòng quanh', isCorrect: false },
          { content: 'Lỗi ngụy biện cảm xúc', isCorrect: false },
        ],
      },
      {
        content: 'Lỗi "luận chứng vòng quanh" (circulus in demonstrando) là:',
        answers: [
          { content: 'Luận đề được dùng làm luận cứ để chứng minh chính nó', isCorrect: true },
          { content: 'Luận cứ mâu thuẫn với nhau', isCorrect: false },
          { content: 'Luận đề bị thay đổi trong quá trình chứng minh', isCorrect: false },
          { content: 'Sử dụng quá nhiều bước suy luận', isCorrect: false },
        ],
      },
      {
        content: 'Bác bỏ trong logic học là:',
        answers: [
          { content: 'Thao tác logic xác lập tính giả dối của luận đề', isCorrect: true },
          { content: 'Quá trình phản đối ý kiến người khác', isCorrect: false },
          { content: 'Quá trình đưa ra ý kiến trái ngược', isCorrect: false },
          { content: 'Quá trình thu thập bằng chứng', isCorrect: false },
        ],
      },
      {
        content: 'Bác bỏ luận đề có thể thực hiện bằng cách:',
        answers: [
          { content: 'Chỉ ra luận đề mâu thuẫn với sự thật đã biết hoặc dẫn đến hệ quả sai', isCorrect: true },
          { content: 'Chỉ trích cá nhân người đưa ra luận đề', isCorrect: false },
          { content: 'Phớt lờ luận đề', isCorrect: false },
          { content: 'Đưa ra luận đề khác', isCorrect: false },
        ],
      },
      {
        content: 'Bác bỏ luận cứ có nghĩa là:',
        answers: [
          { content: 'Chỉ ra rằng các luận cứ dùng để chứng minh luận đề là sai hoặc không đáng tin', isCorrect: true },
          { content: 'Chứng minh luận đề sai', isCorrect: false },
          { content: 'Đưa ra luận cứ mới', isCorrect: false },
          { content: 'Thay đổi luận đề', isCorrect: false },
        ],
      },
      {
        content: 'Bác bỏ luận chứng có nghĩa là:',
        answers: [
          { content: 'Chỉ ra rằng cách suy luận từ luận cứ đến luận đề không hợp logic', isCorrect: true },
          { content: 'Chỉ ra luận cứ sai', isCorrect: false },
          { content: 'Chỉ ra luận đề sai', isCorrect: false },
          { content: 'Đưa ra cách chứng minh khác', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "tấn công cá nhân" (ad hominem) là:',
        answers: [
          { content: 'Thay vì bác bỏ luận đề, lại tấn công vào cá nhân người đưa ra luận đề', isCorrect: true },
          { content: 'Dùng cảm xúc để thuyết phục', isCorrect: false },
          { content: 'Viện dẫn quyền uy', isCorrect: false },
          { content: 'Đánh tráo luận đề', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "viện dẫn quyền uy" (ad verecundiam) là:',
        answers: [
          { content: 'Dùng uy tín của người nổi tiếng thay cho luận cứ khoa học', isCorrect: true },
          { content: 'Tấn công cá nhân đối phương', isCorrect: false },
          { content: 'Dùng cảm xúc đám đông', isCorrect: false },
          { content: 'Đánh tráo khái niệm', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "viện dẫn đám đông" (ad populum) là:',
        answers: [
          { content: 'Cho rằng một điều đúng vì nhiều người tin như vậy', isCorrect: true },
          { content: 'Tấn công cá nhân', isCorrect: false },
          { content: 'Viện dẫn quyền uy', isCorrect: false },
          { content: 'Luận chứng vòng quanh', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "người rơm" (straw man) là:',
        answers: [
          { content: 'Bóp méo luận đề của đối phương rồi bác bỏ luận đề đã bị bóp méo', isCorrect: true },
          { content: 'Tấn công cá nhân đối phương', isCorrect: false },
          { content: 'Viện dẫn cảm xúc', isCorrect: false },
          { content: 'Luận chứng vòng quanh', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "dốc trượt" (slippery slope) là:',
        answers: [
          { content: 'Cho rằng một hành động nhỏ sẽ dẫn đến chuỗi hệ quả tiêu cực nghiêm trọng mà không có căn cứ', isCorrect: true },
          { content: 'Bóp méo luận đề đối phương', isCorrect: false },
          { content: 'Tấn công cá nhân', isCorrect: false },
          { content: 'Viện dẫn quyền uy', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "khái quát vội vàng" (hasty generalization) là:',
        answers: [
          { content: 'Rút ra kết luận chung từ quá ít trường hợp riêng lẻ', isCorrect: true },
          { content: 'Dùng quyền uy thay cho luận cứ', isCorrect: false },
          { content: 'Tấn công cá nhân', isCorrect: false },
          { content: 'Đánh tráo luận đề', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "sau cái đó, vì cái đó" (post hoc ergo propter hoc) là:',
        answers: [
          { content: 'Cho rằng sự kiện xảy ra trước là nguyên nhân của sự kiện xảy ra sau chỉ vì thứ tự thời gian', isCorrect: true },
          { content: 'Khái quát vội vàng', isCorrect: false },
          { content: 'Viện dẫn đám đông', isCorrect: false },
          { content: 'Luận chứng vòng quanh', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "lưỡng nan giả tạo" (false dilemma) là:',
        answers: [
          { content: 'Đưa ra chỉ hai lựa chọn trong khi thực tế có nhiều lựa chọn hơn', isCorrect: true },
          { content: 'Cho rằng sự kiện trước là nguyên nhân sự kiện sau', isCorrect: false },
          { content: 'Khái quát từ quá ít trường hợp', isCorrect: false },
          { content: 'Bóp méo luận đề đối phương', isCorrect: false },
        ],
      },
      {
        content: 'Ngụy biện "viện dẫn sự thương hại" (ad misericordiam) là:',
        answers: [
          { content: 'Dùng cảm xúc thương hại thay cho luận cứ logic để thuyết phục', isCorrect: true },
          { content: 'Tấn công cá nhân đối phương', isCorrect: false },
          { content: 'Viện dẫn quyền uy', isCorrect: false },
          { content: 'Đánh tráo luận đề', isCorrect: false },
        ],
      },
      {
        content: 'Khi bác bỏ luận cứ của đối phương, điều đó có nghĩa:',
        answers: [
          { content: 'Luận đề của đối phương chưa chắc sai, chỉ là chưa được chứng minh đúng', isCorrect: true },
          { content: 'Luận đề của đối phương chắc chắn sai', isCorrect: false },
          { content: 'Luận đề của mình chắc chắn đúng', isCorrect: false },
          { content: 'Cuộc tranh luận kết thúc', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
