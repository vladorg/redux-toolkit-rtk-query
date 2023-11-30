import { Link } from 'react-router-dom'
import p1 from './../img/posts/post1.jpg' // relative path to image
import { useDeletePostMutation, useUpdatePostMutation } from '../services/postsServise'


export const Post = ({ data: {
  title, 
  subtitle, 
  description,
  id
} }) => {
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const handlePost = async (e, action, id) => {
    e.preventDefault();

    if (action == 'upd') {
      const title = prompt();

      await updatePost({title, subtitle: 'test subtitle', description: 'test description', id});
      
      return
    }

    if (action == 'del') {
      const conf = window.confirm('Are you sure?');

      if (conf) {
        await deletePost({id})        
      }

      return
    }

    console.log('no action');
  }

  return (
    <article className="post" data-id={id}>
      <Link to={'/post/'}>
        <button className="" onClick={(e) => handlePost(e, 'upd', id)}>upd</button>
        <button className="" onClick={(e) => handlePost(e, 'del', id)}>del</button>
        <div className="post__thumb">
          <img className="lazyload" src="" data-src={p1} alt="post" width="230" height="103" />
        </div>
        <div className="post__caption">
          <div className="post__title">{title}</div>
          <div className="post__subtitle ellipsis">{subtitle}</div>
          <div className="post__description">{description}</div>
        </div>
      </Link>
    </article>
  )
}
