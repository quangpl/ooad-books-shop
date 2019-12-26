const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    customerId: {
        type: Schema.ObjectId,
        required: true
    },
    employeeId: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    books: {
        type: [mongoose.Types.ObjectId],
        required: true
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = BillSchema;