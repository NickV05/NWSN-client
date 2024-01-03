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
      <div>
      <h4 id="constance" ref={targetElementRef}>
        CONSTANCE COLLINS
      </h4>
      <p>
        <i>President and Executive Director</i>, National Women’s Shelter
        Network{" "}
      </p>
      <p>
        <i>President</i>, Sundari Foundation, Inc. dba Lotus House Women’s
        Shelter, Miami, Florida Contact: constance@thenwsn.org
      </p>
      <img src="" alt="picture" />
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
      </div>

      <div>
      <h4 id="grettel" ref={targetElementRef}>
        GRETTEL JIMENEZ-SINGER
      </h4>
      <p>
        <i>Director</i>, National Women’s Shelter Network Network{" "}
      </p>
      <p>Contact: grettel@thenwsn.org</p>
      <img src="/grettel.jpg" alt="picture" />
      <p>
        Grettel Jiménez-Singer is the Director of the National Women’s Shelter
        Network overseeing the Network’s day-to-day operation; acting as a
        liaison between members, partners and allies; and advancing the NWSN’s
        mission through her commitment to uplifting women and children
        everywhere. Her creative eye and flair for communications are
        instrumental to the development of the NWSN media and community outreach
        campaigns, where Ms. Jiménez-Singer has created and served as executive
        producer of our short-form videos, social media, and monthly
        newsletters. Her love of all people is at the heart of her commitment to
        ending homelessness and makes her a networker and connector
        extraordinaire. Since the inception of the NWSN in 2021, she has played
        a significant role in establishing and creating a Network of over 200
        women’s homeless shelters and programs from around the country. Ms.
        Jiménez-Singer has arranged cross-country roadtrips and visited more
        than 50 shelters, traveling over 15,000 miles coast to coast, to connect
        with shelter leaders, generate partnerships, and learn more about the
        conditions of women’s shelters nationwide. Coordinating with sponsors,
        vendors, attendees, and speakers, Ms. Jiménez-Singer oversaw the
        planning and seamless execution of the NWSN Inaugural Conference. The
        Conference brought together over 220 of our nation’s shelter leaders,
        government officials, service providers, and experts in the field of
        homelessness to share informed best practices and present on key areas
        of concern. The success of the conference was a monumental step for the
        future and further establishment of the NWSN on a national level. The
        NWSN began as an initiative of the Lotus House Women’s Shelter, the
        largest women’s homeless shelter in the nation, where Ms. Jiménez-Singer
        has an extensive history of volunteering during the shelter’s early
        stages, between 2007-2012. During this time she served as a Lotus House
        Board Member and treasurer for the Lotus House Thrift Chic Boutique. She
        was active in the operation of the store and Donation Center, as well as
        in the planning and organizing of community events, including leading
        the first ever toy drive – which Lotus House continues to host every
        year since. Her time at Lotus House truly underscored her passion for
        social justice and women’s issues. Prior to joining the NWSN team, she
        worked as the Editor-in-Chief of the first online platform for MTV Latin
        America, Viacom, as Chief Creative Officer of Tropix Media and
        Entertainment, as Editor-in-Chief of Cubaness Journal. With 20+ years of
        media experience and storytelling across television, radio, digital,
        editorial, and literature platforms, Ms. Jiménez-Singer has been the
        executive and creative producer of over 100 short-form series and
        documentaries and directly responsible for the launch, content strategy,
        content creation, production and team building of several bilingual
        online publications and websites. A writer at heart, Ms. Jiménez-Singer
        has also appeared in numerous publications, such as Paper Magazine,
        Vogue, and Huffington Post, and anthologies including “Cines de Cuba,”
        “Mi juguete preferido,” “Miami Unplugged,” where she deconstructs the
        topics of womanhood, Cubanism, and migration. She dives deeper into
        these concepts in her short stories book “Mujerongas,” and her novel
        “Tempestades Solares,” as well as her two best selling children’s books,
        “La Traviata,” and “La bella durmiente en Central Park.” She possesses a
        Bachelor of Arts in Spanish Literature and Minor in Art and Philosophy
        from Florida International University, where she graduated Cum Laude.
      </p>
      </div>

      <div>
      <h4 id="gabriela" ref={targetElementRef}>
        GABRIELA SAENZ
      </h4>
      <p>
        <i>Research, Policy, & Public Education Director, </i>, National Women’s
        Shelter Network Network{" "}
      </p>
      <p>Contact: gabriela@thenwsn.org</p>
      <img src="/gabriela.jpg" alt="picture" />
      <p>
        Gabriela Saenz is the Director of Research, Policy and Public Education
        for the National Women’s Shelter Network supporting our members with a
        wide range of educational offerings to advance best practices,
        researching funding opportunities for our members across the country,
        identifying and helping to secure additional resources to serve women
        and children in need, and advancing the NWSN’s public policy
        initiatives. Prior to joining the NWSN, Ms. Saenz held a similar
        position at the Sundari Foundation, Inc., best known as the Lotus House
        Women’s Shelter, the largest women’s and children’s homeless shelter in
        the country. There she was integral to the research underlying the
        formation of the Network and its public policy initiatives, engaged in
        extensive outreach to and with shelters across the nation, conducted the
        first ever national gaps and needs survey of the NWSN, and helped the
        NWSN launch its enormously successful inaugural conference. Ms. Saenz
        has been instrumental in the development of the Women’s Equity Project,
        a special web-based platform of the NWSN shining a light on pervasive
        historic and current inequities and discrimination faced by women, the
        intersection of homelessness and gender-based violence, root causes of
        homelessness, and social and public policy recommendations to bring an
        end to and prevent homelessness. Ms. Saenz’s prior experience includes
        intensive research, proposals and reports with an age, gender, and
        diversity focus for the Community Based Protection Team at the United
        Nations High Commissioners for Refugees (UNHCR) in Bogota, Colombia, and
        conducting in-depth research on the implications of policy decisions in
        Latin America and Europe at the Council on Foreign Relations in
        Washington D.C. She possesses a Bachelor’s degree in International
        Studies from the University of Central Florida, and a Master’s degree in
        International Law and Human Rights from the Johns Hopkins School of
        Advanced International Studies (SAIS). While earning her master’s
        degree, Ms. Saenz researched and provided policy recommendations
        surrounding social, political and economic human rights violations on a
        global scale. As part of the International Human Rights Clinic, she
        engaged in a year-long practicum analyzing the domestic implementation
        of human rights laws and freedom of the press. Committed to making a
        lasting difference and fostering a more equitable and just society, Ms.
        Saenz is passionate about community-based work and advocating for our
        most vulnerable, particularly women and children. She pursues this
        passion in all that she does for the NWSN and its Network of
        participating members.
      </p>
      </div>

      <div>
      <h4 id="shakoya" ref={targetElementRef}>
        SHAKOYA GREEN-LONG
      </h4>
      <p>
        <i>Vice President, </i> National Women’s Shelter Network Network{" "}
      </p>
      <p>
        <i>Chief Executive Officer, </i> Thomas House Family Shelter, Garden
        Grove, California
      </p>
      <p>Contact: gabriela@thenwsn.org</p>
      <img src="/Shakoya Green.jpg" alt="picture" />
      <p>
        Shakoya Green Long, is an established professional in the behavioral
        health and social services field. A native of Southern California, she
        earned a bachelor’s degree in Child and Family Development from San
        Diego State University and a Master of Human Behavior from National
        University. She also obtained a second master’s degree in Social Work
        from California State University Dominguez Hills. Mrs. Green Long’s
        acquaintance with social services and its impact on individuals is
        relatively due to her own lived experiences. Ms. Green was born into a
        home with drug-addicted parents and, as a result, was raised by her
        maternal grandmother. As an experienced Social Worker, she has combined
        her traumatic lived experiences with her management acuity expertise to
        facilitate awareness of program goals, objectives, and desired outcomes
        for her staff. Her fervor for human development and community awareness
        have sustained her professional proficiency and ensured longevity and
        success within her line of work. Mrs. Green Long is presently the
        Executive Director of Thomas House Family Shelter located in Garden
        Grove, Ca. Thomas House empowers unhoused families with children to
        become independent and self-sufficient.
      </p>
      </div>

      <div>
      <h4 id="alexis" ref={targetElementRef}>
        ALEXIS STEEL
      </h4>
      <p>
        <i>Treasurer, </i> National Women’s Shelter Network Network{" "}
      </p>
      <p>
        <i>President,</i> St. Mary’s Center for Women and Children, Dorchester,
        Massachusetts
      </p>
      <p>Contact: asteel@stmaryscenterma.org</p>
      <img src="/Alexis Steel.jpg" alt="picture" />
      <p>
        Alexis Steel joined St. Mary’s Center in February 2018 as Senior Vice
        President of Operations and Compliance; she was appointed as the Chief
        Operations Office in January 2020 and was named President of St. Mary’s
        Center in September 2020. In her role, Ms. Steel oversees all operations
        of the agency, including six residential, education, employment, and
        prevention programs. She also oversees government contracts, human
        resources, facilities management, finance, and fundraising. Ms. Steel is
        a member of the National Women's Shelter Network's Steering Committee,
        which is focused on raising awareness of the unique needs of women and
        children experiencing homelessness. Throughout her career, Ms. Steel has
        worked within communities to better the lives of women and children via
        global health initiatives and programs. Prior to joining St. Mary’s
        Center, Ms. Steel served as Senior Global Operations Manager at
        Consortium for Affordable Medical Technologies (CAMTech), where she
        managed internal and external operations for domestic and international
        programs, provided financial oversight, and led evaluation and strategic
        planning. Ms. Steel brings extensive experience in program and financial
        management, working with leading academic hospitals internationally and
        large multinational corporate companies in the tech, healthcare, and
        pharmaceutical spaces. In addition, she previously served in a grant
        oversight capacity for federal and private foundations for both Mass
        General and Brigham and Women’s Hospital. Ms. Steel earned her
        bachelor’s degree from Trent University, graduating with a double major
        in Global Studies and Culture Studies.
      </p>
      </div>

      <div>
      <h4 id="patricia" ref={targetElementRef}>
        PATRICIA BOSMAN
      </h4>
      <p>
        <i>Secretary, </i> National Women’s Shelter Network Network{" "}
      </p>
      <p>
        <i>Executive Director,</i> The Haven of Grace, St. Louis, Missouri
      </p>
      <p>Contact: pbosman@havenofgracestl.org</p>
      <img src="/Patricia Bosman.jpg" alt="picture" />
      <p>
        Patricia R. Bosman is the Executive Director of The Haven of Grace in
        St. Louis, MO, a shelter for pregnant women and their children. She is a
        strategic, operational, and entrepreneurial executive with more than 30
        years of experience across nonprofit and corporate sectors. Lauded as a
        natural connector and peacemaker, she is skilled at collaborating
        cross-functionally, communicating persuasively, and problem-solving with
        ease. Patricia has an unwavering commitment to underserved communities,
        and a passion for building strong relationships with everyone from
        clients to teams to partners and everyone in between -- always with a
        healthy dose of integrity, adaptability, and respect. Prior to entering
        the world of nonprofit, she enjoyed a distinguished career as a leader
        in the telecommunications industry, and for more than 20 years, she has
        managed domestic and international information technology initiatives
        for AT&T, Inc., formerly SBC Corporation. A dedicated volunteer, she is
        the immediate past Chairman of the Board of Trustees for St. Elizabeth’s
        Adult Day Care Center, she is a former National Technology Chairperson
        for CARATS, Incorporated, and Past Vice President of the Metropolitan
        St. Louis Chapter of Jack and Jill of America, Incorporated. She has
        also served Better Family Life Incorporated of St. Louis and the Urban
        League Guild of Metropolitan St. Louis and Sentinel Charities. Patricia
        holds a Bachelor of Arts in Marketing and a Master of Arts in Management
        and Leadership from Webster University. She is a graduate of the CORO
        Women in Leadership program, and she has corporate management
        certifications under the Harvard Mentorship Series and Leading with
        Distinction programs at AT&T, Inc. Patricia is married to jazz artist
        and composer, Dwayne Bosman, one half of the Legendary Bosman Twins.
        They have a blended family of 7 children and a growing number of grands.
      </p>
      </div>

      <div>
      <h4 id="kenyatta" ref={targetElementRef}>
        KENYATTA BRUNSON
      </h4>
      <p>
        <i>President & Chief Executive Officer,</i> N Street Village,
        Washington, D.C.
      </p>
      <p>Contact: KBrunson@nstreetvillage.org</p>
      <img src="/Kenyatta Brunson.jpg" alt="picture" />
      <p>
        Mrs. Kenyatta T. Brunson is a dedicated nonprofit professional with over
        25 years of experience in direct care and managerial positions. She has
        worked with individuals who tend to be the most vulnerable populations
        in society’s at-risk youth, developmentally delayed individuals, those
        with substance abuse disorders, mental health issues, and chronically
        homeless women. Mrs. Brunson has utilized her leadership and
        communication skills with the ability to develop programs to oversee
        social service programs effectively and efficiently. She is a proven
        leader that has successfully overseen and managed the fiscal and
        operational components of programs to ensure that clients receive
        outstanding customer service. Mrs. Brunson is the President & Chief
        Executive Officer at N Street Village, the largest provider of women’s
        services in the District of Columbia focused on trauma-informed shelter
        and permanent supportive housing. Previously, Kenyatta was the Chief
        Program Officer at N Street Village, she was responsible for overseeing
        program operations, program development, and program outcomes for N
        Street Village’s ten residential programs that have served over 700
        women and 52 families, and non-residential programs, which serve over
        2,000 women each year. She directly supervised a program leadership team
        of eight employees and led a program department of nearly 100 FT and PT
        employees. Kenyatta along with her team ensured coordinated program
        delivery, quality control and program improvement, adherence to best
        clinical service practices, and team management and development.
        Kenyatta also represents N Street Village in selected citywide
        coordination groups around homeless services. As a proven leader in
        issues for women that are homeless, Mrs. Brunson has been an outspoken
        advocate about her concerns related to women experiencing homelessness
        by being interviewed on Fox 5 News, ABC 4 News, and the highlight of her
        career was being interviewed by Anderson Cooper on CNN when the Pope
        came to visit Washington, DC in 2015, and visited with those individuals
        experiencing homelessness who were living in shelters operated by the
        Archdiocese of Washington. Mrs. Brunson had the privilege of being a
        featured speaker at the National Alliance to End Homelessness, National
        Conference for Individuals. Mrs. Brunson has been awarded the Community
        Champion Award from Capital One Bank, was featured in Essence Magazine
        as the first runner up for the Hardest Black Woman Award, and the
        Empowering Woman Award from YWCA. Mrs. Brunson’s other passion is
        investing in staff development and believes in coaching and providing
        opportunities for professional growth. Kenyatta has a Bachelor of
        Science in Applied Psychology from Coppin State University and a Master
        of Science in Administration (MSA) from Trinity Washington University
        where her concentration was Nonprofit Management. Kenyatta values
        family, so when she is not at the Village, she is making memories with
        her family.
      </p>
      </div>

      <div>
      <h4 id="kenyatta" ref={targetElementRef}>
        ISABELLA DELL’OCA
      </h4>
      <p>
        <i>Executive Director,</i> Lotus House Women’s Shelter, Miami, Florida
      </p>
      <p>Contact: isabella@lotushouse.org</p>
      <img src="/Kenyatta Brunson.jpg" alt="picture" />
      <p>
        Isabella Dell’Oca is the Executive Director of the Lotus House Women’s
        Shelter, the largest women's shelter in the country. She began her
        career after graduation from Loyola University Chicago, where she got
        her degrees in Social Work and International Relations. Passionate about
        making a lasting impact on her community, she joined Lotus House’s
        Employment and Education team, later transitioning to Community
        Outreach. She was very involved in the development of Lotus Village,
        home to Lotus House, designed as a mixed-use “village” combining state
        of the art shelter facilities and holistic, trauma-informed, supportive
        services to heal, nurture and uplift children and families experiencing
        homelessness. When the facility opened she became the Deputy Director of
        Programming, overseeing all aspects of arts and activities, employment
        and education initiatives. Her leadership skills led to her promotion to
        Director and subsequently, Executive Director. Along with a team of 130,
        who are widely recognized as the best in the field, thousands of lives
        have been transformed to date and will continue to be transformed for
        generations to come.
      </p>
      </div>

      <div>
      <h4 id="kimberly" ref={targetElementRef}>
        KIMBERLY LIVSEY
      </h4>
      <p>
        <i>Chief Program Officer,</i> Atlanta Mission, Atlanta, Georgia
      </p>
      <p>Contact: kimberly.livsey@atlantamission.org</p>
      <img src="/Kimberly Livsey.jpeg" alt="picture" />
      <p>
        Kimberly Livsey is currently the Chief Program Officer at Atlanta
        Mission. She received her Masters of Science in Community Counseling
        from Mercer University and earned her bachelors in Psychology from the
        University of North Carolina at Chapel Hill. She is a Licensed
        Professional Counselor by trade and also provides clinical supervision
        to emerging counselors. Kimberly’s professional experience includes
        managing various mental health clinics throughout metro Atlanta as well
        as providing individual and family counseling to children, adolescents,
        and adults. Her experiences have led her to work in the fields of
        juvenile justice, foster agencies, group homes, local school systems and
        city municipalities. Currently her work allows her to help develop and
        implement trauma informed services to one of the most overlooked
        populations of society, those facing homelessness. Her mission
        throughout all of her work is to facilitate hope, model excellence, and
        serve with compassion those who are discouraged, hopeless and
        marginalized. No matter what the setting, Kimberly strives to serve as
        an adaptable individual who can provide initiative, creativity, and a
        high degree of flexibility and who can relate life experiences to the
        situations of others in a helpful manner.
      </p>
      </div>

      <div>
      <h4 id="lisa" ref={targetElementRef}>
        LISA MICHAELSON
      </h4>
      <p>
        <i>Vice President Women’s and Children’s Programs,</i> Union Gospel
        Mission Twin Cities, Missouri
      </p>
      <p>Contact: lmichaelson@ugmtc.org</p>
      <img src="/Lisa Michaelson.JPG" alt="picture" />
      <p>
        Lisa Michaelson is an inclusive servant leader with proven ability to
        inspire and activate diverse people, partnerships, and resources to
        maximize social impact for individuals, organizations, and communities.
        She currently provides strategic and visionary leadership as Vice
        President of Women's and Children's programs at Union Gospel Mission
        Twin Cities. Previously, as Executive Director of YMCA of the North's
        Youth and Family Services, she collaborated with local and global
        communities to develop innovative responses to reduce disparities and
        advance equity and social justice. Lisa holds a BS in Social Work from
        St. Cloud State University and brings 20 years of experience helping
        those in need and developing effective teams in government and nonprofit
        sectors. As an advocate and connector, Lisa is thrilled to be a member
        of the National Women's Shelter Network Steering Committee! On weekends,
        you can find her enjoying the great outdoors with her husband and
        6-year-old son.
      </p>
      </div>

      <div>
      <h4 id="margaret" ref={targetElementRef}>
        MARGARET MITCHELL
      </h4>
      <p>
        <i>Chief Executive Officer,</i> YWCA USA, Inc., Washington, D.C.
      </p>
      <p>Contact: mmitchell@ywca.org</p>
      <img src="/Margaret Mitchell.jpg" alt="picture" />
      <p>
        Margaret Mitchell anticipates trends and has a proven track record of
        creating competitive breakthrough strategies. She communicates vision,
        purpose, and core values. As a strong decision maker who builds
        consensus, she is a consistent top performer who pursues growth with
        energy and drive. Margaret strives for personal and organizational
        excellence. Recognized for savvy in building relationships at all levels
        inside and outside the organization, she guides an organization with a
        steady hand and maintains focus, even in challenging situations. Prior
        to becoming CEO of YWCA USA, Margaret served as the President & CEO of
        YWCA Greater Cleveland, a 150-year-old social justice organization that
        provides direct service, collaboration, and advocacy in the community,
        focused on racism, empowering women, and homelessness. She has more than
        doubled the budget, the staff, and the services of YWCA Greater
        Cleveland through her leadership, financial acumen, and fundraising.
        Among her achievements, in 2019, she led the call to Declare Racism a
        Public Health Crisis in Cleveland and across the state through her
        leadership in the Ohio YWCA Council. Additionally, Margaret led the
        acquisition of the Norma Herr Women’s Center, Cleveland’s largest
        homeless emergency women’s shelter. She also launched the transformation
        of the YWCA Greater Cleveland Early Learning Center into a unique,
        unduplicated preschool that currently operates the only trauma-informed
        preschool serving children and families experiencing homelessness.
        Previously, Margaret was the President & CEO of Big Brothers Big Sisters
        Greater Cleveland, and served as the VP of Business Development and
        Director of Partnerships at Big Brothers Big Sisters of North Texas (now
        BBBS Lone Star). In each of these roles, she expanded the reach and
        effectiveness of the organization – from board development, partnership
        recruitment, fundraising and organizational transformation focused on
        data. Earlier, Margaret held senior leadership roles at Menttium, a
        for-profit industry leader in one-to-one corporate mentoring, featuring
        cross-company programs serving the Fortune 500. She began her career in
        publishing as an editor and writer. Margaret received a BA with honors
        in Mass Communications from Hampton Institute – a Historically Black
        College and recently attended Strategic Perspectives in Nonprofit
        Management at Harvard Business School. In 2020, The Cleveland Orchestra,
        in partnership with the City of Cleveland, honored her with the Dr.
        Martin Luther King Jr. – Outstanding Service Award. In 2019, YWCA
        Greater Cleveland, ranked in the “Top 10 of the Top 100 Workplaces” by
        The Plain Dealer – Advance Ohio and was recognized as a “Business
        Longevity Honoree” by Smart Business Magazine.
      </p>
      </div>

      <div>
      <h4 id="katie" ref={targetElementRef}>
        KATIE O’BRIEN
      </h4>
      <p>
        <i>Executive Director,</i> Rose Haven, Portland, Oregon Mission Twin
        Cities, Missouri
      </p>
      <p>Contact: kobrien@rosehaven.org </p>
      <img src="/Katie O_Brien.jpg" alt="picture" />
      <p>
        Katie O’Brien has served as Rose Haven’s Executive Director since 2020,
        after working with the agency in a variety of capacities since 2009.
        With 30 years of non-profit experience, her proven track record of
        success in strategic visioning and cultivating relationships has played
        a pivotal role in building the infrastructure for Rose Haven to support
        increased demand for services in Portland, Oregon, where they are
        experiencing the second nd highest rate of unsheltered homeless in the
        country. Operating for 26 years, Rose Haven remains the city’s only day
        shelter and resources center for women, children, and gender diverse
        communities experiencing homelessness and poverty. Katie and her team
        provided consistent and compassionate services throughout the pandemic;
        a source of practical and emotional support to those most vulnerable in
        the community. Simultaneously, Rose Haven designed and built a new,
        trauma-informed facility that tripled capacity and is now daytime home
        to 3,000+ people annually.
      </p>
      </div>

      <div>  
      <h4 id="alyssa" ref={targetElementRef}>
        ALYSSA SANCHEZ, LMHC
      </h4>
      <p>
        <i>Asst. Vice President,</i>Transitional Housing, Samaritan Daytop
        Village, Briarwood, New York
      </p>
      <p>Contact: alyssa.sanchez@samaritanvillage.org </p>
      <img src="/Alyssa Sanchez.jpg" alt="picture" />
      <p>
        As Assistant Vice President of Transitional Housing, Alyssa
        Sanchez-Cook, LMHC, oversees the clinical management and administrative
        operations of 34 family and single adult shelters throughout New York
        City. She has 20 years of experience in the fields of behavioral health,
        workforce development and homeless services. Ms. Sanchez-Cook joined
        Samaritan Daytop Village in 2017 as Program Director for a female adult
        shelter and was promoted to Senior Director of Transitional Housing with
        oversight for six shelters. Previously, she was Senior Director of
        Vocational Services for the WeCARE program at FEGS Health and Human
        Services where she provided job search and training services to more
        than 2,000 adults with medical and mental health conditions. At EAC
        Network, she managed multiple vocational programs funded by the U.S.
        Department of Housing and Urban Development, New York State Office of
        Addiction Services and Supports, and the Nassau County Department of
        Social Services. Ms. Sanchez-Cook holds a Master of Arts in
        Rehabilitation Counseling from New York University and a Bachelor of
        Science in Human Development and Family Studies from Cornell University.
        She is a Licensed Mental Health Counselor and is certified as a Recovery
        Coach and an Offender Workforce Development Specialist. Since 2005, Ms.
        Sanchez-Cook has been a site supervisor for practicums and internships
        at Hofstra University’s Counseling and Mental Health Professions
        program.
      </p>
      </div> 

      <div>
      <h4 id="amy" ref={targetElementRef}>
        AMY TURK
      </h4>
      <p>
        <i>Chief Executive Officer,</i>Downtown Women’s Center, Los Angeles,
        California
      </p>
      <p>Contact: amyt@downtownwomenscenter.org</p>
      <img src="/Amy Turk.jpg" alt="picture" />
      <p>
        Amy Turk, LCSW, is the Chief Executive Officer of the Downtown Women’s
        Center (DWC). Amy has held leadership positions in the field of social
        work and homeless services since 2001. Amy began her tenure at DWC in
        2013 as the Chief Program Officer, where she administered all of DWC’s
        programs and social enterprise. In 2018, Amy served as DWC’s Chief
        Innovation Officer, providing leadership in the development and
        implementation of new organizational projects and fostering vital
        relationships with community partners in efforts to end women’s
        homelessness. Appointed as CEO in early 2020, Amy has grown revenue by
        60%, created a new three-year strategic plan, and is deepening DWC’s
        focus on social justice. In the 12 years prior to joining DWC, Amy
        progressively took on more responsibilities to assist women experiencing
        homelessness from case management to serving for seven years as Director
        of Daybreak, a project of The People Concern. Amy has held numerous
        local, statewide, and national leadership positions in efforts to end
        homelessness, including as a Coro Women in Leadership graduate, USC
        Barbara Boxer Fellow with the USC Center for the Political Future, John
        A. Hartford Foundation Practice Change Leader award recipient for her
        efforts to improve healthcare for older adults experiencing
        homelessness, a Robert Wood Johnson Foundation’s 100 Million Healthier
        Lives Campaign Systems Leader, National Trauma Recovery Center
        Association Advisory Board Member, Los Angeles County Coordinated Entry
        System Councilmember, and the previous Board Chair for Los Angeles
        Central Providers Collaborative. Amy holds a bachelor’s degree in
        Sociology from Pepperdine University and a master’s in Social Work from
        California State University, Los Angeles.
      </p>
      </div>

      <div>    
      <h4 id="emily" ref={targetElementRef}>
        EMILY SEPULVEDA-WHEELAND
      </h4>
      <p>
        <i>Chief Executive Officer,</i>The Delores Project, Denver, Colorado
      </p>
      <p>Contact: emily@thedeloresproject.org</p>
      <img src="/Emily Sepulveda Wheeland.jpg" alt="picture" />
      <p>
        Emily Sepulveda Wheeland (she/her) is the CEO of The Delores Project
        (TDP), located on the ancestral and unceded land of the Cheyenne,
        Arapaho, and Ute Nations in Denver, Colorado. TDP is named after Delores
        Big Boy, a Lakota Sioux woman who experienced chronic homelessness in
        Denver and died on its streets in 1999. In her memory, The Delores
        Project operates a 24-7, housing-focused shelter with wrap-around
        services for women, transgender, and nonbinary adults and a supportive
        housing community for formerly homeless individuals with a disability.
        Emily has a Master’s degree in Social Justice and Ethics from Iliff
        School of Theology, is a 2018 StartingBloc Leadership and Social
        Innovation Fellow, and has worked at The Delores Project since 2015 in a
        variety of roles. At her core, she is an artist whose work and way of
        being in the world are informed by the belief that we belong to each
        other.
      </p>
      </div>

      <div>
      <h4 id="jennifer" ref={targetElementRef}>
        JENNIFER HANLON-WIGON
      </h4>
      <p>
        <i>Executive Director,</i> Women’s Lunch Place, Boston, Massachusetts
      </p>
      <p>Contact: jennifer@womenslunchplace.org</p>
      <img src="/Jennifer Hanlon Wignon.jpg" alt="picture" />
      <p>
        Jennifer Hanlon-Wigon, MBA, is the Executive Director at Women’s Lunch
        Place (WLP), a daytime shelter and advocacy center in Boston that
        provides nutritious food, housing support, recovery programs, and other
        services to women experiencing hunger, homelessness, and poverty. Prior
        to being named to that role, she served as the Director of Finance & HR.
        Through her leadership, WLP has successfully navigated the COVID
        pandemic and is now implementing a proactive Strategic Plan focused on
        innovative new programming to address the disproportionate impact of
        food insecurity, housing instability, and economic disenfranchisement on
        the physical and mental health of women. Previously, Ms. Hanlon-Wigon
        worked as a finance business partner in the high-tech industry. She
        began her career in the Financial Development Program at Digital
        Equipment Corporation (now Hewlett Packard) and worked for Integra
        Technologies Corporation. She later utilized the technical and
        entrepreneurial expertise she developed to lead community non-profits
        with a particular interest in supporting women and girls. Jennifer
        served as President for both Wellesley A Better Chance and Wellesley
        Service League. She was also a member of Womenade Boston, a collective
        giving circle, and the Board of Trustees of the Wellesley Scholarship
        Foundation, serving as Chair of the Scholarship Committee. Ms. Hanlon
        Wigon received her Bachelor of Science in Finance from Boston College,
        and her Master of Business Administration from Babson College, where she
        served for many years as a volunteer coach in Babson’s Coaching for
        Leadership & Teamwork Program.
      </p>
      </div>

      <div>   
      <h4 id="kara" ref={targetElementRef}>
        KARA ZORDEL
      </h4>
      <p>
        <i>Chief Executive Officer,</i> Community Forward SF, San Francisco,
        California
      </p>
      <p>Contact: kara.zordel@communityforwardsf.org</p>
      <img src="/Kara Zordel.jpeg" alt="picture" />
      <p>
        Kara Zordel has over 20 years of experience leading nonprofits with the
        mission to end chronic homelessness. Kara joined Community Forward SF in
        2019 after leading the national award-winning best practice, Project
        Homeless Connect. Prior to Project Homeless Connect, Kara created the
        first-of-its-kind housing program in New York City that housed and
        empowered upwardly mobile women who had previously been unhoused. She
        also led social services in the South Bronx, worked with the Federal
        Emergency Management Agency post 9/11, and has worked for UNICEF
        Tanzania. Kara graduated from Columbia University with a master’s degree
        in social work and international policy. Kara lives in the SOMA
        neighborhood of San Francisco with her partner and two cuddly pups. She
        loves San Francisco and enjoys exploring its beauty, art, and music.
      </p>
      </div>
    </section>
  );
};

export default Officers;
