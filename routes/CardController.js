import express from "express";
import CardService from "../services/CardsService.js";

let router = express.Router();

router.get('/cards', async(req, res) => {
    try {
        const cards = await CardService.getAllCards();
        res.send(cards);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getCard/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const cards = await CardService.getCard(id);
        res.send(cards);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postCard', async(req, res) => {
    const {front, back, context, ankiId, reviewStatics} = req.body;
    try {
        const cards = await CardService.saveCard({front, back, context, ankiId, reviewStatics});
        res.send(cards);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/cards/:id', async(req, res) => {
    const {id} = req.params;
    const {front, back, context, ankiId, reviewStatics} = req.body;
    try {
        const cards = await CardService.updateCard(id, {front, back, context, ankiId, reviewStatics});
        res.send(cards);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/cards/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const cards = await CardService.deleteCard(id);
        res.send(cards);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;