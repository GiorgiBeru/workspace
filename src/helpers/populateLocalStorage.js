export function setLocalStorage(type, name) {
  localStorage.setItem(type, name);
}
export function removeLocalStorage(type) {
  if (localStorage.getItem(type)) localStorage.removeItem(type);
}
