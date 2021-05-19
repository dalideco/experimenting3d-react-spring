import React, { useContext } from 'react';
import { userContext } from '../utilities/Contexts';


const UsingTheContext = () => {
    const {message,setMessage} = useContext(userContext);

    return (
        <>
        <div>
            {message? message: 'no message found'}
        </div>
        <button
            onClick={()=>{setMessage('updated messsage')}}
        >change</button>
        </>
    );
}

export default UsingTheContext;
