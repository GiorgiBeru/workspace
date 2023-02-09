export function addErrorClasslist(element) {
  element.classList.add("class", "CV-error");
  element.classList.add("class", "border");
}

export function removeErrorClassList(element) {
  element.classList.remove("class", "CV-error");
  element.classList.remove("class", "border");
}
