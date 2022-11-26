import React from "react";
import FooterComponent from "../components/footer/footer";
import { ManagerEditCounselor } from "../components/manager-edit-counselor/manager-edit-counselor";
import { ManagerSidebar } from "../components/manager-sidebar/manager-sidebar";
import { SideNavContainerComponent } from "../components/side-nav-container/side-nav-container";

export default function ManageCounselor() {
  return (
    <>
      <SideNavContainerComponent>
        <ManagerSidebar />
        <ManagerEditCounselor />
      </SideNavContainerComponent>
      <FooterComponent />
    </>
  );
}
