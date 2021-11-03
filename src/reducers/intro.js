import { EDIT_INTRO } from '../actions'

const default_state = {}

const IntroReducer = (state = default_state, action) => {
  const { type, image, desc } = action

  switch (type) {
    case EDIT_INTRO:
      return { image, desc }
    default:
      return state
  }
}

export default IntroReducer
