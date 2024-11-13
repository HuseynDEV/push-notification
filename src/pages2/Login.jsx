import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

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


    const signUpButton = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, name)
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='password' value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={signUpButton}>Sign Up</button>
            <button onClick={signInGoogle}>Sign In Google</button>
        </div>
    )
}

export default Login