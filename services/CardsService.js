import CardRepository from "../repositories/CardsRepository.js";

const getAllCards = async() => {
    return await CardRepository.getAllCards();
}

const getCard = async(id) => {
    return await CardRepository.getCard(id);
}

const saveCard = async({front, back, context, ankiId, reviewStatics}) => {
    return await CardRepository.saveCard({front, back, context, ankiId, reviewStatics});
}

const updateCard = async(id, {front, back, context, ankiId, reviewStatics}) => {
    return await CardRepository.updateCard(id, {front, back, context, ankiId, reviewStatics});
}

const deleteCard = async(id) => {
    return await CardRepository.deleteCard(id);
}

const cardService = {
    getAllCards,
    getCard,
    saveCard,
    updateCard,
    deleteCard
}

export default cardService;
