import React,{useState} from 'react';
import {useSpring, animated, config} from 'react-spring'

const Interpolate = () => {
    const [on , setOn] = useState(false)

    const {xy, c}= useSpring({
        
        xy: on? [400,200]: [0,0],
        c: on ? 1: 0,
        
        config:config.molasses
    })
    

    return (
        <div className="interpolate">
            <animated.h1 
                style ={{
                    color : c.interpolate({range: [0,0.5,1], output:['green', 'red','blue']}).interpolate(c=>c),
                    transform : xy.interpolate((x,y)=>`translate(${x}px,${y}px`)
                }}
            > 
                
                i can change color
            </animated.h1>
            <button onClick={()=>{setOn(!on)}}>click</button>
        </div>
    )
}

export default Interpolate;
