import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home';
import NavBar from './NavBar';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';

export default function App() {

  return (
    <>
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/createAccount"
              element={
                <>
                <CreateAccount
                />
                </>
              }
            />
            <Route
              path="/deposit"
              element={<Deposit />}
            />
            <Route
              path="/withdraw"
              element={<Withdraw />}
            />
            <Route
              path="/allData"
              element={<AllData />}
            />
          </Routes>
        </div>
      </Router>
      </>
  )};
    
