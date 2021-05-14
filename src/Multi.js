import React from 'react'
import {useSpring,animated} from 'react-spring'

function Multi(){

    const myAnimation = useSpring ({
        from:{color :'red', opacity:0},
        to:[
            {color:'green', opacity:1},
            {color:'yellow', opacity:0.5 },
            {color:'blue', opacity:0.35},
            {color:'orange', opacity:0.25}
        ]
    })

    return (
        <animated.div className="multi" style={myAnimation}> 
            i appear in many colors
        </animated.div>
    )
}

export default Multi