import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import NavBar from './NavBar';
import CreateAccount from './createaccount';
import Deposit from './deposit';
import Withdraw from './withdraw';
import AllData from './alldata';

function App() {
  return (
    <>
    <Router>
        <NavBar />
        <div className="container">
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createAccount" element={<CreateAccount />}  />
            <Route path="/deposit" element={<Deposit/>} />
            <Route path="/withdraw" element={<Withdraw/>} />
            <Route path="/allData" element={<AllData/>} />
            </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;
