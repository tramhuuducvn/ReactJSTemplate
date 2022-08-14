import React, {useEffect, useRef} from 'react'
import Video from './Video'

export const ImperativeHandle = () => {
    const videoRef = useRef();
    

    const handlePlay = ()=>{
        videoRef.current.play();
    }
    
    const handlePause = ()=>{
        videoRef.current.pause();
    }


    return (
        <div style={{padding: 32}}>
            <h1>ImperativeHandle</h1>
            <Video
                ref={videoRef}
            />
            <button onClick={handlePlay}>Play</button>
            <button onClick={handlePause}>Pause</button>
        </div>
    )
}
