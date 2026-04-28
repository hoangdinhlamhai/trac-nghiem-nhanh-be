import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Đề 1: Tổng hợp este, cacbohidrat, amin, amino axit, protein
  // =============================================
  {
    categorySlug: 'on-thi-thpt-hoa-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Hóa Học - Đề số 1',
    slug: 'on-thi-thpt-hoa-hoc-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Hóa Học - Đề số 1. Tổng hợp: este, cacbohidrat, amin, amino axit, protein. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Este etyl axetat có công thức phân tử là:',
        answers: [
          { content: 'C₃H₆O₂', isCorrect: false },
          { content: 'C₄H₈O₂', isCorrect: true },
          { content: 'C₂H₄O₂', isCorrect: false },
          { content: 'C₅H₁₀O₂', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng thủy phân este trong môi trường axit có đặc điểm gì?',
        answers: [
          { content: 'Phản ứng một chiều', isCorrect: false },
          { content: 'Phản ứng thuận nghịch', isCorrect: true },
          { content: 'Phản ứng không cần xúc tác', isCorrect: false },
          { content: 'Phản ứng tỏa nhiệt mạnh', isCorrect: false },
        ],
      },
      {
        content:
          'Xà phòng hóa hoàn toàn CH₃COOC₂H₅ bằng NaOH thu được:',
        answers: [
          { content: 'CH₃COONa và CH₃OH', isCorrect: false },
          { content: 'CH₃COONa và C₂H₅OH', isCorrect: true },
          { content: 'C₂H₅COONa và CH₃OH', isCorrect: false },
          { content: 'HCOONa và C₂H₅OH', isCorrect: false },
        ],
      },
      {
        content:
          'Glucozơ có công thức phân tử là:',
        answers: [
          { content: 'C₁₂H₂₂O₁₁', isCorrect: false },
          { content: 'C₆H₁₂O₆', isCorrect: true },
          { content: '(C₆H₁₀O₅)ₙ', isCorrect: false },
          { content: 'C₂H₅OH', isCorrect: false },
        ],
      },
      {
        content:
          'Glucozơ và fructozơ là:',
        answers: [
          { content: 'Đồng đẳng của nhau', isCorrect: false },
          { content: 'Đồng phân của nhau', isCorrect: true },
          { content: 'Cùng là đisaccarit', isCorrect: false },
          { content: 'Cùng là polisaccarit', isCorrect: false },
        ],
      },
      {
        content:
          'Saccarozơ khi thủy phân trong môi trường axit tạo thành:',
        answers: [
          { content: 'Glucozơ và glucozơ', isCorrect: false },
          { content: 'Glucozơ và fructozơ', isCorrect: true },
          { content: 'Fructozơ và fructozơ', isCorrect: false },
          { content: 'Glucozơ và galactozơ', isCorrect: false },
        ],
      },
      {
        content:
          'Tinh bột thuộc loại:',
        answers: [
          { content: 'Monosaccarit', isCorrect: false },
          { content: 'Đisaccarit', isCorrect: false },
          { content: 'Polisaccarit', isCorrect: true },
          { content: 'Este', isCorrect: false },
        ],
      },
      {
        content:
          'Xenlulozơ có công thức là:',
        answers: [
          { content: '(C₆H₁₀O₅)ₙ', isCorrect: true },
          { content: 'C₁₂H₂₂O₁₁', isCorrect: false },
          { content: 'C₆H₁₂O₆', isCorrect: false },
          { content: '(C₆H₁₂O₆)ₙ', isCorrect: false },
        ],
      },
      {
        content:
          'Amin nào sau đây là amin bậc một?',
        answers: [
          { content: '(CH₃)₂NH', isCorrect: false },
          { content: 'C₂H₅NH₂', isCorrect: true },
          { content: '(CH₃)₃N', isCorrect: false },
          { content: 'CH₃NHC₂H₅', isCorrect: false },
        ],
      },
      {
        content:
          'Anilin (C₆H₅NH₂) có tính chất nào sau đây?',
        answers: [
          { content: 'Làm quỳ tím chuyển xanh', isCorrect: false },
          { content: 'Tạo kết tủa trắng với nước brom', isCorrect: true },
          { content: 'Tan tốt trong nước', isCorrect: false },
          { content: 'Phản ứng với NaOH', isCorrect: false },
        ],
      },
      {
        content:
          'Amino axit là hợp chất hữu cơ trong phân tử chứa đồng thời:',
        answers: [
          { content: 'Nhóm -NH₂ và nhóm -COOH', isCorrect: true },
          { content: 'Nhóm -OH và nhóm -COOH', isCorrect: false },
          { content: 'Nhóm -NH₂ và nhóm -CHO', isCorrect: false },
          { content: 'Nhóm -NH₂ và nhóm -OH', isCorrect: false },
        ],
      },
      {
        content:
          'Glyxin (axit aminoaxetic) có công thức là:',
        answers: [
          { content: 'H₂N-CH₂-COOH', isCorrect: true },
          { content: 'H₂N-CH(CH₃)-COOH', isCorrect: false },
          { content: 'C₆H₅-NH₂', isCorrect: false },
          { content: 'CH₃-NH₂', isCorrect: false },
        ],
      },
      {
        content:
          'Amino axit có tính chất lưỡng tính vì:',
        answers: [
          { content: 'Vừa tan trong nước vừa không tan', isCorrect: false },
          { content: 'Vừa có nhóm -NH₂ (tính bazơ) vừa có nhóm -COOH (tính axit)', isCorrect: true },
          { content: 'Vừa có tính oxi hóa vừa có tính khử', isCorrect: false },
          { content: 'Vừa phản ứng với kim loại vừa phản ứng với phi kim', isCorrect: false },
        ],
      },
      {
        content:
          'Liên kết peptit là liên kết:',
        answers: [
          { content: '-CO-NH- giữa hai đơn vị amino axit', isCorrect: true },
          { content: '-CO-O- giữa hai đơn vị amino axit', isCorrect: false },
          { content: '-NH-NH- giữa hai đơn vị amino axit', isCorrect: false },
          { content: '-CO-CO- giữa hai đơn vị amino axit', isCorrect: false },
        ],
      },
      {
        content:
          'Protein khi thủy phân hoàn toàn tạo thành:',
        answers: [
          { content: 'Các amino axit', isCorrect: true },
          { content: 'Các axit béo', isCorrect: false },
          { content: 'Glucozơ', isCorrect: false },
          { content: 'Các nucleotit', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng màu biure là phản ứng của protein với:',
        answers: [
          { content: 'HNO₃ đặc', isCorrect: false },
          { content: 'Cu(OH)₂ trong môi trường kiềm', isCorrect: true },
          { content: 'AgNO₃/NH₃', isCorrect: false },
          { content: 'Nước brom', isCorrect: false },
        ],
      },
      {
        content:
          'Chất béo là trieste của glixerol với axit béo. Glixerol có công thức là:',
        answers: [
          { content: 'C₃H₅(OH)₃', isCorrect: true },
          { content: 'C₂H₄(OH)₂', isCorrect: false },
          { content: 'C₃H₇OH', isCorrect: false },
          { content: 'C₆H₅OH', isCorrect: false },
        ],
      },
      {
        content:
          'Glucozơ có phản ứng tráng bạc vì trong phân tử có nhóm chức:',
        answers: [
          { content: '-OH', isCorrect: false },
          { content: '-CHO', isCorrect: true },
          { content: '-COOH', isCorrect: false },
          { content: '-CO-', isCorrect: false },
        ],
      },
      {
        content:
          'Lên men glucozơ thu được sản phẩm chính là:',
        answers: [
          { content: 'CH₃COOH và H₂O', isCorrect: false },
          { content: 'C₂H₅OH và CO₂', isCorrect: true },
          { content: 'CH₃CHO và H₂O', isCorrect: false },
          { content: 'CH₄ và CO₂', isCorrect: false },
        ],
      },
      {
        content:
          'Metylamin (CH₃NH₂) có tính chất nào sau đây?',
        answers: [
          { content: 'Làm quỳ tím chuyển đỏ', isCorrect: false },
          { content: 'Làm quỳ tím chuyển xanh', isCorrect: true },
          { content: 'Không làm đổi màu quỳ tím', isCorrect: false },
          { content: 'Làm quỳ tím mất màu', isCorrect: false },
        ],
      },
      {
        content:
          'Tripeptit Gly-Ala-Val có bao nhiêu liên kết peptit?',
        answers: [
          { content: '1', isCorrect: false },
          { content: '2', isCorrect: true },
          { content: '3', isCorrect: false },
          { content: '4', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng nào chứng minh glucozơ có nhiều nhóm -OH liền kề?',
        answers: [
          { content: 'Phản ứng tráng bạc', isCorrect: false },
          { content: 'Phản ứng với Cu(OH)₂ ở nhiệt độ thường tạo dung dịch xanh lam', isCorrect: true },
          { content: 'Phản ứng lên men', isCorrect: false },
          { content: 'Phản ứng với H₂/Ni', isCorrect: false },
        ],
      },
      {
        content:
          'Este nào sau đây có mùi chuối chín?',
        answers: [
          { content: 'Etyl axetat', isCorrect: false },
          { content: 'Isoamyl axetat', isCorrect: true },
          { content: 'Etyl butirat', isCorrect: false },
          { content: 'Metyl salixylat', isCorrect: false },
        ],
      },
      {
        content:
          'Tinh bột và xenlulozơ khác nhau ở điểm nào?',
        answers: [
          { content: 'Công thức phân tử', isCorrect: false },
          { content: 'Cấu trúc mạch (tinh bột có nhánh, xenlulozơ mạch thẳng)', isCorrect: true },
          { content: 'Thành phần nguyên tố', isCorrect: false },
          { content: 'Đều là polisaccarit nên không khác nhau', isCorrect: false },
        ],
      },
      {
        content:
          'Axit glutamic có công thức HOOC-CH₂-CH₂-CH(NH₂)-COOH. Dung dịch axit glutamic làm quỳ tím:',
        answers: [
          { content: 'Chuyển xanh', isCorrect: false },
          { content: 'Chuyển đỏ', isCorrect: true },
          { content: 'Không đổi màu', isCorrect: false },
          { content: 'Mất màu', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 2: Tổng hợp polime, kim loại kiềm, kiềm thổ, nhôm
  // =============================================
  {
    categorySlug: 'on-thi-thpt-hoa-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Hóa Học - Đề số 2',
    slug: 'on-thi-thpt-hoa-hoc-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Hóa Học - Đề số 2. Tổng hợp: polime, kim loại kiềm, kiềm thổ, nhôm. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Polime nào sau đây được tổng hợp bằng phản ứng trùng hợp?',
        answers: [
          { content: 'Nilon-6,6', isCorrect: false },
          { content: 'Polietilen (PE)', isCorrect: true },
          { content: 'Tơ lapsan', isCorrect: false },
          { content: 'Nilon-6,10', isCorrect: false },
        ],
      },
      {
        content:
          'Tơ nilon-6,6 được tổng hợp từ:',
        answers: [
          { content: 'Axit ađipic và hexametylenđiamin', isCorrect: true },
          { content: 'Axit terephtalic và etylen glicol', isCorrect: false },
          { content: 'Caprolactam', isCorrect: false },
          { content: 'Vinyl clorua', isCorrect: false },
        ],
      },
      {
        content:
          'Cao su buna là sản phẩm trùng hợp của:',
        answers: [
          { content: 'Isopren', isCorrect: false },
          { content: 'Buta-1,3-đien', isCorrect: true },
          { content: 'Stiren', isCorrect: false },
          { content: 'Vinyl clorua', isCorrect: false },
        ],
      },
      {
        content:
          'Polime nào sau đây có nguồn gốc thiên nhiên?',
        answers: [
          { content: 'Polietilen', isCorrect: false },
          { content: 'Xenlulozơ', isCorrect: true },
          { content: 'Poli(vinyl clorua)', isCorrect: false },
          { content: 'Polistiren', isCorrect: false },
        ],
      },
      {
        content:
          'Kim loại kiềm có đặc điểm chung nào sau đây?',
        answers: [
          { content: 'Có nhiệt độ nóng chảy cao', isCorrect: false },
          { content: 'Có tính khử mạnh nhất trong các kim loại', isCorrect: true },
          { content: 'Có khối lượng riêng lớn', isCorrect: false },
          { content: 'Có độ cứng cao', isCorrect: false },
        ],
      },
      {
        content:
          'Kim loại Na tác dụng với nước tạo thành:',
        answers: [
          { content: 'NaOH và H₂', isCorrect: true },
          { content: 'Na₂O và H₂', isCorrect: false },
          { content: 'NaOH và O₂', isCorrect: false },
          { content: 'Na₂O₂ và H₂O', isCorrect: false },
        ],
      },
      {
        content:
          'Phương pháp điều chế kim loại kiềm trong công nghiệp là:',
        answers: [
          { content: 'Nhiệt luyện', isCorrect: false },
          { content: 'Thủy luyện', isCorrect: false },
          { content: 'Điện phân nóng chảy muối halogenua', isCorrect: true },
          { content: 'Điện phân dung dịch', isCorrect: false },
        ],
      },
      {
        content:
          'Nước cứng là nước chứa nhiều ion:',
        answers: [
          { content: 'Na⁺ và K⁺', isCorrect: false },
          { content: 'Ca²⁺ và Mg²⁺', isCorrect: true },
          { content: 'Fe²⁺ và Fe³⁺', isCorrect: false },
          { content: 'Al³⁺ và Cu²⁺', isCorrect: false },
        ],
      },
      {
        content:
          'Nước cứng tạm thời chứa các muối:',
        answers: [
          { content: 'CaCl₂, MgCl₂', isCorrect: false },
          { content: 'Ca(HCO₃)₂, Mg(HCO₃)₂', isCorrect: true },
          { content: 'CaSO₄, MgSO₄', isCorrect: false },
          { content: 'Ca(NO₃)₂, Mg(NO₃)₂', isCorrect: false },
        ],
      },
      {
        content:
          'Để làm mềm nước cứng tạm thời, có thể dùng cách nào?',
        answers: [
          { content: 'Đun sôi nước', isCorrect: true },
          { content: 'Thêm NaCl', isCorrect: false },
          { content: 'Thêm HCl', isCorrect: false },
          { content: 'Lọc qua cát', isCorrect: false },
        ],
      },
      {
        content:
          'Nhôm có tính chất hóa học đặc trưng là:',
        answers: [
          { content: 'Tính oxi hóa mạnh', isCorrect: false },
          { content: 'Tính khử mạnh', isCorrect: true },
          { content: 'Tính axit', isCorrect: false },
          { content: 'Tính bazơ', isCorrect: false },
        ],
      },
      {
        content:
          'Al₂O₃ có tính chất lưỡng tính, nghĩa là:',
        answers: [
          { content: 'Vừa tan trong axit vừa tan trong dung dịch kiềm', isCorrect: true },
          { content: 'Chỉ tan trong axit', isCorrect: false },
          { content: 'Chỉ tan trong kiềm', isCorrect: false },
          { content: 'Không tan trong axit và kiềm', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng nhiệt nhôm là phản ứng giữa Al với:',
        answers: [
          { content: 'Oxit kim loại ở nhiệt độ cao', isCorrect: true },
          { content: 'Axit', isCorrect: false },
          { content: 'Nước', isCorrect: false },
          { content: 'Dung dịch muối', isCorrect: false },
        ],
      },
      {
        content:
          'Quặng boxit dùng để sản xuất nhôm có thành phần chính là:',
        answers: [
          { content: 'Al₂O₃', isCorrect: true },
          { content: 'AlCl₃', isCorrect: false },
          { content: 'Al(OH)₃', isCorrect: false },
          { content: 'Al₂(SO₄)₃', isCorrect: false },
        ],
      },
      {
        content:
          'Al(OH)₃ tan trong dung dịch NaOH tạo thành:',
        answers: [
          { content: 'NaAlO₂ và H₂O', isCorrect: true },
          { content: 'Al₂O₃ và NaOH', isCorrect: false },
          { content: 'Na₂O và Al(OH)₃', isCorrect: false },
          { content: 'Al₂(SO₄)₃ và NaOH', isCorrect: false },
        ],
      },
      {
        content:
          'Kim loại kiềm thổ nào sau đây có tính khử mạnh nhất?',
        answers: [
          { content: 'Be', isCorrect: false },
          { content: 'Mg', isCorrect: false },
          { content: 'Ca', isCorrect: false },
          { content: 'Ba', isCorrect: true },
        ],
      },
      {
        content:
          'CaCO₃ bị nhiệt phân tạo thành:',
        answers: [
          { content: 'CaO và CO₂', isCorrect: true },
          { content: 'Ca(OH)₂ và CO₂', isCorrect: false },
          { content: 'Ca và CO₂', isCorrect: false },
          { content: 'CaO và CO', isCorrect: false },
        ],
      },
      {
        content:
          'Tơ tằm thuộc loại:',
        answers: [
          { content: 'Tơ tổng hợp', isCorrect: false },
          { content: 'Tơ thiên nhiên', isCorrect: true },
          { content: 'Tơ bán tổng hợp', isCorrect: false },
          { content: 'Tơ nhân tạo', isCorrect: false },
        ],
      },
      {
        content:
          'Poli(vinyl clorua) (PVC) được tổng hợp từ monome nào?',
        answers: [
          { content: 'CH₂=CH₂', isCorrect: false },
          { content: 'CH₂=CHCl', isCorrect: true },
          { content: 'CH₂=CH-CH₃', isCorrect: false },
          { content: 'CF₂=CF₂', isCorrect: false },
        ],
      },
      {
        content:
          'Mg cháy trong không khí tạo thành:',
        answers: [
          { content: 'MgO', isCorrect: true },
          { content: 'Mg(OH)₂', isCorrect: false },
          { content: 'MgCO₃', isCorrect: false },
          { content: 'MgCl₂', isCorrect: false },
        ],
      },
      {
        content:
          'Cho dung dịch NaOH dư vào dung dịch AlCl₃, hiện tượng quan sát được là:',
        answers: [
          { content: 'Có kết tủa trắng, không tan', isCorrect: false },
          { content: 'Có kết tủa trắng, sau đó kết tủa tan hết', isCorrect: true },
          { content: 'Không có hiện tượng gì', isCorrect: false },
          { content: 'Có khí thoát ra', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng trùng ngưng khác phản ứng trùng hợp ở điểm nào?',
        answers: [
          { content: 'Trùng ngưng tạo ra sản phẩm phụ (thường là H₂O)', isCorrect: true },
          { content: 'Trùng ngưng không cần xúc tác', isCorrect: false },
          { content: 'Trùng ngưng chỉ dùng một loại monome', isCorrect: false },
          { content: 'Trùng ngưng tạo polime mạch nhánh', isCorrect: false },
        ],
      },
      {
        content:
          'Ca(OH)₂ (vôi tôi) tác dụng với CO₂ dư tạo thành:',
        answers: [
          { content: 'CaCO₃ và H₂O', isCorrect: false },
          { content: 'Ca(HCO₃)₂', isCorrect: true },
          { content: 'CaO và H₂O', isCorrect: false },
          { content: 'CaCO₃ và CO', isCorrect: false },
        ],
      },
      {
        content:
          'Nhôm không tan trong dung dịch nào sau đây?',
        answers: [
          { content: 'HCl', isCorrect: false },
          { content: 'NaOH', isCorrect: false },
          { content: 'H₂SO₄ loãng', isCorrect: false },
          { content: 'H₂SO₄ đặc, nguội', isCorrect: true },
        ],
      },
      {
        content:
          'Chất nào sau đây là polime tổng hợp?',
        answers: [
          { content: 'Tinh bột', isCorrect: false },
          { content: 'Tơ tằm', isCorrect: false },
          { content: 'Cao su thiên nhiên', isCorrect: false },
          { content: 'Tơ nilon-6', isCorrect: true },
        ],
      },
    ],
  },
  // =============================================
  // Đề 3: Tổng hợp sắt, crom, đồng, điện phân, ăn mòn kim loại
  // =============================================
  {
    categorySlug: 'on-thi-thpt-hoa-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Hóa Học - Đề số 3',
    slug: 'on-thi-thpt-hoa-hoc-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Hóa Học - Đề số 3. Tổng hợp: sắt, crom, đồng, điện phân, ăn mòn kim loại. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Cấu hình electron của Fe (Z = 26) là:',
        answers: [
          { content: '[Ar]3d⁶4s²', isCorrect: true },
          { content: '[Ar]3d⁸', isCorrect: false },
          { content: '[Ar]4s²3d⁶', isCorrect: false },
          { content: '[Ar]3d⁵4s³', isCorrect: false },
        ],
      },
      {
        content:
          'Ion Fe²⁺ có cấu hình electron là:',
        answers: [
          { content: '[Ar]3d⁶', isCorrect: true },
          { content: '[Ar]3d⁴4s²', isCorrect: false },
          { content: '[Ar]3d⁵4s¹', isCorrect: false },
          { content: '[Ar]3d⁸', isCorrect: false },
        ],
      },
      {
        content:
          'Fe tác dụng với dung dịch HCl tạo thành:',
        answers: [
          { content: 'FeCl₃ và H₂', isCorrect: false },
          { content: 'FeCl₂ và H₂', isCorrect: true },
          { content: 'FeCl₂ và Cl₂', isCorrect: false },
          { content: 'Fe₂O₃ và HCl', isCorrect: false },
        ],
      },
      {
        content:
          'Fe tác dụng với dung dịch HNO₃ loãng dư tạo thành:',
        answers: [
          { content: 'Fe(NO₃)₂ và NO', isCorrect: false },
          { content: 'Fe(NO₃)₃ và NO', isCorrect: true },
          { content: 'Fe(NO₃)₂ và H₂', isCorrect: false },
          { content: 'Fe₂O₃ và NO₂', isCorrect: false },
        ],
      },
      {
        content:
          'Quặng hematit đỏ có thành phần chính là:',
        answers: [
          { content: 'Fe₃O₄', isCorrect: false },
          { content: 'Fe₂O₃', isCorrect: true },
          { content: 'FeS₂', isCorrect: false },
          { content: 'FeCO₃', isCorrect: false },
        ],
      },
      {
        content:
          'Trong lò cao, chất khử trực tiếp oxit sắt là:',
        answers: [
          { content: 'C (than cốc)', isCorrect: false },
          { content: 'CO', isCorrect: true },
          { content: 'H₂', isCorrect: false },
          { content: 'Al', isCorrect: false },
        ],
      },
      {
        content:
          'Crom có số oxi hóa phổ biến là:',
        answers: [
          { content: '+1, +2, +3', isCorrect: false },
          { content: '+2, +3, +6', isCorrect: true },
          { content: '+3, +4, +6', isCorrect: false },
          { content: '+1, +3, +5', isCorrect: false },
        ],
      },
      {
        content:
          'Cr₂O₃ có tính chất hóa học nào?',
        answers: [
          { content: 'Chỉ có tính axit', isCorrect: false },
          { content: 'Chỉ có tính bazơ', isCorrect: false },
          { content: 'Có tính lưỡng tính', isCorrect: true },
          { content: 'Trung tính', isCorrect: false },
        ],
      },
      {
        content:
          'Dung dịch K₂Cr₂O₇ có màu gì?',
        answers: [
          { content: 'Màu vàng', isCorrect: false },
          { content: 'Màu da cam', isCorrect: true },
          { content: 'Màu xanh lục', isCorrect: false },
          { content: 'Màu tím', isCorrect: false },
        ],
      },
      {
        content:
          'Cu tác dụng với dung dịch HNO₃ loãng tạo thành:',
        answers: [
          { content: 'Cu(NO₃)₂, NO và H₂O', isCorrect: true },
          { content: 'CuO, NO₂ và H₂O', isCorrect: false },
          { content: 'Cu(NO₃)₂ và H₂', isCorrect: false },
          { content: 'Cu₂O, NO và H₂O', isCorrect: false },
        ],
      },
      {
        content:
          'Cu không tác dụng với dung dịch nào sau đây?',
        answers: [
          { content: 'HNO₃ loãng', isCorrect: false },
          { content: 'H₂SO₄ đặc, nóng', isCorrect: false },
          { content: 'FeCl₃', isCorrect: false },
          { content: 'HCl', isCorrect: true },
        ],
      },
      {
        content:
          'Ăn mòn điện hóa học xảy ra khi có đủ các điều kiện nào?',
        answers: [
          { content: 'Hai điện cực khác nhau, tiếp xúc nhau, cùng nhúng trong dung dịch điện li', isCorrect: true },
          { content: 'Chỉ cần hai kim loại tiếp xúc nhau', isCorrect: false },
          { content: 'Chỉ cần kim loại nhúng trong dung dịch axit', isCorrect: false },
          { content: 'Kim loại tiếp xúc với không khí ẩm', isCorrect: false },
        ],
      },
      {
        content:
          'Trong ăn mòn điện hóa cặp Fe-Cu trong dung dịch điện li, kim loại nào bị ăn mòn?',
        answers: [
          { content: 'Cu', isCorrect: false },
          { content: 'Fe', isCorrect: true },
          { content: 'Cả Fe và Cu', isCorrect: false },
          { content: 'Không kim loại nào bị ăn mòn', isCorrect: false },
        ],
      },
      {
        content:
          'Phương pháp bảo vệ kim loại bằng cách phủ lên bề mặt kim loại một lớp sơn, mạ gọi là:',
        answers: [
          { content: 'Phương pháp điện hóa', isCorrect: false },
          { content: 'Phương pháp bảo vệ bề mặt', isCorrect: true },
          { content: 'Phương pháp dùng chất ức chế', isCorrect: false },
          { content: 'Phương pháp thay đổi thành phần', isCorrect: false },
        ],
      },
      {
        content:
          'Khi điện phân dung dịch CuSO₄ với điện cực trơ, ở catốt xảy ra quá trình:',
        answers: [
          { content: 'Cu²⁺ + 2e → Cu', isCorrect: true },
          { content: '2H₂O → O₂ + 4H⁺ + 4e', isCorrect: false },
          { content: 'SO₄²⁻ → SO₃ + O²⁻', isCorrect: false },
          { content: 'Cu → Cu²⁺ + 2e', isCorrect: false },
        ],
      },
      {
        content:
          'Khi điện phân dung dịch NaCl có màng ngăn, sản phẩm thu được là:',
        answers: [
          { content: 'Na, Cl₂ và H₂', isCorrect: false },
          { content: 'NaOH, Cl₂ và H₂', isCorrect: true },
          { content: 'NaClO và H₂', isCorrect: false },
          { content: 'Na₂O và Cl₂', isCorrect: false },
        ],
      },
      {
        content:
          'Điện phân dung dịch CuSO₄ với điện cực trơ, ở anốt thu được khí gì?',
        answers: [
          { content: 'H₂', isCorrect: false },
          { content: 'O₂', isCorrect: true },
          { content: 'Cl₂', isCorrect: false },
          { content: 'SO₂', isCorrect: false },
        ],
      },
      {
        content:
          'Gang là hợp kim của sắt với cacbon, trong đó hàm lượng cacbon là:',
        answers: [
          { content: 'Dưới 2%', isCorrect: false },
          { content: '2% – 5%', isCorrect: true },
          { content: '5% – 10%', isCorrect: false },
          { content: 'Trên 10%', isCorrect: false },
        ],
      },
      {
        content:
          'Thép là hợp kim của sắt với cacbon, trong đó hàm lượng cacbon là:',
        answers: [
          { content: '0,01% – 2%', isCorrect: true },
          { content: '2% – 5%', isCorrect: false },
          { content: '5% – 10%', isCorrect: false },
          { content: 'Dưới 0,01%', isCorrect: false },
        ],
      },
      {
        content:
          'Fe₃O₄ là oxit hỗn hợp, có thể viết dưới dạng:',
        answers: [
          { content: 'FeO·Fe₂O₃', isCorrect: true },
          { content: '2FeO·Fe₂O₃', isCorrect: false },
          { content: 'FeO·2Fe₂O₃', isCorrect: false },
          { content: '3FeO·Fe₂O₃', isCorrect: false },
        ],
      },
      {
        content:
          'Cho Fe vào dung dịch CuSO₄, hiện tượng quan sát được là:',
        answers: [
          { content: 'Fe tan, có lớp Cu đỏ bám trên Fe', isCorrect: true },
          { content: 'Không có hiện tượng gì', isCorrect: false },
          { content: 'Có khí thoát ra', isCorrect: false },
          { content: 'Dung dịch chuyển sang màu vàng', isCorrect: false },
        ],
      },
      {
        content:
          'Crom bền trong không khí và nước nhờ:',
        answers: [
          { content: 'Lớp oxit Cr₂O₃ bền bảo vệ', isCorrect: true },
          { content: 'Crom không phản ứng với O₂', isCorrect: false },
          { content: 'Crom có tính khử yếu', isCorrect: false },
          { content: 'Crom có nhiệt độ nóng chảy thấp', isCorrect: false },
        ],
      },
      {
        content:
          'Định luật Faraday trong điện phân: m = AIt/(nF). Trong đó F (hằng số Faraday) có giá trị:',
        answers: [
          { content: '96500 C/mol', isCorrect: true },
          { content: '9650 C/mol', isCorrect: false },
          { content: '965 C/mol', isCorrect: false },
          { content: '965000 C/mol', isCorrect: false },
        ],
      },
      {
        content:
          'Để bảo vệ vỏ tàu biển bằng thép, người ta gắn vào vỏ tàu (phần ngâm trong nước biển) những tấm:',
        answers: [
          { content: 'Đồng', isCorrect: false },
          { content: 'Kẽm', isCorrect: true },
          { content: 'Thiếc', isCorrect: false },
          { content: 'Chì', isCorrect: false },
        ],
      },
      {
        content:
          'Hợp chất nào của crom có tính oxi hóa mạnh?',
        answers: [
          { content: 'CrO', isCorrect: false },
          { content: 'Cr₂O₃', isCorrect: false },
          { content: 'CrO₃', isCorrect: true },
          { content: 'Cr(OH)₃', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 4: Tổng hợp phi kim, hóa vô cơ tổng hợp
  // =============================================
  {
    categorySlug: 'on-thi-thpt-hoa-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Hóa Học - Đề số 4',
    slug: 'on-thi-thpt-hoa-hoc-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Hóa Học - Đề số 4. Tổng hợp: phi kim, hóa vô cơ tổng hợp. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Phi kim nào có tính oxi hóa mạnh nhất?',
        answers: [
          { content: 'Oxi (O₂)', isCorrect: false },
          { content: 'Clo (Cl₂)', isCorrect: false },
          { content: 'Flo (F₂)', isCorrect: true },
          { content: 'Nitơ (N₂)', isCorrect: false },
        ],
      },
      {
        content:
          'Khí Cl₂ tác dụng với dung dịch NaOH tạo thành:',
        answers: [
          { content: 'NaCl và NaClO', isCorrect: true },
          { content: 'NaCl và NaClO₃', isCorrect: false },
          { content: 'NaCl và H₂O', isCorrect: false },
          { content: 'NaClO và H₂O', isCorrect: false },
        ],
      },
      {
        content:
          'Axit H₂SO₄ đặc, nóng có tính chất đặc trưng nào?',
        answers: [
          { content: 'Tính axit yếu', isCorrect: false },
          { content: 'Tính oxi hóa mạnh', isCorrect: true },
          { content: 'Tính khử mạnh', isCorrect: false },
          { content: 'Tính bazơ', isCorrect: false },
        ],
      },
      {
        content:
          'HNO₃ loãng tác dụng với Cu tạo ra khí gì?',
        answers: [
          { content: 'NO₂ (nâu đỏ)', isCorrect: false },
          { content: 'NO (không màu, hóa nâu trong không khí)', isCorrect: true },
          { content: 'N₂O', isCorrect: false },
          { content: 'H₂', isCorrect: false },
        ],
      },
      {
        content:
          'Trong công nghiệp, HNO₃ được sản xuất từ nguyên liệu chính là:',
        answers: [
          { content: 'N₂ và O₂', isCorrect: false },
          { content: 'NH₃ và O₂', isCorrect: true },
          { content: 'NO₂ và H₂O', isCorrect: false },
          { content: 'NaNO₃ và H₂SO₄', isCorrect: false },
        ],
      },
      {
        content:
          'Phân đạm urê có công thức là:',
        answers: [
          { content: 'NH₄NO₃', isCorrect: false },
          { content: '(NH₂)₂CO', isCorrect: true },
          { content: 'NH₄Cl', isCorrect: false },
          { content: '(NH₄)₂SO₄', isCorrect: false },
        ],
      },
      {
        content:
          'Phân supephotphat kép có thành phần chính là:',
        answers: [
          { content: 'Ca(H₂PO₄)₂', isCorrect: true },
          { content: 'Ca₃(PO₄)₂ và CaSO₄', isCorrect: false },
          { content: 'Ca₃(PO₄)₂', isCorrect: false },
          { content: 'NH₄H₂PO₄', isCorrect: false },
        ],
      },
      {
        content:
          'Khí SO₂ có tính chất hóa học nào?',
        answers: [
          { content: 'Chỉ có tính oxi hóa', isCorrect: false },
          { content: 'Chỉ có tính khử', isCorrect: false },
          { content: 'Vừa có tính oxi hóa vừa có tính khử', isCorrect: true },
          { content: 'Không có tính oxi hóa và tính khử', isCorrect: false },
        ],
      },
      {
        content:
          'Khí H₂S có mùi gì?',
        answers: [
          { content: 'Mùi hắc', isCorrect: false },
          { content: 'Mùi trứng thối', isCorrect: true },
          { content: 'Mùi khai', isCorrect: false },
          { content: 'Không mùi', isCorrect: false },
        ],
      },
      {
        content:
          'Cacbon có hai dạng thù hình phổ biến là:',
        answers: [
          { content: 'Kim cương và than chì', isCorrect: true },
          { content: 'Kim cương và oxi', isCorrect: false },
          { content: 'Than chì và lưu huỳnh', isCorrect: false },
          { content: 'Kim cương và silic', isCorrect: false },
        ],
      },
      {
        content:
          'CO có tính chất hóa học đặc trưng là:',
        answers: [
          { content: 'Tính oxi hóa', isCorrect: false },
          { content: 'Tính khử', isCorrect: true },
          { content: 'Tính axit', isCorrect: false },
          { content: 'Tính bazơ', isCorrect: false },
        ],
      },
      {
        content:
          'CO₂ tác dụng với dung dịch NaOH dư tạo thành:',
        answers: [
          { content: 'NaHCO₃', isCorrect: false },
          { content: 'Na₂CO₃ và H₂O', isCorrect: true },
          { content: 'Na₂O và CO₂', isCorrect: false },
          { content: 'NaHCO₃ và NaOH', isCorrect: false },
        ],
      },
      {
        content:
          'Silic đioxit (SiO₂) tan được trong dung dịch nào?',
        answers: [
          { content: 'HCl', isCorrect: false },
          { content: 'H₂SO₄', isCorrect: false },
          { content: 'HF', isCorrect: true },
          { content: 'HNO₃', isCorrect: false },
        ],
      },
      {
        content:
          'Nitơ thể hiện tính oxi hóa khi tác dụng với chất nào?',
        answers: [
          { content: 'O₂', isCorrect: false },
          { content: 'H₂ (ở nhiệt độ cao, xúc tác)', isCorrect: true },
          { content: 'F₂', isCorrect: false },
          { content: 'Cl₂', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng tổng hợp NH₃ từ N₂ và H₂ là phản ứng:',
        answers: [
          { content: 'Thuận nghịch, tỏa nhiệt', isCorrect: true },
          { content: 'Một chiều, tỏa nhiệt', isCorrect: false },
          { content: 'Thuận nghịch, thu nhiệt', isCorrect: false },
          { content: 'Một chiều, thu nhiệt', isCorrect: false },
        ],
      },
      {
        content:
          'Photpho trắng có đặc điểm gì?',
        answers: [
          { content: 'Bền trong không khí, không độc', isCorrect: false },
          { content: 'Rất độc, dễ bốc cháy trong không khí', isCorrect: true },
          { content: 'Không cháy được', isCorrect: false },
          { content: 'Tan tốt trong nước', isCorrect: false },
        ],
      },
      {
        content:
          'Axit H₃PO₄ là axit mấy nấc?',
        answers: [
          { content: '1 nấc', isCorrect: false },
          { content: '2 nấc', isCorrect: false },
          { content: '3 nấc', isCorrect: true },
          { content: '4 nấc', isCorrect: false },
        ],
      },
      {
        content:
          'Dung dịch nào sau đây có pH < 7?',
        answers: [
          { content: 'NaOH', isCorrect: false },
          { content: 'NaCl', isCorrect: false },
          { content: 'HCl', isCorrect: true },
          { content: 'KOH', isCorrect: false },
        ],
      },
      {
        content:
          'Phản ứng nào sau đây là phản ứng oxi hóa - khử?',
        answers: [
          { content: 'NaOH + HCl → NaCl + H₂O', isCorrect: false },
          { content: 'CaCO₃ → CaO + CO₂', isCorrect: false },
          { content: 'Fe + CuSO₄ → FeSO₄ + Cu', isCorrect: true },
          { content: 'BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl', isCorrect: false },
        ],
      },
      {
        content:
          'Trong dãy điện hóa, kim loại đứng trước H₂ có thể:',
        answers: [
          { content: 'Tác dụng với dung dịch axit loãng (HCl, H₂SO₄ loãng) giải phóng H₂', isCorrect: true },
          { content: 'Không tác dụng với axit', isCorrect: false },
          { content: 'Chỉ tác dụng với axit đặc', isCorrect: false },
          { content: 'Tác dụng với nước ở điều kiện thường', isCorrect: false },
        ],
      },
      {
        content:
          'Clo tác dụng với sắt tạo thành:',
        answers: [
          { content: 'FeCl₂', isCorrect: false },
          { content: 'FeCl₃', isCorrect: true },
          { content: 'FeO', isCorrect: false },
          { content: 'Fe₂O₃', isCorrect: false },
        ],
      },
      {
        content:
          'Khí NH₃ có tính chất hóa học đặc trưng là:',
        answers: [
          { content: 'Tính oxi hóa', isCorrect: false },
          { content: 'Tính bazơ và tính khử', isCorrect: true },
          { content: 'Tính axit', isCorrect: false },
          { content: 'Tính trung tính', isCorrect: false },
        ],
      },
      {
        content:
          'Muối nào sau đây bị nhiệt phân?',
        answers: [
          { content: 'NaCl', isCorrect: false },
          { content: 'KNO₃', isCorrect: true },
          { content: 'Na₂SO₄', isCorrect: false },
          { content: 'KCl', isCorrect: false },
        ],
      },
      {
        content:
          'Thủy tinh lỏng (Na₂SiO₃) tác dụng với dung dịch HCl tạo thành:',
        answers: [
          { content: 'NaCl và H₂SiO₃ (kết tủa keo)', isCorrect: true },
          { content: 'NaCl và SiO₂', isCorrect: false },
          { content: 'NaCl và Si', isCorrect: false },
          { content: 'NaCl và H₂O', isCorrect: false },
        ],
      },
      {
        content:
          'Ozon (O₃) có tính chất hóa học nổi bật là:',
        answers: [
          { content: 'Tính khử mạnh', isCorrect: false },
          { content: 'Tính oxi hóa mạnh hơn O₂', isCorrect: true },
          { content: 'Tính axit', isCorrect: false },
          { content: 'Tính bazơ', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Đề 5: Đề thi thử tổng hợp hữu cơ + vô cơ
  // =============================================
  {
    categorySlug: 'on-thi-thpt-hoa-hoc',
    title: 'Đề ôn thi THPT QG 2025 - Hóa Học - Đề số 5',
    slug: 'on-thi-thpt-hoa-hoc-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Hóa Học - Đề số 5. Đề thi thử tổng hợp: hữu cơ + vô cơ. Gồm 25 câu trắc nghiệm có đáp án.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content:
          'Este nào sau đây khi thủy phân trong môi trường kiềm tạo ra hai muối?',
        answers: [
          { content: 'CH₃COOC₂H₅', isCorrect: false },
          { content: 'CH₃COOCH=CH₂', isCorrect: false },
          { content: 'C₆H₅OOCCH₃ (phenyl axetat)', isCorrect: true },
          { content: 'HCOOCH₃', isCorrect: false },
        ],
      },
      {
        content:
          'Cho Na vào dung dịch CuSO₄, hiện tượng quan sát được là:',
        answers: [
          { content: 'Có Cu đỏ bám trên Na', isCorrect: false },
          { content: 'Có khí thoát ra và có kết tủa xanh', isCorrect: true },
          { content: 'Chỉ có khí thoát ra', isCorrect: false },
          { content: 'Không có hiện tượng gì', isCorrect: false },
        ],
      },
      {
        content:
          'Dung dịch chất nào sau đây làm quỳ tím chuyển xanh?',
        answers: [
          { content: 'Glyxin', isCorrect: false },
          { content: 'Alanin', isCorrect: false },
          { content: 'Lysin', isCorrect: true },
          { content: 'Axit glutamic', isCorrect: false },
        ],
      },
      {
        content:
          'Cho dãy kim loại: Fe, Cu, Ag, Al. Kim loại có tính khử mạnh nhất là:',
        answers: [
          { content: 'Fe', isCorrect: false },
          { content: 'Cu', isCorrect: false },
          { content: 'Ag', isCorrect: false },
          { content: 'Al', isCorrect: true },
        ],
      },
      {
        content:
          'Chất nào sau đây vừa phản ứng với dung dịch NaOH vừa phản ứng với dung dịch HCl?',
        answers: [
          { content: 'NaCl', isCorrect: false },
          { content: 'Al(OH)₃', isCorrect: true },
          { content: 'NaOH', isCorrect: false },
          { content: 'HCl', isCorrect: false },
        ],
      },
      {
        content:
          'Thủy phân hoàn toàn tinh bột trong môi trường axit thu được sản phẩm cuối cùng là:',
        answers: [
          { content: 'Saccarozơ', isCorrect: false },
          { content: 'Fructozơ', isCorrect: false },
          { content: 'Glucozơ', isCorrect: true },
          { content: 'Mantozơ', isCorrect: false },
        ],
      },
      {
        content:
          'Kim loại nào sau đây được điều chế bằng phương pháp thủy luyện?',
        answers: [
          { content: 'Na', isCorrect: false },
          { content: 'Al', isCorrect: false },
          { content: 'Cu', isCorrect: true },
          { content: 'Ca', isCorrect: false },
        ],
      },
      {
        content:
          'Cho Fe₂O₃ tác dụng với dung dịch H₂SO₄ loãng dư, dung dịch thu được chứa:',
        answers: [
          { content: 'FeSO₄', isCorrect: false },
          { content: 'Fe₂(SO₄)₃', isCorrect: true },
          { content: 'FeSO₄ và Fe₂(SO₄)₃', isCorrect: false },
          { content: 'Fe₂O₃ và H₂SO₄', isCorrect: false },
        ],
      },
      {
        content:
          'Chất nào sau đây không phản ứng với dung dịch NaOH?',
        answers: [
          { content: 'Al₂O₃', isCorrect: false },
          { content: 'Al(OH)₃', isCorrect: false },
          { content: 'MgO', isCorrect: true },
          { content: 'Cr₂O₃', isCorrect: false },
        ],
      },
      {
        content:
          'Hỗn hợp gồm Fe₂O₃ và Cu có thể tan hoàn toàn trong dung dịch nào?',
        answers: [
          { content: 'NaOH dư', isCorrect: false },
          { content: 'HCl dư', isCorrect: true },
          { content: 'NH₃ dư', isCorrect: false },
          { content: 'NaCl dư', isCorrect: false },
        ],
      },
      {
        content:
          'Polime nào sau đây được dùng làm chất dẻo?',
        answers: [
          { content: 'Nilon-6,6', isCorrect: false },
          { content: 'Tơ tằm', isCorrect: false },
          { content: 'Poli(metyl metacrylat)', isCorrect: true },
          { content: 'Tơ visco', isCorrect: false },
        ],
      },
      {
        content:
          'Cho dung dịch AgNO₃ dư vào dung dịch FeCl₂, sản phẩm thu được gồm:',
        answers: [
          { content: 'AgCl và Fe(NO₃)₂', isCorrect: false },
          { content: 'AgCl, Ag và Fe(NO₃)₃', isCorrect: true },
          { content: 'AgCl và Fe(NO₃)₃', isCorrect: false },
          { content: 'Ag và FeCl₃', isCorrect: false },
        ],
      },
      {
        content:
          'Amin nào sau đây có lực bazơ mạnh nhất?',
        answers: [
          { content: 'C₆H₅NH₂ (anilin)', isCorrect: false },
          { content: 'CH₃NH₂', isCorrect: false },
          { content: '(CH₃)₂NH', isCorrect: true },
          { content: 'NH₃', isCorrect: false },
        ],
      },
      {
        content:
          'Cho CO dư qua hỗn hợp Fe₂O₃ và CuO nung nóng, sau phản ứng thu được chất rắn gồm:',
        answers: [
          { content: 'Fe và Cu', isCorrect: true },
          { content: 'Fe₂O₃ và Cu', isCorrect: false },
          { content: 'FeO và CuO', isCorrect: false },
          { content: 'Fe và CuO', isCorrect: false },
        ],
      },
      {
        content:
          'Dung dịch FeCl₃ tác dụng với Cu vì:',
        answers: [
          { content: 'Fe³⁺ có tính oxi hóa mạnh hơn Cu²⁺', isCorrect: true },
          { content: 'Cu có tính oxi hóa mạnh hơn Fe³⁺', isCorrect: false },
          { content: 'FeCl₃ là axit mạnh', isCorrect: false },
          { content: 'Cu là kim loại kiềm', isCorrect: false },
        ],
      },
      {
        content:
          'Chất nào sau đây có phản ứng tráng bạc?',
        answers: [
          { content: 'Saccarozơ', isCorrect: false },
          { content: 'Tinh bột', isCorrect: false },
          { content: 'Glucozơ', isCorrect: true },
          { content: 'Xenlulozơ', isCorrect: false },
        ],
      },
      {
        content:
          'Cho Ba(OH)₂ dư vào dung dịch (NH₄)₂SO₄, đun nóng. Hiện tượng là:',
        answers: [
          { content: 'Có kết tủa trắng và khí mùi khai', isCorrect: true },
          { content: 'Chỉ có kết tủa trắng', isCorrect: false },
          { content: 'Chỉ có khí mùi khai', isCorrect: false },
          { content: 'Không có hiện tượng', isCorrect: false },
        ],
      },
      {
        content:
          'Xà phòng hóa hoàn toàn tristearin bằng NaOH thu được glixerol và:',
        answers: [
          { content: 'C₁₇H₃₅COONa', isCorrect: true },
          { content: 'C₁₅H₃₁COONa', isCorrect: false },
          { content: 'C₁₇H₃₃COONa', isCorrect: false },
          { content: 'C₁₇H₃₅COOH', isCorrect: false },
        ],
      },
      {
        content:
          'Dãy gồm các chất đều tác dụng với dung dịch HCl là:',
        answers: [
          { content: 'NaOH, Al, CuO, Na₂CO₃', isCorrect: true },
          { content: 'NaOH, Cu, Fe₂O₃, Na₂SO₄', isCorrect: false },
          { content: 'KOH, Ag, MgO, BaCO₃', isCorrect: false },
          { content: 'Ca(OH)₂, Au, ZnO, K₂CO₃', isCorrect: false },
        ],
      },
      {
        content:
          'Cho dung dịch NaOH từ từ đến dư vào dung dịch CrCl₃, hiện tượng là:',
        answers: [
          { content: 'Có kết tủa lục xám, sau đó kết tủa tan', isCorrect: true },
          { content: 'Có kết tủa lục xám, không tan', isCorrect: false },
          { content: 'Không có hiện tượng', isCorrect: false },
          { content: 'Có khí thoát ra', isCorrect: false },
        ],
      },
      {
        content:
          'Tơ visco thuộc loại:',
        answers: [
          { content: 'Tơ thiên nhiên', isCorrect: false },
          { content: 'Tơ tổng hợp', isCorrect: false },
          { content: 'Tơ bán tổng hợp (tơ nhân tạo)', isCorrect: true },
          { content: 'Tơ vô cơ', isCorrect: false },
        ],
      },
      {
        content:
          'Cho từ từ dung dịch HCl vào dung dịch Na₂CO₃, ban đầu:',
        answers: [
          { content: 'Có khí CO₂ thoát ra ngay', isCorrect: false },
          { content: 'Không có khí, tạo NaHCO₃ trước', isCorrect: true },
          { content: 'Có kết tủa trắng', isCorrect: false },
          { content: 'Dung dịch chuyển màu', isCorrect: false },
        ],
      },
      {
        content:
          'Phèn chua có công thức là:',
        answers: [
          { content: 'K₂SO₄·Al₂(SO₄)₃·24H₂O', isCorrect: true },
          { content: 'Na₂SO₄·Al₂(SO₄)₃·24H₂O', isCorrect: false },
          { content: 'KAl(SO₄)₂·6H₂O', isCorrect: false },
          { content: '(NH₄)₂SO₄·Al₂(SO₄)₃·24H₂O', isCorrect: false },
        ],
      },
      {
        content:
          'Cho Fe tác dụng với dung dịch H₂SO₄ đặc, nóng dư. Sản phẩm muối thu được là:',
        answers: [
          { content: 'FeSO₄', isCorrect: false },
          { content: 'Fe₂(SO₄)₃', isCorrect: true },
          { content: 'FeSO₄ và Fe₂(SO₄)₃', isCorrect: false },
          { content: 'FeS', isCorrect: false },
        ],
      },
      {
        content:
          'Chất nào sau đây thuộc loại đisaccarit?',
        answers: [
          { content: 'Glucozơ', isCorrect: false },
          { content: 'Saccarozơ', isCorrect: true },
          { content: 'Tinh bột', isCorrect: false },
          { content: 'Xenlulozơ', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
