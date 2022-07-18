import React, {useEffect, useState} from 'react'

// Events: Add / Remove event listener
// Observer pattern: Subcribe / UnSubcribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// Mounted, unmounted
// ===
// Call API

/**
    1. Update DOM
    2. Call API
    3. Listen DOM events
    4. Cleanup
*/


// 1. useEffect(callback)
// - Gọi callback mỗi khi re-render
// 2. useEffect(callback, [])
// -
// 3. useEffect(callback, [deps])



//-------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. 

const Content = () => {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [showGoToTop, setShowGoToTop] = useState(false)

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                return res.json()
            })
            .then(posts => {
                console.log(posts);
                setPosts(posts)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    console.log('re-render');


    useEffect(()=>{
        
        const handleScroll = ()=>{
            console.log('handle-scroll');
            setShowGoToTop(window.scrollY >= 200);
        }
        window.addEventListener('scroll', handleScroll)
        console.log('use-effect');
        return ()=>{
            console.log('Unmounting');
            window.removeEventListener('scroll', handleScroll)
        }
    },[])

    return (
        <div>
            <input 
                value={title}
                onChange={e=>setTitle(e.target.value)}
            />
            <ul>
                {
                    posts.map(post => {
                        return (
                            <li key={post.id}>{post.title}</li>
                        )
                    })
                }
            </ul>
            {
                showGoToTop && 
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20,
                    }}
                >
                    Go to top
                </button>
            }
        </div>
    )
}

export default Content;
