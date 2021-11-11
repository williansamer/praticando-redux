import React from 'react'
import { useSelector } from 'react-redux'

export default function Video() {

    const activeVideo = useSelector(state => state)

    return (
        <div className={activeVideo.activeColor}>
            <div className="video-children ">
            <h1>VIDEO</h1>
                {activeVideo.activeModule} <br />
                {activeVideo.activeLesson}
            </div>
        </div>
    )
}
