import { Link } from "react-router-dom";

const MembersPortal = () => {
  return (
    <section className="section">
      <h3>WELCOME! </h3>
      <p>
        Welcome to the Members Only Portal of the National Women’s Shelter
        Network. We are here to help you save and change the lives of women and
        children in need in your local community and in communities all across
        our country. Together we are stronger! In the Members Only Portal, you
        will find several important resources to assist you, including:
      </p>
      <ul>
        <li>
          <i>The Network Forum:</i>The Network Forum is an open platform
          designed to give you and other Members of the NWSN opportunities for
          connection, shared learning, and building community. The NWSN will
          also use this platform to share information, education and trainings,
          best and promising practices, research and innovation, resources and
          funding opportunities, and policy and advocacy alerts.
        </li>
        <li>
          <i>Quick Links:</i> Below is a grid offering quick links to the NWSN’s
          Comprehensive Resource Library, Our Partners and Preferred Providers,
          Resources and Funding Opportunities, Free/Discounted Goods and
          Services, National Conferences, and Public Policy Alerts.
        </li>
        <li>
          <i>Latest News and Information:</i> The NWSN will post the latest
          news, newsletters, funding and resource opportunities, and policy and
          advocacy alerts on this page, in addition to the Network Forum.
        </li>
        <li>
          <i>Help Line:</i>We are here to help, answer questions, connect you to
          resources, partners and providers. Just ask via the Help Request Form
          below which links to our support team. We may not have all the answers
          and information you seek, but we will use our best efforts to help.
        </li>
      </ul>
      <p>
        Thank you for joining the NWSN. We are excited to be working with you!
        Only love, Constance Collins, President/Executive Director, NWSN
      </p>
      <h4>The Network Forum</h4>
      <h5>The Network Forum Rules: </h5>
      <p>
        Please communicate with everyone participating in the Forum with
        respect, compassion, courtesy and kindness. We agree to disagree at
        times. We acknowledge that there is room for differing points of view.
        The public policy agenda of the NWSN is set forth on our website in the
        Public Policies to End and Prevent Homelessness page. We agree to work
        together collegially in shared mission and service to that end. The NWSN
        tent is large, welcoming, diverse, inclusive, nonpartisan, and
        non-denominational. We agree to focus on our shared agenda, mission and
        service for the sake of the women, youth and children we serve. We
        understand lives are at stake.
      </p>
      <h5>
        Thank you for respecting our rules of communication on the Network
        Forum!
      </h5>
      <h5>We Are Here To Help!</h5>
      <p>
        <i>Here is How:</i> Click on the boxes below for Quick Links to the
        information, education and trainings, resource and funding
        opportunities, research and more to help you succeed, saving time and
        money, advance best practices, solve real world challenges, connect with
        other experts, network with our members, and build community in our
        collective efforts to end and prevent homelessness.
      </p>
      <h4>Quick Links</h4>
      <div className="table2">
        <div className="table1">
          <Link>
            Comprehensive Resource Library & Sample Policies and Procedures Bank
          </Link>
          <Link>Information Sharing, Education & Training</Link>
          <Link>Shared Community & Shared Learning In The Network</Link>
          <Link>Resources & Funding Opportunities</Link>
          <Link>National Conference & Discounted Registration</Link>
        </div>

        <div className="table1">
          <Link>
            Access Research: Homelessness; Root Causes; Gender-Based Violence &
            Trauma; Solutions
          </Link>
          <Link>
            Tools & Trainings to Build Organizational Infrastructure & Capacity
          </Link>
          <Link>
            The Network Forum: Connect & Learn With Other Members Who Understand
            Your Challenges
          </Link>
          <Link>
            Access Free/Discounted Supplies & Services From Our Partners In
            Shared Mission
          </Link>
          <Link>
            Discover the Power of Our Collective Voices & Advocacy for More
            Resources
          </Link>
        </div>

        <div className="table1">
          <Link>
            National Gaps and Needs Survey Report & The Women’s Equity Project
          </Link>
          <Link>Advance Evidence Based & Informed Best Practices</Link>
          <Link>
            Find Effective Strategies and Supportive Services Needed for
            Successful Transitions
          </Link>
          <Link>
            Connect with Consultants Willing to Answer Questions and Guide Your
            Planning
          </Link>
          <Link>
            Advance Public & Social Policies to End and Prevent Homelessness
          </Link>
        </div>

        <div className="table1">
          <Link>Infographics & Reports</Link>
          <Link>
            Learn From Ground Breaking Research on Needs of Sheltered Children
            and Therapeutic Interventions
          </Link>
          <Link>Discover the Latest Innovations Across the Country</Link>
          <Link>Discover our Preferred Providers List</Link>
          <Link>Regular News, Advocacy & Funding Alerts</Link>
        </div>
      </div>

      <h5>
        <Link>Still Have Questions or Otherwise Need Help? Contact Us</Link>
      </h5>
    </section>
  );
};

export default MembersPortal;
