import initialState from "../state/initialState";

export default function reducer(state = initialState, action) {

    //console.log(state.modules[0].lessons[0].checked);
    //console.log(state.modules[0].lessons[0].img);

    switch (action.type) {
      case "SELECT_LESSON":
        return {
          ...state,
          activeModule: action.module,
          activeLesson: action.lesson,
          activeColor: action.color,
          checked: state.modules.filter((module) => {
            module.lessons.filter((lesson) => {
              if (lesson.id === action.id) {
                lesson.checked = !lesson.checked;
                //console.log(lesson.checked);
                return lesson.checked;
              }
            });
          }),
          img: state.modules.filter((module) => {
            module.lessons.filter((lesson) => {
              if (lesson.id === action.id) {
                if (lesson.checked) {
                  lesson.img = <img alt="on" src="../assets/on.png" />;
                } else {
                  lesson.img = <img alt="off" src="../assets/off.png" />;
                }
                //console.log(lesson.img);
                return lesson.img;
              }
            });
          }),
        };
      default:
        return state;
    }
}