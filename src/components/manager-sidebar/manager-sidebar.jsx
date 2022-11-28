import React from "react";
import { Link } from "react-router-dom";
import { PathConstants } from "../../lib/path-constants";
import "./manager-sidebar.css";

export function ManagerSidebar() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          width: "20%",
          backgroundColor: "#f1f1f1",
          // height: "100%",
          minHeight: "100vh",
          margin: "0px",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Admin Dashboard</h2>
        <div className="sidebar-menu">
          <Link className="sidebar-links">Report</Link>
          <Link className="sidebar-links" to={PathConstants.ManagePatient}>
            Manage Patient
          </Link>
          <Link className="sidebar-links" to={PathConstants.ManageDoctor}>
            Manage Doctor
          </Link>
          <Link className="sidebar-links" to={PathConstants.ManageCounselor}>
            Manage Counselor
          </Link>
          <Link className="sidebar-links">Log Out</Link>
        </div>
      </div>
    </>
  );
}
