const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SalarySchema = new Schema({
    employeeId: {
        type: Schema.ObjectId,
        required: true
    },
    basicSalary: {
        type: Number,
        required: true
    },
    bonus: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    insurance: {
        type: Number,
        required: true
    },
    grossSalary:{
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = SalarySchema;
