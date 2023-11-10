import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Navbar = () => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);

  const toggleMenu = (number) => {
    switch (number) {
      case 1:
        setIsMenuOpen1(!isMenuOpen1);
        if (isMenuOpen2) {
          setIsMenuOpen2(false);
        }

        if (isMenuOpen3) {
          setIsMenuOpen3(false);
        }

        if (isMenuOpen4) {
          setIsMenuOpen4(false);
        }
        break;

      case 2:
        setIsMenuOpen2(!isMenuOpen2);

        if (isMenuOpen1) {
          setIsMenuOpen1(false);
        }

        if (isMenuOpen3) {
          setIsMenuOpen3(false);
        }

        if (isMenuOpen4) {
          setIsMenuOpen4(false);
        }
        break;

      case 3:
        setIsMenuOpen3(!isMenuOpen3);
        if (isMenuOpen2) {
          setIsMenuOpen2(false);
        }

        if (isMenuOpen1) {
          setIsMenuOpen1(false);
        }

        if (isMenuOpen4) {
          setIsMenuOpen4(false);
        }
        break;

      case 4:
        setIsMenuOpen4(!isMenuOpen4);
        if (isMenuOpen2) {
          setIsMenuOpen2(false);
        }

        if (isMenuOpen3) {
          setIsMenuOpen3(false);
        }

        if (isMenuOpen1) {
          setIsMenuOpen1(false);
        }
        break;
    }
  };

  const click = () => {
    setIsMenuOpen(false);
  };

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  return (
    <nav>
      <Link to="/">Home</Link>
      <button
        onClick={() => {
          toggleMenu(1);
        }}
      >
        OUR IMPACT
      </button>

      <button
        onClick={() => {
          toggleMenu(2);
        }}
      >
        GET INVOLVED
      </button>

      <button
        onClick={() => {
          toggleMenu(3);
        }}
      >
        NEWS & ADVOCACY ALERTS
      </button>

      <button
        onClick={() => {
          toggleMenu(4);
        }}
      >
        ABOUT US
      </button>

      <Link>CONTACT US</Link>

      {isMenuOpen1 && (
        <div className="drop-down">
          <Link>Building Shared Community</Link>
          <Link>
            Supporting Shelters and Safe Havens in Local Communities Across the
            Country
          </Link>
          <Link>
            Advancing Standards of Care: Education, Training & Capacity Building
          </Link>
          <Link>Disaster Relief</Link>
          <Link>Public Policies Initiatives To End & Prevent Homelessness</Link>
          <Link>Resources & Funding Opportunities for Members</Link>
          <Link>Free/Discounted Good & Services for Members</Link>
          <Link>Comprehensive Resource Library</Link>
          <Link>The Women’s Equity Project</Link>
          <Link>Infographics & Reports</Link>
        </div>
      )}

      {isMenuOpen2 && (
        <div className="drop-down">
          <Link>Ways to Support</Link>
          <Link>Volunteer</Link>
          <Link>Become an Official Sponsor</Link>
          <Link>Become a Partner and Provider</Link>
          <Link>Give Free/Discounted Goods and Services</Link>
          <Link>Partner with us To Provide Grants</Link>
          <Link>Become a Member</Link>
          <Link>Donate Now</Link>
        </div>
      )}

      {isMenuOpen3 && (
        <div className="drop-down">
          <Link>Media</Link>
          <Link>Press Kit</Link>
        </div>
      )}

      {isMenuOpen4 && (
        <div className="drop-down">
          <Link>The NWSN</Link>
          <Link>Mission</Link>
          <Link>Vision</Link>
          <Link>History</Link>
          <Link>Leaders</Link>
          <Link>Our Members</Link>
          <Link>Our Official Sponsors</Link>
          <Link>Our Partners and Providers</Link>
          <Link>Our Financials</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
