
const initialState = {
  activeModule: "Module",
  activeLesson: "Lesson",
  activeColor: "video color-default",
  modules: [
    {
      id: 1,
      title: "Introdução do React",
      lessons: [
        { id: 1, title: "Primeira Aula", checked: false, img: <img alt="off" src="../assets/off.png" /> },
        { id: 2, title: "Segunda Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
        { id: 3, title: "Terceira Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
      ],
      color: "yellow video"
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 4, title: "Quarta Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
        { id: 5, title: "Quinta Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
        { id: 6, title: "Sexta Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
      ],
      color: "green video"
    },
    {
      id: 3,
      title: "Praticando React-Redux",
      lessons: [
        { id: 7, title: "Sétima Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
        { id: 8, title: "Oitava Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
        { id: 9, title: "Nona Aula", checked: false, img: <img alt="off" src="../assets/off.png" />  },
      ],
      color: "red video"
    },
  ],
};

export default function reducer(state = initialState, action) {

    console.log(state.modules[0].lessons[0].checked);
    console.log(state.modules[0].lessons[0].img);

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