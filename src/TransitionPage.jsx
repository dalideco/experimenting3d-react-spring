import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, NavLink , Switch, Route,useLocation } from "react-router-dom";
import { useTransition,animated } from "react-spring";


const FullPageDiv= styled.div`
    width: 100%;
    height: 100vh;
    background: #ccc;
    color: black;
    display:flex;
    & a {
        text-decoration: none;
        color: inherit;
    }
    & .green{
        background: green;
    }
    
`
const StyledNav = styled.nav`
    background: #282c34;
    display:flex;
    flex-direction: column ;
    color: white;
    width: 400px;
    padding-top: 20vh;
    &>a {
        padding :30px 0;
        transition: background 300ms ease-in-out;
        &:hover{
            background: black;
        }
    }
    
`

const StyledPage = styled.div`
    flex: 1;
    text-align: center;
    position: absolute;
`



//this is the little component
const LittleComponentDiv= styled.div`
    background:white;
    border: 1px solid black;
    width: 500px;
    margin: 100px auto;
    padding: 50px 0;
`

const LittleComponent = ({children})=>{
    return (
        <LittleComponentDiv>
            {children}
        </LittleComponentDiv>
    )
}

const MyRouter= ()=>{

    const location = useLocation();

    const transitions  = useTransition( location  ,  {
        from: {opacity:0, transform:"translateX(-100%)"},
        enter: {opacity:1, transform:"translateX(0%)"},
        leave: {opacity:0, transform:"translateX(100%)"}
    })

    const AnimatedStyledPage = animated(StyledPage)

    return (

        
        <div style={{flex:'1'}}>
            {transitions((style,item)=>(
                <AnimatedStyledPage style={style} key={item.pathname} >
                    
                    <Switch location={item}>
                        <Route exact path="/">
                            <LittleComponent>this is the home </LittleComponent>
                        </Route>
                        <Route exact path="/hello">
                            <LittleComponent>This is the hello part</LittleComponent>
                        </Route>
                        <Route exact path="/deco">
                            <LittleComponent>This is DALIDECOCK</LittleComponent>
                        </Route>
                    </Switch>
                </AnimatedStyledPage>
            ))}
            
            
        </div>
    )
}

// this is the main component
const TransitionPage = () => {
    return (
        <Router>
        <FullPageDiv>
            <StyledNav>
                <NavLink exact to="/" activeClassName="green">home</NavLink>
                <NavLink exact to="/hello" activeClassName="green">hello</NavLink>
                <NavLink exact to="/deco" activeClassName="green">deco</NavLink>
            </StyledNav>
            <MyRouter/>
        </FullPageDiv>
        </Router>
    );
}

export default TransitionPage;
