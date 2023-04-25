import React, { useState } from "react";
import "./alldoc.css";
import doctor1 from './../../assets/doctor1.png';
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const AllDoc = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prevState) => !prevState);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const id = useParams().id;
  console.log(id);
  return (
    <>
      <Header />
      <div className="mainPage">
        {loading ? (
          <CircularProgress />
        ) : (
          <>
            <div className="contacts">

                    <table className="table-responsive">
                        <thead>
                            <tr className="contact-head">
                                <th>Photo</th>
                                <th>Name</th>
                                <th>ID</th>
                                <th>Specialization</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="contact-card">
                                <td><img src={doctor1} className="incircle" /></td>
                                <td ><h2>Dr. Harish</h2></td>
                                <td><div className="sub1" >261409</div></td>
                                <td><div className="sub1" >Pediatrics</div></td>
                                {/* <td><div className="sub1" ></div></td> */}
                            </tr>

                            <tr className="contact-card">
                                <td><img src={doctor1} className="incircle" /></td>
                                <td><h2>Dr. Harish Ramchandran</h2></td>
                                <td><div className="sub1" >261409</div></td>
                                <td><div className="sub1" >Family Doctor</div></td>
                                {/* <td><div className="sub1" ></div></td> */}
                            </tr>

                            <tr className="contact-card">
                                <td><img src={doctor1} className="incircle" /></td>
                                <td><h2>Dr. Ramesh Shah</h2></td>
                                <td><div className="sub1" >261409</div></td>
                                <td><div className="sub1" >Pediatrics</div></td>
                                {/* <td><div className="sub1" ></div></td> */}
                            </tr>
                        
                        </tbody>
                    </table>

                {/* <div className="contact-head">
                    <div>Photo</div>
                    <div>Patient's Name</div>
                    <div>Id</div>
                    <div>Symptoms</div>
                    <div>Disease</div>

                </div>
                <div className="contact-card">
                    
                    <img src={doctor1} className="incircle" />
                    
                    <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="sub1" > 261409</p></div>
                        <div className="info-group">
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="sub1" > Diabetes</p></div>
                        <br />
                        <button className="footeDoc" >View Full Profile</button>
                    </div>
                    
                </div>  
                <div className="contact-card">
                <img src={doctor1} className="incircle" />
                    
                <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="sub1" > 261410</p></div>
                        <div className="info-group">
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="sub1" > - </p></div>
                        <br />
                        <button className="footeDoc">View Full Profile</button>
                    </div>
                    
        </div>*/}
                
                    
            </div> 
            
          </>
        )}
      </div>
    </>
  );
};

export default AllDoc;
