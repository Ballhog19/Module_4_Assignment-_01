import mongoose from "mongoose";
const {Schema} = mongoose;

const loanSchema = new Schema({
    id: String,
    customerName: String,
    phoneNumber: String,
    address: String,
    loanAmount: Number,
    interest: Number,
    loanTermYears: Number,
    loanType: String,
    description: String,
    createdDate: {
        type: String,
        default: new Date.now
    },
    insertedDate: {
        type: String,
        default: new Date.now
    }
})