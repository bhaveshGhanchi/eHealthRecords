const mongoose = require("mongoose");

const DoctorDataModel = mongoose.Schema({
    DisplayPic: {
        type: Object
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserAuth",
        required: true
    },
    gender: { type: String, require: true },
    DOB: { type: Date },
    rating: Number,
    price: Number,
    degree: String,
    Specialization: String
});

module.exports = mongoose.model("DoctorData", DoctorDataModel);
