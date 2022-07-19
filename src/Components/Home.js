import React from "react";
import "./Home.css";
import Table from "./Table";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="sidebar col-md-3">
          <div className="d-flex justify-content-between">
          <button className="badge">
              {" "}
              <img className="head-img ml-8" src="../Images/badge.png" alt="badge" />
            </button>
            <h3 className="head-title">School Space</h3>
          </div>
            <hr />
            {/* <div className="dashboard-content"> */}
            <table className="table-borderless">
        <tbody className="tbody">
     <tr>
       <th  scope="row"><img src="../Images/Dashboard.png" alt="."/></th>
       <td className="table-data">Dashboard</td>
     </tr>

    <tr>
       <th scope="row"><img src="../Images/Courses.png" alt="."/></th>
       <td className="table-data">Courses</td>

     </tr>
     <tr>
       <th scope="row"><img src="../Images/Students.png" alt="."/></th>
       <td className="table-data">Student</td>
     </tr>
     <tr>
       <th scope="row"><img src="../Images/Exams.png" alt="."/></th>
       <td className="table-data">Exam</td>
     </tr>
     <tr>
       <th scope="row"><img src="../Images/Result.png" alt="."/></th>
       <td className="table-data">Result</td>
     </tr>
     <tr>
       <th scope="row"><img src="../Images/Noticeboard.png" alt="."/></th>
       <td className="table-data">Notice Board</td>
     </tr>
     <tr>
       <th scope="row"><img src="../Images/LiveClassess.png" alt="."/></th>
       <td className="table-data">Live Classes</td>
     </tr>
     <tr>
       <th scope="row"><img src="../Images/Notification.png" alt="."/></th>
       <td className="table-data">Notifications</td>
     </tr>
   </tbody>
 </table>
            
          </div>

          <div className=" col-md-9 " style={{background: '#F3F5F8'}}>
            <div className="col d-flex justify-content-between mt-5">
              <h3 className="ml-3">Students</h3>
              <Link className="add btn btn-primary" to="/users/add">
                + ADD
              </Link>
            </div>
            <div className="row">
             <Table/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

