import { useState, useEffect } from 'react';
import { auth, fireStoreDb } from '../firebase';
import { signOut } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { requestForToken } from '../utils/notification';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()


    const getToken = async () => {
        const permission = await Notification.requestPermission()
        if (permission == 'granted') {
            const token = await requestForToken()
            if (token) {
                console.log('Token', token);
            }
        }
    }
    useEffect(() => {
        getToken()
    }, [])















    const signOutFunc = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log(err);
        }
    };



    const addPostFunc = () => {
        navigate('/addPost')
        console.log("Add Post button clicked");
    };

    const fetchPosts = async () => {
        try {
            const querySnapshot = await getDocs(collection(fireStoreDb, "posts"));
            console.log(querySnapshot.docs);
            const newData = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            newData.sort((a, b) => b.createdAt - a.createdAt)
            console.log(newData);
            setPosts(newData);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">

                {/* Buttons Section */}
                <div className="flex justify-between mb-8">
                    <button
                        onClick={signOutFunc}
                        className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200 ease-in-out"
                    >
                        Sign Out
                    </button>
                    <button
                        onClick={addPostFunc}
                        className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                        Add Post
                    </button>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Posts</h1>

                {/* Posts Section */}
                <div className="space-y-6">
                    {posts.map((item) => (
                        <div key={item.id} className="p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                            <div className="flex items-center mb-4">
                                <img
                                    src={item.avatar}
                                    alt={`${item.name}'s avatar`}
                                    className="w-12 h-12 rounded-full mr-4 border border-gray-300"
                                />
                                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                            </div>
                            <p className="text-gray-700">{item.text}</p>
                            <p>{item.createdAt.toDate().toLocaleString()}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Posts;
