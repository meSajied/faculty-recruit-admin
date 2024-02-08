import axios from "axios";
import {Navbar} from "../components/Navbar";
import {useState} from "react";

const DeleteJob = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    position: ""
  });

  function handleChange(e) {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return(
      <div>
        <div>
          <Navbar />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            {showSuccess ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex">
                  <p>Login failed. Please check your credentials and try again.</p>
                  <span
                      className="ml-auto cursor-pointer"
                      onClick={() => setShowSuccess(false)}
                  >
              &times;
            </span>
                </div>
            ) : showFailure ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex">
                  <p>Login failed. Please check your credentials and try again.</p>
                  <span
                      className="ml-auto cursor-pointer"
                      onClick={() => setShowFailure(false)}
                  >
              &times;
            </span>
                </div>
            ): null}

            <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="department">Position:</label>
              <select name="department" onChange={e =>
                  e.target.value} required>
                <option value="">Select Department</option>
                <option value="cse">CSE</option>
                <option value="eee">EEE</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="position">Position:</label>
              <select name="position" onChange={e =>
                  e.target.value} required>
                <option value="">Select Position</option>
                <option value="Professor">Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Lecturer">Lecturer</option>
              </select>
            </div>
            <div className="mb-6">
              <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                <div className="mx-4"></div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Clear Form</button>
              </div>
            </div>
          </form>
          </div>
        </div>

      </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4414/user/admin/delete-job-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        res.msg === "OK"? setShowSuccess(true) : setShowFailure(true);
      })
      clearData();
    }catch(e) {
      console.log(e);
      setShowFailure(true);
      clearData();
    }
  }

  function clearData() {
    setFormData({
      title: "",
      department: "",
      position: ""
    })
  }
};

export {DeleteJob};
