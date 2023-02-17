// This function is used to scroll to a specific element on the page
const scrollTo = (id) => {
  const element = document.querySelector(id);
  element.scrollIntoView({ behavior: 'smooth' });
};

export default scrollTo;