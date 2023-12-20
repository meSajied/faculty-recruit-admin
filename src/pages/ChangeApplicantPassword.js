import React from "react";
import {Navbar} from "../components/Navbar";
import axios from "axios";

const ChangeApplicantPassword = () => {
  return(
      <div>
      <div>
        <Navbar />
      </div>

      <div>
      <form onClick={handleSubmit}>
        <div>
          <label htmlFor='email'>Email of Applicant:</label>
          <input type='email' name='email' onChange={e =>
              e.target.value} />
        </div>

        <div>
          <label htmlFor='password'>New Password for Applicant:</label>
          <input type='password' name='password' onChange={e =>
              e.target.value} />
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