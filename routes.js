import  express  from "express";
import { createmeetingController } from "./controller/createMeetingController.js";
import { findLocationController } from "./controller/locationController.js";
import { otpgeneratorController, otpverificationController } from "./controller/otpController.js";
import { createUserController } from "./controller/userController.js";
const router = express.Router();

router.post('/api/createUser',createUserController);
router.post('/api/otpgenerator',otpgeneratorController);
router.post('/api/otpverification',otpverificationController);
router.post('/api/getLocation',findLocationController)

//Meetings

router.post('/api/createMeeting',createmeetingController);

export {router as routes};