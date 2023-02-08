import { checkValidation } from "../../helpers/nameValidators.js";
import {
  requirePhoto,
  photoIsValid,
  requireEmail,
} from "../../helpers/validators.js";
import {
  removeLocalStorage,
  setLocalStorage,
} from "../../helpers/populateLocalStorage.js";
import { onReload } from "../../helpers/reload.js";
import { populateData } from "../../helpers/fireEvent.js";
import { stringifyPhotoObject } from "../../helpers/validators.js";
import { validatePhoneNumber } from "../../helpers/validators.js";
import { data } from "../../helpers/constants.js";
import { checkPageValidity } from "../../helpers/pageValidity.js";

window.addEventListener("load", () => {
  onReload();
});

document.getElementById("mainPage").addEventListener("click", () => {
  window.location.href = "../../index.html";
});

document.getElementById("firstname").addEventListener("input", () => {
  checkValidation("firstname");
  populateData("firstname");
});

document.getElementById("lastname").addEventListener("input", () => {
  checkValidation("lastname");
  populateData("lastname");
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (checkPageValidity(data))
    window.location.href = "../experience/experience.html";
});

document.getElementById("userPhoto").addEventListener("change", (e) => {
  const photo = e?.target?.files[0];
  requirePhoto(photo);
  stringifyPhotoObject(photo).then((val) => {
    if (photoIsValid) {
      setLocalStorage("photo", val);
      populateData("photo");
    }
  });
});

document.getElementById("email").addEventListener("input", () => {
  const email = document.getElementById("email").value;
  if (requireEmail(email)) setLocalStorage("email", email);
  populateData("email");
});

document.getElementById("phone").addEventListener("input", () => {
  const phone = document.getElementById("phone").value;
  phone.length > 4
    ? validatePhoneNumber(phone)
      ? setLocalStorage("phone", phone)
      : alert("phone number should start with +995")
    : removeLocalStorage("phone");
  populateData("phone");
});

document.getElementById("basicInfo").addEventListener("input", () => {
  const basicInfo = document.getElementById("basicInfo").value;
  setLocalStorage("basicInfo", basicInfo);
  populateData("basicInfo");
});
