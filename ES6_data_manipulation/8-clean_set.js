export default function cleanSet(set, startString) {
// Check if startString is not a string or if it's an empty string
  if (typeof startString !== 'string' || startString === '') {
    return ''; // Return an empty string in these cases
  }

  // Process the set and return the formatted string
  return [...set]
    .filter((item) => typeof item === 'string' && item.startsWith(startString)) // Ensure item is a string and starts with startString
    .map((item) => item.slice(startString.length)) // Extract the part of the item after startString
    .join('-'); // Join the resulting strings with dashes
}
