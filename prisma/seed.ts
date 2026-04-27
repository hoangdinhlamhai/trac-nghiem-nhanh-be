import { PrismaClient, QuizType, QuestionType } from '@prisma/client';

const prisma = new PrismaClient();

// ============================================
// 70 câu hỏi MBTI - 4 chiều x ~18 câu mỗi chiều
// ============================================

interface MBTIQuestion {
  content: string;
  dimension: string; // EI, SN, TF, JP
  answers: { content: string; pole: string }[];
}

const mbtiQuestions: MBTIQuestion[] = [
  // ===== E/I - Hướng ngoại vs Hướng nội (18 câu) =====
  {
    content: 'Khi tham gia hoạt động tập thể lớn, bạn cảm thấy:',
    dimension: 'EI',
    answers: [
      { content: 'Hào hứng và tràn đầy năng lượng', pole: 'E' },
      { content: 'Mệt mỏi và muốn về nhà sớm', pole: 'I' },
    ],
  },
  {
    content: 'Cuối tuần lý tưởng của bạn là:',
    dimension: 'EI',
    answers: [
      { content: 'Ra ngoài gặp gỡ bạn bè, đi chơi nhóm', pole: 'E' },
      { content: 'Ở nhà đọc sách, xem phim hoặc nghỉ ngơi', pole: 'I' },
    ],
  },
  {
    content: 'Khi cần giải quyết một vấn đề khó, bạn thường:',
    dimension: 'EI',
    answers: [
      { content: 'Bàn bạc với nhiều người để tìm ý tưởng', pole: 'E' },
      { content: 'Suy nghĩ một mình trước rồi mới hỏi ý kiến', pole: 'I' },
    ],
  },
  {
    content: 'Trong một cuộc họp nhóm, bạn thường:',
    dimension: 'EI',
    answers: [
      { content: 'Là người nói nhiều và đưa ra ý kiến sớm', pole: 'E' },
      { content: 'Lắng nghe trước và chỉ nói khi cần thiết', pole: 'I' },
    ],
  },
  {
    content: 'Bạn nạp lại năng lượng bằng cách:',
    dimension: 'EI',
    answers: [
      { content: 'Giao tiếp, trò chuyện với người khác', pole: 'E' },
      { content: 'Dành thời gian yên tĩnh một mình', pole: 'I' },
    ],
  },
  {
    content: 'Khi đến một nơi mới, bạn thường:',
    dimension: 'EI',
    answers: [
      { content: 'Chủ động làm quen với mọi người xung quanh', pole: 'E' },
      { content: 'Quan sát và chờ có ai nói chuyện trước', pole: 'I' },
    ],
  },
  {
    content: 'Bạn thích môi trường làm việc nào hơn?',
    dimension: 'EI',
    answers: [
      { content: 'Văn phòng mở, nhộn nhịp, nhiều tương tác', pole: 'E' },
      { content: 'Không gian riêng, yên tĩnh, ít bị gián đoạn', pole: 'I' },
    ],
  },
  {
    content: 'Khi có tin vui, phản ứng đầu tiên của bạn là:',
    dimension: 'EI',
    answers: [
      { content: 'Gọi ngay cho bạn bè để chia sẻ', pole: 'E' },
      { content: 'Tự mình tận hưởng niềm vui trước', pole: 'I' },
    ],
  },
  {
    content: 'Bạn cảm thấy thoải mái hơn khi:',
    dimension: 'EI',
    answers: [
      { content: 'Ở trong nhóm đông người', pole: 'E' },
      { content: 'Ở một mình hoặc với 1-2 người thân', pole: 'I' },
    ],
  },
  {
    content: 'Khi học một kỹ năng mới, bạn thích:',
    dimension: 'EI',
    answers: [
      { content: 'Học nhóm, thảo luận và thực hành cùng người khác', pole: 'E' },
      { content: 'Tự nghiên cứu, đọc tài liệu và luyện tập một mình', pole: 'I' },
    ],
  },
  {
    content: 'Phong cách giao tiếp của bạn thiên về:',
    dimension: 'EI',
    answers: [
      { content: 'Nói nhiều, nghĩ đến đâu nói đến đó', pole: 'E' },
      { content: 'Cân nhắc kỹ trước khi phát biểu', pole: 'I' },
    ],
  },
  {
    content: 'Khi gặp người lạ, bạn thường:',
    dimension: 'EI',
    answers: [
      { content: 'Dễ dàng bắt chuyện và cảm thấy tự nhiên', pole: 'E' },
      { content: 'Cần thời gian để cảm thấy thoải mái', pole: 'I' },
    ],
  },
  {
    content: 'Bạn thích trình bày ý tưởng bằng cách:',
    dimension: 'EI',
    answers: [
      { content: 'Nói trực tiếp, thuyết trình trước đám đông', pole: 'E' },
      { content: 'Viết ra giấy hoặc gửi email', pole: 'I' },
    ],
  },
  {
    content: 'Sau một ngày làm việc căng thẳng, bạn muốn:',
    dimension: 'EI',
    answers: [
      { content: 'Đi ăn uống, cafe với bạn bè để xả stress', pole: 'E' },
      { content: 'Về nhà, tắm nước nóng và nghỉ ngơi', pole: 'I' },
    ],
  },
  {
    content: 'Bạn cảm thấy buồn chán nhất khi:',
    dimension: 'EI',
    answers: [
      { content: 'Phải ở một mình quá lâu', pole: 'E' },
      { content: 'Phải giao tiếp liên tục không có thời gian riêng', pole: 'I' },
    ],
  },
  {
    content: 'Trong mối quan hệ, bạn thường:',
    dimension: 'EI',
    answers: [
      { content: 'Có nhiều bạn bè và mối quan hệ rộng', pole: 'E' },
      { content: 'Có ít bạn thân nhưng rất sâu sắc', pole: 'I' },
    ],
  },
  {
    content: 'Khi có xung đột, cách xử lý của bạn là:',
    dimension: 'EI',
    answers: [
      { content: 'Nói ra ngay để giải quyết nhanh', pole: 'E' },
      { content: 'Suy nghĩ kỹ rồi mới đối thoại', pole: 'I' },
    ],
  },
  {
    content: 'Bạn thường đưa ra quyết định nhanh hơn khi:',
    dimension: 'EI',
    answers: [
      { content: 'Được thảo luận với người khác', pole: 'E' },
      { content: 'Được yên tĩnh để tự suy nghĩ', pole: 'I' },
    ],
  },

  // ===== S/N - Cảm giác vs Trực giác (18 câu) =====
  {
    content: 'Khi tiếp nhận thông tin mới, bạn ưu tiên:',
    dimension: 'SN',
    answers: [
      { content: 'Chi tiết cụ thể, dữ liệu thực tế', pole: 'S' },
      { content: 'Ý nghĩa tổng thể và khả năng ẩn sau', pole: 'N' },
    ],
  },
  {
    content: 'Bạn tin vào:',
    dimension: 'SN',
    answers: [
      { content: 'Kinh nghiệm thực tế và những gì đã chứng minh được', pole: 'S' },
      { content: 'Linh cảm và trực giác của bản thân', pole: 'N' },
    ],
  },
  {
    content: 'Khi đọc một cuốn sách, bạn thường chú ý đến:',
    dimension: 'SN',
    answers: [
      { content: 'Các sự kiện, chi tiết và dẫn chứng cụ thể', pole: 'S' },
      { content: 'Chủ đề lớn, ẩn dụ và thông điệp sâu xa', pole: 'N' },
    ],
  },
  {
    content: 'Bạn mô tả một trải nghiệm cho người khác bằng cách:',
    dimension: 'SN',
    answers: [
      { content: 'Kể lại sự việc theo trình tự, chi tiết từng bước', pole: 'S' },
      { content: 'Tóm tắt ý chính và chia sẻ cảm nhận tổng quát', pole: 'N' },
    ],
  },
  {
    content: 'Khi lập kế hoạch du lịch, bạn thích:',
    dimension: 'SN',
    answers: [
      { content: 'Lên lịch trình chi tiết, đặt chỗ trước', pole: 'S' },
      { content: 'Chỉ có hướng đi chung, khám phá tự do', pole: 'N' },
    ],
  },
  {
    content: 'Bạn thích loại công việc nào hơn?',
    dimension: 'SN',
    answers: [
      { content: 'Công việc có quy trình rõ ràng, từng bước cụ thể', pole: 'S' },
      { content: 'Công việc đòi hỏi sáng tạo và tư duy đột phá', pole: 'N' },
    ],
  },
  {
    content: 'Khi nhìn vào bức tranh, bạn thường thấy:',
    dimension: 'SN',
    answers: [
      { content: 'Các chi tiết: màu sắc, hình dáng, bố cục', pole: 'S' },
      { content: 'Cảm xúc, câu chuyện ẩn trong bức tranh', pole: 'N' },
    ],
  },
  {
    content: 'Bạn thấy mình giỏi hơn ở việc:',
    dimension: 'SN',
    answers: [
      { content: 'Ghi nhớ các con số, dữ kiện và chi tiết', pole: 'S' },
      { content: 'Nhìn ra xu hướng, mối liên hệ giữa các sự việc', pole: 'N' },
    ],
  },
  {
    content: 'Khi nghe ai đó trình bày, bạn muốn họ:',
    dimension: 'SN',
    answers: [
      { content: 'Đi thẳng vào vấn đề, đưa ví dụ cụ thể', pole: 'S' },
      { content: 'Trình bày bức tranh toàn cảnh trước', pole: 'N' },
    ],
  },
  {
    content: 'Bạn thường nghĩ về:',
    dimension: 'SN',
    answers: [
      { content: 'Hiện tại và những gì đang xảy ra', pole: 'S' },
      { content: 'Tương lai và những khả năng có thể xảy ra', pole: 'N' },
    ],
  },
  {
    content: 'Câu nói nào gần với bạn hơn?',
    dimension: 'SN',
    answers: [
      { content: 'Thấy mới tin, bằng chứng là quan trọng nhất', pole: 'S' },
      { content: 'Đôi khi cần tin vào cảm nhận, dù chưa có bằng chứng', pole: 'N' },
    ],
  },
  {
    content: 'Khi giải quyết vấn đề, bạn dựa vào:',
    dimension: 'SN',
    answers: [
      { content: 'Phương pháp đã thử nghiệm và có kết quả tốt', pole: 'S' },
      { content: 'Cách tiếp cận mới, sáng tạo chưa ai thử', pole: 'N' },
    ],
  },
  {
    content: 'Bạn thích học theo cách nào?',
    dimension: 'SN',
    answers: [
      { content: 'Thực hành trực tiếp, làm ví dụ cụ thể', pole: 'S' },
      { content: 'Hiểu lý thuyết tổng quát trước rồi mới áp dụng', pole: 'N' },
    ],
  },
  {
    content: 'Khi mua sắm, bạn thường:',
    dimension: 'SN',
    answers: [
      { content: 'So sánh kỹ thông số, giá cả, đánh giá', pole: 'S' },
      { content: 'Mua theo cảm hứng, thích là mua', pole: 'N' },
    ],
  },
  {
    content: 'Bạn thấy mình là người:',
    dimension: 'SN',
    answers: [
      { content: 'Thực tế, chân đất, sống ở hiện tại', pole: 'S' },
      { content: 'Hay mơ mộng, tưởng tượng, sống với ý tưởng', pole: 'N' },
    ],
  },
  {
    content: 'Khi viết một bài văn hoặc báo cáo, bạn chú trọng:',
    dimension: 'SN',
    answers: [
      { content: 'Sự chính xác của dữ liệu và chi tiết', pole: 'S' },
      { content: 'Cách kể chuyện hấp dẫn và ý tưởng sáng tạo', pole: 'N' },
    ],
  },
  {
    content: 'Bạn cảm thấy khó chịu hơn khi:',
    dimension: 'SN',
    answers: [
      { content: 'Mọi thứ quá mơ hồ, không có số liệu cụ thể', pole: 'S' },
      { content: 'Mọi thứ quá chi tiết, thiếu bức tranh lớn', pole: 'N' },
    ],
  },
  {
    content: 'Khi kể lại một sự kiện, bạn thường:',
    dimension: 'SN',
    answers: [
      { content: 'Nhớ rõ ai nói gì, mặc gì, xảy ra lúc mấy giờ', pole: 'S' },
      { content: 'Nhớ cảm xúc chung và bầu không khí tổng thể', pole: 'N' },
    ],
  },

  // ===== T/F - Lý trí vs Cảm xúc (17 câu) =====
  {
    content: 'Khi đưa ra quyết định quan trọng, bạn dựa vào:',
    dimension: 'TF',
    answers: [
      { content: 'Logic, phân tích ưu nhược điểm', pole: 'T' },
      { content: 'Cảm nhận cá nhân và tác động đến người khác', pole: 'F' },
    ],
  },
  {
    content: 'Khi bạn bè làm sai, bạn thường:',
    dimension: 'TF',
    answers: [
      { content: 'Nói thẳng để họ sửa, dù có thể họ buồn', pole: 'T' },
      { content: 'Chọn cách nói nhẹ nhàng, tránh làm tổn thương', pole: 'F' },
    ],
  },
  {
    content: 'Bạn đánh giá một người qua:',
    dimension: 'TF',
    answers: [
      { content: 'Năng lực, thành tích và sự công bằng', pole: 'T' },
      { content: 'Sự tử tế, lòng tốt và cách đối xử', pole: 'F' },
    ],
  },
  {
    content: 'Trong tranh luận, bạn thường:',
    dimension: 'TF',
    answers: [
      { content: 'Tập trung vào tìm ra sự thật, đúng sai', pole: 'T' },
      { content: 'Quan tâm đến cảm xúc và sự hòa thuận', pole: 'F' },
    ],
  },
  {
    content: 'Câu nào mô tả bạn đúng hơn?',
    dimension: 'TF',
    answers: [
      { content: 'Tôi là người công bằng và khách quan', pole: 'T' },
      { content: 'Tôi là người biết cảm thông và quan tâm', pole: 'F' },
    ],
  },
  {
    content: 'Khi ai đó kể chuyện buồn, phản ứng của bạn là:',
    dimension: 'TF',
    answers: [
      { content: 'Tìm cách giải quyết vấn đề cho họ', pole: 'T' },
      { content: 'Lắng nghe, đồng cảm và an ủi', pole: 'F' },
    ],
  },
  {
    content: 'Bạn thấy điều gì quan trọng hơn trong công việc?',
    dimension: 'TF',
    answers: [
      { content: 'Hiệu quả và kết quả đạt được', pole: 'T' },
      { content: 'Mối quan hệ tốt với đồng nghiệp', pole: 'F' },
    ],
  },
  {
    content: 'Khi phải sa thải nhân viên, bạn sẽ:',
    dimension: 'TF',
    answers: [
      { content: 'Căn cứ vào hiệu suất, đưa ra quyết định nhanh', pole: 'T' },
      { content: 'Cảm thấy rất khó khăn, cân nhắc hoàn cảnh cá nhân', pole: 'F' },
    ],
  },
  {
    content: 'Bạn bị phê bình là:',
    dimension: 'TF',
    answers: [
      { content: 'Quá cứng nhắc, thiếu tình cảm', pole: 'T' },
      { content: 'Quá dễ mềm lòng, thiếu quyết đoán', pole: 'F' },
    ],
  },
  {
    content: 'Khi xem phim hoặc đọc truyện, bạn chú ý đến:',
    dimension: 'TF',
    answers: [
      { content: 'Cốt truyện có hợp lý không, logic không', pole: 'T' },
      { content: 'Tình cảm nhân vật, cảm xúc trong câu chuyện', pole: 'F' },
    ],
  },
  {
    content: 'Bạn thường bị người khác nhận xét là:',
    dimension: 'TF',
    answers: [
      { content: 'Lý trí, sáng suốt nhưng đôi khi lạnh lùng', pole: 'T' },
      { content: 'Nồng ấm, dễ gần nhưng đôi khi quá nhạy cảm', pole: 'F' },
    ],
  },
  {
    content: 'Khi phải chọn giữa sự thật và sự tử tế:',
    dimension: 'TF',
    answers: [
      { content: 'Sự thật quan trọng hơn, dù đau lòng', pole: 'T' },
      { content: 'Đôi khi nên giấu sự thật để bảo vệ người khác', pole: 'F' },
    ],
  },
  {
    content: 'Điều gì khiến bạn tự hào hơn?',
    dimension: 'TF',
    answers: [
      { content: 'Đưa ra quyết định đúng đắn, hợp lý', pole: 'T' },
      { content: 'Giúp đỡ được ai đó vượt qua khó khăn', pole: 'F' },
    ],
  },
  {
    content: 'Khi có mâu thuẫn trong nhóm, điều bạn muốn nhất là:',
    dimension: 'TF',
    answers: [
      { content: 'Tìm ra ai đúng ai sai, giải quyết triệt để', pole: 'T' },
      { content: 'Mọi người hòa thuận lại, ai cũng vui', pole: 'F' },
    ],
  },
  {
    content: 'Bạn thường ra quyết định bằng:',
    dimension: 'TF',
    answers: [
      { content: 'Đầu óc - phân tích lợi hại', pole: 'T' },
      { content: 'Trái tim - cảm nhận đúng sai', pole: 'F' },
    ],
  },
  {
    content: 'Khi tặng quà, bạn chọn theo:',
    dimension: 'TF',
    answers: [
      { content: 'Sự thực dụng - món quà có ích', pole: 'T' },
      { content: 'Ý nghĩa tình cảm - dù nhỏ nhưng ý nghĩa lớn', pole: 'F' },
    ],
  },
  {
    content: 'Bạn thấy mình là người:',
    dimension: 'TF',
    answers: [
      { content: 'Đúng đắn và công bằng với tất cả', pole: 'T' },
      { content: 'Nhân ái và luôn cố hiểu hoàn cảnh người khác', pole: 'F' },
    ],
  },

  // ===== J/P - Nguyên tắc vs Linh hoạt (17 câu) =====
  {
    content: 'Bạn thích cuộc sống:',
    dimension: 'JP',
    answers: [
      { content: 'Có kế hoạch rõ ràng, ngăn nắp, trật tự', pole: 'J' },
      { content: 'Linh hoạt, tự do, tùy cơ ứng biến', pole: 'P' },
    ],
  },
  {
    content: 'Khi có deadline, bạn thường:',
    dimension: 'JP',
    answers: [
      { content: 'Hoàn thành sớm, không để đến phút cuối', pole: 'J' },
      { content: 'Làm tốt nhất dưới áp lực, thường nộp sát hạn', pole: 'P' },
    ],
  },
  {
    content: 'Bàn làm việc của bạn thường:',
    dimension: 'JP',
    answers: [
      { content: 'Gọn gàng, mọi thứ đặt đúng chỗ', pole: 'J' },
      { content: 'Hơi bừa bộn nhưng mình biết thứ gì ở đâu', pole: 'P' },
    ],
  },
  {
    content: 'Bạn cảm thấy thoải mái hơn khi:',
    dimension: 'JP',
    answers: [
      { content: 'Mọi thứ đã được quyết định và lên kế hoạch', pole: 'J' },
      { content: 'Vẫn còn nhiều lựa chọn mở, chưa chốt', pole: 'P' },
    ],
  },
  {
    content: 'Danh sách việc cần làm (to-do list) với bạn là:',
    dimension: 'JP',
    answers: [
      { content: 'Công cụ không thể thiếu, luôn có sẵn', pole: 'J' },
      { content: 'Thỉnh thoảng lập nhưng ít khi theo đúng', pole: 'P' },
    ],
  },
  {
    content: 'Khi đi chơi, bạn thích:',
    dimension: 'JP',
    answers: [
      { content: 'Biết trước sẽ đi đâu, làm gì, mấy giờ', pole: 'J' },
      { content: 'Tùy hứng, đến đâu hay đến đó', pole: 'P' },
    ],
  },
  {
    content: 'Bạn xem quy tắc và luật lệ là:',
    dimension: 'JP',
    answers: [
      { content: 'Cần thiết để mọi thứ hoạt động tốt', pole: 'J' },
      { content: 'Đôi khi quá cứng nhắc, cần linh hoạt', pole: 'P' },
    ],
  },
  {
    content: 'Khi có kế hoạch bị thay đổi đột ngột, bạn:',
    dimension: 'JP',
    answers: [
      { content: 'Cảm thấy khó chịu, muốn quay lại kế hoạch ban đầu', pole: 'J' },
      { content: 'Thấy thú vị, sẵn sàng thích ứng', pole: 'P' },
    ],
  },
  {
    content: 'Bạn thường bắt đầu một dự án bằng cách:',
    dimension: 'JP',
    answers: [
      { content: 'Lập kế hoạch chi tiết từ đầu đến cuối', pole: 'J' },
      { content: 'Bắt tay vào làm ngay rồi điều chỉnh sau', pole: 'P' },
    ],
  },
  {
    content: 'Về thời gian, bạn thường:',
    dimension: 'JP',
    answers: [
      { content: 'Đến đúng giờ hoặc sớm hơn', pole: 'J' },
      { content: 'Đôi khi trễ vài phút vì bị cuốn vào việc khác', pole: 'P' },
    ],
  },
  {
    content: 'Bạn mua sắm theo kiểu:',
    dimension: 'JP',
    answers: [
      { content: 'Lên danh sách trước, mua đúng cần', pole: 'J' },
      { content: 'Vào xem rồi mua gì thấy thích', pole: 'P' },
    ],
  },
  {
    content: 'Khi làm việc nhóm, bạn muốn:',
    dimension: 'JP',
    answers: [
      { content: 'Phân công rõ ràng, ai làm gì biết đó', pole: 'J' },
      { content: 'Mọi người tự do đóng góp theo khả năng', pole: 'P' },
    ],
  },
  {
    content: 'Bạn thấy mình là người:',
    dimension: 'JP',
    answers: [
      { content: 'Có tổ chức, kiên định và đáng tin cậy', pole: 'J' },
      { content: 'Linh hoạt, sáng tạo và dễ thích ứng', pole: 'P' },
    ],
  },
  {
    content: 'Khi phải chờ đợi không biết bao lâu, bạn:',
    dimension: 'JP',
    answers: [
      { content: 'Rất khó chịu, muốn biết chính xác bao lâu', pole: 'J' },
      { content: 'Không sao, tranh thủ làm việc khác', pole: 'P' },
    ],
  },
  {
    content: 'Cuối ngày, bạn cảm thấy thoải mái khi:',
    dimension: 'JP',
    answers: [
      { content: 'Đã hoàn thành hết danh sách công việc', pole: 'J' },
      { content: 'Đã trải nghiệm những điều thú vị, dù chưa xong hết việc', pole: 'P' },
    ],
  },
  {
    content: 'Khi nấu ăn, bạn thường:',
    dimension: 'JP',
    answers: [
      { content: 'Theo đúng công thức, đong đo chính xác', pole: 'J' },
      { content: 'Nêm nếm tùy khẩu vị, sáng tạo theo ý mình', pole: 'P' },
    ],
  },
  {
    content: 'Phong cách quản lý tiền của bạn là:',
    dimension: 'JP',
    answers: [
      { content: 'Ghi chép chi tiêu, có ngân sách rõ ràng', pole: 'J' },
      { content: 'Chi tiêu thoải mái, miễn là không hết tiền', pole: 'P' },
    ],
  },
];

