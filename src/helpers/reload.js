import { data } from "./constants.js";
import { renderData } from "./renderer.js";
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const basicInfo = document.getElementById("basicInfo");
const position = document.getElementById("position");
const employer = document.getElementById("employer");

export function onReload() {
  renderData(data);
  if (firstname) firstname.value = data?.firstname ? data.firstname : "";
  if (lastname) lastname.value = data?.lastname ? data.lastname : "";
  if (email) email.value = data?.email ? data?.email : "";
  if (phone) phone.value = data?.phone ? data?.phone : "";
  if (basicInfo) basicInfo.value = data?.basicInfo ? data?.basicInfo : "";
  if (position) position.value = data?.position ? data?.position : "";
  if (employer) employer.value = data?.employer ? data?.employer : "";
}
