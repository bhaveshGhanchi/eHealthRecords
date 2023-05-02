const UserDataModel = require("../models/UserDataModel");
const UserAuthModel = require('../models/UserAuthModel')

const AddPatient = async (req,res)=>{
    const {
            emerName,
            emerNum,
            email,
            dob, 
            insurance,
            address, 
            age, 
            gender, 
            maritalStat } = req.body
    
    try {
        const authData = await UserAuthModel.findOne({email:email, user : { $exists : false }})
        console.log(authData);
        const userData = new UserDataModel({
            adminDetails:{
                name: authData.name,
                contact: authData.phone,
                emergencyContactName: emerName,
                emergencyContactNumber: emerNum,
                DOB: dob,
                insurance: insurance,
                address: address
            },
            demographics:{
                age: age,
                gender: gender,
                maritialStatus: maritalStat
            },
            vitalSigns:{
                height: null,
                weight: null,
                bloodPressure: " "
            },
            history:{
                medicalHistory: "None",
                familyHistory: "None",
                addictions: "None",
                allergy: "None"
            },
            reports: [],
            bills:[],
            prescriptions:[],
            user: authData._id
        })
        await userData.save()
        console.log(userData);
        const userauth = await UserAuthModel.findOneAndUpdate({email:email},{user:userData._id})
        userauth.save()
        res.status(200).json({status:"OK"})
    } catch (error) {
       res.status(400).send(error.message)

    }   
    
}

module.exports ={AddPatient}