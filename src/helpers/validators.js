import { removeLocalStorage } from "./populateLocalStorage.js";

export let photoIsValid = false;
export function requirePhoto(val) {
  photoIsValid = !!val;
}

export function requireEmail(val) {
  if (!val) {
    removeLocalStorage("email");
    return false;
  }
  if (!val.endsWith("@redberry.ge")) {
    removeLocalStorage("email");
    return false;
  }
  return true;
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

export function validatePhoneNumber(val) {
  if (!val) {
    removeLocalStorage("phone");
    return false;
  }
  if (val.length > 4) {
    return /^\+995\d+$/.test(val) ? true : removeLocalStorage("phone");
  }
}

export function validatePosition(type, val) {
  if (!val) {
    removeLocalStorage(type);
    return false;
  }
  if (val.length < 2) {
    removeLocalStorage(type);
    return false;
  }
  return true;
}
