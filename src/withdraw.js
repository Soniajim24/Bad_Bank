import React from "react";
import UserContext from './usercontext';

function Withdraw(){

    const ctx = React.useContext(UserContext);
      return (
        <h1>Deposit<br/>
          {JSON.stringify(ctx)}
        </h1>
   
      )
  }

  export default Withdraw;