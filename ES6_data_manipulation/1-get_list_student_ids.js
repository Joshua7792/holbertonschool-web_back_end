export default function getListStudentIds(array) {
  // Check if the input is an array
  if (!Array.isArray(array)) {
      return []; // If not an array, return an empty array
  }
  // map function for the input array of student objects
  // Extract and return only the id of each student
  return array.map(student => student.id);
}
