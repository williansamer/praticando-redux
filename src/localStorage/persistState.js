const SAVE_ITEM = "saveItem";

export default function persistState(state){
  localStorage.setItem(SAVE_ITEM, JSON.stringify(state));
}