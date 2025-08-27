import chalk from "chalk";
import chalkAnimation from "chalk-animation"
import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {

    console.log(chalk.hex("#76465").bold("Bonjour"));
    chalkAnimation.rainbow(`Serveur en ecoute sur le port ${PORT}🚀`);
})