

function AboutCard({ information }) {
  return (
    <>
      <h4>
        {information.title}
      </h4>
      <h3 className="welcome-msg">
        {information.welcome}
      </h3>
      <p>
        {information.aboutmeDesc}
      </p>
    </>
  )

}

export default AboutCard