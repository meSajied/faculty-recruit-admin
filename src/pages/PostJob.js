import React, {useState} from "react";
import axios from "axios";
import {v4} from "uuid";

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [position, setPosition] = useState('');
  const [advertised, setAdvertised] = useState('');
  const [deadline, setDeadline] = useState('');
  const [department, setDepartment] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleDeadline = (e) => {
    setDeadline(e.target.value);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPdfFile(file);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    formData.append('id', v4());

    const data = Object.fromEntries(formData);
    console.log(data);
    await axios.post('http://localhost:4414/user/admin/createjobpost', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => {
      console.log(res);
    })

  };

  return(
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
              required
          />
        </div>

        <div>
          <label htmlFor="department">Position:</label>
          <select name="department" value={department} onChange={e =>
              setDepartment(e.target.value)} required>
            <option value="">Select Department</option>
            <option value="cse">CSE</option>
            <option value="eee">EEE</option>
          </select>
        </div>

        <div>
          <label htmlFor="position">Position:</label>
          <select name="position" value={position} onChange={handlePositionChange} required>
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
              value={advertised}
              onChange={e =>
                  setAdvertised(e.target.value)}
              required
          />
        </div>

        <div>
          <label htmlFor='deadline'>Deadline:</label>
          <input
              type="date"
              name="deadline"
              value={deadline}
              onChange={handleDeadline}
              required
          />
        </div>

        <div>
          <label htmlFor="file">Choose PDF File:</label>
          <input
              type="file"
              name="file"
              accept=".pdf"
              onChange={handleFileChange}
              required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
  );
};

export {PostJob};