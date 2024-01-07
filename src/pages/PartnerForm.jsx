import { useState } from 'react';
import { post } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import FileUpload1 from '../components/FileUploader1';
import FileUpload2 from '../components/FileUploader2';

const PartnerForm = () => {

    const navigate = useNavigate();
  const [organizationInfo, setOrganizationInfo] = useState({
    organizationName: '',
    taxId: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    workPhone: '',
    email: '',
    website: '',
  });

  const [mainContactInfo, setMainContactInfo] = useState({
    firstName: '',
    lastName: '',
    title: '',
    contactWorkPhone: '',
    contactEmail: '',
  });

  const [additionalInfo, setAdditionalInfo] = useState("");

  const [name, setName] = useState('');
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);

  
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length) {

      console.log('Name:', name);
      console.log('Agreed to terms');
      const formData = new FormData();
      formData.append('file', files1);

      console.log('Form submitted:', { organizationInfo, mainContactInfo, additionalInfo });
      post("/forms/partnerForm", {
        organizationInfo: organizationInfo,
        mainContactInfo: mainContactInfo,
        additionalInfo: additionalInfo,
        files: formData, 

      })
      navigate("/confirmation");
    } else {
      alert('Please agree to the terms before submitting.');
    }
  };

  const handleInputChange = (category, fieldName, value) => {
    switch (category) {
      case 'organizationInfo':
        setOrganizationInfo({
          ...organizationInfo,
          [fieldName]: value,
        });
        break;
      case 'mainContactInfo':
        setMainContactInfo({
          ...mainContactInfo,
          [fieldName]: value,
        });
        break;
      case 'additionalInfo':
        setAdditionalInfo({
              ...additionalInfo,
              [fieldName]: value,
            });
            break;
      default:
        break;
    }
  };

  return (
    <section className="section">
      <h3>BECOME A NETWORK PARTNER AND PROVIDER</h3>
      <h4>Together We Change Our World!</h4>
      <p>
        The National Women’s Shelter Network, Inc. (NWSN”) is a not-for-profit,
        501c3, organization that aims to provide a wide range of benefits to the
        participating members of its “Network,” including: education and
        trainings; conferences; funding opportunities; free and discounted goods
        and services from preferred providers, vendors and consultants; a
        comprehensive resource library; the “Forum” for dialogue by and amongst
        the NWSN and members; news and advocacy alerts; and shared community.
        The NWSN is dedicated to ending and preventing homelessness and we
        advocate to raise awareness of and more resources for the special needs
        of women, youth and children experiencing homelessness and the shelters
        and safe haven programs that serve them across the nation. Partners and
        Providers work closely with the NWSN to advance our mission, sharing
        their treasure, time, expertise, services and resources with the NWSN
        and participating members of the Network (“Members”). They offer free
        and discounted goods and services that help us advance our mission to
        end and prevent homelessness. Join us today as our Partner and Provider
        in shared mission and service! Note: The NWSN does not discriminate on
        the basis of race, color, religion/creed, national origin/ancestry, age,
        disability, gender, gender expression, sex/sexual orientation,
        pregnancy, marital/partnership status, status as a victim of
        gender-based violence, military/veteran status, political affiliation,
        or any other category covered by applicable federal, state or local laws
        in any of its activities or operations.
      </p>
      <h4>
        National Women’s Shelter Network, Inc. Partner and Provider Application
      </h4>

      <form onSubmit={handleSubmit} className="table2">
        <h4>Organization Information</h4>

        <label>
          Organization Name *
          <input
            type="text"
            value={organizationInfo.organizationName}
            onChange={(e) =>
              handleInputChange(
                "organizationInfo",
                "organizationName",
                e.target.value
              )
            }
            required
          />
        </label>

        <label>
          Tax ID *
          <input
            type="text"
            value={organizationInfo.taxId}
            onChange={(e) =>
              handleInputChange("organizationInfo", "taxId", e.target.value)
            }
            required
          />
        </label>

        <label>
          Address 1
          <input
            type="text"
            value={organizationInfo.address1}
            onChange={(e) =>
              handleInputChange("organizationInfo", "address1", e.target.value)
            }
          />
        </label>

        <label>
          Address 2
          <input
            type="text"
            value={organizationInfo.address2}
            onChange={(e) =>
              handleInputChange("organizationInfo", "address2", e.target.value)
            }
          />
        </label>

        <label>
          City *
          <input
            type="text"
            value={organizationInfo.city}
            onChange={(e) =>
              handleInputChange("organizationInfo", "city", e.target.value)
            }
            required
          />
        </label>

        <label>
          State *
          <input
            type="text"
            value={organizationInfo.state}
            onChange={(e) =>
              handleInputChange("organizationInfo", "state", e.target.value)
            }
            required
          />
        </label>

        <label>
          Postal Code *
          <input
            type="text"
            value={organizationInfo.postalCode}
            onChange={(e) =>
              handleInputChange(
                "organizationInfo",
                "postalCode",
                e.target.value
              )
            }
            required
          />
        </label>

        <label>
          Work Phone *
          <input
            type="text"
            value={organizationInfo.workPhone}
            onChange={(e) =>
              handleInputChange("organizationInfo", "workPhone", e.target.value)
            }
            required
          />
        </label>

        <label>
          Email *
          <input
            type="text"
            value={organizationInfo.email}
            onChange={(e) =>
              handleInputChange("organizationInfo", "email", e.target.value)
            }
            required
          />
        </label>

        <label>
          Website *
          <input
            type="text"
            value={organizationInfo.website}
            onChange={(e) =>
              handleInputChange("organizationInfo", "website", e.target.value)
            }
          />
        </label>

        <h4>Main Contact Information</h4>

        <label>
          First Name *
          <input
            type="text"
            value={mainContactInfo.firstName}
            onChange={(e) =>
              handleInputChange("mainContactInfo", "firstName", e.target.value)
            }
            required
          />
        </label>

        <label>
          Last Name *
          <input
            type="text"
            value={mainContactInfo.lastName}
            onChange={(e) =>
              handleInputChange("mainContactInfo", "lastName", e.target.value)
            }
            required
          />
        </label>

        <label>
          Title *
          <input
            type="text"
            value={mainContactInfo.title}
            onChange={(e) =>
              handleInputChange("mainContactInfo", "title", e.target.value)
            }
            required
          />
        </label>

        <label>
          Work Phone *
          <input
            type="text"
            value={mainContactInfo.contactWorkPhone}
            onChange={(e) =>
              handleInputChange(
                "mainContactInfo",
                "contactWorkPhone",
                e.target.value
              )
            }
            required
          />
        </label>

        <label>
          Email *
          <input
            type="text"
            value={mainContactInfo.contactEmail}
            onChange={(e) =>
              handleInputChange(
                "mainContactInfo",
                "contactEmail",
                e.target.value
              )
            }
            required
          />
        </label>

        <h4>Tell Us How You Can Help </h4>

        <p>First, here are some examples:</p>
        <i>
          A national law firm provides free legal services to assist the
          National Women’s Shelter Network in its mission.
        </i>
        <i>
          A national accounting firm provides free accounting, auditing and tax
          services to the National Women’s Shelter Network and free or
          discounted services to its Network members.
        </i>
        <i>
          A national hotel chain provides free rooms for the NWSN team as they
          travel the country meeting and visiting with shelters nationwide.
        </i>
        <i>
          A national food wholesaler provides free and discounted food supplies
          to the NWSN Network members.
        </i>
        <p>
          Sometimes our Partners and Providers are also Sponsors. Check out our
          Sponsors’ page to support the NWSN directly.{" "}
        </p>
        <p>
          Sometimes Partners and Providers may provide free or discounted goods
          and services for Network members near to them locally, by state or
          region or nationally.
        </p>
        <p>
          Partners and Providers may also take advantage of our Corporate
          Volunteer Program to engage their employees and affiliates in
          meaningful volunteer services together, building corporate d’esprit
          and giving back to the communities in which they are involved all
          across the country.
        </p>
        <p>
          <i>You know what your organization does best.</i>The range of goods
          and services needed by the NWSN and its Network is wide and varied.
          Here are some examples: accounting and auditing; air transportation;
          baby diapers and supplies; banking services; basic shelter supplies
          (cleaning products and supplies; linens of all kinds); clothing and
          shoes (for adults, youth and children); conference and symposia
          support; educational supports and supplies (for all ages); food
          supplies (wholesale); furnishings (for both shelters and move-outs);
          hotels (for NWSN travel and conferences); housing and move-out
          assistance; insurance; job training and employment assistance; legal
          services (national and local); office supplies; paint and building
          supplies (to improve local shelters); rental cars (for NWSN travel and
          conferences); toiletries (hair and hygiene products); toys; transport
          services (for moving people and donations); and more.
        </p>

        <i> Tell us how you can help:</i>

        <input
          type="text"
          value={additionalInfo}
          onChange={(e) => setAdditionalInfo(e.target.value)}
          required
        />

        <h4>Partner and Provider Benefits</h4>

        <p>Our Partners and Providers are:</p>

        <ul>
          <li>
            Included on our website homepage carousel of logos with other
            Partners and Providers of the NWSN;{" "}
          </li>
          <li>
            Featured on the dedicated Partners and Providers page of the NWSN
            website;
          </li>
          <li>
            Given a special, separate page describing their free and discounted
            goods and services, linked to their logo on the Partners and
            Providers page or directly to their website;
          </li>
          <li>Highlighted in our Network Forum for all members to see;</li>
          <li>
            Promoted in NWSN newsletter at least annually, along with their
            special offerings;{" "}
          </li>
          <li>
            Able to include the NWSN logo on their website to highlight their
            support on an annual basis and have the opportunity to secure an
            exhibitor’s table at our national conferences (subject to standard
            exhibitor fees);
          </li>
          <li>
            Via our Corporate Volunteer Program, engage their employees and
            affiliates in meaningful volunteer services together, building
            organizational corps d’esprit and making a difference with Network
            members in the communities in which they are involved all across the
            country and above all, supporting the important mission and work of
            the NWSN.
          </li>
        </ul>

        <h4>Partners and Providers who are also Sponsors will have all the benefits of sponsorship of the NWSN as well.</h4>

        <p>
        Please upload copies of your company’s information and brochures as well as an introductory letter of your choosing. 
        </p>
        <FileUpload1 files1={files1} setFiles1={setFiles1} />
        <FileUpload2 files2={files2} setFiles2={setFiles2} />

        <h4>Network Membership Terms</h4>
        <p>
        Please contact our organization with more information regarding the opportunities to become a Partner and Provider of the NWSN. We look forward to working together. Thank you!
        </p>

        <label>
          Signature:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default PartnerForm
