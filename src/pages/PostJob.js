import axios from "axios";
import {v4} from "uuid";
import {Navbar} from "../components/Navbar";
import {useRef, useState} from "react";

const PostJob = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const input = useRef();

  const [formData, setFormData] = useState({
    id: v4(),
    title: "",
    summary: "",
    department: "",
    position: "",
    advertised: "",
    deadline: ""
  });

  function handleChange(e) {
    const {name, value, files} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === 'file' ? files[0] : value
    }))
  }

  return (
      <div>
        <div>
          <Navbar />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            {showSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex">
                  <p>Job opening created</p>
                  <span
                      className="ml-auto cursor-pointer"
                      onClick={() => setShowSuccess(false)}
                  >
              &times;
            </span>
                </div>
            ) : showFailure ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex">
                      <p>Could not create job opening.</p>
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
              <input
                  type="text"
                  name="id"
                  value={formData.id}
                  ref={input}
                  required
              />
            </div>

            <div className="mb-4">
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
              <label className="block text-gray-700 text-sm font-bold mb-2 resize-none" htmlFor="summary">Summary:</label>
              <textarea
                  className=" resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="summary"
                  value={formData.summary}
                  onChange={handleChange}
                  required
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="department">Department:</label>
              <select name="department"
                      value={formData.department}
                      onChange={handleChange}
                      required>
                <option value="">Select Department</option>
                <option value="cse">CSE</option>
                <option value="eee">EEE</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="position">Position:</label>
              <select name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required>
                <option value="">Select Position</option>
                <option value="Professor">Professor</option>
                <option value="Assistant Professor">Assistant Professor</option>
                <option value="Associate Professor">Associate Professor</option>
                <option value="Lecturer">Lecturer</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor='advertised'>Advertised:</label>
              <input
                  type="date"
                  name="advertised"
                  value={formData.advertised}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="mb-4">
              <label htmlFor='deadline'>Deadline:</label>
              <input
                  type="date"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="file">Choose PDF File:</label>
              <input
                  type="file"
                  name="file"
                  ref={input}
                  accept=".pdf"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  
                  onChange={handleChange}
                  required
              />
            </div>
            <div className="mb-6">
              <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                <div className="mx-4"></div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >Clear Form</button>
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
      await axios.post('http://localhost:4414/admin/create-job-post', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(res => {
        console.log(res.data?.msg);
        res.data?.msg === "OK"? setShowSuccess(true) : setShowFailure(true);
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
      id: v4(),
      title: "",
      summary: "",
      department: "",
      position: "",
      advertised: "",
      deadline: ""
    });

    if(input.current) {
      input.current.value = ""
    }
  }
};

export {PostJob};
