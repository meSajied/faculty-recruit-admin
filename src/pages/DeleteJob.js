import axios from "axios";
import {Navbar} from "../components/Navbar";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const DeleteJob = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4414/job");
        setJobData(response.data);
      } catch (error) {
        console.error("Error fetching job data:", error);
      }
    };

    fetchData();
  }, []);

  const getJobData = () => {
    if(jobData.length === 0) {
      return (<div className="p-3 font-garamond text-3xl text-center">No Openings</div>)
    }else {
      return jobData.map((item, index) => (
          <div className="p-3 font-garamond text-[18px]" key={index}>
            <div className="text-3xl">{item.title}</div>

            <div className="flex">
              <div className="flex-grow font-semibold m-2">
                Department: {item.department}
              </div>

              <div className="m-2 flex-grow">
                <div className="flex-grow font-semibold">
                  Advertised: <code className="code">{item.advertised}</code>
                </div>

                <div className="flex-grow font-semibold">
                  Deadline: <code className="code">{item.deadline}</code>
                </div>
              </div>
            </div>

            <div>
              <div>{item.summary}</div>
            </div>

            <div className="mt-3">
              <Link className="no-underline bg-gray-400 bordar rounded p-2 mx-2 text-white"
                    to={`http://localhost:4414/pdfs/${item.id}`}>Job Details</Link>

              <button className="no-underline bg-black bordar rounded p-2 mx-2 text-white"
                    onClick={e => deleteJob(item.id, e)}>Delete</button>
            </div>
          </div>
      ));
    }
  }

  async function deleteJob(jobId, e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4414/admin/delete-job-post", {id: jobId}, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => {
        if(res.data?.msg === "OK") {
          setShowSuccess(true)
        }else {
          setShowFailure(true)
        }
      })
    }catch(e) {
      setShowFailure(true)
      console.log(e)
    }
  }

  return(
      <div>
        <div>
          <Navbar />
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            {showSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded flex">
                  <p>Deleted job opening.</p>
                  <span
                      className="ml-auto cursor-pointer"
                      onClick={() => setShowSuccess(false)}
                  >
              &times;
            </span>
            </div>
            ) : showFailure ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex">
                  <p>Could not delete job opening</p>
                  <span
                      className="ml-auto cursor-pointer"
                      onClick={() => setShowFailure(false)}
                  >
              &times;
            </span>
                </div>
            ): null}

            <div>
              {getJobData()}
            </div>
          </div>
        </div>

      </div>
  );
};

export {DeleteJob};
