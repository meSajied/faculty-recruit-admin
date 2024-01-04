import React from "react";
import {useAuth} from "./Authentication";
import {Navigate} from "react-router";

function RequiredAuthentication({children}) {

  let loggedIn = true

  return(
      loggedIn ? children : <Navigate to='/login' />
  )
}

export {RequiredAuthentication};
