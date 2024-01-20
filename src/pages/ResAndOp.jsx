import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../context/auth.context";
const ResAndOp = () => {
const { user } = useContext(AuthContext);    
  return (
    <section className="section">
      <h2>Resources & Funding Opportunities To End and Prevent Homelessness</h2>
      <i>Everything goes to the bottom line for greater impact</i>
      <p>
        Women’s and family shelters and safe haven programs all across our
        nation are the last and final safety net for women, youth and children
        who are amongst the most vulnerable in our country, the majority of whom
        are victims of gender-based violence and crimes. Through research and
        advocacy, the NWSN helps its members identify and secure additional
        resources and funding opportunities, both public and private, and
        in-kind goods and services, to help them carry out their life saving
        work and be their very best.{" "}
      </p>

      {user?.member && <Link to={`/portal/${user._id}`}>Visit Our Members Portal and the <i>Network Forum</i> for Funding Alerts</Link>}
      <h4>
        Are You a Grant Funder or Donor? Let us work together to save and change
        lives
      </h4>
      <p>
        he NWSN has the expertise to manage grant funds and donations, directing
        them to shelters and safe haven programs that make a difference in the
        lives of women, youth and children in local communities all across the
        country. Whether your philanthropic goals are to support core
        operations, supportive services, programming, capacity building, capital
        improvements, innovation and research, public education and policy,
        advocacy work, or just to make a difference wherever most needed, the
        NWSN can oversee grant funding and donations to accomplish your aims.
        Our expert team possesses unique experience in managing grant funding
        and donations, from initial requests for proposals, selection,
        monitoring and oversight to fiscal accountability and final reports,
        helping assure funders and donors that their treasured financial
        resources and gifts are optimized, efficiently, cost effectively,
        impactfully and compassionately to end and prevent homelessness for the
        most vulnerable in our country. Contact the NWSN President for more
        information: constance@thenwsn.org Below are just some of the areas
        where grant funding and donations may be directed. Your grant funding
        and donations help us save and change lives! Thank You!
      </p>

      <div className="table2">
        <div className="table1 box">
          <h3>Providing Shelter, Safe Havens & Transitional Housing</h3>
          <h3>Clothing, Shoes & Basic Supplies</h3>
          <h3>Meals & Food Security</h3>
        </div>

        <div className="table1 box">
          <h3>Vision & Dental Care</h3>
          <h3>Health & Mental Health Care/ Victim’s Services</h3>
          <h3>Child and Family Therapies & Parenting Classes</h3>
        </div>

        <div className="table1 box">
          <h3>Job Readiness Training</h3>
          <h3>Educational Supports School Supplies</h3>
          <h3>Employment Assistance</h3>
        </div>

        <div className="table1 box">
          <h3>Substance Use Disorder Services</h3>
          <h3>Programming Arts & Activities</h3>
          <h3>Transportation</h3>
        </div>

        <div className="table1 box">
          <h3>Move-Out Assistance/ Deposits/Utilities/ Furnishings</h3>
          <h3>
            All Things Baby: Clothing/Diapers/Formula & Food//Baby Baths/Bottles
            & Bags/Strollers/Car Seats & Special Needs
          </h3>
          <h3>
            Early Childhood Education & Care/ After-School & Specialized
            Children’s Programs
          </h3>
        </div>

        <div className="table1 box">
          <h3>Specialized Maternity Programs</h3>
          <h3>Specialized Youth Programs</h3>
          <h3>Specialized Programs for Single Women</h3>
        </div>

        <div className="table1 box">
          <h3>
            Capital Repairs & Improvements, e.g., roofs, windows, facilities
            upgrades, etc.
          </h3>
          <h3>
            Expanding Shelter/ Safe Haven and Transitional Housing Capacity
          </h3>
          <h3>
            New and Improved Construction of Shelters, Safe Havens and
            Transitional Housing
          </h3>
        </div>
      </div>
      <p>
        Contact the NWSN President for more information on ways we can work
        together to make a difference in local communities across the nation:
        constance@thenwsn.org
      </p>
    </section>
  );
};

export default ResAndOp;
