const express = require("express");
const app = express();
const Cors = require("cors");
const UserModel = require("./model.js");
const mongoose = require("mongoose");

app.use(express.json());
app.use(Cors());

app.get("/getData", async (req, res) => {
  try {
    const data = UserModel.find();
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.patch("/updateData/:id", async (req, res) => {
  const {
    new_name,
    new_number,
    new_gender,
    new_city,
    new_passWord,
    new_confirmPassWord,
    new_profilePic,
  } = req.body;
  const update = mongoose.find();
  update.foreach((item) => {
    //    if(req.params.id === item.id){
    //        update.name == new_name,
    //        update.number == new_number,
    //        update.gender == new_gender,
    //        update.city == new_city,
    //        update.passWord == new_passWord,
    //        update.confirmPassWord == new_confirmPassWord,
    //        update.profilePic == new_profilePic,
    //    }
  });
});

app.post("/userData", async (req, res) => {
  const { name, number, gender, city, passWord, confirmPassWord, profilePic } =
    req.body;
  try {
    const save = UserModel.create({
      name,
      number,
      gender,
      city,
      passWord,
      confirmPassWord,
      profilePic,
    });

    console.log(
      name,
      number,
      gender,
      city,
      passWord,
      confirmPassWord,
      profilePic
    );
    res.send(save);
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(
    "mongodb+srv://ss:sam@cluster0.0eoap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("connection with Db was successfull"))
  .catch((e) => console.log(e));

app.listen(5000, () => console.log("listning on port 5000"));
