import React from "react";
import {Link} from "react-router-dom";

import '../styles/style.css'

const Navbar = () => {
  return(
      <nav className="font-poppins text-center bg-gray-200 p-3
          space-y-3 sm:space-y-0 sm:flex sm:flex-wrap">
        <div className="space-y-1 sm:space-y-0 sm:basis-4/5
            sm:flex sm:flex-wrap sm:space-x-8">
          <div>
            <Link className="no-underline text-black" to='/post-job'>
              Post Job
            </Link>
          </div>

          <div>
            <Link className="no-underline text-black" to='/delete-job'>
              Delete Job
            </Link>
          </div>

          <div>
            <Link className="no-underline text-black"
                to='/remove-applicant'>
              Remove Applicant
            </Link>
          </div>

          <div>
            <Link className="no-underline text-black"
                to='/change-applicant-password'>
              Change Applicant Password
            </Link>
          </div>
        </div>

        <div className="space-y-1 sm:space-y-0 sm:basis-1/5
            sm:flex sm:flex-wrap sm:space-x-8">
          <div>
            <Link className="no-underline text-black"
                to=''>Change Password</Link>
          </div>

          <div>
            <Link className="no-underline text-black" to=''>
              Logout
            </Link>
          </div>
        </div>
      </nav>
  )
}

export {Navbar};