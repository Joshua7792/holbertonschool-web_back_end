export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({
      // Implicit return with parentheses and no curly braces
      status: 200,
      body: 'success',
      // Added trailing comma
    }))
    .catch(() => new Error()) // Implicit return for arrow function
    .finally(() => {
      // For every resolution (either resolve or reject)
      console.log('Got a response from the API');
    });
}
