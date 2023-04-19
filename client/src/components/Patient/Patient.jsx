import React, { useState } from "react";
import "./Patient.css";
import landingImg from "../../assets/landingImg.jpg";
import GetStarted from "../GetStarted/GetStarted"
import Header from "../Header/Header"
const Home = () => {
    const [show,setShow] = useState(false)
    const toggle = () => setShow(prevState=>!prevState);
    return (
        <div className="landingPage">
            <Header />
            <section id="hero">
                
            </section>
        </div>
    );
};

export default Home;
