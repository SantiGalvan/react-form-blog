import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Form = () => {

    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault()

        // Se il titolo ha almeno un carettere e se non è gia presente nei posts allora pushalo
        if (title.trim().length !== 0 && !posts.includes(title.trim())) setPosts(array => ([...array, title]));

        setTitle('');
    }

    const removePost = (index) => {
        setPosts(array => array.filter((post, i) => i !== index));
    }

    return (
        <>
            <h1>Inserisci il titolo del tuo Post</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label> Inserisci il titolo</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <button>Salva</button>
                </form>
                <ul>
                    {posts.map((post, index) => (
                        <li key={`post-${index}`}>
                            {post}
                            <button
                                onClick={() => { removePost(index) }}
                            >
                                <IoCloseSharp /></button>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default Form;