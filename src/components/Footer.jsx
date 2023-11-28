import { Link } from "react-router-dom"
import { useState,useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { post } from "../services/authService";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const [email, setEmail] =useState("");
  const subscribe =(e) => {
    e.preventDefault();
    post("/home/subscribe", email)
    .then((response) => {
      console.log("RESPONSE ===>", response.data)
      if(!response.data.message){
        setEmail();
      }
      else{
        alert(response.data.message);
      }
    })
  }

  const handleEmailChange = (e) => {
    setEmail({ email: e.target.value });
    console.log("Email ==>", email)
  };
  return (
    <>
    {user && <footer className="table2">
        <div className="table1">
          <form onSubmit={subscribe} className="table2">
            <h5>SIGN UP FOR OUR NEWSLETTER</h5>
            <input onChange={handleEmailChange} value={email? email.email : ""} type="text" placeholder="Enter email" />
            <button type="submit">Sign Up</button>
          </form>

          <div className="table2">
            <h5>QUICK LINKS</h5>
            <ul className="table2">
              <Link>Our Impact</Link>
              <Link>News & Advocacy Alerts</Link>
              <Link to="/about/:NWSN">About Us</Link>
              <Link>Get Involved</Link>
              <Link>Contact Us</Link>
              {user && user.member ?
            <button><Link to={`/portal/${user._id}`}>Member Portal</Link></button>:
            <button disabled="true">Member Portal</button>
            }
              <Link>Donate</Link>
            </ul>
          </div>

          <div className="table2">
            <h5>FOLLOW US</h5>
            <a href="https://www.instagram.com/thenwsn" target="blank">Instagram</a>
            <a href="https://www.facebook.com/nationalwomensshelternetwork" target="blank">Facebook</a>
            <a href="https://twitter.com/thenwsn" target="blank">Twitter</a>
            <a href="https://www.youtube.com/@thenwsn_org" target="blank">Youtube</a>
          </div>
        </div>

        <div className="table1">
          <Link>Official Charity Registration</Link>
          <Link>Charity Navigator</Link>
          <Link>Candid</Link>
        </div>

        <div className="table1">
          <a>Private Policy</a>
          <a>Copyright</a>
        </div>
      </footer>}
      </>
  )
}

export default Footer
