const selectLesson = (id, module, lesson, color, checked, img)=>{return {type: 'SELECT_LESSON', id, module, lesson, color, checked, img}};

export default selectLesson;