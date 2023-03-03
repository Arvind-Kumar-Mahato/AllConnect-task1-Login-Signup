import React from "react";
import Header from "./Header";
import "./update.css";
import { useState, useEffect } from "react";
import Error from "./Error";
const Update = () => {
  const [name, setName] = useState("Arvind");
  const [location, setLocation] = useState("Dhanbad");
  const [stream, setStream] = useState("Engineering");
  const [school, setSchool] = useState("GGPS");
  const [Occupation, setOccupation] = useState("Engineer");
  const [religion, setReligion] = useState("Hindu");
  const [meeting, setMeeting] = useState("Just Conversation");
  const [image, setImage] = useState("./image.jpg");
  const [gender, setGender] = useState("male");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const [isCheckedOccupation, setIsCheckedOccupation] = useState(true);
  const [isCheckedReligion, setIsCheckedReligion] = useState(true);
  const [isCheckedSchool, setIsCheckedSchool] = useState(true);

  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const generateRandomName = () => {
    let namearray = ["Arvind", "Rahul", "Vijay", "Vikash"];
    setName(namearray[Math.floor(Math.random() * 4)]);
  };

  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const generateRandomLocation = () => {
    let locationArray = ["Dhanbad", "Delhi", "Kolkata", "Ranchi"];
    setLocation(locationArray[Math.floor(Math.random() * 4)]);
  };

  const handleOnChangeSchool = () => {
    setIsCheckedSchool(!isCheckedSchool);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };

  const generateRandomSchool = () => {
    let schoolArray = ["GGPS", "ISL", "DC School", "RSVM"];
    setSchool(schoolArray[Math.floor(Math.random() * 4)]);
  };

  const handleInputStream = (e) => {
    setStream(e.target.value);
  };

  const generateRandomSpecialization = () => {
    let SpecializationArray = ["Science", "Arts", "Commerce", "Biology"];
    setStream(SpecializationArray[Math.floor(Math.random() * 4)]);
  };

  const handleOnChangeOccupation = () => {
    setIsCheckedOccupation(!isCheckedOccupation);
  };

  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const generateRandomOccupation = () => {
    let occupationArray = [
      "Engineer",
      "Developer",
      "Businessman",
      "Politician",
    ];
    setOccupation(occupationArray[Math.floor(Math.random() * 4)]);
  };

  const handleOnChangeReligion = () => {
    setIsCheckedReligion(!isCheckedReligion);
  };

  const handleReligion = (e) => {
    setReligion(e.target.value);
  };

  const generateRandomReligion = () => {
    let ReligionArray = ["Hindu", "sikh", "jain", "Buddhist"];
    setReligion(ReligionArray[Math.floor(Math.random() * 4)]);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const photoUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  const [logindata, setLoginData] = useState([]);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);
    }
  };

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <div>
      <Header />
      {logindata.length === 0 ? (
        <div>
          <Error />

          <h1 style={{ textAlign: "center" }}>
            {" "}
            Please Login to Access This Page.
          </h1>
        </div>
      ) : (
        <div>
          <h1 className="heading"> Bio-Generator</h1>
          <div className="left">
            <div className="option">
              <h2 className="box">Options</h2>

              <div className="box">
                <label>Profile Photo:</label>
                <input type="file" onChange={photoUpload}></input>
              </div>

              <div className="box">
                <label>Name:</label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={handleInputName}
                ></input>
                <label>Gender:</label>
                <select onChange={(e) => handleGender(e)}>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <button onClick={generateRandomName}>Random Name</button>
              </div>

              <div className="box">
                <input
                  type="checkbox"
                  value="false"
                  checked={isCheckedLocation}
                  onChange={handleOnChangeLocation}
                ></input>
                <label>Location:</label>
                <input
                  type="text"
                  value={location}
                  onChange={handleInputLocation}
                ></input>
                <button onClick={generateRandomLocation}>
                  Random Location
                </button>
              </div>

              <div className="box">
                <input
                  type="checkbox"
                  value="false"
                  checked={isCheckedSchool}
                  onChange={handleOnChangeSchool}
                ></input>
                <label>School:</label>
                <input
                  type="text"
                  value={school}
                  onChange={handleInputSchool}
                ></input>
                <button onClick={generateRandomSchool}>Random School</button>
                <br />
                <label>Specialization:</label>
                <input
                  type="text"
                  value={stream}
                  onChange={handleInputStream}
                ></input>
                <button onClick={generateRandomSpecialization}>
                  Random Specialization
                </button>
              </div>
              <div className="box">
                <input
                  type="checkbox"
                  value="false"
                  checked={isCheckedOccupation}
                  onChange={handleOnChangeOccupation}
                ></input>
                <label>Occupation:</label>
                <input
                  type="text"
                  value={Occupation}
                  onChange={handleOccupation}
                ></input>
                <button onClick={generateRandomOccupation}>
                  Random Occupation
                </button>
              </div>

              <div className="box">
                <input
                  type="checkbox"
                  value="false"
                  checked={isCheckedReligion}
                  onChange={handleOnChangeReligion}
                ></input>
                <label>Religious Background:</label>
                <textarea
                  rows="5"
                  cols="20"
                  value={religion}
                  onChange={handleReligion}
                ></textarea>
                <button onClick={generateRandomReligion}>
                  Random Religion
                </button>
              </div>

              <div className="box">
                <input
                  type="checkbox"
                  value="false"
                  checked={isChecked}
                  onChange={handleOnChange}
                ></input>
                <label>Meeting Reason</label>
                <textarea rows="5" cols="20" value={meeting}></textarea>
                <button onClick={() => setMeeting("for peace of mind")}>
                  For Peace
                </button>
                <button onClick={() => setMeeting("for personal reason")}>
                  For Personal Reason
                </button>
                <button
                  onClick={() => setMeeting("for payer to fill energetic ")}
                >
                  For Prayer
                </button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="result">
              <h2 className="box">Result</h2>
              <div className="imgdiv">
                {image ? <img src={image} alt="profile photo" /> : null}
              </div>
              <div className="box">
                {" "}
                {name} {isCheckedLocation ? `is from the ${location}` : null}{" "}
                {isCheckedSchool
                  ? `${
                      gender == "male" ? "He" : "She"
                    } is studying ${stream} at ${school}`
                  : null}
                .
                {isCheckedOccupation
                  ? `${
                      gender == "male" ? " His" : " Her"
                    } occupation is ${Occupation}`
                  : null}
                {isCheckedReligion
                  ? `${
                      gender == "male" ? " His" : " Her"
                    } religion is ${religion}`
                  : null}{" "}
                {gender == "male" ? "He" : "She"}{" "}
                {isChecked ? `meet you for ${meeting}` : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Update;
