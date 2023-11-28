import { useState } from 'react';
import { post } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const MemberForm = () => {
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

  const [membershipEligibility, setMembershipEligibility] = useState({
    dayShelter: false,
    overnightShelter: false,
    safeHaven: false,
    safeHavenDescription: '',
    maternityPrograms: false,
    youthShelters: false,
    domesticViolenceShelters: false,
    flexShelters: false,
    hybridTransitionalShelters: false,
    programsExperiencingHomelessness: false,
    genderBasedViolencePrograms: false,
    other: false,
    otherDescription: '',
    scope:false,
    scopeDescription:''
  });

  const [additionalInfo, setAdditionalInfo] = useState({
    fees: false,
    feesDescription: '',
    pay: false,
    howManyLocations: '',
    howManyShelters: '',
    howManyBedNights: '',
    units: '',
    meals: '',
    counseling: '',
    types: '',
    women: '',
    children: '',
    association:false,
    mission: '',
    becomeMembers:'',
    sheltering:false,
    howManyMembers:'',
  });

  const duesData = [
    { range: '0-$250,000', dues: 125, persons: 1 },
    { range: '$250,001-$500,000', dues: 250, persons: 1 },
    { range: '$500,001-$1,000,000', dues: 500, persons: 1 },
    { range: '$1,000,001-$2,000,000', dues: 1000, persons: 2 },
    { range: '$2,000,001-$3,500,000', dues: 2000, persons: 2 },
    { range: '$3,000,001-$5,000,000', dues: 3000, persons: 3 },
    { range: '$5,000,001-$7,500,000', dues: 5000, persons: 3 },
    { range: '$7,500,001-$10,000,000', dues: 7500, persons: 4 },
    { range: '$10,000,001 and Up', dues: 10000, persons: 4 },
  ];


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
      case 'membershipEligibility':
        setMembershipEligibility({
          ...membershipEligibility,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { organizationInfo, mainContactInfo, membershipEligibility });
    navigate("/confirmation");

  };

  return (
    <section className="section">
      <h3>BECOME A NETWORK MEMBER</h3>
      <h4>Together We Are Stronger!</h4>
      <p>
        Join our growing community of women’s and family shelters and safe haven
        programs from across the country for shared learning and community in
        support of women and children experiencing or at risk of homelessness.
        National, regional, state and local associations, networks and
        coalitions of shelters and safe haven programs are welcome. More than a
        nonprofit charity and membership association –we are a movement to
        advance the status of women and children experiencing homelessness in
        our nation and the shelters and safe havens who serve them in local
        communities all across the country to end and prevent homelessness. Join
        us in shared learning and community!{" "}
      </p>
      <h4>National Women’s Shelter Network, Inc. Membership Application</h4>
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
        and safe haven programs that serve them across the nation. Join the
        Network today!
        <i>
          Note: The NWSN does not discriminate on the basis of race, color,
          religion/creed, national origin/ancestry, age, disability, gender,
          gender expression, sex/sexual orientation, pregnancy,
          marital/partnership status, status as a victim of gender-based
          violence, military/veteran status, political affiliation, or any other
          category covered by applicable federal, state or local laws in any of
          its activities or operations.
        </i>
      </p>
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
            required
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

        <h4>Network Membership Eligibility</h4>

        <p>
          Membership in the Network is available to the following types of
          non-profit organizations serving women, youth and/or children
          experiencing and/or at risk of homelessness [please check all that
          apply to your organization]:
        </p>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.dayShelter}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "dayShelter",
                e.target.checked
              )
            }
          />
          Day Shelter/Drop-In Center
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.overnightShelter}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "overnightShelter",
                e.target.checked
              )
            }
          />
          Overnight Shelter
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.safeHaven}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "safeHaven",
                e.target.checked
              )
            }
          />
          Safe Haven Program
        </label>

        {membershipEligibility.safeHaven && (
          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "membershipEligibility",
                  "safeHavenDescription",
                  e.target.value
                )
              }
            />
            Please tell us about your organization:
          </label>
        )}

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.maternityPrograms}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "maternityPrograms",
                e.target.checked
              )
            }
          />
          Maternity Programs & Group Homes
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.youthShelters}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "youthShelters",
                e.target.checked
              )
            }
          />
          Youth Shelters & Group Homes
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.domesticViolenceShelters}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "domesticViolenceShelters",
                e.target.checked
              )
            }
          />
          Domestic Violence Shelters and Centers
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.flexShelters}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "flexShelters",
                e.target.checked
              )
            }
          />
          Flex Shelters, Long Term/Solution Focused
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.hybridTransitionalShelters}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "hybridTransitionalShelters",
                e.target.checked
              )
            }
          />
          Hybrid & Transitional Shelters & Housing Programs
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.programsExperiencingHomelessness}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "programsExperiencingHomelessness",
                e.target.checked
              )
            }
          />
          Programs Serving Persons Experiencing or at Risk of Homelessness
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.genderBasedViolencePrograms}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "genderBasedViolencePrograms",
                e.target.checked
              )
            }
          />
          Programs Aimed at Ending Gender-Based Violence
        </label>

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.other}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "other",
                e.target.checked
              )
            }
          />
          Other
        </label>

        {membershipEligibility.other && (
          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "membershipEligibility",
                  "otherDescription",
                  e.target.value
                )
              }
            />
            Please tell us about your organization:
          </label>
        )}

        <label>
          <input
            type="checkbox"
            checked={membershipEligibility.scope}
            onChange={(e) =>
              handleInputChange(
                "membershipEligibility",
                "scope",
                e.target.checked
              )
            }
          />
          Local/State/Regional/National Network, Coalition or Association
        </label>

        {membershipEligibility.scope && (
          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "membershipEligibility",
                  "scopeDescription",
                  e.target.value
                )
              }
              required
            />
            Please tell us about your organization:
          </label>
        )}

        <h4>Tell Us A Little More About Your Organization</h4>

        <label>
          <input
            type="checkbox"
            checked={additionalInfo.fees}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "fees",
                e.target.checked
              )
            }
          />
          Does your organization charge participants any fees, charges or dues?
        </label>

        {additionalInfo.fees && (
          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "feesDescription",
                  e.target.value
                )
              }
            />
            What types of fees, charges or dues, how much and are they sliding scale? 
          </label>
        )}

        <label>
          <input
            type="checkbox"
            checked={additionalInfo.pay}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "pay",
                e.target.checked
              )
            }
          />
          Do you provide services regardless of a person’s ability to pay?
        </label>

        <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "howManyLocations",
                  e.target.value
                )
              }
            />
            How many locations do you operate? 
          </label>
          
          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  " howManyShelters",
                  e.target.value
                )
              }
            />
            How many shelter beds do you have?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "howManyBedNights",
                  e.target.value
                )
              }
            />
            Approximately how many shelter-bed nights do you provide annually?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "units",
                  e.target.value
                )
              }
            />
            If you provide transitional housing, how many units do you have and who do you serve?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "meals",
                  e.target.value
                )
              }
            />
            Approximately how many free meals do you provide annually?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "counseling",
                  e.target.value
                )
              }
            />
            Approximately how many free counseling sessions do you provide annually?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "types",
                  e.target.value
                )
              }
            />
            What other types of services do you provide?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "women",
                  e.target.value
                )
              }
            />
            Approximately how many women do you serve annually?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "children",
                  e.target.value
                )
              }
            />
            Approximately how many children do you serve annually?
          </label>

          <label>
          <input
            type="checkbox"
            checked={additionalInfo.association}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "association",
                e.target.checked
              )
            }
          />
          Is your organization an association, network, coalition or similar organization?
        </label>

        {additionalInfo.association && (
            <>
          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "mission",
                  e.target.value
                )
              }
            />
           Tell us what your mission is?
          </label>

          <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "becomeMembers",
                  e.target.value
                )
              }
            />
           Who can become members?
          </label>

          <label>
          <input
            type="checkbox"
            checked={additionalInfo.sheltering}
            onChange={(e) =>
              handleInputChange(
                "additionalInfo",
                "sheltering",
                e.target.checked
              )
            }
          />
          Are your members sheltering, housing and/or providing services to persons experiencing or at risk of homelessness?
        </label>

        <label>
            <input
              type="text"
              onChange={(e) =>
                handleInputChange(
                  "additionalInfo",
                  "howManyMembers",
                  e.target.value
                )
              }
            />
           How many members do you have?
          </label>
          </>
        )}

        <h4>NWSN Membership Dues are Based on a Sliding Scale:</h4>
        <p>Please contact us if your organization would like to join the Network but cannot afford to pay dues</p>

        <table>
      <thead>
        <tr>
          <th>Annual Budget</th>
          <th>Annual Dues $$ </th>
          <th>Conference Registration Fee Waived for # of Persons ~ Big Saving!</th>
        </tr>
      </thead>
      <tbody>
        {duesData.map((item, index) => (
          <tr key={index}>
            <td>{item.range}</td>
            <td>{item.dues}</td>
            <td>{item.persons}</td>
          </tr>
        ))}
      </tbody>
    </table>     

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default MemberForm;