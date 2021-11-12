import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import selectLesson from '../actions/action';

export default function SideBar() {

    const modules = useSelector(state => state.modules)
    useSelector(state => state.img) //useSelector is a hook that allows us to access the current state of the store

    const dispatch = useDispatch()

    function handleClick(module, lesson, color, id, checked, img){
        
        dispatch(selectLesson(module, lesson, color, id, checked, img))
    }

    return (
      <div className="side-bar">
        <h1>Side Bar</h1>
        {modules.map((module) => {
          return (
            <ul key={module.id}>
              <br /> {module.title} <br />
              {module.lessons.map((lesson) => {
                return <li key={lesson.id} onClick={()=>handleClick(module.title, lesson.title, module.color,lesson.id, lesson.checked, lesson.img)} key={lesson.id}>{lesson.img}{lesson.title} <br /></li>;
              })}
            </ul>
          );
        })}
      </div>
    );
}
