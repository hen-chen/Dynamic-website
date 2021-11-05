import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editPost, delPost } from '../actions'

const Post = ({ post, dispatchEditPost, dispatchDeletePost }) => {
  const {
    id,
    title,
    image,
    desc,
  } = post
  const [_title, setTitle] = useState(title || '')
  const [_image, setImage] = useState(image || '')
  const [_desc, setDesc] = useState(desc || '')
  const [edit, setEdit] = useState(false)

  return (
    <>
      {!edit && (
      <div className="container p-2 m-2 border rounded">
        <h2>
          {title}
          #
          {id}
        </h2>
        <br />
        <img src={image} alt="..." />
        <div>
          {desc}
        </div>
        <button type="button" className="btn btn-warning" onClick={() => setEdit(true)}> EDIT </button>
      </div>
      )}
      {edit && (
        <div>
          Title:
          <input onChange={e => setTitle(e.target.value)} value={_title} />
          <br />
          Image:
          <input onChange={e => setImage(e.target.value)} value={_image} />
          <br />
          Description:
          <input onChange={e => setDesc(e.target.value)} value={_desc} />
          <button
            type="button"
            className="btn mx-1 btn-primary"
            onClick={() => {
              dispatchEditPost({
                id,
                title: _title,
                image: _image,
                desc: _desc,
              })
              setEdit(false)
            }}
          >
            Save
          </button>
          <button type="button" onClick={() => setEdit(false)}> Cancel </button>
          <button
            type="button"
            className="btn mx-1 btn-danger"
            onClick={() => {
              dispatchDeletePost(id)
              setEdit(false)
            }}
          >
            Delete
          </button>
        </div>
      )}
    </>
  )
}

const mapDispatchToProps = dispatch => ({
  dispatchEditPost: input => dispatch(editPost(input)),
  dispatchDeletePost: input => dispatch(delPost(input)),
})

export default connect(null, mapDispatchToProps)(Post)
