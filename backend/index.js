const connectTOMongo = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");

connectTOMongo();
const app = express();
// const port = 5000
const port = process.env.REACT_APP_PORT || 5000;

// Define CORS options
const corsOptions = {
  origin: ["https://unity-book.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "auth-token"]
};

// Apply CORS middleware with custom options
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello");
});

// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

/// static file start
// app.use(express.static(path.join(__dirname, "../frontend/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
// });

app.listen(port, () => {
  console.log(`iNoteBook Backend listening on port http://localhost:${port}`);
});
