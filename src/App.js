import {Suspense} from "react";
import {BrowserRouter, Route, Routes}
  from "react-router-dom";

import {AuthProvider} from "./account/Authentication";
import Login from "./account/Login";
import {Dashboard} from "./account/Dashboard";
import {RequiredAuthentication} from "./account/RequiredAuthentication";
import {Loading} from "./components/Loading";
import {PostJob} from "./pages/PostJob";

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
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      </Suspense>
  );
}

export default App;
