import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";
const Navbar = () => {
  const [isMenuOpen1, setIsMenuOpen1] = useState(false);
  const [isMenuOpen2, setIsMenuOpen2] = useState(false);
  const [isMenuOpen3, setIsMenuOpen3] = useState(false);
  const [isMenuOpen4, setIsMenuOpen4] = useState(false);
  const { user, logOutUser } = useContext(AuthContext);

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
    setIsMenuOpen1(false);
    setIsMenuOpen2(false);
    setIsMenuOpen3(false);
    setIsMenuOpen4(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img className="logo" src="/NWSN_LOGO-01.png" alt="logo" />
      </div>
      {user && (
        <div className="right-side">
          <div className="menu1">
            {user?.member ?
            <button><Link to={`/portal/${user._id}`}>Members</Link></button>:
            <button disabled="true">Members</button>
            }
            {user?.admin &&
              <button><Link to="adminPortal">Admin Portal</Link></button>
            }
            <Link>Donate</Link>
            <button
              onClick={() => {
                logOutUser();
                click();
              }}
            >
              Fast Exit
            </button>
          </div>

          <div className="menu2">
            <Link to="/">Home</Link>

            <div>
              <button
                onClick={() => {
                  toggleMenu(1);
                }}
              >
                OUR IMPACT
              </button>
              {isMenuOpen1 && (
                <div className="drop-down">
                  <Link>Building Shared Community</Link>
                  <Link>
                    Supporting Shelters and Safe Havens in Local Communities
                    Across the Country
                  </Link>
                  <Link>
                    Advancing Standards of Care: Education, Training & Capacity
                    Building
                  </Link>
                  <Link>Disaster Relief</Link>
                  <Link>
                    Public Policies Initiatives To End & Prevent Homelessness
                  </Link>
                  <Link to="/funding">Resources & Funding Opportunities for Members</Link>
                  <Link>Free/Discounted Good & Services for Members</Link>
                  <Link to="/library">Comprehensive Resource Library</Link>
                  <Link to="https://womensequityproject.org">The Women’s Equity Project</Link>
                  <Link>Infographics & Reports</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => {
                  toggleMenu(2);
                }}
              >
                GET INVOLVED
              </button>
              {isMenuOpen2 && (
                <div className="drop-down">
                  <Link>Ways to Support</Link>
                  <Link to="/volunteerForm">Volunteer</Link>
                  <Link to="/sponsor">Become an Official Sponsor</Link>
                  <Link to="/partner">Become a Partner and Provider</Link>
                  <Link>Give Free/Discounted Goods and Services</Link>
                  <Link to="/partnership">Partner with us To Provide Grants</Link>
                  <Link to="/membership">Become a Member</Link>
                  <Link>Donate Now</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => {
                  toggleMenu(3);
                }}
              >
                NEWS & ADVOCACY ALERTS
              </button>
              {isMenuOpen3 && (
                <div className="drop-down">
                  <Link to="/news/:media">Media</Link>
                  <Link to="/news/:press">Press Kit</Link>
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => {
                  toggleMenu(4);
                }}
              >
                ABOUT US
              </button>
              {isMenuOpen4 && (
                <div className="drop-down">
                  <Link to ="/about/:NWSN">The NWSN</Link>
                  <Link to="/about/:mission">Mission</Link>
                  <Link to="/about/:vision">Vision</Link>
                  <Link to="/about/:history">History</Link>
                  <Link to="/about/:leaders">Leaders</Link>
                  <Link to="/members">Our Members</Link>
                  <Link to="/sponsor">Our Official Sponsors</Link>
                  <Link to="/partner">Our Partners and Providers</Link>
                  <Link to="/financials">Our Financials</Link>
                </div>
              )}
            </div>

            <Link>CONTACT US</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
