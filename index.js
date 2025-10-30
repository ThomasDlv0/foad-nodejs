const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/notes");

const port = 8080;
const app = express();

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect("mongodb://host.docker.internal:27017/usersDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connecté à la base de données MongoDB"))
    .catch((err) => console.error("Erreur de connexion à la base de données :", err));

// Routes
app.use("/api/users", userRoutes);

// Lancement du serveur
app.listen(port, "0.0.0.0", () => {
    console.log(`Le serveur tourne sur le port : ${port}`);
});
