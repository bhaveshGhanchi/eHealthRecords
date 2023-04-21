import React, { useState } from "react";
import "./Patient.css";
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
            <section className="demographics">
              <div className="divHead">
                <h4>General Information</h4>
                <Divider orientation="vertical" flexItem />
              </div>
              <div className="gridOuter">
                <Grid container spacing={4} rowSpacing={-4} columnSpacing={-4}>
                  <Grid className="gridInner" xs={12} md={6}>
                    <Avatar
                      sx={{ height: "120px", width: "120px" }}
                      src=""
                      alt={id}
                    />
                  </Grid>
                  <Grid className="gridInner" xs={12} md={6}>
                    <div className="innerGridDetails">
                      <Grid
                        container
                        rowSpacing={1}
                        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                      >
                        <Grid item xs={6}>
                          <h5>patient id:</h5>
                        </Grid>
                        <Grid item xs={6}>
                          <h5> 18902</h5>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Name:</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Patient name</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Email:</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>email@something.com</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>phone no:</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>1234567890</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Age:</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>34</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Gender</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Male</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>DOB:</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>23/03/2002</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>address:</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptatem atque maiores optio quasi sint
                            exercitationem quas reprehenderit quisquam, maxime
                            possimus, facilis quam ad vel quibusdam mollitia,
                            dolorem facere corporis provident?
                          </h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>maritialStatus</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>No</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>employmentStatus</h6>
                        </Grid>
                        <Grid item xs={6}>
                          <h6>Unemployed</h6>
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
