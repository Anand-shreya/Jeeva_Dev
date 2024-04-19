const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const Model = require("./model/Model");
const cors = require("cors");

const app = express();
const port = 5000;
app.use(cors());
mongoose.connect(
  "mongodb+srv://shreyaanand1501:test1@cluster0.9ehbpse.mongodb.net/",
  {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  }
);

const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

app.post("/upload", upload.single("audio"), async (req, res) => {
  console.log(req);
  try {
    const { Dname, Pname, Age, Date } = req.body;
    console.log(Dname);
    const Newdata = new Model({
      Dname: Dname,
      Pname: Pname,
      Age: Age,
      Date: Date,
      Data: req.file.buffer,
    });
    // console.log(Newdata);
    await Newdata.save()
      .then(() => res.json({ success: true }))
      .catch((err) =>
        res.status(400).json({ success: false, error: err.message })
      );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.get("/audio", async (req, res) => {
  try {
    // console.log(id)
    const audio = await Model.find();
    console.log(audio);
    if (!audio) {
      return res.status(404).send("Audio not found");
    }
    // Send the audio data as a response
    res.set("Content-Type", "audio/mpeg"); // Set appropriate content type
    console.log(audio[0].data);
    const base64Data = Buffer.from(audio[0].Data).toString("base64");
    res.send({
      audio: base64Data,
      Dname: audio[0].Dname,
      Pname: audio[0].Pname,
      Age: audio[0].Age,
      Date: audio[0].Date,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
