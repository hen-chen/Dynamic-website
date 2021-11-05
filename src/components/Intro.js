import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editIntroAction } from '../actions'

const Intro = ({
  editIntro,
  setEditIntro,
  dispatchEditIntro,
  intro,
}) => {
  const [text, setText] = useState('')
  const [imageURL, setImageURL] = useState('')

  if (editIntro) {
    return (
      <>
        <input onChange={e => setImageURL(e.target.value)} value={imageURL} placeholder="Img URL" />
        <input onChange={e => setText(e.target.value)} value={text} placeholder="Description" />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatchEditIntro(imageURL, text)
            setEditIntro(false)
          }}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            setEditIntro(false)
            setText(intro.desc || '')
            setImageURL(intro.image || '')
          }}
        >
          Cancel
        </button>
      </>
    )
  }
  return (
    <>
      {intro.image && <img src={intro.image} alt="..." />}
      <div>
        {intro.desc}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  intro: state.intro,
})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, desc) => dispatch(editIntroAction(image, desc)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
