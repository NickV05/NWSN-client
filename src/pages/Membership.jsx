import { Link } from "react-router-dom";
import SliderMembers from "../components/SliderMembers";

const Membership = () => {
  return (
    <section className="section">
      <h3>BECOME A MEMBER</h3>
      <h4>Together We Are Stronger!</h4>

      <p>
        Join our growing community of women’s and family shelters and safe haven
        programs from across the country for shared learning and community in
        support of women and children experiencing homelessness. National,
        regional, state and local associations, networks and coalitions of
        shelters and safe haven programs are welcome. More than a nonprofit
        charity and membership association ~ we are a movement to advance the
        status of women and children experiencing homelessness in our nation and
        the shelters and safe havens who serve them in local communities all
        across the country to end and prevent homelessness. Join us in shared
        learning and community!
      </p>

      <h4>
        Our members include a wide range of women’s and family shelters and safe
        haven programs:
      </h4>

      <div className="table2">
        <div className="table1">
          <h3>Day/ Drop-In Shelters</h3>
          <h3>Overnight Shelters</h3>
          <h3>Safe Havens</h3>
          <h3>Maternity Programs & Group Homes</h3>
          <h3>Youth Shelters & Group Homes</h3>
        </div>

        <div className="table1">
          <h3>
            Local/State/Regional/National Networks, Coalitions and Associations
          </h3>
          <h3>Domestic Violence Shelters</h3>
          <h3>Flex Shelter, Long Term/ Solution- Focused</h3>
          <h3>Hybrid & Transitional Programs</h3>
          <h3>Others</h3>
        </div>
      </div>

      <img src="" alt="Image of map with stars" />

      <h5>See our Directory: Link to Directory</h5>
      <h5>
        Learn more about our local, state, regional and national associations,
        networks and coalitions and their important work: Link to a page that
        includes their logos and websites
      </h5>

      <div className="table1">
        <Link to="/memberForm">Regular Membership Application</Link>
        <Link to="/memberForm">
          Local/State/Regional/National Association, Network or Coalition
          Membership Application
        </Link>
      </div>

      <h3>Discover the Power of the Network!</h3>
      <h4>Save Money — Save Time — Shared Learning — Shared Community</h4>

      <div className="table2">
        <div className="table1 box">
          <h3>
            Comprehensive Resource Library & Sample Policies and Procedures Bank
          </h3>
          <h3>Information Sharing, Education & Training</h3>
          <h3>Shared Community & Shared Learning In The Network</h3>
          <h3>Resources & Funding Opportunities</h3>
          <h3>
            <Link to="http://thenwsnconference.org">National Conference & Discounted Registration</Link>
          </h3>
        </div>

        <div className="table1 box">
          <h3>
            Access Research: Homelessness; Root Causes; Gender-Based Violence &
            Trauma; Solutions
          </h3>
          <h3>
            Tools & Trainings to Build Organizational Infrastructure & Capacity
          </h3>
          <h3>
            The Network Forum: Connect & Learn With Other Members Who Understand
            Your Challenges
          </h3>
          <h3>
            Access Free/Discounted Supplies & Services From Our Partners In
            Shared Mission
          </h3>
          <h3>
            Discover the Power of Our Collective Voices & Advocacy for More
            Resources
          </h3>
        </div>

        <div className="table1 box">
          <h3>National Gaps and Needs Survey Report & The Women’s</h3>
          <h3>Advance Evidence Based & Informed</h3>
          <h3>Find Effective Strategies and Supportive Services </h3>
          <h3>Connect with Consultants Willing to Answer</h3>
          <h3>Advance Public & Social Policies to End and Prevent</h3>
        </div>

        <div className="table1 box">
          <Link to="https://womensequityproject.org">Equity Project</Link>
          <h3>Best Practices</h3>
          <h3>Needed for Successful Transitions</h3>
          <h3>Questions and Guide Your Planning</h3>
          <h3>Homelessness</h3>
        </div>

        <div className="table1 box">
          <h3>
            <Link>Infographics & Reports</Link>
          </h3>
          <h3>
            Learn From Ground Breaking Research on Needs of Sheltered Children
            and Therapeutic Interventions
          </h3>
          <h3>Discover the Latest Innovations Across the Country</h3>
          <h3>Discover our Preferred Providers List</h3>
          <h3>Regular News, Advocacy & Funding Alerts</h3>
        </div>
      </div>

      <h3>
        Advance Best Practices with Education and Training for Operations,
        Programing, Supportive Services and Capacity Building
      </h3>

      <h4>
        Here is a sample of the recent presentations at our 2023 National
        Conference:
      </h4>

      <div className="table2">
        <div className="table1 box">
          <h4>
            Fundamental Principles of Trauma Informed Care & Evidence Based Best
            Practices To End and Prevent Homelessness
          </h4>
          <h4>
            Person-Centered, Trauma-Informed In-Take, Engagement, Resource
            Coordination and Care Management, Therapeutic Supports and
            Programming to Support Successful Transitions
          </h4>
          <h4>
            Putting Children First - Deep Protective Factors to Heal, Support,
            Uplift and Break the Cycle: Environments, Operations, Therapeutic
            Interventions and Programming for Children
          </h4>
        </div>

        <div className="table1 box">
          <h4>
            Racial Equity, Diversity, Inclusivity and Belonging, Advancing
            Social Justice and Success in Shelters
          </h4>
          <h4>
            Advancing Long Term Success and Breaking the Cycle: Wrap Around
            Supports, Job Readiness Training, Financial Literacy, Benefits and
            Enriched Programming for Successful Exits and Long Term Stability
          </h4>
          <h4>
            Advancing Mission Via Effective Fundraising, Resource Development,
            Capacity Building and Community Engagement
          </h4>
        </div>

        <div className="table1 box">
          <h4>
            Developing and Implementing Strategic Business Plans; Long Term
            Financial Stability and Sustainability; Establishing Reserves &
            Private Public Funding Ratios
          </h4>
          <h4>
            Strategies for Investing In, Supporting and Retaining Your Team;
            Getting the Most From Your Board: Functioning, Composition,
            Recruitment & Management
          </h4>
          <h4>
            How to Make Dream Facilities Come True: Endowments, Capital
            Campaigns, Charitable Funding and NMTC Financing
          </h4>
        </div>
      </div>

      <h3>Hear from Our Members: </h3>

      <SliderMembers />

      <h2>JOIN US TODAY!</h2>

      <div className="table1">
        <Link to="/memberForm">Regular Membership Application</Link>
        <Link>
          Local/State/Regional/National Association, Network or Coalition
          Membership Application
        </Link>
      </div>
    </section>
  );
};

export default Membership;
