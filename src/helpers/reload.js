import { data } from "./constants.js";
import { renderData } from "./renderer.js";
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const basicInfo = document.getElementById("basicInfo");
const position = document.getElementById("position");
const employer = document.getElementById("employer");
const startDate = document.getElementById("startDate");
const endDate = document.getElementById("endDate");
const roleDescription = document.getElementById("roleDescription");

export function onReload() {
  renderData(data);
  if (firstname) firstname.value = data?.firstname ? data.firstname : "";
  if (lastname) lastname.value = data?.lastname ? data.lastname : "";
  if (email) email.value = data?.email ? data?.email : "";
  if (phone) phone.value = data?.phone ? data?.phone : "";
  if (basicInfo) basicInfo.value = data?.basicInfo ? data?.basicInfo : "";
  if (position) position.value = data?.position ? data?.position : "";
  if (employer) employer.value = data?.employer ? data?.employer : "";
  if (startDate) startDate.value = data?.startDate ? data?.startDate : "";
  if (endDate) endDate.value = data?.endDate ? data?.endDate : "";
  if (roleDescription)
    roleDescription.value = data?.roleDescription ? data?.roleDescription : "";
}
