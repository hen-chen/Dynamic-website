import { ADD_POST, DEL_POST, EDIT_POST } from '../actions'

const default_state = []

const PostReducer = (state = default_state, action) => {
  const {
    type,
    id,
    title,
    image,
    desc,
  } = action

  switch (type) {
    case ADD_POST:
      return [...state, {
        id,
        title,
        image,
        desc,
      }]
    case EDIT_POST:
      return state.map(post => (post.id === id ? {
        ...post,
        id,
        title,
        image,
        desc,
      } : post))
    case DEL_POST:
      return state.filter(post => post.id !== id)
    default:
      return state
  }
}

export default PostReducer
