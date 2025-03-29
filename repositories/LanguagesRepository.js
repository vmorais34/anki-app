import Languages from "../models/Languages.js";

const getAllLanguages = async () => {
    try{
        return await Languages.find();
    }catch(error){
        throw new Error(error);
    }
}

const getLanguages = async (id) => {
    try{
        return await Languages.findById(id);
    }catch(error){
        throw new Error(error);
    }
}

const saveLanguages = async ({ name, code }) => {
    try{
        const languages = new Languages({ name, code });
        return await languages.save();
    }catch(error){
        throw new Error(error);
    }
}

const updateLanguages = async (id, { name, code }) => {
    try{
        return await Languages.findByIdAndUpdate(id, { name, code }, { new: true });
    }catch(error){
        throw new Error(error);
    }
}

const deleteLanguages = async (id) => {
    try{
        return await Languages.findByIdAndDelete(id);
    }catch(error){
        throw new Error(error);
    }
}

const languagesRepository = {
    getAllLanguages,
    getLanguages,
    saveLanguages,
    updateLanguages,
    deleteLanguages
}

export default languagesRepository;