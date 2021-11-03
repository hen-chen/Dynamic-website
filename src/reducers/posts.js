const default_state = []

import { ADD_POST, EDIT_POST } from '../actions'

const PostReducer = (state = default_state, action) => {
  const { type, id, title, image, desc } = action

  switch (type) {
    case ADD_POST:
      return [...state, { id, title, image, desc }]
    case EDIT_POST:
      state.map(post => (post.id === id) ? {...post, id, title, image, desc} : post)
    default:
      return state
  }
}

export default PostReducer
