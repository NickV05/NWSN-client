import { Link } from "react-router-dom"

const NewsPage = () => {

  return (
    <div>
      <video width="640" height="360" controls>
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="table1">
        <Link to="/">NWSN HISTORY</Link>
        <Link to="/">ABOUT US</Link>
        <Link>INFOGRAPHICS AND REPORTS</Link>
      </div>

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
        government, business, finance, philanthropy and communities across the
        nation to address the growing crisis. (link to conference page). The
        NWSN hosted a national press conference on September 6th, 2023,
        accompanied by NWSN’s official spokeswoman Gloria Estefan (link to
        Medial Advisory and videos of the press conference) to demand action and
        met on October 16, 2023, with Federal Officials from DOJ, HUD, HHS,
        FEMA, DOE, DOL and more (link to photos and position paper we
        delivered), to raise awareness of what is happening every day on the
        ground in shelters across America. The dialogue between Federal
        Officials and the NWSN continues. Stay tuned for more!
      </p>

      <div className="table2">
        <div className="table1">
          <img scr="" alt="image of photo gallery" />
          <img scr="" alt="image of photo gallery" />
          <img scr="" alt="image of photo gallery" />
          <img scr="" alt="image of photo gallery" />
        </div>

        <div className="table1">
          <img scr="" alt="image of photo gallery" />
          <img scr="" alt="image of photo gallery" />
          <img scr="" alt="image of photo gallery" />
          <img scr="" alt="image of photo gallery" />
        </div>
      </div>

      <h2>PRESS RELEASES AND MEDIA COVERAGE</h2>

      <div>
        <p>Media Press Release (seven steps action plan, well, eight now.</p>
      </div>
      <a href="https://www.axios.com/local/miami/2023/09/07/national-womens-shelter-network-conference-miami" target="blank">AXIOS MIAMI</a>
      <a href="https://www.local10.com/news/local/2023/09/06/superstar-gloria-estefan-joins-national-movement-to-combat-homelessness-among-women-and-children/#:~:text=MIAMI%20%E2%80%93%20Leaders%20from%20women%27s%20shelters,said%20superstar%20singer%20Gloria%20Estefan" target="blank">ABC LOCAL 10</a>
      <a href="https://worldredeye.com/2023/09/the-national-womens-shelter-network-conference-press-conference/" target="blank">WORLD RED EYE</a>
      <a href="https://www.infobae.com/america/agencias/2023/09/06/gloria-estefan-se-une-a-pedido-de-atacar-la-crisis-sanitaria-de-los-sin-techo-en-eeuu/" target="blank">INFOBAE</a>
      <a href="https://es-us.noticias.yahoo.com/gloria-estefan-une-pedido-atacar-213743801.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAKzXrKmHVXFqlPowWDs0ltu2-jsPpUa2tZ225b75qHjacCJPXLc6SULfBjtqN9Oznt9ksuHoDCvNQghesZ2Q0q1_76DXu9p3ZcQ1gY_fZcnhcxv7ot9jpRGU6V102L7Hap5oYvSf-q961LS2mIYpw6xoItWNLv0YS1-1rI8K7MuW&guccounter=2" target="blank">AGENCIA EFE</a>
      <a href="https://www.msn.com/es-us/noticias/mundo/gloria-estefan-se-une-al-pedido-de-atacar-la-crisis-sanitaria-de-los-sin-techo-en-ee-uu/ar-AA1glnmo" target="blank">MSN</a>
    </div>
  );
}

export default NewsPage
