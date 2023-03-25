import mongoose from "mongoose";
import { Schema, Types } from "mongoose";

const meetingSchema = new mongoose.Schema({

     meetingName:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
       
        trim:true
    },

    requesterId:{
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiverIds:[{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },],
    startDateTime:{
        type:Date,
        // required:true
    },
    endDateTime:{
        type:Date,
        // required:true
    },
    status:{
        type:String,
        enum: ["pending", "accepted", "rejected"],
        default:"pending"
    }
     
},{timestamps:true});
const Meetings = mongoose.model('meetings',meetingSchema);
export {Meetings};


//1st try
  // meetingName:{
    //     type:String,
    //     required:true,
    //     trim:true
    // },
    // createduserName:{
    //     type:String,
       
    //     trim:true,
    //     unique:true
    // },
    // createdphonNumber:{type:Schema.Types.Mixed}
    // ,
    // datTime:{
    //     type : Date,
    //     default: Date.now 
    // },
    // description:{
    //     type:String,
       
    //     trim:true
    // },
    // invitees:{type:Schema.Types.Mixed}

    // invitedlist:[Number]
    // ,
    // joinedlist:[Number]
    // ,