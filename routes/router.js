// import bcrypt from 'bcrypt';
import express from "express";
// import verifyToken from '../middleware/authMiddleware.js';
// Service do user para validar o login passando o userId
// import doctorService from "../services/DoctorService.js";
// import appointmentController from "./AppointmentController.js";
// import doctorController from "./DoctorController.js";
// import pacientController from "./PacientController.js";
// import prescriptionController from "./PrescriptionController.js";

// import jwt from 'jsonwebtoken';

let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("hi!");
        res.status(200).json({ message: "hi!"});
    }
);

// Mapeamento do login
// router.post('/login', async (req,res) => {
//     try {
//         const { login, password } = req.body;
//         const doctor = await doctorService.getDoctorByLogin(login);
//         if (!doctor) {
//             return res.status(401).json({error: 'Authentication failed!'});
//         }

//         const passwordMatch = await bcrypt.compare(password, doctor.password);
//         if (!passwordMatch) {
//             return res.status(401).json({error: 'Authentication failed!'});
//         }

//         const token = jwt.sign({doctorId: doctor._id}, 'you-secret-key', {
//             expiresIn: '1h',
//         });
//         res.status(200).json({token});

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({error: 'Login failed!'});
//     }
// });

// Iniciamos os constrollers
// router.use("/", verifyToken, appointmentController);
// router.use("/", verifyToken, doctorController);
// router.use("/", verifyToken, pacientController);
// router.use("/", verifyToken, prescriptionController);

export default router;