import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    }
}, { timeStamps: true });

const User = mongoose.model("awardUserCredentials", userSchema);
export default User;