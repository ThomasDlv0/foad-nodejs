const mongoose = require("mongoose");

const AdresseSchema = new mongoose.Schema({
    rue:   { type: String, required: true, trim: true },
    ville: { type: String, required: true, trim: true },
    pays:  { type: String, required: true, trim: true }
}, { _id: false });

const UserSchema = new mongoose.Schema({
    prenom: { type: String, required: true, trim: true },
    nom:    { type: String, required: true, trim: true },
    email:  { type: String, required: true, trim: true, lowercase: true, unique: true,
        match: [/^\S+@\S+\.\S+$/, "email invalide"] },
    age:    { type: Number, required: true, min: 0, max: 130 },
    adresse:{ type: AdresseSchema, required: true },
    avatar: { type: String, required: true, trim: true }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
