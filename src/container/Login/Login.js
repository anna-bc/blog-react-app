import useLogin from "../../Hooks/useLogin";
import "./Login.scss";

export default function Login({state, dispatch}) {

  const [isAuthenticated, handleLogin, setUsername, setPassword] = useLogin(dispatch);

  return (
    <div className={"Login Login" + state.theme}>
      <div className="formTitle">Login to edit and delete Posts</div>
      <form id="loginForm" onSubmit={handleLogin}>
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
