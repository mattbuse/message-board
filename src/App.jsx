import './App.css'
import PostsList from './Features/Posts/PostsList'
import AddPostForm from './Features/Posts/AddPostForm'

function App() {

  return (
    <>
      <header className="header">
        <span><a href="https://mattbuse.github.io/Portfolio_Page/">HOME</a></span>
        <span><a href="https://mattbuse.github.io/Portfolio_Page/JS-Projects/Projects/projects.html">PROJECTS</a></span>
        <h1>Matt's Message Board</h1>
      </header>
      <AddPostForm />
      <PostsList />
    </>
  )
}

export default App
