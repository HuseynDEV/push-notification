import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, fireStoreDb } from '../firebase';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    const [content, setContent] = useState('');
    const [user] = useAuthState(auth)
    const navigate = useNavigate()



    const handlePostSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(fireStoreDb, 'posts'), {
                text: content,
                name: user.displayName,
                avatar: user.photoURL,
                createdAt: serverTimestamp(),
            })
            navigate('/')
            setContent('');
        }
        catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Add a New Post</h1>

                <form onSubmit={handlePostSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Content</label>
                        <input
                            type="text"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your content"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
                    >
                        Submit Post
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;
