import React, { useState, useEffect } from "react";
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
import Button from '@mui/material/Button';
import './PatientDetails.css'
import AddReport from "../Partial/AddReport";

const PatientDetails = (props) => {
    const userinfo = props.userdata.userinfo
    console.log(userinfo);
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
    const [open, setOpen] = React.useState(false);
    const [show, setShow] = useState(false);
    const toggle = () => setShow((prevState) => !prevState);
    const [admin, setAdmin] = useState(false);
    const [loading, setLoading] = useState(false);
    const [available, setAval] = useState(true)
    const handleOpen = () =>{
        setOpen(true);
        // console.log(open);
    };
    const handleClose = () => setOpen(false);
    const [userdata, setData] = useState({
        name: "",
        email: "",
        phoneno: "",
        age: 0,
        gender: "",
        DOB: "",
        address: "",
        maritalStatus: "",
        employmentStat: "",
        familyDis: "",
        riskFac: "",
        foodAllergy: "",
        anaphylaxis: "",
        reports: [],
        pres: []
    })
    // setData({
    //     name: userinfo.adminDetails.name,
    //     email: userinfo.user.email,
    //     phoneno: userinfo.adminDetails.contact,
    //     age: userinfo.demographics.age,
    //     gender: userinfo.demographics.gender,
    //     DOB: userinfo.adminDetails.DOB,
    //     address: userinfo.adminDetails.address,
    //     maritalStatus: userinfo.demographics.maritialStatus || "Not known",
    //     // employmentStat: response.data.employmentStatus || "Not known",
    //     medicalHistory: userinfo.history.medicalHistory || "None",
    //     familyDis: userinfo.history.FamilyHistory || "None",
    //     addiction: userinfo.history.addiction || "",
    //     allergy: userinfo.history.allergy || "None",
    //     reports: userinfo.reports,
    //     pres: userinfo.prescription,
    //     bills: userinfo.bills
    // })

    return (
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
                                        <h6>{userinfo.adminDetails.name }</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>Email:</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userinfo.user.email || ""}</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>phone no:</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userdata.phoneno}</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>Age:</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userdata.age}</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>Gender</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userdata.gender}</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>DOB:</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userdata.DOB}</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>address:</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>
                                            {userdata.address}
                                        </h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>maritialStatus</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userdata.maritalStatus}</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>employmentStatus</h6>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <h6>{userdata.employmentStat}</h6>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>

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
                                                    {userdata.familyDis}
                                                </h6>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <h6>risk Factor:</h6>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <h6>
                                                    {userdata.riskFac}
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
                                                    {userdata.foodAllergy}
                                                </h6>
                                            </Grid>
                                            <Grid item xs={5}>
                                                <h6>anaphylaxis:</h6>
                                            </Grid>
                                            <Grid item xs={7}>
                                                <h6>
                                                    {userdata.anaphylaxis}
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
                                    <div className="addDiv" onClick={handleOpen} >Add Prescription</div>
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
                                                    
                                                </Grid>
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                    </section>
                    <AddReport isModelOpen={open} setOpen={setOpen}/>
                </>
            ) : (
                <></>
            )}

        </>
    )
}

export default PatientDetails;