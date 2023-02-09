import { onReload } from "../../helpers/reload.js";
import { populateData } from "../../helpers/fireEvent.js";
import {
  validatePosition,
  validateDate,
  validateExistance,
} from "../../helpers/validators.js";
import { checkPageValidity } from "../../helpers/pageValidity.js";
import { data } from "../../helpers/constants.js";

window.addEventListener("load", () => {
  onReload();
});

document.getElementById("position").addEventListener("focusout", () => {
  validatePosition("position");
  populateData("position");
});

document.getElementById("employer").addEventListener("focusout", () => {
  validatePosition("employer");
  populateData("employer");
});

document.getElementById("startDate").addEventListener("focusout", () => {
  validateDate("startDate");
  populateData("startDate");
});

document.getElementById("endDate").addEventListener("focusout", () => {
  validateDate("endDate");
  populateData("endDate");
});

document.getElementById("roleDescription").addEventListener("focusout", () => {
  validateExistance("roleDescription");
  populateData("roleDescription");
});

document.getElementById("goBack").addEventListener("click", () => {
  window.location.href = "../personal-page/personal.html";
});

document.getElementById("goNext").addEventListener("click", () => {
  checkPageValidity(data);
  // window.location.href = "../personal-page/personal.html";
});
