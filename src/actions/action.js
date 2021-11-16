const selectLesson = (module, lesson, color, id, checked)=>{return {type: 'SELECT_LESSON', module, lesson, color, id, checked}};

export default selectLesson;