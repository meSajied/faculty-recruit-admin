import {Navigate} from "react-router";

const Logout = () => {
  return(
      <Navigate to='/login' />
  );
}

export {Logout};