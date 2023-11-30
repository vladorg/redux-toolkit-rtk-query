import { PostList } from '../PostList'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';


export const BlogPosts = () => {

  const { list, isLoading, isError } = useSelector(state => state.posts);
  const { 
    fetchPosts 
  } = useActions();

  useEffect(() => {
    fetchPosts();
  }, []);

  
 

  

  return (
    <section className="postsList">
      <div className="container">
        <div className="sectionHeading sectionHeading--single"> 
          <h1 className="heading sectionHeading__heading">Posts Examples</h1>
          <p className="sectionHeading__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
        </div>
        {
          isLoading
          ?
          <div>Loading...</div>
          :

            isError
            ?
            <div>Error in loading posts!</div>
            :

              list.length
              ?
              <div className="posts">
                <PostList data={list}/>
              </div>
              :
              <div>Posts not found!</div>
        }
      </div>
    </section>
  )
}
