import { QuizType } from '@prisma/client';
import { QuizSeedData } from '../types';

const quizzes: QuizSeedData[] = [
  // =============================================
  // Quiz 1: Tổng hợp – Phonetics, Grammar, Vocabulary, Reading
  // =============================================
  {
    categorySlug: 'on-thi-thpt-tieng-anh',
    title: 'Đề ôn thi THPT QG 2025 - Tiếng Anh - Đề số 1',
    slug: 'on-thi-thpt-tieng-anh-de-1',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Tiếng Anh - Đề số 1. Tổng hợp kiến thức ngữ âm (phonetics), ngữ pháp (grammar), từ vựng (vocabulary) và đọc hiểu (reading). Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "watched", "played", "stopped", "washed".',
        answers: [
          { content: 'watched', isCorrect: false },
          { content: 'played', isCorrect: true },
          { content: 'stopped', isCorrect: false },
          { content: 'washed', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently from the others: "think", "that", "thank", "thought".',
        answers: [
          { content: 'think', isCorrect: false },
          { content: 'that', isCorrect: true },
          { content: 'thank', isCorrect: false },
          { content: 'thought', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern from the others: "economic", "technology", "environment", "communicate".',
        answers: [
          { content: 'economic', isCorrect: true },
          { content: 'technology', isCorrect: false },
          { content: 'environment', isCorrect: false },
          { content: 'communicate', isCorrect: false },
        ],
      },
      {
        content: 'She has been working here ______ 2018.',
        answers: [
          { content: 'for', isCorrect: false },
          { content: 'since', isCorrect: true },
          { content: 'during', isCorrect: false },
          { content: 'in', isCorrect: false },
        ],
      },
      {
        content: 'If it ______ tomorrow, we will cancel the picnic.',
        answers: [
          { content: 'rained', isCorrect: false },
          { content: 'rains', isCorrect: true },
          { content: 'will rain', isCorrect: false },
          { content: 'would rain', isCorrect: false },
        ],
      },
      {
        content: 'The book ______ by millions of people around the world since it was published.',
        answers: [
          { content: 'has been read', isCorrect: true },
          { content: 'was read', isCorrect: false },
          { content: 'is read', isCorrect: false },
          { content: 'had been read', isCorrect: false },
        ],
      },
      {
        content: 'He asked me ______ I had finished the report.',
        answers: [
          { content: 'that', isCorrect: false },
          { content: 'whether', isCorrect: true },
          { content: 'what', isCorrect: false },
          { content: 'which', isCorrect: false },
        ],
      },
      {
        content: 'The teacher, ______ has been teaching for 20 years, is retiring next month.',
        answers: [
          { content: 'which', isCorrect: false },
          { content: 'who', isCorrect: true },
          { content: 'whom', isCorrect: false },
          { content: 'whose', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word or phrase that is CLOSEST in meaning to the underlined word: "The government has implemented new policies to ALLEVIATE poverty."',
        answers: [
          { content: 'increase', isCorrect: false },
          { content: 'reduce', isCorrect: true },
          { content: 'maintain', isCorrect: false },
          { content: 'ignore', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word or phrase that is OPPOSITE in meaning to the underlined word: "The new manager is very GENEROUS with bonuses."',
        answers: [
          { content: 'kind', isCorrect: false },
          { content: 'stingy', isCorrect: true },
          { content: 'wealthy', isCorrect: false },
          { content: 'careful', isCorrect: false },
        ],
      },
      {
        content: 'I wish I ______ harder for the exam last week.',
        answers: [
          { content: 'studied', isCorrect: false },
          { content: 'had studied', isCorrect: true },
          { content: 'have studied', isCorrect: false },
          { content: 'would study', isCorrect: false },
        ],
      },
      {
        content: 'Not until she arrived at the airport ______ she had left her passport at home.',
        answers: [
          { content: 'she realized', isCorrect: false },
          { content: 'did she realize', isCorrect: true },
          { content: 'she did realize', isCorrect: false },
          { content: 'had she realized', isCorrect: false },
        ],
      },
      {
        content: 'The children were excited ______ going on a field trip.',
        answers: [
          { content: 'for', isCorrect: false },
          { content: 'about', isCorrect: true },
          { content: 'with', isCorrect: false },
          { content: 'to', isCorrect: false },
        ],
      },
      {
        content: '______ the heavy rain, the football match was postponed.',
        answers: [
          { content: 'Although', isCorrect: false },
          { content: 'Due to', isCorrect: true },
          { content: 'In spite of', isCorrect: false },
          { content: 'However', isCorrect: false },
        ],
      },
      {
        content: 'She suggested ______ to the cinema that evening.',
        answers: [
          { content: 'to go', isCorrect: false },
          { content: 'going', isCorrect: true },
          { content: 'go', isCorrect: false },
          { content: 'went', isCorrect: false },
        ],
      },
      {
        content: 'The more you practice, ______ you will become.',
        answers: [
          { content: 'the better', isCorrect: true },
          { content: 'better', isCorrect: false },
          { content: 'the best', isCorrect: false },
          { content: 'good', isCorrect: false },
        ],
      },
      {
        content: 'He is used to ______ up early every morning.',
        answers: [
          { content: 'get', isCorrect: false },
          { content: 'getting', isCorrect: true },
          { content: 'got', isCorrect: false },
          { content: 'gets', isCorrect: false },
        ],
      },
      {
        content: 'Choose the underlined part that needs correction: "The number of students who HAS registered for the course IS increasing every year."',
        answers: [
          { content: 'HAS', isCorrect: true },
          { content: 'registered', isCorrect: false },
          { content: 'IS', isCorrect: false },
          { content: 'increasing', isCorrect: false },
        ],
      },
      {
        content: 'It is essential that every student ______ the assignment on time.',
        answers: [
          { content: 'submits', isCorrect: false },
          { content: 'submit', isCorrect: true },
          { content: 'submitted', isCorrect: false },
          { content: 'will submit', isCorrect: false },
        ],
      },
      {
        content: 'She ______ for the company for ten years by the end of this month.',
        answers: [
          { content: 'will work', isCorrect: false },
          { content: 'will have been working', isCorrect: true },
          { content: 'has worked', isCorrect: false },
          { content: 'is working', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence that is closest in meaning to: "People say that he is a talented musician."',
        answers: [
          { content: 'He is said to be a talented musician.', isCorrect: true },
          { content: 'He said that he is a talented musician.', isCorrect: false },
          { content: 'It is said that he was a talented musician.', isCorrect: false },
          { content: 'People are said to be talented musicians.', isCorrect: false },
        ],
      },
      {
        content: 'The hotel ______ we stayed last summer was right on the beach.',
        answers: [
          { content: 'which', isCorrect: false },
          { content: 'where', isCorrect: true },
          { content: 'that', isCorrect: false },
          { content: 'when', isCorrect: false },
        ],
      },
      {
        content: 'Choose the correct answer: "By the time we got to the theater, the movie ______."',
        answers: [
          { content: 'already started', isCorrect: false },
          { content: 'had already started', isCorrect: true },
          { content: 'has already started', isCorrect: false },
          { content: 'was already starting', isCorrect: false },
        ],
      },
      {
        content: 'The word "SUSTAINABLE" is closest in meaning to ______.',
        answers: [
          { content: 'temporary', isCorrect: false },
          { content: 'maintainable over the long term', isCorrect: true },
          { content: 'expensive', isCorrect: false },
          { content: 'harmful', isCorrect: false },
        ],
      },
      {
        content: '______ he was tired, he continued working until midnight.',
        answers: [
          { content: 'Because', isCorrect: false },
          { content: 'Although', isCorrect: true },
          { content: 'Since', isCorrect: false },
          { content: 'Due to', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 2: Tổng hợp – Tenses, Conditionals, Passive, Reported Speech, Prepositions
  // =============================================
  {
    categorySlug: 'on-thi-thpt-tieng-anh',
    title: 'Đề ôn thi THPT QG 2025 - Tiếng Anh - Đề số 2',
    slug: 'on-thi-thpt-tieng-anh-de-2',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Tiếng Anh - Đề số 2. Tổng hợp kiến thức các thì (tenses), câu điều kiện (conditionals), câu bị động (passive voice), câu tường thuật (reported speech) và giới từ (prepositions). Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'She ______ to Paris three times so far.',
        answers: [
          { content: 'went', isCorrect: false },
          { content: 'has been', isCorrect: true },
          { content: 'had been', isCorrect: false },
          { content: 'was going', isCorrect: false },
        ],
      },
      {
        content: 'While I ______ dinner, the phone rang.',
        answers: [
          { content: 'cooked', isCorrect: false },
          { content: 'was cooking', isCorrect: true },
          { content: 'have cooked', isCorrect: false },
          { content: 'am cooking', isCorrect: false },
        ],
      },
      {
        content: 'By this time next year, they ______ their new house.',
        answers: [
          { content: 'will build', isCorrect: false },
          { content: 'will have built', isCorrect: true },
          { content: 'are building', isCorrect: false },
          { content: 'have built', isCorrect: false },
        ],
      },
      {
        content: 'If I ______ enough money, I would travel around the world.',
        answers: [
          { content: 'have', isCorrect: false },
          { content: 'had', isCorrect: true },
          { content: 'will have', isCorrect: false },
          { content: 'would have', isCorrect: false },
        ],
      },
      {
        content: 'If she had taken the medicine, she ______ better now.',
        answers: [
          { content: 'would feel', isCorrect: true },
          { content: 'would have felt', isCorrect: false },
          { content: 'will feel', isCorrect: false },
          { content: 'felt', isCorrect: false },
        ],
      },
      {
        content: 'Unless you ______ harder, you will fail the exam.',
        answers: [
          { content: 'study', isCorrect: true },
          { content: 'studied', isCorrect: false },
          { content: 'will study', isCorrect: false },
          { content: 'would study', isCorrect: false },
        ],
      },
      {
        content: 'The report ______ by the manager before the meeting started.',
        answers: [
          { content: 'was reviewed', isCorrect: false },
          { content: 'had been reviewed', isCorrect: true },
          { content: 'has been reviewed', isCorrect: false },
          { content: 'is reviewed', isCorrect: false },
        ],
      },
      {
        content: 'A new bridge ______ across the river at the moment.',
        answers: [
          { content: 'is built', isCorrect: false },
          { content: 'is being built', isCorrect: true },
          { content: 'was built', isCorrect: false },
          { content: 'has been built', isCorrect: false },
        ],
      },
      {
        content: 'They expect that the project ______ by December.',
        answers: [
          { content: 'will be completed', isCorrect: true },
          { content: 'will complete', isCorrect: false },
          { content: 'is completed', isCorrect: false },
          { content: 'completes', isCorrect: false },
        ],
      },
      {
        content: 'She told me that she ______ the movie the day before.',
        answers: [
          { content: 'saw', isCorrect: false },
          { content: 'had seen', isCorrect: true },
          { content: 'has seen', isCorrect: false },
          { content: 'sees', isCorrect: false },
        ],
      },
      {
        content: 'He asked me where I ______ at that time.',
        answers: [
          { content: 'work', isCorrect: false },
          { content: 'was working', isCorrect: true },
          { content: 'am working', isCorrect: false },
          { content: 'worked', isCorrect: false },
        ],
      },
      {
        content: 'The teacher told the students ______ quiet during the exam.',
        answers: [
          { content: 'be', isCorrect: false },
          { content: 'to be', isCorrect: true },
          { content: 'being', isCorrect: false },
          { content: 'were', isCorrect: false },
        ],
      },
      {
        content: 'She is interested ______ learning foreign languages.',
        answers: [
          { content: 'on', isCorrect: false },
          { content: 'in', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'for', isCorrect: false },
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
        content: 'The meeting will take place ______ Monday morning.',
        answers: [
          { content: 'in', isCorrect: false },
          { content: 'on', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'by', isCorrect: false },
        ],
      },
      {
        content: 'We arrived ______ the airport just in time for our flight.',
        answers: [
          { content: 'to', isCorrect: false },
          { content: 'at', isCorrect: true },
          { content: 'in', isCorrect: false },
          { content: 'on', isCorrect: false },
        ],
      },
      {
        content: 'She apologized ______ being late to the meeting.',
        answers: [
          { content: 'about', isCorrect: false },
          { content: 'for', isCorrect: true },
          { content: 'of', isCorrect: false },
          { content: 'to', isCorrect: false },
        ],
      },
      {
        content: 'The children look forward ______ their summer vacation every year.',
        answers: [
          { content: 'for', isCorrect: false },
          { content: 'to', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'on', isCorrect: false },
        ],
      },
      {
        content: 'If he ______ the bus, he would not have been late for work.',
        answers: [
          { content: 'caught', isCorrect: false },
          { content: 'had caught', isCorrect: true },
          { content: 'catches', isCorrect: false },
          { content: 'would catch', isCorrect: false },
        ],
      },
      {
        content: 'The letter ______ yesterday, but I haven\'t received it yet.',
        answers: [
          { content: 'was sent', isCorrect: true },
          { content: 'is sent', isCorrect: false },
          { content: 'has been sent', isCorrect: false },
          { content: 'sent', isCorrect: false },
        ],
      },
      {
        content: '"Don\'t touch the wet paint," the sign said. → The sign warned people ______ the wet paint.',
        answers: [
          { content: 'to not touch', isCorrect: false },
          { content: 'not to touch', isCorrect: true },
          { content: 'don\'t touch', isCorrect: false },
          { content: 'not touching', isCorrect: false },
        ],
      },
      {
        content: 'She ______ English since she was six years old.',
        answers: [
          { content: 'learned', isCorrect: false },
          { content: 'has been learning', isCorrect: true },
          { content: 'was learning', isCorrect: false },
          { content: 'learns', isCorrect: false },
        ],
      },
      {
        content: 'The cake ______ by my mother for the party tomorrow.',
        answers: [
          { content: 'will bake', isCorrect: false },
          { content: 'will be baked', isCorrect: true },
          { content: 'is baking', isCorrect: false },
          { content: 'bakes', isCorrect: false },
        ],
      },
      {
        content: 'He depends ______ his parents for financial support.',
        answers: [
          { content: 'in', isCorrect: false },
          { content: 'on', isCorrect: true },
          { content: 'at', isCorrect: false },
          { content: 'for', isCorrect: false },
        ],
      },
      {
        content: 'If water ______ to 100°C, it boils.',
        answers: [
          { content: 'is heated', isCorrect: true },
          { content: 'was heated', isCorrect: false },
          { content: 'will be heated', isCorrect: false },
          { content: 'would be heated', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 3: Tổng hợp – Word Formation, Synonyms, Antonyms, Phrasal Verbs, Idioms
  // =============================================
  {
    categorySlug: 'on-thi-thpt-tieng-anh',
    title: 'Đề ôn thi THPT QG 2025 - Tiếng Anh - Đề số 3',
    slug: 'on-thi-thpt-tieng-anh-de-3',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Tiếng Anh - Đề số 3. Tổng hợp kiến thức cấu tạo từ (word formation), từ đồng nghĩa (synonyms), từ trái nghĩa (antonyms), cụm động từ (phrasal verbs) và thành ngữ (idioms). Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'The ______ of the new policy has been widely discussed in the media. (IMPLEMENT)',
        answers: [
          { content: 'implement', isCorrect: false },
          { content: 'implementation', isCorrect: true },
          { content: 'implementable', isCorrect: false },
          { content: 'implementing', isCorrect: false },
        ],
      },
      {
        content: 'She is a very ______ person who always helps others. (GENEROSITY)',
        answers: [
          { content: 'generosity', isCorrect: false },
          { content: 'generous', isCorrect: true },
          { content: 'generously', isCorrect: false },
          { content: 'generosities', isCorrect: false },
        ],
      },
      {
        content: 'The company made a ______ decision to expand overseas. (STRATEGY)',
        answers: [
          { content: 'strategy', isCorrect: false },
          { content: 'strategic', isCorrect: true },
          { content: 'strategically', isCorrect: false },
          { content: 'strategize', isCorrect: false },
        ],
      },
      {
        content: 'His ______ to the project was remarkable. (DEDICATE)',
        answers: [
          { content: 'dedicate', isCorrect: false },
          { content: 'dedication', isCorrect: true },
          { content: 'dedicated', isCorrect: false },
          { content: 'dedicating', isCorrect: false },
        ],
      },
      {
        content: 'The word "ABUNDANT" is closest in meaning to ______.',
        answers: [
          { content: 'scarce', isCorrect: false },
          { content: 'plentiful', isCorrect: true },
          { content: 'limited', isCorrect: false },
          { content: 'expensive', isCorrect: false },
        ],
      },
      {
        content: 'The word "DETERIORATE" is closest in meaning to ______.',
        answers: [
          { content: 'improve', isCorrect: false },
          { content: 'worsen', isCorrect: true },
          { content: 'maintain', isCorrect: false },
          { content: 'develop', isCorrect: false },
        ],
      },
      {
        content: 'The word "OPTIMISTIC" is OPPOSITE in meaning to ______.',
        answers: [
          { content: 'hopeful', isCorrect: false },
          { content: 'pessimistic', isCorrect: true },
          { content: 'positive', isCorrect: false },
          { content: 'confident', isCorrect: false },
        ],
      },
      {
        content: 'The word "TEMPORARY" is OPPOSITE in meaning to ______.',
        answers: [
          { content: 'brief', isCorrect: false },
          { content: 'permanent', isCorrect: true },
          { content: 'short', isCorrect: false },
          { content: 'transient', isCorrect: false },
        ],
      },
      {
        content: 'She had to ______ the meeting because of a family emergency. (phrasal verb meaning "cancel")',
        answers: [
          { content: 'call off', isCorrect: true },
          { content: 'call up', isCorrect: false },
          { content: 'call on', isCorrect: false },
          { content: 'call for', isCorrect: false },
        ],
      },
      {
        content: 'He promised to ______ smoking by the end of the year. (phrasal verb meaning "stop")',
        answers: [
          { content: 'give up', isCorrect: true },
          { content: 'give in', isCorrect: false },
          { content: 'give out', isCorrect: false },
          { content: 'give away', isCorrect: false },
        ],
      },
      {
        content: 'The plane ______ at 6 a.m. tomorrow. (phrasal verb meaning "depart by air")',
        answers: [
          { content: 'takes off', isCorrect: true },
          { content: 'takes on', isCorrect: false },
          { content: 'takes up', isCorrect: false },
          { content: 'takes over', isCorrect: false },
        ],
      },
      {
        content: 'Can you ______ the children while I go to the store? (phrasal verb meaning "take care of")',
        answers: [
          { content: 'look after', isCorrect: true },
          { content: 'look up', isCorrect: false },
          { content: 'look into', isCorrect: false },
          { content: 'look out', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "break the ice" means ______.',
        answers: [
          { content: 'to destroy something', isCorrect: false },
          { content: 'to make people feel more comfortable in a social situation', isCorrect: true },
          { content: 'to freeze water', isCorrect: false },
          { content: 'to break a promise', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "once in a blue moon" means ______.',
        answers: [
          { content: 'every night', isCorrect: false },
          { content: 'very rarely', isCorrect: true },
          { content: 'during a full moon', isCorrect: false },
          { content: 'frequently', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "hit the nail on the head" means ______.',
        answers: [
          { content: 'to hurt someone', isCorrect: false },
          { content: 'to describe exactly what is causing a situation or problem', isCorrect: true },
          { content: 'to build something', isCorrect: false },
          { content: 'to make a mistake', isCorrect: false },
        ],
      },
      {
        content: 'The ______ of the environment is everyone\'s responsibility. (PROTECT)',
        answers: [
          { content: 'protect', isCorrect: false },
          { content: 'protection', isCorrect: true },
          { content: 'protective', isCorrect: false },
          { content: 'protectively', isCorrect: false },
        ],
      },
      {
        content: 'We need to find a ______ solution to this problem. (PRACTICE)',
        answers: [
          { content: 'practice', isCorrect: false },
          { content: 'practical', isCorrect: true },
          { content: 'practically', isCorrect: false },
          { content: 'practitioner', isCorrect: false },
        ],
      },
      {
        content: 'The police are ______ the cause of the accident. (phrasal verb meaning "investigating")',
        answers: [
          { content: 'looking into', isCorrect: true },
          { content: 'looking after', isCorrect: false },
          { content: 'looking up', isCorrect: false },
          { content: 'looking for', isCorrect: false },
        ],
      },
      {
        content: 'The word "COMPREHENSIVE" is closest in meaning to ______.',
        answers: [
          { content: 'partial', isCorrect: false },
          { content: 'thorough', isCorrect: true },
          { content: 'simple', isCorrect: false },
          { content: 'brief', isCorrect: false },
        ],
      },
      {
        content: 'The word "RELUCTANT" is OPPOSITE in meaning to ______.',
        answers: [
          { content: 'unwilling', isCorrect: false },
          { content: 'eager', isCorrect: true },
          { content: 'hesitant', isCorrect: false },
          { content: 'cautious', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "let the cat out of the bag" means ______.',
        answers: [
          { content: 'to release an animal', isCorrect: false },
          { content: 'to reveal a secret', isCorrect: true },
          { content: 'to go shopping', isCorrect: false },
          { content: 'to start a fight', isCorrect: false },
        ],
      },
      {
        content: 'She ______ her father in appearance. (phrasal verb meaning "resemble")',
        answers: [
          { content: 'takes after', isCorrect: true },
          { content: 'takes off', isCorrect: false },
          { content: 'takes on', isCorrect: false },
          { content: 'takes up', isCorrect: false },
        ],
      },
      {
        content: 'The ______ between the two countries has improved significantly. (RELATE)',
        answers: [
          { content: 'relate', isCorrect: false },
          { content: 'relationship', isCorrect: true },
          { content: 'relative', isCorrect: false },
          { content: 'relatively', isCorrect: false },
        ],
      },
      {
        content: 'The word "INEVITABLE" is closest in meaning to ______.',
        answers: [
          { content: 'avoidable', isCorrect: false },
          { content: 'unavoidable', isCorrect: true },
          { content: 'unlikely', isCorrect: false },
          { content: 'possible', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "a piece of cake" means ______.',
        answers: [
          { content: 'a type of dessert', isCorrect: false },
          { content: 'something very easy to do', isCorrect: true },
          { content: 'a small portion', isCorrect: false },
          { content: 'something expensive', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 4: Tổng hợp – Error Identification, Sentence Transformation, Closest Meaning
  // =============================================
  {
    categorySlug: 'on-thi-thpt-tieng-anh',
    title: 'Đề ôn thi THPT QG 2025 - Tiếng Anh - Đề số 4',
    slug: 'on-thi-thpt-tieng-anh-de-4',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Tiếng Anh - Đề số 4. Tổng hợp kiến thức tìm lỗi sai (error identification), viết lại câu (sentence transformation) và câu đồng nghĩa (closest meaning). Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Find the error: "Each of the students HAVE to submit THEIR assignment BEFORE the deadline ON Friday."',
        answers: [
          { content: 'HAVE', isCorrect: true },
          { content: 'THEIR', isCorrect: false },
          { content: 'BEFORE', isCorrect: false },
          { content: 'ON', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The woman WHICH lives next door IS a FAMOUS scientist IN our country."',
        answers: [
          { content: 'WHICH', isCorrect: true },
          { content: 'IS', isCorrect: false },
          { content: 'FAMOUS', isCorrect: false },
          { content: 'IN', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "Despite OF the bad weather, THE outdoor concert WAS held AS scheduled."',
        answers: [
          { content: 'OF', isCorrect: true },
          { content: 'THE', isCorrect: false },
          { content: 'WAS', isCorrect: false },
          { content: 'AS', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She suggested THAT we SHOULD TO visit THE museum DURING our trip."',
        answers: [
          { content: 'THAT', isCorrect: false },
          { content: 'SHOULD TO', isCorrect: true },
          { content: 'THE', isCorrect: false },
          { content: 'DURING', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The MORE harder you STUDY, THE better RESULTS you will get."',
        answers: [
          { content: 'MORE harder', isCorrect: true },
          { content: 'STUDY', isCorrect: false },
          { content: 'THE', isCorrect: false },
          { content: 'RESULTS', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "He IS used to GET up early EVERY morning SINCE he was a child."',
        answers: [
          { content: 'IS', isCorrect: false },
          { content: 'GET', isCorrect: true },
          { content: 'EVERY', isCorrect: false },
          { content: 'SINCE', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "Neither the teacher NOR the students WAS satisfied WITH the results OF the experiment."',
        answers: [
          { content: 'NOR', isCorrect: false },
          { content: 'WAS', isCorrect: true },
          { content: 'WITH', isCorrect: false },
          { content: 'OF', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The number of UNEMPLOYED people HAVE increased SIGNIFICANTLY OVER the past year."',
        answers: [
          { content: 'UNEMPLOYED', isCorrect: false },
          { content: 'HAVE', isCorrect: true },
          { content: 'SIGNIFICANTLY', isCorrect: false },
          { content: 'OVER', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "It is a long time since I last saw him."',
        answers: [
          { content: 'I haven\'t seen him for a long time.', isCorrect: true },
          { content: 'I saw him for a long time.', isCorrect: false },
          { content: 'I have seen him recently.', isCorrect: false },
          { content: 'I last saw him a short time ago.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "No one in the class is taller than Tom."',
        answers: [
          { content: 'Tom is the tallest student in the class.', isCorrect: true },
          { content: 'Tom is shorter than everyone in the class.', isCorrect: false },
          { content: 'Someone in the class is taller than Tom.', isCorrect: false },
          { content: 'Tom is not tall.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "She started learning English five years ago."',
        answers: [
          { content: 'She has been learning English for five years.', isCorrect: true },
          { content: 'She learned English five years ago.', isCorrect: false },
          { content: 'She has learned English since five years.', isCorrect: false },
          { content: 'She stopped learning English five years ago.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "\'You should see a doctor,\' she said to me."',
        answers: [
          { content: 'She advised me to see a doctor.', isCorrect: true },
          { content: 'She told me see a doctor.', isCorrect: false },
          { content: 'She suggested me to see a doctor.', isCorrect: false },
          { content: 'She made me see a doctor.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "Without your help, I couldn\'t have finished the project."',
        answers: [
          { content: 'If you hadn\'t helped me, I couldn\'t have finished the project.', isCorrect: true },
          { content: 'If you didn\'t help me, I couldn\'t finish the project.', isCorrect: false },
          { content: 'You didn\'t help me, so I couldn\'t finish the project.', isCorrect: false },
          { content: 'I finished the project without your help.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "He is too young to drive a car."',
        answers: [
          { content: 'He is not old enough to drive a car.', isCorrect: true },
          { content: 'He is old enough to drive a car.', isCorrect: false },
          { content: 'He is so young that he can drive a car.', isCorrect: false },
          { content: 'He drives a car because he is young.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "They will build a new school in this area next year."',
        answers: [
          { content: 'A new school will be built in this area next year.', isCorrect: true },
          { content: 'A new school was built in this area next year.', isCorrect: false },
          { content: 'A new school is built in this area next year.', isCorrect: false },
          { content: 'A new school has been built in this area.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She HAS BEEN working AS a teacher SINCE ten years AND she loves her job."',
        answers: [
          { content: 'HAS BEEN', isCorrect: false },
          { content: 'AS', isCorrect: false },
          { content: 'SINCE', isCorrect: true },
          { content: 'AND', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "Although he was tired, he continued working."',
        answers: [
          { content: 'Despite being tired, he continued working.', isCorrect: true },
          { content: 'Because he was tired, he continued working.', isCorrect: false },
          { content: 'He was tired, so he stopped working.', isCorrect: false },
          { content: 'He continued working because he was not tired.', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "The last time she visited her grandparents was in December."',
        answers: [
          { content: 'She hasn\'t visited her grandparents since December.', isCorrect: true },
          { content: 'She visited her grandparents every December.', isCorrect: false },
          { content: 'She has visited her grandparents since December.', isCorrect: false },
          { content: 'She will visit her grandparents in December.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "If I WOULD HAVE known ABOUT the meeting, I WOULD HAVE attended IT."',
        answers: [
          { content: 'WOULD HAVE known', isCorrect: true },
          { content: 'ABOUT', isCorrect: false },
          { content: 'WOULD HAVE attended', isCorrect: false },
          { content: 'IT', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "\'I didn\'t break the vase,\' the boy said."',
        answers: [
          { content: 'The boy denied breaking the vase.', isCorrect: true },
          { content: 'The boy admitted breaking the vase.', isCorrect: false },
          { content: 'The boy said he didn\'t break the vase yesterday.', isCorrect: false },
          { content: 'The boy refused to break the vase.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The INFORMATIONS that HE gave me WERE not ACCURATE."',
        answers: [
          { content: 'INFORMATIONS', isCorrect: true },
          { content: 'HE', isCorrect: false },
          { content: 'WERE', isCorrect: false },
          { content: 'ACCURATE', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "She is the most intelligent student in the school."',
        answers: [
          { content: 'No other student in the school is as intelligent as she is.', isCorrect: true },
          { content: 'She is more intelligent than some students.', isCorrect: false },
          { content: 'Many students are as intelligent as she is.', isCorrect: false },
          { content: 'She is not very intelligent.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "My brother, TOGETHER with HIS friends, ARE going TO the concert tonight."',
        answers: [
          { content: 'TOGETHER', isCorrect: false },
          { content: 'HIS', isCorrect: false },
          { content: 'ARE', isCorrect: true },
          { content: 'TO', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "It\'s not necessary for you to wear a suit to the party."',
        answers: [
          { content: 'You don\'t have to wear a suit to the party.', isCorrect: true },
          { content: 'You mustn\'t wear a suit to the party.', isCorrect: false },
          { content: 'You should wear a suit to the party.', isCorrect: false },
          { content: 'You must wear a suit to the party.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She ASKED me THAT I could HELP her WITH the homework."',
        answers: [
          { content: 'ASKED', isCorrect: false },
          { content: 'THAT', isCorrect: true },
          { content: 'HELP', isCorrect: false },
          { content: 'WITH', isCorrect: false },
        ],
      },
    ],
  },
  // =============================================
  // Quiz 5: Đề thi thử tổng hợp – All Skills Mixed
  // =============================================
  {
    categorySlug: 'on-thi-thpt-tieng-anh',
    title: 'Đề ôn thi THPT QG 2025 - Tiếng Anh - Đề số 5',
    slug: 'on-thi-thpt-tieng-anh-de-5',
    description:
      'Đề ôn thi THPT Quốc gia 2025 môn Tiếng Anh - Đề số 5. Đề thi thử tổng hợp tất cả các kỹ năng: ngữ âm, ngữ pháp, từ vựng, đọc hiểu, viết lại câu và tìm lỗi sai. Gồm 25 câu hỏi trắc nghiệm.',
    instruction:
      'Chọn đáp án đúng nhất cho mỗi câu hỏi. Mỗi câu chỉ có một đáp án đúng. Thời gian làm bài: 90 phút.',
    quizType: QuizType.SCORED,
    timeLimitMins: 90,
    questions: [
      {
        content: 'Choose the word whose underlined part is pronounced differently: "chemistry", "school", "character", "machine".',
        answers: [
          { content: 'chemistry', isCorrect: false },
          { content: 'school', isCorrect: false },
          { content: 'character', isCorrect: false },
          { content: 'machine', isCorrect: true },
        ],
      },
      {
        content: 'Choose the word that has a different stress pattern: "volunteer", "engineer", "committee", "understand".',
        answers: [
          { content: 'volunteer', isCorrect: false },
          { content: 'engineer', isCorrect: false },
          { content: 'committee', isCorrect: true },
          { content: 'understand', isCorrect: false },
        ],
      },
      {
        content: 'The government has taken measures to ______ the spread of the disease.',
        answers: [
          { content: 'prevent', isCorrect: true },
          { content: 'provide', isCorrect: false },
          { content: 'promote', isCorrect: false },
          { content: 'produce', isCorrect: false },
        ],
      },
      {
        content: 'She couldn\'t help ______ when she heard the funny story.',
        answers: [
          { content: 'to laugh', isCorrect: false },
          { content: 'laughing', isCorrect: true },
          { content: 'laugh', isCorrect: false },
          { content: 'laughed', isCorrect: false },
        ],
      },
      {
        content: 'The manager insisted that every employee ______ the training session.',
        answers: [
          { content: 'attends', isCorrect: false },
          { content: 'attend', isCorrect: true },
          { content: 'attended', isCorrect: false },
          { content: 'would attend', isCorrect: false },
        ],
      },
      {
        content: '______ had she left the house when it started to rain heavily.',
        answers: [
          { content: 'Hardly', isCorrect: true },
          { content: 'No sooner', isCorrect: false },
          { content: 'Scarcely', isCorrect: false },
          { content: 'Not only', isCorrect: false },
        ],
      },
      {
        content: 'The word "UBIQUITOUS" is closest in meaning to ______.',
        answers: [
          { content: 'rare', isCorrect: false },
          { content: 'found everywhere', isCorrect: true },
          { content: 'unique', isCorrect: false },
          { content: 'invisible', isCorrect: false },
        ],
      },
      {
        content: 'The word "FRUGAL" is OPPOSITE in meaning to ______.',
        answers: [
          { content: 'thrifty', isCorrect: false },
          { content: 'extravagant', isCorrect: true },
          { content: 'careful', isCorrect: false },
          { content: 'modest', isCorrect: false },
        ],
      },
      {
        content: 'He turned ______ the job offer because the salary was too low. (phrasal verb)',
        answers: [
          { content: 'down', isCorrect: true },
          { content: 'up', isCorrect: false },
          { content: 'off', isCorrect: false },
          { content: 'on', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "burn the midnight oil" means ______.',
        answers: [
          { content: 'to waste resources', isCorrect: false },
          { content: 'to work or study late into the night', isCorrect: true },
          { content: 'to start a fire', isCorrect: false },
          { content: 'to wake up early', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "The CHILDREN were EXCITING about THE trip TO the amusement park."',
        answers: [
          { content: 'CHILDREN', isCorrect: false },
          { content: 'EXCITING', isCorrect: true },
          { content: 'THE', isCorrect: false },
          { content: 'TO', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "He regrets not studying harder at university."',
        answers: [
          { content: 'He wishes he had studied harder at university.', isCorrect: true },
          { content: 'He wishes he studied harder at university.', isCorrect: false },
          { content: 'He regrets studying hard at university.', isCorrect: false },
          { content: 'He doesn\'t regret studying at university.', isCorrect: false },
        ],
      },
      {
        content: 'The ______ growth of the city has led to many environmental problems. (RAPID)',
        answers: [
          { content: 'rapid', isCorrect: true },
          { content: 'rapidly', isCorrect: false },
          { content: 'rapidity', isCorrect: false },
          { content: 'rapidness', isCorrect: false },
        ],
      },
      {
        content: 'It was not until midnight ______ the noise stopped.',
        answers: [
          { content: 'when', isCorrect: false },
          { content: 'that', isCorrect: true },
          { content: 'which', isCorrect: false },
          { content: 'before', isCorrect: false },
        ],
      },
      {
        content: 'She would rather her children ______ too much time on social media.',
        answers: [
          { content: 'don\'t spend', isCorrect: false },
          { content: 'didn\'t spend', isCorrect: true },
          { content: 'not spend', isCorrect: false },
          { content: 'won\'t spend', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "The sooner we leave, the earlier we will arrive."',
        answers: [
          { content: 'If we leave sooner, we will arrive earlier.', isCorrect: true },
          { content: 'We will arrive late if we leave soon.', isCorrect: false },
          { content: 'Leaving late means arriving early.', isCorrect: false },
          { content: 'We should not leave early.', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "She IS one of THE students WHO HAS won A scholarship this year."',
        answers: [
          { content: 'IS', isCorrect: false },
          { content: 'THE', isCorrect: false },
          { content: 'HAS', isCorrect: true },
          { content: 'A', isCorrect: false },
        ],
      },
      {
        content: 'The company is looking for someone who is ______ in both English and French. (FLUENCY)',
        answers: [
          { content: 'fluency', isCorrect: false },
          { content: 'fluent', isCorrect: true },
          { content: 'fluently', isCorrect: false },
          { content: 'fluencies', isCorrect: false },
        ],
      },
      {
        content: 'We ran ______ of milk, so I need to go to the store. (phrasal verb meaning "used up the supply")',
        answers: [
          { content: 'out', isCorrect: true },
          { content: 'off', isCorrect: false },
          { content: 'into', isCorrect: false },
          { content: 'over', isCorrect: false },
        ],
      },
      {
        content: 'Choose the word whose underlined part is pronounced differently: "houses", "horses", "roses", "villages".',
        answers: [
          { content: 'houses', isCorrect: false },
          { content: 'horses', isCorrect: false },
          { content: 'roses', isCorrect: false },
          { content: 'villages', isCorrect: true },
        ],
      },
      {
        content: '______ the fact that he was ill, he went to work as usual.',
        answers: [
          { content: 'Because of', isCorrect: false },
          { content: 'Despite', isCorrect: true },
          { content: 'Since', isCorrect: false },
          { content: 'Due to', isCorrect: false },
        ],
      },
      {
        content: 'Choose the sentence closest in meaning to: "They made him work overtime without extra pay."',
        answers: [
          { content: 'He was made to work overtime without extra pay.', isCorrect: true },
          { content: 'He was made work overtime without extra pay.', isCorrect: false },
          { content: 'He made them work overtime without extra pay.', isCorrect: false },
          { content: 'He was making to work overtime.', isCorrect: false },
        ],
      },
      {
        content: 'The idiom "keep an eye on" means ______.',
        answers: [
          { content: 'to close your eyes', isCorrect: false },
          { content: 'to watch or monitor carefully', isCorrect: true },
          { content: 'to look away', isCorrect: false },
          { content: 'to ignore something', isCorrect: false },
        ],
      },
      {
        content: 'Had I known about the traffic jam, I ______ a different route.',
        answers: [
          { content: 'would take', isCorrect: false },
          { content: 'would have taken', isCorrect: true },
          { content: 'will take', isCorrect: false },
          { content: 'took', isCorrect: false },
        ],
      },
      {
        content: 'Find the error: "MOST of the FURNITURES in THIS room ARE made of wood."',
        answers: [
          { content: 'MOST', isCorrect: false },
          { content: 'FURNITURES', isCorrect: true },
          { content: 'THIS', isCorrect: false },
          { content: 'ARE', isCorrect: false },
        ],
      },
    ],
  },
];

export default quizzes;
