import React, { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const signInGoogle = async () => {
        try {
            signInWithPopup(auth, provider)

        } catch (err) {
            console.log(err);
        }
    }



 
    return (
        <div>
   
     
            <button onClick={signInGoogle}>Google</button>
        </div>
    )
}

export default Login