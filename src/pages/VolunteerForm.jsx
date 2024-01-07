import { useState } from 'react';
import { post } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const VolunteerForm = () => {
    const navigate = useNavigate();
  const [organizationInfo, setOrganizationInfo] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    postalCode: '',
    phone: '',
    email: '',
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    interest:'',
    skills: '',
    computer: false,
    time: '',
    remote: false,
    travel: false,
    add: '',
    source: '',
  });

  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length) {

      console.log('Name:', name);
      console.log('Agreed to terms');

      console.log('Form submitted:', { organizationInfo});
      post("/forms/volunteerForm", {
        organizationInfo: organizationInfo,
        additionalInfo: additionalInfo
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
      <h3>BECOME A NWSN VOLUNTEER</h3>
      <p>
        Join the National Women’s Shelter Network as a volunteer and make a
        difference in the lives of women and children across our country. More
        than a nonprofit charity and network of women’s shelters and safe haven
        programs –we are a movement to advance the status of women and children
        and bring an end to homelessness in our country.<i>Join us!</i>
      </p>
      <h4>National Women’s Shelter Network, Inc. Volunteer Application</h4>
      <p>
        The National Women’s Shelter Network, Inc. (NWSN”) is a not-for-profit,
        501c3, organization that is dedicated to advancing the status of women
        and children experiencing homelessness in our country, and the women’s
        shelters and safe haven programs that serve them, for safer, brighter
        futures and to bring an end to homelessness in our country. We do so by:
        (i) joining forces and establishing a national network of women's and
        family shelters and safe haven programs and national, regional, state
        and local networks, associations and coalitions and allies across the
        country; (ii) helping women and children experiencing or at risk of
        homelessness find women’s shelters and safe haven programs, supportive
        services and resources in the network; (iii) elevating the voices and
        raising awareness of the special needs of women and children
        experiencing homelessness and the shelters and safe haven programs that
        serve them; (iv) sharing information, best practices, innovation,
        research and effective solutions to advance the status of women and
        children experiencing homelessness and the shelters and safe haven
        programs that serve them; (v) offering education, trainings, resources,
        conferences and networking for shelters and safe haven programs to
        advance best practices, standards of care and organizational capacity;
        (vi) conducting research and identifying challenges, gaps and needs, and
        effective solutions and developing informed social and public policies;
        (vii) raising public awareness and public education; and (viii)
        advancing resources and solutions to end and prevent homelessness. We
        need your help. Volunteers of the NWSN share our vision for a world of
        racial, social and gender equity, free of violence against women and
        children, where every woman and child will have a safe home and in times
        of transition, trauma informed shelter and safe havens with deep
        protective factors, to assure they can heal, grow, thrive and blossom
        into who they are meant to be. They roll up their sleeves and make a
        difference with their hard work, dedication, compassion and passion!
        <i>Become a Volunteer today!!</i>
      </p>

      <i>
        Note: The NWSN does not discriminate on the basis of race, color,
        religion/creed, national origin/ancestry, age, disability, gender,
        gender expression, sex/sexual orientation, pregnancy,
        marital/partnership status, status as a victim of gender-based violence,
        military/veteran status, political affiliation, or any other category
        covered by applicable federal, state or local laws in any of its
        activities or operations.
      </i>

      <h4>National Women’s Shelter Network, Inc. Volunteer Form</h4>

      <form onSubmit={handleSubmit} className="table2">
        <h4>Contact Information</h4>

        <label>
          First Name *
          <input
            type="text"
            value={organizationInfo.firstName}
            onChange={(e) =>
              handleInputChange("organizationInfo", "firstName", e.target.value)
            }
            required
          />
        </label>

        <label>
          Last Name *
          <input
            type="text"
            value={organizationInfo.lastName}
            onChange={(e) =>
              handleInputChange("organizationInfo", "lastName", e.target.value)
            }
            required
          />
        </label>

        <label>
          Personal Phone *
          <input
            type="text"
            value={organizationInfo.phone}
            onChange={(e) =>
              handleInputChange("organizationInfo", "phone", e.target.value)
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
         Tell us why you are interested in volunteering:
          <input
            type="text"
            value={additionalInfo.interest}
            onChange={(e) =>
              handleInputChange("additionalInfo", "interest", e.target.value)
            }
            required
          />
        </label>

        <label>
          Tell us about your professional skills (research, writing,
          bookkeeping, accounting, customer service, organizing, information
          management, etc.):
          <input
            type="text"
            value={additionalInfo.skills}
            onChange={(e) =>
              handleInputChange("additionalInfo", "skills", e.target.value)
            }
            required
          />
        </label>

        <label>
          Are you computer and software literate (e.g., Word, Excel, Photoshop,
          etc.)?
          <input
            type="checkbox"
            checked={additionalInfo.computer}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "computer",
                e.target.checked
              )
            }
          />
        </label>

        <label>
          How much time do you have to dedicate to volunteering and when is best
          for you?
          <input
            type="text"
            value={additionalInfo.time}
            onChange={(e) =>
              handleInputChange("additionalInfo", "time", e.target.value)
            }
            required
          />
        </label>

        <label>
          Can you work remotely?
          <input
            type="checkbox"
            checked={additionalInfo.remote}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "remote",
                e.target.checked
              )
            }
          />
        </label>

        <label>
          Are you available to travel to and participate in our working
          symposium (generally 3 days) or conferences (generally one week)?
          <input
            type="checkbox"
            checked={additionalInfo.travel}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "travel",
                e.target.checked
              )
            }
          />
        </label>

        <label>
          Is there anything else you would like to add?
          <input
            type="text"
            value={additionalInfo.add}
            onChange={(e) =>
              handleInputChange("additionalInfo", "add", e.target.value)
            }
          />
        </label>

        <label>
          How did you hear about us?
          <input
            type="text"
            value={additionalInfo.source}
            onChange={(e) =>
              handleInputChange("additionalInfo", "source", e.target.value)
            }
            required
          />
        </label>

        <p>
          Please note, at this time, we are only accepting volunteers for the
          work of the NWSN on a national level. To volunteer with a
          participating member of the NWSN Network, please check out the NWSN
          Directory and reach out to a member in your area directly. Thank you!
        </p>

        <label>
          Signature:
          <input type="text" value={name} onChange={handleNameChange} required />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default VolunteerForm
