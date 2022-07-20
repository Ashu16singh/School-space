import "./AddStudent.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    studentName: "",
    classNo: "",
    result: "",
    score: "",
    grade: "",
  });


  const { studentName, classNo, result, score, grade } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_DEV_URL,REACT_APP_DATA_URL} =process.env;
    await axios.post(`${devEnv ? REACT_APP_DEV_URL :REACT_APP_DATA_URL}`, user);
    navigate("/");
  };
 const  onCancel = e =>{
  e.preventDefault();
  navigate("/");
  }

  return (
    <>
      <div className="container">
            <div className="card">
              <div className="card-head">
                <h3 className="p-3">Add student</h3>
              </div>
              <hr className="border"/>
              <div className="card-body">
                <form type="submit" onSubmit={(e) => onSubmit(e)}>
                  <div>
                    <label className="form-label">STUDENT NAME*</label>
                    <input
                      className="form-control"
                      name="studentName"
                      type="text"
                      value={studentName}
                      onChange={(e) => onInputChange(e)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label">CLASS*</label>
                    <input
                      className="form-control"
                      name="classNo"
                      type="text"
                      value={classNo}
                      onChange={(e) => onInputChange(e)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label">SCORE*</label>
                    <input
                      className="form-control"
                      name="score"
                      value={score}
                      onChange={(e) => onInputChange(e)}
                      required
                    ></input>
                  </div>
                  <div>
                    <label className="form-label" htmlFor="my-input">RESULT</label>
                    <input class="form-control" type="text" value={result}  aria-label="readonly input example" readonly>
              
                  </input>
            
                  </div>
                  <div>
                    <label className="form-label" htmlFor="my-input">GRADE</label>
                    <input class="form-control" type="text" value={grade} aria-label="readonly input example" readonly>
            
                    </input>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <button className="cncl-btn btn-primary" onClick={e => onCancel(e)} type="submit">
                      CANCEL
                    </button>
                    <button className="cnf-btn btn-light" onClick={e => onSubmit(e)} type="submit">
                      CONFIRM
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
    </>
  );
};

export default AddStudent;
