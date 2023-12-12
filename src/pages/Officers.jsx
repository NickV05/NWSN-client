import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";

const Officers = () => {
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
      <h3>NWSN OFFICERS AND BOARD MEMBERS</h3>
      <h4 id="constance" ref={targetElementRef}>CONSTANCE COLLINS</h4>
      <p>
        <i>President and Executive Director</i>, National Women’s Shelter
        Network{" "}
      </p>
      <p>
        <i>President</i>, Sundari Foundation, Inc. dba Lotus House Women’s
        Shelter, Miami, Florida Contact: constance@thenwsn.org
      </p>
      <p>
        Moved by the sight of a homeless woman bathing in the fountain of what
        would be her last commercial development, Constance Collins concluded a
        20-year, highly successful, for profit, commercial real estate, finance
        and business career in 2004 to found the Lotus House Women’s Shelter in
        Miami, Florida. Ms. Collins shepherded Lotus House from its humble
        beginnings serving 34 women nightly to today’s model, state-of-the-art,
        comprehensive homeless services facilities, known as Lotus Village.
        Designed to be universally accessible, child friendly and serve high
        special needs women, youth and children, Lotus Village includes an
        in-take sanctuary, model children’s wellness center, early childhood
        education and care center, evidence based child and family therapies,
        access to health and mental health care, an employment and education
        center, professional culinary center, healing hands salon, arts and
        activities lab, hydroponic farm, neighborhood health clinic, and
        currently under construction, a brand new, model neighborhood children’s
        resource center at Lotus Village to provide deeper educational and
        therapeutic supports, diverse programming and greater access to health,
        legal and social services and community resources for the children,
        youth and families sheltered by Lotus House and its surrounding
        community. Lotus House is now the largest women’s homeless shelter in
        the nation, sheltering over 525 women, youth and children nightly,
        offering trauma-informed, wrap-around supportive services and enriched
        resources to help them heal, reclaim their lives and build the
        foundation for safer, brighter futures. Since inception, Lotus House has
        sheltered over 11,000 women and children and counting, with more than
        85% exiting successfully from the shelter system. Ms. Collins attributes
        Lotus House success to use of trauma-informed, evidence-based, best
        practices, the hard work, love, compassion and passion of the expert
        Lotus House team, and the power of community coming together to save and
        change lives. Those same principles for success explain the power of the
        National Women’s Shelter Network, an initiative Ms. Collins spearheaded
        at Lotus House in the midst of the pandemic, to connect and join forces
        with women’s shelters and safe haven programs from across the country.
        With domestic violence on the rise and women’s shelters standing at the
        intersection of gender based violence and homelessness, the imperative
        was clear. Women’s shelters and safe haven programs across the country
        needed to come together in shared learning and community to advance best
        practices, elevate the voices of those with lived experience, and
        establish a powerful new voice for more resources to end and prevent
        homelessness for vulnerable women and children nationwide and the
        shelters that serve them. Over 15,000 miles on the road later, having
        personally visited shelters in communities large and small all across
        the nation, Ms. Collins now leads the National Women’s Shelter Network
        which includes over 180 shelters, and growing. The successful inaugural
        conference of the NWSN in September 2023 in Miami, Florida convened more
        than 220 leaders from shelters across the nation and other experts in
        related fields to share information, innovation, best practices and
        cutting edge research. The NWSN is now a force on a national level,
        working with Federal officials to highlight critical gaps and needs and
        advance public policy initiatives to uplift women and children in need
        to end and prevent homelessness. A dedicated volunteer, Ms. Collins is
        President and Executive Director of the National Women’s Shelter Network
        leading the movement to end and prevent homelessness for the most
        vulnerable women and children in our country and the shelters that serve
        them. She continues to serve as President of the Lotus House Women’s
        Shelter and its extended family of charitable organizations, recognizing
        the importance of remaining close to the ground in her service work.
        After nearly 20 years as a full time volunteer, she remains more
        committed than ever in her mission to end and prevent homelessness in
        our country. Her advocacy is deeply rooted in and informed by direct
        service to women and children in need, creating trauma-informed,
        evidence-based solutions that address the gender-specific needs of
        women, youth and children experiencing homelessness. Ms. Collins helped
        author and served as the co-principal investigator in one of the largest
        service driven research projects ever conducted in the United States to
        understand more deeply the developmental progress, mental health and
        wellbeing, and trauma histories of sheltered children, as well as
        effective therapeutic interventions to heal, support and strengthen
        children and mother-child relationships impacted by trauma. She has
        conducted and guided research and intensive real world experience in a
        wide range of fields intersecting with homelessness: root causes of
        homelessness and the impacts of gender-based violence; gaps and needs
        analyses of gender-based violence and victim’s support systems;
        collective impact models to elevate and amplify the impact of shelters
        and community providers; designing trauma-informed shelter environments,
        operations and programming; HIV and health care services in good
        samaritan clinics; LGBTQIA+ sensitive services; utilization of new
        market tax credit and complex financing to build shelter capacity and
        neighborhood centers; elevating and advancing persons with lived
        experiences in operations, programming and management; and building
        organizational infrastructure and capacity, fundraising and financing to
        support and advance nonprofit mission and impact. Her education includes
        a Bachelor of Arts degree from Trinity College, Hartford, Connecticut
        and a Juris Doctorate degree from University of Colorado, Boulder,
        Colorado, in addition to Foundations in Contemplative and Palliative
        Care from the New York Zen Center for Contemplative Care. She has
        co-authored and received many awards for her work over the past 20 years
        on behalf of Lotus House. Ms. Collins is licensed to practice law in the
        State of Florida and the District of Columbia. For more information,
        please contact us.
      </p>
    </section>
  );
};

export default Officers;
