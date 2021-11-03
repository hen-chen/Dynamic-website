import { combineReducers } from 'redux'

import posts from './posts'
import intro from './intro'

export default combineReducers({
  intro,
  posts
})
