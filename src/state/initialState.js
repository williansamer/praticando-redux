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

export default initialState;