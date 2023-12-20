import axios from "axios";
import {v4} from "uuid";
import {Navbar} from "../components/Navbar";

const PostJob = () => {
  return(
      <div>
        <div>
          <Navbar />
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                  type="hidden"
                  name="id"
                  value={v4()}
                  required
              />
            </div>

            <div>
              <label htmlFor="title">Title:</label>
              <input
                  type="text"
                  name="title"
                  onChange={e => e.target.value}
                  required
              />
            </div>

            <div>
              <label htmlFor="department">Position:</label>
              <select name="department" onChange={e =>
                  e.target.value} required>
                <option value="">Select Department</option>
                <option value="cse">CSE</option>
                <option value="eee">EEE</option>
              </select>
            </div>

            <div>
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

            <div>
              <label htmlFor='advertised'>Advertised:</label>
              <input
                  type="date"
                  name="advertised"
                  onChange={e =>
                      e.target.value}
                  required
              />
            </div>

            <div>
              <label htmlFor='deadline'>Deadline:</label>
              <input
                  type="date"
                  name="deadline"
                  onChange={e => e.target.value}
                  required
              />
            </div>

            <div>
              <label htmlFor="file">Choose PDF File:</label>
              <input
                  type="file"
                  name="file"
                  accept=".pdf"
                  onChange={e =>
                      e.target.files[0]}
                  required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>

      </div>
  );

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    await axios.post('http://localhost:4414/user/admin/create-job-post', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
};

export {PostJob};