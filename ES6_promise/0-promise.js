export default function getResponseFromAPI () {
  // Returns a new Promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('true');
      reject(new Error('An error occurred'));
    });
  });
}
