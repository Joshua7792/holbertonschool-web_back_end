export default function getStudentsByLocation(students, city) {
  // Use the filter function to select students who are in the specified city
  return students.filter(student => student.location === city);
}
