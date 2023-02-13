import { useState } from "react";

import "./Login.scss";

export default function Login(props) {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [authInfos, setAuthInfos] = useState(() => {
    const auths = JSON.parse(localStorage.getItem("authInfos"));
    if (!auths) {
      return [
        {
          username: "anna",
          password: "anna123",
        },
        {
          username: "kickinit",
          password: "123pwd",
        },
      ];
    }
    return auths;
  });

  function checkIfUsernameExists(username) {
    let obj = authInfos.find( (el, i) => el.username === username )
    return obj;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let authData = checkIfUsernameExists(username);

    if (authData && username === authData.username  && password === authData.password) {
      props.setIsLoggedIn(true);
    }
    else {
      return alert('Your username or password is not right!');
    }
  }

  return (
    <div className={
      "Login" +
      " Login" +
      (props.theme === "light" ? "--light" : "--dark")
    }>
      <div className="formTitle">Login to edit and delete Posts</div>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="login__item">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="username"
            id="username"
            required
            onInput={(e) => setUsername(e.target.value)}
          ></input>
        </div>
        <div className="login__item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            required
            onInput={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div className="login__item">
          <input type="submit" id="loginBtn"></input>
        </div>
      </form>
    </div>
  );
}
