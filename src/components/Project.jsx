// html tags here essentially
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function AboutProjects({ projects }) {
  return (
    <div className="main-container">
      {projects.map((project) => {
        const { title, githubLink, deployedLink, image, description } = project;
        return (
          <Card className="row mb-5 mt-3" style={{ width: '18rem', border: '1px white solid', background: 'black' }} key={title}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {description}
              </Card.Text>
              <Button className="mb-2" href={deployedLink} target="_blank" variant="primary">View App</Button>
              <Button href={githubLink} target="_blank" variant="secondary">View Repo</Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default AboutProjects;