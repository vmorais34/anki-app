import Card from "../models/Cards.js";

const getAllCards = async () => {
    return await Card.find();
}

const getCard = async (id) => {
    try {
        return await Card.findById(id);
    } catch (error) {
        throw new Error(error);
    }
}

const saveCard = async ({front, back, context, ankiId, reviewStatics}) => {
    try {
        const prescription = new Card({front, back, context, ankiId, reviewStatics});
        return await prescription.save();
    } catch (error) {
        throw new Error(error);
    }
}

const updateCard = async (id, {front, back, context, ankiId, reviewStatics}) => {
    try {
        return await Card.findByIdAndUpdate(id, {front, back, context, ankiId, reviewStatics}, {new: true} );
    } catch (error) {
        throw new Error(error);
    }
}

const deleteCard = async (id) => {
    try {
        return await Card.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const cardRepository = {
    getAllCards,
    getCard,
    saveCard,
    updateCard,
    deleteCard
}

export default cardRepository;