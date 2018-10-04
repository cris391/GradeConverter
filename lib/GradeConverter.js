function GradeConverter(intGrade) {
  const grade = grades[intGrade];
  
  if(!grade){
    throw new Error('invalid grade');
  }
  return grade;
}
const grades = {
  A: 12,
  B: 10,
  C: 7,
  D: 4,
  E: 02,
  Fx: 00,
  F: -03
}


module.exports = GradeConverter;