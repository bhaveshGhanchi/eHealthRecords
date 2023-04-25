import React, { useState,useEffect } from "react";
import "./Patient.css";
import AddReport from "./AddReport";
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

const Patient = () => {
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
            // console.log(response.data);
            setData(response.data)
            // console.log(userdata);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserData();
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
                                                    <h6></h6>
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
                                <section className="profile_container">
                                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                Reports
                                            </Typography>
                                            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {/* Inner Accordation */}
                                                <Accordion expanded={expandedReports === 'panel1'} onChange={handleChangeReports('panel1')}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1bh-content"
                                                        id="panel1bh-header"
                                                    >
                                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                            <Link href="#" color="inherit" underline="hover">
                                                                Report_name
                                                            </Link>

                                                        </Typography>

                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
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
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    {/* Prescription Accordation */}
                                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                        >
                                            <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                Prescriptions
                                            </Typography>
                                            {/* <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography> */}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>

                                                {/* Inner Accordation */}
                                                {/* pannel 1 */}
                                                <Accordion expanded={expandedPres === 'panel1'} onChange={handleChangePres('panel1')}>
                                                    <AccordionSummary
                                                        expandIcon={<ExpandMoreIcon />}
                                                        aria-controls="panel1bh-content"
                                                        id="panel1bh-header"
                                                    >
                                                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                                            <Link href="#" color="inherit" underline="hover">
                                                                Add Prescription_file1
                                                            </Link>

                                                        </Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <Typography>
                                                            <Grid
                                                                container
                                                                spacing={4}
                                                                rowSpacing={-4}
                                                                columnSpacing={-4}
                                                            >
                                                                <AddReport/>
                                                            </Grid>
                                                        </Typography>
                                                    </AccordionDetails>
                                                </Accordion>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>

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

export default Patient;
