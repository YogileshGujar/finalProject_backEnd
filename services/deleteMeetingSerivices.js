import { Invitess } from "../models/Invitess.js";
import { Meetings } from "../models/Meeting.js";


export async function deleteMeeting(meetingId){
    let  {_id}=meetingId;
    try{
        let deletemeetingdata= await Meetings.deleteOne({_id: _id});
        if(deletemeetingdata.acknowledged){
            await Invitess.deleteMany({meetingId: _id});
            return {status:"success",message:"Meeting is delete"}
        }else{
            return {status:"error",message:"Meeting is NOT delete"}
        }

        
    }catch(e){
        return{status:"error",message:"Error from Delete services catch service"};
    }
}