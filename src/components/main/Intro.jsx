import img from './../../img/man.png' // relative path to image

export const Intro = () => {

  return (
    <section className="intro"> 
      <div className="container"> 
        <div className="intro__inner"> 
          <div className="intro__text"> 
            <h1 className="heading intro__heading">Hi there, I’m <span className="text-primary">Ixartz</span>👋</h1>
            <p className="subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.
                Lorem ipsum dolor sit amet, <span className="text-primary">consectetur</span> adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et <span className="text-primary">dolore</span>.
            </p>
          </div><img className="intro__photo" src={img} alt="Man" width="100" height="100" />
        </div>
        <div className="intro__socials">
          <ul>
            <li><a className="ic ic-twitter-h" href="#" aria-label="Go to Twitter"> </a></li>
            <li><a className="ic ic-facebook-h" href="#" aria-label="Go to Facebook"> </a></li>
            <li><a className="ic ic-linkedin-h" href="#" aria-label="Go to Linkedin"> </a></li>
            <li><a className="ic ic-youtube-h" href="#" aria-label="Go to Youtube"> </a></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
