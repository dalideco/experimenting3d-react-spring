import React,{useState} from 'react';
import {useSpring, animated} from 'react-spring'

const Interpolate = () => {
    const [on , setOn] = useState(false)

    const {xy, c}= useSpring({
        from:{xy:[0,0],c:'green'},
        xy: on? [400,200]: [0,0],
        c: on ? 'red': 'green'
    })
    

    return (
        <div className="interpolate">
            <animated.h1 
                style ={{
                    color : c.interpolate(c=> c),
                    transform : xy.interpolate((x,y)=>`translate(${x}px,${y}px)`)
                }}
            > 
                
                i can change color
            </animated.h1>
            <button onClick={()=>{setOn(!on)}}>click</button>
        </div>
    )
}

export default Interpolate;
