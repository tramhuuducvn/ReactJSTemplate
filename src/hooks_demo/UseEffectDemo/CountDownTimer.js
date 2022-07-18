import React, {useEffect, useState} from 'react'

export const CountDownTimer = () => {
    const [countdown, setCountdown] = useState(180);

    useEffect(()=>{
        const timerId = setInterval(()=>{
            setCountdown(prev => prev - 1);
        }, 1000)

        return ()=>clearInterval(timerId)

    }, [])
    
    console.log('re-render');
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM
// 3. Render lại UI
// 4. Gọi cleaup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM
// 3. Gọi cleaup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI.
