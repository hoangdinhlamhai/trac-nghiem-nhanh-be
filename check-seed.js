const { PrismaClient } = require('@prisma/client');
const p = new PrismaClient();

p.category.count().then(function(c) {
  console.log('Categories:', c);
  return p.quiz.count();
}).then(function(q) {
  console.log('Quizzes:', q);
  return p.question.count();
}).then(function(qs) {
  console.log('Questions:', qs);
  return p.answer.count();
}).then(function(a) {
  console.log('Answers:', a);
  return p.cpaCampaign.count();
}).then(function(cpa) {
  console.log('Campaigns:', cpa);
  p.$disconnect();
}).catch(function(e) {
  console.error('Error:', e.message);
  p.$disconnect();
});
