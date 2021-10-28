import React, { useEffect, useState } from "react";
import axios from "axios";

const styles = {
  mainDiv: {
    display: "flex",
    flexDirection: "column",
    width: "30%",
    margin: "5% auto",
    backgroundColor: "cornsilk",
    padding: "3%",
    borderRadius: "13px",
    justifyContent: "center",
    alignItems: "center",
  },
  gap: {
    fontSize: "1.2rem",
    marginBottom: "10px",
  },
  label_font: {
    fontSize: "1.2rem",
  },
  btn: {
    height: "36px",
    width: "80%",
    display: "block",
    margin: "15px auto",
    borderRadius: "12px",
  },
};

const Login = () => {
  // useEffect(() => {
  //   console.log("user data requestedd");
  //   axios
  //     .get("http://localhost:5000/getData")
  //     .then((data) => console.log(data))
  //     .catch((e) => console.log(e));
  // });
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [male, setMale] = useState("");
  const [female, setFemale] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [passWord, setPassWord] = useState("");
  const [confirmPassWord, setConfirmPassWord] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [gender, setGender] = useState("");
  //   const [countryValue , setCountryValue] = useState("")
  //   const [cityValue , setCityValue] = useState("")

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    gender: "",
    country: "",
    city: "",
    passWord: "",
    confirmPassWord: "",
    profilePic: "",
  });
  const handleSubmit = (e) => {
    if (female === "female") {
      setGender("female");
    } else {
      setGender("male");
    }
    console.log("submitted");
    console.log(passWord === confirmPassWord);
    if (passWord === confirmPassWord) {
      setFormData({
        name: name,
        number: number,
        gender: gender,
        city: city,
        passWord: passWord,
        confirmPassWord: confirmPassWord,
        profilePic: profilePic,
      });
      axios.post("http://localhost:5000/userData", formData);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleCountryChange = (e) => {
    console.log(e.target.value);
    setCountry(e.target.value);
  };
  const handlePassWordChange = (e) => {
    setPassWord(e.target.value);
  };
  const handleConfirmPassWordChange = (e) => {
    setConfirmPassWord(e.target.value);
  };
  const handleProfilePicChange = (e) => {
    setProfilePic(e.target.value);
  };
  const handleCityChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const handleMale = (e) => {
    console.log("submitted");
    setMale(e.target.value);
  };
  const handleFemale = (e) => {
    console.log("submitted");
    setFemale(e.target.value);
  };
  return (
    <div>
      <div style={styles.mainDiv}>
        <h1>User Login</h1>
        <div>
          <input
            style={styles.gap}
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter Name"
          />
          <input
            style={styles.gap}
            type="number"
            value={number}
            onChange={handleNumberChange}
            placeholder="Enter Mobile Number"
          />
          <div style={styles.label_font}>
            Gender:
            <br />
            male:
            <input
              type="radio"
              placeholder="male"
              style={styles.gap}
              value={male}
              onChange={handleMale}
            />
            fe-male:
            <input
              type="radio"
              placeholder="male"
              style={styles.gap}
              value={female}
              onChange={handleFemale}
            />
          </div>
          <div style={styles.label_font}>
            country:
            <select
              name="country"
              id="country"
              style={styles.gap}
              value={country}
              onChange={handleCountryChange}
            >
              <option value="india">india</option>
              <option value="U.S.A">U.S.A</option>
              <option value="Etc">Etc</option>
            </select>
            city:
            <select
              name="city"
              id="city"
              style={styles.gap}
              value={city}
              onChange={handleCityChange}
            >
              <option value="Gujarat">Gujarat</option>
              <option value="Punjab">Punjab</option>
              <option value="Etc">Etc</option>
            </select>
          </div>
          <input
            type="password"
            placeholder="password"
            style={styles.gap}
            value={passWord}
            onChange={handlePassWordChange}
          />
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassWord}
            onChange={handleConfirmPassWordChange}
            style={styles.gap}
          />
          <input
            type="file"
            alt="profile"
            value={profilePic}
            onChange={handleProfilePicChange}
            style={(styles.gap, styles.profile)}
          />
          <button
            style={styles.btn}
            onClick={() => handleSubmit()}
            type="submit"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
