import express from "express";
import bcrypt from 'bcrypt';
import userService from "../services/UserService.js";

let router = express.Router();

router.get('/users', async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.send(users);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
});

router.get('/getUser/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const user = await userService.getUser(id);
    res.send(user)
  } catch (error){
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/postUser", async function(req, res){
    const { name, login, password, email } = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userService.saveUser({ name, login, password: hashedPassword, email });
        res.status(201).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send("Falha ao registrar usuário" + error);
    }
});

router.put('/users/:id', async (req, res) => {
  const { id } = req.params;
  const { name, login, password, email } = req.body;

  try {
    const user = await userService.updateUser(id, { name, login, password, email });
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete('/users/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await userService.deleteUser(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});


export default router;