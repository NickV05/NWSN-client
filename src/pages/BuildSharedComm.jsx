import { Link } from "react-router-dom";
const BuildSharedComm = () => {
  return (
    <section className="section">
      <h2>Building Shared Community</h2>
      <h4>
        <i>Together We Grow Stronger!</i>
      </h4>
      <p>
        The NWSN was formed by a dedicated and passionate group of leaders from
        women’s shelters and safe haven programs across the country to create
        and build shared community with other women’s shelters and safe haven
        programs, recognizing we are stronger together! The NWSN kicked off its
        Inaugural Conference in September 2023 in Miami, where over 220 shelter
        leaders and other experts from around the country convened to learn from
        each other, network, share information, best practices, research and
        innovation, trade contacts, resources and connections, meet new and old
        friends, and build for the a passionate and compassionate community of
        those in shared mission and service who live and breathe this important
        work every day. We are all looking forward to our next gathering at the
        NWSN Spring 2025 National Conference in Washington, D.C. In the
        meantime, the NWSN working committees are convening a summer 2024
        working symposium to prepare for the conference. Check out the Members
        Only Forum for more information sharing, grant funding opportunities,
        policy, news and advocacy alerts.
        <i>Together we grow stronger! Join us!</i>
      </p>
      <img
        src=""
        alt="Group Photo from Conference and Several other Photos from the Conference"
      />
      <div>
        <button>
          <Link to="/membership">Become A Member Today!</Link>
        </button>
        <button>
          <Link to="">Donate To Make A Difference Today!</Link>
        </button>
      </div>
    </section>
  );
};

export default BuildSharedComm;
