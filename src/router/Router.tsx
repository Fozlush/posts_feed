import { FC } from "react"
import { Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import { BlogPage } from '../components/pages'

const Router: FC = () => {
  return (
    <Routes>
      {routes.map(({path, element}) =>
				<Route key={path} path={path} element={element}/>
			)}
      <Route path="*" element={<BlogPage/>} />
    </Routes>
  )
}

export default Router