import React, { useState, useEffect } from "react";
import { get, post } from "../services/authService";

const AdminPortal = () => {
  const [allForms, setAllForms] = useState(null);
  const [loading, setLoading] = useState(true);

  const getForms = () => {
    get("/forms/getForms").then((forms) => {
      console.log("Forms");
      setAllForms(forms);
      setLoading(false);
    });
  };

  useEffect(() => {
    getForms();
  }, []);

  return (
    <section className="section">
      {loading ? (
        <>Loading...</>
      ) : (
        <div>
          <button>Pending Forms</button>
          <button>Previous Forms</button>
        </div>
      )}
    </section>
  );
};

export default AdminPortal;
