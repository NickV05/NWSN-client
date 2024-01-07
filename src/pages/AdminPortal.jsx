import React, { useState, useEffect } from "react";
import { get, post } from "../services/authService";

const AdminPortal = () => {
  const [allForms, setAllForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal1, setModal1] = useState(false);

  const getForms = () => {
    get("/forms/getForms").then((forms) => {
      setAllForms(forms);
      setLoading(false);
      console.log("Forms ===>", forms);
    });
  };

  const review =(id) => {
    console.log("Id", id)
    post("/forms/review",id).then(() => {
      getForms();
    })
  }

  useEffect(() => {
    getForms();
  }, []);

  return (
    <section className="section">
      {loading ? (
        <>Loading...</>
      ) : (
        <>
          <div>
            {!modal1 ? (
              <button onClick={() => setModal1(true)}>
                Pending Forms ({allForms && allForms.data.filter((obj) => obj.pending === true).length})
              </button>
            ) : (
              <button onClick={() => setModal1(false)}>Go back</button>
            )}
            <button>Previous Forms ({allForms && allForms.data.filter((obj) => obj.pending === false).length})</button>
          </div>

          {modal1 && <>
            {allForms.data.filter((obj) => obj.pending === true && obj.type === "VolunteerForm")
              .map((form) => (
                <div key={form.id}>
                  <h3>Volunteer Form</h3>
                  <p>Applicant's Name: {form.firstName} {form.lastName}</p>
                  <p>Personal Phone Number: {form.workPhone}</p>
                  <p>Email: {form.email}</p>
                  <p>Address: {form.address1} {form.address2}</p>
                  <p>State: {form.state}</p>
                  <p>City: {form.city}</p>
                  <p>Postal Code: {form.postalCode}</p>
                  <p>Why interested in volunteering: {form.interest}</p>
                  <p>Professional Skills: {form.skills}</p>
                  <p>Software Literate (e.g., Word, Excel, Photoshop, etc.): {form.computer ? "Yes" : "No"}</p>
                  <p>Time to dedicate to volunteering and when: {form.time}</p>
                  <p>Can work remotely: {form.remote ? "Yes" : "No"}</p>
                  <p>Available to travel: {form.travel ? "Yes" : "No"}</p>
                  <p>How did the applicant hear about us: {form.source}</p>
                  {form.add && <p>Applicant's additional comment: {form.add}</p>}

                  <button onClick={() => review(form._id)}>Mark as reviewed</button>
                </div>
              ))}

              {allForms.data.filter((obj) => obj.pending === true && obj.type === "PartnerForm")
              .map((form) => (
                <div key={form.id}>
                  <h3>Partner Form</h3>

                  <h4>Organization Information</h4>
                  <p>Organization Name: {form.organizationName}</p>
                  <p>Tax ID: {form.taxId}</p>
                  <p>Phone: {form.workPhone}</p>
                  <p>Email: {form.email}</p>
                  <p>Address: {form.address1} {form.address2}</p>
                  <p>State: {form.state}</p>
                  <p>City: {form.city}</p>
                  {form.website && <p>Website: {form.website}</p>}
                  <p>Postal Code: {form.postalCode}</p>

                  <h4>Main Contact Information</h4>

                  <p>Contact Name: {form.firstName} {form.lastName}</p>
                  <p>Title: {form.title}</p>
                  <p>Phone Number: {form.contactWorkPhone}</p>
                  <p>Email: {form.contactEmail}</p>
                  {form.additionalInfo && <p>Applicant's additional comment: {form.additionalInfo}</p>}
                  <button onClick={() => review(form._id)}>Mark as reviewed</button>
                </div>
              ))}

              {allForms.data.filter((obj) => obj.pending === true && obj.type === "MemberForm")
              .map((form) => (
                <div key={form.id}>
                  <h3>Member Form</h3>

                  <h4>Organization Information</h4>
                  <p>Organization Name: {form.organizationName}</p>
                  <p>Tax ID: {form.taxId}</p>
                  <p>Phone: {form.workPhone}</p>
                  <p>Email: {form.email}</p>
                  <p>Address: {form.address1} {form.address2}</p>
                  <p>State: {form.state}</p>
                  <p>City: {form.city}</p>
                  {form.website && <p>Website: {form.website}</p>}
                  <p>Postal Code: {form.postalCode}</p>

                  <h4>Main Contact Information</h4>

                  <p>Contact Name: {form.firstName} {form.lastName}</p>
                  <p>Title: {form.title}</p>
                  <p>Phone Number: {form.contactWorkPhone}</p>
                  <p>Email: {form.contactEmail}</p>
                  
                  <h4>Network Membership Eligibility</h4>
                  <p>Day Shelter/Drop-In Center: {form.dayShelter ? "Yes" : "No"}</p>
                  <p>Overnight Shelter: {form.overnightShelter ? "Yes" : "No"}</p>
                  <p>Safe Haven Program: {form.safeHaven ? "Yes" : "No"}</p>
                  {form.safeHaven && form.safeHavenDescription && <p> Additional details about that: {form.safeHavenDescription}</p>}
                  <p>Maternity Programs & Group Homes: {form.maternityPrograms ? "Yes" : "No"} </p>
                  <p>Youth Shelters & Group Homes: {form.youthShelters? "Yes" : "No"}</p>
                  <p>Domestic Violence Shelters and Centers: {form.domesticViolenceShelters? "Yes" : "No"}</p>
                  <p>Flex Shelters, Long Term/Solution Focused: {form.flexShelters? "Yes" : "No"}</p>
                  <p>Hybrid & Transitional Shelters & Housing Programs: {form.hybridTransitionalShelters? "Yes" : "No"}</p>
                  <p>Programs Serving Persons Experiencing or at Risk of Homelessness: {form.programsExperiencingHomelessness? "Yes" : "No"}</p>
                  <p>Programs Aimed at Ending Gender-Based Violence: {form.genderBasedViolencePrograms? "Yes" : "No"}</p>
                  {form.other && form.otherDescription && <p>Other: {form.otherDescription}</p>}
                  <p>Local/State/Regional/National Network, Coalition or Association: {form.scope ? "Yes" : "No"}</p>
                  {form.scope && form.scopeDescription && <p> Additional details about that : {form.scopeDescription}</p>}

                  <h4>More About Organization</h4>

                  <p>Charging participants fees, charges or dues: {form.fees ? "Yes" : "No"}</p>
                  {form.fees && form.feesDescription && <p> Additional details about that : {form.feesDescription}</p>}
                  <p>Providing services regardless of a person’s ability to pay: {form.pay ? "Yes" : "No"}</p>
                  <p>Amount of locations operated: {form.howManyLocations}</p>
                  <p>Amount of shelter beds: {form.howManyShelters}</p>
                  <p>Amount of shelter-bed nights provided annually: {form.howManyBedNights}</p>
                  <p>Amount of units and who do we serve: {form.units}</p>
                  <p>Amount of free meals provided annually: {form.meals}</p>
                  <p>Amount of free counseling sessions provided annually: {form.counseling}</p>
                  <p>Other types of services provided: {form.types}</p>
                  <p>Amount of women served annually: {form.women}</p>
                  <p>Amount of childred served annually: {form.children}</p>
                  <p>Is organization an association, network, coalition or similar organization: {form.association ? "Yes" : "No"}</p>
                  {form.association && form.mission &&<p>Mission: {form.mission}</p>}
                  {form.association && form.becomeMembers &&<p>Who can become members: {form.becomeMembers}</p>}
                  {form.association &&<p>Members are sheltering, housing and/or providing services to persons experiencing or at risk of homelessness: {form.sheltering ? "Yes" : "No"}</p>}
                  {form.association && form.howManyMembers &&<p>Amount of members: {form.howManyMembers}</p>}
                  <button onClick={() => review(form._id)}>Mark as reviewed</button>
                </div>
              ))}
              
              
      </>}
        </>
      )}
    </section>
  );
};

export default AdminPortal;