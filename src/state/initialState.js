const initialState = {
    activeModule: "Module",
    activeLesson: "Lesson",
    activeColor: 0,
    modules: [
      {
        id: 1,
        title: "Introdução do React",
        lessons: [
          { id: 1, title: "Primeira Aula", checked: false },
          { id: 2, title: "Segunda Aula", checked: false },
          { id: 3, title: "Terceira Aula", checked: false },
        ]
      },
      {
        id: 2,
        title: "Aprendendo Redux",
        lessons: [
          { id: 4, title: "Quarta Aula", checked: false },
          { id: 5, title: "Quinta Aula", checked: false },
          { id: 6, title: "Sexta Aula", checked: false },
        ]
      },
      {
        id: 3,
        title: "Praticando React-Redux",
        lessons: [
          { id: 7, title: "Sétima Aula", checked: false },
          { id: 8, title: "Oitava Aula", checked: false },
          { id: 9, title: "Nona Aula", checked: false },
        ]
      },
    ],
  };

export default initialState;