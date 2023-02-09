import {
  requirePhoto,
  checkEmailValidity,
  checkNameValidation,
  validatePhoneNumber,
  validateExistance,
  stringifyPhotoObject,
} from "../../helpers/validators.js";
import { setLocalStorage } from "../../helpers/populateLocalStorage.js";
import { onReload } from "../../helpers/reload.js";
import { populateData } from "../../helpers/fireEvent.js";
import { data } from "../../helpers/constants.js";
import { checkPageValidity } from "../../helpers/pageValidity.js";

window.addEventListener("load", () => {
  onReload();
});

document.getElementById("mainPage").addEventListener("click", () => {
  window.location.href = "../../index.html";
});

document.getElementById("firstname").addEventListener("focusout", () => {
  checkNameValidation("firstname");
  populateData("firstname");
});

document.getElementById("lastname").addEventListener("focusout", () => {
  checkNameValidation("lastname");
  populateData("lastname");
});

document.getElementById("nextPage").addEventListener("click", () => {
  if (!localStorage.getItem("validPhoto")) alert("ფოტო სავალდებულოა");
  if (checkPageValidity(data))
    window.location.href = "../experience/experience.html";
});

document.getElementById("userPhoto").addEventListener("change", (e) => {
  const photo = e?.target?.files[0];
  requirePhoto(photo);
  if (photo) {
    stringifyPhotoObject(photo).then((val) => {
      setLocalStorage("photo", val);
      populateData("photo");
    });
  }
});

document.getElementById("email").addEventListener("focusout", () => {
  checkEmailValidity();
  populateData("email");
});

document.getElementById("phone").addEventListener("focusout", () => {
  validatePhoneNumber();
  populateData("phone");
});

document.getElementById("basicInfo").addEventListener("focusout", () => {
  validateExistance("basicInfo");
  populateData("basicInfo");
});
