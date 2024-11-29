import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Post() {
  return (
    <Card className='m-2 card-custom' >
      <Card.Img variant="top" src="https://assets.bitdegree.org/online-learning-platforms/storage/media/2018/08/what-is-a-web-developer.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Know More</Button>
      </Card.Body>
    </Card>
  );
}

export default Post;