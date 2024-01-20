import { Link } from "react-router-dom";
const DisasterRelief = () => {
  return (
    <section className="section">
      <h4>Disaster Relief</h4>
      <i>One woman, one youth, one child, one world. </i>
      <p>
        NWSN shelter and safe haven program members are positioned all across
        the country, serving as the last and final safety net for women, youth
        and children in need in their local communities. We are here to support
        their relief efforts. Whether they are responding to punishing cold
        weather alerts, tropical storms and hurricanes, unrelenting heat, fires
        or other natural disasters, the NWSN is poised and ready to distribute
        relief funds to our members in need across the nation. Help us help them
        provide relief to women, youth and children in their time of need. Thank
        you! Contact our President constance@thenwsn.org Thank you for saving
        and changing lives!
      </p>
      <img src="" alt="Add picture" />

      <button><Link>DONATE TO MAKE A DIFFERENCE</Link></button>
      <button><Link>GET INVOLVED</Link></button>
    </section>
  );
}

export default DisasterRelief
