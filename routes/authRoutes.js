import express  from 'express';
const router = express.Router();
import multer from 'multer';
import { registerValidation, validate, adminRegisterValidation } from '../middleware/validation.middleware.js';
import { studentRegister, adminRegister, verifyAdmin, getAllStudents, loginAdmin, verifyStudent, rejectStudent, downloadIdCard } from '../controllers/auth.controller.js';

const storage = multer.memoryStorage();
const upload = multer({ storage });

// Configure multer to handle multiple files
const fileFields = [
  { name: 'profilePic', maxCount: 1 },
  { name: 'paymentScreenshot', maxCount: 1 }
];

router.post('/student/register', upload.fields(fileFields), registerValidation, validate, studentRegister);
router.post('/admin/download-idCard', downloadIdCard);

router.post('/admin/sign-up', adminRegisterValidation, validate, adminRegister);
router.post('/admin/verify', verifyAdmin);
router.post('/admin/get-students', getAllStudents);
router.post('/admin/login', loginAdmin);

router.post('/admin/verify-student', verifyStudent);
router.post('/admin/reject-student', rejectStudent);


export default router;
