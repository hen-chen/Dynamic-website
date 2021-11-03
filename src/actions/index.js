let id = 0

export const EDIT_INTRO = 'EDIT_INTRO'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'

export const editIntro = (image, desc) => ({
  type: EDIT_INTRO,
  image: image,
  desc: desc
})

export const addPost = (title, image, desc) => ({
  type: ADD_POST,
  id: id++,
  title: title,
  image: image,
  desc: desc
})

export const editPost = (id, title, image, desc) => ({
  type: EDIT_POST,
  title: title,
  image: image,
  desc: desc
})
