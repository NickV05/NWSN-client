import { Link } from "react-router-dom";
const SupportShelters = () => {
  return (
    <section className="section">
      <h2>
        Supporting Shelters and Safe Haven Programs in Local Communities Across
        the Country
      </h2>
      <p>
        The National Women’s Shelter Network is the only national association
        which is by women’s and family shelters and safe haven programs for
        women’s and family shelters and safe havens all across America, facing
        the desperate pleas for help from women and children in need on the
        ground every day and doing the hard work it takes to save and change
        lives. The NWSN is laser focused in supporting its member shelters and
        safe haven programs in local communities everywhere because we know they
        are the last and final safety net for the most vulnerable women and
        children in our nation, the majority of whom are victims of gender-based
        violence and other traumas. We aim to advance the capacity of shelters
        and safe havens to address the gender specific needs of women and
        children in transition by providing multi-faceted, comprehensive
        resources based on real world experience. We help shelters and safe
        havens be their best through information sharing, education, training,
        research, resources and networking to support their programming,
        supportive services, operations, fundraising and organizational
        capacity, creating connections, advocating for more funding and
        resources, building shared community, and advancing public and social
        policies to end and prevent homelessness. Here are just some of the ways
        we make a difference:
      </p>
      <div className="table2">
        <div className="table1">
          <h4>Comprehensive Resource Library</h4>
          <h4>Research, Innovation & Information Sharing</h4>
          <h4>Education, Trainings, and Linkages to Vital Resources</h4>
          <h4>National Conference</h4>
        </div>

        <div className="table1">
          <h4>Public Policy To End & Prevent Homelessness</h4>
          <h4>Grant & Funding Opportunities</h4>
          <h4>Free & Discounted Goods and Services</h4>
          <h4>Networking & Shared Community</h4>
        </div>

        <div className="table1">
          <h4>Latest News & Advocacy Alerts</h4>
          <h4>Gaps & Needs Survey & Reports</h4>
          <h4>Partners In Shared Mission</h4>
          <h4>The Network “Forum” Connecting Shelter Leaders</h4>
        </div>
      </div>

      <div className="table1">
        <button>
          <Link to="/membership">Become A Member Today!</Link>
        </button>
        <button>
          <Link to="">Get Involved</Link>
        </button>
        <button>
          <Link to="">Donate To Make A Difference Today!</Link>
        </button>
      </div>
    </section>
  );
};

export default SupportShelters;
