import React from 'react'
import { connect } from 'react-redux'
import selectLesson from '../actions/action';

function SideBar(props) {

  const [checking, setChecking] = React.useState(props.modules.map(module => {
    return module.lessons.map(lesson => {
      return lesson.checked
    })
  }))

  function handleCheckClick(module, lesson, color, id) {
    let newCheck = props.modules.filter((module) => {
      module.lessons.filter((lesson) => {
        if (lesson.id === id) {
          lesson.checked = !lesson.checked;
          return lesson.checked;
        }})});
    handleClick(module, lesson, color, id, newCheck);
  }

  function handleClick(module, lesson, color, id, checked){
    setChecking(!checking)
    props.selectLesson(module, lesson, color, id, checked)
  }

  return (
    <div className="side-bar">
      <h1>Side Bar</h1>
      {props.modules.map((module) => {
        return (
          <ul key={module.id}>
            <br /> {module.title} <br />
            {module.lessons.map((lesson) => {
              return <li key={lesson.id} onClick={()=>handleCheckClick(module.title, lesson.title, module.id, lesson.id)}>{lesson.checked ? <img alt="on" src="./assets/on.png" /> : <img alt="off" src="./assets/off.png" />}{lesson.title} <br /></li>;
            })}
          </ul>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modules: state.modules
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectLesson: (module, lesson, color, id, checked) => dispatch(selectLesson(module, lesson, color, id, checked))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);