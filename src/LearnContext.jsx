import React,{useState,useEffect} from 'react';
import { userContext } from "./utilities/Contexts";
import UsingTheContext from './Components/UsingTheContext'



const LearnContext  = () => {
    
    

    useEffect(()=>{
        show()
    },[])

    const show= ()=>{
        console.log('hello')
    }
    

    const [message, setMessage] = useState("initial message");
    

    return (
        <userContext.Provider value={{message,setMessage}}>
            <UsingTheContext/>
        </userContext.Provider>
    );
}

export default LearnContext;
