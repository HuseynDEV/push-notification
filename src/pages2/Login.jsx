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
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
            
            {/* Email Input */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                />
            </div>
    
            {/* Name Input */}
            <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                />
            </div>
    
            {/* Sign Up Button */}
            <button
                onClick={signUpButton}
                className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200 ease-in-out mb-4"
            >
                Sign In
            </button>
    
            {/* Google Sign In Button */}
            <button
                onClick={signInGoogle}
                className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
            >
                Sign In with Google
            </button>
        </div>
    </div>
    
    )
}

export default Login