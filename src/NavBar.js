import React from "react";
import * as Bootstrap from 'react-bootstrap';

function NavBar(){
    return(
      <div className="App">
  <header>
      <Bootstrap.Navbar bg="dark" variant="dark">
      <Bootstrap.Container>
        <Bootstrap.Navbar.Brand href="/#" style={{color: '#FF1493'}}>EU´s Bad Bank</Bootstrap.Navbar.Brand>
        <Bootstrap.Nav className="me-auto">
          <Bootstrap.Nav.Link href='/'>Home</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/createaccount'>Create Account</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/deposit'>Deposit</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/withdraw'>Withdraw</Bootstrap.Nav.Link>
          <Bootstrap.Nav.Link href='/alldata'>All Data</Bootstrap.Nav.Link>
        </Bootstrap.Nav>
      </Bootstrap.Container>
    </Bootstrap.Navbar>
    </header>
  </div>
      
      )
}
export default NavBar;
