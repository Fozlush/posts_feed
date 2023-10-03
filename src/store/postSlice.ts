import { createSlice } from '@reduxjs/toolkit'

type TLikes = {
  id: number,
  likes: number,
  dislikes: number,
  status: string
}

const likes: TLikes[] = []
function initialLikes(){
  for(let i = 1; i < 101; i++){
    likes.push({id: i, likes: Math.floor(Math.random() * 51), dislikes: Math.floor(Math.random() * 51), status: 'missing'})
  }
}
initialLikes()

const likeSlice = createSlice({
  name: 'likes',
  initialState: {
    likes: likes
  },
  reducers: {
    likePost(state, actions){
      const current = state.likes.find((element) => element.id === actions.payload)
      if(!current)return
      switch(current.status){
        case 'missing':
          current.likes++
          current.status = 'like'
          break
        case 'like':
          current.likes--
          current.status = 'missing'
          break
        case 'dislike':
          current.likes++
          current.dislikes--
          current.status = 'like'
          break
      }
    },
    dislikePost(state, actions){
      const current = state.likes.find((element) => element.id === actions.payload)
      if(!current)return
      switch(current.status){
        case 'missing':
          current.dislikes++
          current.status = 'dislike'
          break
        case 'like':
          current.likes--
          current.dislikes++
          current.status = 'dislike'
          break
        case 'dislike':
          current.dislikes--
          current.status = 'missing'
          break
      }
    }
  }
})

export const {likePost, dislikePost} = likeSlice.actions
export default likeSlice.reducer