const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating User Schema 
const UserDataModel = new Schema({
    DisplayPic: {
        type: Object
    },
    DOB: {
        type: Date
    },
    gender: { type: String, require: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth",
        required: true
    },
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
});

module.exports = mongoose.model("UserData", UserDataModel);