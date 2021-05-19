import React,{useState} from 'react';
import { userContext } from "./utilities/Contexts";
import UsingTheContext from './Components/UsingTheContext'



const LearnContext = () => {
    
    const [message, setMessage] = useState("initial message");
    

    return (
        <userContext.Provider value={{message,setMessage}}>
            <UsingTheContext/>
        </userContext.Provider>
    );
}

export default LearnContext;
