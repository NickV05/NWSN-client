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
import AdminPortal from "./pages/AdminPortal";
import AdvancingStandards from "./pages/AdvancingStandards";
import BuildSharedComm from "./pages/BuildSharedComm";
import DisasterRelief from "./pages/DisasterRelief";
import PublicPolicies from "./pages/PublicPolicies";
import ResAndOp from "./pages/ResAndOp";
import SupportShelters from "./pages/SupportShelters";
import FreeGoodMemb from "./pages/FreeGoodMemb";
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
              <Route path="/partnerForm" element={<PartnerForm />} />
              <Route path="/volunteerForm" element={<VolunteerForm />} />
              <Route path="/adminPortal" element={<AdminPortal />} />
              <Route path="/advance" element={<AdvancingStandards />} />
              <Route path="/buildCom" element={<BuildSharedComm />} />
              <Route path="/disrelief" element={<DisasterRelief />} />
              <Route path="/publivcpol" element={<PublicPolicies />} />
              <Route path="/resandop" element={<ResAndOp />} />
              <Route path="/support" element={<SupportShelters />} />
              <Route path="/freegoods" element={<FreeGoodMemb />} />
            </Route>

            <Route element={<NotLoggedIn />}>
            <Route path="/" element={<HomePage />} />
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
