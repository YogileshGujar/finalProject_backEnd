import mongoose from "mongoose";
import { Users } from "../models/User.js";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = twilio(accountSid, authToken);

export async function otpgenerator(phonNumber){
     
         try{
        let user=await Users.findOne({phonNumber});
        if(!user){
            return{
              status:"error",
              message:"This User Not Exist In Our Data Base "
            }
        }else{
           let OTP=Math.floor(1000 + Math.random() * 9000);
           user.otp=OTP;
           await user.save()

           let optmessage=`Your OTP cod is :${OTP}`;

           let OtpData=await twilioClient.messages.create({
            body: optmessage,
            from: process.env.TWILIO_PHONE_NUMBER,
            // to: phoneNumber,
            to: `+91${phonNumber}`,
          });
      
         
        return OTP;
    
                   
        }

      }catch(e){
        throw new Error("Otp is not send from service",e);
      }
}

export async function otpverification(data){
  let {phonNumber,otp}=data;
  if(!phonNumber && !otp){
    return{
      status:"error",
      message:"phonNumber and otp is not coming "
    }
  }
  try{
      let otpverify=await Users.findOne({phonNumber})
      if(!otpverify){
        return{
          
          status:"error",
          message:"This User Not Exist In Our Data Base for otp verification "
        }
  }else{
    // return otpverify.otp
         if(otpverify.otp == otp){
          //token
             return otpverify;

         }else{
          return{
            status:"error",
            message:"OTP from else verfication is faild ",otpverify
          }
         }
  }
}catch(e){
    throw new Error("Otp is not verify",e);
  }

} 