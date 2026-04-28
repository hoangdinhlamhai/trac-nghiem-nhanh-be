import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Este - Lipit
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-hoa-hoc',
    title: 'Đề trắc nghiệm Hóa Học 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-hoa-hoc-de-1',
    description:
      'Đề trắc nghiệm Hóa Học 12 chủ đề Este - Lipit: phản ứng este hóa, xà phòng hóa, chất béo, tính chất este. Gồm 25 câu hỏi trắc nghiệm có đáp án.',
    instruction:
      'Hãy chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Este là sản phẩm của phản ứng giữa:',
        answers: [
          { content: 'Axit và bazơ', isCorrect: false },
          { content: 'Axit cacboxylic và ancol', isCorrect: true },
          { content: 'Axit và kim loại', isCorrect: false },
          { content: 'Ancol và bazơ', isCorrect: false },
        ],
      },
      {
        content: 'Công thức tổng quát của este tạo bởi axit cacboxylic no, đơn chức và ancol no, đơn chức là:',
        answers: [
          { content: 'CₙH₂ₙO₂ (n ≥ 2)', isCorrect: true },
          { content: 'CₙH₂ₙ₊₂O₂ (n ≥ 2)', isCorrect: false },
          { content: 'CₙH₂ₙ₋₂O₂ (n ≥ 2)', isCorrect: false },
          { content: 'CₙH₂ₙO (n ≥ 2)', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng thủy phân este trong môi trường kiềm được gọi là:',
        answers: [
          { content: 'Phản ứng este hóa', isCorrect: false },
          { content: 'Phản ứng xà phòng hóa', isCorrect: true },
          { content: 'Phản ứng trùng hợp', isCorrect: false },
          { content: 'Phản ứng crackinh', isCorrect: false },
        ],
      },
      {
        content: 'Etyl axetat có công thức là:',
        answers: [
          { content: 'CH₃COOCH₃', isCorrect: false },
          { content: 'CH₃COOC₂H₅', isCorrect: true },
          { content: 'HCOOC₂H₅', isCorrect: false },
          { content: 'C₂H₅COOCH₃', isCorrect: false },
        ],
      },
      {
        content: 'Chất béo là trieste của glixerol với:',
        answers: [
          { content: 'Axit cacboxylic', isCorrect: false },
          { content: 'Axit béo', isCorrect: true },
          { content: 'Axit vô cơ', isCorrect: false },
          { content: 'Ancol đơn chức', isCorrect: false },
        ],
      },
      {
        content: 'Xà phòng hóa hoàn toàn chất béo thu được glixerol và:',
        answers: [
          { content: 'Axit béo', isCorrect: false },
          { content: 'Muối natri hoặc kali của axit béo', isCorrect: true },
          { content: 'Ancol', isCorrect: false },
          { content: 'Anđehit', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng este hóa giữa axit axetic và etanol cần xúc tác là:',
        answers: [
          { content: 'NaOH', isCorrect: false },
          { content: 'H₂SO₄ đặc', isCorrect: true },
          { content: 'Fe', isCorrect: false },
          { content: 'Al₂O₃', isCorrect: false },
        ],
      },
      {
        content: 'Este nào sau đây có mùi chuối chín?',
        answers: [
          { content: 'Etyl axetat', isCorrect: false },
          { content: 'Isoamyl axetat', isCorrect: true },
          { content: 'Etyl butirat', isCorrect: false },
          { content: 'Metyl salixylat', isCorrect: false },
        ],
      },
      {
        content: 'Thủy phân este CH₃COOC₂H₅ trong dung dịch NaOH thu được:',
        answers: [
          { content: 'CH₃COONa và C₂H₅OH', isCorrect: true },
          { content: 'CH₃COOH và C₂H₅ONa', isCorrect: false },
          { content: 'CH₃OH và C₂H₅COONa', isCorrect: false },
          { content: 'CH₃COONa và CH₃OH', isCorrect: false },
        ],
      },
      {
        content: 'Axit béo nào sau đây là axit béo không no?',
        answers: [
          { content: 'Axit panmitic (C₁₅H₃₁COOH)', isCorrect: false },
          { content: 'Axit stearic (C₁₇H₃₅COOH)', isCorrect: false },
          { content: 'Axit oleic (C₁₇H₃₃COOH)', isCorrect: true },
          { content: 'Axit lauric (C₁₁H₂₃COOH)', isCorrect: false },
        ],
      },
      {
        content: 'Đặc điểm của phản ứng este hóa là:',
        answers: [
          { content: 'Phản ứng một chiều', isCorrect: false },
          { content: 'Phản ứng thuận nghịch', isCorrect: true },
          { content: 'Phản ứng không cần xúc tác', isCorrect: false },
          { content: 'Phản ứng tỏa nhiệt mạnh', isCorrect: false },
        ],
      },
      {
        content: 'Số đồng phân este có công thức phân tử C₃H₆O₂ là:',
        answers: [
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content: 'Chất béo lỏng chứa chủ yếu gốc axit béo:',
        answers: [
          { content: 'No', isCorrect: false },
          { content: 'Không no', isCorrect: true },
          { content: 'Có vòng benzen', isCorrect: false },
          { content: 'Có nhóm -OH', isCorrect: false },
        ],
      },
      {
        content: 'Để chuyển chất béo lỏng thành chất béo rắn, người ta thực hiện phản ứng:',
        answers: [
          { content: 'Xà phòng hóa', isCorrect: false },
          { content: 'Hiđro hóa (có xúc tác Ni, t°)', isCorrect: true },
          { content: 'Oxi hóa', isCorrect: false },
          { content: 'Thủy phân', isCorrect: false },
        ],
      },
      {
        content: 'Metyl fomat có công thức cấu tạo là:',
        answers: [
          { content: 'HCOOCH₃', isCorrect: true },
          { content: 'CH₃COOCH₃', isCorrect: false },
          { content: 'HCOOC₂H₅', isCorrect: false },
          { content: 'CH₃COOC₂H₅', isCorrect: false },
        ],
      },
      {
        content: 'Este nào sau đây khi thủy phân trong môi trường kiềm cho ra hai muối?',
        answers: [
          { content: 'CH₃COOC₂H₅', isCorrect: false },
          { content: 'CH₃COOCH=CH₂', isCorrect: false },
          { content: 'CH₃COOC₆H₅ (phenyl axetat)', isCorrect: true },
          { content: 'HCOOCH₃', isCorrect: false },
        ],
      },
      {
        content: 'Vinyl axetat có công thức là:',
        answers: [
          { content: 'CH₃COOCH=CH₂', isCorrect: true },
          { content: 'CH₂=CHCOOCH₃', isCorrect: false },
          { content: 'CH₃COOCH₂CH₃', isCorrect: false },
          { content: 'CH₃COOCH₃', isCorrect: false },
        ],
      },
      {
        content: 'Thủy phân vinyl axetat trong dung dịch NaOH thu được:',
        answers: [
          { content: 'CH₃COONa và CH₃CHO', isCorrect: true },
          { content: 'CH₃COONa và CH₂=CHOH', isCorrect: false },
          { content: 'CH₃COOH và CH₃CHO', isCorrect: false },
          { content: 'CH₃COONa và C₂H₅OH', isCorrect: false },
        ],
      },
      {
        content: 'Xà phòng hóa 8,8 gam etyl axetat bằng dung dịch NaOH vừa đủ. Khối lượng muối thu được là:',
        answers: [
          { content: '6,8 gam', isCorrect: false },
          { content: '8,2 gam', isCorrect: true },
          { content: '10,2 gam', isCorrect: false },
          { content: '4,1 gam', isCorrect: false },
        ],
      },
      {
        content: 'Glixerol có công thức là:',
        answers: [
          { content: 'C₂H₄(OH)₂', isCorrect: false },
          { content: 'C₃H₅(OH)₃', isCorrect: true },
          { content: 'C₃H₇OH', isCorrect: false },
          { content: 'C₂H₅OH', isCorrect: false },
        ],
      },
      {
        content: 'Phát biểu nào sau đây đúng về chất béo?',
        answers: [
          { content: 'Chất béo là este của glixerol với axit vô cơ', isCorrect: false },
          { content: 'Chất béo nhẹ hơn nước và không tan trong nước', isCorrect: true },
          { content: 'Chất béo luôn ở thể rắn ở điều kiện thường', isCorrect: false },
          { content: 'Chất béo không bị thủy phân', isCorrect: false },
        ],
      },
      {
        content: 'Đun nóng este HCOOCH₃ với dung dịch NaOH, sản phẩm thu được là:',
        answers: [
          { content: 'HCOONa và CH₃OH', isCorrect: true },
          { content: 'CH₃COONa và H₂O', isCorrect: false },
          { content: 'HCOOH và CH₃ONa', isCorrect: false },
          { content: 'NaCl và CH₃OH', isCorrect: false },
        ],
      },
      {
        content: 'Triolein có công thức là:',
        answers: [
          { content: '(C₁₇H₃₅COO)₃C₃H₅', isCorrect: false },
          { content: '(C₁₇H₃₃COO)₃C₃H₅', isCorrect: true },
          { content: '(C₁₅H₃₁COO)₃C₃H₅', isCorrect: false },
          { content: '(C₁₇H₃₁COO)₃C₃H₅', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng nào sau đây dùng để điều chế xà phòng?',
        answers: [
          { content: 'Đun chất béo với dung dịch H₂SO₄ loãng', isCorrect: false },
          { content: 'Đun chất béo với dung dịch NaOH', isCorrect: true },
          { content: 'Đun chất béo với dung dịch NaCl', isCorrect: false },
          { content: 'Đun chất béo với nước cất', isCorrect: false },
        ],
      },
      {
        content: 'Este X có công thức phân tử C₄H₈O₂. Số đồng phân cấu tạo của X là:',
        answers: [
          { content: '2', isCorrect: false },
          { content: '3', isCorrect: false },
          { content: '4', isCorrect: true },
          { content: '5', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 2: Cacbohidrat
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-hoa-hoc',
    title: 'Đề trắc nghiệm Hóa Học 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-hoa-hoc-de-2',
    description:
      'Đề trắc nghiệm Hóa Học 12 chủ đề Cacbohidrat: glucozơ, saccarozơ, tinh bột, xenlulozơ, phản ứng đặc trưng. Gồm 25 câu hỏi trắc nghiệm có đáp án.',
    instruction:
      'Hãy chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Glucozơ có công thức phân tử là:',
        answers: [
          { content: 'C₆H₁₂O₆', isCorrect: true },
          { content: 'C₁₂H₂₂O₁₁', isCorrect: false },
          { content: 'C₆H₁₀O₅', isCorrect: false },
          { content: 'C₂H₅OH', isCorrect: false },
        ],
      },
      {
        content: 'Saccarozơ là loại đường nào?',
        answers: [
          { content: 'Monosaccarit', isCorrect: false },
          { content: 'Đisaccarit', isCorrect: true },
          { content: 'Polisaccarit', isCorrect: false },
          { content: 'Oligosaccarit', isCorrect: false },
        ],
      },
      {
        content: 'Glucozơ có phản ứng tráng bạc vì trong phân tử có nhóm chức:',
        answers: [
          { content: '-OH', isCorrect: false },
          { content: '-CHO (anđehit)', isCorrect: true },
          { content: '-COOH', isCorrect: false },
          { content: '-CO-', isCorrect: false },
        ],
      },
      {
        content: 'Fructozơ là đồng phân của:',
        answers: [
          { content: 'Saccarozơ', isCorrect: false },
          { content: 'Glucozơ', isCorrect: true },
          { content: 'Tinh bột', isCorrect: false },
          { content: 'Xenlulozơ', isCorrect: false },
        ],
      },
      {
        content: 'Tinh bột thuộc loại:',
        answers: [
          { content: 'Monosaccarit', isCorrect: false },
          { content: 'Đisaccarit', isCorrect: false },
          { content: 'Polisaccarit', isCorrect: true },
          { content: 'Đường đơn', isCorrect: false },
        ],
      },
      {
        content: 'Thuốc thử để nhận biết tinh bột là:',
        answers: [
          { content: 'Dung dịch AgNO₃/NH₃', isCorrect: false },
          { content: 'Dung dịch iot (I₂)', isCorrect: true },
          { content: 'Dung dịch NaOH', isCorrect: false },
          { content: 'Dung dịch H₂SO₄', isCorrect: false },
        ],
      },
      {
        content: 'Khi thủy phân saccarozơ thu được:',
        answers: [
          { content: 'Glucozơ và glucozơ', isCorrect: false },
          { content: 'Glucozơ và fructozơ', isCorrect: true },
          { content: 'Fructozơ và fructozơ', isCorrect: false },
          { content: 'Glucozơ và galactozơ', isCorrect: false },
        ],
      },
      {
        content: 'Xenlulozơ có công thức là:',
        answers: [
          { content: '(C₆H₁₀O₅)ₙ', isCorrect: true },
          { content: 'C₆H₁₂O₆', isCorrect: false },
          { content: 'C₁₂H₂₂O₁₁', isCorrect: false },
          { content: 'C₆H₁₀O₅', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng lên men glucozơ tạo ra sản phẩm chính là:',
        answers: [
          { content: 'CH₃COOH và H₂O', isCorrect: false },
          { content: 'C₂H₅OH và CO₂', isCorrect: true },
          { content: 'CH₃CHO và H₂O', isCorrect: false },
          { content: 'CH₄ và CO₂', isCorrect: false },
        ],
      },
      {
        content: 'Saccarozơ không có phản ứng tráng bạc vì:',
        answers: [
          { content: 'Không tan trong nước', isCorrect: false },
          { content: 'Không có nhóm -CHO tự do trong phân tử', isCorrect: true },
          { content: 'Là chất rắn kết tinh', isCorrect: false },
          { content: 'Có khối lượng phân tử lớn', isCorrect: false },
        ],
      },
      {
        content: 'Tinh bột được tạo thành trong cây xanh nhờ quá trình:',
        answers: [
          { content: 'Hô hấp', isCorrect: false },
          { content: 'Quang hợp', isCorrect: true },
          { content: 'Lên men', isCorrect: false },
          { content: 'Thủy phân', isCorrect: false },
        ],
      },
      {
        content: 'Glucozơ tác dụng với Cu(OH)₂ ở nhiệt độ thường tạo dung dịch màu:',
        answers: [
          { content: 'Đỏ gạch', isCorrect: false },
          { content: 'Xanh lam', isCorrect: true },
          { content: 'Vàng', isCorrect: false },
          { content: 'Tím', isCorrect: false },
        ],
      },
      {
        content: 'Xenlulozơ trinitrat được điều chế bằng phản ứng giữa xenlulozơ với:',
        answers: [
          { content: 'HNO₃ đặc (xúc tác H₂SO₄ đặc)', isCorrect: true },
          { content: 'NaOH đặc', isCorrect: false },
          { content: 'HCl đặc', isCorrect: false },
          { content: 'AgNO₃', isCorrect: false },
        ],
      },
      {
        content: 'Trong phân tử glucozơ có bao nhiêu nhóm -OH?',
        answers: [
          { content: '3', isCorrect: false },
          { content: '4', isCorrect: false },
          { content: '5', isCorrect: true },
          { content: '6', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng tráng bạc của glucozơ tạo ra sản phẩm hữu cơ là:',
        answers: [
          { content: 'Axit gluconic (muối amoni gluconat)', isCorrect: true },
          { content: 'Fructozơ', isCorrect: false },
          { content: 'Sobitol', isCorrect: false },
          { content: 'Axit axetic', isCorrect: false },
        ],
      },
      {
        content: 'Tinh bột gồm hai thành phần là:',
        answers: [
          { content: 'Glucozơ và fructozơ', isCorrect: false },
          { content: 'Amilozơ và amilopectin', isCorrect: true },
          { content: 'Saccarozơ và maltozơ', isCorrect: false },
          { content: 'Xenlulozơ và mantozơ', isCorrect: false },
        ],
      },
      {
        content: 'Khử glucozơ bằng H₂ (xúc tác Ni, t°) thu được:',
        answers: [
          { content: 'Axit gluconic', isCorrect: false },
          { content: 'Sobitol', isCorrect: true },
          { content: 'Fructozơ', isCorrect: false },
          { content: 'Etanol', isCorrect: false },
        ],
      },
      {
        content: 'Chất nào sau đây không phải cacbohidrat?',
        answers: [
          { content: 'Glucozơ', isCorrect: false },
          { content: 'Saccarozơ', isCorrect: false },
          { content: 'Glixerol', isCorrect: true },
          { content: 'Xenlulozơ', isCorrect: false },
        ],
      },
      {
        content: 'Khi đun nóng tinh bột với dung dịch H₂SO₄ loãng, sản phẩm cuối cùng là:',
        answers: [
          { content: 'Saccarozơ', isCorrect: false },
          { content: 'Fructozơ', isCorrect: false },
          { content: 'Glucozơ', isCorrect: true },
          { content: 'Xenlulozơ', isCorrect: false },
        ],
      },
      {
        content: 'Xenlulozơ không tan trong:',
        answers: [
          { content: 'Nước và các dung môi hữu cơ thông thường', isCorrect: true },
          { content: 'Nước Svayde [Cu(NH₃)₄](OH)₂', isCorrect: false },
          { content: 'Dung dịch H₂SO₄ đặc nóng', isCorrect: false },
          { content: 'Hỗn hợp HNO₃/H₂SO₄ đặc', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng lên men giấm từ etanol cần điều kiện:',
        answers: [
          { content: 'Nhiệt độ cao, áp suất cao', isCorrect: false },
          { content: 'Men giấm, có O₂', isCorrect: true },
          { content: 'Xúc tác H₂SO₄ đặc', isCorrect: false },
          { content: 'Xúc tác Ni, nhiệt độ', isCorrect: false },
        ],
      },
      {
        content: 'Glucozơ và fructozơ đều:',
        answers: [
          { content: 'Có phản ứng tráng bạc', isCorrect: false },
          { content: 'Tác dụng với Cu(OH)₂ ở nhiệt độ thường tạo dung dịch xanh lam', isCorrect: true },
          { content: 'Có nhóm -CHO trong phân tử', isCorrect: false },
          { content: 'Là đisaccarit', isCorrect: false },
        ],
      },
      {
        content: 'Mantozơ khi thủy phân hoàn toàn cho sản phẩm là:',
        answers: [
          { content: 'Glucozơ', isCorrect: true },
          { content: 'Fructozơ', isCorrect: false },
          { content: 'Glucozơ và fructozơ', isCorrect: false },
          { content: 'Galactozơ', isCorrect: false },
        ],
      },
      {
        content: 'Công thức phân tử của saccarozơ là:',
        answers: [
          { content: 'C₆H₁₂O₆', isCorrect: false },
          { content: 'C₁₂H₂₂O₁₁', isCorrect: true },
          { content: '(C₆H₁₀O₅)ₙ', isCorrect: false },
          { content: 'C₆H₁₀O₅', isCorrect: false },
        ],
      },
      {
        content: 'Trong công nghiệp, glucozơ được điều chế bằng cách thủy phân:',
        answers: [
          { content: 'Saccarozơ', isCorrect: false },
          { content: 'Tinh bột (xúc tác HCl hoặc enzim)', isCorrect: true },
          { content: 'Xenlulozơ trong NaOH', isCorrect: false },
          { content: 'Protein', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 3: Amin, Amino axit, Protein
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-hoa-hoc',
    title: 'Đề trắc nghiệm Hóa Học 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-hoa-hoc-de-3',
    description:
      'Đề trắc nghiệm Hóa Học 12 chủ đề Amin, Amino axit, Protein: bậc amin, tính chất lưỡng tính, peptit, protein. Gồm 25 câu hỏi trắc nghiệm có đáp án.',
    instruction:
      'Hãy chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Amin là hợp chất hữu cơ khi thay thế nguyên tử H trong phân tử NH₃ bằng:',
        answers: [
          { content: 'Gốc hiđrocacbon', isCorrect: true },
          { content: 'Nhóm -OH', isCorrect: false },
          { content: 'Nhóm -COOH', isCorrect: false },
          { content: 'Nguyên tử halogen', isCorrect: false },
        ],
      },
      {
        content: 'Metylamin (CH₃NH₂) thuộc loại amin bậc mấy?',
        answers: [
          { content: 'Bậc 1', isCorrect: true },
          { content: 'Bậc 2', isCorrect: false },
          { content: 'Bậc 3', isCorrect: false },
          { content: 'Bậc 0', isCorrect: false },
        ],
      },
      {
        content: 'Anilin có công thức là:',
        answers: [
          { content: 'CH₃NH₂', isCorrect: false },
          { content: 'C₆H₅NH₂', isCorrect: true },
          { content: 'C₂H₅NH₂', isCorrect: false },
          { content: '(CH₃)₂NH', isCorrect: false },
        ],
      },
      {
        content: 'Amino axit là hợp chất hữu cơ tạp chức trong phân tử chứa đồng thời nhóm:',
        answers: [
          { content: '-NH₂ và -CHO', isCorrect: false },
          { content: '-NH₂ và -COOH', isCorrect: true },
          { content: '-OH và -COOH', isCorrect: false },
          { content: '-NH₂ và -OH', isCorrect: false },
        ],
      },
      {
        content: 'Glyxin có công thức là:',
        answers: [
          { content: 'H₂N-CH₂-COOH', isCorrect: true },
          { content: 'H₂N-CH(CH₃)-COOH', isCorrect: false },
          { content: 'C₆H₅NH₂', isCorrect: false },
          { content: 'CH₃-CH(NH₂)-COOH', isCorrect: false },
        ],
      },
      {
        content: 'Amino axit có tính chất lưỡng tính vì:',
        answers: [
          { content: 'Vừa tan trong nước vừa không tan', isCorrect: false },
          { content: 'Phân tử chứa cả nhóm -NH₂ (tính bazơ) và nhóm -COOH (tính axit)', isCorrect: true },
          { content: 'Có khối lượng phân tử lớn', isCorrect: false },
          { content: 'Là chất rắn kết tinh', isCorrect: false },
        ],
      },
      {
        content: 'Dung dịch amin nào sau đây làm quỳ tím chuyển xanh?',
        answers: [
          { content: 'Anilin', isCorrect: false },
          { content: 'Metylamin', isCorrect: true },
          { content: 'Điphenylamin', isCorrect: false },
          { content: 'Anilin và metylamin', isCorrect: false },
        ],
      },
      {
        content: 'Anilin không làm đổi màu quỳ tím vì:',
        answers: [
          { content: 'Anilin là chất lỏng', isCorrect: false },
          { content: 'Nhóm C₆H₅- hút electron làm giảm tính bazơ của nhóm -NH₂', isCorrect: true },
          { content: 'Anilin không tan trong nước', isCorrect: false },
          { content: 'Anilin là axit', isCorrect: false },
        ],
      },
      {
        content: 'Liên kết peptit là liên kết:',
        answers: [
          { content: '-CO-NH- giữa hai đơn vị α-amino axit', isCorrect: true },
          { content: '-C-O-C- giữa hai phân tử', isCorrect: false },
          { content: '-NH-NH- giữa hai nhóm amin', isCorrect: false },
          { content: '-CO-O- giữa hai nhóm cacboxyl', isCorrect: false },
        ],
      },
      {
        content: 'Protein là polipeptit bậc cao có phân tử khối từ:',
        answers: [
          { content: 'Vài chục đến vài trăm', isCorrect: false },
          { content: 'Vài nghìn đến vài triệu', isCorrect: true },
          { content: 'Vài trăm đến vài nghìn', isCorrect: false },
          { content: 'Vài triệu đến vài tỉ', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng màu biure là phản ứng của peptit (có từ 2 liên kết peptit trở lên) với:',
        answers: [
          { content: 'Dung dịch I₂', isCorrect: false },
          { content: 'Cu(OH)₂ trong môi trường kiềm', isCorrect: true },
          { content: 'Dung dịch AgNO₃/NH₃', isCorrect: false },
          { content: 'Dung dịch HCl', isCorrect: false },
        ],
      },
      {
        content: 'Alanin có công thức là:',
        answers: [
          { content: 'H₂N-CH₂-COOH', isCorrect: false },
          { content: 'CH₃-CH(NH₂)-COOH', isCorrect: true },
          { content: 'H₂N-(CH₂)₄-CH(NH₂)-COOH', isCorrect: false },
          { content: 'HOOC-CH₂-CH₂-CH(NH₂)-COOH', isCorrect: false },
        ],
      },
      {
        content: 'Đipeptit Gly-Ala được tạo thành từ:',
        answers: [
          { content: 'Hai phân tử glyxin', isCorrect: false },
          { content: 'Một phân tử glyxin và một phân tử alanin', isCorrect: true },
          { content: 'Hai phân tử alanin', isCorrect: false },
          { content: 'Glyxin và valin', isCorrect: false },
        ],
      },
      {
        content: 'Khi đốt cháy hoàn toàn amin luôn thu được sản phẩm chứa:',
        answers: [
          { content: 'CO₂, H₂O và N₂', isCorrect: true },
          { content: 'CO₂ và H₂O', isCorrect: false },
          { content: 'CO₂, H₂O và NO₂', isCorrect: false },
          { content: 'CO₂ và N₂', isCorrect: false },
        ],
      },
      {
        content: 'Dung dịch amino axit nào sau đây làm quỳ tím chuyển đỏ?',
        answers: [
          { content: 'Glyxin (H₂N-CH₂-COOH)', isCorrect: false },
          { content: 'Lysin (có 2 nhóm -NH₂, 1 nhóm -COOH)', isCorrect: false },
          { content: 'Axit glutamic (có 1 nhóm -NH₂, 2 nhóm -COOH)', isCorrect: true },
          { content: 'Alanin (CH₃-CH(NH₂)-COOH)', isCorrect: false },
        ],
      },
      {
        content: 'Protein bị đông tụ khi:',
        answers: [
          { content: 'Cho thêm nước', isCorrect: false },
          { content: 'Đun nóng hoặc cho thêm axit, bazơ, muối kim loại nặng', isCorrect: true },
          { content: 'Để ở nhiệt độ thường', isCorrect: false },
          { content: 'Cho thêm đường', isCorrect: false },
        ],
      },
      {
        content: 'Trimetylamin (CH₃)₃N thuộc loại amin bậc mấy?',
        answers: [
          { content: 'Bậc 1', isCorrect: false },
          { content: 'Bậc 2', isCorrect: false },
          { content: 'Bậc 3', isCorrect: true },
          { content: 'Bậc 4', isCorrect: false },
        ],
      },
      {
        content: 'Anilin tác dụng với nước brom tạo kết tủa màu:',
        answers: [
          { content: 'Đỏ', isCorrect: false },
          { content: 'Trắng', isCorrect: true },
          { content: 'Vàng', isCorrect: false },
          { content: 'Xanh', isCorrect: false },
        ],
      },
      {
        content: 'Số đồng phân amin bậc 1 có công thức phân tử C₃H₉N là:',
        answers: [
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content: 'Amino axit tác dụng với dung dịch NaOH tạo thành:',
        answers: [
          { content: 'Muối và nước', isCorrect: true },
          { content: 'Este và nước', isCorrect: false },
          { content: 'Muối và khí', isCorrect: false },
          { content: 'Axit và bazơ', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng trùng ngưng amino axit tạo thành:',
        answers: [
          { content: 'Este', isCorrect: false },
          { content: 'Polipeptit', isCorrect: true },
          { content: 'Polieste', isCorrect: false },
          { content: 'Polisaccarit', isCorrect: false },
        ],
      },
      {
        content: 'Tripeptit Gly-Ala-Val có bao nhiêu liên kết peptit?',
        answers: [
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content: 'Dung dịch lysin làm quỳ tím chuyển màu:',
        answers: [
          { content: 'Đỏ', isCorrect: false },
          { content: 'Xanh', isCorrect: true },
          { content: 'Không đổi màu', isCorrect: false },
          { content: 'Tím', isCorrect: false },
        ],
      },
      {
        content: 'Enzim là chất xúc tác sinh học có bản chất là:',
        answers: [
          { content: 'Lipit', isCorrect: false },
          { content: 'Protein', isCorrect: true },
          { content: 'Cacbohidrat', isCorrect: false },
          { content: 'Axit nucleic', isCorrect: false },
        ],
      },
      {
        content: 'Khi thủy phân hoàn toàn protein đơn giản thu được:',
        answers: [
          { content: 'Các α-amino axit', isCorrect: true },
          { content: 'Glucozơ', isCorrect: false },
          { content: 'Axit béo', isCorrect: false },
          { content: 'Nucleotit', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 4: Polime và vật liệu polime
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-hoa-hoc',
    title: 'Đề trắc nghiệm Hóa Học 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-hoa-hoc-de-4',
    description:
      'Đề trắc nghiệm Hóa Học 12 chủ đề Polime và vật liệu polime: trùng hợp, trùng ngưng, tơ, cao su, chất dẻo. Gồm 25 câu hỏi trắc nghiệm có đáp án.',
    instruction:
      'Hãy chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Polime là hợp chất có phân tử khối:',
        answers: [
          { content: 'Rất nhỏ', isCorrect: false },
          { content: 'Rất lớn, gồm nhiều mắt xích lặp lại', isCorrect: true },
          { content: 'Trung bình', isCorrect: false },
          { content: 'Không xác định được', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng trùng hợp là phản ứng:',
        answers: [
          { content: 'Kết hợp nhiều phân tử nhỏ (monome) thành phân tử lớn (polime) và giải phóng phân tử nhỏ', isCorrect: false },
          { content: 'Kết hợp nhiều phân tử nhỏ (monome) giống nhau hoặc tương tự thành phân tử lớn (polime)', isCorrect: true },
          { content: 'Phân hủy polime thành monome', isCorrect: false },
          { content: 'Oxi hóa monome', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng trùng ngưng khác phản ứng trùng hợp ở chỗ:',
        answers: [
          { content: 'Không cần xúc tác', isCorrect: false },
          { content: 'Ngoài polime còn giải phóng phân tử nhỏ (như H₂O)', isCorrect: true },
          { content: 'Chỉ dùng một loại monome', isCorrect: false },
          { content: 'Tạo ra polime có phân tử khối nhỏ hơn', isCorrect: false },
        ],
      },
      {
        content: 'Polietilen (PE) được điều chế bằng phản ứng trùng hợp monome nào?',
        answers: [
          { content: 'CH₂=CH₂ (etilen)', isCorrect: true },
          { content: 'CH₂=CHCl (vinyl clorua)', isCorrect: false },
          { content: 'CH₂=CH-CH₃ (propilen)', isCorrect: false },
          { content: 'CF₂=CF₂ (tetrafloetilen)', isCorrect: false },
        ],
      },
      {
        content: 'PVC (poli vinyl clorua) được tổng hợp từ monome:',
        answers: [
          { content: 'CH₂=CH₂', isCorrect: false },
          { content: 'CH₂=CHCl', isCorrect: true },
          { content: 'CH₂=CH-CH₃', isCorrect: false },
          { content: 'CH₃-CH=CH₂', isCorrect: false },
        ],
      },
      {
        content: 'Tơ nilon-6,6 được tổng hợp từ phản ứng trùng ngưng giữa:',
        answers: [
          { content: 'Axit ađipic và hexametylenđiamin', isCorrect: true },
          { content: 'Axit terephtalic và etylen glicol', isCorrect: false },
          { content: 'Caprolactam', isCorrect: false },
          { content: 'Axit ε-aminocaproic', isCorrect: false },
        ],
      },
      {
        content: 'Cao su thiên nhiên là polime của:',
        answers: [
          { content: 'Buta-1,3-đien', isCorrect: false },
          { content: 'Isopren (2-metylbuta-1,3-đien)', isCorrect: true },
          { content: 'Etilen', isCorrect: false },
          { content: 'Stiren', isCorrect: false },
        ],
      },
      {
        content: 'Tơ nào sau đây thuộc loại tơ thiên nhiên?',
        answers: [
          { content: 'Tơ nilon-6,6', isCorrect: false },
          { content: 'Tơ tằm', isCorrect: true },
          { content: 'Tơ visco', isCorrect: false },
          { content: 'Tơ capron', isCorrect: false },
        ],
      },
      {
        content: 'Tơ visco thuộc loại:',
        answers: [
          { content: 'Tơ thiên nhiên', isCorrect: false },
          { content: 'Tơ tổng hợp', isCorrect: false },
          { content: 'Tơ bán tổng hợp (tơ nhân tạo)', isCorrect: true },
          { content: 'Tơ vô cơ', isCorrect: false },
        ],
      },
      {
        content: 'Polistiren (PS) được tổng hợp từ monome:',
        answers: [
          { content: 'CH₂=CH₂', isCorrect: false },
          { content: 'C₆H₅CH=CH₂ (stiren)', isCorrect: true },
          { content: 'CH₂=CHCl', isCorrect: false },
          { content: 'CH₃COOCH=CH₂', isCorrect: false },
        ],
      },
      {
        content: 'Teflon (politetrafloetilen) có đặc tính nổi bật là:',
        answers: [
          { content: 'Dẫn điện tốt', isCorrect: false },
          { content: 'Bền với hóa chất, chịu nhiệt', isCorrect: true },
          { content: 'Dễ cháy', isCorrect: false },
          { content: 'Tan trong nước', isCorrect: false },
        ],
      },
      {
        content: 'Cao su buna được tổng hợp bằng phản ứng trùng hợp:',
        answers: [
          { content: 'CH₂=CH-CH=CH₂ (buta-1,3-đien)', isCorrect: true },
          { content: 'CH₂=CHCl', isCorrect: false },
          { content: 'CH₂=CH₂', isCorrect: false },
          { content: 'CH₂=C(CH₃)-CH=CH₂', isCorrect: false },
        ],
      },
      {
        content: 'Tơ lapsan (hay PET) được tổng hợp từ phản ứng trùng ngưng giữa:',
        answers: [
          { content: 'Axit ađipic và hexametylenđiamin', isCorrect: false },
          { content: 'Axit terephtalic và etylen glicol', isCorrect: true },
          { content: 'Axit ε-aminocaproic', isCorrect: false },
          { content: 'Phenol và fomanđehit', isCorrect: false },
        ],
      },
      {
        content: 'Nhựa bakelit được tổng hợp từ:',
        answers: [
          { content: 'Phenol và fomanđehit (HCHO)', isCorrect: true },
          { content: 'Axit terephtalic và etylen glicol', isCorrect: false },
          { content: 'Stiren và buta-1,3-đien', isCorrect: false },
          { content: 'Vinyl clorua', isCorrect: false },
        ],
      },
      {
        content: 'Tơ capron (nilon-6) được tổng hợp từ monome:',
        answers: [
          { content: 'Axit ađipic', isCorrect: false },
          { content: 'Caprolactam', isCorrect: true },
          { content: 'Axit terephtalic', isCorrect: false },
          { content: 'Hexametylenđiamin', isCorrect: false },
        ],
      },
      {
        content: 'Polime nào sau đây có cấu trúc mạch phân nhánh?',
        answers: [
          { content: 'Amilozơ', isCorrect: false },
          { content: 'Amilopectin', isCorrect: true },
          { content: 'Polietilen', isCorrect: false },
          { content: 'PVC', isCorrect: false },
        ],
      },
      {
        content: 'Cao su lưu hóa có tính chất tốt hơn cao su thường vì:',
        answers: [
          { content: 'Có cấu trúc mạng không gian nhờ cầu nối -S-S-', isCorrect: true },
          { content: 'Có phân tử khối nhỏ hơn', isCorrect: false },
          { content: 'Không chứa lưu huỳnh', isCorrect: false },
          { content: 'Có cấu trúc mạch thẳng', isCorrect: false },
        ],
      },
      {
        content: 'Polime nào sau đây được dùng làm chất dẻo?',
        answers: [
          { content: 'Tơ nilon-6,6', isCorrect: false },
          { content: 'Polietilen (PE)', isCorrect: true },
          { content: 'Cao su buna', isCorrect: false },
          { content: 'Tơ tằm', isCorrect: false },
        ],
      },
      {
        content: 'Tơ nitron (olon) được tổng hợp từ monome:',
        answers: [
          { content: 'CH₂=CH-CN (acrilonitrin)', isCorrect: true },
          { content: 'CH₂=CHCl', isCorrect: false },
          { content: 'CH₂=CH-CH₃', isCorrect: false },
          { content: 'CH₂=CH-OCOCH₃', isCorrect: false },
        ],
      },
      {
        content: 'Polime nào sau đây thuộc loại polime thiên nhiên?',
        answers: [
          { content: 'Polietilen', isCorrect: false },
          { content: 'PVC', isCorrect: false },
          { content: 'Xenlulozơ', isCorrect: true },
          { content: 'Polistiren', isCorrect: false },
        ],
      },
      {
        content: 'Cao su buna-S là sản phẩm đồng trùng hợp của:',
        answers: [
          { content: 'Buta-1,3-đien và stiren', isCorrect: true },
          { content: 'Buta-1,3-đien và acrilonitrin', isCorrect: false },
          { content: 'Isopren và stiren', isCorrect: false },
          { content: 'Etilen và propilen', isCorrect: false },
        ],
      },
      {
        content: 'Poli(metyl metacrylat) được dùng làm:',
        answers: [
          { content: 'Cao su', isCorrect: false },
          { content: 'Thủy tinh hữu cơ (plexiglas)', isCorrect: true },
          { content: 'Tơ sợi', isCorrect: false },
          { content: 'Keo dán', isCorrect: false },
        ],
      },
      {
        content: 'Polime nào sau đây có thể tham gia phản ứng cộng?',
        answers: [
          { content: 'Polietilen', isCorrect: false },
          { content: 'PVC', isCorrect: false },
          { content: 'Cao su thiên nhiên', isCorrect: true },
          { content: 'Nilon-6,6', isCorrect: false },
        ],
      },
      {
        content: 'Sợi bông (cotton) có thành phần chính là:',
        answers: [
          { content: 'Protein', isCorrect: false },
          { content: 'Xenlulozơ', isCorrect: true },
          { content: 'Tinh bột', isCorrect: false },
          { content: 'Polietilen', isCorrect: false },
        ],
      },
      {
        content: 'Hệ số trùng hợp (n) của polime cho biết:',
        answers: [
          { content: 'Khối lượng phân tử của monome', isCorrect: false },
          { content: 'Số mắt xích trong phân tử polime', isCorrect: true },
          { content: 'Số liên kết đôi trong monome', isCorrect: false },
          { content: 'Nhiệt độ nóng chảy của polime', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 5: Đại cương kim loại
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-hoa-hoc',
    title: 'Đề trắc nghiệm Hóa Học 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-hoa-hoc-de-5',
    description:
      'Đề trắc nghiệm Hóa Học 12 chủ đề Đại cương kim loại: dãy điện hóa, điện phân, ăn mòn, điều chế kim loại. Gồm 25 câu hỏi trắc nghiệm có đáp án.',
    instruction:
      'Hãy chọn đáp án đúng nhất cho mỗi câu hỏi. Thời gian làm bài 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Tính chất hóa học đặc trưng của kim loại là:',
        answers: [
          { content: 'Tính oxi hóa', isCorrect: false },
          { content: 'Tính khử', isCorrect: true },
          { content: 'Tính axit', isCorrect: false },
          { content: 'Tính bazơ', isCorrect: false },
        ],
      },
      {
        content: 'Trong dãy điện hóa, kim loại nào có tính khử mạnh nhất?',
        answers: [
          { content: 'Au', isCorrect: false },
          { content: 'K', isCorrect: true },
          { content: 'Fe', isCorrect: false },
          { content: 'Cu', isCorrect: false },
        ],
      },
      {
        content: 'Kim loại nào sau đây dẫn điện tốt nhất?',
        answers: [
          { content: 'Cu', isCorrect: false },
          { content: 'Ag', isCorrect: true },
          { content: 'Al', isCorrect: false },
          { content: 'Au', isCorrect: false },
        ],
      },
      {
        content: 'Ăn mòn điện hóa học xảy ra khi:',
        answers: [
          { content: 'Kim loại tiếp xúc với dung dịch axit', isCorrect: false },
          { content: 'Có hai kim loại khác nhau tiếp xúc với nhau trong dung dịch chất điện li', isCorrect: true },
          { content: 'Kim loại bị oxi hóa bởi oxi trong không khí', isCorrect: false },
          { content: 'Kim loại tác dụng với nước', isCorrect: false },
        ],
      },
      {
        content: 'Trong pin điện hóa Zn-Cu, kim loại nào đóng vai trò cực âm (anot)?',
        answers: [
          { content: 'Cu', isCorrect: false },
          { content: 'Zn', isCorrect: true },
          { content: 'Cả hai', isCorrect: false },
          { content: 'Không xác định được', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp điện phân dùng để điều chế kim loại nào?',
        answers: [
          { content: 'Fe', isCorrect: false },
          { content: 'Na', isCorrect: true },
          { content: 'Cu (từ CuSO₄)', isCorrect: false },
          { content: 'Ag', isCorrect: false },
        ],
      },
      {
        content: 'Điện phân dung dịch CuSO₄ với điện cực trơ, ở catot thu được:',
        answers: [
          { content: 'Cu', isCorrect: true },
          { content: 'O₂', isCorrect: false },
          { content: 'H₂', isCorrect: false },
          { content: 'SO₂', isCorrect: false },
        ],
      },
      {
        content: 'Kim loại nào sau đây không tác dụng với dung dịch HCl?',
        answers: [
          { content: 'Fe', isCorrect: false },
          { content: 'Zn', isCorrect: false },
          { content: 'Cu', isCorrect: true },
          { content: 'Al', isCorrect: false },
        ],
      },
      {
        content: 'Cho Fe vào dung dịch CuSO₄, hiện tượng quan sát được là:',
        answers: [
          { content: 'Có khí thoát ra', isCorrect: false },
          { content: 'Có kim loại màu đỏ bám trên bề mặt Fe, dung dịch nhạt màu xanh', isCorrect: true },
          { content: 'Không có hiện tượng gì', isCorrect: false },
          { content: 'Có kết tủa trắng', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp thủy luyện dùng để điều chế kim loại:',
        answers: [
          { content: 'Có tính khử mạnh (Na, K, Ca)', isCorrect: false },
          { content: 'Có tính khử yếu (Cu, Ag, Au)', isCorrect: true },
          { content: 'Có tính khử trung bình (Zn, Fe)', isCorrect: false },
          { content: 'Tất cả các kim loại', isCorrect: false },
        ],
      },
      {
        content: 'Hợp kim là:',
        answers: [
          { content: 'Chất tinh khiết gồm một kim loại', isCorrect: false },
          { content: 'Vật liệu kim loại có chứa thêm một số nguyên tố khác', isCorrect: true },
          { content: 'Hỗn hợp các phi kim', isCorrect: false },
          { content: 'Oxit kim loại', isCorrect: false },
        ],
      },
      {
        content: 'Kim loại nào sau đây có nhiệt độ nóng chảy cao nhất?',
        answers: [
          { content: 'Fe', isCorrect: false },
          { content: 'W (vonfam)', isCorrect: true },
          { content: 'Cu', isCorrect: false },
          { content: 'Al', isCorrect: false },
        ],
      },
      {
        content: 'Để bảo vệ vỏ tàu biển bằng thép, người ta thường gắn thêm:',
        answers: [
          { content: 'Lá đồng', isCorrect: false },
          { content: 'Lá kẽm', isCorrect: true },
          { content: 'Lá thiếc', isCorrect: false },
          { content: 'Lá bạc', isCorrect: false },
        ],
      },
      {
        content: 'Phương pháp nhiệt luyện dùng chất khử nào để khử oxit kim loại?',
        answers: [
          { content: 'CO, H₂, C hoặc kim loại mạnh hơn (Al)', isCorrect: true },
          { content: 'Dung dịch NaOH', isCorrect: false },
          { content: 'Dung dịch HCl', isCorrect: false },
          { content: 'Dòng điện', isCorrect: false },
        ],
      },
      {
        content: 'Phản ứng nhiệt nhôm là phản ứng giữa Al với:',
        answers: [
          { content: 'Dung dịch axit', isCorrect: false },
          { content: 'Oxit kim loại (như Fe₂O₃) ở nhiệt độ cao', isCorrect: true },
          { content: 'Dung dịch muối', isCorrect: false },
          { content: 'Nước', isCorrect: false },
        ],
      },
      {
        content: 'Kim loại nào sau đây nhẹ nhất (có khối lượng riêng nhỏ nhất)?',
        answers: [
          { content: 'Na', isCorrect: false },
          { content: 'Li', isCorrect: true },
          { content: 'K', isCorrect: false },
          { content: 'Al', isCorrect: false },
        ],
      },
      {
        content: 'Cho dãy kim loại: Fe, Cu, Ag, Al. Kim loại có tính khử mạnh nhất là:',
        answers: [
          { content: 'Fe', isCorrect: false },
          { content: 'Cu', isCorrect: false },
          { content: 'Ag', isCorrect: false },
          { content: 'Al', isCorrect: true },
        ],
      },
      {
        content: 'Điện phân nóng chảy NaCl thu được:',
        answers: [
          { content: 'Na ở catot và Cl₂ ở anot', isCorrect: true },
          { content: 'Na ở anot và Cl₂ ở catot', isCorrect: false },
          { content: 'NaOH và HCl', isCorrect: false },
          { content: 'Na₂O và Cl₂', isCorrect: false },
        ],
      },
      {
        content: 'Ăn mòn hóa học khác ăn mòn điện hóa ở chỗ:',
        answers: [
          { content: 'Không phát sinh dòng điện', isCorrect: true },
          { content: 'Luôn phát sinh dòng điện', isCorrect: false },
          { content: 'Xảy ra chậm hơn', isCorrect: false },
          { content: 'Chỉ xảy ra trong dung dịch axit', isCorrect: false },
        ],
      },
      {
        content: 'Kim loại nào sau đây có thể tan trong dung dịch NaOH?',
        answers: [
          { content: 'Fe', isCorrect: false },
          { content: 'Cu', isCorrect: false },
          { content: 'Al', isCorrect: true },
          { content: 'Ag', isCorrect: false },
        ],
      },
      {
        content: 'Cho Cu vào dung dịch FeCl₃ dư, sản phẩm thu được là:',
        answers: [
          { content: 'CuCl₂ và FeCl₂', isCorrect: true },
          { content: 'CuCl₂ và Fe', isCorrect: false },
          { content: 'Không phản ứng', isCorrect: false },
          { content: 'Cu(OH)₂ và FeCl₂', isCorrect: false },
        ],
      },
      {
        content: 'Liên kết kim loại là liên kết được hình thành giữa:',
        answers: [
          { content: 'Các nguyên tử kim loại với nhau nhờ các electron tự do', isCorrect: true },
          { content: 'Kim loại và phi kim nhờ cặp electron chung', isCorrect: false },
          { content: 'Các ion dương và ion âm', isCorrect: false },
          { content: 'Các nguyên tử phi kim với nhau', isCorrect: false },
        ],
      },
      {
        content: 'Khi điện phân dung dịch NaCl có màng ngăn, sản phẩm thu được là:',
        answers: [
          { content: 'Na và Cl₂', isCorrect: false },
          { content: 'NaOH, Cl₂ và H₂', isCorrect: true },
          { content: 'NaCl và H₂O', isCorrect: false },
          { content: 'Na₂O và HCl', isCorrect: false },
        ],
      },
      {
        content: 'Thép là hợp kim của sắt với cacbon, trong đó hàm lượng cacbon chiếm:',
        answers: [
          { content: 'Dưới 2%', isCorrect: true },
          { content: 'Từ 2% đến 5%', isCorrect: false },
          { content: 'Trên 5%', isCorrect: false },
          { content: 'Trên 10%', isCorrect: false },
        ],
      },
      {
        content: 'Ngâm một lá Zn trong dung dịch CuSO₄. Phản ứng xảy ra vì:',
        answers: [
          { content: 'Cu có tính khử mạnh hơn Zn', isCorrect: false },
          { content: 'Zn có tính khử mạnh hơn Cu (Zn đứng trước Cu trong dãy điện hóa)', isCorrect: true },
          { content: 'CuSO₄ là chất khử', isCorrect: false },
          { content: 'Zn là chất oxi hóa', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
