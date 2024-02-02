export default function updateStudentGradeByCity(students, city, newGrades) {
  // Use the filter function to get students in the specified city
  return students.filter((student) => student.location === city) // Add parentheses around parameter
    .map((student) => { // Add parentheses around parameter
      // Find the new grade for the student, if it exists
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      // Return a new object for the student, adding a grade property
      // If the student does not have a new grade, set grade to 'N/A'
      return {
        ...student,
        grade: gradeObject ? gradeObject.grade : 'N/A', // Add trailing comma
      };
    });
}
