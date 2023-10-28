

function AboutCard({ information }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <h4>
            {information.title}
          </h4>
          <h3 className="welcome-msg">
            {information.welcome}
          </h3>
        </div>
        <div className="container row justify-content-between">
          <img className="col-12 col-md-3 profile-img img-thumbnail" src={information.image} />
          <p className="col-12 col-md-6 ml-50 about-me-description">
            {information.aboutmeDesc}
          </p>
        </div>
      </div>
    </>
  )

}

export default AboutCard;