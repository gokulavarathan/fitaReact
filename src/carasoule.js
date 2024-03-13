import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function CarouselFadeExample() {
    return (
        <>
          {/* {[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((variant) => ( */}
            <Container>
            <Row>
                <col>
                <Card
              bg={'Primary'}
              key={'Primary'}
              text= 'white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{'Primary'} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
                </col>
                <col>

                <Card
              bg={'Primary'}
              key={'Primary'}
              text= 'white'
              style={{ width: '18rem' }}
              className="mb-2"
            >
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>{'Primary'} Card Title </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
                </col>
            </Row>
            
            </Container>
            
          {/* ))} */}
        </>
      );
}

export default CarouselFadeExample;