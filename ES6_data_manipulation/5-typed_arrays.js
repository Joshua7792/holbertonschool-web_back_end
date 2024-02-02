export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Create a new ArrayBuffer of the specified length
  const buffer = new ArrayBuffer(length);
  // Create a view of the buffer as an array of 8-bit integers
  const int8View = new Int8Array(buffer);
  // Set the value at the specified position
  int8View[position] = value;
  // Return a DataView of the buffer for more flexible operations
  return new DataView(buffer);
}
