import { addErrorClasslist, removeErrorClassList } from "./classLists.js";
import { removeLocalStorage, setLocalStorage } from "./populateLocalStorage.js";

export function requirePhoto(val) {
  if (!!val) setLocalStorage("validPhoto", true);
}

export function checkEmailValidity() {
  const emailElement = document.getElementById("email");
  const email = emailElement.value;
  if (!email || !email.endsWith("@redberry.ge")) {
    removeLocalStorage("email");
    addErrorClasslist(emailElement);
  } else {
    setLocalStorage("email", email);
    removeErrorClassList(emailElement);
  }
}

export function stringifyPhotoObject(photoObj) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(photoObj);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
}

export function validatePhoneNumber() {
  const phoneElement = document.getElementById("phone");
  const phone = phoneElement.value;
  if (!phone || !/^\+995\d+$/.test(phone) || phone.length !== 13) {
    removeLocalStorage("phone");
    addErrorClasslist(phoneElement);
  } else {
    setLocalStorage("phone", phone);
    removeErrorClassList(phoneElement);
  }
}

export function validatePosition(type) {
  const positionElement = document.getElementById(type);
  const position = document.getElementById(type).value;
  if (!position || position.length < 2) {
    removeLocalStorage(type);
    addErrorClasslist(positionElement);
  } else {
    setLocalStorage(type, position);
    removeErrorClassList(positionElement);
  }
}

export function validateDate(type) {
  const DateElement = document.getElementById(type);
  const Date = DateElement.value;
  if (!Date || Date.length < 8) {
    removeLocalStorage(type);
    addErrorClasslist(DateElement);
  } else {
    setLocalStorage(type, Date);
    removeErrorClassList(DateElement);
  }
}

export function validateExistance(type) {
  const existingElement = document.getElementById(type);
  const existing = existingElement.value;
  if (!existing) {
    removeLocalStorage(type);
    addErrorClasslist(existingElement);
  } else {
    setLocalStorage(type, existing);
    removeErrorClassList(existingElement);
  }
}

export function checkNameValidation(type) {
  const nameElement = document.getElementById(type);
  const name = nameElement.value;
  const GeorgianRegex = /^[ა-ჰ]+$/;
  if (!name || name.length < 2 || !GeorgianRegex.test(name)) {
    removeLocalStorage(type);
    addErrorClasslist(nameElement);
  } else {
    setLocalStorage(type, name);
    removeErrorClassList(nameElement);
  }
}
