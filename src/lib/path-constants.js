export const PathConstants = {
  Home: "/",

  /* Patient */
  PatientLogin: "/patient/login",
  PatientSignup: "/patient/signup",
  PatientHome: "/patient/home",
  AssessmentPage: "/patient/assessment",
  StatusPage: "/patient/status",

  /* Counselor */
  CounselorLogin: "/counselor/login",
  CounselorSignup: "/counselor/signup",
  CounselorHome: "/counselor/home",
  CounselorLOP: "/counselor/patients",

  //
  CounselorPatientDetails: "/counselor/patient/:patientId",
  Internal_CounselorPatientDetails: "/counselor/patient/",

  /* Doctor */
  DoctorLogin: "/doctor/login",
  DoctorSignup: "/doctor/signup",
  DoctorHome: "/doctor/home",
  DoctorLOP: "/doctor/patients",
  DoctorPatientDetails: "/doctor/patient/:patientId",
  Internal_DoctorPatientDetails: "/doctor/patient/",
};
