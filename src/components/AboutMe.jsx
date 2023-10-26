

function AboutCard({ information }) {
  return (
    <>
      <h4 className="">
        {information.title}
      </h4>
      <p>
        {information.placeholder}
      </p>
      <p>
        {information.AboutmeDesc}
      </p>
    </>
  )

}

export default AboutCard