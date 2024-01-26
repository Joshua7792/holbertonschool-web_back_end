export default function handleResponseFromAPI(promise) {
    return promise
        .then(() => {
            // When the Promise resolves
            return {
                status: 200,
                body: 'success',
            };
        })
        .catch(() => {
            // When the Promise rejects, return an empty Error object
            return new Error();
        })
        .finally(() => {
            // For every resolution (either resolve or reject)
            console.log('Got a response from the API');
        });
}
