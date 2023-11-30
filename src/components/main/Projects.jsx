import { Link } from 'react-router-dom';
import p1 from './../../img/projects/p1.png' // relative path to image
import p2 from './../../img/projects/p2.png' // relative path to image
import p3 from './../../img/projects/p3.png' // relative path to image


export const Projects = () => {

  const projects_list = [
    { title: 'Project1',
      type: { name: 'Web Design', tpl: 'tpl1' },
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      photo: p1
    },
    {
      title: 'Project2',
      type: { name: 'Next.js', tpl: 'tpl2' },
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      photo: p2
    },
    {
      title: 'Project3',
      type: { name: 'Awesome feature', tpl: 'tpl3' },
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum. Nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim.',
      photo: p3
    },
    {
      title: 'hellohello hellohello hellohello hellohello hellohello hellohello hellohello ',
      type: { name: 'hellohello', tpl: 'tpl1' },
      subtitle: 'hellohello hellohello hellohello hellohello',
      photo: p1
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <div className="sectionHeading">
          <h2 className="heading sectionHeading__heading">Recent <span className="text-primary">Projects</span></h2>
        </div>
        <div className="projects__wrap"> 

          { projects_list.map((project, i) => (
            <Link to="/post/" className="project" key={i}>
              <div className="project__photo">
                <img className="lazyload" src="" data-src={project.photo} alt="project" width="50" height="60" />
              </div>
              <div className="project__descr">
                <div className="project__name"> 
                  <div className="project__title ellipsis">{project.title}</div>
                  <div className={`project__type project__type--${project.type.tpl}`}><span className="ellipsis">{project.type.name}</span></div>
                </div>
                <div className="project__subtitle">
                  <p>{project.subtitle}</p>
                </div>
              </div>
            </Link>
          )) }

        </div>
      </div>
    </section>
  )
}
