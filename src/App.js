import {Suspense} from "react";
import {BrowserRouter, Route, Routes}
  from "react-router-dom";

import {AuthProvider} from "./account/Authentication";
import Login from "./account/Login";
import {Dashboard} from "./account/Dashboard";
import {RequiredAuthentication} from "./account/RequiredAuthentication";
import {Loading} from "./components/Loading";
import {PostJob} from "./pages/PostJob";
import {ChangeApplicantPassword} from "./pages/ChangeApplicantPassword";
import {RemoveApplicant} from "./pages/RemoveApplicant";

import './styles/style.css';

function App() {
  return(
      <Suspense fallback={<Loading />}>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<RequiredAuthentication
                children={<Dashboard />} /> } />
            <Route path='login' element={<Login />} />
            <Route path='post-job' element={<RequiredAuthentication
                children={<PostJob />} />} />
            <Route path='change-applicant-password'
                element={<RequiredAuthentication
                children={<ChangeApplicantPassword />} />} />
            <Route path='remove-applicant' element={<RequiredAuthentication
                children={<RemoveApplicant />} />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </Suspense>
  );
}

export default App;
