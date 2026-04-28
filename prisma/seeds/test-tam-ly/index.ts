import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Bài Test Trầm Cảm PHQ-9 Mở Rộng
  // =============================================
  {
    categorySlug: 'test-tam-ly',
    title: 'Bài Test Trầm Cảm PHQ-9 Mở Rộng',
    slug: 'test-tram-cam-phq9',
    description:
      'Bài test đánh giá mức độ trầm cảm dựa trên thang đo PHQ-9 mở rộng với 20 câu hỏi về triệu chứng trầm cảm, tâm trạng, giấc ngủ, năng lượng và tự đánh giá bản thân.',
    instruction:
      'Hãy đọc kỹ từng câu hỏi và chọn mức độ phù hợp nhất với trải nghiệm của bạn trong 2 tuần qua. Không có câu trả lời đúng hay sai, hãy trả lời thật lòng.',
    quizType: QuizType.SCORED,
    timeLimitMins: 15,
    questions: [
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy ít hứng thú hoặc ít niềm vui khi làm các việc thường ngày không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy buồn bã, chán nản hoặc tuyệt vọng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có gặp khó khăn trong việc đi vào giấc ngủ, ngủ không sâu hoặc ngủ quá nhiều không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy mệt mỏi hoặc thiếu năng lượng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có ăn không ngon miệng hoặc ăn quá nhiều không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy tồi tệ về bản thân, cho rằng mình là người thất bại hoặc đã khiến gia đình thất vọng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có gặp khó khăn trong việc tập trung vào công việc như đọc sách hoặc xem tivi không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có di chuyển hoặc nói chuyện chậm chạp đến mức người khác nhận ra, hoặc ngược lại bồn chồn không yên không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy mình không xứng đáng được yêu thương hoặc quan tâm không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy cuộc sống không có ý nghĩa hoặc không đáng sống không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có thường xuyên khóc mà không rõ lý do không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy cô đơn ngay cả khi ở bên cạnh người khác không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có mất hứng thú với những sở thích hoặc hoạt động mà trước đây bạn yêu thích không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy tương lai u ám và không có hy vọng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy dễ cáu gắt hoặc bực bội với những chuyện nhỏ nhặt không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy bản thân là gánh nặng cho người khác không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có gặp khó khăn trong việc đưa ra quyết định, kể cả những quyết định đơn giản không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy cơ thể nặng nề, uể oải không muốn làm gì không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có tránh giao tiếp xã hội hoặc không muốn gặp gỡ bạn bè, người thân không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy mình vô dụng hoặc không có giá trị không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Bài Test Lo Âu GAD-7 Mở Rộng
  // =============================================
  {
    categorySlug: 'test-tam-ly',
    title: 'Bài Test Lo Âu GAD-7 Mở Rộng',
    slug: 'test-lo-au-gad7',
    description:
      'Bài test đánh giá mức độ lo âu dựa trên thang đo GAD-7 mở rộng với 20 câu hỏi về lo lắng, căng thẳng, bồn chồn và khó thư giãn.',
    instruction:
      'Hãy đọc kỹ từng câu hỏi và chọn mức độ phù hợp nhất với trải nghiệm của bạn trong 2 tuần qua. Không có câu trả lời đúng hay sai, hãy trả lời thật lòng.',
    quizType: QuizType.SCORED,
    timeLimitMins: 15,
    questions: [
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy lo lắng, bồn chồn hoặc căng thẳng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có không thể ngừng lo lắng hoặc kiểm soát sự lo lắng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có lo lắng quá nhiều về nhiều thứ khác nhau không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có gặp khó khăn trong việc thư giãn không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có bồn chồn đến mức khó ngồi yên không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có dễ bực mình hoặc cáu kỉnh không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy sợ hãi như thể điều gì đó tồi tệ sắp xảy ra không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có bị tim đập nhanh, đổ mồ hôi hoặc run rẩy khi lo lắng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có gặp khó khăn trong việc ngủ vì lo lắng quá nhiều không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy căng cơ, đau đầu hoặc đau nhức cơ thể do căng thẳng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có tránh né các tình huống xã hội vì lo lắng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy khó tập trung vì đầu óc luôn bận rộn với lo lắng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có lo lắng về sức khỏe của bản thân hoặc người thân một cách quá mức không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy mất kiểm soát về cuộc sống của mình không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có gặp khó khăn trong việc đưa ra quyết định vì sợ sai lầm không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy hồi hộp hoặc hoảng sợ đột ngột mà không rõ lý do không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có lo lắng về tài chính, công việc hoặc tương lai một cách quá mức không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy khó thở hoặc tức ngực khi lo lắng không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy luôn phải cảnh giác hoặc đề phòng nguy hiểm không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong 2 tuần qua, bạn có cảm thấy lo lắng ảnh hưởng đến khả năng làm việc và các mối quan hệ của bạn không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 3: Bài Test Stress PSS-10
  // =============================================
  {
    categorySlug: 'test-tam-ly',
    title: 'Bài Test Stress PSS-10',
    slug: 'test-stress-pss10',
    description:
      'Bài test đánh giá mức độ stress dựa trên thang đo PSS-10 với 20 câu hỏi về mức độ stress, áp lực cuộc sống và khả năng đối phó với căng thẳng.',
    instruction:
      'Hãy đọc kỹ từng câu hỏi và chọn mức độ phù hợp nhất với trải nghiệm của bạn trong tháng qua. Không có câu trả lời đúng hay sai, hãy trả lời thật lòng.',
    quizType: QuizType.SCORED,
    timeLimitMins: 15,
    questions: [
      {
        content: 'Trong tháng qua, bạn có thường xuyên cảm thấy bực bội vì những điều bất ngờ xảy ra không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy không thể kiểm soát những điều quan trọng trong cuộc sống không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy căng thẳng và áp lực không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy tự tin về khả năng xử lý các vấn đề cá nhân không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy mọi thứ đang diễn ra theo ý mình không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy không thể đối phó với tất cả những việc phải làm không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có thể kiểm soát sự bực tức trong cuộc sống không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy mình đang kiểm soát tốt mọi thứ không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có tức giận vì những điều nằm ngoài tầm kiểm soát của mình không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy khó khăn chồng chất đến mức không thể vượt qua không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy áp lực từ công việc hoặc học tập ảnh hưởng đến sức khỏe không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy thời gian không đủ để hoàn thành mọi việc không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có gặp khó khăn trong việc cân bằng giữa công việc và cuộc sống cá nhân không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy kiệt sức về mặt tinh thần không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy các mối quan hệ xã hội gây thêm áp lực cho bạn không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có sử dụng các phương pháp không lành mạnh để giải tỏa stress (ăn quá nhiều, uống rượu, v.v.) không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy mất động lực để làm việc hoặc học tập không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có gặp các triệu chứng thể chất do stress như đau đầu, đau dạ dày hoặc mất ngủ không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy bị cô lập hoặc thiếu sự hỗ trợ từ người xung quanh không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
      {
        content: 'Trong tháng qua, bạn có cảm thấy cuộc sống quá tải và muốn bỏ cuộc không?',
        answers: [
          { content: 'Không hề', isCorrect: false },
          { content: 'Vài ngày', isCorrect: false },
          { content: 'Hơn một nửa số ngày', isCorrect: false },
          { content: 'Gần như mỗi ngày', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Bài Test EQ - Trí Tuệ Cảm Xúc
  // =============================================
  {
    categorySlug: 'test-tam-ly',
    title: 'Bài Test EQ - Trí Tuệ Cảm Xúc',
    slug: 'test-eq-tri-tue-cam-xuc',
    description:
      'Bài test đánh giá trí tuệ cảm xúc (EQ) với 20 câu hỏi tình huống về nhận biết cảm xúc, đồng cảm, quản lý cảm xúc và kỹ năng xã hội.',
    instruction:
      'Hãy đọc kỹ từng tình huống và chọn cách phản ứng mà bạn cho là phù hợp nhất. Mỗi câu có một đáp án tốt nhất thể hiện trí tuệ cảm xúc cao.',
    quizType: QuizType.SCORED,
    timeLimitMins: 15,
    questions: [
      {
        content: 'Bạn nhận thấy đồng nghiệp có vẻ buồn bã và ít nói hơn bình thường. Bạn sẽ làm gì?',
        answers: [
          { content: 'Không quan tâm vì đó là chuyện riêng của họ', isCorrect: false },
          { content: 'Hỏi thăm nhẹ nhàng và lắng nghe nếu họ muốn chia sẻ', isCorrect: true },
          { content: 'Kể chuyện vui để họ quên đi nỗi buồn', isCorrect: false },
          { content: 'Nói với mọi người rằng đồng nghiệp đang buồn để cùng an ủi', isCorrect: false },
        ],
      },
      {
        content: 'Trong cuộc họp, ý kiến của bạn bị sếp phản bác gay gắt trước mặt mọi người. Bạn phản ứng thế nào?',
        answers: [
          { content: 'Tranh cãi lại ngay lập tức để bảo vệ quan điểm', isCorrect: false },
          { content: 'Im lặng và cảm thấy tức giận, sau đó nói xấu sếp', isCorrect: false },
          { content: 'Giữ bình tĩnh, lắng nghe phản hồi và trao đổi riêng với sếp sau cuộc họp', isCorrect: true },
          { content: 'Đồng ý ngay với sếp dù không thực sự đồng tình', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang rất tức giận với một người bạn vì họ đã thất hứa. Cách xử lý nào thể hiện EQ cao nhất?',
        answers: [
          { content: 'Gọi điện ngay và mắng họ một trận', isCorrect: false },
          { content: 'Cắt đứt quan hệ mà không giải thích', isCorrect: false },
          { content: 'Đợi bình tĩnh lại rồi nói chuyện thẳng thắn về cảm xúc của mình', isCorrect: true },
          { content: 'Giả vờ không có chuyện gì xảy ra', isCorrect: false },
        ],
      },
      {
        content: 'Bạn nhận được phản hồi tiêu cực về công việc của mình. Phản ứng nào thể hiện EQ cao?',
        answers: [
          { content: 'Bỏ qua phản hồi vì cho rằng người đó không hiểu', isCorrect: false },
          { content: 'Cảm thấy tổn thương và muốn bỏ việc', isCorrect: false },
          { content: 'Lắng nghe, cảm ơn phản hồi và tìm cách cải thiện', isCorrect: true },
          { content: 'Phản hồi lại bằng cách chỉ ra lỗi của người đó', isCorrect: false },
        ],
      },
      {
        content: 'Trong nhóm làm việc, hai thành viên xảy ra mâu thuẫn gay gắt. Là trưởng nhóm, bạn sẽ làm gì?',
        answers: [
          { content: 'Để họ tự giải quyết vì không muốn can thiệp', isCorrect: false },
          { content: 'Lắng nghe cả hai bên, giúp họ hiểu quan điểm của nhau và tìm giải pháp chung', isCorrect: true },
          { content: 'Đứng về phía người mà bạn cho là đúng', isCorrect: false },
          { content: 'Phạt cả hai vì gây mất đoàn kết', isCorrect: false },
        ],
      },
      {
        content: 'Bạn cảm thấy ghen tị khi đồng nghiệp được thăng chức. Cách xử lý nào thể hiện EQ cao?',
        answers: [
          { content: 'Nói xấu đồng nghiệp với người khác', isCorrect: false },
          { content: 'Thừa nhận cảm xúc ghen tị, chúc mừng họ và tự đặt mục tiêu phát triển cho mình', isCorrect: true },
          { content: 'Yêu cầu sếp giải thích tại sao mình không được chọn', isCorrect: false },
          { content: 'Tỏ ra không quan tâm nhưng bên trong rất khó chịu', isCorrect: false },
        ],
      },
      {
        content: 'Bạn phát hiện mình đã mắc một sai lầm nghiêm trọng trong công việc. Bạn sẽ làm gì?',
        answers: [
          { content: 'Che giấu sai lầm và hy vọng không ai phát hiện', isCorrect: false },
          { content: 'Đổ lỗi cho hoàn cảnh hoặc người khác', isCorrect: false },
          { content: 'Thừa nhận sai lầm, báo cáo ngay và đề xuất cách khắc phục', isCorrect: true },
          { content: 'Tự trách bản thân quá mức và mất tự tin', isCorrect: false },
        ],
      },
      {
        content: 'Một người bạn thân đang kể về vấn đề của họ nhưng bạn không đồng tình với cách họ xử lý. Bạn sẽ làm gì?',
        answers: [
          { content: 'Ngắt lời và nói ngay rằng họ sai', isCorrect: false },
          { content: 'Lắng nghe hết, thể hiện sự đồng cảm rồi nhẹ nhàng chia sẻ góc nhìn khác', isCorrect: true },
          { content: 'Đồng ý với mọi thứ họ nói dù không đồng tình', isCorrect: false },
          { content: 'Chuyển sang chủ đề khác để tránh xung đột', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang trải qua một ngày tồi tệ và cảm thấy rất tiêu cực. Cách nào giúp quản lý cảm xúc tốt nhất?',
        answers: [
          { content: 'Trút giận lên người xung quanh', isCorrect: false },
          { content: 'Nhận biết cảm xúc, cho phép mình buồn và tìm hoạt động tích cực để cân bằng', isCorrect: true },
          { content: 'Ép bản thân phải vui vẻ ngay lập tức', isCorrect: false },
          { content: 'Cô lập bản thân và không nói chuyện với ai', isCorrect: false },
        ],
      },
      {
        content: 'Trong buổi thuyết trình, bạn nhận thấy khán giả có vẻ chán nản. Bạn sẽ làm gì?',
        answers: [
          { content: 'Tiếp tục theo kế hoạch và bỏ qua phản ứng của khán giả', isCorrect: false },
          { content: 'Dừng lại và trách khán giả không chú ý', isCorrect: false },
          { content: 'Điều chỉnh cách trình bày, thêm tương tác hoặc câu hỏi để thu hút sự chú ý', isCorrect: true },
          { content: 'Kết thúc sớm vì cảm thấy xấu hổ', isCorrect: false },
        ],
      },
      {
        content: 'Bạn bè rủ bạn đi chơi nhưng bạn đang rất mệt và cần nghỉ ngơi. Bạn sẽ phản ứng thế nào?',
        answers: [
          { content: 'Miễn cưỡng đi vì sợ bạn bè giận', isCorrect: false },
          { content: 'Từ chối một cách thô lỗ', isCorrect: false },
          { content: 'Thành thật chia sẻ rằng mình cần nghỉ ngơi và hẹn dịp khác', isCorrect: true },
          { content: 'Nói dối là bận việc khác', isCorrect: false },
        ],
      },
      {
        content: 'Bạn thấy một nhân viên mới đang gặp khó khăn và có vẻ lạc lõng. Bạn sẽ làm gì?',
        answers: [
          { content: 'Không quan tâm vì đó không phải trách nhiệm của mình', isCorrect: false },
          { content: 'Chủ động đến hỏi thăm, hướng dẫn và giúp họ hòa nhập', isCorrect: true },
          { content: 'Báo với sếp để sếp xử lý', isCorrect: false },
          { content: 'Nói với đồng nghiệp khác về sự vụng về của người mới', isCorrect: false },
        ],
      },
      {
        content: 'Bạn và đối tác có bất đồng về cách chi tiêu tài chính. Cách giải quyết nào thể hiện EQ cao?',
        answers: [
          { content: 'Áp đặt quan điểm của mình vì cho rằng mình đúng', isCorrect: false },
          { content: 'Nhượng bộ hoàn toàn để tránh xung đột', isCorrect: false },
          { content: 'Cùng ngồi lại, lắng nghe nhu cầu của nhau và tìm phương án cân bằng', isCorrect: true },
          { content: 'Tách riêng tài chính để không phải bàn bạc', isCorrect: false },
        ],
      },
      {
        content: 'Bạn nhận ra mình đang có thành kiến với một đồng nghiệp mà không rõ lý do. Bạn sẽ làm gì?',
        answers: [
          { content: 'Tiếp tục giữ khoảng cách với họ', isCorrect: false },
          { content: 'Tự suy ngẫm về nguồn gốc thành kiến và cố gắng tìm hiểu họ hơn', isCorrect: true },
          { content: 'Nói với người khác về cảm giác của mình', isCorrect: false },
          { content: 'Phớt lờ cảm giác đó và giả vờ bình thường', isCorrect: false },
        ],
      },
      {
        content: 'Con bạn (hoặc em nhỏ) đang khóc vì bị bạn bè trêu chọc ở trường. Bạn sẽ phản ứng thế nào?',
        answers: [
          { content: 'Nói rằng đó chỉ là chuyện nhỏ và không cần khóc', isCorrect: false },
          { content: 'Lắng nghe, công nhận cảm xúc của trẻ và cùng tìm cách giải quyết', isCorrect: true },
          { content: 'Đến trường mắng những đứa trẻ đã trêu chọc', isCorrect: false },
          { content: 'Dạy trẻ đánh lại để tự bảo vệ mình', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang làm việc nhóm và một thành viên liên tục không hoàn thành phần việc được giao. Bạn sẽ xử lý thế nào?',
        answers: [
          { content: 'Làm luôn phần việc của họ mà không nói gì', isCorrect: false },
          { content: 'Phàn nàn với các thành viên khác sau lưng họ', isCorrect: false },
          { content: 'Nói chuyện riêng, tìm hiểu nguyên nhân và cùng tìm giải pháp hỗ trợ', isCorrect: true },
          { content: 'Báo cáo ngay với giáo viên hoặc quản lý', isCorrect: false },
        ],
      },
      {
        content: 'Bạn vừa thất bại trong một dự án quan trọng. Cách nào giúp bạn phục hồi tốt nhất?',
        answers: [
          { content: 'Tự trách bản thân liên tục và mất ngủ nhiều đêm', isCorrect: false },
          { content: 'Đổ lỗi cho đồng đội hoặc hoàn cảnh', isCorrect: false },
          { content: 'Cho phép mình buồn, rút kinh nghiệm và lập kế hoạch cho bước tiếp theo', isCorrect: true },
          { content: 'Giả vờ không quan tâm và chuyển sang việc khác ngay', isCorrect: false },
        ],
      },
      {
        content: 'Bạn nhận thấy mình thường xuyên so sánh bản thân với người khác trên mạng xã hội. Cách xử lý nào thể hiện EQ cao?',
        answers: [
          { content: 'Tiếp tục lướt mạng xã hội và cảm thấy tệ hơn', isCorrect: false },
          { content: 'Nhận biết cảm xúc tiêu cực, giảm thời gian dùng mạng xã hội và tập trung vào mục tiêu cá nhân', isCorrect: true },
          { content: 'Đăng bài khoe khoang để cảm thấy tốt hơn', isCorrect: false },
          { content: 'Xóa tất cả tài khoản mạng xã hội ngay lập tức', isCorrect: false },
        ],
      },
      {
        content: 'Trong cuộc trò chuyện, bạn nhận ra mình đã vô tình nói điều gì đó làm tổn thương người khác. Bạn sẽ làm gì?',
        answers: [
          { content: 'Giả vờ không nhận ra và tiếp tục nói chuyện', isCorrect: false },
          { content: 'Xin lỗi chân thành ngay lập tức và hỏi xem họ có ổn không', isCorrect: true },
          { content: 'Biện minh rằng mình không có ý xấu', isCorrect: false },
          { content: 'Đổ lỗi cho họ quá nhạy cảm', isCorrect: false },
        ],
      },
      {
        content: 'Bạn cảm thấy quá tải với nhiều cảm xúc tiêu cực cùng lúc. Cách quản lý nào hiệu quả nhất?',
        answers: [
          { content: 'Kìm nén tất cả cảm xúc và tiếp tục làm việc', isCorrect: false },
          { content: 'Bùng nổ cảm xúc với người gần nhất', isCorrect: false },
          { content: 'Dành thời gian nhận diện từng cảm xúc, viết nhật ký hoặc nói chuyện với người tin tưởng', isCorrect: true },
          { content: 'Uống rượu hoặc ăn nhiều để quên đi', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Bài Test Tự Tin - Self Esteem
  // =============================================
  {
    categorySlug: 'test-tam-ly',
    title: 'Bài Test Tự Tin - Self Esteem',
    slug: 'test-tu-tin-self-esteem',
    description:
      'Bài test đánh giá lòng tự trọng và sự tự tin với 20 câu hỏi tình huống về lòng tự trọng, sự tự tin và hình ảnh bản thân.',
    instruction:
      'Hãy đọc kỹ từng tình huống và chọn cách phản ứng mà bạn cho là phù hợp nhất. Mỗi câu có một đáp án tốt nhất thể hiện lòng tự trọng lành mạnh.',
    quizType: QuizType.SCORED,
    timeLimitMins: 15,
    questions: [
      {
        content: 'Bạn được giao một nhiệm vụ mới mà bạn chưa từng làm trước đây. Bạn sẽ phản ứng thế nào?',
        answers: [
          { content: 'Từ chối ngay vì sợ mình không làm được', isCorrect: false },
          { content: 'Nhận nhiệm vụ, tìm hiểu kỹ và xem đây là cơ hội học hỏi', isCorrect: true },
          { content: 'Nhận nhưng lo lắng đến mất ngủ', isCorrect: false },
          { content: 'Nhờ người khác làm hộ', isCorrect: false },
        ],
      },
      {
        content: 'Khi nhìn vào gương, bạn thường có suy nghĩ gì về bản thân?',
        answers: [
          { content: 'Luôn tìm ra khuyết điểm và cảm thấy không hài lòng', isCorrect: false },
          { content: 'Chấp nhận bản thân với cả ưu và nhược điểm', isCorrect: true },
          { content: 'So sánh mình với người nổi tiếng và cảm thấy thua kém', isCorrect: false },
          { content: 'Tránh nhìn gương vì không muốn đối diện với hình ảnh bản thân', isCorrect: false },
        ],
      },
      {
        content: 'Bạn mắc lỗi trong công việc và bị nhắc nhở. Bạn sẽ nghĩ gì?',
        answers: [
          { content: 'Mình thật vô dụng, không làm được gì cả', isCorrect: false },
          { content: 'Ai cũng có lúc sai, mình sẽ rút kinh nghiệm và làm tốt hơn', isCorrect: true },
          { content: 'Chắc mọi người đang đánh giá thấp mình', isCorrect: false },
          { content: 'Mình không xứng đáng với vị trí này', isCorrect: false },
        ],
      },
      {
        content: 'Một người bạn liên tục nhờ vả bạn những việc không hợp lý. Bạn sẽ làm gì?',
        answers: [
          { content: 'Luôn đồng ý vì sợ mất bạn', isCorrect: false },
          { content: 'Từ chối một cách lịch sự và giải thích lý do', isCorrect: true },
          { content: 'Đồng ý nhưng sau đó phàn nàn với người khác', isCorrect: false },
          { content: 'Cắt đứt quan hệ mà không giải thích', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang ở trong một nhóm bạn mới và mọi người đang thảo luận sôi nổi. Bạn sẽ làm gì?',
        answers: [
          { content: 'Im lặng vì sợ nói sai hoặc bị đánh giá', isCorrect: false },
          { content: 'Tự tin tham gia thảo luận và chia sẻ ý kiến của mình', isCorrect: true },
          { content: 'Chỉ nói khi được hỏi trực tiếp', isCorrect: false },
          { content: 'Rời khỏi nhóm vì cảm thấy không thuộc về nơi đây', isCorrect: false },
        ],
      },
      {
        content: 'Bạn nhận được lời khen từ sếp về kết quả công việc. Bạn phản ứng thế nào?',
        answers: [
          { content: 'Phủ nhận và nói rằng mình chỉ may mắn thôi', isCorrect: false },
          { content: 'Cảm ơn và ghi nhận nỗ lực của bản thân', isCorrect: true },
          { content: 'Cảm thấy ngại ngùng và muốn chuyển chủ đề', isCorrect: false },
          { content: 'Nghĩ rằng sếp chỉ nói xã giao', isCorrect: false },
        ],
      },
      {
        content: 'Bạn thấy mọi người xung quanh dường như thành công hơn mình. Bạn sẽ nghĩ gì?',
        answers: [
          { content: 'Mình là người thất bại nhất', isCorrect: false },
          { content: 'Mỗi người có hành trình riêng, mình sẽ tập trung vào mục tiêu của mình', isCorrect: true },
          { content: 'Cuộc sống thật không công bằng', isCorrect: false },
          { content: 'Mình không bao giờ có thể thành công như họ', isCorrect: false },
        ],
      },
      {
        content: 'Bạn muốn thay đổi kiểu tóc hoặc phong cách ăn mặc nhưng sợ người khác nhận xét. Bạn sẽ làm gì?',
        answers: [
          { content: 'Không thay đổi gì vì sợ bị chê cười', isCorrect: false },
          { content: 'Thay đổi theo ý thích vì đó là quyền tự do thể hiện bản thân', isCorrect: true },
          { content: 'Hỏi ý kiến tất cả mọi người trước khi quyết định', isCorrect: false },
          { content: 'Chỉ thay đổi khi có người khuyến khích', isCorrect: false },
        ],
      },
      {
        content: 'Trong cuộc phỏng vấn xin việc, bạn được hỏi về điểm mạnh của mình. Bạn sẽ trả lời thế nào?',
        answers: [
          { content: 'Nói rằng mình không có điểm mạnh gì đặc biệt', isCorrect: false },
          { content: 'Tự tin chia sẻ những điểm mạnh thực sự kèm ví dụ cụ thể', isCorrect: true },
          { content: 'Phóng đại quá mức để gây ấn tượng', isCorrect: false },
          { content: 'Cảm thấy lúng túng và không biết nói gì', isCorrect: false },
        ],
      },
      {
        content: 'Bạn bị từ chối khi ứng tuyển vào vị trí mong muốn. Bạn sẽ phản ứng thế nào?',
        answers: [
          { content: 'Cho rằng mình không đủ giỏi và từ bỏ', isCorrect: false },
          { content: 'Xem đây là trải nghiệm, rút kinh nghiệm và tiếp tục ứng tuyển nơi khác', isCorrect: true },
          { content: 'Tức giận và cho rằng nhà tuyển dụng không công bằng', isCorrect: false },
          { content: 'Không bao giờ dám ứng tuyển lại', isCorrect: false },
        ],
      },
      {
        content: 'Bạn phát hiện mình có quan điểm khác với đa số mọi người trong nhóm. Bạn sẽ làm gì?',
        answers: [
          { content: 'Thay đổi quan điểm để phù hợp với số đông', isCorrect: false },
          { content: 'Tôn trọng ý kiến khác nhưng vẫn tự tin bày tỏ quan điểm của mình', isCorrect: true },
          { content: 'Im lặng vì sợ bị cô lập', isCorrect: false },
          { content: 'Cố gắng thuyết phục mọi người phải đồng ý với mình', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang học một kỹ năng mới và tiến bộ chậm hơn người khác. Bạn sẽ nghĩ gì?',
        answers: [
          { content: 'Mình quá ngu dốt, không thể học được', isCorrect: false },
          { content: 'Mỗi người có tốc độ học khác nhau, mình sẽ kiên trì và tiến bộ dần', isCorrect: true },
          { content: 'Bỏ cuộc vì không muốn thua kém người khác', isCorrect: false },
          { content: 'Đổ lỗi cho phương pháp giảng dạy không tốt', isCorrect: false },
        ],
      },
      {
        content: 'Ai đó chỉ trích ngoại hình của bạn. Bạn sẽ phản ứng thế nào?',
        answers: [
          { content: 'Cảm thấy tổn thương sâu sắc và muốn thay đổi bản thân', isCorrect: false },
          { content: 'Hiểu rằng giá trị bản thân không phụ thuộc vào nhận xét của người khác', isCorrect: true },
          { content: 'Chỉ trích lại ngoại hình của họ', isCorrect: false },
          { content: 'Tránh gặp mặt người đó từ nay về sau', isCorrect: false },
        ],
      },
      {
        content: 'Bạn được mời phát biểu trước đám đông. Suy nghĩ đầu tiên của bạn là gì?',
        answers: [
          { content: 'Mình sẽ làm trò cười cho mọi người', isCorrect: false },
          { content: 'Đây là cơ hội tốt, mình sẽ chuẩn bị kỹ và làm hết sức', isCorrect: true },
          { content: 'Từ chối ngay vì mình không đủ giỏi', isCorrect: false },
          { content: 'Lo lắng đến mức không thể suy nghĩ gì khác', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang trong mối quan hệ mà đối phương thường xuyên hạ thấp bạn. Bạn sẽ làm gì?',
        answers: [
          { content: 'Chấp nhận vì nghĩ rằng mình không xứng đáng được đối xử tốt hơn', isCorrect: false },
          { content: 'Nhận ra giá trị bản thân, đặt ranh giới rõ ràng hoặc rời khỏi mối quan hệ độc hại', isCorrect: true },
          { content: 'Cố gắng thay đổi bản thân để làm hài lòng đối phương', isCorrect: false },
          { content: 'Hạ thấp đối phương lại để cân bằng', isCorrect: false },
        ],
      },
      {
        content: 'Bạn hoàn thành một dự án lớn thành công. Bạn sẽ nghĩ gì về bản thân?',
        answers: [
          { content: 'Chắc chỉ là may mắn thôi, lần sau chưa chắc được', isCorrect: false },
          { content: 'Mình đã nỗ lực và xứng đáng với thành quả này', isCorrect: true },
          { content: 'Thành công này không có gì đặc biệt', isCorrect: false },
          { content: 'Mọi người chắc nghĩ mình khoe khoang nếu vui mừng', isCorrect: false },
        ],
      },
      {
        content: 'Bạn muốn bắt đầu một dự án cá nhân nhưng chưa ai ủng hộ. Bạn sẽ làm gì?',
        answers: [
          { content: 'Từ bỏ ý tưởng vì không có ai tin tưởng', isCorrect: false },
          { content: 'Tin vào bản thân, lập kế hoạch cụ thể và bắt đầu thực hiện', isCorrect: true },
          { content: 'Chờ đợi cho đến khi có người ủng hộ mới bắt đầu', isCorrect: false },
          { content: 'Thay đổi ý tưởng theo gợi ý của người khác dù không thích', isCorrect: false },
        ],
      },
      {
        content: 'Bạn nhận ra mình có một thói quen xấu cần thay đổi. Bạn sẽ tiếp cận vấn đề thế nào?',
        answers: [
          { content: 'Tự trách bản thân vì yếu đuối', isCorrect: false },
          { content: 'Chấp nhận rằng thay đổi cần thời gian, đặt mục tiêu nhỏ và kiên trì thực hiện', isCorrect: true },
          { content: 'Bỏ qua vì nghĩ rằng mình không thể thay đổi', isCorrect: false },
          { content: 'Thay đổi ngay lập tức và tự phạt nếu tái phạm', isCorrect: false },
        ],
      },
      {
        content: 'Bạn đang ở trong một cuộc tranh luận và nhận ra mình sai. Bạn sẽ làm gì?',
        answers: [
          { content: 'Tiếp tục bảo vệ quan điểm sai vì sợ mất mặt', isCorrect: false },
          { content: 'Thừa nhận mình sai một cách thoải mái vì ai cũng có thể sai', isCorrect: true },
          { content: 'Chuyển sang chủ đề khác để tránh thừa nhận', isCorrect: false },
          { content: 'Cảm thấy xấu hổ và không muốn nói gì nữa', isCorrect: false },
        ],
      },
      {
        content: 'Bạn nhìn lại cuộc sống của mình và cảm thấy chưa đạt được nhiều thành tựu. Bạn sẽ nghĩ gì?',
        answers: [
          { content: 'Mình là người thất bại hoàn toàn', isCorrect: false },
          { content: 'Ghi nhận những gì đã làm được, đặt mục tiêu mới và tiếp tục cố gắng', isCorrect: true },
          { content: 'So sánh với người khác và cảm thấy thua kém', isCorrect: false },
          { content: 'Chấp nhận rằng mình không có khả năng thành công', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
