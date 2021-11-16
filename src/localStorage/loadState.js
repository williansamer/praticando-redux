import initialState from "../state/initialState";

const SAVE_ITEM = "saveItem";

export default function loadState() {
  const actualState = localStorage.getItem(SAVE_ITEM);
  return actualState ? JSON.parse(actualState) : initialState;
}
