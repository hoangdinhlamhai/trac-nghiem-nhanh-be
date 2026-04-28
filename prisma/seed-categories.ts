import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// ============================================
// Seed Categories - Cấu trúc phân cấp
// Dùng upsert để không bị lỗi FK khi đã có quiz
// ============================================

const subjectsMap = {
  'trac-nghiem-thpt': {
    name: 'Trắc nghiệm THPT',
    description: 'Trắc nghiệm THPT',
    displayOrder: 3,
    subjects: [
      { name: 'Toán', slug: 'trac-nghiem-thpt-toan' },
      { name: 'Vật Lý', slug: 'trac-nghiem-thpt-vat-ly' },
      { name: 'Hóa Học', slug: 'trac-nghiem-thpt-hoa-hoc' },
      { name: 'Sinh Học', slug: 'trac-nghiem-thpt-sinh-hoc' },
      { name: 'Tiếng Anh', slug: 'trac-nghiem-thpt-tieng-anh' },
      { name: 'Lịch Sử', slug: 'trac-nghiem-thpt-lich-su' },
      { name: 'Địa Lý', slug: 'trac-nghiem-thpt-dia-ly' },
      { name: 'GDCD', slug: 'trac-nghiem-thpt-gdcd' },
      { name: 'Tin Học', slug: 'trac-nghiem-thpt-tin-hoc' },
      { name: 'Công Nghệ', slug: 'trac-nghiem-thpt-cong-nghe' },
    ],
  },
  'on-thi-thpt': {
    name: 'Đề ôn thi THPT Quốc Gia 2025',
    description: 'Đề ôn thi THPT Quốc Gia 2025',
    displayOrder: 4,
    subjects: [
      { name: 'Toán', slug: 'on-thi-thpt-toan' },
      { name: 'Vật Lý', slug: 'on-thi-thpt-vat-ly' },
      { name: 'Hóa Học', slug: 'on-thi-thpt-hoa-hoc' },
      { name: 'Sinh Học', slug: 'on-thi-thpt-sinh-hoc' },
      { name: 'Tiếng Anh', slug: 'on-thi-thpt-tieng-anh' },
      { name: 'Lịch Sử', slug: 'on-thi-thpt-lich-su' },
      { name: 'Địa Lý', slug: 'on-thi-thpt-dia-ly' },
      { name: 'GDCD', slug: 'on-thi-thpt-gdcd' },
    ],
  },
  'trac-nghiem-dai-hoc': {
    name: 'Đề trắc nghiệm đại học nổi bật',
    description: 'Đề trắc nghiệm đại học',
    displayOrder: 5,
    subjects: [
      { name: 'Pháp luật đại cương', slug: 'trac-nghiem-dh-phap-luat-dai-cuong' },
      { name: 'Lịch sử Đảng Cộng Sản Việt Nam', slug: 'trac-nghiem-dh-lich-su-dang-cong-san-viet-nam' },
      { name: 'Triết học Mác-Lênin', slug: 'trac-nghiem-dh-triet-hoc-mac-lenin' },
      { name: 'Kinh tế chính trị Mác-Lênin', slug: 'trac-nghiem-dh-kinh-te-chinh-tri-mac-lenin' },
      { name: 'Chủ nghĩa xã hội khoa học', slug: 'trac-nghiem-dh-chu-nghia-xa-hoi-khoa-hoc' },
      { name: 'Đạo đức học', slug: 'trac-nghiem-dh-dao-duc-hoc' },
      { name: 'Logic học', slug: 'trac-nghiem-dh-logic-hoc' },
      { name: 'Tâm lý học đại cương', slug: 'trac-nghiem-dh-tam-ly-hoc-dai-cuong' },
      { name: 'Giáo dục học đại cương', slug: 'trac-nghiem-dh-giao-duc-hoc-dai-cuong' },
    ],
  },
};

const standaloneCategories = [
  {
    name: 'Test MBTI',
    slug: 'test-mbti',
    description: 'Trắc nghiệm tính cách MBTI - 16 nhóm tính cách',
    displayOrder: 1,
  },
  {
    name: 'Test tâm lý',
    slug: 'test-tam-ly',
    description: 'Các bài test tâm lý học thú vị',
    displayOrder: 2,
  },
];

async function seedCategories() {
  console.log('🌱 Bắt đầu seed Categories (upsert mode)...\n');

  // 1. Tạo/cập nhật danh mục gốc độc lập
  for (const cat of standaloneCategories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
        displayOrder: cat.displayOrder,
        isActive: true,
      },
      create: {
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        displayOrder: cat.displayOrder,
        isActive: true,
      },
    });
    console.log(`  ✅ ${cat.name}`);
  }

  // 2. Tạo/cập nhật danh mục cha + danh mục con (môn học)
  for (const [parentSlug, config] of Object.entries(subjectsMap)) {
    // Upsert danh mục cha
    const parent = await prisma.category.upsert({
      where: { slug: parentSlug },
      update: {
        name: config.name,
        description: config.description,
        displayOrder: config.displayOrder,
        isActive: true,
      },
      create: {
        name: config.name,
        slug: parentSlug,
        description: config.description,
        displayOrder: config.displayOrder,
        isActive: true,
      },
    });
    console.log(`  📂 ${config.name} (cha)`);

    // Upsert danh mục con
    for (let i = 0; i < config.subjects.length; i++) {
      const subject = config.subjects[i];
      await prisma.category.upsert({
        where: { slug: subject.slug },
        update: {
          name: subject.name,
          description: `${subject.name} - ${config.name}`,
          displayOrder: i + 1,
          isActive: true,
          parentId: parent.id,
        },
        create: {
          name: subject.name,
          slug: subject.slug,
          description: `${subject.name} - ${config.name}`,
          displayOrder: i + 1,
          isActive: true,
          parentId: parent.id,
        },
      });
      console.log(`    └─ ${subject.name} (${subject.slug})`);
    }
  }

  // 3. Tổng kết
  const totalParent = await prisma.category.count({ where: { parentId: null } });
  const totalChild = await prisma.category.count({ where: { parentId: { not: null } } });
  const total = totalParent + totalChild;

  console.log('\n✅ SEED CATEGORIES HOÀN THÀNH!');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`📂 Danh mục cha:  ${totalParent}`);
  console.log(`📁 Danh mục con:  ${totalChild}`);
  console.log(`📊 Tổng cộng:     ${total}`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
}

seedCategories()
  .catch((e) => {
    console.error('❌ Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
