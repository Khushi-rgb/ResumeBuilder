import express from "express";
import protect from "../middlewares/authMiddleware.js";
import { createResume, deleteResume, getAllResumes, getPublicResumeById, getResumeById, updateResume } from "../controllers/resumeController.js";
import upload from "../configs/multer.js";

const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.put('/update', upload.single('image'), protect, updateResume);
resumeRouter.delete('/delete/:resumeId', protect, deleteResume);
resumeRouter.get('/get/:resumeId', protect, getResumeById);
resumeRouter.get('/public/:resumeId', getPublicResumeById);
// 2. Register the route path from the frontend:
resumeRouter.get('/users/resumes', protect, getAllResumes);
export default resumeRouter;