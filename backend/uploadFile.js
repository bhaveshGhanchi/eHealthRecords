const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const multer = require("multer");
const express = require('express');
const fb_app = require("../backend/firebase")
const storage = getStorage();
const router = express.Router();


// Setting up multer as a middleware to grab photo uploads
const upload = multer({ storage: multer.memoryStorage() });
console.log("hello");
router.post('/', upload.single("filename"), async (req, res)=>{
    const giveCurrentDateTime = () => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        return dateTime;
    }
    try {
        const dateTime = giveCurrentDateTime();

        const storageRef = ref(storage, `files/Dp/${req.file.originalname + "       " + dateTime}`);

        // Create file metadata including the content type
        const metadata = {
            contentType: req.file.mimetype,
        };
        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata);
        //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

        // Grab the public url
        const downloadURL = await getDownloadURL(snapshot.ref);

        console.log('File successfully uploaded.');
        return res.send({
            message: 'file uploaded to firebase storage',
            name: req.file.originalname,
            type: req.file.mimetype,
            downloadURL: downloadURL
        })
        
    } catch (error) {
        return res.status(400).send(error.message)
    }
    
})

module.exports =  router;
