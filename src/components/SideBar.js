import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import selectLesson from '../actions/action';

export default function SideBar() {

    const modules = useSelector(state => state.modules)
    const dispatch = useDispatch()

    return (
      <div className="side-bar">
        <h1>Side Bar</h1>
        {modules.map((module) => {
          return (
            <ul key={module.id}>
              <br /> {module.title} <br />
              {module.lessons.map((lesson) => {
                return <li onClick={()=>dispatch(selectLesson(module.title, lesson.title, module.color))} key={lesson.id}>{lesson.title} <br /></li>;
              })}
            </ul>
          );
        })}
      </div>
    );
}