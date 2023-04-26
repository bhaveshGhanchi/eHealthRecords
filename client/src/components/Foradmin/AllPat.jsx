import React, { useState, useEffect } from "react";
import "./alldoc.css";
import doctor1 from './../../assets/pat1.jpg';
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import axios from "axios";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '20%',
  left: '50%',
  transform: 'translate(-50%, -20%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const AllPat = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prevState) => !prevState);
  const [admin, setAdmin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [arePat, setArePat] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  async function getPatients() {
    try {
      const response = await axios.get(`http://localhost:8989/UserAuth/getAllPatient`);
      console.log(response.data);
      setUserData(response.data)
      
      // console.log(userdata);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPatients();
  }, [])

  const PatientElement = userData.map(data => {
    return(
    <tr className="contact-card">
      <td><img src={doctor1} className="incircle" /></td>
      <td ><h2>{data.name}</h2></td>
      <td><div className="sub1" >261409</div></td>
      <td><div className="sub1" >Cold, Cough and FeverCold, Cough and Fever</div></td>
      <td><div className="sub1" >Cancer</div></td>
      <td><div>
      <Button onClick={handleOpen}>Appoint</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">Appointing the Doctor</Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div></td>
    </tr>
    )
  })

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
                    <th>Symptoms</th>
                    <th>Disease</th>
                    <th>Assign</th>
                  </tr>
                </thead>
                <tbody>
                  {PatientElement}

                  {/* <tr className="contact-card">
                                <td><img src={doctor1} className="incircle" /></td>
                                <td><h2>Ms. Mary Dsouza</h2></td>
                                <td><div className="sub1" >261409</div></td>
                                <td><div className="sub1" >Cold, Cough and Fever</div></td>
                                <td><div className="sub1" >-</div></td>
                                <td><button className="footeDoc" >Appoint</button></td>
                            </tr>

                            <tr className="contact-card">
                                <td><img src={doctor1} className="incircle" /></td>
                                <td><h2>Ms. Mary Dsouza</h2></td>
                                <td><div className="sub1" >261409</div></td>
                                <td><div className="sub1" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam numquam, quas autem quis veritatis iusto aliquam, cumque impedit quaerat molestias laudantium minima facilis. Doloribus praesentium labore perferendis ipsum quisquam architecto. Cumque earum deserunt magnam commodi odit fuga adipisci! Aspernatur consequatur mollitia eaque sunt odit possimus deleniti illo soluta, d.</div></td>
                                <td><div className="sub1" >Diabetes</div></td>
                                <td><button className="footeDoc" >Appoint</button></td>
                            </tr> */}

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

export default AllPat;
