export default function cleanSet(set, startString) {
  if (!startString) return ''; // Return an empty string if startString is empty

  return [...set] // Convert the set to an array for easy iteration
      .filter(item => item.startsWith(startString)) // Filter items that start with startString
      .map(item => item.slice(startString.length)) // Remove startString from the beginning of the item
      .join('-'); // Join the filtered items with dashes
}
