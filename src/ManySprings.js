import React from 'react'
import { config , useSprings, animated} from "react-spring";

const items =[
    {
        id:1,
        from :{
            color: 'red'
        },
        to:{
            color:'green'
        },
        config:config.molasses
    },
    {
        id:2,
        from :{
            color: 'red'
        },
        to:{
            color:'blue'
        },
        config: config.slow
    },{
        id:3,
        from :{
            color: 'red'
        },
        to:{
            color:'yellow'
        },
        config:config.wobbly
    }
    
]

export default function ManySprings(){


    const springs = useSprings(items.length, items.map(({id , ...rest})=> rest));

    return (
        <div className="ManySprings">
            {springs.map(style=>(
                <animated.div style={style}>
                    Hello
                </animated.div>
            ))}
        </div>
    )
}