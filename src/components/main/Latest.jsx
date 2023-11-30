import { Link } from 'react-router-dom'
import p1 from './../../img/posts/post1.jpg' // relative path to image
import p2 from './../../img/posts/post2.jpg' // relative path to image
import p3 from './../../img/posts/post3.jpg' // relative path to image
import { PostList } from '../PostList'


export const Latest = () => {

  const posts = [
    { title: 'Lorem ipsum dolor 1', subtitle: 'April 24, 2022 - 5 min read',
      description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p1
    },
    { title: 'Lorem ipsum dolor 2', subtitle: 'April 03, 2022 - 4 min read',
      description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p2
    },
    { title: 'Lorem ipsum dolor 3', subtitle: 'March 12, 2022 - 6 min read',
      description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p3
    },
    { title: 'Lorem ipsum dolor 1', subtitle: 'April 24, 2022 - 5 min read',
      description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p1
    },
    { title: 'Lorem ipsum dolor 2', subtitle: 'April 03, 2022 - 4 min read',
      description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p2
    },
    { title: 'Lorem ipsum dolor 3', subtitle: 'March 12, 2022 - 6 min read',
      description: 'Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.', img: p3
    },
  ];

  return (
    <section className="latest">
      <div className="container">
        <div className="sectionHeading"> 
          <h2 className="heading sectionHeading__heading">Latest <span className="text-primary">Posts</span></h2>
          <Link to="/blog/" className="sectionHeading__link link ic ic-arrow ic-arrow-h">View all</Link>
        </div>
        <div className="latest__wrap posts">
          <PostList data={posts}/>
        </div>
      </div>
    </section>
  )
}
