import { useCallback, useState } from "react";
import Content from "./Content";



const UseCallbackDemo = ()=>{   
    const [number, setNumber] = useState(0);
    

    const handleClick = useCallback( ()=>{
        setNumber(prev => prev + 1);
    }, []);

    console.log('Re-render UseCallbackDemo!');
    return(
        <div style={{padding: 32}}>
            <h3>Hello every body!</h3>
            <h1>{number}</h1>
            <Content handleClick={handleClick}/>
        </div>
    )
}

export default UseCallbackDemo;