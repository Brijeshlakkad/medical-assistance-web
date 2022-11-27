import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AddCounselorComponent from "../components/add-counselor-component/add-counselor-component";
import FooterComponent from "../components/footer/footer";
import { ManagerSidebar } from "../components/manager-sidebar/manager-sidebar";
import { SideNavContainerComponent } from "../components/side-nav-container/side-nav-container";

export default function ManagerAddCounselor() {
  const [user, setUser] = useState({
    fullName: "",
    emailAddress: "",
    addressLine: "",
    city: "",
    province: "",
    country: "",
    dateOfBirth: "",
    phoneNumber: "",
    password: "",
    rePassword: "",
  });

  const onFieldChange = (fieldName, value) => {
    setUser({
      ...user,
      [fieldName]: value,
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(onLoadUserLoginSignupPage());
  }, [dispatch]);

  const onSubmit = (e) => {
    //  dispatch(signup(user, UserRole.PATIENT));
  };

  // const signupState = useSelector((state) => state.user.state);
  //const errorMessage = useSelector((state) => state.user.errorMessage);

  return (
    <>
      <SideNavContainerComponent>
        <ManagerSidebar />
        <AddCounselorComponent
          user={user}
          onFieldChange={onFieldChange}
          onSubmit={onSubmit}
          //signupState={signupState}
          //  errorMessage={errorMessage}
        />
      </SideNavContainerComponent>
      <FooterComponent />
    </>
  );
}