import { signOut } from 'firebase/auth';
import React, { useState, useEffect } from 'react'
import { auth, fireStoreDb } from '../firebase';
import { addDoc, average, collection, getDocs, query, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

const Chat = () => {
    const [text, setText] = useState()
    const [todos, setTodos] = useState([])
    const [user] = useAuthState(auth)
    const signOutFunc = async () => {
        try {
            await signOut(auth)
        }
        catch (err) {
            console.log(err);

        }
    }
    const sharePost = async () => {
        try {

            await addDoc(collection(fireStoreDb, 'posts'), {
                text: text,
                name: user.displayName,
                avatar: user.photoURL,
                createdAt: serverTimestamp()
            })
            fetchPosts();

        } catch (err) {
            console.log(err);
        }
    }


    const fetchPosts = async () => {

        try {
            await getDocs(collection(fireStoreDb, "posts"))
                .then((querySnapshot) => {
                    const newData = querySnapshot.docs
                        .map((doc) => ({ ...doc.data(), id: doc.id }));
                    setTodos(newData);
                    console.log(todos, newData);
                })
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchPosts();
    }, [])
    return (
        <div>
            <button onClick={signOutFunc}>Sign Out</button>

            <div>

                {todos.map(item => <div key={item.createdAt}>
                    <div>{item.text}</div>
                    <div>{item.name}</div>
                    <img src={item.avatar} />
                </div>)}
            </div>
            <div>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={sharePost}>Add Text</button>
            </div>
        </div>
    )
}

export default Chat