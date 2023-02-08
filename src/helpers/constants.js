export const data = {
  firstname: localStorage.getItem("firstname")
    ? localStorage.getItem("firstname")
    : null,
  lastname: localStorage.getItem("lastname")
    ? localStorage.getItem("lastname")
    : null,
  photo: localStorage.getItem("photo") ? localStorage.getItem("photo") : null,
  email: localStorage.getItem("email") ? localStorage.getItem("email") : null,
  phone: localStorage.getItem("phone") ? localStorage.getItem("phone") : null,
  basicInfo: localStorage.getItem("basicInfo")
    ? localStorage.getItem("basicInfo")
    : null,
  position: localStorage.getItem("position")
    ? localStorage.getItem("position")
    : null,
  employer: localStorage.getItem("employer")
    ? localStorage.getItem("employer")
    : null,
};
