import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return(
      <div>
        <div>
          <Link to='manage-applicant'>Manage Applicant</Link>
        </div>

        <div>
          <Link to='post-job'>Post Job</Link>
        </div>
      </div>
  )
}

export {Navbar};