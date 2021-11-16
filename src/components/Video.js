import React from "react";
import { connect } from "react-redux";

function Video(props) {
  return (
    <div
      className={
        props.moduleId === 1
          ? "yellow video"
          : props.moduleId === 2
          ? "green video"
          : props.moduleId === 3
          ? "red video"
          : "video color-default"
      }
    >
      <div className="video-children ">
        <h1>VIDEO</h1>
        {props.activeModule} <br />
        {props.activeLesson}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    activeModule: state.activeModule,
    activeLesson: state.activeLesson,
    moduleId: state.activeColor,
  };
}

export default connect(mapStateToProps)(Video);
