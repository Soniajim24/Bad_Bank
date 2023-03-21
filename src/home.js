import React from "react";
import UserContext from './usercontext';

import "bootstrap/dist/css/bootstrap.min.css"


function Home(){
  const ctx = React.useContext(UserContext);  
  return (
    <>
    <h1>Home<br/>
      {JSON.stringify(ctx)}
    </h1>
    </>
  );  
}

export default Home;