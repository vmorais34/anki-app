import bcrypt from 'bcrypt';
import express from "express";
import verifyToken from '../middleware/authMiddleware.js';
// Service do user para validar o login passando o userId
import userService from "../services/UserService.js";
import ankiController from "./AnkiController.js";
import userController from "./UserController.js";
import languagesController from "./LanguagesController.js";
import cardController from "./CardController.js";

import jwt from 'jsonwebtoken';

let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("hi!");
        res.status(200).json({ message: "hi!"});
    }
);

// Mapeamento do login
router.post('/login', async (req,res) => {
    try {
        const { login, password } = req.body;
        const user = await userService.getUserByLogin(login);
        if (!user) {
            return res.status(401).json({error: 'Authentication failed!'});
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({error: 'Authentication failed!'});
        }

        const token = jwt.sign({userId: user._id}, 'you-secret-key', {
            expiresIn: '1h',
        });
        res.status(200).json({token});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Login failed!'});
    }
});

// Iniciamos os constrollers
router.use("/", verifyToken, userController);
router.use("/", verifyToken, languagesController);
router.use("/", verifyToken, ankiController);
router.use("/", verifyToken, cardController);

export default router;