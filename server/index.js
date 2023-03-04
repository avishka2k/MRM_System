const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const DrugModel = require("./models/Drug");
const UserModel = require("./models/User");

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

app.post("/createuser", async (req, res) => {
  const user = req.body;
  const newUser = new UserModel(user);
  await newUser.save();

  res.json(user);
});

app.get("/getuser", async (req, res) => {
  try {
    const UserModels = await UserModel.find();
    res.send(UserModels);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});

app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
    res.json(deletedUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
});


// Update user verification status
app.put('/users/:id/verification', (req, res) => {
  const id = req.params.id;
  const verification = req.body.verification;

  UserModel.findByIdAndUpdate(id, { verification: verification }, { new: true })
    .then(user => {
      if (!user) {
        return res.status(404).send({
          message: `User with ID ${id} not found.`
        });
      }
      res.send(user);
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Error updating user verification status.'
      });
    });
});

app.listen(3003, () => {
  console.log("server running on port 3003...");
});
