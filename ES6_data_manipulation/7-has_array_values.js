export default function hasArrayValues(set, array) {
  // Return true if all the values in the array are present in the set
  // Return false if not
  return array.every(value => set.has(value));
}
