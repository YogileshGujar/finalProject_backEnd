import  express  from "express";
import { createmeetingController, getAllMeetingController, updateMeetingStatusController } from "./controller/createMeetingController.js";

import { findLocationController } from "./controller/locationController.js";
import { otpgeneratorController, otpverificationController } from "./controller/otpController.js";
import { createUserController, getAllUserController } from "./controller/userController.js";
const router = express.Router();

router.post('/api/createUser',createUserController);
router.post('/api/otpgenerator',otpgeneratorController);
router.post('/api/otpverification',otpverificationController);
router.post('/api/getLocation',findLocationController)

//Meetings

router.get('/api/getAllMeetings',getAllMeetingController);
router.post('/api/createMeeting',createmeetingController);
router.post('/api/updateMeeting',updateMeetingStatusController);


//Users
router.get('/api/getAllUsers',getAllUserController);

export {router as routes};