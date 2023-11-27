import { Link } from "react-router-dom";

const OurMembers = () => {

  return (
    <section className="section">
      <h3>OUR MEMBERS</h3>
      <p>
        The NWSN is a growing community of women’s and family shelters, safe
        haven programs and regional, state and local associations, networks and
        coalitions that provide sanctuary to millions of women and children in
        need all across the nation. NWSN members are situated in local
        communities, large and small, too often with a varied patchwork of
        funding sources available to them to carry out the important work of
        providing safe, supportive shelter for women and children in need. They
        share our commitment to providing trauma-informed care and deep
        protective factors, supportive services and enriched resources to help
        women and children in need successfully transition. We need more
        resources to provide enriched, trauma-informed sanctuary and supportive
        services for women and children.
      </p>
      <h4>
        Our members include a wide range of shelters and safe haven programs:
      </h4>
      <div className="table2">
        <div className="table1 box">
          <h3>Day/ Drop-In Shelters</h3>
          <h3>Overnight Shelters</h3>
          <h3>Safe Havens</h3>
          <h3>Maternity Programs & Group Homes</h3>
          <h3>Youth Shelters & Group Homes</h3>
        </div>

        <div className="table1 box">
          <h3>
            Local/State/Regional/National Networks, Coalitions and Associations
          </h3>
          <h3>Domestic Violence Shelters</h3>
          <h3>Flex Shelter, Long Term/ Solution- Focused</h3>
          <h3>Hybrid & Transitional Programs</h3>
        </div>
      </div>
      <p>
        Learn More about our Local, State and Regional Associations, Networks
        and Coalitions and their important work. Link to a page that includes
        their logos and websites
      </p>

      <h4>Our members are located all across the country</h4>
      <img src="" alt="map" />
      <h4>
        <Link>See our the NWSN members directory:</Link>
      </h4>
      <h4>The range of services provided by our members:</h4>

      <div className="table2">
        <div className="table1 box">
          <h4>Clothing, Shoes & Basic Supplies</h4>
          <h4>Shelter, Safe Havens & Sanctuary</h4>
          <h4>Meals & Food Security</h4>
          <h4>Social Services & Resource Coordination</h4>
        </div>

        <div className="table1 box">
          <h4>Trauma-Informed Individual Counseling & Support Groups</h4>
          <h4>Health Care Services & Linkages</h4>
          <h4>Eye & Dental Care Services & Linkages</h4>
          <h4>Mental Health/ Substance Use Disorder Services</h4>
        </div>

        <div className="table1 box">
          <h4>Job Readiness Training</h4>
          <h4>Educational Supports School Supplies</h4>
          <h4>Employment Assistance</h4>
          <h4>Programming Arts & Activities</h4>
        </div>

        <div className="table1 box">
          <h4>Specialized Youth & Maternity Programs</h4>
          <h4>
            All Things Baby: Clothing/Diapers/Formula & Food//Baby Baths/Bottles
            & Bags/Strollers/Car Seats
          </h4>
          <h4>
            Early Childhood Education & Child Care/ After-School Programming &
            Summer Camps
          </h4>
          <h4>Child and Family Therapies & Parenting Classes</h4>
        </div>

        <div className="table1 box">
          <h4>Re-Housing Assistance & Rental Subsidies</h4>
          <h4>Move-Out Assistance/ Furnishings/ Utilities & Deposits</h4>
          <h4>Transitional Housing</h4>
          <h4>Post-Exit Stabilization Services and Resources</h4>
        </div>
      </div>

      <div className="table1">
      <Link>Get Involved</Link>
      <Link>Donate To Help</Link>
      <Link>Become A Member</Link>
      </div>
    </section>
  );
}

export default OurMembers
