import express from "express";
import LanguagesService from "../services/LanguageService.js"

let router = express.Router();

router.get('/languages', async (req, res) => {
    try {
      const languages = await LanguagesService.getAllLanguages();
      res.send(languages);
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
});

router.get('/getLanguages/:id', async (req, res) => {
  const { id } = req.params;
  try{
    const language = await LanguagesService.getLanguages(id);
    res.send(language)
  } catch (error){
    console.error(error);
    res.status(500).send(error);
  }
});

router.post("/postLanguages", async function(req, res){
    const { name, code } = req.body;
    try{
        const language = await LanguagesService.saveLanguages({ name, code });
        res.send(language);
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
});

router.put('/languages/:id', async (req, res) => {
  const { id } = req.params;
  const { name, code } = req.body;

  try {
    const language = await LanguagesService.updateLanguages(id, { name, code });
    res.send(language);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.delete('/languages/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const language = await LanguagesService.deleteLanguages(id);
    res.send(language);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default router;