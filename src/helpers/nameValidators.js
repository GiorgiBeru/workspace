import { generateErrors } from "./generators.js";
import { setLocalStorage } from "./populateLocalStorage.js";

export function checkValidation(val) {
  const name = document.getElementById(val).value;
  const nameContainer = document.getElementById(
    `${val}-error-message-container`
  );
  checkForErrors(val, name, nameContainer);
}

function checkForErrors(type, name, container) {
  const errorMessageArray = validateName(name);
  removeExistingChildren(container);
  errorMessageArray.length
    ? generateErrors(type, errorMessageArray, container)
    : setLocalStorage(type, name);
}

function removeExistingChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function validateName(name) {
  const errorTextArray = [];
  const GeorgianRegex = /^[ა-ჰ]+$/;

  if (!name) {
    errorTextArray.push("სახელის ველი სავალდებულოა");
  }

  if (name.length < 2) {
    errorTextArray.push("უნდა შეიცავდეს მინიმუმ ორ ასო-ბგერას");
  }

  if (!GeorgianRegex.test(name)) {
    errorTextArray.push("უნდა შეიცავდეს ქართულ ასო-ბგერებს");
  }

  return errorTextArray;
}
