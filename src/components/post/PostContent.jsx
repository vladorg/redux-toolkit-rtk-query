import p1 from './../../img/posts/post1.jpg' // relative path to image


export const PostContent = () => {

  return (
    <section className="postPage">
      <div className="container">
        <div className="sectionHeading sectionHeading--single"> 
          <h1 className="heading sectionHeading__heading">Lorem ipsum dolor Lorem ipsum dolor </h1>
        </div>
        <div className="postPage__info">By Ixartz on April 24, 2022 - 5 min read</div>
        <div className="postPage__thumb">
          <img src={p1} alt="thumb" width="230" height="180" />
        </div>
        <div className="content"> 
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nobis delectus, atque explicabo earum accusantium, saepe voluptatibus perferendis odio soluta veritatis. Tempora, omnis non cum nulla numquam cumque aliquid est ullam maiores sapiente perferendis, laudantium modi eius beatae? Itaque, quia? Autem iste voluptatum laboriosam, suscipit ducimus illo nemo corporis similique, possimus, ea impedit.</p>
          <p>123</p>
          <h2>Lorem ipsum dolor h2</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <h3>Lorem ipsum dolor h3</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <h4>Lorem ipsum dolor h4</h4>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <h5>Lorem ipsum dolor h5 </h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, blanditiis?</p>
          <p>dfgdsgdfg </p>
        </div>
      </div>
    </section>
  )
}
