import "./App.css";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Partnership from "./pages/Partnership";
import Footer from "./components/Footer";
import Membership from "./pages/Membership";
import NewsPage from "./pages/NewsPage";
import AboutUsPage from "./pages/AboutUsPage";
import { useState, useEffect } from "react";
import Sponsor from "./pages/Sponsor";
import Partner from "./pages/Partner";
import Financials from "./pages/Financials";
import MembersPortal from "./pages/MembersPortal";
import Library from "./pages/Library";
import OurMembers from "./pages/OurMembers";
import Funding from "./pages/Funding";
import MemberForm from "./pages/MemberForm";
import ConfirmationPage from "./pages/ConfirmationPage";
import Officers from "./pages/Officers";
import PartnerForm from "./pages/PartnerForm";
import VolunteerForm from "./pages/VolunteerForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const getToken = () => {
    return localStorage.getItem("authToken");
  };

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to="/login" />;
  };

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to="/" />;
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Navbar />

          <Routes>
            <Route element={<LoggedIn />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/partnership" element={<Partnership />} />
              <Route path="/membership" element={<Membership />} />
              <Route path="/news/:tag" element={<NewsPage />} />
              <Route path="/about/:tag" element={<AboutUsPage />} />
              <Route path="/sponsor" element={<Sponsor />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/financials" element={<Financials />} />
              <Route path="/portal/:id" element={<MembersPortal />} />
              <Route path="/library" element={<Library />} />
              <Route path="/members" element={<OurMembers />} />
              <Route path="/funding" element={<Funding />} />
              <Route path="/memberForm" element={<MemberForm />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/speakers/:name" element={<Officers />} />
              <Route path="/partnerForm" element={<PartnerForm/>} />
              <Route path="/volunteerForm" element={<VolunteerForm/>} />
            </Route>

            <Route element={<NotLoggedIn />}>
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
