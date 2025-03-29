import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const languagesSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'Language name is required.']
    },
    code: {
        type: String,
        required: [true, 'Language code is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const languages = mongoose.model('Languages', languagesSchema);

export default languages;