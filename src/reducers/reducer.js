
const initialState = {
  activeModule: "Module",
  activeLesson: "Lesson",
  activeColor: "video color-default",
  modules: [
    {
      id: 1,
      title: "Introdução do React",
      lessons: [
        { id: 1, title: "Primeira Aula" },
        { id: 2, title: "Segunda Aula" },
        { id: 3, title: "Terceira Aula" },
      ],
      color: "yellow video"
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 1, title: "Quarta Aula" },
        { id: 2, title: "Cinca Aula" },
        { id: 3, title: "Sexta Aula" },
      ],
      color: "green video"
    },
    {
      id: 3,
      title: "Praticando React-Redux",
      lessons: [
        { id: 1, title: "Sétima Aula" },
        { id: 2, title: "Oitava Aula" },
        { id: 3, title: "Nona Aula" },
      ],
      color: "red video"
    },
  ],
};

export default function reducer(state = initialState, action) {

    console.log(action);

    switch (action.type) {
        case "SELECT_LESSON":
            return {...state, activeModule: action.module, activeLesson: action.lesson, activeColor: action.color};
        default:
            return state;
    }
}
