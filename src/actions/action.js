const selectLesson = (module, lesson, color, id, checked)=>{return {type: 'SELECT_LESSON', module, lesson, color, id, checked}};
const checkClick = (id, checked)=>{return {type: 'CHECK_CLICK', id, checked}};

export {selectLesson, checkClick};