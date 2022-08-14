
import {memo} from 'react';

const Content = ({handleClick})=>{
    console.log('Re-render Content Component!');
    return(
        <div>
            <button onClick={handleClick}>Click!</button>
            <p>This is react js tutorials!</p>
        </div>
    )
}

export default memo(Content);