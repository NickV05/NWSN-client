import { Link } from "react-router-dom"
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

const Footer = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
    {user && <footer class="table2">
        <div class="table1">
          <form class="table2">
            <h5>SIGN UP FOR OUR NEWSLETTER</h5>
            <input type="text" placeholder="Enter email" />
            <button type="submit">Sign Up</button>
          </form>

          <div class="table2">
            <h5>QUICK LINKS</h5>
            <ul class="table2">
              <Link>Our Impact</Link>
              <Link>News & Advocacy Alerts</Link>
              <Link>About Us</Link>
              <Link>Get Involved</Link>
              <Link>Contact Us</Link>
              <Link>Member Portal</Link>
              <Link>Donate</Link>
            </ul>
          </div>

          <div class="table2">
            <h5>FOLLOW US</h5>
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Twitter</a>
          </div>
        </div>

        <div class="table1">
          <Link>Official Charity Registration</Link>
          <Link>Charity Navigator</Link>
          <Link>Candid</Link>
        </div>

        <div class="table1">
          <a>Private Policy</a>
          <a>Copyright</a>
        </div>
      </footer>}
      </>
  )
}

export default Footer
