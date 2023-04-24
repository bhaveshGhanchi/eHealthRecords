const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating User Schema 
const UserDataModel = new Schema({
    demographics:{
        DisplayPic: {
            type: Object
        },
        DOB: {
            type: Date
        },
        gender: { type: String, require: true },
        address: { type: String, require: true },
        emergencyContactName: { type: String, require: true },
        emergencyContactNumber: { type: String, require: true },
        height: {
            type: Number
        },
        weight: {
            type: Number
        },
        maritialStatus: {
            type: String
        },
        age: {
            type: Number
        }
    },
    
    insuranceDetails: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth",
        required: true
    },
    
    medicalHistory: {
        type: String
    },
    allergies: {
        type: String
    },
    employmentStatus: {
        type: String
    },
    haemoglobin: {
        type: Number
    },
    RBC: {
        type: Number
    },
    WBC: {
        type: Number
    },
    platelet: {
        type: Number
    },
    ESR: {
        type: Number
    },
    glucose: {
        type: Number
    },
    cholesterol: {
        type: Number
    },
    thyroid: {
        type: Number
    },
    reports:[{
        url:String,
        details:{
            Haemoglobin:Number,
            RBC: Number,
            PCV: Number,
            MCV:Number,
            MCH: Number,
            MCHC: Number,
            
            
        }

    }]
});

module.exports = mongoose.model("UserData", UserDataModel);