import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addPost, clearAllPosts } from "./postsSlice";


export default function AddPostForm() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [name, setName] = useState('')

    const dispatch = useDispatch()

    const onTitleChange = e => setTitle(e.target.value)
    const onContentChange = e => setContent(e.target.value)
    const onNameChange = e => setName(e.target.value)

    const onSavePostClicked = () => {
        if (name && title && content) {
            dispatch(
                addPost(name, title, content)
            )
            setName('')
            setTitle('')
            setContent('')
        } else {
            alert('Please enter a title, content and name')
        }
    }

    const clearPosts = () => {
        dispatch(clearAllPosts())
    }

    return (
        <section className="form">
            <h2>Add a New Post</h2>
            <form>
                <label htmlFor="postTitle">Title:</label>
                <br/>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChange} />
                <br/>
                <label htmlFor="postContent">Message:</label>
                <br/>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChange} />
                <br/>
                <label htmlFor="Name">Your Name:</label>
                <br/>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={onNameChange} />
                <br/>
                <br/>
                <div className="container">
                    <button
                        type="button"
                        onClick={onSavePostClicked}
                        >Save Post</button>
                    <button
                        type="button"
                        onClick={clearPosts}
                        >Clear All</button>
                </div>
            </form>
        </section>
    )
};


