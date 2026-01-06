function getGreeting(name) {
  if (name === "") {
    return "Hello !";
  }
  if (name && name.trim() !== "") {
    return `Hello ${name}!`;
  }
  return "Hello world!";
}

module.exports = { getGreeting };
