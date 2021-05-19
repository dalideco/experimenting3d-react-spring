import {useState, useEffect, useDebugValue} from 'react'
import {useSpring} from 'react-spring'

function useHover({transformFrom,transformTo,background='red'}){
    const [hovered,setHovered]= useState(false)
  
    const animation = useSpring({
      transform : hovered? transformTo:transformFrom,
      color: hovered? background: 'white'
    })
  
    useDebugValue(hovered?? 'false')
    return [animation,setHovered];
}

export {useHover}

