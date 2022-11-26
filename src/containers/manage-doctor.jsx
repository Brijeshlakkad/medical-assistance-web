import React from "react";
import FooterComponent from "../components/footer/footer";
import { ManagerEditDoctor } from "../components/manager-edit-doctor/manager-edit-doctor";
import { ManagerSidebar } from "../components/manager-sidebar/manager-sidebar";
import { SideNavContainerComponent } from "../components/side-nav-container/side-nav-container";

export default function ManageDoctor() {
  return (
    <>
      <SideNavContainerComponent>
        <ManagerSidebar />
        <ManagerEditDoctor />
      </SideNavContainerComponent>
      <FooterComponent />
    </>
  );
}
