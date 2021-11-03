import React, { useState } from 'react'
import { connect } from 'react-redux'

import { editIntro } from '../actions'

const Intro = ({ editIntro, setEditIntro, dispatchEditIntro, intro }) => {
  const [text, setText] = useState('')
  const [imageURL, setImageURL] = useState('')

  if (editIntro) {
    return (
      <>
        <input onChange={e => setImageURL(e.target.value)} value={imageURL} />
        <input onChange={e => setText(e.target.value)} value={text} />
        <button
          onClick={() => {
            dispatchEditIntro(imageURL, text)
            setEditIntro(false)
          }}
        >
          Save
        </button>
        <button onClick={() => {
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
      <img src={intro.image} />
      <div> {intro.desc} </div>
    </>
  )
}

const mapStateToProps = state => ({
  intro: state.intro
})

const mapDispatchToProps = dispatch => ({
  dispatchEditIntro: (image, desc) => dispatch(editIntro(image, desc))
})

export default connect(mapStateToProps, mapDispatchToProps)(Intro)
