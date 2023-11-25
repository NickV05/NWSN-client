import { Link } from "react-router-dom";

const Financials = () => {
  return (
    <section className="section">
      <h3>OUR FINANCIALS</h3>
      <h4>Transparent and Accountable</h4>
      <p>
        The NWSN is committed to the highest level of transparency and
        accountability to its members, funders and donors and the general
        public. We have implemented comprehensive financial policies,
        procedures, systems and controls, including rigorous policies to address
        potential conflicts of interest, records retention, third-party audited
        financial statements, and more. Each year we make public our annual
        report, audited financial statements and Form 990. Filings in other
        states are available on request. We utilize a third party service for
        strict compliance with charitable solicitation regulations required
        across the country. The NWSN also registered with Charity Navigator and
        GuideStar since inception
      </p>

      <p>
        Insert a pie graph with three categories: How we spend our dollars with
        % next to each one: Management & Administration; Support & Programming
        for Members; Research and Public Education To End and Prevent
        Homelessness [ When we get them: Insert Affinity Charity Registration
        Seal, Charity Navigator and GuideStar seals here.]
      </p>

      <div className="table2">
        <Link>2023 Annual Report</Link>
        <Link>2023 Audited Financial Statements</Link>
        <Link>2023 Form 990</Link>
      </div>
      <button>DONATE NOW</button>
      <p>Contact us for more information, Constance@thenwsn</p>
    </section>
  );
}

export default Financials
