import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailIcon from '@mui/icons-material/Email';
import loginImg from '../../assets/login.jpg';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import LoginIcon from '@mui/icons-material/Login';
import './GetStarted.css'
import { Modal, ModalBody, ModalFooter, ModalHeader, TabContent, TabPane } from "reactstrap";

const GetStarted = (props) => {
    const [activeTab, setActiveTab] = useState("1");
    const [email, setEmail] = useState("")
    const [name,setName] = useState("")
    const [rgtoken,setRgtoken] = useState("")
    const [pass,setPass] = useState("")
    const [firstPass,setFirstPass] = useState("")
    const [confPass,setConfPass] = useState("")
    const [phone,setPhone] = useState("")
    const [showPassword, setShowPassword] = React.useState(false);
    const [showFirstPassword, setShowFirstPassword] = React.useState(false);
    const [showConfPassword, setShowConfPassword] = React.useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const [loading, setLoading] = React.useState(false);
  
   const handleClick=()=>{
    console.log(email, pass);
    setLoading(true)
    setTimeout(() => {

        setLoading(false);
        console.log(loading);
      }, 2000);
   
   }
   const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "phoneNo"){
        setPhone(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPass(value);
    }
    if(id === "firstPassword"){
        setFirstPass(value);
    }
    if(id === "confirmPassword"){
        setConfPass(value);
    }
    if(id === "rgToken"){
        setRgtoken(value);
    }
}
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleFirstPass= () => setShowFirstPassword((show)=>!show);
    const handleConfPass= () => setShowConfPassword((show)=>!show);
    return (
        <>
            <Modal
                sg="xl"
                isOpen={props.isModalOpen}
                toggle={props.toggleModal}
            >

                <ModalBody>
                    <div className='modal_page'>

                        <div className='top_container'>
                            <div className="button_container">
                                <Button onClick={() => {
                                    setActiveTab("1")
                                }} variant={activeTab == "1" ? 'contained' : "outlined"}>Log in</Button>
                            </div>
                            <div className="button_container">
                                <Button onClick={() => {
                                    setActiveTab("2")
                                }} variant={activeTab == "2" ? 'contained' : "outlined"}>Register</Button>                            </div>
                        </div>
                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">

                                <div className='main_container'>
                                    <div image_container>
                                        <img src={loginImg} className='login_image' />
                                    </div>
                                    <div className='form_container'>
                                        <div className='form_head'>
                                            <h3>Log in</h3>
                                        </div>
                                        <form className='login_form'>
                                            <div className='input_div'>

                                                {/* <EmailIcon /> */}
                                                <FormControl id="fc_email" variant="standard">
                                                    <TextField
                                                        label="Email"
                                                        id="email"
                                                        value={email}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        size="small"
                                                        variant="standard"
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className='input_div'>

                                                <FormControl variant="standard">
                                                    <InputLabel htmlFor="standard-password-input">Password</InputLabel>
                                                    <Input
                                                        id="password"
                                                        value={pass}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        type={showPassword ? 'text' : 'password'}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className="submit_div">
                                                <LoadingButton
                                                className='modal_button'
                                                    onClick={handleClick}
                                                    loading={loading}
                                                    loadingPosition="start"
                                                    startIcon={<LoginIcon />}
                                                    variant="contained"
                                                >
                                                    <span>Log In</span>
                                                </LoadingButton>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </TabPane>
                            <TabPane tabId="2">

                                <div className='main_container'>
                                    
                                    <div className='form_container'>
                                        <div className='form_head'>
                                            <h3>Register</h3>
                                        </div>
                                        <form className='login_form'>
                                            <div className='input_div'>

                                                {/* <EmailIcon /> */}
                                                <FormControl id="fc_email" variant="standard">
                                                    <TextField
                                                        label="Name"
                                                        id="name"
                                                        value={name}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        size="small"
                                                        variant="standard"
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className='input_div'>

                                                {/* <EmailIcon /> */}
                                                <FormControl id="fc_email" variant="standard">
                                                    <TextField
                                                        label="Phone number"
                                                        id="phoneNo"
                                                        value={phone}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        size="small"
                                                        variant="standard"
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className='input_div'>

                                                {/* <EmailIcon /> */}
                                                <FormControl id="fc_email" variant="standard">
                                                    <TextField
                                                        label="Email"
                                                        id="email"
                                                        value={email}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        size="small"
                                                        variant="standard"
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className='input_div'>

                                                {/* <EmailIcon /> */}
                                                <FormControl id="fc_email" variant="standard">
                                                    <TextField
                                                        label="Registeration token"
                                                        id="rgToken"
                                                        value={rgtoken}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        size="small"
                                                        variant="standard"
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className='input_div'>

                                                <FormControl variant="standard">
                                                    <InputLabel htmlFor="standard-password-input">Password</InputLabel>
                                                    <Input
                                                        id="firstPassword"
                                                        type={showFirstPassword ? 'text' : 'password'}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        value={firstPass}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleFirstPass}
                                                                    // onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showFirstPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className='input_div'>

                                                <FormControl variant="standard">
                                                    <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
                                                    <Input
                                                        id="confirmPassword"
                                                        value={confPass}
                                                        onChange = {(e) => handleInputChange(e)}
                                                        type={showConfPassword ? 'text' : 'password'}
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleConfPass}
                                                                    // onMouseDown={handleMouseDownPassword}
                                                                >
                                                                    {showConfPassword ? <VisibilityOff /> : <Visibility />}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                </FormControl>
                                            </div>
                                            <div className="submit_div">
                                                <LoadingButton
                                                    className='modal_button'
                                                // color='rgb(71, 182, 226)'
                                                    onClick={handleClick}
                                                    loading={loading}
                                                    loadingPosition="start"
                                                    startIcon={<LoginIcon />}
                                                    variant="contained"
                                                >
                                                    <span>Register</span>
                                                </LoadingButton>
                                            </div>
                                        </form>
                                    </div>
                                    <div image_container>
                                        <img src={loginImg} className='login_image' />
                                    </div>
                                </div>
                            </TabPane>
                        </TabContent>
                    </div>
                </ModalBody>

            </Modal>
        </>
    )
}
export default GetStarted;