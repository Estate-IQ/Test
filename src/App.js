import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/estate.css";
import ChooseMode from "./Pages/Authentication/ChooseMode";
import Login from "./components/Login";
import JoinEstate from "./Pages/Authentication/JoinEstate";
import CreateEstate from "./Pages/Authentication/CreateEstate";
import Profile from "./components/Profile";
import EditPackage from "./Pages/SuperAdmin/Permissions/Edit";
import SuperAdminOverview from "./Pages/SuperAdmin/S-Overview";
import SuperAdminEstate from "./Pages/SuperAdmin/Estates/Estate";
import SuperAdminTask from "./Pages/SuperAdmin/Tasks/Task";
import SuperAdminPermission from "./Pages/SuperAdmin/Permissions/Permission";
import SuperAdminComplaint from "./Pages/SuperAdmin/Complaints/Complaint";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UpdatePassword from "./components/ResetPassword/ResetPassword2";

function App() {
  return (
    // !loading && (
    <>
      <BrowserRouter basename="/estate-iq">
        <Routes>
          <Route index element={<SuperAdminOverview />} />
          <Route path="/get-started" element={<ChooseMode />} />
          <Route path="/superadmin-overview" element={<SuperAdminOverview />} />
          <Route path="/create-estate" element={<CreateEstate />} />
          <Route path="/join-estate" element={<JoinEstate />} />
          <Route path="/superadmin-estate" element={<SuperAdminEstate />} />
          <Route path="/superadmin-tasks" element={<SuperAdminTask />} />
          <Route
            path="/superadmin-permission"
            element={<SuperAdminPermission />}
          />

          {/* SLUGS */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/editpackage" element={<EditPackage />} />

          <Route path="/login" element={<Login />} />

          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />
          <Route
            path="/superadmin-complaint"
            element={<SuperAdminComplaint />}
          />
        </Routes>
      </BrowserRouter>
    </>
    // )
  );
}

export default App;
