function getGreeting(name) {
  if (name && name.trim() !== "") {
    return `Hello ${name}!`;
  }
  if (name === "") {
    return "Hello !";
  }
  return "Hello world!";
}

module.exports = { getGreeting };
