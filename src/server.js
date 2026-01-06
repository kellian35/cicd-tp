const express = require("express");
const { getGreeting } = require("./greeting");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/hello/:name?", (req, res) => {
  const name = req.params.name;
  res.send(getGreeting(name));
});

app.post("/hello", (req, res) => {
  const name = req.headers["x-name"];
  res.send(getGreeting(name));
});

app.post("/hi", (req, res) => {
  const name = req.headers["x-name"];
  const greeting = name ? `Hey ${name}!` : "Hey there!";
  res.send(greeting);
});

// Middleware pour gérer les méthodes non supportées sur les routes existantes
app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.status(405).send("Method Not Allowed");
  } else {
    next();
  }
});

// Middleware pour gérer les routes non trouvées
app.use((req, res) => {
  res.status(404).send("Not Found");
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

module.exports = app;
