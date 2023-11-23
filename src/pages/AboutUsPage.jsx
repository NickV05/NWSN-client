import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const AboutUsPage = () => {
  const { targetElementId } = useParams();
  const targetElementRef = useRef(null);

  useEffect(() => {
    if (targetElementId) {
      const targetElement = document.getElementById(targetElementId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [targetElementId]);
  return (
    <section className="section">
      <h2 id="NWSN" ref={targetElementRef}>ABOUT US</h2>

      <h2>THE NATIONAL WOMEN’S SHELTER NETWORK</h2>
      <h4>Shelters and Safe Havens United for Women and Children</h4>

      <div className="table2">
        <div>
          <h3 id="history" ref={targetElementRef}>
            OUR HISTORY
          </h3>
          <p>
            The National Women’s Shelter Network began as an initiative of the
            Lotus House Women’s Shelter and has blossomed since into a growing
            network of women’s shelters and safe haven programs from across the
            country. In the midst of the pandemic, the leaders of Lotus House
            longed to connect with other shelter leaders for shared learning and
            community. To do so, Lotus House had to first build a directory of
            shelters and it scoured the country to identify each and all of the
            homeless shelters exclusively serving women and/or mothers and
            children in communities large and small. Thousands of volunteer
            hours later, Lotus House built the database of contacts needed to
            bring this often overlooked and deeply resource-constrained
            community of shelter providers together for unified action. Then its
            leadership team took to the road visiting women’s shelters and safe
            haven programs all across the country, driving over 15,000 miles in
            its aim to meet with other shelter leaders and invite them to join a
            growing network of like minded providers serving women and children.
            By the fall of 2023, the NWSN had grown to over 180 shelters and
            safe haven programs. In September of 2023, Lotus House hosted the
            Inaugural Conference of the NWSN in Miami, Florida. Over 220 leaders
            from shelters across the country and other experts in the field of
            homelessness convened in shared learning and community. It was a
            resounding success and the movement began to establish the NWSN as a
            membership organization with a vision and mission to advance the
            status of women and children experiencing homelessness and the
            audacious policy objectives of ending and preventing homelessness in
            our country. By the end of 2023, the new NWSN was formed as a 501c3
            charitable membership organization.
          </p>
        </div>

        <video width="640" height="360" controls>
          <source src="your-video-file.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <div>
          <h3 id="mission" ref={targetElementRef}>OUR MISSION</h3>
          <p>
            Our mission is to advance the status of women and children
            experiencing homelessness in our country, and the women’s shelters
            and safe haven programs that serve them, for safer, brighter futures
            and bring an end to homelessness in our country. The National
            Women's Shelter Network does so by: (i) joining forces and
            establishing a national network of women's and family shelters and
            safe haven programs and national, regional, state and local
            networks, associations and coalitions and allies across the country;
            (ii) helping women and children experiencing or at risk of
            homelessness find women’s shelters and safe haven programs,
            supportive services and resources in the network; (iii) elevating
            the voices and raising awareness of the special needs of women and
            children experiencing homelessness and the shelters and safe haven
            programs that serve them; (iv) sharing information, best practices,
            innovation, research and effective solutions to advance the status
            of women and children experiencing homelessness and the shelters and
            safe haven programs that serve them; (v) offering education,
            trainings, resources, conferences and networking for shelters and
            safe haven programs to advance best practices, standards of care and
            organizational capacity; (vi) conducting research and identifying
            challenges, gaps and needs, and effective solutions and developing
            informed social and public policies; (vii) raising public awareness
            and public education; and (viii) advancing resources and solutions
            to end and prevent homelessness. We recognize that the solutions to
            ending homelessness are founded on equity for women and their
            children, and an engine of social and economic prosperity for all.
          </p>
        </div>

        <div>
          <h3 id="vision" ref={targetElementRef}>OUR VISION</h3>
          <p>
            A world of racial, social and gender equity, free of violence
            against women and children, where every woman and child will have a
            safe home and in times of transition, a trauma informed shelter and
            safe havens with deep protective factors, to assure they can heal,
            grow, thrive and blossom into who they are meant to be.{" "}
          </p>
        </div>

        <div>
          <h3>WHY WOMEN AND CHILDREN</h3>
          <p>
            The NWSN focuses its efforts on supporting women’s and family
            homeless shelters and safe haven programs because they stand at the
            intersection of gender-based violence and homelessness, doors wide
            open to the street, struggling to keep the lights on and put food on
            the table. Deluged by a seemingly endless stream of women, youth and
            children in need, women’s and family shelters and safe haven
            programs serve the most vulnerable in our country. Sadly, women’s
            and family homeless shelters and havens too often lack the resources
            traditionally flowing to domestic violence shelters under the
            Federal Violence Against Women’s Act or other Federal funds aimed at
            housing first and rapid rehousing programs. In the absence of
            meaningful Federal funding for a growing epidemic of homelessness,
            the shelters and safe haven programs serving the most vulnerable
            women and children in our country have been forced to piece together
            a patchwork quilt of disparate, threadbare funding for many decades.
            The NWSN aims to change this narrative, to bring together the voices
            of the “last, the lost, the least and forgotten” and those who serve
            them, to inform, uplift and demand the change so richly deserved by
            women and children in need in what is arguably the most powerful
            country in the world. Homelessness has become normative in the
            United States. But it was not always so. And it does not need to be
            our future. Breaking down barriers and providing enriched,
            trauma-informed, life-changing resources and services to women and
            children in need will not only save lives, but help end generational
            cycles of trauma, abuse, poverty, and homelessness. In the fruit of
            their potential realized, our local communities and our nation are
            enriched beyond measure. The solutions for ending homelessness are
            an engine of prosperity for everyone.
          </p>
        </div>
      </div>

      <h3 id="leaders" ref={targetElementRef}>Our Leaders</h3>
      <p>
        The leaders of the National Women’s Shelter Network are a group of all
        volunteer, dedicated and passionate leaders of women’s shelter and safe
        haven programs from across the country. Learn more about our sheros!
      </p>

      <div className="table2">
        <h4>NWSN OFFICERS AND BOARD MEMBERS - 2023-24</h4>
        <p>
          The all volunteer officers and board of directors of the National
          Women’s Shelter Network have the experience, expertise, dedication,
          passion and compassion needed to guide the NWSN in achieving its
          vision and mission to end homelessness in our country:{" "}
        </p>

        <div>
          <img src="" alt="photo" />
          <p>
            Constance Collins, constance@thenwsn.org, President and Director –
            National Women’s Shelter Network, and President, Sundari Foundation,
            Inc. dba Lotus House Women’s Shelter, Miami, Florida. Add Link to
            bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Shakoya Green-Long, shakoya@thomashouseshelter.org, Vice President
            and Director- National Women’s Shelter Network, and Chief Executive
            Officer – Thomas House Family Shelter, Garden Grove, California. Add
            Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Alexis Steel, asteel@stmaryscenterma.org, Treasurer and Director -
            National Women’s Shelter Network, and President – St. Mary’s Center
            for Women and Children, Dorchester, Massachusetts. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Patricia Bosman, pbosman@havenofgracestl.org, Secretary and Director
            - National Women’s Shelter Network, and Executive Director – The
            Haven of Grace, St. Louis, Missouri. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Kenyatta Brunson, KBrunson@nstreetvillage.org, Director - National
            Women’s Shelter Network, and President/Chief Executive Officer – N
            Street Village, Washington, D.C. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Isabella Dell’Oca, isabella@lotushouse.org, Director - National
            Women’s Shelter Network, and Executive Director - Lotus House
            Women’s Shelter, Miami, Florida. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Kimberly Livsey, kimberly.livsey@atlantamission.org, Director -
            National Women’s Shelter Network, and Chief Program Officer –
            Atlanta Mission, Atlanta, Georgia.Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Lisa Michaelson, lmichaelson@ugmtc.org, Director - National Women’s
            Shelter Network, and Vice President Women’s and Children’s Programs
            - Union Gospel Mission Twin Cities, Missouri. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Margaret Mitchell, mmitchell@ywca.org, Director - National Women’s
            Shelter Network, and Chief Executive Officer, YWCA USA, Inc.,
            Washington, D.C. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Katie O’Brien, kobrien@rosehaven.org, Director - National Women’s
            Shelter Network, and Executive Director – Rose Haven, Portland,
            Oregon. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Alyssa Sanchez, alyssa.sanchez@samaritanvillage.org, Director -
            National Women’s Shelter Network, and Asst. Vice President,
            Transitional Housing, Samaritan Daytop Village, Briarwood, New York.
            Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Amy Turk, amyt@downtownwomenscenter.org, Director - National Women’s
            Shelter Network, and Chief Executive Officer – Downtown Women’s
            Center, Los Angeles, California.Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Emily Sepulveda-Wheeland, emily@thedeloresproject.org, Director -
            National Women’s Shelter Network, and Chief Executive Officer – The
            Delores Project, Denver, Colorado. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Jennifer Hanlon Wigon, jennifer@womenslunchplace.org, Director -
            National Women’s Shelter Network, and Executive Director – Women’s
            Lunch Place, Boston, Massachusetts. Add Link to bio
          </p>
        </div>

        <div>
          <img src="" alt="photo" />
          <p>
            Kara Zordel, kara.zordel@communityforwardsf.org, Director - National
            Women’s Shelter Network, and Chief Executive Officer - Community
            Forward SF, San Francisco, California. Add Link to bio
          </p>
        </div>

        <p>
          We thank them all for their volunteer service to the National Women’s
          Shelter Network!
        </p>
      </div>
      <h3>NWSN ADVISORY BOARD MEMBERS - 2023-24</h3>
      <p>
        The National Women’s Shelter Network has established an Advisory Board
        to inform and assist the Board in carrying out their activities,
        business and affairs. The key purpose of the Advisory Board is to
        provide greater depth of lived experience and expertise in regard to
        homelessness, its root causes and effective solutions, as well as
        insight into the experiences of persons who have participated in the
        programs of our network members. The Advisory Board includes persons
        with lived experience of homelessness who are participants in or alumni
        of our Network members. The Advisory Board includes:
      </p>

      <div className="table2">
        <div className="table2">
          <p>Name</p>
          <p>Alumna</p>
          <p>Network Member (Add link to bio)</p>
          <img src="" alt="photo" />
        </div>

        <div className="table2">
          <p>Name</p>
          <p>Alumna</p>
          <p>Network Member (Add link to bio)</p>
          <img src="" alt="photo" />
        </div>

        <div className="table2">
          <p>Name</p>
          <p>Alumna</p>
          <p>Network Member (Add link to bio)</p>
          <img src="" alt="photo" />
        </div>

        <div className="table2">
          <p>Name</p>
          <p>Alumna</p>
          <p>Network Member (Add link to bio)</p>
          <img src="" alt="photo" />
        </div>

        <div className="table2">
          <p>Name</p>
          <p>Alumna</p>
          <p>Network Member (Add link to bio)</p>
          <img src="" alt="photo" />
        </div>

        <div className="table2">
          <p>Name</p>
          <p>Alumna</p>
          <p>Network Member (Add link to bio)</p>
          <img src="" alt="photo" />
        </div>
      </div>

      <p>
        In recognition of the unique value of their contribution, the NWSN
        provides the Advisory Board members with stipends. We thank them all for
        their service to the National Women’s Shelter Network!
      </p>

      <div>
        <h3>OUR NWSN TEAM</h3>
        <p>
          The Executive Team of the National Women’s Shelter Network provides a
          rare combination of business and legal acumen with decades of on the
          ground field experience in developing, operating and enriching
          trauma-informed women’s shelter and safe haven programs, supportive
          services, research and innovation. Backed by a stellar and equally
          experienced Board of Directors, the NWSN Team is excited to be
          launching the new NWSN for the benefit of its membership and the
          women, youth and children they serve all across the country.
        </p>

        <div className="table2">
          <div className="table2">
            <img src="" alt="photo" />
            <h5>
              Constance Collins, Executive Director, National Women’s Shelter
              Network, Inc., constance@thenwsn.org Add Link to bio
            </h5>
          </div>

          <div className="table2">
            <img src="" alt="photo" />
            <h5>
              Grettel Jiménez-Singer, Director, National Women’s Shelter
              Network, Inc., grettel@thenwsn.org Add Link to bio
            </h5>
          </div>

          <div className="table2">
            <img src="" alt="photo" />
            <h5>
              Gabriela Saenz, Research, Policy and Public Education Director,
              National Women’s Shelter Network, Inc., gaby@thenwsn.org Add Link
              to bio
            </h5>
          </div>
        </div>

        <div className="table2">
          <h3>OUR ADVISORY COUNCIL</h3>
          <p>
            The National Women’s Shelter Network has an established Advisory
            Council to inform and assist in carrying out its activities,
            business and affairs. The key purpose of the Advisory Council is to
            provide greater depth of expertise in relevant fields and to
            facilitate the establishment of effective contacts and support
            across the country and/or within particular states or regions and to
            advance public and private funding sources for the activities of the
            NWSN. The Advisory Council includes persons of prominence in law,
            business, real estate and development, banking and finance,
            government, education, public and private funding mechanisms,
            not-for-profit corporations, marketing and communications, the arts,
            general community leadership, and other fields of relevance.{" "}
          </p>

          <div className="table2">
            <div>
              <p>
                In the field of ____________, Name, Title, Organizational
                Affiliation, Add Link to bio
              </p>
              <img src="" alt="photo" />
            </div>

            <div>
              <p>
                In the field of ____________, Name, Title, Organizational
                Affiliation, Add Link to bio
              </p>
              <img src="" alt="photo" />
            </div>

            <div>
              <p>
                In the field of ____________, Name, Title, Organizational
                Affiliation, Add Link to bio
              </p>
              <img src="" alt="photo" />
            </div>

            <div>
              <p>
                In the field of ____________, Name, Title, Organizational
                Affiliation, Add Link to bio
              </p>
              <img src="" alt="photo" />
            </div>

            <div>
              <p>
                In the field of ____________, Name, Title, Organizational
                Affiliation, Add Link to bio
              </p>
              <img src="" alt="photo" />
            </div>

            <div>
              <p>
                In the field of ____________, Name, Title, Organizational
                Affiliation, Add Link to bio
              </p>
              <img src="" alt="photo" />
            </div>
          </div>
          <p>
            We thank them all for their volunteer service to the National
            Women’s Shelter Network!
          </p>
        </div>
      </div>

      <Link to="/membership">
          <button>Become A Member Today!</button>
        </Link>
    </section>
  );
};

export default AboutUsPage;
