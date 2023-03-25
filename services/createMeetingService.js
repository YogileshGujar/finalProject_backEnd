import mongoose from "mongoose";
import { Invitess } from "../models/Invitess.js";
import { Meetings } from "../models/Meeting.js";


export async function getAllMeetings(){
   return await Meetings.find({})
}

export async function createMetting(data
    // requesterId,
    // receiverIds,
    // startDateTime,
    // endDateTime
    ){
        const {meetingName,description, requesterId, receiverIds, startDateTime, endDateTime } = data;
    
         try{  
            let meeting = await Meetings.create({
                meetingName,description,
                requesterId,
                receiverIds,
                startDateTime,
                endDateTime, 
            });

            for(const receiverId of receiverIds){
                await Invitess.create({
                    meetingId: meeting._id,
                    receiverId,
                    status: "pending",
                });
            }
                return meeting;
         }catch(e){
             return {status:"error",message:"error while creating meeting"};
         }
    // let data=[];
    // data.push(meetinData);
    // return await Meetings.insertMany(data);
}

export async function updateMeetingStatus(meetingId, receiverId, status){
   
    console.log("data ",meetingId, receiverId, status);
    try{
        // let {meetingId, receiverId, status}=updatedata;
       
        let invitess =await Invitess.findOneAndUpdate(
            {meetingId,receiverId},
            {status},
            {new:true}
        )
        // ).populate("meetingId");
        console.log("data1 ",invitess);

        if(!invitess){
            return{status:"error",message:"invitess not finde"};
        }
        let  allInviteess = await Invitess.find({meetingId});

        let allInviteessStatues=allInviteess.map((invitess)=>invitess.status);

        if(!allInviteessStatues.includes("pending")){
            let meeting=await Meetings.findByIdAndUpdate(
                meetingId,
                {status: "completed"},
                {new: true}
            )

            // .populate("requesterId")
            // .populate("receiverIds");
            return meeting;
        }

        return invitess.meetingId;
    }catch(e){
         return{status:"error",message:"Error from service updating meeting status"}
    }
}