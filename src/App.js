import React, { useState } from 'react'

import Title from './components/Title'
import BlogPostsTitle from './components/BlogPostsTitle'
import Intro from './components/Intro'
import Posts from './components/Posts'

const App = () => {
  const [editIntro, setEditIntro] = useState(false)

  return (
    <>
      <Title />
      <button type="button" className="btn btn-warning" onClick={() => setEditIntro(true)}> EDIT </button>
      <br />
      <Intro editIntro={editIntro} setEditIntro={setEditIntro} />
      <br />
      <hr />
      <BlogPostsTitle />
      <Posts />
    </>
  )
}
export default App
