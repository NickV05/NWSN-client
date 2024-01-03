import { Link } from "react-router-dom";

const Partner = () => {
  return (
    <section className="section">
      <h3>OUR PARTNERS AND PROVIDERS IN SHARED MISSION AND SERVICE</h3>
      <h4>Together We Change Our World</h4>
      <p>
        The National Women’s Shelter Network works closely with academic, civic,
        corporate, financial, government, philanthropic, financial and other
        partners who share our mission to advance the status of women and
        children experiencing homelessness in our country and bring an end to
        homelessness. They lend and leverage their treasure, time, expertise,
        services and resources to the NWSN and its membership for change. We
        want you as a Partner of the NWSN. Learn more and join us in the fight
        to end and prevent homelessness.
      </p>
      <button><Link to="/partnerForm">Become Our Partner and Provider</Link></button>

      <div className="table2">
        <div className="table1">
          <h5>ACADEMIC & SERVICE DRIVEN RESEARCH</h5>
          <Link>
            Center for Children and Families, Florida International University
          </Link>
          <Link>Human Rights Clinic, University of Miami</Link>
          <Link>Behavioral Services Research Institute</Link>
        </div>

        <div className="table1">
          <h5>CIVIC & PHILANTHROPIC</h5>
          <Link>Partner Logo and Link to Page</Link>
          <Link>Partner Logo and Link to Page</Link>
          <Link>Partner Logo and Link to Page</Link>
        </div>

        <div className="table1">
          <h5>CONSULTING SERVICES - Free & Discounted</h5>
          <Link>Partner Logo and Link to Page</Link>
          <Link>Partner Logo and Link to Page</Link>
          <Link>Partner Logo and Link to Page</Link>
        </div>

        <div className="table1">
          <h5>CORPORATE</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>

        <div className="table1">
          <h5>FINANCIAL</h5>
          <Link>US Bank, Sponsor logo & link to page</Link>
          <Link></Link>
          <Link></Link>
        </div>

        <div className="table1">
          <h5>GOVERNMENT</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>

        <div className="table1">
          <h5>GOODS & SUPPLIES - Discounted</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>

        <div className="table1">
          <h5>GOODS & SUPPLIES - Donated/Free</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>

        <div className="table1">
          <h5>INSURANCE</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>

        <div className="table1">
          <h5>LEGAL</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>

        <div className="table1">
          <h5>OTHER</h5>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
          <Link>Partner logo & link to page</Link>
        </div>
      </div>

      <button><Link to="/partnerForm">Become Our Partner and Provider</Link></button>

      <h4>
        The NWSN Thanks Its Generous Sponsors for Making All We Do Possible!
      </h4>
      <div className="table1">
        <Link>Candid</Link>
        <Link>Charity Navigator</Link>
        <Link>Charity Solicitation Registration</Link>
      </div>
    </section>
  );
};

export default Partner;
