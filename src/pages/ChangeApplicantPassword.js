import React from "react";
import {Navbar} from "../components/Navbar";
import axios from "axios";

const ChangeApplicantPassword = () => {
  return(
      <div>
      <div>
        <Navbar />
      </div>

      <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onClick={handleSubmit}>
        <div className="mb-4">
          <label htmlFor='email' className="block text-gray-700 text-sm font-bold mb-2">Email of Applicant:</label>
          <input type='email' name='email'
          		className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e =>
              e.target.value} />
        </div>

        <div className="mb-4">
          <label htmlFor='password' className="block text-gray-700 text-sm font-bold mb-2">New Password for Applicant:</label>
          <input type='password' name='password'
          		className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e =>
              e.target.value} />
        </div>
        <div className="flex items-center justify-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
      </div>
      </div>
  );

  async function handleSubmit(e) {
    const formData = new FormData(e.currentTarget);

    await axios.put(
        'http://localhost:4414/user/admin//change-applicant-password',
        formData)
  }
}

export {ChangeApplicantPassword}
