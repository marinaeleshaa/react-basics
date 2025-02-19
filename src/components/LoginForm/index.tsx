import { ChangeEvent } from "react";
import "./index.scss";
import { IUserData } from "../../interfaces";


interface IProps {
  setIsLoggedIn: (val: boolean) => void;
  userData:IUserData,
  setUserData:(user:IUserData)=> void
}

const LoginForm = ({ setIsLoggedIn ,userData,setUserData}: IProps) => {


  const OnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="login-form">
      <div className="input-wrapper">
        <label htmlFor="userName">username: </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={userData.userName}
          onChange={(e) => OnChangeHandler(e)}
        />
      </div>
      <br />
      <div className="input-wrapper">
        <label htmlFor="Email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={userData.email}
          onChange={(e) => OnChangeHandler(e)}
        />
      </div>
      <br />
      <div className="input-wrapper">
        <label htmlFor="address">address: </label>
        <input
          type="text"
          name="address"
          id="address"
          value={userData.address}
          onChange={(e) => OnChangeHandler(e)}
        />
      </div>
      <br />
      <div className="input-wrapper">
        <label htmlFor="password">password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={(e) => OnChangeHandler(e)}
        />
      </div>
      <br />
      <button onClick={() => setIsLoggedIn(true)}>Login</button>
    </form>
  );
};

export default LoginForm;
