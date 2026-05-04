import type { MBTIQuizSeedData } from './seed-mbti-runner';

const CATEGORY = 'test-mbti';
const INSTRUCTION = 'Chọn câu trả lời mô tả đúng nhất về bạn. Không có đáp án đúng hay sai — hãy trả lời theo bản năng tự nhiên.';

const quizzes: MBTIQuizSeedData[] = [
  // =============================================
  // Quiz 1: Bài Test MBTI Cơ Bản
  // =============================================
  {
    categorySlug: CATEGORY,
    title: 'Bài Test MBTI Cơ Bản - Khám Phá Tính Cách',
    slug: 'test-mbti-co-ban',
    description: 'Bài test MBTI cơ bản với 20 câu hỏi giúp bạn khám phá nhóm tính cách 16 loại. Phân tích 4 chiều: Hướng ngoại/Hướng nội, Giác quan/Trực giác, Lý trí/Cảm xúc, Nguyên tắc/Linh hoạt.',
    instruction: INSTRUCTION,
    timeLimitMins: 15,
    questions: [
      // EI dimension (5 questions)
      {
        content: 'Sau một ngày làm việc mệt mỏi, bạn thường muốn:',
        answers: [
          { content: 'Đi chơi với bạn bè để xả stress', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Ở nhà một mình đọc sách hoặc xem phim', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Trong một buổi tiệc, bạn thường:',
        answers: [
          { content: 'Nói chuyện với nhiều người, kể cả người lạ', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Chỉ trò chuyện sâu với vài người thân quen', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi cần suy nghĩ về một vấn đề quan trọng, bạn:',
        answers: [
          { content: 'Thích thảo luận với người khác để tìm ra giải pháp', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Cần thời gian yên tĩnh một mình để suy ngẫm', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Bạn cảm thấy tràn đầy năng lượng khi:',
        answers: [
          { content: 'Ở giữa đám đông và tham gia hoạt động nhóm', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Có không gian riêng tư và thời gian cho bản thân', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi làm việc, bạn thích:',
        answers: [
          { content: 'Làm việc nhóm, trao đổi ý tưởng liên tục', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Làm việc độc lập, tập trung sâu', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      // SN dimension (5 questions)
      {
        content: 'Khi đọc một cuốn sách, bạn chú ý đến:',
        answers: [
          { content: 'Các chi tiết cụ thể, sự kiện và dữ liệu', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Ý nghĩa ẩn sau, chủ đề lớn và khả năng', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Bạn tin tưởng hơn vào:',
        answers: [
          { content: 'Kinh nghiệm thực tế và những gì đã được chứng minh', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Trực giác và linh cảm của bản thân', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi mô tả một sự kiện, bạn thường:',
        answers: [
          { content: 'Kể lại chi tiết theo trình tự thời gian', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Tóm tắt ý chính và chia sẻ cảm nhận tổng thể', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Bạn thích học theo cách:',
        answers: [
          { content: 'Từng bước một, có ví dụ cụ thể và thực hành', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Nắm bắt khái niệm tổng quan trước, chi tiết sau', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi lên kế hoạch du lịch, bạn:',
        answers: [
          { content: 'Lên lịch trình chi tiết từng ngày, đặt trước mọi thứ', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Chỉ có ý tưởng chung, để mọi thứ tự nhiên diễn ra', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      // TF dimension (5 questions)
      {
        content: 'Khi đưa ra quyết định quan trọng, bạn dựa vào:',
        answers: [
          { content: 'Phân tích logic, ưu nhược điểm rõ ràng', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Cảm xúc và tác động đến mọi người xung quanh', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi bạn bè gặp khó khăn, bạn thường:',
        answers: [
          { content: 'Phân tích vấn đề và đưa ra giải pháp cụ thể', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Lắng nghe, đồng cảm và an ủi họ trước', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Trong một cuộc tranh luận, bạn:',
        answers: [
          { content: 'Tập trung vào sự thật và logic, dù có thể làm người khác khó chịu', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Cố gắng giữ hòa khí và quan tâm đến cảm xúc mọi người', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Bạn đánh giá cao hơn ở một người:',
        answers: [
          { content: 'Sự công bằng, nhất quán và năng lực', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Sự tử tế, đồng cảm và quan tâm', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi nhận phản hồi tiêu cực, bạn:',
        answers: [
          { content: 'Xem xét khách quan xem phản hồi có đúng không', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Cảm thấy bị tổn thương và cần thời gian để xử lý cảm xúc', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      // JP dimension (5 questions)
      {
        content: 'Bạn thích cuộc sống:',
        answers: [
          { content: 'Có kế hoạch rõ ràng, mọi thứ được sắp xếp gọn gàng', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Linh hoạt, tự do và có nhiều lựa chọn mở', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi có deadline, bạn thường:',
        answers: [
          { content: 'Hoàn thành sớm, không thích để đến phút cuối', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Làm tốt nhất dưới áp lực, thường hoàn thành sát deadline', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Bàn làm việc của bạn thường:',
        answers: [
          { content: 'Ngăn nắp, mọi thứ có chỗ của nó', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Hơi lộn xộn nhưng bạn biết mọi thứ ở đâu', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi có kế hoạch bị thay đổi đột ngột, bạn:',
        answers: [
          { content: 'Cảm thấy khó chịu và muốn quay lại kế hoạch ban đầu', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Dễ dàng thích nghi và xem đó là điều thú vị', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Bạn cảm thấy thoải mái hơn khi:',
        answers: [
          { content: 'Mọi việc đã được quyết định và lên kế hoạch', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Vẫn còn nhiều lựa chọn và khả năng mở', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Bài Test MBTI Nâng Cao - Phong Cách Làm Việc
  // =============================================
  {
    categorySlug: CATEGORY,
    title: 'Test MBTI - Phong Cách Làm Việc',
    slug: 'test-mbti-phong-cach-lam-viec',
    description: 'Khám phá phong cách làm việc của bạn qua lăng kính MBTI. 20 câu hỏi tình huống công việc giúp bạn hiểu cách bạn giao tiếp, ra quyết định và quản lý thời gian.',
    instruction: INSTRUCTION,
    timeLimitMins: 15,
    questions: [
      { content: 'Trong cuộc họp nhóm, bạn thường:', answers: [
        { content: 'Chủ động phát biểu và dẫn dắt thảo luận', mbtiDimension: 'EI', mbtiPole: 'E' },
        { content: 'Lắng nghe kỹ rồi mới đưa ra ý kiến đã suy nghĩ kỹ', mbtiDimension: 'EI', mbtiPole: 'I' },
      ]},
      { content: 'Khi brainstorm ý tưởng, bạn thích:', answers: [
        { content: 'Nói ra ý tưởng ngay khi nghĩ được, thảo luận nhóm', mbtiDimension: 'EI', mbtiPole: 'E' },
        { content: 'Suy nghĩ một mình trước rồi mới chia sẻ ý tưởng hoàn chỉnh', mbtiDimension: 'EI', mbtiPole: 'I' },
      ]},
      { content: 'Môi trường làm việc lý tưởng của bạn:', answers: [
        { content: 'Văn phòng mở, nhiều tương tác với đồng nghiệp', mbtiDimension: 'EI', mbtiPole: 'E' },
        { content: 'Không gian yên tĩnh, ít bị gián đoạn', mbtiDimension: 'EI', mbtiPole: 'I' },
      ]},
      { content: 'Khi giải quyết vấn đề kỹ thuật, bạn thường:', answers: [
        { content: 'Hỏi đồng nghiệp ngay để cùng tìm giải pháp', mbtiDimension: 'EI', mbtiPole: 'E' },
        { content: 'Tự nghiên cứu và tìm hiểu trước khi hỏi ai', mbtiDimension: 'EI', mbtiPole: 'I' },
      ]},
      { content: 'Sau giờ làm việc, bạn thường:', answers: [
        { content: 'Đi ăn uống hoặc hoạt động cùng đồng nghiệp', mbtiDimension: 'EI', mbtiPole: 'E' },
        { content: 'Về nhà nghỉ ngơi, nạp lại năng lượng một mình', mbtiDimension: 'EI', mbtiPole: 'I' },
      ]},
      { content: 'Khi nhận dự án mới, bạn quan tâm đến:', answers: [
        { content: 'Yêu cầu cụ thể, timeline và deliverables rõ ràng', mbtiDimension: 'SN', mbtiPole: 'S' },
        { content: 'Tầm nhìn tổng thể, mục tiêu lớn và khả năng sáng tạo', mbtiDimension: 'SN', mbtiPole: 'N' },
      ]},
      { content: 'Khi viết báo cáo, bạn tập trung vào:', answers: [
        { content: 'Số liệu, dữ kiện và bằng chứng cụ thể', mbtiDimension: 'SN', mbtiPole: 'S' },
        { content: 'Xu hướng, insight và đề xuất chiến lược', mbtiDimension: 'SN', mbtiPole: 'N' },
      ]},
      { content: 'Bạn thích làm việc với:', answers: [
        { content: 'Quy trình đã được chứng minh hiệu quả', mbtiDimension: 'SN', mbtiPole: 'S' },
        { content: 'Phương pháp mới, thử nghiệm cách tiếp cận khác', mbtiDimension: 'SN', mbtiPole: 'N' },
      ]},
      { content: 'Khi đánh giá một ý tưởng kinh doanh, bạn xem xét:', answers: [
        { content: 'Tính khả thi thực tế, chi phí và rủi ro cụ thể', mbtiDimension: 'SN', mbtiPole: 'S' },
        { content: 'Tiềm năng dài hạn, khả năng mở rộng và đổi mới', mbtiDimension: 'SN', mbtiPole: 'N' },
      ]},
      { content: 'Khi hướng dẫn nhân viên mới, bạn:', answers: [
        { content: 'Đưa ra hướng dẫn chi tiết từng bước cụ thể', mbtiDimension: 'SN', mbtiPole: 'S' },
        { content: 'Giải thích mục tiêu chung và để họ tự tìm cách', mbtiDimension: 'SN', mbtiPole: 'N' },
      ]},
      { content: 'Khi phải sa thải nhân viên, bạn:', answers: [
        { content: 'Dựa vào hiệu suất và số liệu khách quan', mbtiDimension: 'TF', mbtiPole: 'T' },
        { content: 'Cân nhắc hoàn cảnh cá nhân và tìm giải pháp thay thế', mbtiDimension: 'TF', mbtiPole: 'F' },
      ]},
      { content: 'Khi hai đồng nghiệp xung đột, bạn:', answers: [
        { content: 'Phân tích ai đúng ai sai dựa trên sự thật', mbtiDimension: 'TF', mbtiPole: 'T' },
        { content: 'Tìm cách hòa giải để cả hai đều cảm thấy được tôn trọng', mbtiDimension: 'TF', mbtiPole: 'F' },
      ]},
      { content: 'Khi đánh giá hiệu suất nhân viên, bạn ưu tiên:', answers: [
        { content: 'KPI, số liệu và kết quả đo lường được', mbtiDimension: 'TF', mbtiPole: 'T' },
        { content: 'Thái độ, tinh thần đồng đội và sự phát triển cá nhân', mbtiDimension: 'TF', mbtiPole: 'F' },
      ]},
      { content: 'Khi phản hồi công việc của người khác, bạn:', answers: [
        { content: 'Thẳng thắn chỉ ra điểm cần cải thiện', mbtiDimension: 'TF', mbtiPole: 'T' },
        { content: 'Khen ngợi trước, rồi nhẹ nhàng góp ý', mbtiDimension: 'TF', mbtiPole: 'F' },
      ]},
      { content: 'Khi chọn giữa hiệu quả và hài lòng nhân viên, bạn:', answers: [
        { content: 'Ưu tiên hiệu quả — kết quả là quan trọng nhất', mbtiDimension: 'TF', mbtiPole: 'T' },
        { content: 'Cân bằng cả hai — nhân viên hạnh phúc sẽ làm việc tốt hơn', mbtiDimension: 'TF', mbtiPole: 'F' },
      ]},
      { content: 'Khi quản lý dự án, bạn thích:', answers: [
        { content: 'Lên kế hoạch chi tiết với milestone và deadline rõ ràng', mbtiDimension: 'JP', mbtiPole: 'J' },
        { content: 'Linh hoạt điều chỉnh theo tình hình thực tế', mbtiDimension: 'JP', mbtiPole: 'P' },
      ]},
      { content: 'Khi có nhiều task cùng lúc, bạn:', answers: [
        { content: 'Sắp xếp ưu tiên và hoàn thành từng task một', mbtiDimension: 'JP', mbtiPole: 'J' },
        { content: 'Chuyển qua lại giữa các task tùy hứng và cảm hứng', mbtiDimension: 'JP', mbtiPole: 'P' },
      ]},
      { content: 'Email và tin nhắn công việc, bạn:', answers: [
        { content: 'Trả lời ngay và giữ inbox sạch sẽ', mbtiDimension: 'JP', mbtiPole: 'J' },
        { content: 'Trả lời khi có thời gian, inbox thường khá nhiều', mbtiDimension: 'JP', mbtiPole: 'P' },
      ]},
      { content: 'Khi dự án thay đổi yêu cầu giữa chừng, bạn:', answers: [
        { content: 'Khó chịu vì phải thay đổi kế hoạch đã lên', mbtiDimension: 'JP', mbtiPole: 'J' },
        { content: 'Hào hứng vì có cơ hội thử hướng đi mới', mbtiDimension: 'JP', mbtiPole: 'P' },
      ]},
      { content: 'Cuối tuần, bạn thường:', answers: [
        { content: 'Có kế hoạch cụ thể cho từng ngày', mbtiDimension: 'JP', mbtiPole: 'J' },
        { content: 'Để tự nhiên, xem hôm đó muốn làm gì', mbtiDimension: 'JP', mbtiPole: 'P' },
      ]},
    ],
  },
  // =============================================
  // Quiz 3: Test MBTI - Mối Quan Hệ & Giao Tiếp
  // =============================================
  {
    categorySlug: CATEGORY,
    title: 'Test MBTI - Mối Quan Hệ & Giao Tiếp',
    slug: 'test-mbti-moi-quan-he',
    description: 'Khám phá phong cách giao tiếp và xây dựng mối quan hệ của bạn qua 20 câu hỏi MBTI. Hiểu cách bạn kết nối, chia sẻ và tương tác với người xung quanh.',
    instruction: INSTRUCTION,
    timeLimitMins: 15,
    questions: [
      // EI dimension (5 questions)
      {
        content: 'Khi gặp người mới, bạn thường:',
        answers: [
          { content: 'Chủ động bắt chuyện và tự giới thiệu bản thân', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Chờ đợi người khác bắt chuyện trước', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Trong nhóm bạn thân, bạn thường đóng vai trò:',
        answers: [
          { content: 'Người kết nối mọi người, tổ chức các buổi gặp mặt', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Người lắng nghe, cho lời khuyên khi được hỏi', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi có chuyện buồn, bạn muốn:',
        answers: [
          { content: 'Tâm sự ngay với bạn bè hoặc người thân', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Giữ trong lòng và tự xử lý cảm xúc một mình', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Cách bạn duy trì tình bạn:',
        answers: [
          { content: 'Thường xuyên liên lạc, rủ đi chơi và gặp gỡ', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Ít liên lạc nhưng khi gặp lại vẫn thân thiết như xưa', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi xảy ra hiểu lầm với bạn bè, bạn:',
        answers: [
          { content: 'Nói chuyện trực tiếp ngay để giải quyết', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Cần thời gian suy nghĩ trước khi đối mặt', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      // SN dimension (5 questions)
      {
        content: 'Khi lắng nghe bạn bè kể chuyện, bạn chú ý đến:',
        answers: [
          { content: 'Các chi tiết cụ thể: ai, ở đâu, khi nào, chuyện gì', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Cảm xúc và ý nghĩa sâu xa đằng sau câu chuyện', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi chọn quà tặng cho người thân, bạn:',
        answers: [
          { content: 'Chọn món quà thiết thực mà họ đang cần dùng', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Chọn món quà mang ý nghĩa đặc biệt hoặc bất ngờ sáng tạo', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi bạn bè hỏi ý kiến về một quyết định, bạn:',
        answers: [
          { content: 'Đưa ra lời khuyên dựa trên thực tế và kinh nghiệm', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Gợi mở nhiều khả năng và góc nhìn khác nhau', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Trong cuộc trò chuyện, bạn thích nói về:',
        answers: [
          { content: 'Những chuyện đang xảy ra, tin tức và sự kiện thực tế', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Ý tưởng, giả thuyết và những khả năng trong tương lai', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi kể về kỷ niệm với bạn bè, bạn thường:',
        answers: [
          { content: 'Nhớ rõ chi tiết: địa điểm, thời gian, ai mặc gì', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Nhớ cảm giác chung và bầu không khí lúc đó', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      // TF dimension (5 questions)
      {
        content: 'Khi bạn thân làm sai, bạn:',
        answers: [
          { content: 'Nói thẳng để họ nhận ra và sửa đổi', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Nhẹ nhàng góp ý, tránh làm họ tổn thương', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi hai người bạn cãi nhau và nhờ bạn phân xử, bạn:',
        answers: [
          { content: 'Phân tích khách quan ai đúng ai sai', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Cố gắng hiểu cảm xúc cả hai bên và hòa giải', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Bạn đánh giá một mối quan hệ tốt dựa trên:',
        answers: [
          { content: 'Sự tin cậy, trung thực và tôn trọng lẫn nhau', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Sự thấu hiểu, chia sẻ cảm xúc và gắn kết tình cảm', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi người yêu/bạn đời than phiền về công việc, bạn:',
        answers: [
          { content: 'Phân tích vấn đề và đề xuất cách giải quyết', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Lắng nghe, ôm họ và nói rằng bạn hiểu', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi phải từ chối lời mời của bạn bè, bạn:',
        answers: [
          { content: 'Nói thẳng lý do và từ chối rõ ràng', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Cảm thấy áy náy và cố gắng tìm cách từ chối nhẹ nhàng', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      // JP dimension (5 questions)
      {
        content: 'Khi hẹn gặp bạn bè, bạn thường:',
        answers: [
          { content: 'Lên kế hoạch trước: địa điểm, giờ giấc, hoạt động cụ thể', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Hẹn gặp rồi tính, đến đâu hay đến đó', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Trong mối quan hệ tình cảm, bạn:',
        answers: [
          { content: 'Thích sự rõ ràng, biết mình đang ở đâu trong mối quan hệ', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Để mọi thứ tự nhiên phát triển, không cần định nghĩa', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi tổ chức sinh nhật cho bạn, bạn:',
        answers: [
          { content: 'Lên kế hoạch chi tiết từ sớm, chuẩn bị mọi thứ chu đáo', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Tổ chức bất ngờ, ngẫu hứng và sáng tạo', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi đi du lịch cùng nhóm bạn, bạn muốn:',
        answers: [
          { content: 'Có lịch trình rõ ràng để tận dụng tối đa thời gian', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Tự do khám phá, thay đổi kế hoạch tùy thích', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi bạn bè rủ đi chơi vào phút cuối, bạn:',
        answers: [
          { content: 'Thường từ chối vì đã có kế hoạch khác', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Sẵn sàng đi ngay nếu rảnh, thích sự bất ngờ', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Test MBTI - Phong Cách Học Tập
  // =============================================
  {
    categorySlug: CATEGORY,
    title: 'Test MBTI - Phong Cách Học Tập',
    slug: 'test-mbti-phong-cach-hoc-tap',
    description: 'Tìm hiểu phong cách học tập phù hợp với tính cách MBTI của bạn. 20 câu hỏi giúp bạn hiểu cách tiếp thu kiến thức, ôn thi và phát triển bản thân hiệu quả nhất.',
    instruction: INSTRUCTION,
    timeLimitMins: 15,
    questions: [
      // EI dimension (5 questions)
      {
        content: 'Khi ôn thi, bạn thích:',
        answers: [
          { content: 'Học nhóm, thảo luận và giảng bài cho nhau', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Tự học một mình ở nơi yên tĩnh', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Trong lớp học, bạn thường:',
        answers: [
          { content: 'Hay giơ tay phát biểu và đặt câu hỏi', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Ghi chép cẩn thận và suy nghĩ trong đầu', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi không hiểu bài, bạn:',
        answers: [
          { content: 'Hỏi thầy cô hoặc bạn bè ngay lập tức', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Tự đọc lại sách và tìm hiểu thêm trước khi hỏi', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Bạn tiếp thu kiến thức tốt nhất khi:',
        answers: [
          { content: 'Được thảo luận, tranh luận và trình bày trước nhóm', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Được đọc, suy ngẫm và viết lại theo cách hiểu riêng', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi làm bài tập nhóm, bạn:',
        answers: [
          { content: 'Thích họp nhóm thường xuyên để cùng làm', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Thích chia phần rồi mỗi người tự làm phần mình', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      // SN dimension (5 questions)
      {
        content: 'Khi học một môn mới, bạn thích bắt đầu bằng:',
        answers: [
          { content: 'Ví dụ cụ thể, bài tập thực hành ngay', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Lý thuyết tổng quan, hiểu bức tranh toàn cảnh', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi ghi chép bài, bạn thường:',
        answers: [
          { content: 'Ghi chi tiết, đầy đủ theo thứ tự bài giảng', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Ghi ý chính, vẽ sơ đồ tư duy và liên kết ý tưởng', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Bạn thích loại câu hỏi thi nào hơn:',
        answers: [
          { content: 'Câu hỏi có đáp án rõ ràng, dựa trên kiến thức đã học', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Câu hỏi mở, yêu cầu phân tích và sáng tạo', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi đọc sách giáo khoa, bạn:',
        answers: [
          { content: 'Đọc kỹ từng trang, không bỏ sót chi tiết nào', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Đọc lướt để nắm ý chính, chỉ đọc kỹ phần quan trọng', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Bạn nhớ bài tốt hơn khi:',
        answers: [
          { content: 'Lặp đi lặp lại, làm nhiều bài tập tương tự', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Hiểu bản chất và liên hệ với kiến thức đã biết', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      // TF dimension (5 questions)
      {
        content: 'Khi chọn môn học tự chọn, bạn ưu tiên:',
        answers: [
          { content: 'Môn có ích cho nghề nghiệp và điểm số cao', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Môn mình yêu thích và thầy cô dạy hay', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi bạn cùng nhóm không hoàn thành phần việc, bạn:',
        answers: [
          { content: 'Nói thẳng rằng họ cần chịu trách nhiệm', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Hỏi thăm xem họ có gặp khó khăn gì không và giúp đỡ', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi viết bài luận, bạn tập trung vào:',
        answers: [
          { content: 'Lập luận chặt chẽ, dẫn chứng logic và thuyết phục', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Câu chuyện cảm động, góc nhìn nhân văn và cảm xúc', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi thầy cô chấm điểm không công bằng, bạn:',
        answers: [
          { content: 'Phân tích bài làm và đưa ra lý lẽ để phản biện', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Cảm thấy buồn và thất vọng nhưng ngại nói ra', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Động lực học tập lớn nhất của bạn là:',
        answers: [
          { content: 'Đạt thành tích cao, chứng minh năng lực bản thân', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Làm gia đình tự hào và không phụ lòng thầy cô', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      // JP dimension (5 questions)
      {
        content: 'Lịch học tập của bạn thường:',
        answers: [
          { content: 'Được lên kế hoạch cụ thể theo ngày, tuần, tháng', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Tùy hứng, học khi có cảm hứng hoặc gần thi', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi làm bài tập về nhà, bạn:',
        answers: [
          { content: 'Làm ngay khi được giao, không để dồn lại', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Thường làm vào phút cuối trước khi nộp', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Cặp sách và tài liệu học tập của bạn:',
        answers: [
          { content: 'Được sắp xếp gọn gàng theo từng môn', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Hơi lộn xộn nhưng bạn vẫn tìm được khi cần', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi có bài kiểm tra bất ngờ, bạn:',
        answers: [
          { content: 'Không lo vì luôn ôn bài đều đặn', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Hơi hoảng nhưng thường xoay xở được', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi chọn đề tài nghiên cứu, bạn:',
        answers: [
          { content: 'Chọn nhanh và bắt tay vào làm ngay', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Cân nhắc nhiều đề tài, thay đổi ý kiến vài lần', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Test MBTI - Phong Cách Sống
  // =============================================
  {
    categorySlug: CATEGORY,
    title: 'Test MBTI - Phong Cách Sống',
    slug: 'test-mbti-phong-cach-song',
    description: 'Khám phá phong cách sống và thói quen hàng ngày phản ánh tính cách MBTI của bạn. 20 câu hỏi về lối sống, sở thích và cách bạn tận hưởng cuộc sống.',
    instruction: INSTRUCTION,
    timeLimitMins: 15,
    questions: [
      // EI dimension (5 questions)
      {
        content: 'Ngày nghỉ lý tưởng của bạn là:',
        answers: [
          { content: 'Đi chơi cùng bạn bè, tham gia sự kiện hoặc lễ hội', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Ở nhà đọc sách, xem phim hoặc làm việc mình thích', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi đi mua sắm, bạn thích:',
        answers: [
          { content: 'Đi cùng bạn bè, vừa mua vừa trò chuyện vui vẻ', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Đi một mình, tự do lựa chọn theo ý mình', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi tập thể dục, bạn thích:',
        answers: [
          { content: 'Các môn thể thao đồng đội hoặc lớp tập nhóm', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Chạy bộ một mình, yoga hoặc tập gym cá nhân', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Khi ăn trưa, bạn thường:',
        answers: [
          { content: 'Rủ đồng nghiệp hoặc bạn bè đi ăn cùng', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Thích ăn một mình hoặc với một người thân quen', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      {
        content: 'Buổi tối ở nhà, bạn thường:',
        answers: [
          { content: 'Gọi điện, nhắn tin hoặc video call với bạn bè', mbtiDimension: 'EI', mbtiPole: 'E' },
          { content: 'Tận hưởng thời gian yên tĩnh với sở thích cá nhân', mbtiDimension: 'EI', mbtiPole: 'I' },
        ],
      },
      // SN dimension (5 questions)
      {
        content: 'Khi nấu ăn, bạn thường:',
        answers: [
          { content: 'Làm theo công thức chi tiết, đo lường chính xác', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Nêm nếm theo cảm giác, sáng tạo món mới', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi chọn phim để xem, bạn thích:',
        answers: [
          { content: 'Phim dựa trên câu chuyện có thật, tài liệu thực tế', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Phim viễn tưởng, giả tưởng hoặc có cốt truyện bất ngờ', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi trang trí nhà cửa, bạn:',
        answers: [
          { content: 'Chọn đồ nội thất thực dụng, bền đẹp và tiện lợi', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Thích phong cách độc đáo, thể hiện cá tính riêng', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi đi dạo trong thành phố, bạn chú ý đến:',
        answers: [
          { content: 'Các cửa hàng, biển hiệu và chi tiết xung quanh', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Bầu không khí chung, tưởng tượng về cuộc sống ở đây', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      {
        content: 'Khi quản lý tài chính cá nhân, bạn:',
        answers: [
          { content: 'Ghi chép chi tiêu cụ thể, theo dõi từng khoản', mbtiDimension: 'SN', mbtiPole: 'S' },
          { content: 'Có cái nhìn tổng quan, tập trung vào mục tiêu tài chính dài hạn', mbtiDimension: 'SN', mbtiPole: 'N' },
        ],
      },
      // TF dimension (5 questions)
      {
        content: 'Khi chọn nghề nghiệp, bạn ưu tiên:',
        answers: [
          { content: 'Thu nhập cao, cơ hội thăng tiến và ổn định', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Công việc có ý nghĩa, giúp đỡ người khác và đam mê', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi xem tin tức về thiên tai, bạn:',
        answers: [
          { content: 'Quan tâm đến số liệu thiệt hại và biện pháp khắc phục', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Xúc động trước hoàn cảnh của những người bị ảnh hưởng', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi nuôi thú cưng, bạn chú trọng:',
        answers: [
          { content: 'Lịch tiêm phòng, chế độ ăn khoa học và huấn luyện', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Tình cảm, sự gắn bó và chiều chuộng thú cưng', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi mua một món đồ đắt tiền, bạn:',
        answers: [
          { content: 'So sánh giá cả, đọc review và phân tích kỹ trước khi mua', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Mua vì thích, vì nó mang lại cảm giác hạnh phúc', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      {
        content: 'Khi ai đó xin bạn cho tiền, bạn:',
        answers: [
          { content: 'Cân nhắc xem họ có thực sự cần không và cho hợp lý', mbtiDimension: 'TF', mbtiPole: 'T' },
          { content: 'Thường cho ngay vì thấy thương và muốn giúp', mbtiDimension: 'TF', mbtiPole: 'F' },
        ],
      },
      // JP dimension (5 questions)
      {
        content: 'Buổi sáng của bạn thường:',
        answers: [
          { content: 'Có thói quen cố định: dậy đúng giờ, tập thể dục, ăn sáng', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Tùy ngày, có hôm dậy sớm có hôm ngủ nướng', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Tủ quần áo của bạn:',
        answers: [
          { content: 'Được sắp xếp theo loại, màu sắc hoặc mùa', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Khá tự do, lấy gì mặc nấy miễn sạch sẽ', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi đi siêu thị, bạn:',
        answers: [
          { content: 'Có danh sách mua sắm và mua đúng những gì cần', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Đi loanh quanh xem có gì hay thì mua', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Kế hoạch cuối tuần của bạn:',
        answers: [
          { content: 'Được lên từ đầu tuần, biết trước sẽ làm gì', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Quyết định vào sáng thứ Bảy xem muốn làm gì', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
      {
        content: 'Khi dọn dẹp nhà cửa, bạn:',
        answers: [
          { content: 'Dọn theo lịch cố định, mỗi thứ có chỗ của nó', mbtiDimension: 'JP', mbtiPole: 'J' },
          { content: 'Dọn khi thấy bừa quá hoặc khi có khách đến', mbtiDimension: 'JP', mbtiPole: 'P' },
        ],
      },
    ],
  },
];

export default quizzes;
