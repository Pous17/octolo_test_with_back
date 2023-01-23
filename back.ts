const express = require("express")
const cors = require('cors')
const app = express()

const server = app.listen(3030, () => console.log("Server listening at 3030"))

const today = new Date();

app.use(cors());

app.get('/date',  async (req: any, res: any) => {
try {
  let date = today.toLocaleString("fr-FR", { timeZone: "America/Chicago" });
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    res.status(200).json(date)
    console.log(res);
  } catch (err) {
    res.status(500).json('something went wrong')
  }
})

export {}