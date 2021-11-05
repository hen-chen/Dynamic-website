import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addPostAction } from '../actions'
import Post from './Post'

const Posts = ({ posts, dispatchAddPost }) => {
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [desc, setDesc] = useState('')
  const [addPost, setAddPost] = useState(false)

  return (
    <>
      <button
        type="button"
        className="btn mx-1 btn-primary"
        onClick={() => setAddPost(true)}
      >
        Add Post
      </button>
      {posts.map(post => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
      {addPost && (
        <form className="container p-2 m-2">
          <input className="form-control" onChange={e => setTitle(e.target.value)} placeholder="Enter Title" />
          <input className="form-control" onChange={e => setImage(e.target.value)} placeholder="Enter Image URL" />
          <input className="form-control" onChange={e => setDesc(e.target.value)} placeholder="Enter Description" />
          <button
            type="button"
            className="btn mx-1 btn-primary"
            onClick={() => {
              dispatchAddPost({ title, image, desc })
              setAddPost(false)
            }}
          >
            Save
          </button>
          <button
            type="button"
            className="btn mx-1 btn-danger"
            onClick={() => setAddPost(false)}
          >
            Cancel
          </button>
        </form>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  posts: state.posts,
})

const mapDispatchToProps = dispatch => ({
  dispatchAddPost: input => dispatch(addPostAction(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
