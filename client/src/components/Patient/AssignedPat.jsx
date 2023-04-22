import React, { useState } from "react";
import "./doctor.css";
import doctor1 from './../../assets/pat1.jpg';
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const AssignedPat = () => {
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
                <div className="contact-card">
                    
                    <img src={doctor1} className="incircle" />
                    
                    <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="title1" >Id: </p>
                          <p className="sub1" > 261409</p></div>
                        <div className="info-group">
                          <p className="title1" >Age: </p>
                          <p className="sub1" > 22 Years</p></div>
                        <div className="info-group">
                          <p className="title1" >Symptoms:</p>
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="title1" >Disease: </p>
                          <p className="sub1" > Diabetes</p></div>
                        <br />
                        <button className="footeDoc">View Full Profile</button>
                    </div>
                    
                </div>  
                <div className="contact-card">
                <img src={doctor1} className="incircle" />
                    
                <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="title1" >Id: </p>
                          <p className="sub1" > 261409</p></div>
                        <div className="info-group">
                          <p className="title1" >Age: </p>
                          <p className="sub1" > 22 Years</p></div>
                        <div className="info-group">
                          <p className="title1" >Symptoms:</p>
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="title1" >Disease: </p>
                          <p className="sub1" > - </p></div>
                        <br />
                        <button className="footeDoc">View Full Profile</button>
                    </div>
                    
                </div>
                <div className="contact-card">
                <img src={doctor1} className="incircle" />
                    
                  <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="title1" >Id: </p>
                          <p className="sub1" > 261409</p></div>
                        <div className="info-group">
                          <p className="title1" >Age: </p>
                          <p className="sub1" > 22 Years</p></div>
                        <div className="info-group">
                          <p className="title1" >Symptoms:</p>
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="title1" >Disease: </p>
                          <p className="sub1" > Cancer</p></div>
                        <br />
                        <button className="footeDoc">View Full Profile</button>
                    </div>
                    
                </div>
                <div className="contact-card">
                    
                    <img src={doctor1} className="incircle" />
                    
                    <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="title1" >Id: </p>
                          <p className="sub1" > 261409</p></div>
                        <div className="info-group">
                          <p className="title1" >Age: </p>
                          <p className="sub1" > 22 Years</p></div>
                        <div className="info-group">
                          <p className="title1" >Symptoms:</p>
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="title1" >Disease: </p>
                          <p className="sub1" > Diabetes</p></div>
                        <br />
                        <button className="footeDoc">View Full Profile</button>
                    </div>
                    
                </div><div className="contact-card">
                    
                    <img src={doctor1} className="incircle" />
                    
                    <div className="InsidePatInfo">
                        <h2>Ms. Mary Dsouza</h2>
                        <div className="info-group">
                          <p className="title1" >Id: </p>
                          <p className="sub1" > 261409</p></div>
                        <div className="info-group">
                          <p className="title1" >Age: </p>
                          <p className="sub1" > 22 Years</p></div>
                        <div className="info-group">
                          <p className="title1" >Symptoms:</p>
                          <p className="sub1" >Cold, Cough and Fever</p></div>
                        <div className="info-group">
                          <p className="title1" >Disease: </p>
                          <p className="sub1" > Diabetes</p></div>
                        <br />
                        <button className="footeDoc">View Full Profile</button>
                    </div>
                    
                </div>
            </div>
            {!admin ? (
              <>
                <section className="demographics">
                  <div className="divHead">
                    <h4>Family History</h4>
                    <Divider orientation="vertical" flexItem />
                  </div>
                  <div className="gridOuter">
                    <Grid
                      container
                      spacing={4}
                      rowSpacing={-4}
                      columnSpacing={-4}
                    >
                      <Grid className="gridInner" xs={12}>
                        <div className="innerGridDetails">
                          <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid item xs={5}>
                              <h6>familial disorders:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Obcaecati sed doloremque odio,
                                sequi, temporibus veritatis iusto adipisci quia
                                eveniet exercitationem tempora. Adipisci animi
                                deleniti sequi quo porro quibusdam corporis
                                facere.
                              </h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>risk Factor:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Obcaecati sed doloremque odio,
                                sequi, temporibus veritatis iusto adipisci quia
                                eveniet exercitationem tempora. Adipisci animi
                                deleniti sequi quo porro quibusdam corporis
                                facere.
                              </h6>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      {/* <Grid className="imageGrid" xs={0} md={3}>

                    </Grid> */}
                      <Grid className="gridInner" xs={12} md={12}></Grid>
                    </Grid>
                  </div>
                </section>
                <section className="demographics">
                  <div className="divHead">
                    <h4>Allergies</h4>
                    <Divider orientation="vertical" flexItem />
                  </div>
                  <div className="gridOuter">
                    <Grid
                      container
                      spacing={4}
                      rowSpacing={-4}
                      columnSpacing={-4}
                    >
                      <Grid className="gridInner" xs={12}>
                        <div className="innerGridDetails">
                          <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid item xs={5}>
                              <h6>food and medication allergy:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Obcaecati sed doloremque odio,
                                sequi, temporibus veritatis iusto adipisci quia
                                eveniet exercitationem tempora. Adipisci animi
                                deleniti sequi quo porro quibusdam corporis
                                facere.
                              </h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>anaphylaxis:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>
                                {" "}
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Obcaecati sed doloremque odio,
                                sequi, temporibus veritatis iusto adipisci quia
                                eveniet exercitationem tempora. Adipisci animi
                                deleniti sequi quo porro quibusdam corporis
                                facere.
                              </h6>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>

                      <Grid className="gridInner" xs={12} md={12}></Grid>
                    </Grid>
                  </div>
                </section>
                <section className="demographics">
                  <div className="divHead">
                    <h4>Lab Orders/Values</h4>
                    <Divider orientation="vertical" flexItem />
                  </div>
                  <div className="gridOuter">
                    <Grid
                      container
                      spacing={4}
                      rowSpacing={-4}
                      columnSpacing={-4}
                    >
                      <Grid className="gridInner" xs={12}>
                        <div className="innerGridDetails">
                          <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                          >
                            <Grid item xs={5}>
                              <h6>haemoglobin:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>haemoglobin</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>RBC:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>WBC:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>platelet:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>ESR:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>glucose:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>cholesterol:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                            <Grid item xs={5}>
                              <h6>thyroid:</h6>
                            </Grid>
                            <Grid item xs={7}>
                              <h6>12.5</h6>
                            </Grid>
                          </Grid>
                        </div>
                      </Grid>
                      {/* <Grid className="imageGrid" xs={0} md={3}>

                    </Grid> */}
                      <Grid className="gridInner" xs={12} md={12}></Grid>
                    </Grid>
                  </div>
                </section>
              </>
            ) : (
              <></>
            )}
            {/* <section id="demographics">
                
            </section> */}
          </>
        )}
      </div>
    </>
  );
};

export default AssignedPat;
