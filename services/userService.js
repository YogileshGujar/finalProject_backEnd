import mongoose from "mongoose";
import { Users } from "../models/User.js";

export async function createUser(userData){
   
    let users=[];
    users.push(userData);
    return await Users.insertMany(users);
}

export async function getUser(phonNumber){
    return await Users.find({phonNumber:phonNumber});
}

export async function getUserByUserId(userId){
    return await Blogs.find({_id:userId});
}

export async function updateuser(id,data){
    return await Users.updateOne({_id:id},{$set:data});
}