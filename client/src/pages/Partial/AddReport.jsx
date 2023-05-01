import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import SendIcon from '@mui/icons-material/Send';
import {  ref, getDownloadURL, uploadBytesResumable ,uploadBytes,listAll,
    list,}from "firebase/storage";
const { storage } = require('../../config/firebase')

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    borderRadius:'5px',
    display:"flex",
    justifyContent: 'space-around',

    boxShadow: 24,
    p: 4,
};


export default function AddReport(props) {
    console.log(props.isModelOpen);
    const [image, setImage] = React.useState()

    const handleUpload=(e)=>{
        console.log(e.target.files);
        setImage(e.target.files[0]);
    }
    const handleSubmit = async () => {
       
        
        const storageRef = ref(storage, `files/${image.name}`);

        // Create file metadata including the content type
        

        const snapshot = await uploadBytesResumable(storageRef, image);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        let URL = await getDownloadURL(snapshot.ref);
        const dpData = {
            path: URL,
        }
        
    }
    const handleClose = () => props.setOpen(false);
    return (
        <div>

            <Modal
                open={props.isModelOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                
                <Box sx={style}>
                    Add Report
                    <Button variant="contained" component="label">
                        Upload
                        <input id="image"
                        name="file"
                        ref={image} onChange={(e) => handleUpload(e)}  multiple type="file" />
                    </Button>
                    <Button onClick={handleSubmit} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}