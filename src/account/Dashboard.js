import React from "react";
import {Link} from "react-router-dom";

function Dashboard() {
  return(
      <div className="h-screen flex justify-center items-center
          bg-gray-100 font-poppins font-semibold">
        <div className="space-y-2 bg-gray-200 p-8 rounded-3xl">
          <div><Link className="text-black no-underline" to='/post-job'>Post Job</Link></div>
          <div><Link className="text-black no-underline" to='/delete-job'>Delete Job</Link></div>
          <div><Link className="text-black no-underline" to='/change-applicant-password'>
            Change Applicant Password</Link></div>
          <div><Link className="text-black no-underline" to='/change-password'>Change Password</Link></div>
          <div><Link className="text-black no-underline" to='/logout'>Logout</Link></div>
        </div>
      </div>
  );
}
export {Dashboard};