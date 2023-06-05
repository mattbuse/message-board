import { useSelector } from 'react-redux'
import { selectAllPosts } from './postsSlice'


export default function PostsList() {
    const posts = useSelector(selectAllPosts)

    const renderedPosts = posts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="user-name">-{post.name}</p>
        </article>
    ))

    return (
        <>
            {renderedPosts}
        </>
    )
}



