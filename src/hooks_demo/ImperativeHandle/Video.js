import video1 from '../../data/dragon.mp4';
// import video2 from '../../data/golden.mp4';

import {useRef, forwardRef, useImperativeHandle} from 'react';

function Video(props, ref){
    const videoRef = useRef();
    useImperativeHandle(ref, ()=>({
        play(){
            videoRef.current.play();
        },

        pause(){
            videoRef.current.pause();
        }
    }));
    
    return (
        <video 
            src={video1} 
            ref={videoRef}
            width={280}
        />
    )
}


export default forwardRef(Video);
