import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css";
import "./assets/css/estate.css";

// ADMIN
import AdminOverview from "./Pages/Admin/Dashboard/A-Overview";
import AdminResidence from "./Pages/Admin/Residence/Residence";
import AdminUtilities from "./Pages/Admin/Utilities/Utilities";
import AdminTransaction from "./Pages/Admin/Transaction/AdminTransaction";
import AdminActivityLog from "./Pages/Admin/ActivityLog/Activity";

// ===================

import ChooseMode from "./Pages/Authentication/ChooseMode";
import Login from "./components/Login";
import JoinEstate from "./Pages/Authentication/JoinEstate";
import CreateEstate from "./Pages/Authentication/CreateEstate";
import EstateProfile from "./components/Profile";
import EditPackage from "./Pages/SuperAdmin/Permissions/Edit";
import SuperAdminOverview from "./Pages/SuperAdmin/S-Overview";
import SuperAdminEstate from "./Pages/SuperAdmin/Estates/Estate";
import SuperAdminTask from "./Pages/SuperAdmin/Tasks/Task";
import SuperAdminPermission from "./Pages/SuperAdmin/Permissions/Permission";
// import SuperAdminComplaint from "./Pages/SuperAdmin/Complaints/Complaint";
import SuperAdminComplaint from "./Pages/SuperAdmin/Complaints/R-Complaint";
import AdminComplaint from "./Pages/Admin/Complaints/R-Complaint";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import UpdatePassword from "./components/ResetPassword/ResetPassword2";

function App() {
  return (
    // !loading && (
    <>
      <BrowserRouter basename="/estate-iq">
        <Routes>
          {/* ADMIN */}
          <Route path="/admin/dashboard" element={<AdminOverview />} />
          <Route path="/admin/residence" element={<AdminResidence />} />
          <Route path="/admin/activitylog" element={<AdminActivityLog />} />
          <Route path="/admin/utilities" element={<AdminUtilities />} />
          <Route path="/admin/transaction" element={<AdminTransaction />} />
          <Route path="/admin/complaint" element={<AdminComplaint />} />

          {/* AUTHENTICATION */}
          <Route path="/get-started" element={<ChooseMode />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-estate" element={<CreateEstate />} />
          <Route path="/join-estate" element={<JoinEstate />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-password" element={<UpdatePassword />} />

          {/* SUPERADMIN */}
          <Route index element={<SuperAdminOverview />} />
          <Route path="/superadmin-estate" element={<SuperAdminEstate />} />
          <Route path="/superadmin-tasks" element={<SuperAdminTask />} />
          <Route
            path="/superadmin-permission"
            element={<SuperAdminPermission />}
          />
          <Route
            path="/superadmin-complaint"
            element={<SuperAdminComplaint />}
          />

          {/* SLUGS */}
          <Route path="/profile" element={<EstateProfile />} />
          <Route path="/editpackage" element={<EditPackage />} />
        </Routes>
      </BrowserRouter>
    </>
    // )
  );
}

export default App;
