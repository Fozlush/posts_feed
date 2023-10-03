import { FC, useState } from 'react'
import { useSelector } from "react-redux/es/hooks/useSelector"
import { useDispatch } from "react-redux"
import { RootState } from 'src/store'
import { likePost, dislikePost } from 'src/store/postSlice'
import Like from 'src/assets/images/Like.svg?react'
import Dislike from 'src/assets/images/Dislike.svg?react'
import LikePressed from 'src/assets/images/LikePressed.svg?react'
import DislikePressed from 'src/assets/images/DislikePressed.svg?react'
import style from './reaction.module.scss'

interface IReaction {
  id: number
}

const Reaction: FC<IReaction> = ({id}) => {
  const dispatch = useDispatch()
  const [likes, setLikes] = useState(useSelector((state:RootState) => state.likes.likes.find((element) => element.id === id)!.likes))
  const [dislikes, setDislikes] = useState(useSelector((state:RootState) => state.likes.likes.find((element) => element.id === id)!.dislikes))
  const [status, setStatus] = useState(useSelector((state:RootState) => state.likes.likes.find((element) => element.id === id)!.status))

  function pressLike(){
    switch(status){
      case 'missing':
        setLikes(likes + 1)
        setStatus('like')
        break
      case 'like':
        setLikes(likes - 1)
        setStatus('missing')
        break
      case 'dislike':
        setLikes(likes + 1)
        setDislikes(dislikes - 1)
        setStatus('like')
        break
    }
    dispatch(likePost(id))
  }

  function pressDislike(){
    switch(status){
      case 'missing':
        setDislikes(dislikes + 1)
        setStatus('dislike')
        break
      case 'like':
        setLikes(likes - 1)
        setDislikes(dislikes + 1)
        setStatus('dislike')
        break
      case 'dislike':
        setDislikes(dislikes - 1)
        setStatus('missing')
        break
    }
    dispatch(dislikePost(id))
  }

  return (
    <div className={style.container}>
      <div className={style.likes}>
        <button onClick={pressLike}>{status === 'like' ? <LikePressed/> : <Like/>}</button>
        <p className={style.count}>{likes}</p>
      </div>
      <div className={style.dislikes}>
        <button onClick={pressDislike}>{status === 'dislike' ? <DislikePressed/> : <Dislike/>}</button>
        <p className={style.count}>{dislikes}</p>
      </div>
    </div>
  )
}

export default Reaction