import React from "react";
import FooterComponent from "../components/footer/footer";
import { ManagerEditPatient } from "../components/manager-edit-patient/manager-edit-patient";
import { ManagerSidebar } from "../components/manager-sidebar/manager-sidebar";
import { SideNavContainerComponent } from "../components/side-nav-container/side-nav-container";

export default function ManagePatient() {
  return (
    <>
      <SideNavContainerComponent>
        <ManagerSidebar />
        <ManagerEditPatient />
      </SideNavContainerComponent>
      <FooterComponent />
    </>
  );
}
