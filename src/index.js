const express = require("express"); 
// const bodyParser = require("body-parser"); 
const cors = require("cors"); 
const app = express();
const praktikumController = require('./controllers/praktikumController')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const praktikum = require(`./routes/route`)

app.use(`/praktikum`, praktikum)

app.get("/test", (req, res) => {
  let response = {
    message: "Ini end-point pertama ku",
    method: req.method,
    code: res.statusCode,
  };
  res.json(response);
});

app.post("/praktikum/identitas/:id", (req, res) => {
  const id = req.params.id;
  const nama = req.body.nama;
  const sekolah = req.body.sekolah;
  const alamat = req.body.alamat;

  res.json({
    id,   
    nama,
    sekolah,
    alamat,
  });
});


app.listen(8000, () => {
  console.log("Server run on port 8000");
});
