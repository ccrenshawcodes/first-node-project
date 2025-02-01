const express = require('express');
const app = express();
const port = 8080;

app.get("/", (req, res) => res.sendFile('/Users/catherine.crenshaw/repos/odin/my-projects/node-info-site/index.html'));

app.get("/about", (req, res) => res.sendFile('/Users/catherine.crenshaw/repos/odin/my-projects/node-info-site/about.html'));

app.get("/contact-me", (req, res) => res.sendFile('/Users/catherine.crenshaw/repos/odin/my-projects/node-info-site/contact-me.html'))

app.use((req, res) => res.sendFile('/Users/catherine.crenshaw/repos/odin/my-projects/node-info-site/404.html'))

app.listen(port, () => {
  console.log("it's working... it's working");
})
