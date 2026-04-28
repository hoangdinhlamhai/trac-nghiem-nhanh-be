import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Địa lý tự nhiên VN
  // =============================================
  {
    categorySlug: 'on-thi-thpt-dia-ly',
    title: 'Đề ôn thi THPT QG 2025 - Địa Lý - Đề số 1',
    slug: 'on-thi-thpt-dia-ly-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Địa Lý - Đề số 1. Địa lý tự nhiên Việt Nam: vị trí, địa hình, khí hậu, sông ngòi, đất, sinh vật.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Phần đất liền của Việt Nam nằm trong khoảng vĩ độ nào?',
        answers: [
          { content: 'Từ 8°34\'B đến 23°23\'B', isCorrect: true },
          { content: 'Từ 10°B đến 25°B', isCorrect: false },
          { content: 'Từ 5°B đến 20°B', isCorrect: false },
          { content: 'Từ 8°B đến 22°B', isCorrect: false },
        ],
      },
      {
        content: 'Điểm cực Bắc phần đất liền Việt Nam thuộc tỉnh nào?',
        answers: [
          { content: 'Lào Cai', isCorrect: false },
          { content: 'Hà Giang', isCorrect: true },
          { content: 'Cao Bằng', isCorrect: false },
          { content: 'Lai Châu', isCorrect: false },
        ],
      },
      {
        content: 'Đường bờ biển Việt Nam dài khoảng bao nhiêu km?',
        answers: [
          { content: 'Khoảng 2.500 km', isCorrect: false },
          { content: 'Khoảng 3.260 km', isCorrect: true },
          { content: 'Khoảng 4.000 km', isCorrect: false },
          { content: 'Khoảng 5.000 km', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam có đường biên giới trên đất liền chung với những quốc gia nào?',
        answers: [
          { content: 'Trung Quốc, Lào, Thái Lan', isCorrect: false },
          { content: 'Trung Quốc, Lào, Cam-pu-chia', isCorrect: true },
          { content: 'Trung Quốc, Mi-an-ma, Lào', isCorrect: false },
          { content: 'Lào, Cam-pu-chia, Thái Lan', isCorrect: false },
        ],
      },
      {
        content: 'Địa hình Việt Nam có đặc điểm nổi bật nào?',
        answers: [
          { content: 'Đồi núi chiếm 3/4 diện tích, chủ yếu là đồi núi thấp', isCorrect: true },
          { content: 'Đồng bằng chiếm phần lớn diện tích', isCorrect: false },
          { content: 'Chủ yếu là núi cao trên 2.000 m', isCorrect: false },
          { content: 'Địa hình bằng phẳng', isCorrect: false },
        ],
      },
      {
        content: 'Đỉnh núi cao nhất Việt Nam là đỉnh nào?',
        answers: [
          { content: 'Phu Luông', isCorrect: false },
          { content: 'Fansipan (3.143 m)', isCorrect: true },
          { content: 'Ngọc Linh', isCorrect: false },
          { content: 'Tây Côn Lĩnh', isCorrect: false },
        ],
      },
      {
        content: 'Dãy Trường Sơn chạy theo hướng nào?',
        answers: [
          { content: 'Đông - Tây', isCorrect: false },
          { content: 'Tây Bắc - Đông Nam', isCorrect: true },
          { content: 'Bắc - Nam', isCorrect: false },
          { content: 'Đông Bắc - Tây Nam', isCorrect: false },
        ],
      },
      {
        content: 'Đồng bằng sông Hồng có diện tích khoảng bao nhiêu km²?',
        answers: [
          { content: 'Khoảng 10.000 km²', isCorrect: false },
          { content: 'Khoảng 15.000 km²', isCorrect: true },
          { content: 'Khoảng 20.000 km²', isCorrect: false },
          { content: 'Khoảng 40.000 km²', isCorrect: false },
        ],
      },
      {
        content: 'Đồng bằng sông Cửu Long có diện tích khoảng bao nhiêu km²?',
        answers: [
          { content: 'Khoảng 15.000 km²', isCorrect: false },
          { content: 'Khoảng 25.000 km²', isCorrect: false },
          { content: 'Khoảng 40.000 km²', isCorrect: true },
          { content: 'Khoảng 50.000 km²', isCorrect: false },
        ],
      },
      {
        content: 'Khí hậu Việt Nam mang tính chất gì?',
        answers: [
          { content: 'Nhiệt đới ẩm gió mùa', isCorrect: true },
          { content: 'Ôn đới hải dương', isCorrect: false },
          { content: 'Xích đạo', isCorrect: false },
          { content: 'Cận nhiệt đới khô', isCorrect: false },
        ],
      },
      {
        content: 'Gió mùa Đông Bắc ảnh hưởng đến miền Bắc Việt Nam vào mùa nào?',
        answers: [
          { content: 'Mùa hạ', isCorrect: false },
          { content: 'Mùa đông', isCorrect: true },
          { content: 'Mùa xuân', isCorrect: false },
          { content: 'Mùa thu', isCorrect: false },
        ],
      },
      {
        content: 'Ranh giới khí hậu giữa miền Bắc và miền Nam Việt Nam thường được xác định tại đâu?',
        answers: [
          { content: 'Đèo Ngang (dãy Hoành Sơn)', isCorrect: false },
          { content: 'Dãy Bạch Mã (vĩ tuyến 16°B)', isCorrect: true },
          { content: 'Đèo Hải Vân', isCorrect: false },
          { content: 'Sông Bến Hải', isCorrect: false },
        ],
      },
      {
        content: 'Sông nào dài nhất chảy trên lãnh thổ Việt Nam?',
        answers: [
          { content: 'Sông Hồng', isCorrect: false },
          { content: 'Sông Mê Công (Cửu Long)', isCorrect: true },
          { content: 'Sông Đà', isCorrect: false },
          { content: 'Sông Đồng Nai', isCorrect: false },
        ],
      },
      {
        content: 'Sông Hồng bắt nguồn từ đâu?',
        answers: [
          { content: 'Tây Tạng (Trung Quốc)', isCorrect: false },
          { content: 'Vân Nam (Trung Quốc)', isCorrect: true },
          { content: 'Lào', isCorrect: false },
          { content: 'Tây Bắc Việt Nam', isCorrect: false },
        ],
      },
      {
        content: 'Loại đất chiếm diện tích lớn nhất ở Việt Nam là gì?',
        answers: [
          { content: 'Đất phù sa', isCorrect: false },
          { content: 'Đất feralit (đất đỏ vàng)', isCorrect: true },
          { content: 'Đất mặn', isCorrect: false },
          { content: 'Đất phèn', isCorrect: false },
        ],
      },
      {
        content: 'Đất ba-dan (đất đỏ trên đá ba-dan) phân bố chủ yếu ở vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Tây Nguyên và Đông Nam Bộ', isCorrect: true },
          { content: 'Duyên hải miền Trung', isCorrect: false },
          { content: 'Tây Bắc', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam nằm trong vành đai sinh vật nào?',
        answers: [
          { content: 'Vành đai ôn đới', isCorrect: false },
          { content: 'Vành đai nhiệt đới', isCorrect: true },
          { content: 'Vành đai cận cực', isCorrect: false },
          { content: 'Vành đai cận nhiệt đới', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng thời tiết nào thường gây thiệt hại lớn cho miền Trung Việt Nam?',
        answers: [
          { content: 'Sương muối', isCorrect: false },
          { content: 'Bão và lũ lụt', isCorrect: true },
          { content: 'Hạn hán kéo dài', isCorrect: false },
          { content: 'Động đất', isCorrect: false },
        ],
      },
      {
        content: 'Vùng biển Việt Nam thuộc biển nào?',
        answers: [
          { content: 'Biển Hoa Đông', isCorrect: false },
          { content: 'Biển Đông (Biển Nam Trung Hoa)', isCorrect: true },
          { content: 'Biển Ấn Độ Dương', isCorrect: false },
          { content: 'Biển Thái Bình Dương', isCorrect: false },
        ],
      },
      {
        content: 'Quần đảo Hoàng Sa thuộc chủ quyền của Việt Nam nằm ở vùng biển nào?',
        answers: [
          { content: 'Vịnh Bắc Bộ', isCorrect: false },
          { content: 'Biển Đông', isCorrect: true },
          { content: 'Vịnh Thái Lan', isCorrect: false },
          { content: 'Eo biển Ma-lắc-ca', isCorrect: false },
        ],
      },
      {
        content: 'Hiện tượng phơn (gió Lào) thường xảy ra ở vùng nào của Việt Nam?',
        answers: [
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: true },
          { content: 'Đông Bắc', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Lượng mưa trung bình năm của Việt Nam khoảng bao nhiêu mm?',
        answers: [
          { content: '500 - 1.000 mm', isCorrect: false },
          { content: '1.500 - 2.000 mm', isCorrect: true },
          { content: '2.500 - 3.000 mm', isCorrect: false },
          { content: '3.500 - 4.000 mm', isCorrect: false },
        ],
      },
      {
        content: 'Cao nguyên nào ở Tây Nguyên có độ cao lớn nhất?',
        answers: [
          { content: 'Cao nguyên Đắk Lắk', isCorrect: false },
          { content: 'Cao nguyên Lâm Viên', isCorrect: true },
          { content: 'Cao nguyên Kon Tum', isCorrect: false },
          { content: 'Cao nguyên Di Linh', isCorrect: false },
        ],
      },
      {
        content: 'Sông Đồng Nai là sông nội địa dài nhất Việt Nam, bắt nguồn từ đâu?',
        answers: [
          { content: 'Cao nguyên Lâm Viên (Lâm Đồng)', isCorrect: true },
          { content: 'Tây Nguyên (Đắk Lắk)', isCorrect: false },
          { content: 'Đông Nam Bộ (Bình Phước)', isCorrect: false },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam có bao nhiêu tỉnh và thành phố trực thuộc Trung ương?',
        answers: [
          { content: '58 tỉnh và 5 thành phố', isCorrect: true },
          { content: '60 tỉnh và 3 thành phố', isCorrect: false },
          { content: '55 tỉnh và 5 thành phố', isCorrect: false },
          { content: '63 tỉnh và 5 thành phố', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Địa lý dân cư VN
  // =============================================
  {
    categorySlug: 'on-thi-thpt-dia-ly',
    title: 'Đề ôn thi THPT QG 2025 - Địa Lý - Đề số 2',
    slug: 'on-thi-thpt-dia-ly-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Địa Lý - Đề số 2. Địa lý dân cư Việt Nam: dân số, lao động, đô thị hóa, phân bố dân cư.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Dân số Việt Nam đông thứ mấy trong khu vực Đông Nam Á?',
        answers: [
          { content: 'Thứ nhất', isCorrect: false },
          { content: 'Thứ hai', isCorrect: false },
          { content: 'Thứ ba', isCorrect: true },
          { content: 'Thứ tư', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm nổi bật nhất của dân số Việt Nam là gì?',
        answers: [
          { content: 'Dân số đông, tăng nhanh, cơ cấu dân số trẻ', isCorrect: true },
          { content: 'Dân số ít, tăng chậm', isCorrect: false },
          { content: 'Dân số già hóa nhanh', isCorrect: false },
          { content: 'Dân số phân bố đều', isCorrect: false },
        ],
      },
      {
        content: 'Mật độ dân số trung bình của Việt Nam thuộc loại nào so với thế giới?',
        answers: [
          { content: 'Thấp', isCorrect: false },
          { content: 'Trung bình', isCorrect: false },
          { content: 'Cao', isCorrect: true },
          { content: 'Rất thấp', isCorrect: false },
        ],
      },
      {
        content: 'Vùng nào có mật độ dân số cao nhất Việt Nam?',
        answers: [
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Đồng bằng sông Hồng', isCorrect: true },
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Vùng nào có mật độ dân số thấp nhất Việt Nam?',
        answers: [
          { content: 'Tây Bắc', isCorrect: true },
          { content: 'Đông Bắc', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam có bao nhiêu dân tộc?',
        answers: [
          { content: '45 dân tộc', isCorrect: false },
          { content: '54 dân tộc', isCorrect: true },
          { content: '60 dân tộc', isCorrect: false },
          { content: '50 dân tộc', isCorrect: false },
        ],
      },
      {
        content: 'Dân tộc Kinh chiếm khoảng bao nhiêu phần trăm dân số Việt Nam?',
        answers: [
          { content: 'Khoảng 75%', isCorrect: false },
          { content: 'Khoảng 86%', isCorrect: true },
          { content: 'Khoảng 90%', isCorrect: false },
          { content: 'Khoảng 70%', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ lệ dân thành thị của Việt Nam có xu hướng như thế nào?',
        answers: [
          { content: 'Giảm dần', isCorrect: false },
          { content: 'Tăng dần nhưng vẫn thấp hơn tỉ lệ dân nông thôn', isCorrect: true },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Cao hơn tỉ lệ dân nông thôn', isCorrect: false },
        ],
      },
      {
        content: 'Thành phố nào có dân số đông nhất Việt Nam?',
        answers: [
          { content: 'Hà Nội', isCorrect: false },
          { content: 'Thành phố Hồ Chí Minh', isCorrect: true },
          { content: 'Đà Nẵng', isCorrect: false },
          { content: 'Hải Phòng', isCorrect: false },
        ],
      },
      {
        content: 'Nguồn lao động dồi dào của Việt Nam có thuận lợi gì?',
        answers: [
          { content: 'Thu hút đầu tư nước ngoài, phát triển các ngành cần nhiều lao động', isCorrect: true },
          { content: 'Gây áp lực lên việc làm và xã hội', isCorrect: false },
          { content: 'Không có ý nghĩa kinh tế', isCorrect: false },
          { content: 'Chỉ phát triển nông nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Cơ cấu lao động theo ngành kinh tế ở Việt Nam đang chuyển dịch theo hướng nào?',
        answers: [
          { content: 'Tăng tỉ trọng nông nghiệp', isCorrect: false },
          { content: 'Giảm tỉ trọng nông - lâm - ngư nghiệp, tăng tỉ trọng công nghiệp và dịch vụ', isCorrect: true },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Tăng tỉ trọng khai khoáng', isCorrect: false },
        ],
      },
      {
        content: 'Đô thị hóa ở Việt Nam có đặc điểm gì?',
        answers: [
          { content: 'Trình độ đô thị hóa cao', isCorrect: false },
          { content: 'Trình độ đô thị hóa còn thấp, tốc độ đô thị hóa đang tăng', isCorrect: true },
          { content: 'Đô thị hóa đã hoàn thành', isCorrect: false },
          { content: 'Không có quá trình đô thị hóa', isCorrect: false },
        ],
      },
      {
        content: 'Gia tăng dân số nhanh gây ra hậu quả gì?',
        answers: [
          { content: 'Gây sức ép lên tài nguyên, môi trường, việc làm, giáo dục, y tế', isCorrect: true },
          { content: 'Không có hậu quả', isCorrect: false },
          { content: 'Chỉ ảnh hưởng đến kinh tế', isCorrect: false },
          { content: 'Tăng thu nhập bình quân đầu người', isCorrect: false },
        ],
      },
      {
        content: 'Dân cư Việt Nam phân bố không đều thể hiện ở đặc điểm nào?',
        answers: [
          { content: 'Tập trung đông ở đồng bằng, ven biển; thưa thớt ở miền núi, cao nguyên', isCorrect: true },
          { content: 'Phân bố đều giữa các vùng', isCorrect: false },
          { content: 'Tập trung đông ở miền núi', isCorrect: false },
          { content: 'Tập trung đông ở Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Chính sách dân số và kế hoạch hóa gia đình ở Việt Nam nhằm mục đích gì?',
        answers: [
          { content: 'Tăng dân số nhanh', isCorrect: false },
          { content: 'Giảm tỉ lệ gia tăng dân số, nâng cao chất lượng cuộc sống', isCorrect: true },
          { content: 'Di dân ra nước ngoài', isCorrect: false },
          { content: 'Tập trung dân cư vào thành phố', isCorrect: false },
        ],
      },
      {
        content: 'Lao động nữ chiếm khoảng bao nhiêu phần trăm lực lượng lao động Việt Nam?',
        answers: [
          { content: 'Khoảng 40%', isCorrect: false },
          { content: 'Khoảng 48%', isCorrect: true },
          { content: 'Khoảng 55%', isCorrect: false },
          { content: 'Khoảng 35%', isCorrect: false },
        ],
      },
      {
        content: 'Thách thức lớn nhất về lao động ở Việt Nam hiện nay là gì?',
        answers: [
          { content: 'Thiếu lao động', isCorrect: false },
          { content: 'Chất lượng lao động chưa cao, tỉ lệ lao động qua đào tạo còn thấp', isCorrect: true },
          { content: 'Lao động già hóa', isCorrect: false },
          { content: 'Lao động không muốn làm việc', isCorrect: false },
        ],
      },
      {
        content: 'Đô thị loại đặc biệt ở Việt Nam gồm những thành phố nào?',
        answers: [
          { content: 'Hà Nội, Đà Nẵng', isCorrect: false },
          { content: 'Hà Nội, Thành phố Hồ Chí Minh', isCorrect: true },
          { content: 'Hà Nội, Hải Phòng', isCorrect: false },
          { content: 'Thành phố Hồ Chí Minh, Cần Thơ', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ số giới tính khi sinh ở Việt Nam có xu hướng nào đáng lo ngại?',
        answers: [
          { content: 'Cân bằng hoàn toàn', isCorrect: false },
          { content: 'Mất cân bằng, tỉ số nam/nữ khi sinh cao hơn mức bình thường', isCorrect: true },
          { content: 'Nữ nhiều hơn nam', isCorrect: false },
          { content: 'Không có vấn đề gì', isCorrect: false },
        ],
      },
      {
        content: 'Vùng Đông Nam Bộ thu hút nhiều lao động nhập cư nhờ yếu tố nào?',
        answers: [
          { content: 'Khí hậu mát mẻ', isCorrect: false },
          { content: 'Kinh tế phát triển năng động, nhiều khu công nghiệp, cơ hội việc làm', isCorrect: true },
          { content: 'Diện tích đất nông nghiệp rộng', isCorrect: false },
          { content: 'Dân số ít', isCorrect: false },
        ],
      },
      {
        content: 'Cơ cấu dân số theo độ tuổi của Việt Nam đang chuyển biến theo hướng nào?',
        answers: [
          { content: 'Trẻ hóa dân số', isCorrect: false },
          { content: 'Già hóa dân số, tỉ lệ người cao tuổi tăng', isCorrect: true },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Tỉ lệ trẻ em tăng nhanh', isCorrect: false },
        ],
      },
      {
        content: 'Dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở vùng nào?',
        answers: [
          { content: 'Đồng bằng ven biển', isCorrect: false },
          { content: 'Miền núi và trung du', isCorrect: true },
          { content: 'Các thành phố lớn', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
        ],
      },
      {
        content: 'Tỉ lệ thất nghiệp ở Việt Nam thường cao hơn ở khu vực nào?',
        answers: [
          { content: 'Nông thôn', isCorrect: false },
          { content: 'Thành thị', isCorrect: true },
          { content: 'Miền núi', isCorrect: false },
          { content: 'Hải đảo', isCorrect: false },
        ],
      },
      {
        content: 'Năng suất lao động của Việt Nam so với các nước trong khu vực ASEAN ở mức nào?',
        answers: [
          { content: 'Cao nhất khu vực', isCorrect: false },
          { content: 'Còn thấp so với nhiều nước trong khu vực', isCorrect: true },
          { content: 'Ngang bằng Thái Lan', isCorrect: false },
          { content: 'Cao hơn Singapore', isCorrect: false },
        ],
      },
      {
        content: 'Tuổi thọ trung bình của người Việt Nam hiện nay khoảng bao nhiêu?',
        answers: [
          { content: 'Khoảng 65 tuổi', isCorrect: false },
          { content: 'Khoảng 73-74 tuổi', isCorrect: true },
          { content: 'Khoảng 80 tuổi', isCorrect: false },
          { content: 'Khoảng 60 tuổi', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Địa lý kinh tế VN - Nông nghiệp, lâm nghiệp, thủy sản
  // =============================================
  {
    categorySlug: 'on-thi-thpt-dia-ly',
    title: 'Đề ôn thi THPT QG 2025 - Địa Lý - Đề số 3',
    slug: 'on-thi-thpt-dia-ly-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Địa Lý - Đề số 3. Địa lý kinh tế Việt Nam: nông nghiệp, lâm nghiệp, thủy sản.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Cây lương thực chính của Việt Nam là cây gì?',
        answers: [
          { content: 'Ngô', isCorrect: false },
          { content: 'Lúa', isCorrect: true },
          { content: 'Sắn', isCorrect: false },
          { content: 'Khoai lang', isCorrect: false },
        ],
      },
      {
        content: 'Vùng trồng lúa lớn nhất Việt Nam là vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: true },
          { content: 'Duyên hải miền Trung', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Cây cà phê được trồng nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: true },
          { content: 'Bắc Trung Bộ', isCorrect: false },
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
        ],
      },
      {
        content: 'Tỉnh nào có diện tích trồng cà phê lớn nhất Việt Nam?',
        answers: [
          { content: 'Gia Lai', isCorrect: false },
          { content: 'Đắk Lắk', isCorrect: true },
          { content: 'Lâm Đồng', isCorrect: false },
          { content: 'Kon Tum', isCorrect: false },
        ],
      },
      {
        content: 'Cây cao su được trồng nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: true },
          { content: 'Bắc Trung Bộ', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
        ],
      },
      {
        content: 'Cây chè được trồng chủ yếu ở vùng nào?',
        answers: [
          { content: 'Trung du và miền núi Bắc Bộ', isCorrect: true },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam là nước xuất khẩu gạo đứng thứ mấy trên thế giới?',
        answers: [
          { content: 'Thứ nhất', isCorrect: false },
          { content: 'Thứ hai hoặc thứ ba', isCorrect: true },
          { content: 'Thứ năm', isCorrect: false },
          { content: 'Thứ mười', isCorrect: false },
        ],
      },
      {
        content: 'Ngành chăn nuôi ở Việt Nam có đặc điểm gì?',
        answers: [
          { content: 'Chăn nuôi quy mô lớn, công nghiệp hóa hoàn toàn', isCorrect: false },
          { content: 'Đang chuyển từ chăn nuôi nhỏ lẻ sang chăn nuôi tập trung, quy mô lớn', isCorrect: true },
          { content: 'Không phát triển', isCorrect: false },
          { content: 'Chỉ chăn nuôi gia cầm', isCorrect: false },
        ],
      },
      {
        content: 'Vùng nuôi trồng thủy sản lớn nhất Việt Nam là vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: true },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Cá tra và cá ba sa được nuôi nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: true },
          { content: 'Duyên hải miền Trung', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Ngành đánh bắt thủy sản xa bờ phát triển mạnh ở vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Duyên hải Nam Trung Bộ và Nam Bộ', isCorrect: true },
          { content: 'Bắc Trung Bộ', isCorrect: false },
          { content: 'Đông Bắc', isCorrect: false },
        ],
      },
      {
        content: 'Diện tích rừng Việt Nam đang có xu hướng như thế nào?',
        answers: [
          { content: 'Giảm liên tục', isCorrect: false },
          { content: 'Tăng trở lại nhờ trồng rừng, nhưng chất lượng rừng còn thấp', isCorrect: true },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Tăng cả diện tích và chất lượng', isCorrect: false },
        ],
      },
      {
        content: 'Cây hồ tiêu được trồng nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Tây Nguyên và Đông Nam Bộ', isCorrect: true },
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Cây điều (đào lộn hột) được trồng nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: true },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam là nước xuất khẩu cà phê đứng thứ mấy trên thế giới?',
        answers: [
          { content: 'Thứ nhất', isCorrect: false },
          { content: 'Thứ hai', isCorrect: true },
          { content: 'Thứ ba', isCorrect: false },
          { content: 'Thứ năm', isCorrect: false },
        ],
      },
      {
        content: 'Đồng bằng sông Cửu Long chiếm khoảng bao nhiêu phần trăm sản lượng lúa cả nước?',
        answers: [
          { content: 'Khoảng 30%', isCorrect: false },
          { content: 'Khoảng 50%', isCorrect: true },
          { content: 'Khoảng 70%', isCorrect: false },
          { content: 'Khoảng 80%', isCorrect: false },
        ],
      },
      {
        content: 'Tôm là mặt hàng thủy sản xuất khẩu chủ lực của Việt Nam, được nuôi nhiều nhất ở đâu?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: true },
          { content: 'Bắc Trung Bộ', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Rừng ngập mặn ở Việt Nam phân bố chủ yếu ở đâu?',
        answers: [
          { content: 'Ven biển Đồng bằng sông Cửu Long và Đông Nam Bộ', isCorrect: true },
          { content: 'Ven biển Bắc Trung Bộ', isCorrect: false },
          { content: 'Ven biển Đông Bắc', isCorrect: false },
          { content: 'Ven biển Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Cây dừa được trồng nhiều nhất ở tỉnh nào?',
        answers: [
          { content: 'Trà Vinh', isCorrect: false },
          { content: 'Bến Tre', isCorrect: true },
          { content: 'Tiền Giang', isCorrect: false },
          { content: 'Vĩnh Long', isCorrect: false },
        ],
      },
      {
        content: 'Vùng chuyên canh cây ăn quả lớn nhất cả nước là vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long và Đông Nam Bộ', isCorrect: true },
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Trâu được nuôi nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Trung du và miền núi Bắc Bộ', isCorrect: true },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Lợn được nuôi nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Đồng bằng sông Hồng và Trung du miền núi Bắc Bộ', isCorrect: true },
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Ngành lâm nghiệp Việt Nam có vai trò gì?',
        answers: [
          { content: 'Chỉ khai thác gỗ', isCorrect: false },
          { content: 'Bảo vệ môi trường sinh thái, cung cấp nguyên liệu, tạo việc làm cho đồng bào miền núi', isCorrect: true },
          { content: 'Không có vai trò kinh tế', isCorrect: false },
          { content: 'Chỉ phục vụ du lịch', isCorrect: false },
        ],
      },
      {
        content: 'Độ che phủ rừng của Việt Nam hiện nay khoảng bao nhiêu phần trăm?',
        answers: [
          { content: 'Khoảng 25%', isCorrect: false },
          { content: 'Khoảng 42%', isCorrect: true },
          { content: 'Khoảng 55%', isCorrect: false },
          { content: 'Khoảng 60%', isCorrect: false },
        ],
      },
      {
        content: 'Cây mía được trồng nhiều nhất ở vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long, Duyên hải miền Trung và Đông Nam Bộ', isCorrect: true },
          { content: 'Tây Bắc', isCorrect: false },
          { content: 'Đông Bắc', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Địa lý kinh tế VN - Công nghiệp, GTVT, thương mại, du lịch
  // =============================================
  {
    categorySlug: 'on-thi-thpt-dia-ly',
    title: 'Đề ôn thi THPT QG 2025 - Địa Lý - Đề số 4',
    slug: 'on-thi-thpt-dia-ly-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Địa Lý - Đề số 4. Địa lý kinh tế Việt Nam: công nghiệp, giao thông vận tải, thương mại, du lịch.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Vùng có giá trị sản xuất công nghiệp lớn nhất Việt Nam là vùng nào?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: true },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
        ],
      },
      {
        content: 'Trung tâm công nghiệp lớn nhất cả nước là thành phố nào?',
        answers: [
          { content: 'Hà Nội', isCorrect: false },
          { content: 'Thành phố Hồ Chí Minh', isCorrect: true },
          { content: 'Đà Nẵng', isCorrect: false },
          { content: 'Hải Phòng', isCorrect: false },
        ],
      },
      {
        content: 'Ngành công nghiệp khai thác dầu khí tập trung chủ yếu ở đâu?',
        answers: [
          { content: 'Vịnh Bắc Bộ', isCorrect: false },
          { content: 'Thềm lục địa phía Nam (bể Cửu Long, bể Nam Côn Sơn)', isCorrect: true },
          { content: 'Biển Đông', isCorrect: false },
          { content: 'Vịnh Thái Lan', isCorrect: false },
        ],
      },
      {
        content: 'Nhà máy thủy điện lớn nhất Việt Nam hiện nay là nhà máy nào?',
        answers: [
          { content: 'Thủy điện Hòa Bình', isCorrect: false },
          { content: 'Thủy điện Sơn La', isCorrect: true },
          { content: 'Thủy điện Trị An', isCorrect: false },
          { content: 'Thủy điện Yaly', isCorrect: false },
        ],
      },
      {
        content: 'Khu vực nào tập trung nhiều khu công nghiệp, khu chế xuất nhất cả nước?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: true },
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Ngành công nghiệp dệt may của Việt Nam có đặc điểm gì?',
        answers: [
          { content: 'Sử dụng hoàn toàn nguyên liệu trong nước', isCorrect: false },
          { content: 'Là ngành xuất khẩu chủ lực, sử dụng nhiều lao động, phần lớn nguyên liệu nhập khẩu', isCorrect: true },
          { content: 'Chỉ phục vụ thị trường nội địa', isCorrect: false },
          { content: 'Không phát triển', isCorrect: false },
        ],
      },
      {
        content: 'Than đá ở Việt Nam được khai thác chủ yếu ở đâu?',
        answers: [
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Quảng Ninh', isCorrect: true },
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Thanh Hóa', isCorrect: false },
        ],
      },
      {
        content: 'Quốc lộ 1A (đường Quốc lộ 1) chạy từ đâu đến đâu?',
        answers: [
          { content: 'Hà Nội đến Thành phố Hồ Chí Minh', isCorrect: false },
          { content: 'Lạng Sơn (cửa khẩu Hữu Nghị) đến Cà Mau', isCorrect: true },
          { content: 'Hà Nội đến Đà Nẵng', isCorrect: false },
          { content: 'Hải Phòng đến Cần Thơ', isCorrect: false },
        ],
      },
      {
        content: 'Đường sắt Thống Nhất (Bắc - Nam) dài khoảng bao nhiêu km?',
        answers: [
          { content: 'Khoảng 1.200 km', isCorrect: false },
          { content: 'Khoảng 1.726 km', isCorrect: true },
          { content: 'Khoảng 2.000 km', isCorrect: false },
          { content: 'Khoảng 2.500 km', isCorrect: false },
        ],
      },
      {
        content: 'Cảng biển lớn nhất miền Bắc Việt Nam là cảng nào?',
        answers: [
          { content: 'Cảng Đà Nẵng', isCorrect: false },
          { content: 'Cảng Hải Phòng', isCorrect: true },
          { content: 'Cảng Cái Lân', isCorrect: false },
          { content: 'Cảng Quy Nhơn', isCorrect: false },
        ],
      },
      {
        content: 'Sân bay quốc tế lớn nhất Việt Nam hiện nay là sân bay nào?',
        answers: [
          { content: 'Nội Bài (Hà Nội)', isCorrect: false },
          { content: 'Tân Sơn Nhất (TP. Hồ Chí Minh)', isCorrect: true },
          { content: 'Đà Nẵng', isCorrect: false },
          { content: 'Cam Ranh', isCorrect: false },
        ],
      },
      {
        content: 'Ngành du lịch Việt Nam có thế mạnh gì?',
        answers: [
          { content: 'Tài nguyên du lịch tự nhiên và nhân văn phong phú, đa dạng', isCorrect: true },
          { content: 'Chỉ có du lịch biển', isCorrect: false },
          { content: 'Không có tiềm năng du lịch', isCorrect: false },
          { content: 'Chỉ có du lịch văn hóa', isCorrect: false },
        ],
      },
      {
        content: 'Di sản thiên nhiên thế giới Vịnh Hạ Long thuộc tỉnh nào?',
        answers: [
          { content: 'Hải Phòng', isCorrect: false },
          { content: 'Quảng Ninh', isCorrect: true },
          { content: 'Ninh Bình', isCorrect: false },
          { content: 'Thanh Hóa', isCorrect: false },
        ],
      },
      {
        content: 'Cơ cấu kinh tế Việt Nam đang chuyển dịch theo hướng nào?',
        answers: [
          { content: 'Tăng tỉ trọng nông nghiệp', isCorrect: false },
          { content: 'Tăng tỉ trọng công nghiệp - xây dựng và dịch vụ, giảm tỉ trọng nông - lâm - thủy sản', isCorrect: true },
          { content: 'Không thay đổi', isCorrect: false },
          { content: 'Giảm tỉ trọng dịch vụ', isCorrect: false },
        ],
      },
      {
        content: 'Đối tác thương mại lớn nhất của Việt Nam hiện nay là nước nào?',
        answers: [
          { content: 'Mỹ', isCorrect: false },
          { content: 'Trung Quốc', isCorrect: true },
          { content: 'Nhật Bản', isCorrect: false },
          { content: 'Hàn Quốc', isCorrect: false },
        ],
      },
      {
        content: 'Ngành công nghiệp chế biến lương thực, thực phẩm phát triển mạnh nhất ở vùng nào?',
        answers: [
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Đông Nam Bộ và Đồng bằng sông Cửu Long', isCorrect: true },
          { content: 'Tây Bắc', isCorrect: false },
          { content: 'Đông Bắc', isCorrect: false },
        ],
      },
      {
        content: 'Bô-xít (nguyên liệu sản xuất nhôm) ở Việt Nam tập trung chủ yếu ở đâu?',
        answers: [
          { content: 'Quảng Ninh', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: true },
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
        ],
      },
      {
        content: 'Nhà máy lọc dầu đầu tiên của Việt Nam đặt ở đâu?',
        answers: [
          { content: 'Bà Rịa - Vũng Tàu', isCorrect: false },
          { content: 'Dung Quất (Quảng Ngãi)', isCorrect: true },
          { content: 'Thanh Hóa', isCorrect: false },
          { content: 'Hải Phòng', isCorrect: false },
        ],
      },
      {
        content: 'Loại hình giao thông vận tải nào chiếm tỉ trọng lớn nhất trong vận chuyển hàng hóa ở Việt Nam?',
        answers: [
          { content: 'Đường sắt', isCorrect: false },
          { content: 'Đường bộ', isCorrect: true },
          { content: 'Đường hàng không', isCorrect: false },
          { content: 'Đường thủy nội địa', isCorrect: false },
        ],
      },
      {
        content: 'Phố cổ Hội An (Quảng Nam) được UNESCO công nhận là di sản văn hóa thế giới vào năm nào?',
        answers: [
          { content: '1993', isCorrect: false },
          { content: '1999', isCorrect: true },
          { content: '2003', isCorrect: false },
          { content: '2010', isCorrect: false },
        ],
      },
      {
        content: 'Ngành điện tử, công nghệ thông tin ở Việt Nam phát triển mạnh nhất ở đâu?',
        answers: [
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Hà Nội, Thành phố Hồ Chí Minh, Bắc Ninh, Thái Nguyên', isCorrect: true },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Bắc Trung Bộ', isCorrect: false },
        ],
      },
      {
        content: 'Cảng biển container lớn nhất miền Nam là cảng nào?',
        answers: [
          { content: 'Cảng Sài Gòn', isCorrect: false },
          { content: 'Cảng Cát Lái (TP. Hồ Chí Minh)', isCorrect: true },
          { content: 'Cảng Cái Mép - Thị Vải', isCorrect: false },
          { content: 'Cảng Quy Nhơn', isCorrect: false },
        ],
      },
      {
        content: 'Mặt hàng xuất khẩu chủ lực của Việt Nam thuộc nhóm nào?',
        answers: [
          { content: 'Khoáng sản thô', isCorrect: false },
          { content: 'Điện thoại, linh kiện điện tử, dệt may, giày dép, thủy sản', isCorrect: true },
          { content: 'Chỉ nông sản', isCorrect: false },
          { content: 'Máy móc hạng nặng', isCorrect: false },
        ],
      },
      {
        content: 'Ngành xi măng ở Việt Nam phát triển mạnh ở vùng nào?',
        answers: [
          { content: 'Đông Nam Bộ', isCorrect: false },
          { content: 'Đồng bằng sông Hồng và Bắc Trung Bộ (Hải Dương, Hải Phòng, Thanh Hóa)', isCorrect: true },
          { content: 'Tây Nguyên', isCorrect: false },
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
        ],
      },
      {
        content: 'Việt Nam gia nhập Tổ chức Thương mại Thế giới (WTO) vào năm nào?',
        answers: [
          { content: '2005', isCorrect: false },
          { content: '2007', isCorrect: true },
          { content: '2010', isCorrect: false },
          { content: '2000', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Đề thi thử tổng hợp - Địa lý vùng kinh tế VN
  // =============================================
  {
    categorySlug: 'on-thi-thpt-dia-ly',
    title: 'Đề ôn thi THPT QG 2025 - Địa Lý - Đề số 5',
    slug: 'on-thi-thpt-dia-ly-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Địa Lý - Đề số 5. Đề thi thử tổng hợp: địa lý vùng kinh tế Việt Nam (Đông Bắc, Tây Nguyên, Đông Nam Bộ, ĐBSCL...).',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Trung du và miền núi Bắc Bộ có thế mạnh kinh tế nổi bật nào?',
        answers: [
          { content: 'Nuôi trồng thủy sản', isCorrect: false },
          { content: 'Khai thác khoáng sản, thủy điện, cây công nghiệp và chăn nuôi gia súc lớn', isCorrect: true },
          { content: 'Công nghiệp dệt may', isCorrect: false },
          { content: 'Du lịch biển', isCorrect: false },
        ],
      },
      {
        content: 'Đồng bằng sông Hồng có đặc điểm kinh tế nổi bật nào?',
        answers: [
          { content: 'Vùng trọng điểm cây công nghiệp', isCorrect: false },
          { content: 'Dân cư đông đúc, trình độ thâm canh lúa nước cao, công nghiệp và dịch vụ phát triển', isCorrect: true },
          { content: 'Khai thác dầu khí', isCorrect: false },
          { content: 'Chăn nuôi gia súc lớn', isCorrect: false },
        ],
      },
      {
        content: 'Bắc Trung Bộ thường chịu ảnh hưởng nặng nề của thiên tai nào?',
        answers: [
          { content: 'Động đất', isCorrect: false },
          { content: 'Bão, lũ lụt, hạn hán, gió phơn Tây Nam (gió Lào)', isCorrect: true },
          { content: 'Sóng thần', isCorrect: false },
          { content: 'Núi lửa', isCorrect: false },
        ],
      },
      {
        content: 'Duyên hải Nam Trung Bộ có thế mạnh kinh tế biển nào?',
        answers: [
          { content: 'Khai thác dầu khí', isCorrect: false },
          { content: 'Đánh bắt và nuôi trồng thủy sản, du lịch biển, cảng biển', isCorrect: true },
          { content: 'Trồng lúa nước', isCorrect: false },
          { content: 'Khai thác than', isCorrect: false },
        ],
      },
      {
        content: 'Tây Nguyên có thế mạnh kinh tế nổi bật nào?',
        answers: [
          { content: 'Công nghiệp nặng', isCorrect: false },
          { content: 'Trồng cây công nghiệp lâu năm (cà phê, cao su, hồ tiêu), khai thác lâm sản, thủy điện', isCorrect: true },
          { content: 'Nuôi trồng thủy sản', isCorrect: false },
          { content: 'Du lịch biển', isCorrect: false },
        ],
      },
      {
        content: 'Đông Nam Bộ là vùng kinh tế phát triển nhất cả nước nhờ yếu tố nào?',
        answers: [
          { content: 'Diện tích lớn nhất', isCorrect: false },
          { content: 'Vị trí thuận lợi, cơ sở hạ tầng tốt, lao động có tay nghề, thu hút đầu tư nước ngoài mạnh', isCorrect: true },
          { content: 'Tài nguyên khoáng sản phong phú nhất', isCorrect: false },
          { content: 'Dân số đông nhất', isCorrect: false },
        ],
      },
      {
        content: 'Đồng bằng sông Cửu Long có vai trò gì trong nền kinh tế Việt Nam?',
        answers: [
          { content: 'Vùng công nghiệp lớn nhất', isCorrect: false },
          { content: 'Vùng sản xuất lương thực, thủy sản và cây ăn quả lớn nhất cả nước', isCorrect: true },
          { content: 'Vùng khai thác khoáng sản lớn nhất', isCorrect: false },
          { content: 'Vùng du lịch lớn nhất', isCorrect: false },
        ],
      },
      {
        content: 'Vùng kinh tế trọng điểm phía Nam bao gồm những tỉnh/thành phố nào là hạt nhân?',
        answers: [
          { content: 'Hà Nội, Hải Phòng, Quảng Ninh', isCorrect: false },
          { content: 'TP. Hồ Chí Minh, Bình Dương, Đồng Nai, Bà Rịa - Vũng Tàu', isCorrect: true },
          { content: 'Đà Nẵng, Quảng Nam, Quảng Ngãi', isCorrect: false },
          { content: 'Cần Thơ, An Giang, Kiên Giang', isCorrect: false },
        ],
      },
      {
        content: 'Vùng kinh tế trọng điểm phía Bắc có trung tâm là thành phố nào?',
        answers: [
          { content: 'Hải Phòng', isCorrect: false },
          { content: 'Hà Nội', isCorrect: true },
          { content: 'Quảng Ninh', isCorrect: false },
          { content: 'Bắc Ninh', isCorrect: false },
        ],
      },
      {
        content: 'Vùng kinh tế trọng điểm miền Trung có trung tâm là thành phố nào?',
        answers: [
          { content: 'Huế', isCorrect: false },
          { content: 'Đà Nẵng', isCorrect: true },
          { content: 'Quy Nhơn', isCorrect: false },
          { content: 'Nha Trang', isCorrect: false },
        ],
      },
      {
        content: 'Khó khăn lớn nhất của Đồng bằng sông Cửu Long hiện nay là gì?',
        answers: [
          { content: 'Thiếu lao động', isCorrect: false },
          { content: 'Biến đổi khí hậu, nước biển dâng, xâm nhập mặn', isCorrect: true },
          { content: 'Thiếu đất canh tác', isCorrect: false },
          { content: 'Không có cảng biển', isCorrect: false },
        ],
      },
      {
        content: 'Tây Nguyên đang đối mặt với vấn đề môi trường nào nghiêm trọng?',
        answers: [
          { content: 'Ô nhiễm biển', isCorrect: false },
          { content: 'Suy giảm rừng, suy thoái đất, thiếu nước mùa khô', isCorrect: true },
          { content: 'Ô nhiễm không khí công nghiệp', isCorrect: false },
          { content: 'Xâm nhập mặn', isCorrect: false },
        ],
      },
      {
        content: 'Thành phố Đà Nẵng có vai trò gì trong vùng Duyên hải Nam Trung Bộ?',
        answers: [
          { content: 'Chỉ là thành phố du lịch', isCorrect: false },
          { content: 'Trung tâm kinh tế, văn hóa, giáo dục lớn nhất miền Trung', isCorrect: true },
          { content: 'Trung tâm khai thác khoáng sản', isCorrect: false },
          { content: 'Trung tâm nông nghiệp', isCorrect: false },
        ],
      },
      {
        content: 'Cần Thơ có vai trò gì trong vùng Đồng bằng sông Cửu Long?',
        answers: [
          { content: 'Chỉ là thành phố nhỏ', isCorrect: false },
          { content: 'Trung tâm kinh tế, văn hóa, khoa học kỹ thuật của vùng', isCorrect: true },
          { content: 'Trung tâm khai thác dầu khí', isCorrect: false },
          { content: 'Trung tâm công nghiệp nặng', isCorrect: false },
        ],
      },
      {
        content: 'Vùng Đông Bắc có tài nguyên khoáng sản nổi bật nào?',
        answers: [
          { content: 'Dầu khí', isCorrect: false },
          { content: 'Than đá (Quảng Ninh), thiếc, kẽm, sắt', isCorrect: true },
          { content: 'Bô-xít', isCorrect: false },
          { content: 'Vàng', isCorrect: false },
        ],
      },
      {
        content: 'Vùng Tây Bắc có tiềm năng lớn về nguồn năng lượng nào?',
        answers: [
          { content: 'Năng lượng mặt trời', isCorrect: false },
          { content: 'Thủy điện (sông Đà, sông Mã)', isCorrect: true },
          { content: 'Năng lượng gió', isCorrect: false },
          { content: 'Dầu khí', isCorrect: false },
        ],
      },
      {
        content: 'Tam giác tăng trưởng kinh tế TP. Hồ Chí Minh - Bình Dương - Đồng Nai thuộc vùng kinh tế nào?',
        answers: [
          { content: 'Đồng bằng sông Cửu Long', isCorrect: false },
          { content: 'Đông Nam Bộ', isCorrect: true },
          { content: 'Duyên hải Nam Trung Bộ', isCorrect: false },
          { content: 'Tây Nguyên', isCorrect: false },
        ],
      },
      {
        content: 'Đồng bằng sông Hồng có hạn chế gì về phát triển kinh tế?',
        answers: [
          { content: 'Thiếu lao động', isCorrect: false },
          { content: 'Dân số đông, mật độ cao gây sức ép lên đất đai, tài nguyên và môi trường', isCorrect: true },
          { content: 'Không có cảng biển', isCorrect: false },
          { content: 'Khí hậu quá lạnh', isCorrect: false },
        ],
      },
      {
        content: 'Vùng nào ở Việt Nam có tiềm năng phát triển năng lượng gió và năng lượng mặt trời lớn nhất?',
        answers: [
          { content: 'Đồng bằng sông Hồng', isCorrect: false },
          { content: 'Duyên hải Nam Trung Bộ và Nam Bộ (Ninh Thuận, Bình Thuận)', isCorrect: true },
          { content: 'Tây Bắc', isCorrect: false },
          { content: 'Đông Bắc', isCorrect: false },
        ],
      },
      {
        content: 'Phú Quốc thuộc tỉnh nào và có thế mạnh kinh tế gì?',
        answers: [
          { content: 'Cà Mau - khai thác thủy sản', isCorrect: false },
          { content: 'Kiên Giang - du lịch biển đảo, nuôi trồng thủy sản', isCorrect: true },
          { content: 'Bà Rịa - Vũng Tàu - khai thác dầu khí', isCorrect: false },
          { content: 'Khánh Hòa - cảng biển', isCorrect: false },
        ],
      },
      {
        content: 'Vùng Bắc Trung Bộ có thế mạnh kinh tế nào?',
        answers: [
          { content: 'Khai thác dầu khí', isCorrect: false },
          { content: 'Lâm nghiệp, khai thác khoáng sản, du lịch di sản (Phong Nha - Kẻ Bàng, Cố đô Huế)', isCorrect: true },
          { content: 'Trồng cà phê', isCorrect: false },
          { content: 'Công nghiệp điện tử', isCorrect: false },
        ],
      },
      {
        content: 'Vùng Đông Nam Bộ chiếm khoảng bao nhiêu phần trăm GDP cả nước?',
        answers: [
          { content: 'Khoảng 20%', isCorrect: false },
          { content: 'Khoảng 35-40%', isCorrect: true },
          { content: 'Khoảng 50%', isCorrect: false },
          { content: 'Khoảng 60%', isCorrect: false },
        ],
      },
      {
        content: 'Hồ Tây, Hồ Gươm là các địa danh du lịch nổi tiếng thuộc thành phố nào?',
        answers: [
          { content: 'Thành phố Hồ Chí Minh', isCorrect: false },
          { content: 'Hà Nội', isCorrect: true },
          { content: 'Đà Nẵng', isCorrect: false },
          { content: 'Huế', isCorrect: false },
        ],
      },
      {
        content: 'Vùng kinh tế trọng điểm vùng Đồng bằng sông Cửu Long có trung tâm là thành phố nào?',
        answers: [
          { content: 'Long Xuyên', isCorrect: false },
          { content: 'Cần Thơ', isCorrect: true },
          { content: 'Mỹ Tho', isCorrect: false },
          { content: 'Rạch Giá', isCorrect: false },
        ],
      },
      {
        content: 'Sa Pa (Lào Cai) là điểm du lịch nổi tiếng nhờ yếu tố nào?',
        answers: [
          { content: 'Biển đẹp', isCorrect: false },
          { content: 'Khí hậu mát mẻ, cảnh quan núi non hùng vĩ, văn hóa dân tộc thiểu số đặc sắc', isCorrect: true },
          { content: 'Khu công nghiệp lớn', isCorrect: false },
          { content: 'Đồng bằng rộng lớn', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
