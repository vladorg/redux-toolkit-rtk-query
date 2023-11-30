


export const Subscribe = () => {

  return (
    <div className="subscribe"> 
      <div className="container">
        <div className="subscribe__wrap">
          <div className="subscribe__text">
            <div className="heading subscribe__heading">
               Subscribe to my <span className="text-primary">Newsletters</span></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>Phasellus malesuada nisi tellus, non imperdiet nisi tempor at.</p>
          </div>
          <div className="subscribe__field">
            <input className="input" type="email" name="email" id="subscriber_email" placeholder="Enter your Email" />
            <button className="btn btn--primary" aria-label="Subscribe button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}
