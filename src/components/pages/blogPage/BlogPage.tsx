import { FC, useState, useEffect } from "react"
import classNames from "classnames/bind"
import { Post } from "../../views"
import { Search } from "../../ui"
import { TPost } from "../../../type/type"
import style from './blogPage.module.scss'

const cx = classNames.bind(style);

const BlogPage: FC = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, []);

  function postSearch(value: string){
    if(value){
      fetch(`https://jsonplaceholder.typicode.com/posts?title=${value}`)
      .then((response) => response.json())
      .then(json => setPosts(json))
    }else{
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => setPosts(json))
    }
  }

  return (
    <div>
      <h2 className={style.title}>Блог</h2>
      <p className={style.text}>Здесь мы делимся интересными кейсами из наших проектов, пишем про IT, а также переводим зарубежные статьи</p>
      <Search handle={postSearch}/>
      <ul className={style.list}>
        {posts.map((element: TPost, index) => {
          const variant = !index ? 'big' : 'small'
          return <li key={element.id} className={cx('post', {[`${variant}`]: true})}><Post data={element} variant={variant}/></li>
        })}
      </ul>
    </div>
  )
}

export default BlogPage