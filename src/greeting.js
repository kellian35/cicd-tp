function getGreeting(name) {
  if (name && name.trim() !== "") {
    return `Hello ${name}!`;
  }
  return "Hello world!";
}

module.exports = { getGreeting };
