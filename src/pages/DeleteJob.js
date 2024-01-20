import axios from "axios";
import {v4} from "uuid";
import {Navbar} from "../components/Navbar";

const DeleteJob = () => {
  return(
      <div>
        <div>
          <Navbar />
        </div>

        <div className="flex items-center justify-center">
          <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">Title:</label>
              <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="title"
                  onChange={e => e.target.value}
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
            <div className="mb-6 text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
            </div>
          </form>
        </div>

      </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await axios.post('http://localhost:4414/user/admin/delete-job-post', formData);
  }
};

export {DeleteJob};
