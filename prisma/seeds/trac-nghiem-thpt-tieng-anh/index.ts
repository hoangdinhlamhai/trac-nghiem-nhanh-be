import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Grammar – Tenses, Conditionals, Passive Voice, Reported Speech, Relative Clauses
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-tieng-anh',
    title: 'Đề trắc nghiệm Tiếng Anh 12 - Đề số 1',
    slug: 'trac-nghiem-thpt-tieng-anh-de-1',
    description:
      'Đề thi trắc nghiệm Tiếng Anh 12 THPT chuyên đề Ngữ pháp: các thì, câu điều kiện, câu bị động, câu tường thuật và mệnh đề quan hệ. Gồm 25 câu hỏi giúp ôn luyện kiến thức ngữ pháp trọng tâm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'By the time we ______ at the station, the train had already left.',
        answers: [
          { content: 'arrived', isCorrect: true },
          { content: 'had arrived', isCorrect: false },
          { content: 'arrive', isCorrect: false },
          { content: 'were arriving', isCorrect: false },
        ],
      },
      {
        content: 'She ______ English for five years before she moved to London.',
        answers: [
          { content: 'has studied', isCorrect: false },
          { content: 'studied', isCorrect: false },
          { content: 'had been studying', isCorrect: true },
          { content: 'was studying', isCorrect: false },
        ],
      },
      {
        content: 'If I ______ you, I would accept the job offer immediately.',
        answers: [
          { content: 'am', isCorrect: false },
          { content: 'were', isCorrect: true },
          { content: 'had been', isCorrect: false },
          { content: 'would be', isCorrect: false },
        ],
      },
      {
        content: 'The new hospital ______ by the end of next year.',
        answers: [
          { content: 'will build', isCorrect: false },
          { content: 'will be built', isCorrect: true },
          { content: 'will have building', isCorrect: false },
          { content: 'is building', isCorrect: false },
        ],
      },
      {
        content: 'He asked me where I ______ the previous day.',
        answers: [
          { content: 'went', isCorrect: false },
          { content: 'have gone', isCorrect: false },
          { content: 'had gone', isCorrect: true },
          { content: 'go', isCorrect: false },
        ],
      },
      {
        content: 'The woman ______ son won the scholarship is my neighbor.',
        answers: [
          { content: 'who', isCorrect: false },
          { content: 'whose', isCorrect: true },
          { content: 'whom', isCorrect: false },
          { content: 'which', isCorrect: false },
        ],
      },
      {
        content: 'If she had studied harder, she ______ the exam.',
        answers: [
          { content: 'would pass', isCorrect: false },
          { content: 'would have passed', isCorrect: true },
          { content: 'will pass', isCorrect: false },
          { content: 'passed', isCorrect: false },
        ],
      },
      {
        content: 'The letter ______ yesterday, but I haven\'t read it yet.',
        answers: [
          { content: 'delivered', isCorrect: false },
          { content: 'was delivered', isCorrect: true },
          { content: 'has delivered', isCorrect: false },
          { content: 'is delivered', isCorrect: false },
        ],
      },
      {
        content: 'She told me that she ______ to Paris the following week.',
        answers: [
          { content: 'will travel', isCorrect: false },
          { content: 'would travel', isCorrect: true },
          { content: 'travels', isCorrect: false },
          { content: 'is traveling', isCorrect: false },
        ],
      },
      {
        content: 'This is the restaurant ______ we had our first date.',
        answers: [
          { content: 'which', isCorrect: false },
          { content: 'that', isCorrect: false },
          { content: 'where', isCorrect: true },
          { content: 'whom', isCorrect: false },
        ],
      },
      {
        content: 'By this time tomorrow, they ______ the project.',
        answers: [
          { content: 'will finish', isCorrect: false },
          { content: 'will have finished', isCorrect: true },
          { content: 'are finishing', isCorrect: false },
          { content: 'have finished', isCorrect: false },
        ],
      },
      {
        content: 'Unless you ______ now, you will miss the bus.',
        answers: [
          { content: 'leave', isCorrect: true },
          { content: 'left', isCorrect: false },
          { content: 'will leave', isCorrect: false },
          { content: 'would leave', isCorrect: false },
        ],
      },
      {
        content: 'The cake ______ by my mother for the party last night.',
        answers: [
          { content: 'made', isCorrect: false },
          { content: 'was made', isCorrect: true },
          { content: 'has been made', isCorrect: false },
          { content: 'is made', isCorrect: false },
        ],
      },
      {
        content: 'He wondered whether his friends ______ to the party.',
        answers: [
          { content: 'come', isCorrect: false },
          { content: 'will come', isCorrect: false },
          { content: 'would come', isCorrect: true },
          { content: 'are coming', isCorrect: false },
        ],
      },
      {
        content: 'The book, ______ was published last year, became a bestseller.',
        answers: [
          { content: 'that', isCorrect: false },
          { content: 'which', isCorrect: true },
          { content: 'who', isCorrect: false },
          { content: 'whom', isCorrect: false },
        ],
      },
      {
        content: 'I ______ for two hours when she finally called.',
        answers: [
          { content: 'waited', isCorrect: false },
          { content: 'was waiting', isCorrect: false },
          { content: 'had been waiting', isCorrect: true },
          { content: 'have waited', isCorrect: false },
        ],
      },
      {
        content: 'If it ______ tomorrow, we will cancel the picnic.',
        answers: [
          { content: 'rains', isCorrect: true },
          { content: 'will rain', isCorrect: false },
          { content: 'rained', isCorrect: false },
          { content: 'would rain', isCorrect: false },
        ],
      },
      {
        content: 'A new bridge ______ across the river at the moment.',
        answers: [
          { content: 'is built', isCorrect: false },
          { content: 'is being built', isCorrect: true },
          { content: 'has been built', isCorrect: false },
          { content: 'was built', isCorrect: false },
        ],
      },
      {
        content: 'The teacher asked the students ______ their homework.',
        answers: [
          { content: 'to submit', isCorrect: true },
          { content: 'submitting', isCorrect: false },
          { content: 'submit', isCorrect: false },
          { content: 'submitted', isCorrect: false },
        ],
      },
      {
        content: 'The city ______ I was born has changed a lot.',
        answers: [
          { content: 'which', isCorrect: false },
          { content: 'where', isCorrect: true },
          { content: 'that', isCorrect: false },
          { content: 'whom', isCorrect: false },
        ],
      },
      {
        content: 'She ______ as a nurse since she graduated from university.',
        answers: [
          { content: 'works', isCorrect: false },
          { content: 'worked', isCorrect: false },
          { content: 'has worked', isCorrect: true },
          { content: 'is working', isCorrect: false },
        ],
      },
      {
        content: 'If I had known about the meeting, I ______ on time.',
        answers: [
          { content: 'would come', isCorrect: false },
          { content: 'would have come', isCorrect: true },
          { content: 'will come', isCorrect: false },
          { content: 'came', isCorrect: false },
        ],
      },
      {
        content: 'English ______ in many countries around the world.',
        answers: [
          { content: 'speaks', isCorrect: false },
          { content: 'is spoken', isCorrect: true },
          { content: 'spoke', isCorrect: false },
          { content: 'has spoken', isCorrect: false },
        ],
      },
      {
        content: 'She said that she ______ very tired the day before.',
        answers: [
          { content: 'is', isCorrect: false },
          { content: 'was', isCorrect: false },
          { content: 'had been', isCorrect: true },
          { content: 'has been', isCorrect: false },
        ],
      },
      {
        content: 'The man ______ we met at the conference is a famous scientist.',
        answers: [
          { content: 'whose', isCorrect: false },
          { content: 'which', isCorrect: false },
          { content: 'whom', isCorrect: true },
          { content: 'where', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 2: Vocabulary & Word Formation – Synonyms, Antonyms, Word Choice, Collocations
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-tieng-anh',
    title: 'Đề trắc nghiệm Tiếng Anh 12 - Đề số 2',
    slug: 'trac-nghiem-thpt-tieng-anh-de-2',
    description:
      'Đề thi trắc nghiệm Tiếng Anh 12 THPT chuyên đề Từ vựng và Cấu tạo từ: từ đồng nghĩa, trái nghĩa, chọn từ phù hợp và cụm từ cố định. Gồm 25 câu hỏi giúp mở rộng vốn từ vựng.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The government has "implemented" a new policy on education.',
        answers: [
          { content: 'carried out', isCorrect: true },
          { content: 'canceled', isCorrect: false },
          { content: 'delayed', isCorrect: false },
          { content: 'ignored', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is opposite in meaning to the underlined word: She is very "generous" with her time and money.',
        answers: [
          { content: 'kind', isCorrect: false },
          { content: 'wealthy', isCorrect: false },
          { content: 'stingy', isCorrect: true },
          { content: 'careful', isCorrect: false },
        ],
      },
      {
        content: 'The company decided to ______ the old equipment with modern machines.',
        answers: [
          { content: 'replace', isCorrect: true },
          { content: 'repair', isCorrect: false },
          { content: 'remove', isCorrect: false },
          { content: 'restore', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct word form: The ______ of the new shopping mall attracted many visitors.',
        answers: [
          { content: 'open', isCorrect: false },
          { content: 'opening', isCorrect: true },
          { content: 'opened', isCorrect: false },
          { content: 'openly', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The teacher "praised" the students for their excellent work.',
        answers: [
          { content: 'punished', isCorrect: false },
          { content: 'commended', isCorrect: true },
          { content: 'criticized', isCorrect: false },
          { content: 'questioned', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is opposite in meaning to the underlined word: The weather was "pleasant" during our holiday.',
        answers: [
          { content: 'enjoyable', isCorrect: false },
          { content: 'unpleasant', isCorrect: true },
          { content: 'comfortable', isCorrect: false },
          { content: 'warm', isCorrect: false },
        ],
      },
      {
        content: 'She has a strong ______ of responsibility toward her family.',
        answers: [
          { content: 'sense', isCorrect: true },
          { content: 'meaning', isCorrect: false },
          { content: 'feeling', isCorrect: false },
          { content: 'thought', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct word form: He was ______ disappointed when he failed the exam.',
        answers: [
          { content: 'deep', isCorrect: false },
          { content: 'depth', isCorrect: false },
          { content: 'deeply', isCorrect: true },
          { content: 'deepen', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The "annual" meeting of the company takes place in December.',
        answers: [
          { content: 'monthly', isCorrect: false },
          { content: 'weekly', isCorrect: false },
          { content: 'yearly', isCorrect: true },
          { content: 'daily', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is opposite in meaning to the underlined word: His explanation was very "complicated".',
        answers: [
          { content: 'complex', isCorrect: false },
          { content: 'simple', isCorrect: true },
          { content: 'difficult', isCorrect: false },
          { content: 'detailed', isCorrect: false },
        ],
      },
      {
        content: 'The students were asked to ______ attention to the teacher\'s instructions.',
        answers: [
          { content: 'pay', isCorrect: true },
          { content: 'give', isCorrect: false },
          { content: 'take', isCorrect: false },
          { content: 'make', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct word form: The ______ between the two countries has improved significantly.',
        answers: [
          { content: 'relate', isCorrect: false },
          { content: 'relative', isCorrect: false },
          { content: 'relationship', isCorrect: true },
          { content: 'relatively', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The manager "rejected" the proposal without any explanation.',
        answers: [
          { content: 'accepted', isCorrect: false },
          { content: 'turned down', isCorrect: true },
          { content: 'considered', isCorrect: false },
          { content: 'reviewed', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is opposite in meaning to the underlined word: The children were very "obedient" in class.',
        answers: [
          { content: 'well-behaved', isCorrect: false },
          { content: 'polite', isCorrect: false },
          { content: 'disobedient', isCorrect: true },
          { content: 'quiet', isCorrect: false },
        ],
      },
      {
        content: 'It is important to ______ a balance between work and personal life.',
        answers: [
          { content: 'do', isCorrect: false },
          { content: 'strike', isCorrect: true },
          { content: 'make', isCorrect: false },
          { content: 'have', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct word form: She received a lot of ______ for her charity work.',
        answers: [
          { content: 'recognize', isCorrect: false },
          { content: 'recognizable', isCorrect: false },
          { content: 'recognition', isCorrect: true },
          { content: 'recognizably', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The scientist "discovered" a new species of butterfly.',
        answers: [
          { content: 'found', isCorrect: true },
          { content: 'invented', isCorrect: false },
          { content: 'created', isCorrect: false },
          { content: 'designed', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is opposite in meaning to the underlined word: The road was very "narrow" and difficult to drive on.',
        answers: [
          { content: 'thin', isCorrect: false },
          { content: 'wide', isCorrect: true },
          { content: 'long', isCorrect: false },
          { content: 'short', isCorrect: false },
        ],
      },
      {
        content: 'The doctor advised him to ______ a healthy diet.',
        answers: [
          { content: 'keep', isCorrect: false },
          { content: 'maintain', isCorrect: true },
          { content: 'hold', isCorrect: false },
          { content: 'stay', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct word form: The ______ of the environment is everyone\'s responsibility.',
        answers: [
          { content: 'protect', isCorrect: false },
          { content: 'protective', isCorrect: false },
          { content: 'protection', isCorrect: true },
          { content: 'protectively', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The students were "enthusiastic" about the school trip.',
        answers: [
          { content: 'bored', isCorrect: false },
          { content: 'eager', isCorrect: true },
          { content: 'worried', isCorrect: false },
          { content: 'confused', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is opposite in meaning to the underlined word: He gave a very "brief" speech at the ceremony.',
        answers: [
          { content: 'short', isCorrect: false },
          { content: 'lengthy', isCorrect: true },
          { content: 'quick', isCorrect: false },
          { content: 'boring', isCorrect: false },
        ],
      },
      {
        content: 'The company plans to ______ its business to Southeast Asia.',
        answers: [
          { content: 'expand', isCorrect: true },
          { content: 'extend', isCorrect: false },
          { content: 'increase', isCorrect: false },
          { content: 'spread', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct word form: Air ______ is one of the most serious problems in big cities.',
        answers: [
          { content: 'pollute', isCorrect: false },
          { content: 'polluted', isCorrect: false },
          { content: 'pollution', isCorrect: true },
          { content: 'pollutant', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that is closest in meaning to the underlined word: The new law will "prohibit" smoking in all public places.',
        answers: [
          { content: 'allow', isCorrect: false },
          { content: 'ban', isCorrect: true },
          { content: 'encourage', isCorrect: false },
          { content: 'limit', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 3: Pronunciation & Stress – Words with Different Pronunciation, Stress Patterns
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-tieng-anh',
    title: 'Đề trắc nghiệm Tiếng Anh 12 - Đề số 3',
    slug: 'trac-nghiem-thpt-tieng-anh-de-3',
    description:
      'Đề thi trắc nghiệm Tiếng Anh 12 THPT chuyên đề Phát âm và Trọng âm: nhận biết từ có cách phát âm khác, xác định trọng âm của từ. Gồm 25 câu hỏi giúp rèn luyện kỹ năng ngữ âm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "ch"oose, "ch"urch, "ch"emist, "ch"ild.',
        answers: [
          { content: 'choose', isCorrect: false },
          { content: 'church', isCorrect: false },
          { content: 'chemist', isCorrect: true },
          { content: 'child', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "begin", "happen", "suggest", "prefer".',
        answers: [
          { content: 'begin', isCorrect: false },
          { content: 'happen', isCorrect: true },
          { content: 'suggest', isCorrect: false },
          { content: 'prefer', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "th"ink, "th"at, "th"ank, "th"ird.',
        answers: [
          { content: 'think', isCorrect: false },
          { content: 'that', isCorrect: true },
          { content: 'thank', isCorrect: false },
          { content: 'third', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "volunteer", "engineer", "beautiful", "understand".',
        answers: [
          { content: 'volunteer', isCorrect: false },
          { content: 'engineer', isCorrect: false },
          { content: 'beautiful', isCorrect: true },
          { content: 'understand', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "ea"d (read past tense), "ea"d (head), "br"ea"d, "m"ea"n.',
        answers: [
          { content: 'read (past tense)', isCorrect: false },
          { content: 'head', isCorrect: false },
          { content: 'bread', isCorrect: false },
          { content: 'mean', isCorrect: true },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "economy", "photography", "volunteer", "computer".',
        answers: [
          { content: 'economy', isCorrect: false },
          { content: 'photography', isCorrect: false },
          { content: 'volunteer', isCorrect: true },
          { content: 'computer', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "s"ugar, "s"un, "s"and, "s"it.',
        answers: [
          { content: 'sugar', isCorrect: true },
          { content: 'sun', isCorrect: false },
          { content: 'sand', isCorrect: false },
          { content: 'sit', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "apply", "enter", "offer", "happen".',
        answers: [
          { content: 'apply', isCorrect: true },
          { content: 'enter', isCorrect: false },
          { content: 'offer', isCorrect: false },
          { content: 'happen', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "cook"ed, "play"ed, "stay"ed, "enjoy"ed.',
        answers: [
          { content: 'cooked', isCorrect: true },
          { content: 'played', isCorrect: false },
          { content: 'stayed', isCorrect: false },
          { content: 'enjoyed', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "comfortable", "interesting", "important", "beautiful".',
        answers: [
          { content: 'comfortable', isCorrect: false },
          { content: 'interesting', isCorrect: false },
          { content: 'important', isCorrect: true },
          { content: 'beautiful', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "k"now, "k"nife, "k"ind, "k"nee.',
        answers: [
          { content: 'know', isCorrect: false },
          { content: 'knife', isCorrect: false },
          { content: 'kind', isCorrect: true },
          { content: 'knee', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "develop", "consider", "determine", "introduce".',
        answers: [
          { content: 'develop', isCorrect: false },
          { content: 'consider', isCorrect: false },
          { content: 'determine', isCorrect: false },
          { content: 'introduce', isCorrect: true },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "c"ity, "c"at, "c"ircle, "c"inema.',
        answers: [
          { content: 'city', isCorrect: false },
          { content: 'cat', isCorrect: true },
          { content: 'circle', isCorrect: false },
          { content: 'cinema', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "machine", "polite", "manage", "alone".',
        answers: [
          { content: 'machine', isCorrect: false },
          { content: 'polite', isCorrect: false },
          { content: 'manage', isCorrect: true },
          { content: 'alone', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "laugh"s, "cough"s, "plough"s, "enough".',
        answers: [
          { content: 'laughs', isCorrect: false },
          { content: 'coughs', isCorrect: false },
          { content: 'ploughs', isCorrect: true },
          { content: 'enough', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "celebrate", "decorate", "disappear", "concentrate".',
        answers: [
          { content: 'celebrate', isCorrect: false },
          { content: 'decorate', isCorrect: false },
          { content: 'disappear', isCorrect: true },
          { content: 'concentrate', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "wh"ole, "wh"ite, "wh"en, "wh"ere.',
        answers: [
          { content: 'whole', isCorrect: true },
          { content: 'white', isCorrect: false },
          { content: 'when', isCorrect: false },
          { content: 'where', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "adventure", "attention", "absolute", "achievement".',
        answers: [
          { content: 'adventure', isCorrect: false },
          { content: 'attention', isCorrect: false },
          { content: 'absolute', isCorrect: true },
          { content: 'achievement', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "want"ed, "need"ed, "look"ed, "wait"ed.',
        answers: [
          { content: 'wanted', isCorrect: false },
          { content: 'needed', isCorrect: false },
          { content: 'looked', isCorrect: true },
          { content: 'waited', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "national", "cultural", "official", "physical".',
        answers: [
          { content: 'national', isCorrect: false },
          { content: 'cultural', isCorrect: false },
          { content: 'official', isCorrect: true },
          { content: 'physical', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "g"entle, "g"iant, "g"ive, "g"eneral.',
        answers: [
          { content: 'gentle', isCorrect: false },
          { content: 'giant', isCorrect: false },
          { content: 'give', isCorrect: true },
          { content: 'general', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "communicate", "technology", "anniversary", "electricity".',
        answers: [
          { content: 'communicate', isCorrect: false },
          { content: 'technology', isCorrect: false },
          { content: 'anniversary', isCorrect: false },
          { content: 'electricity', isCorrect: true },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "hou"se, "mou"se, "cou"sin, "blo"use.',
        answers: [
          { content: 'house', isCorrect: false },
          { content: 'mouse', isCorrect: false },
          { content: 'cousin', isCorrect: true },
          { content: 'blouse', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "remember", "consider", "company", "continue".',
        answers: [
          { content: 'remember', isCorrect: false },
          { content: 'consider', isCorrect: false },
          { content: 'company', isCorrect: true },
          { content: 'continue', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "ph"one, "ph"oto, "sh"epherd, "ph"rase.',
        answers: [
          { content: 'phone', isCorrect: false },
          { content: 'photo', isCorrect: false },
          { content: 'shepherd', isCorrect: true },
          { content: 'phrase', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 4: Prepositions, Phrasal Verbs & Idioms
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-tieng-anh',
    title: 'Đề trắc nghiệm Tiếng Anh 12 - Đề số 4',
    slug: 'trac-nghiem-thpt-tieng-anh-de-4',
    description:
      'Đề thi trắc nghiệm Tiếng Anh 12 THPT chuyên đề Giới từ, Cụm động từ và Thành ngữ: giới từ thông dụng, cụm động từ phổ biến và các thành ngữ tiếng Anh. Gồm 25 câu hỏi giúp nắm vững cách sử dụng.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'She is very keen ______ learning foreign languages.',
        answers: [
          { content: 'on', isCorrect: true },
          { content: 'in', isCorrect: false },
          { content: 'at', isCorrect: false },
          { content: 'of', isCorrect: false },
        ],
      },
      {
        content: 'He decided to give ______ smoking after the doctor\'s advice.',
        answers: [
          { content: 'up', isCorrect: true },
          { content: 'in', isCorrect: false },
          { content: 'away', isCorrect: false },
          { content: 'off', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "break the ice" means ______.',
        answers: [
          { content: 'to destroy something', isCorrect: false },
          { content: 'to make people feel more comfortable in a social situation', isCorrect: true },
          { content: 'to freeze water', isCorrect: false },
          { content: 'to cause a problem', isCorrect: false },
        ],
      },
      {
        content: 'I am not accustomed ______ getting up so early in the morning.',
        answers: [
          { content: 'with', isCorrect: false },
          { content: 'to', isCorrect: true },
          { content: 'for', isCorrect: false },
          { content: 'at', isCorrect: false },
        ],
      },
      {
        content: 'Could you look ______ my cat while I am on vacation?',
        answers: [
          { content: 'after', isCorrect: true },
          { content: 'up', isCorrect: false },
          { content: 'for', isCorrect: false },
          { content: 'into', isCorrect: false },
        ],
      },
      {
        content: 'The expression "once in a blue moon" means ______.',
        answers: [
          { content: 'very frequently', isCorrect: false },
          { content: 'at night', isCorrect: false },
          { content: 'very rarely', isCorrect: true },
          { content: 'during a full moon', isCorrect: false },
        ],
      },
      {
        content: 'She is responsible ______ organizing the school event.',
        answers: [
          { content: 'of', isCorrect: false },
          { content: 'for', isCorrect: true },
          { content: 'to', isCorrect: false },
          { content: 'with', isCorrect: false },
        ],
      },
      {
        content: 'The plane took ______ an hour late due to bad weather.',
        answers: [
          { content: 'off', isCorrect: true },
          { content: 'up', isCorrect: false },
          { content: 'on', isCorrect: false },
          { content: 'in', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "hit the books" means ______.',
        answers: [
          { content: 'to throw books away', isCorrect: false },
          { content: 'to study hard', isCorrect: true },
          { content: 'to go to a library', isCorrect: false },
          { content: 'to buy new books', isCorrect: false },
        ],
      },
      {
        content: 'He has been absent ______ school for three days.',
        answers: [
          { content: 'at', isCorrect: false },
          { content: 'from', isCorrect: true },
          { content: 'in', isCorrect: false },
          { content: 'of', isCorrect: false },
        ],
      },
      {
        content: 'We need to come ______ with a solution to this problem.',
        answers: [
          { content: 'up', isCorrect: true },
          { content: 'out', isCorrect: false },
          { content: 'in', isCorrect: false },
          { content: 'down', isCorrect: false },
        ],
      },
      {
        content: 'The expression "a piece of cake" means ______.',
        answers: [
          { content: 'a type of dessert', isCorrect: false },
          { content: 'something very easy', isCorrect: true },
          { content: 'a small portion', isCorrect: false },
          { content: 'something expensive', isCorrect: false },
        ],
      },
      {
        content: 'She is very proud ______ her son\'s achievements.',
        answers: [
          { content: 'about', isCorrect: false },
          { content: 'for', isCorrect: false },
          { content: 'of', isCorrect: true },
          { content: 'with', isCorrect: false },
        ],
      },
      {
        content: 'The meeting has been put ______ until next Monday.',
        answers: [
          { content: 'off', isCorrect: true },
          { content: 'on', isCorrect: false },
          { content: 'up', isCorrect: false },
          { content: 'away', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "let the cat out of the bag" means ______.',
        answers: [
          { content: 'to release an animal', isCorrect: false },
          { content: 'to reveal a secret', isCorrect: true },
          { content: 'to lose something', isCorrect: false },
          { content: 'to pack a bag', isCorrect: false },
        ],
      },
      {
        content: 'The success of the project depends ______ everyone\'s cooperation.',
        answers: [
          { content: 'in', isCorrect: false },
          { content: 'on', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'for', isCorrect: false },
        ],
      },
      {
        content: 'She ran ______ an old friend at the supermarket yesterday.',
        answers: [
          { content: 'into', isCorrect: true },
          { content: 'over', isCorrect: false },
          { content: 'out', isCorrect: false },
          { content: 'away', isCorrect: false },
        ],
      },
      {
        content: 'The expression "under the weather" means ______.',
        answers: [
          { content: 'outside in the rain', isCorrect: false },
          { content: 'feeling ill', isCorrect: true },
          { content: 'very happy', isCorrect: false },
          { content: 'in a bad mood', isCorrect: false },
        ],
      },
      {
        content: 'He apologized ______ being late for the meeting.',
        answers: [
          { content: 'about', isCorrect: false },
          { content: 'for', isCorrect: true },
          { content: 'of', isCorrect: false },
          { content: 'to', isCorrect: false },
        ],
      },
      {
        content: 'Please turn ______ the lights when you leave the room.',
        answers: [
          { content: 'off', isCorrect: true },
          { content: 'on', isCorrect: false },
          { content: 'up', isCorrect: false },
          { content: 'down', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "burn the midnight oil" means ______.',
        answers: [
          { content: 'to waste resources', isCorrect: false },
          { content: 'to work or study late into the night', isCorrect: true },
          { content: 'to start a fire', isCorrect: false },
          { content: 'to cook dinner late', isCorrect: false },
        ],
      },
      {
        content: 'She is interested ______ applying for the scholarship.',
        answers: [
          { content: 'on', isCorrect: false },
          { content: 'in', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'about', isCorrect: false },
        ],
      },
      {
        content: 'The factory was shut ______ because of financial problems.',
        answers: [
          { content: 'down', isCorrect: true },
          { content: 'up', isCorrect: false },
          { content: 'off', isCorrect: false },
          { content: 'out', isCorrect: false },
        ],
      },
      {
        content: 'The expression "keep an eye on" means ______.',
        answers: [
          { content: 'to close your eyes', isCorrect: false },
          { content: 'to watch carefully', isCorrect: true },
          { content: 'to ignore something', isCorrect: false },
          { content: 'to look away', isCorrect: false },
        ],
      },
      {
        content: 'He insisted ______ paying for the dinner.',
        answers: [
          { content: 'in', isCorrect: false },
          { content: 'on', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'for', isCorrect: false },
        ],
      },
    ],
  },

  // =============================================
  // Quiz 5: Error Identification & Sentence Transformation
  // =============================================
  {
    categorySlug: 'trac-nghiem-thpt-tieng-anh',
    title: 'Đề trắc nghiệm Tiếng Anh 12 - Đề số 5',
    slug: 'trac-nghiem-thpt-tieng-anh-de-5',
    description:
      'Đề thi trắc nghiệm Tiếng Anh 12 THPT chuyên đề Nhận diện lỗi sai và Viết lại câu: tìm lỗi sai trong câu, viết lại câu cùng nghĩa, chọn câu gần nghĩa nhất. Gồm 25 câu hỏi giúp rèn luyện kỹ năng phân tích ngữ pháp.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 45 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 45,
    questions: [
      {
        content: 'Find the error: "She (A) has been (B) working here (C) since (D) five years."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C', isCorrect: false },
          { content: 'D – "since" should be "for"', isCorrect: true },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "It is a long time since I last saw him."',
        answers: [
          { content: 'I have not seen him for a long time.', isCorrect: true },
          { content: 'I saw him for a long time.', isCorrect: false },
          { content: 'I have seen him recently.', isCorrect: false },
          { content: 'I last saw him a short time ago.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The (A) number of (B) students in this class (C) are (D) thirty."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C – "class" should be "classroom"', isCorrect: false },
          { content: 'D – "are" should be "is"', isCorrect: true },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "They began building the bridge two years ago."',
        answers: [
          { content: 'The bridge has been built for two years.', isCorrect: false },
          { content: 'They have been building the bridge for two years.', isCorrect: true },
          { content: 'The bridge was built two years ago.', isCorrect: false },
          { content: 'They built the bridge two years ago.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "He (A) suggested (B) to go (C) to the cinema (D) that evening."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B – "to go" should be "going"', isCorrect: true },
          { content: 'C', isCorrect: false },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "No one in the class is taller than Tom."',
        answers: [
          { content: 'Tom is the tallest student in the class.', isCorrect: true },
          { content: 'Tom is taller than some students.', isCorrect: false },
          { content: 'Tom is not as tall as anyone.', isCorrect: false },
          { content: 'Everyone is taller than Tom.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "Despite (A) of (B) the heavy rain, (C) they went (D) out."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B – "of" should be removed', isCorrect: true },
          { content: 'C', isCorrect: false },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "She is too young to drive a car."',
        answers: [
          { content: 'She is not old enough to drive a car.', isCorrect: true },
          { content: 'She is old enough to drive a car.', isCorrect: false },
          { content: 'She can drive a car because she is young.', isCorrect: false },
          { content: 'She drives a car very well.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "Each (A) of the students (B) have (C) to submit (D) their assignment."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C – "have" should be "has"', isCorrect: true },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "People say that he is a good doctor."',
        answers: [
          { content: 'He is said to be a good doctor.', isCorrect: true },
          { content: 'He said he is a good doctor.', isCorrect: false },
          { content: 'People told him to be a good doctor.', isCorrect: false },
          { content: 'It says that he is a good doctor.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She (A) is (B) enough old (C) to make (D) her own decisions."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C – "enough old" should be "old enough"', isCorrect: true },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "I wish I had studied harder for the exam."',
        answers: [
          { content: 'I regret not studying harder for the exam.', isCorrect: true },
          { content: 'I studied very hard for the exam.', isCorrect: false },
          { content: 'I want to study harder for the exam.', isCorrect: false },
          { content: 'I will study harder for the next exam.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The (A) informations (B) you gave me (C) were (D) very useful."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B – "informations" should be "information"', isCorrect: true },
          { content: 'C', isCorrect: false },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "He last visited his grandparents two months ago."',
        answers: [
          { content: 'He has not visited his grandparents for two months.', isCorrect: true },
          { content: 'He visited his grandparents two months later.', isCorrect: false },
          { content: 'He visits his grandparents every two months.', isCorrect: false },
          { content: 'He has visited his grandparents since two months.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She (A) asked me (B) what did I (C) want (D) for lunch."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C – "what did I" should be "what I"', isCorrect: true },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "Unless you hurry, you will be late for school."',
        answers: [
          { content: 'If you do not hurry, you will be late for school.', isCorrect: true },
          { content: 'If you hurry, you will be late for school.', isCorrect: false },
          { content: 'You will not be late if you do not hurry.', isCorrect: false },
          { content: 'Hurry up or you will not be late.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "Neither (A) the teacher (B) nor the students (C) was (D) happy with the result."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C', isCorrect: false },
          { content: 'D – "was" should be "were"', isCorrect: true },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "My mother made me clean my room."',
        answers: [
          { content: 'I was made to clean my room by my mother.', isCorrect: true },
          { content: 'My mother asked me to clean my room politely.', isCorrect: false },
          { content: 'I cleaned my room to make my mother happy.', isCorrect: false },
          { content: 'My mother cleaned my room for me.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "He (A) is (B) one of the student (C) who passed (D) the exam."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C – "student" should be "students"', isCorrect: true },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "It was such a boring film that we left early."',
        answers: [
          { content: 'The film was so boring that we left early.', isCorrect: true },
          { content: 'We left early because the film was interesting.', isCorrect: false },
          { content: 'The film was not boring enough for us to leave.', isCorrect: false },
          { content: 'We stayed until the end of the boring film.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The (A) woman which (B) lives next door (C) is (D) a doctor."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B – "which" should be "who"', isCorrect: true },
          { content: 'C', isCorrect: false },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "They have not finished the project yet."',
        answers: [
          { content: 'The project has not been finished yet.', isCorrect: true },
          { content: 'The project was finished by them.', isCorrect: false },
          { content: 'They finished the project already.', isCorrect: false },
          { content: 'The project is being finished now.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "Although (A) he is (B) rich, but (C) he is (D) not happy."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C – "but" should be removed', isCorrect: true },
          { content: 'D', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "Without your help, I could not have passed the exam."',
        answers: [
          { content: 'If you had not helped me, I could not have passed the exam.', isCorrect: true },
          { content: 'I passed the exam without your help.', isCorrect: false },
          { content: 'You did not help me, so I failed the exam.', isCorrect: false },
          { content: 'I could pass the exam without your help.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She (A) prefers (B) reading books (C) than (D) watching television."',
        answers: [
          { content: 'A', isCorrect: false },
          { content: 'B', isCorrect: false },
          { content: 'C', isCorrect: false },
          { content: 'D – "than" should be "to"', isCorrect: true },
        ],
      },
    ],
  },
];

export default quizzes;
