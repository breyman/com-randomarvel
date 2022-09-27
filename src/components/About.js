import brianHeadshot from './../assets/images/headshot-brian.jpg';

function About(){
  return(
    <div className="column is-two-thirds-tablet is-two-thirds-desktop is-half-widescreen is-one-third-fullhd">
      <div className="columns is-multiline is-desktop">
        <div className="column is-full mb-6">
          RandoMarvel lets you pick and watch a random Marvel-produced movie or TV show to watch. Bored on a Saturday night? Have crippling decision anxiety? Generate a movie/tv show now.
        </div>
        <div className="column is-one-third mt-6">
          <figure className="image is-128x128">
            <img src={brianHeadshot} className="is-rounded" alt="Brian's Headshot" />
          </figure>
        </div>
        <div className="column mt-6">
          <p className="mb-3">Brian wrote this small app. Check out more about him at <a href="https://www.brianreyman.com/" className="has-text-primary" target="_blank" rel="noreferrer">BrianReyman.com</a>.</p>
          <p>
            View this app's <a href="https://github.com/breyman/com-randomarvel" className="has-text-primary" target="_blank" rel="noreferrer">source code on
            <span className="icon-text">
              <span className="icon">
                <i className="fa-brands fa-github"></i>
              </span>
              <span>GitHub</span>
            </span></a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About;