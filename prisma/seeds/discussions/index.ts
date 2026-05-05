import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedDiscussions() {
  console.log('🌱 Seeding discussions...');

  // Clear existing
  await prisma.comment.deleteMany();
  await prisma.discussion.deleteMany();

  const discussions = [
    {
      title: 'MBTI là gì? Tổng quan về 16 nhóm tính cách',
      slug: 'mbti-la-gi',
      tag: 'MBTI',
      authorName: 'TracNghiemNhanh',
      excerpt:
        'Tìm hiểu về hệ thống phân loại tính cách MBTI, lịch sử hình thành và ý nghĩa của 16 nhóm tính cách.',
      content: `MBTI (Myers-Briggs Type Indicator) là công cụ đánh giá tính cách phổ biến nhất thế giới, được sử dụng bởi hơn 2 triệu người mỗi năm.

MBTI được phát triển bởi Katharine Cook Briggs và con gái bà, Isabel Briggs Myers, dựa trên lý thuyết về các kiểu tâm lý của nhà tâm lý học nổi tiếng Carl Gustav Jung.

## 4 chiều tính cách

- **E / I** — Hướng ngoại vs Hướng nội: Bạn lấy năng lượng từ đâu?
- **S / N** — Giác quan vs Trực giác: Bạn tiếp nhận thông tin như thế nào?
- **T / F** — Lý trí vs Cảm xúc: Bạn đưa ra quyết định dựa trên gì?
- **J / P** — Nguyên tắc vs Linh hoạt: Bạn thích cuộc sống thế nào?

## 16 nhóm tính cách

Mỗi tổ hợp 4 chữ cái tạo thành 1 trong 16 nhóm tính cách: INTJ, INTP, ENTJ, ENTP, INFJ, INFP, ENFJ, ENFP, ISTJ, ISFJ, ESTJ, ESFJ, ISTP, ISFP, ESTP, ESFP.

Bạn thuộc nhóm nào? Hãy chia sẻ kết quả của bạn ở phần bình luận bên dưới!`,
    },
    {
      title: 'Cách làm bài test MBTI chính xác nhất',
      slug: 'cach-lam-test-mbti',
      tag: 'Hướng dẫn',
      authorName: 'TracNghiemNhanh',
      excerpt:
        'Hướng dẫn chi tiết cách trả lời các câu hỏi MBTI để nhận kết quả phản ánh đúng tính cách.',
      content: `Kết quả bài test MBTI phụ thuộc rất nhiều vào cách bạn trả lời. Dưới đây là hướng dẫn chi tiết.

## Nên làm

✅ Trả lời theo bản năng đầu tiên — đừng suy nghĩ quá lâu.
✅ Chọn câu trả lời phản ánh con người thật sự, không phải con người bạn muốn trở thành.
✅ Làm bài trong trạng thái thoải mái, không bị áp lực.
✅ Hoàn thành tất cả câu hỏi — đừng bỏ sót câu nào.

## Không nên

❌ Đừng chọn đáp án mà bạn nghĩ "xã hội mong đợi".
❌ Đừng so sánh bản thân với người khác khi trả lời.
❌ Đừng thay đổi câu trả lời quá nhiều lần.
❌ Đừng cố "hack" bài test để ra kết quả mong muốn.

## Mẹo hay

- **Thời gian lý tưởng**: 15-20 phút mỗi bài test.
- **Làm lại sau 6 tháng**: Tính cách có thể thay đổi theo thời gian.
- **Thử nhiều bài test**: TracNghiemNhanh có nhiều bài MBTI với các góc nhìn khác nhau.

Bạn có mẹo nào khác không? Chia sẻ ở phần bình luận nhé!`,
    },
    {
      title: 'So sánh MBTI và DISC: Nên dùng bài test nào?',
      slug: 'so-sanh-mbti-disc',
      tag: 'So sánh',
      authorName: 'TracNghiemNhanh',
      excerpt:
        'Phân tích sự khác biệt giữa hai hệ thống đánh giá tính cách phổ biến nhất hiện nay.',
      content: `MBTI và DISC là hai hệ thống đánh giá tính cách phổ biến nhất, nhưng phục vụ mục đích rất khác nhau.

## MBTI — Hiểu tính cách bẩm sinh

MBTI tập trung vào tính cách bẩm sinh — cách bạn nhận thức thế giới và đưa ra quyết định. Gồm 16 nhóm tính cách dựa trên 4 chiều: E/I, S/N, T/F, J/P.

**Dùng MBTI khi**: Muốn hiểu sâu bản thân, tìm kiếm định hướng nghề nghiệp, cải thiện mối quan hệ.

## DISC — Hiểu hành vi quan sát được

DISC tập trung vào hành vi — cách bạn hành xử trong các tình huống cụ thể. Gồm 4 nhóm: Dominance (D), Influence (I), Steadiness (S), Conscientiousness (C).

**Dùng DISC khi**: Cải thiện giao tiếp công việc, xây dựng đội nhóm, đánh giá nhanh.

## Kết luận

Không có bài test nào "tốt hơn" — mỗi công cụ phục vụ mục đích khác nhau. Lý tưởng nhất là sử dụng cả hai!

Bạn thích MBTI hay DISC hơn? Chia sẻ ý kiến ở phần bình luận!`,
    },
  ];

  for (const d of discussions) {
    await prisma.discussion.create({ data: d });
  }

  console.log(`✅ Seeded ${discussions.length} discussions`);
}

// Run directly
seedDiscussions()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
