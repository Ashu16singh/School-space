import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import './Update.css'

const Update = () => {
  let navigate = useNavigate();
  let { id } = useParams();
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
    await axios.put(`${devEnv ? REACT_APP_DEV_URL :REACT_APP_DATA_URL}/${id}`, user);
    navigate("/");
  };

  const  onCancel = e =>{
    e.preventDefault();
    navigate("/");
    }
  

  const loadUser = async () => {
    const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_DEV_URL,REACT_APP_DATA_URL} =process.env;
    const result = await axios.get(`${devEnv ? REACT_APP_DEV_URL :REACT_APP_DATA_URL}/${id}`);
    setUser(result.data);
  };
  
  useEffect(() => {
    loadUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6 m-auto">
            <div className="card">
              <div className="card-head">
                <h3>Edit student</h3>
              </div>
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
                    <label className="form-label" htmlFor="my-input">
                      RESULT
                    </label>
                    <input class="form-control" type="text" value={result}  aria-label="readonly input example" readonly>
              </input>
              
                  </div>
                  <div>
                    <label className="form-label" htmlFor="my-input">
                      GRADE
                    </label>
                    <input class="form-control" type="text" value={grade}  aria-label="readonly input example" readonly>
              
              </input>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-end">
                    <button className="cancel-btn btn-primary" onClick={e => onCancel(e)} type="submit">
                      CANCEL
                    </button>
                    <button
                      className="confirm-btn btn-secondary"
                      onClick={(e) => onSubmit(e)}
                      type="submit"
                    >
                      CONFIRM
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;
