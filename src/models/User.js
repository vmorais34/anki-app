import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    name: {
        type: String,
        required: [true, 'User name is required.']
    },
    login: {
        type: String,
        required: [true, 'Login is required.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    email: {
        type: String,
        required: [true, 'Email contact is required.']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}
);

const user = mongoose.model('User', userSchema);

export default user;