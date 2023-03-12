const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const DrugModel = require("./models/Drug");
const UserModel = require("./models/User");
const AdminModel = require("./models/Admin");
const Admin = require("./models/Admin");
const PharmacyModel = require("./models/Pharmacy");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://curdapp:xIjbrG14uB4YzkW0@cluster0.ica60qt.mongodb.net/medihelp?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
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

//pharmacies register
app.post("/pharmacies/register", async (req, res) => {
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await PharmacyModel.create({
      pname: req.body.pname,
      email: req.body.email,
      password: newPassword,
      address: req.body.address,
      number: req.body.number,
      license: req.body.license,
      verification: req.body.verification,
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
});
//pharmacies login
app.post("/pharmacies/login", async (req, res) => {
  const user = await PharmacyModel.findOne({
    email: req.body.email,
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        pname: user.pname,
        email: user.email,
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
});


app.get('/profile', (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, 'secret123');
  const userName = decodedToken.pname; // assuming pname is the user name in the token
  res.send(`Welcome ${userName} to your profile page!`);
});


app.listen(3003, () => {
  console.log("server running on port 3003...");
});
