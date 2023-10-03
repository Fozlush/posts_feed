import { FC, useState } from 'react'
import style from './search.module.scss'

interface ISearch {
  handle: Function
}

const Search: FC<ISearch> = ({handle}) => {
  const [value, setValue] = useState('')
  function search(e:  React.KeyboardEvent<HTMLElement>){
    if(e.code === 'Enter'){
      handle(value)
    }
  }
  return (
    <input className={style.search} placeholder='Поиск по названию статьи' onKeyDown={search} value={value} onChange={e => setValue(e.target.value)}/>
  )
}

export default Search