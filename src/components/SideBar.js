import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import selectLesson from '../actions/action';

export default function SideBar() {

    const modules = useSelector(state => state.modules)
    const dispatch = useDispatch()

    function handleClick(id, module, lesson, color, checked, img){
        
        dispatch(selectLesson(id, module, lesson, color, checked, img))
    }

    return (
      <div className="side-bar">
        <h1>Side Bar</h1>
        {modules.map((module) => {
          return (
            <ul key={module.id}>
              <br /> {module.title} <br />
              {module.lessons.map((lesson) => {
                return <li onClick={()=>handleClick(lesson.id, module.title, lesson.title, module.color, lesson.checked, lesson.img)} key={lesson.id}>{lesson.img}{lesson.title} <br /></li>;
              })}
            </ul>
          );
        })}
      </div>
    );
}