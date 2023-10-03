import { BlogPage, PostPage } from "../components/pages"
import { blogPageRoute, postPageRoute } from "./paths"

export const routes = [
  {
    path: blogPageRoute,
    element: <BlogPage/>
  },
  {
    path: postPageRoute,
    element: <PostPage/>
  },
]