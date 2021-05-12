
import './App.css';
import React, {useState,useDebugValue} from 'react'
import styled from 'styled-components'
import {useSpring,animated} from 'react-spring'
import {useHover} from './customHooks'

const MyUl = styled.ul`

  padding:10px;
  list-style: inside circle;
  border-radius:5px;
  
  position: relative;
  perspective: 1000px;
  
`
const MyLi= styled.li`
  padding: 10px 0; 
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  margin-bottom: 10px;
  transform-origin:right;
  
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.63); 
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.63);
  transform-style: preserve-3d;
  
`

const SelfAnimatedLi = styled.li`
  padding: 10px 0; 
  border-top: 3px solid white;
  border-bottom: 3px solid white;
  margin-bottom: 10px;
  transform-origin: right;
  
  -webkit-box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.63); 
  box-shadow: 5px 5px 15px 5px rgba(0,0,0,0.63);
  transform: rotateY(-30deg) scale(1) ;
  transform-style: preserve-3d;
  transition: transform 300ms ease-in-out,
    color 300ms ease-in-out;


  
  &:hover{
    transform:rotateY(-30deg) scale(1.1) translateZ(20px);
    color: red;
  }
`





const GetLi =({children})=>{
  const [animation,setHovered] = useHover({
    transformTo:'rotateY(-30deg) scale(1.1) translateZ(20px)',
    transformFrom:'rotateY(-30deg) scale(1) translateZ(0px)',
    background:'green'
  })

  const AnimatedLi = animated(MyLi)


  return(
    <AnimatedLi style={animation} 
            onMouseOver={()=>{setHovered(true)}}
            onMouseOut={()=>{setHovered(false)}}
          >
            {children}
    </AnimatedLi>
  )
}

function Header(){

    const showAnimation = useSpring({
        from: {
            opacity: 0,
            transform: 'translateX(150px)'
        },
        to:{
            opacity:1,
            transform: 'translateX(0);'
        }
        
    })

    const AnimatedUl = animated(MyUl)

    return(
      
        <AnimatedUl style={showAnimation}>
          <div ></div>
          
          <GetLi > This is spring </GetLi>
          
          <SelfAnimatedLi>this is non spring</SelfAnimatedLi>
        </AnimatedUl>
      
    )
}

export default Header;