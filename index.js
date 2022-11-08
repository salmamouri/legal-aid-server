const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("legal aid is running");
});
app.listen(port, () => {
  console.log(`Legal Aid is running on ${port}`);
});
