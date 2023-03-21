import mongoose from "mongoose";
import { createUser} from "../services/userService.js";
import { Users } from "../models/User.js";

export async function createUserController(req,res){
    let {fname,phonNumber}=req.body;
    try{
        let user=await Users.findOne({phonNumber:phonNumber});
        if(user){
            return res.status(400).send("This User Allready exist in our Data",e);
        }else{
            let data1= await createUser(req.body);
             return res.status(200).send(data1);
        }

    }catch(e){
        return res.status(500).send("Error while Creating User ",e);
    }
}
// export async function getUserByIdController(req,ers){
//     let id=req.params.id;
//     try{
//          let user =await getUserById(id);
//          return res.status(200).send(user);
//     }catch(e){
//         return res.status(500).send("Error while geting User id of ",e)
//     }
// }