import mongoose from "mongoose";
import { Users } from "../models/User.js";
import { createMetting } from "../services/createMeetingService.js";
export async function createmeetingController(req,res){
    // let {createdphonNumber}=req.body;
    try{
        // let user=await Users.findOne({phonNumber:createdphonNumber});
        // if(user){
        //     return res.status(400).send("This User Allready exist in our Data",e);
        // }else{
        //     let data1= await createMetting(req.body);
        //      return res.status(200).send(data1);
        // }
        let data1= await createMetting(req.body);
        return res.status(200).send(data1);

    }catch(e){
        return res.status(500).send("Error while Creating Meeting ",e);
    }
}