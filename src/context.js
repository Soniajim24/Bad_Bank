import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './Navbar';
import CreateAccount from './CreateAccount';
import Home from './Home';
import Login from './Login';

export const UserContext = React.createContext(null);

function App() {
  const users = [
    {name:'Alice',email:'alice@mit.edu',password:'mit123',balance:100},
    {name:'Bob',email:'bob@mit.edu',password:'mit234',balance:50},
    {name:'Charlie',email:'charlie@mit.edu',password:'mit345',balance:0},
  ];

  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [balance, setBalance] = React.useState(0);
  const [transactions, setTransactions] = React.useState([]);
  const ctx = React.useContext(UserContext);

  function validate(field, label){
    if (!field) {
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
  }

  function handleCreate(name, email, password){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function handleLogin(){
    for (let i=0; i<users.length; i++) {
      if (users[i].email === user && users[i].password === pass) {
        setBalance(users[i].balance);
        setTransactions(users[i].transactions);
        ctx.currentUser = users[i];
        return;
      }
    }
    setStatus('Login failed');
    setTimeout(() => setStatus(''),3000);
  }

  function handleLogout(){
    ctx.currentUser = null;
    setStatus('');
    setBalance(0);
    setTransactions([]);
  }

  return (
    <Router>
      <UserContext.Provider value={{users, currentUser:null}}>
        <Navbar handleLogout={handleLogout} />
        <div className="container" style={{padding: "20px"}}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/login" component={Login} />
        
          </Switch>
        </div>
      </UserContext.Provider>
      </Router>
      )};