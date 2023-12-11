import React from "react";
import {BrowserRouter, Route, Routes}
  from "react-router-dom";
import {AuthProvider} from "./account/Authentication";
import Login from "./account/Login";
import {Dashboard} from "./account/Dashboard";
import {RequiredAuthentication} from "./account/RequiredAuthentication";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RequiredAuthentication
              children={<Dashboard />} /> } />
          <Route path='/login' element={<Login />} />
          <Route path='manage-applicant' element={<Login />} />
          <Route path='post-job' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
