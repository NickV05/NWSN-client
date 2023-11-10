import { useState, useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../services/authService";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };
    post("/auth/login", requestBody)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section>
      <div>
        <div>
          <form onSubmit={handleLoginSubmit}>
            <div>
              <input
                type="email"
                name="email"
                onChange={handleEmail}
                placeholder="Email address"
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                onChange={handlePassword}
                placeholder="Password"
              />
            </div>

            <button type="submit">Sign in</button>

            <div>
              <p>
                {errorMessage && <p>{errorMessage}</p>}
                Do not have an account yet?
                <Link to="/signup"> Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
