export function checkPageValidity(data) {
  let valid = true;
  for (const i in data) {
    if (document.getElementById(i)) {
      if (i !== "basicInfo") {
        if (!data[i]) valid = false;
        if (i !== "photo") {
          data[i]
            ? document.getElementById(i).classList.remove("CV-error")
            : document
                .getElementById(i)
                .setAttribute("class", "CV-error border");
        }
      }
    }
  }
  return valid;
}
