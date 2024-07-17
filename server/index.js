const express = require("express");
const cors = require("cors");
const PORT = 3000;
const app = express();
const {router}=require('./routerHotels')
const {router2}=require('./routerUser')

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");

});
app.use('/hotel',router)
app.use('/user',router2)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
