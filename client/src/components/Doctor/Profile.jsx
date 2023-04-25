import React, { useState,useEffect } from "react";
import "./profile.css";
import Header from "../Header/Header";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';
import axios from "axios";
// import { set } from "mongoose";

const Profile = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [expandedReports, setExpandedReports] = React.useState(false);

    const handleChangeReports = (panel) => (event, isExpanded) => {
        setExpandedReports(isExpanded ? panel : false);
    };
    const [expandedPres, setExpandedPres] = React.useState(false);

    const handleChangePres = (panel) => (event, isExpanded) => {
        setExpandedPres(isExpanded ? panel : false);
    };
    const [show, setShow] = useState(false);
    const toggle = () => setShow((prevState) => !prevState);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [userdata,setData] = useState({})
    const id = useParams().id;

    async function getUserData() {
        try {
            const response = await axios.get(`http://localhost:8989/UserData/GetPatientDetails/${id}`);
            await setData(response.data);
            
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserData();
        // console.log(userdata);
    }, [])
    console.log(userdata);
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
                                    <Grid className="gridInner" xs={12} md={5}>
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
                                                    <h5>Doctor id:</h5>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h5> 18902</h5>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6>Name:</h6>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    {/* <h6>{userdata.user.name}</h6> */}
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6>Email:</h6>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6>email@something.com</h6>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6>Contact no:</h6>
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
                                                    <h6>Gender:</h6>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6>Male</h6>
                                                </Grid>
                                                <Grid item xs={6}>
                                                <h6>Specialization:</h6>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <h6>Peadiatrics</h6>
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
                                        <h4>Education</h4>
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
                                                        <Grid item xs={4}>
                                                            <h6>M.B.B.S:</h6>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <h6>
                                                                {" "}
                                                                AIIMS Nagpur - All India Institute of Medical Sciences Nagpur.<br/>Location: Nagpur, Maharashtra.
                                                            </h6>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <h6>M.D in Paediatrics:</h6>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <h6>
                                                                {" "}
                                                                Armed Forces Medical College. <br/> Location: Pune, Maharashtra.
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
                                        <h4>Work Experience</h4>
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
                                                        <Grid item xs={4}>
                                                            <h6>Family Doctor: <br/> 06/2019 - Current </h6>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <h6>
                                                                {" "}
                                                                I have Worked in primary care practices, where they see patients of all ages for routine check-ups, illnesses, and chronic conditions. Have often been called upon to provide emergency medical care in a hospital emergency room or urgent care center. Referred patients to specialists when necessary.
                                                            </h6>
                                                        </Grid>
                                                        <Grid item xs={4}>
                                                            <h6>Attending Doctor: <br/> 08/2016 - 05/2019</h6>
                                                        </Grid>
                                                        <Grid item xs={8}>
                                                            <h6>
                                                                {" "}
                                                                Supervised 10 medical students, fellows and residents. Increased new patients by 10% through recommendations and marketing Strategy.
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

export default Profile;
