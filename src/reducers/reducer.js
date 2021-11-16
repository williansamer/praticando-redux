import initialState from "../state/initialState";

export default function reducer(state = initialState, action) {

    //console.log(state.modules[0].lessons[0].checked);

    switch (action.type) {
      case "SELECT_LESSON":
        return {
          ...state,
          activeModule: action.module,
          activeLesson: action.lesson,
          activeColor: action.color,
          checked: action.checked,
        };
      default:
        return state;
    }
}