async function main() {
  console.log('🌱 Bắt đầu seed data...\n');

  // 1. Xóa dữ liệu cũ (nếu có)
  await prisma.cpaLog.deleteMany();
  await prisma.cpaCampaign.deleteMany();
  await prisma.userFavorite.deleteMany();
  await prisma.userResult.deleteMany();
  await prisma.answer.deleteMany();
  await prisma.question.deleteMany();
  await prisma.quiz.deleteMany();
  await prisma.category.deleteMany();
  console.log('🗑️  Đã xóa dữ liệu cũ');

  // 2. Tạo Categories
  const catMBTI = await prisma.category.create({
    data: {
      name: 'Test MBTI',
      slug: 'test-mbti',
      description: 'Trắc nghiệm tính cách MBTI - 16 nhóm tính cách',
      displayOrder: 1,
      isActive: true,
    },
  });

  const catTamLy = await prisma.category.create({
    data: {
      name: 'Test Tâm Lý',
      slug: 'test-tam-ly',
      description: 'Các bài test tâm lý học thú vị',
      displayOrder: 2,
      isActive: true,
    },
  });

  const catIQ = await prisma.category.create({
    data: {
      name: 'Test IQ',
      slug: 'test-iq',
      description: 'Đo chỉ số IQ miễn phí',
      displayOrder: 3,
      isActive: false, // chưa có quiz
    },
  });

  const catEQ = await prisma.category.create({
    data: {
      name: 'Test EQ',
      slug: 'test-eq',
      description: 'Đo chỉ số trí tuệ cảm xúc',
      displayOrder: 4,
      isActive: false,
    },
  });

  const catDISC = await prisma.category.create({
    data: {
      name: 'Test DISC',
      slug: 'test-disc',
      description: 'Trắc nghiệm tính cách DISC',
      displayOrder: 5,
      isActive: false,
    },
  });

  console.log(`📂 Đã tạo ${5} categories`);

  // 3. Tạo Quiz MBTI
  const quizMBTI = await prisma.quiz.create({
    data: {
      categoryId: catMBTI.id,
      title: 'Bài Test MBTI Chuẩn Quốc Tế',
      slug: 'mbti-quiz',
      description:
        'Chào mừng bạn đến với bài trắc nghiệm tính cách MBTI (Myers-Briggs Type Indicator) – một trong những công cụ khám phá tính cách phổ biến và được sử dụng rộng rãi trên toàn thế giới.',
      instruction:
        'Hãy trả lời các câu hỏi một cách tự nhiên và trung thực nhất để nhận được kết quả phản ánh đúng con người bạn.\n\n⚠️ Lưu ý: Bài trắc nghiệm này chỉ mang tính chất tham khảo nhằm giúp bạn hiểu thêm về bản thân. Kết quả không thay thế cho chẩn đoán hoặc tư vấn chuyên môn từ các chuyên gia tâm lý, y tế hoặc hướng nghiệp.',
      quizType: QuizType.MBTI,
      timeLimitMins: 30,
      totalQuestions: 70,
      isPublished: true,
    },
  });

  console.log(`📝 Đã tạo quiz: "${quizMBTI.title}"`);

  // 4. Tạo Questions + Answers
  let questionCount = 0;
  for (const q of mbtiQuestions) {
    await prisma.question.create({
      data: {
        quizId: quizMBTI.id,
        content: q.content,
        orderNumber: questionCount + 1,
        questionType: QuestionType.SINGLE,
        answers: {
          create: q.answers.map((a) => ({
            content: a.content,
            mbtiDimension: q.dimension,
            mbtiPole: a.pole,
            isCorrect: false,
            scoreValue: 0,
          })),
        },
      },
    });
    questionCount++;
  }

  console.log(`❓ Đã tạo ${questionCount} câu hỏi + ${questionCount * 2} đáp án`);

  // 5. Tạo CPA Campaign mẫu
  const campaign = await prisma.cpaCampaign.create({
    data: {
      name: 'Demo Campaign',
      searchKeyword: 'maison grand',
      targetUrl: 'https://example.com',
      targetPreview: {
        title: 'Dự Án Maison Grand Phú Mỹ - Căn Hộ Gần Sân Bay',
        description:
          'Maison Grand là dự án tiên phong về căn hộ cao tầng tại Phú Mỹ, hiện đã cất nóc 25/25 tầng và đang hoàn thiện.',
        image: 'https://via.placeholder.com/300x200',
      },
      unlockCode: '12345',
      isActive: true,
      revenuePerClick: 3000,
    },
  });

  console.log(`💰 Đã tạo CPA campaign: "${campaign.name}" (code: ${campaign.unlockCode})`);

  // 6. Tổng kết
  const stats = {
    categories: await prisma.category.count(),
    quizzes: await prisma.quiz.count(),
    questions: await prisma.question.count(),
    answers: await prisma.answer.count(),
    campaigns: await prisma.cpaCampaign.count(),
  };

  console.log('\n✅ SEED HOÀN THÀNH!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📂 Categories:  ${stats.categories}`);
  console.log(`📝 Quizzes:     ${stats.quizzes}`);
  console.log(`❓ Questions:   ${stats.questions}`);
  console.log(`💡 Answers:     ${stats.answers}`);
  console.log(`💰 Campaigns:   ${stats.campaigns}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
