import { useEffect, useState } from "react";
import Actions from "../state/Actions/Actions.js";
import { users as storedUsers } from "../state/models/users.js";

export default function useLogin(dispatch) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authInfos, setAuthInfos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    let authData = checkIfUsernameExists(username);

    if (
      authData &&
      username === authData.username &&
      password === authData.password
    ) {
      setIsAuthenticated(true);
      dispatch({ type: Actions.loginUser });
    } else {
      return alert("Your username or password is not right!");
    }

    setUsername('');
    setPassword('');
  };

  useEffect(() => {
    console.log("get auths");
    let auths = JSON.parse(localStorage.getItem("authInfos"));
    if (!auths) {
      auths = storedUsers;
      localStorage.setItem(JSON.stringify(auths), "authInfos");
    }
    setAuthInfos(auths);
  }, []);

  function checkIfUsernameExists(username) {
    let obj = authInfos.find((el, i) => el.username === username);
    return obj;
  }

  return [isAuthenticated, handleLogin, setUsername, setPassword];
}
