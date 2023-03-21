import mongoose from "mongoose";
import { Meetings } from "../models/Meeting.js";

export async function createMetting(meetinData){
    let data=[];
    data.push(meetinData);
    return await Meetings.insertMany(data);
}