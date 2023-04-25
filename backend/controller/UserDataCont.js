const UserDataModel = require("../models/UserDataModel");
const UserAuthModel = require('../models/UserAuthModel')
const { route } = require("../uploadFile");
const { getStorage, ref, getDownloadURL, uploadBytesResumable } = require("firebase/storage");
const storage = getStorage();



const registerPatient = async (req, res, next) => {
    const { DOB, height, weight, gender, address, emergencyContactName, emergencyContactNumber, maritialStatus, age } = req.body
    const { userid ,medicalHistory,allergies,employmentStatus} = req.body
    const files = req.files;
    let dpData
    console.log(req.body);
    const medRec = []
    const giveCurrentDateTime = () => {
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        const dateTime = date + ' ' + time;
        return dateTime;
    };
    let user
    try {
        user = await UserDataModel.findOne({ user: userid })
        if (user) {
            return res.status(500).json({ message: "User already registered" })
        }
        if (files) {

            await files.forEach(async element => {
                if (element.fieldname === "displayPic") {
                    const dateTime = giveCurrentDateTime();

                    const storageRef = ref(storage, `files/${userid}/${"Dp" + "-" + userid + "_" + dateTime}`);

                    // Create file metadata including the content type
                    const metadata = {
                        contentType: element.mimetype,
                        info: "User Display Picture"
                    };
                    const snapshot = await uploadBytesResumable(storageRef, element.buffer, metadata);
                    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

                    // Grab the public url
                    let URL = await getDownloadURL(snapshot.ref);
                    dpData = {
                        path: URL,
                        metadata: metadata
                    }
                }
                else if (element.fieldname === "records") {
                    const dateTime = giveCurrentDateTime();

                    const storageRef = ref(storage, `files/${userid}/${"Record" + "-" + userid + "_" + dateTime}`);

                    // Create file metadata including the content type
                    const metadata = {
                        contentType: element.mimetype,
                        info: "User medical records"
                    };
                    const snapshot = await uploadBytesResumable(storageRef, element.buffer, metadata);
                    //by using uploadBytesResumable we can control the progress of uploading like pause, resume, cancel

                    // Grab the public url
                    let recordURL = await getDownloadURL(snapshot.ref);
                    let Data = {
                        path: recordURL,
                        metadata: metadata
                    }
                    medRec.push(Data)
                }

                // console.log(dpData,medRec);
            })
        }
        const BMI = parseInt(weight / (height * height))
        const userData = new UserDataModel({
            demographics:{
                DisplayPic: dpData,
                DOB: DOB,
                gender: gender,
                address: address,
                emergencyContactName:emergencyContactName,
                emergencyContactNumber:emergencyContactNumber,
                height: height,
                weight: weight,
                maritialStatus: maritialStatus,
                age: age
            },
            
            // insuranceDetails: { type: String },
            user: userid,
            
            medicalHistory: medicalHistory,
            allergies: allergies,
            employmentStatus: employmentStatus
        })
        await userData.save()

        // const savedUserData = await 
        // console.log(dpData,medRec);
        res.json(userData);
    } catch (error) {
        return res.status(400).send(error.message)
    }
}

const GetPatientData = (req, res) => {
    try {
        const { id } = req.params;

        // console.log(id);
        UserDataModel.findOne({ user: id })
            .populate('user')
            // .exec()
            .then((data) => {
                console.log(data);
                res.json(data);

            })

    } catch (error) {
        res.json(error)
    }
}




module.exports = { registerPatient, GetPatientData };