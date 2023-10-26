// html tags here essentially
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function AboutProjects({ projects }) {
  return (
    <div className="main-container">
      {projects.map((project) => {
        const { title, githubLink, deployedLink, image, description } = project;
        return (
          <Card className="mb-5" style={{ width: '18rem', background: 'black' }} key={title}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button className="mb-2" href={deployedLink} target="_blank" variant="primary">View Live</Button>
              <Button href={githubLink} target="_blank" variant="secondary">View Code</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default AboutProjects;