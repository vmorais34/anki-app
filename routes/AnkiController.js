import express from "express";
import AnkiService from "../services/AnkiService.js";

let router = express.Router();

router.get('/ankis', async(req, res) => {
    try {
        const ankis = await AnkiService.getAllAnkis();
        res.send(ankis);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getAnki/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const ankis = await AnkiService.getAnki(id);
        res.send(ankis);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAnki', async(req, res) => {
    const {name, userId, languageId} = req.body;
    try {
        const anki = await AnkiService.saveAnki({name, userId, languageId});
        res.send(anki);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/ankis/:id', async(req, res) => {
    const {id} = req.params;
    const {name, userId, languageId} = req.body;
    try {
        const anki = await AnkiService.updateAnki(id, {name, userId, languageId});
        res.send(anki);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/ankis/:id', async(req, res) => {
    const {id} = req.params;
    try {
        const anki = await AnkiService.deleteAnki(id);
        res.send(anki);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;