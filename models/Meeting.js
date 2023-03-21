import mongoose from "mongoose";

const meetingSchema = new mongoose.Schema({
    meetingName:{
        type:String,
        required:true,
        trim:true
    },
    createduserName:{
        type:String,
       
        trim:true,
        unique:true
    },
    createdphonNumber:{
        required:true,
        type:Number,
        trim:true
    },
    datTime:{
        type : Date,
        default: Date.now 
    },
    description:{
        type:String,
       
        trim:true
    },
    invitedlist:[Number]
    ,
    joinedlist:[Number]
    ,
    
},{timestamps:true})
const Meetings = mongoose.model('meetings',meetingSchema);
export {Meetings};