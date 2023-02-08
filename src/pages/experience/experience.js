import { onReload } from "../../helpers/reload.js";
import { populateData } from "../../helpers/fireEvent.js";
import { setLocalStorage } from "../../helpers/populateLocalStorage.js";
import { validatePosition } from "../../helpers/validators.js";
window.addEventListener("load", () => {
  onReload();
});

document.getElementById("position").addEventListener("input", () => {
  const position = document.getElementById("position").value;
  if (validatePosition("position", position))
    setLocalStorage("position", position);
  populateData("position");
});
document.getElementById("employer").addEventListener("input", () => {
  const employer = document.getElementById("employer").value;
  if (validatePosition("employer", employer))
    setLocalStorage("employer", employer);
  populateData("employer");
});
