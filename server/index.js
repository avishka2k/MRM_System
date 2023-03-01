const express = require("express");
const mongoose = require("mongoose");
const app = express();

const DrugModel = require("./models/Drug").default;

app.use(express.json());

const uri =
  "mongodb+srv://crudapp:TvqFMfXC2q3OndN8@cluster.s7nhbu5.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoose(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("medihelp").collection("drugs");
  client.close();
});

app.get("/", async (req, res) => {
  const drug = new DrugModel({ drug_name: "dd", manufacturer: "Sri lanka" });

  try {
    await drug.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server running on port 3001...");
});
