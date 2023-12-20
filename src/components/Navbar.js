import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
      <div>
        <div>
          <Link to='/post-job'>Post Job</Link>
        </div>

        <div>
          <Link to='/delete-job'>Delete Job</Link>
        </div>

        <div>
          <Link to='/remove-applicant'>Remove Applicant</Link>
        </div>

        <div>
          <Link to='/change-applicant-password'>Change Applicant Password</Link>
        </div>
      </div>
  )
}

export {Navbar};