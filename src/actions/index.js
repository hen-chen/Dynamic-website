let ID = 0

export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DEL_POST = 'DEL_POST'

export const editIntroAction = (image, desc) => ({
  type: EDIT_INTRO,
  image,
  desc,
})

export const addPostAction = ({ title, image, desc }) => ({
  type: ADD_POST,
  id: ID++,
  title,
  image,
  desc,
})

export const editPost = ({
  id,
  title,
  image,
  desc,
}) => ({
  type: EDIT_POST,
  title,
  image,
  desc,
  id,
})

export const delPost = id => ({
  type: DEL_POST,
  id,
})
