import React,{useState ,useEffect} from 'react'
import "./Table.css"
import axios from 'axios'
import {Link } from 'react-router-dom'


const Table = () => {
  const [users, setUser] =useState([]);

  useEffect(() =>{
   loadUsers();
  }, [])

  const loadUsers = async () => {
    const devEnv = process.env.NODE_ENV !=="production";
    const {REACT_APP_DEV_URL,REACT_APP_DATA_URL} =process.env;
    const result = await axios.get(`${devEnv ? REACT_APP_DEV_URL :REACT_APP_DATA_URL}`);
  setUser(result.data);
  }

const deleteUser = async (id) => {
  const devEnv = process.env.NODE_ENV !=="production";
  const {REACT_APP_DEV_URL,REACT_APP_DATA_URL} =process.env;
await axios.delete(`${devEnv ? REACT_APP_DEV_URL :REACT_APP_DATA_URL}/${id}`);
loadUsers();
}

  const xyz = (x) => {
    if (+x >= 30) {
      console.log(x, "failed");
      return true;
    } else {
      console.log(x, "pass");
      return false;
    }
  };



  return (
    <>
        <table className="table">
  <thead className='heading'>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Student Name</th>
      <th scope="col">Class</th>
      <th scope="col">Result</th>
      <th scope="col">Score</th>
      <th scope="col">Grade</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
users.map((user ,id)  => (
<tr>
  <th scope="col">{id + 1}</th>
      <td className='student-data'>{user.studentName}</td>
      <td className='student-data'>{user.classNo}</td>
      <td className='student-data'>  {xyz(+user.score) ? (
                        <div className="pass-btn btn-outline-none btn-sm">Passed</div>
                      ) : (
                        <div className="fail-btn btn-outline-none btn-sm">Failed</div>
                      )}</td>
      <td className='student-data'>{user.score}</td>
      <td className='student-data'>  {xyz(+user.score) ? (
                        <div className="average"><p style={{color:"#2CA4D8"}}>Excellent</p></div>
                      ) : (
                        <div className="poor"><p style={{color:"#F24643"}}>Poor</p></div>
                      )}</td>
      <td className='student-data'>
        <Link to={`/users/edit/${user.id}`} className="btn btn-outline-none btn-sm"><img src="../Images/edit.png" alt=".."/></Link>
        <Link to="/" className="btn btn-outline-none btn-sm"  onClick={() => deleteUser(user.id)}><img src="../Images/delete.png" alt=".."/></Link>
      </td>
      </tr>
))}
  </tbody>
</table>
    </>
  )
}

export default Table