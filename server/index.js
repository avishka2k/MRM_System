const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const DrugModel = require("./models/Drug");

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://curdapp:xIjbrG14uB4YzkW0@cluster0.ica60qt.mongodb.net/medihelp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/getdrug", async (req, res) => {
  try {
    const DrugModels = await DrugModel.find();
    res.send(DrugModels);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedDrug = await DrugModel.findByIdAndDelete(req.params.id);
    res.json(deletedDrug);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


app.post("/insert", async (req, res) => {
  const drug = req.body;
  const newDrug = new DrugModel(drug);
  await newDrug.save();

  res.json(drug);
});


app.listen(3003, () => {
  console.log("server running on port "+ process.env.REACT_APP_PORT);
});
