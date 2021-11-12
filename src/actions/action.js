const selectLesson = (module, lesson, color, id, checked, img)=>{return {type: 'SELECT_LESSON', id, module, lesson, color, checked, img}};

export default selectLesson;