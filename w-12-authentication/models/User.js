const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Hash the password before saving
UserSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(this);
        console.log(this.isModified("password"));
        // this.password = await bcrypt.hash(this.password, 10);
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});

module.exports = mongoose.model("User", UserSchema);
