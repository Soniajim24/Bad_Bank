import { useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';

function DepositPage() {
  const [depositAmount, setDepositAmount] = useState('');
  const [balance, setBalance] = useState(1000);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeposit = (event) => {
    event.preventDefault();
    if (!isNaN(parseFloat(depositAmount))) {
      if (parseFloat(depositAmount) > 0) {
        setBalance(balance + parseFloat(depositAmount));
        setDepositAmount('');
        setSuccessMessage('Deposit successful!');
        setErrorMessage('');
        
        // Set a timeout to clear the success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);

      } else {
        setErrorMessage('Cannot deposit a negative amount');
        setSuccessMessage('');
      }
    } else {
      setErrorMessage('Please enter a valid number');
      setDepositAmount(0); // set amount to 0 before displaying the alert message
      setSuccessMessage('');
    }
    
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
    <Card style={{ width: '24rem', margin: 'auto', marginTop: '2rem', color: 'white', boxShadow: '0 5px 10px rgba(0,0,0,.2)', padding: '1rem', backgroundColor: "#696969", border: '1px solid black'}}>
  <Card.Header className="text-center" style={{ backgroundColor: '#FF1493', color: 'white', fontSize: '1.5rem' }}>Deposit</Card.Header>
  <Card.Body>
        <Card.Title className='text-center mb-4'>
          Current Balance: ${balance.toFixed(2)}
        </Card.Title>
        <Form onSubmit={handleDeposit}>
          <Form.Group controlId='depositAmount'>
            <Form.Label>Deposit Amount:</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter deposit amount'
              value={depositAmount}
              onChange={(event) => setDepositAmount(event.target.value)}
            />
          </Form.Group>
          {errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
          {successMessage && (
            <Alert variant='danger'>{successMessage}</Alert>
          )}
          <Button
            className="btn btn-dark mx-auto d-block"
            type='submit'
            disabled={!depositAmount}
            style={{ marginTop: '1rem' }}
          >
            Deposit
          </Button>
        </Form>
      </Card.Body>
    </Card>
    </div>
  );
}

export default DepositPage;
