import LanguagesRepository from "../repositories/LanguagesRepository.js"

const getAllLanguages = async () => {
    return await LanguagesRepository.getAllLanguages();
}

const getLanguages = async (id) => {
    return await LanguagesRepository.getLanguages(id);
}

const saveLanguages = async ({ name, code }) => {
    return await LanguagesRepository.saveLanguages({ name, code });
}

const updateLanguages = async (id, { name, code }) => {
    return await LanguagesRepository.updateLanguages(id, { name, code });
}

const deleteLanguages = async (id) => {
    return await LanguagesRepository.deleteLanguages(id);
}

const languagesService = {
    getAllLanguages,
    getLanguages,
    saveLanguages,
    updateLanguages,
    deleteLanguages
}

export default languagesService;