import { deleteMeeting } from "../services/deleteMeetingSerivices.js";



export async function deleteMeetingController(req,res){
    try{
        let DeleteMeeting= await deleteMeeting(req.body);
        if(DeleteMeeting.status === 'success'){
            return res.status(200).json(DeleteMeeting);
        }else{
            return res.status(500).json(DeleteMeeting.message);
        }
       

    }catch(e){
        return res.status(500).json({Error:"Error from controller catch DeleteMeeting"})
    }
}