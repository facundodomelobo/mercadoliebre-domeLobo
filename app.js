const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public");
const port = process.env.PORT || 3030;
app.use(express.static(publicPath));

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.post("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.post("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
