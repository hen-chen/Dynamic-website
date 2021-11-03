import React, { useState } from 'react'

import Title from './components/Title'
import BlogPostsTitle from './components/BlogPostsTitle'
import Intro from './components/Intro'

const App = () => {
  const [editIntro, setEditIntro] = useState(false)

  return (
    <>
      <Title />
      <button onClick={() => setEditIntro(true)}> EDIT </button>
      <br />
      <Intro editIntro={editIntro} setEditIntro={setEditIntro} />
      <br />
      <hr />
      <BlogPostsTitle />
    </>
  )
}
export default App
