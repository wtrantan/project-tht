import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Stories.css'

function Stories() {
  return (
    <div className="tw-text-center tw-items-center">
    
    <Container fluid className= "">
      <Row>
      <Col xs={6} md={4}><a><img src="https://i.guim.co.uk/img/media/f77d607c8607ed032cf3100a69ddaf48eb63643d/0_20_1024_614/master/1024.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=0f16c69fc14e1a5d2f833d34bb3063b1"></img></a></Col>
      <Col xs={6} md={4}><img src="https://i.ytimg.com/vi/g_gB_x0jP6o/maxresdefault.jpg"></img></Col>
      <Col xs={6} md={4}><img src="logo192.png"></img></Col>
      <Col xs={6} md={4}><img src="logo192.png"></img></Col>
      <Col xs={6} md={4}><img src="logo192.png"></img></Col>
      <Col xs={6} md={4}><img src="logo192.png"></img></Col>
      </Row>
    </Container>
    </div>
  );
}

export default Stories;