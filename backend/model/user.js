const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    hash_password: {
        type: String
    },
    token: {
        type: String
    }
});
userSchema.index({userName:1})
userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.hash_password)
};
module.exports = mongoose.model("User", userSchema);