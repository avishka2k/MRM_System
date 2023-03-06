const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const DrugModel = require("./models/Drug");
const UserModel = require("./models/User");
const AdminModel = require("./models/Admin");
const Admin = require("./models/Admin");
const User = require("./models/Admin");
const router = express.Router();

app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://curdapp:xIjbrG14uB4YzkW0@cluster0.ica60qt.mongodb.net/medihelp?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

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

app.get("/getadmin", async (req, res) => {
  try {
    const AdminModel = await AdminModel.find();
    res.send(AdminModel);
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
app.put("/users/:id/verification", (req, res) => {
  const id = req.params.id;
  const verification = req.body.verification;

  UserModel.findByIdAndUpdate(id, { verification: verification }, { new: true })
    .then((user) => {
      if (!user) {
        return res.status(404).send({
          message: `User with ID ${id} not found.`,
        });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating user verification status.",
      });
    });
});

app.post('/admin/register', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

app.post('/admin/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(404).json('User not found');
      }

      if (user.password !== password) {
        return res.status(401).json('Incorrect password');
      }

      res.json('Login successful');
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


app.listen(3003, () => {
  console.log("server running on port 3003...");
});
