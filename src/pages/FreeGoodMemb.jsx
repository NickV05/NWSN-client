import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
const FreeGoodMemb = () => {
  const { user } = useContext(AuthContext);
  return (
    <section className="section">
      <h2>Free and Discounted Services and Goods for Members</h2>
      <i>Discover the Power of the Network!</i>
      <p>
        The NWSN leverages its strength in numbers and the power of the network
        to negotiate with Partners and Providers to secure discounted goods and
        services for the benefit of its shelter and safe haven members to
        advance their mission. The NWSN can also direct free and donated goods
        and services to members throughout the network where needed most. Those
        savings go to the bottom line for our members and help advance their
        mission and impact to end and prevent homelessness all across the
        country.
      </p>
      {user?.member && (
        <Link to={`/portal/${user._id}`}>
          {" "}
          Visit Our Members Only Portal for Resources and Funding Opportunities
          and Network Forum for Funding Alerts
        </Link>
      )}
    </section>
  );
};

export default FreeGoodMemb;
