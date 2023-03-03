import React, { useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./ContextProvider/Context";

import Header from "./Header";
const Dashboard = () => {
  const { logindata, setLoginData } = useContext(LoginContext);
   
  const history = useNavigate();

  const DashBoardValid = async () => {
    let token = localStorage.getItem("usersdatatoken");
    // console.log(token);

    const res = await fetch("/validuser", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    const data = await res.json();
    // console.log(data);
    if (data.status === 401 || !data) {
      history("*");
    } else {
      console.log("user verify");
      setLoginData(data);
      history("/dashboard");
    }
  };

  useEffect(() => {
    DashBoardValid();
  }, []);
  return (
    <>
    <Header/>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="./profile.png"
          style={{ width: "200px", marginTop: "20px" }}
          alt=""
        />
        <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
        <h1>User Name :{logindata ? logindata.ValidUserOne.fname : ""}</h1>
      </div>
    </>
  );
};

export default Dashboard;
