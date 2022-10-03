/*
*   Created By: Brad Hawk
*   Date: 10/3/2022
*   Description: Schema used in MondoDB
*/

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
    createdDate: new Date().toISOString(),
    insertedDate: new Date().toISOString()
})