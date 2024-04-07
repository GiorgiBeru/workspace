function retrieveItem(key) {
  return localStorage.getItem(key) ? localStorage.getItem(key) : null;
}

export const data = {
  firstname: retrieveItem("firstname"),
  lastname: retrieveItem("lastname"),
  photo: retrieveItem("photo"),
  email: retrieveItem("email"),
  phone: retrieveItem("phone"),
  basicInfo: retrieveItem("basicInfo"),
  position: retrieveItem("position"),
  employer:retrieveItem("employer"),
  startDate: retrieveItem("startDate"),
  endDate: retrieveItem("endDate"),
  roleDescription: retrieveItem("roleDescription"),
};
