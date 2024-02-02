export default function getStudentIdsSum(students) {
  // First, check if the input 'students' is an array to prevent errors.
  if (!Array.isArray(students)) {
    return []; // If not an array, return an empty array.
  }

  // 'totalSum' is the sum of IDs up to the current iteration,
  // and 'student' represents the current student object being processed.
  const sumIds = (totalSum, student) => totalSum + student.id;

  // The reduce() method iterates over each student to accumulate the total sum of IDs.
  const totalIdSum = students.reduce(sumIds, 0);

  // Return the final sum of all student IDs.
  return totalIdSum;
}
