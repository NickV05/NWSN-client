import { Link } from "react-router-dom";
import Slider1 from "../components/Slider1";
import Slider2 from "../components/Slider2";
import CountUp from "react-countup";
import { useState } from "react";

const HomePage = () => {
  const [vision, setVision] = useState(false);

  return (
    <div className="section">
      <h2 >THE NATIONAL WOMEN’S SHELTER NETWORK</h2>
      <img src="/cherryblossom.jpg" alt="IMAGE OF THE CAPITAL AND CHERRY BLOSSOMS" />
      <h3 id="start">WHO WE ARE</h3>
      <h4>Shelters and Safe Havens United For Women and Children</h4>
      <p>
        The National Women’s Shelter Network is a growing network of women’s and
        family shelters and safe havens and national, regional, state and local
        networks, associations and coalitions and allies across the country
        serving women and children who are amongst the most vulnerable in our
        country. Our shared mission is to advance the status of women and
        children experiencing homelessness and bring an end to homelessness. We
        help our members save and change lives. Many of the women and children
        we serve have suffered gender-based violence and other serious trauma
        histories. Most have unmet medical and mental health needs. All are
        struggling to survive, heal, learn, grow and thrive, keep their families
        intact and alive, and too often fleeing domestic or intimate partner
        violence. No woman or child should ever be forced to live on the streets
        or remain in abusive circumstances because they lack safe, supportive
        shelter. Women’s homeless shelters and safe havens are the last resort
        and final safety net for millions of women and children in transition
        every year with little to no means. With enriched supportive services
        and resources, the NWSN and its members transform the trauma of
        homelessness into windows of opportunity for women and children to build
        safer, brighter futures. Join us in our movement to end and prevent
        homelessness. You can make a difference!
      </p>

      

      <div>
        {!vision ? (
          <div>
            <button disabled={true}>Mission</button>
            <button
              onClick={() => {
                setVision(!vision);
              }}
            >
              Vision
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => {
                setVision(!vision);
              }}
            >
             Mission
            </button>
            <button disabled={true}>Vision</button>
          </div>
        )}

        {vision ? (
          <p>
            A world of racial, social and gender equity, free of violence
            against women and children, where every woman and child will have a
            safe home and in times of transition, trauma informed shelter and
            safe havens with deep protective factors, to assure they can heal,
            grow, thrive and blossom into who they are meant to be.
          </p>
        ) : (
          <p>
            Our mission is to help women and children experiencing or at risk of
            homelessness, and the women’s shelters and safe haven programs that
            serve them, build safer, brighter futures and bring an end to and
            prevent homelessness in our country. We save and change lives,
            transforming the trauma of homelessness into windows of opportunity.
            The NWSN does so by: helping women and children experiencing or at
            risk of homelessness find shelter, supportive services and resources
            via our network; elevating the voices of women with lived experience
            and the shelters and safe havens that serve them across the nation;
            sharing information, innovation, best practices and research;
            providing education, trainings, and capacity building; identifying
            gaps and needs and developing informed public and social policies;
            raising public awareness of the special needs of women and children
            experiencing homelessness and the shelters and safe haven programs
            that serve them; advocating for more resources; and advancing
            meaningful solutions to end and prevent homelessness. We recognize
            the solutions to ending and preventing homelessness are founded on
            equity for women and their children and an engine of social and
            economic prosperity for all.
          </p>
        )}
      </div>

      <div className="table1">
        <div className="table2">
          <h5>Need Help?</h5>
          <Link to="http://nationalwomensshelterdirectory.org">Find an NWSN Member near you in our Directory</Link>
        </div>

        <div className="table2">
          <h5>Get Involved</h5>
          <Link>Learn more about how you can help</Link>
        </div>

        <div className="table2">
          <Link to="/membership">
            <h5>Become a Member</h5>
          </Link>
        </div>

        <div className="table2">
          <h5>Donate Now</h5>
          <Link>Help the Network advance the status of women and children</Link>
        </div>
      </div>

      <h3>HOW WE HELP</h3>
      <h4>Saving and Changing Lives of the Most Vulnerable</h4>
      <p>
        The National Women’s Shelter Network is focused on saving and changing
        the lives of the women and children experiencing homelessness in our
        country and the women’s and family shelters and safe haven programs that
        serve them. NWSN programs provide a wide range of support to our members
        and in turn the women and children they serve through resources,
        information sharing, education, training, advancing standards of care,
        and advocacy.
      </p>

      <div className="table2">
        <div className="table1">
          <Link>
            Supporting Shelters and Safe Havens in Local Communities Across the
            Country
          </Link>

          <Link>
            Advancing Standards of Care: Education, Training & Capacity Building
          </Link>

          <Link to="https://drive.google.com/drive/folders/1G_PQIziz-ipYd46fO4Zs9Jn6QJO386RS?usp=sharing">
          Funding and Resources to End and Prevent Homelessness</Link>

          <Link to="https://drive.google.com/drive/folders/1qsOFjepeGNM1OfFMAzivQaABcHa0S14P?usp=drive_link">
          Free/Discounted Goods & Services </Link>

          <Link>Building Shared Community</Link>
        </div>

        <div className="table1">
          <Link>Disaster Relief</Link>

          <Link>Public Policy, Infographics & Reports</Link>

          <Link to="https://womensequityproject.org/">The Women’s Equity Project</Link>

          <Link to="https://drive.google.com/drive/folders/17aXgcsCNX5EAzqouWF0254EA-qSpq8wB?usp=drive_link">
          Comprehensive Resource Library</Link>

          <Link>Latest News and Advocacy Alerts</Link>
        </div>
      </div>

      <h3>THE IMPACT OF OUR NETWORK IN VULNERABLE LIVES TOUCHED</h3>

      <div className="table2">
        <div className="table1">
          <div>
            <h2>
              <CountUp
                enableScrollSpy
                delay={0.6}
                end={578201}
                duration={2.2}
              />{" "}
              +
            </h2>
            <h2>BED NIGHTS ANNUALLY</h2>
          </div>

          <div>
            <h2>
              <CountUp
                enableScrollSpy
                delay={0.6}
                end={1683154}
                duration={2.2}
              />{" "}
              +
            </h2>
            <h2>NOURISHING MEALS SERVED ANNUALLY</h2>
          </div>

          <div>
            <h2>
              <CountUp enableScrollSpy delay={0.6} end={18097} duration={2.2} />{" "}
              +
            </h2>
            <h2 >WOMEN SHELTERED OR HOUSED ANNUALLY</h2>
          </div>

          <div className="table1">

          </div>

          <div>
            <h2>
              <CountUp enableScrollSpy delay={0.6} end={51798} duration={2.2} />{" "}
              +
            </h2>
            <h2> COUNSELING SESSIONS ANNUALLY</h2>
          </div>

          <div>
            <h2>
              <CountUp enableScrollSpy delay={0.6} end={3117} duration={2.2} /> +
            </h2>
            <h2>CHILDREN SHELTERED OR HOUSED ANNUALLY</h2>
          </div>

          <div>
            <h2>
              <CountUp enableScrollSpy delay={0.6} end={1802} duration={2.2} />{" "}
              +
            </h2>
            <h2> BED NIGHTS</h2>
          </div>

        </div>
      </div>

      <h3>OUR MEMBERS</h3>
      <div className="table2">
        <img src="" alt="map" />
        <Link to="http://nationalwomensshelterdirectory.org">Looking for an NWSN Member Near You?</Link>
        <Link to="/membership">Join the NWSN And Discover the Benefits of Membership Today</Link>
      </div>

      <h3>THE OFFICIAL SPONSORS OF THE NWSN MAKE ALL WE DO POSSIBLE!</h3>
      <h4>Powering the NWSN, Powering Change for Safer, Brighter Futures</h4>
      <Link to="/sponsor"><button>Become An Official Sponsor</button></Link>
      <Slider1 />
      <Link to="/sponsor"><button>Learn More About Our Sponsors</button></Link>
      <h4>
        The NWSN Thanks Its Generous Sponsors for Making All We Do Possible!
      </h4>

      <h3>HEARTFELT THANKS TO OUR NWSN PARTNERS AND PROVIDERS</h3>
      <h4>Together We Change Our World!</h4>
      <p>
        Our Partners work closely with the NWSN to advance our mission, sharing
        their treasure, time, expertise, services and resources with the NWSN
        and its members.
      </p>
      <Link to="/partnership">
        <button>Become Our Partner and Provider</button>
      </Link>
      <Slider2 />
      <Link to="/partnership">
      <button>Learn More About Our Partners and Providers</button>
      </Link>
      <h4>The NWSN Thanks Its Partners and Providers In Shared Mission!</h4>

      <h3>LATEST NEWS AND ADVOCACY ALERTS</h3>
      <p>
        Our nation is facing a public health crisis in growing numbers of people
        experiencing homelessness in our country. In the wake of the pandemic
        and decades of failed social and public policies, homelessness is
        reaching epic levels across our nation, impacting most severely women
        and children. The National Women’s Shelter Network is taking action. At
        its Inaugural National Conference in Miami, Florida, in September 2023,
        the NWSN convened over 220 shelter leaders and other experts from across
        the country to discuss the intersections of gender-based violence and
        homelessness, trauma-informed best practices and solutions to ending
        homelessness, and the need for more resources for women and children and
        the shelters that serve them, calling on leaders at all levels of
        government, business, finance, <Link to="https://thenwsnconference.org">philanthropy and communities across the
        nation to address the growing crisis</Link>p. The
        NWSN hosted a national press conference on September 6th, 2023,
        accompanied by NWSN’s official spokeswoman Gloria Estefan (<Link to="https://docs.google.com/document/d/1lTlHq6t3eeGIeQNi6xq3rNEIiDJqHsxj/edit">link to
        Medial Advisory</Link> <Link to="https://www.instagram.com/thenwsn">and videos of the press conference</Link>) to demand action and
        met on October 16, 2023, with Federal Officials from DOJ, HUD, HHS,
        FEMA, DOE, DOL and more (link to photos and position paper we
        delivered), to raise awareness of what is happening every day on the
        ground in shelters across America. The dialogue between Federal
        Officials and the NWSN continues. Stay tuned for more!
      </p>

      <div className="table1">
        <Link to="/membership">
          <button>Become A Member Today!</button>
        </Link>
        <Link>Donate To Make A Difference Today!</Link>
      </div>
    </div>
  );
};

export default HomePage;
