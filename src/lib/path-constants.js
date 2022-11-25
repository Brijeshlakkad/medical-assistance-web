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
  CounselorSchedule: "/counselor/view-schedule",
  CounselorToDoctor: "/counselor/doctors/:patientId",
  Internal_CounselorToDoctor: "/counselor/doctors/",
  CounselorPatientDetails: "/counselor/patient/:patientId",
  Internal_CounselorPatientDetails: "/counselor/patient/",

  /* Doctor */
  DoctorLogin: "/doctor/login",
  DoctorSignup: "/doctor/signup",
  DoctorHome: "/doctor/home",
  DoctorLOP: "/doctor/patients",
  DoctorSchedule: "/doctor/view-schedule",
  DoctorPatientDetails: "/doctor/patient/:patientId",
  Internal_DoctorPatientDetails: "/doctor/patient/",

  /* Admin */
  AdminLogin: "/admin",


  /* Social Media Links */
  Instagram: "../../https://www.instagram.com/"
};
