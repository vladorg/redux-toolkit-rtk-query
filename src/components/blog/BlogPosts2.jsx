import { PostList } from '../PostList';
import { useAddPostMutation, useFetchPostsQuery } from '../../services/postsServise';


export const BlogPosts2 = () => {

  const { data = [], isLoading, isError } = useFetchPostsQuery();
  const [ addPost, { isLoading: addPostIsLoading, isError: addPostIsError} ] = useAddPostMutation();

  const addPostHandler = async () => {
    const title = prompt();

    await addPost({
      title, subtitle: 'test subtitle', description: 'test description'
    })
  }
  

  return (
    <section className="postsList">
      <div className="container">
        <div className="sectionHeading sectionHeading--single"> 
          <h1 className="heading sectionHeading__heading">Posts  ExamplesExamplesExamples</h1>
          <p className="sectionHeading__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum.</p>
          <button className="btn btn--primary" onClick={addPostHandler}>Add new</button>
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

              data.length
              ?
              <div className="posts">
                <PostList data={data}/>
              </div>
              :
              <div>Posts not found!</div>
        }
      </div>
    </section>
  )
}
