import { FC, useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { Reaction } from "../../ui"
import { TPost } from "../../../type/type"
import style from './postPage.module.scss'

const PostPage: FC = () => {
  const idPost = Number(useParams().id)
  const imageLink = `https://placehold.co/1140x477?text=Картинка+поста+№${idPost}`
  const [data, setData] = useState<TPost | false>(false)
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
      .then(response => response.json())
      .then(json => setData(json))
  }, []);
  if(data){
    return (
      <div>
        <div className={style.head}>
          <Link to='/'>&#8592; Вернуться к статьям</Link>
          <Reaction id={idPost}/>
        </div>
        <h3 className={style.title}>{data.title}</h3>
        <img className={style.image} src={imageLink}></img>
        <p className={style.text}>{data.body}</p>
      </div>
    )
  }else{
    return (
      //тут должна быть заглушка
      <div>Ждемс</div>
    )
  }
}

export default PostPage