import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import DynamicTable from './DynamicTable';
import Card from 'react-bootstrap/Card';
import { UserContext } from './CreateAccount';

export default function AllData() {
  const userContext = React.useContext(UserContext);

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
    <Card style={{ width: '24rem', margin: 'auto', marginTop: '2rem', color: 'white', boxShadow: '0 5px 10px rgba(0,0,0,.2)', padding: '1rem', backgroundColor: "#696969", border: '1px solid black'}}>
  <Card.Header className="text-center" style={{ backgroundColor: '#FF1493', color: 'white', fontSize: '1.5rem' }}>All Data  </Card.Header>
      <DynamicTable users={userContext.users} />
      </Card>
    </div>
  );
}
