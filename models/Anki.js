import { mongoose } from "mongoose";
import Languagues from "./Languages.js";
import User from "./User.js";

const Schema = mongoose.Schema;

const ankiSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Name Anki is required.']
    },
    userId: {
        type: String,
        required: [true, 'UserId is required.'],
        validate: {
            validator: function (v){
                const id = new mongoose.Types.ObjectId(v); // convertendo uma string em objeto ID para ser encontrado no banco
                return User.exists({_id: id});
            },
            message: props =>
             `UserID ${props.value} not found.` 
        }
    },
    languageId: {
        type: String,
        required: [true, 'LanguaguesId is required.'],
        validate: {
            validator: function (v){
                const id = new mongoose.Types.ObjectId(v); // convertendo uma string em objeto ID para ser encontrado no banco
                return Languagues.exists({_id: id});
            },
            message: props =>
             `LanguaguesID ${props.value} not found.` 
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const anki = mongoose.model('Anki', ankiSchema);

export default anki;