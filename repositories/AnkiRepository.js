import Anki from "../models/Anki.js";

const getAllAnkis = async () => {
    return await Anki.find();
}

const getAnki = async (id) => {
    try {
        return await Anki.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveAnki = async ({name, userId, languageId}) => {
    try {
        const prescription = new Anki({name, userId, languageId});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateAnki = async (id, {name, userId, languageId}) => {
    try {
        return await Anki.findByIdAndUpdate(id, {name, userId, languageId}, {new: true} );
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAnki = async (id) => {
    try {
        return await Anki.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const ankiRepository = {
    getAllAnkis,
    getAnki,
    saveAnki,
    updateAnki,
    deleteAnki
}

export default ankiRepository;