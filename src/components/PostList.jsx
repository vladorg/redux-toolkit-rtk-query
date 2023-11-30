import { Link } from 'react-router-dom'
import p1 from './../img/posts/post1.jpg' // relative path to image
import { Post } from './Post'


export const PostList = ({data}) => {
  return (
    <>
      { data.map((post, i) => <Post data={post} key={post.id}/>) }
    </>
  )
}
