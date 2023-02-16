export const formValidation = (email, message) => {
    console.log("here: ", email, message);
    const results = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!message) {
      console.log('!message');
      results.message = "A message is required"
    }
    if (!email) {
      console.log('!email');
      results.email = "An Email is required"
    } else if (!regex.test(email)) {
      console.log('!regex.test(email)');
      results.email = "Not a valid Email format"
    }
    return results;
  }
