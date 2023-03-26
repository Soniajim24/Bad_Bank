import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css';

function Home(){
 
  return (
    <main>
      <Container>
        <Row className='px-4 my-5'>
          <Col className='text-center'>
            <h1 className='font-weight-light mt-5 typewriter' style={{fontSize: '48px', color: '#FF1493'}}>
              Welcome to EU's Bad Bank
            </h1>
            <p className="mt-4" style={{fontSize: '24px', color: 'info'}}>
              Your savings are in good hands!
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: '18rem' } } className='text-center' >
              <Card.Img variant="top" src="https://picsum.photos/id/48/5000/3333" />
              <Card.Body>
                <Card.Title>Create Account</Card.Title>
                <Card.Text>
                  Not a client yet? Create an account today!
                </Card.Text>
                <Button
                  variant="primary"
                  href="/createaccount/"
                  style={{
                    backgroundColor: "#FF1493",
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                    border: "1px solid black",
                    transition: "all 0.3s ease",
                  }}
                  className="hover-button"
                >
                  Create Account
                </Button>
                <style jsx>{`
                  .hover-button:hover {
                    background-color: #ff8dcf;
                    color: black;
                    border: 1px solid #ff8dcf;
                  }
                `}</style>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className='text-center'>
              <Card.Img variant="" src="https://picsum.photos/id/444/4288/2848" />
              <Card.Body>
                <Card.Title>Deposit</Card.Title>
                <Card.Text>
                  Got some cash? Make a new deposit in a few easy steps
                </Card.Text>
                <Button
                  variant="primary"
                  href="/deposit"
                  style={{
                    backgroundColor: "#FF1493",
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                    border: "1px solid black",
                    transition: "all 0.3s ease",
                  }}
                  className="hover-button"
                >
                  Deposit
                </Button>
                <style jsx>{`
                  .hover-button:hover {
                    background-color: #ff8dcf;
                    color: black;
                    border: 1px solid #ff8dcf;
                  }
                `}</style>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '18rem' }} className='text-center'>
              <Card.Img variant="top" src="https://picsum.photos/id/524/5000/3333" />
              <Card.Body>
                <Card.Title>Withdraw</Card.Title>
                <Card.Text>
                  Need some cash? Withdraw money right now!
                </Card.Text>
                <Button
                  variant="primary"
                  href="/Withdraw"
                  style={{
                    backgroundColor: "#FF1493",
                    display: "block",
                    margin: "0 auto",
                    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
                    border: "1px solid black",
                    transition: "all 0.3s ease",
                  }}
                  className="hover-button"
                >
                  Withdraw
                </Button>
                <style jsx>{`
                  .hover-button:hover {
                    background-color: #ff8dcf;
                    color: black;
                    border: 1px solid #ff8dcf;
                  }
                `}</style>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  );  
}

export default Home;
