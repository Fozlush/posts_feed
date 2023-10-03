import { FC } from "react"
import { Link } from "react-router-dom"
import { Reaction } from "../../ui"
import { TPost } from "../../../type/type"
import style from './post.module.scss'

interface IProps {
  data: TPost,
  variant: 'big' | 'small'
}

const Post: FC<IProps> = ({data, variant}) => {
  if(variant === 'small'){
    return (
      <div className={style.small}>
        <div className={style.image_block}></div>
        <div className={style.text_block}>
          <h3 className={style.title}>{data.title}</h3>
          <div className={style.footer}>
            <Reaction id={data.id}/>
            <Link className={style.link} to={'/post/' + data.id}>Читать далее</Link>
          </div>
        </div>
      </div>
    )
  }else{
    return (
      <div className={style.big}>
        <div className={style.image_block}></div>
        <div className={style.text_block}>
          <div className={style.title_wrapper}>
            <h3 className={style.title}>{data.title}</h3>
            <Reaction id={data.id}/>
          </div>
          <p className={style.text}>{data.body}</p>
          <div className={style.footer}>
            <Link className={style.link} to={'/post/' + data.id}>Читать далее</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Post