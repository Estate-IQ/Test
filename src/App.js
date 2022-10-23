import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/estate.css";
// import ChooseMode from "./Pages/Authentication/Choose";
// import Login from "./components/Login";
// import JoinEstate from "./components/JoinEstate/JoinEstate";
// import ResidentInfo from "./components/JoinEstate/JoinEstate2";
// import BuildingInfo from "./components/JoinEstate/JoinEstate3";
// import CreateEstate from "./Pages/Authentication/Create/Create";
// import Profile from "./components/Profile";
import SuperAdminOverview from "./Pages/SuperAdmin/S-Overview";
// import SuperAdminEstate from "./Pages/SuperAdmin/Estates/Estate";
// import SuperAdminTask from "./Pages/SuperAdmin/Tasks/Task";
// import ResetPassword from "./components/ResetPassword/ResetPassword";
// import UpdatePassword from "./components/ResetPassword/ResetPassword2";
// import CreateEstate2 from "./Pages/Authentication/Create/Create2";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<SuperAdminOverview />} />
            {/* <Route path="/get-started" element={<ChooseMode />} />
            <Route path="/superadmin-estate" element={<SuperAdminEstate />} />
            <Route path="/superadmin-tasks" element={<SuperAdminTask />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-estate" element={<CreateEstate />} />
            <Route path="/join-estate" element={<JoinEstate />} />
            <Route path="/building-info" element={<BuildingInfo />} />
            <Route path="/resident-info" element={<ResidentInfo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/estate-info" element={<CreateEstate2 />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/update-password" element={<UpdatePassword />} /> */}
          </Routes>
        </BrowserRouter>
      </>
    )
  );
}

export default App;
