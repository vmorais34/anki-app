import mongoose from "mongoose";
import Anki from "./Anki.js";

const Schema = mongoose.Schema;

const reviewStaticsSchema = new mongoose.Schema({
    lastReviewed: { 
      type: Date, 
      default: Date.now
    },
    correctCount: { type: Number, default: 0 },
    incorrectCount: { type: Number, default: 0 }
}, { _id: false }); // _id: false evita criar um _id para cada subdocumento

const cardSchema = new Schema ({
  front: {
      type: String,
      required: [true, 'Front is required.']
  },
  back: {
    type: String,
    required: [true, 'Back is required.']
  },
  context: {
    type: String,
  },
  ankiId: {
      type: String,
      required: [true, 'AnkiId is required.'],
      validate: {
          validator: function (v){
              const id = new mongoose.Types.ObjectId(v); // convertendo uma string em objeto ID para ser encontrado no banco
              return Anki.exists({_id: id});
          },
          message: props =>
           `AnkiId ${props.value} not found.` 
      }
  },
  reviewStatics: { 
    type: reviewStaticsSchema, 
    default: () => ({}) 
  }, // Inicializa o objeto vazio por padrão
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const card = mongoose.model("Card", cardSchema);

export default card;
