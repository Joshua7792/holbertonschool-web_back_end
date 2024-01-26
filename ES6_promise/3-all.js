import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const photoBody = values[0].body;
      const { firstName, lastName } = values[1];
      
      console.log(`${photoBody} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
