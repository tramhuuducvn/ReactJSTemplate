import React, {useState} from 'react'
import Content from './Content';
import { CountDownTimer } from './CountDownTimer';
import { WidthEffect } from './WidthEffect';


const  UseEffectDemo = () => {
    const [show, setShow] = useState(false);
    return (
        <div style={{padding: 32}}>
            <h1>Hello World</h1>
            <button onClick={()=>setShow(!show)}>
                toggle
            </button>
            {show && <CountDownTimer />}
            {/* <Content /> */}
        </div>
    )
}

export default UseEffectDemo;
