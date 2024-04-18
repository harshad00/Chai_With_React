import { useState, useContext } from "react";
import UserContext from "../context/UseContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const hanndleSubmin = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User Name "
      /> <br />
 <br />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
       <br />
       <br />
      <button onClick={hanndleSubmin}>Submit </button>
    </div>
  );
}

export default Login;
