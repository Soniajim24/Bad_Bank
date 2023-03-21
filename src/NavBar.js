import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as Bootstrap from 'react-bootstrap';

function NavBar(){
    return(
      <div className="App">
  <header>
      <Bootstrap.Navbar bg="dark" variant="dark">
      <Bootstrap.Container>
        <Bootstrap.Navbar.Brand href="/#">EU´s Bad Bank</Bootstrap.Navbar.Brand>
        <Bootstrap.Nav className="me-auto">
          <Bootstrap.Nav.Link href='/#'>Home</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/createaccount'>Create Account</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/deposit'>Deposit</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/withdraw'>Withdraw</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/#/alldata'>All Data</Bootstrap.Nav.Link>
        </Bootstrap.Nav>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
    </header>
    <main>
      
    <Container>
      <Row className='px-4 my-5'>
      <Col sm={7}>
          <Image src="https://picsum.photos/id/5/400" fluid />
          </Col>
      <Col sm={4}>
        <h1 className='font-weigh-light'>Welcome to EU´s Bad Bank</h1>
        <p className="mt-4">
          Your savings are in good hands!
        </p>
        <Button variant="primary"> Call to action</Button>
        </Col>
      </Row>
  <Row>
    <Col>
      <Card style={{ width: '18rem' } } >
        <Card.Img variant="top" src="https://picsum.photos/id/48/5000/3333" />
          <Card.Body>
              <Card.Title>Create Account</Card.Title>
              <Card.Text>
                  Not a client yet? Create an account today!
              </Card.Text>
              <Button variant="primary" href="#/createaccount/">Create Account</Button>
          </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="" src="https://picsum.photos/id/444/4288/2848" />
          <Card.Body>
              <Card.Title>Deposit</Card.Title>
              <Card.Text>
                  Got some cash? Make a new deposit in few easy steps
              </Card.Text>
              <Button variant="primary" href="#/deposit/">Deposit</Button>
          </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/id/524/5000/3333" />
          <Card.Body>
              <Card.Title>Withdraw</Card.Title>
              <Card.Text>
                  Need some cash? Withdraw money right now!
              </Card.Text>
             <Button variant="primary" href="#Withdraw">Withdraw</Button>
          </Card.Body>
      </Card>
    </Col>
  </Row>
  </Container>
  </main>
</div>   
    )
}
export default NavBar;