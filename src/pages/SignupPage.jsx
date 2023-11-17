import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

const SignupPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    location: "",
    username: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);
  const { storeToken, authenticateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleTextChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSignupSubmit = (e) => {
    e.preventDefault();

    post("/auth/signup", user)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/home/:start");
      })
      .catch((error) => {
        console.log("Error", error);
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <section className="section">
      <div>
        <div>
          <div>
            <form onSubmit={handleSignupSubmit}>
              <div>
                <input
                  type="email"
                  name="email"
                  onChange={handleTextChange}
                  placeholder="Email address"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  id="exampleFormControlInput33"
                  placeholder="Password"
                  onChange={handleTextChange}
                />
              </div>

              <div>
                <input
                  type="text"
                  name="fullName"
                  id="exampleFormControlInput33"
                  placeholder="Full Name"
                  onChange={handleTextChange}
                />
              </div>

              <button type="submit">Sign up</button>

              <div>
                <p>
                  {errorMessage && <p>{errorMessage}</p>}
                  Have an account?
                  <Link to="/login"> Sign in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
