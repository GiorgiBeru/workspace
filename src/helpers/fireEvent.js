import { data } from "../helpers/constants.js";
import { obs1$ } from "../helpers/renderer.js";
export function populateData(type) {
  data[type] = localStorage.getItem(type);
  obs1$.next(data);
}
