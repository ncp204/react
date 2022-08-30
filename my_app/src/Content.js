import React, { useEffect, useState } from 'react'

/*
1. Update DOM
  -title
2. Call API

3. Listen DOM events
  - Scroll
  - Resize
4. Clean up
  - Remove listener/ Unsubcribe
  - Clean timer
*/

// 1. useEffect(callback)
// - Gọi callback mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM 
// 2. useEffect(callback, [])
// - Chỉ gọi callback 1 gần sau khi component mounted
// 3. useEffect(callback, [dependency])
// - Callback sẽ được gọi lại mỗi khi dependency thay đổi

// -----------------------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi componet unmounted 
// 3. Cleanup function luôn được gọi trước khi callback được gọi(trừ lần mounted đầu tiên)

const tabs = ['posts', 'comments', 'albums'];

function Content() {
    // const [title, setTitle] = useState('');
    // const [posts, setPosts] = useState([]);
    // const [type, setType] = useState('posts');
    // const [showGoToTop, setShowToTop] = useState(false);
    // const [width, setWidth] = useState(window.innerWidth);
    // const [countdown, setCountdown] = useState(5);

    // useEffect(() => {
    //     console.log('Title change: ');
    //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //         .then(res => res.json()
    //             .then(data => {
    //                 setPosts(data)
    //             }))
    // }, [type]);

    // // scroll
    // useEffect(() => {
    //     const handleScroll = () => {
    //         // if (window.scrollY >= 200) {
    //         //     // show
    //         //     setShowToTop(true)
    //         // } else {
    //         //     //hide
    //         //     setShowToTop(false)
    //         // }
    //         setShowToTop(window.scrollY >= 200);
    //     }

    //     window.addEventListener('scroll', handleScroll)
    //     // Cleanup function
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }

    // }, [])

    // // resize
    // useEffect(() => {
    //     const hanldeResize = () => {
    //         setWidth(window.innerWidth);
    //     }
    //     window.addEventListener('resize', hanldeResize)
    //     // Cleanup function
    //     return () => {
    //         window.removeEventListener('resize', hanldeResize)
    //     }
    // })

    // // timer
    // useEffect(() => {
    //     const timerId = setInterval(() => {
    //         setCountdown(prev => {
    //             return prev > 0 ? prev - 1 : prev;
    //         })
    //     }, 1000)

    //     return () => {
    //         clearInterval(timerId)
    //     }
    // }, [])


    // const [avatar, setAvatar] = useState();
    // const handlePreviewAvatar = (e) => {
    //     const file = e.target.files[0];
    //     file.preview = URL.createObjectURL(file);
    //     setAvatar(file);
    // }

    // useEffect(() => {
    //     return () => {
    //         avatar && URL.revokeObjectURL(avatar.preview);
    //     }
    // }, [avatar])

    const lessons = [
        {
            id: 1,
            name: 'ReactJS la gi? Tai sao nen hoc'
        },
        {
            id: 2,
            name: 'SPA/MPA la gi?'
        },
        {
            id: 3,
            name: 'Arrow function'
        }
    ]

    const [lessonId, setLessonId] = useState(1);
    useEffect(()=> {
        const handleComment = ({detail}) =>{
            console.log(detail);
        }
        window.addEventListener(`lesson-${lessonId}`, handleComment)

        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        // <div>
        //     <h1>{countdown}</h1>
        //     <h1>{width}</h1>
        //     {tabs.map(tab => (
        //         <button
        //             key={tab}
        //             style={
        //                 type === tab ? {
        //                     color: '#fff',
        //                     backgroundColor: '#333'
        //                 } : {}
        //             }
        //             onClick={() => { setType(tab) }}
        //         >
        //             {tab}
        //         </button>
        //     ))}
        //     <input value={title} onChange={e => setTitle(e.target.value)} />
        //     <ul>
        //         {posts.map(post => (
        //             <li key={post.id}>{post.title || post.name}</li>
        //         ))}
        //     </ul>
        //     {showGoToTop && (
        //         <button
        //             style={{
        //                 position: 'fixed',
        //                 right: 20,
        //                 bottom: 20,
        //             }}
        //         >
        //             Go to top
        //         </button>
        //     )}
        // </div>

        // <div>
        //     <input
        //     type='file'
        //     multiple
        //     onChange={handlePreviewAvatar}
        //     />

        //     {avatar && (
        //         <img src={avatar.preview} alt="" width="80%" />
        //     )}
        // </div>

        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? 'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Content;
