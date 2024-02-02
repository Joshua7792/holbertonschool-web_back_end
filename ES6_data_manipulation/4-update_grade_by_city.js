export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use the filter function to get students in the specified city
  // Then, use the map function to modify each student object
  return students.filter((student) => student.location === city)
    .map(student => {
      // Find the new grade for the student, if it exists
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      // Return a new object for the student, adding a grade property
      // If the student does not have a new grade, set grade to 'N/A'
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A'
      };
    });
}
