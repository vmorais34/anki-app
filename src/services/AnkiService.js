import AnkiRepository from "../repositories/AnkiRepository.js";

const getAllAnkis = async() => {
    return await AnkiRepository.getAllAnkis();
}

const getAnki = async(id) => {
    return await AnkiRepository.getAnki(id);
}

const saveAnki = async({name, userId, languageId}) => {
    return await AnkiRepository.saveAnki({name, userId, languageId});
}

const updateAnki = async(id, {name, userId, languageId}) => {
    return await AnkiRepository.updateAnki(id, {name, userId, languageId});
}

const deleteAnki = async(id) => {
    return await AnkiRepository.deleteAnki(id);
}

const ankiService = {
    getAllAnkis,
    getAnki,
    saveAnki,
    updateAnki,
    deleteAnki
}

export default ankiService;
