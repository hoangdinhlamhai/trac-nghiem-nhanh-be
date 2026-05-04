import { seedQuizList, prisma } from './seed-runner';
import { seedMBTIQuizList, prisma as mbtiPrisma } from './test-mbti/seed-mbti-runner';

// Import tất cả seed data theo category
import testMBTI from './test-mbti';
import testTamLy from './test-tam-ly';
import thptToan from './trac-nghiem-thpt-toan';
import thptVatLy from './trac-nghiem-thpt-vat-ly';
import thptHoaHoc from './trac-nghiem-thpt-hoa-hoc';
import thptSinhHoc from './trac-nghiem-thpt-sinh-hoc';
import thptTiengAnh from './trac-nghiem-thpt-tieng-anh';
import thptLichSu from './trac-nghiem-thpt-lich-su';
import thptGdcd from './trac-nghiem-thpt-gdcd';
import onThiToan from './on-thi-thpt-toan';
import onThiVatLy from './on-thi-thpt-vat-ly';
import onThiHoaHoc from './on-thi-thpt-hoa-hoc';
import onThiSinhHoc from './on-thi-thpt-sinh-hoc';
import onThiTiengAnh from './on-thi-thpt-tieng-anh';
import onThiLichSu from './on-thi-thpt-lich-su';
import onThiDiaLy from './on-thi-thpt-dia-ly';
import onThiGdcd from './on-thi-thpt-gdcd';
import dhPhapLuat from './trac-nghiem-dh-phap-luat-dai-cuong';
import dhLichSuDang from './trac-nghiem-dh-lich-su-dang';
import dhTrietHoc from './trac-nghiem-dh-triet-hoc-mac-lenin';
import dhKinhTe from './trac-nghiem-dh-kinh-te-chinh-tri';
import dhCnxhkh from './trac-nghiem-dh-cnxhkh';
import dhDaoDuc from './trac-nghiem-dh-dao-duc-hoc';
import dhLogic from './trac-nghiem-dh-logic-hoc';
import dhTamLy from './trac-nghiem-dh-tam-ly-hoc';
import dhGiaoDuc from './trac-nghiem-dh-giao-duc-hoc';

const allSeeds = [
  { name: 'Test Tâm Lý', data: testTamLy },
  { name: 'THPT Toán', data: thptToan },
  { name: 'THPT Vật Lý', data: thptVatLy },
  { name: 'THPT Hóa Học', data: thptHoaHoc },
  { name: 'THPT Sinh Học', data: thptSinhHoc },
  { name: 'THPT Tiếng Anh', data: thptTiengAnh },
  { name: 'THPT Lịch Sử', data: thptLichSu },
  { name: 'THPT GDCD', data: thptGdcd },
  { name: 'Ôn thi THPT Toán', data: onThiToan },
  { name: 'Ôn thi THPT Vật Lý', data: onThiVatLy },
  { name: 'Ôn thi THPT Hóa Học', data: onThiHoaHoc },
  { name: 'Ôn thi THPT Sinh Học', data: onThiSinhHoc },
  { name: 'Ôn thi THPT Tiếng Anh', data: onThiTiengAnh },
  { name: 'Ôn thi THPT Lịch Sử', data: onThiLichSu },
  { name: 'Ôn thi THPT Địa Lý', data: onThiDiaLy },
  { name: 'Ôn thi THPT GDCD', data: onThiGdcd },
  { name: 'ĐH Pháp luật đại cương', data: dhPhapLuat },
  { name: 'ĐH Lịch sử Đảng CSVN', data: dhLichSuDang },
  { name: 'ĐH Triết học Mác-Lênin', data: dhTrietHoc },
  { name: 'ĐH Kinh tế chính trị', data: dhKinhTe },
  { name: 'ĐH CNXH khoa học', data: dhCnxhkh },
  { name: 'ĐH Đạo đức học', data: dhDaoDuc },
  { name: 'ĐH Logic học', data: dhLogic },
  { name: 'ĐH Tâm lý học đại cương', data: dhTamLy },
  { name: 'ĐH Giáo dục học đại cương', data: dhGiaoDuc },
];

async function main() {
  console.log('🌱 Bắt đầu seed tất cả đề thi...\n');

  let totalCreated = 0;
  let totalSkipped = 0;

  // Seed MBTI quizzes trước (dùng seedMBTIQuizList vì answer có mbtiDimension/mbtiPole)
  console.log(`\n📂 Test MBTI (${testMBTI.length} đề)`);
  console.log('─'.repeat(50));
  const mbtiResult = await seedMBTIQuizList(testMBTI);
  totalCreated += mbtiResult.created;
  totalSkipped += mbtiResult.skipped;

  for (const seed of allSeeds) {
    console.log(`\n📂 ${seed.name} (${seed.data.length} đề)`);
    console.log('─'.repeat(50));
    const { created, skipped } = await seedQuizList(seed.data);
    totalCreated += created;
    totalSkipped += skipped;
  }

  // Tổng kết
  const stats = {
    quizzes: await prisma.quiz.count(),
    questions: await prisma.question.count(),
    answers: await prisma.answer.count(),
  };

  console.log('\n\n✅ SEED TẤT CẢ ĐỀ THI HOÀN THÀNH!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📝 Quizzes mới tạo:  ${totalCreated}`);
  console.log(`⏭️  Bỏ qua:          ${totalSkipped}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📝 Tổng Quizzes:     ${stats.quizzes}`);
  console.log(`❓ Tổng Questions:   ${stats.questions}`);
  console.log(`💡 Tổng Answers:     ${stats.answers}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

main()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await mbtiPrisma.$disconnect();
  });
