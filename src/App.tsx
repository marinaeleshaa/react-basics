import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";
import UserDetails from "./components/UserDetails";

function App() {
  const siteName = "Marina";
  const aboutTxt = "about us";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
      userName: "",
      email: "",
      address: "",
      password: "",
    });

  return (
    <>
      <Navbar
        companyName={siteName}
        aboutTxt={aboutTxt}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {isLoggedIn ? (
        <UserDetails user={userData}/>
      ) : (
        <LoginForm setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} userData={userData} />
      )}
    </>
  );
}

export default App;
