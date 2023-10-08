import {  model, Schema } from 'mongoose'

const ContactSchema = new Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true
    },
    country: {
        type: String,
    },
    about: {
        type: String,
    }
})

const Contact = new model('Contact', ContactSchema)
export default Contact