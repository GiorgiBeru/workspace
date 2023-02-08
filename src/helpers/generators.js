import { removeLocalStorage } from "../helpers/populateLocalStorage.js";

export function generateErrors(type, err, container) {
  removeLocalStorage(type);
  err.map((item) => {
    const newPTag = document.createElement("p");
    newPTag.innerHTML = `${item}`;
    newPTag.style.color = "red";
    container.appendChild(newPTag);
  });
}
