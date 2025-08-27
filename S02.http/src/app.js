import express from "express";

const app = express();
const htmlString = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mon Premier Site</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f8ff;
      margin: 0;
      padding: 0;
      color: #333;
    }
    header {
      background-color: #007acc;
      color: white;
      padding: 20px;
      text-align: center;
    }
    nav {
      background-color: #005f99;
      padding: 10px;
      text-align: center;
    }
    nav a {
      color: white;
      margin: 0 15px;
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover {
      text-decoration: underline;
    }
    main {
      padding: 20px;
      max-width: 800px;
      margin: auto;
    }
    footer {
      background-color: #007acc;
      color: white;
      text-align: center;
      padding: 10px;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  </style>
</head>
<body>
  <header>
    <h1>Adam Ezzahiri</h1>
  </header>
  <nav>
    <a href="#">Accueil</a>
    <a href="#">À propos</a>
    <a href="#">Contact</a>
  </nav>
  <main>
    <h2>Présentation</h2>
    <p>Ceci est un site web simple en HTML avec un peu de style CSS intégré.</p>
    <p>Tu peux modifier ce modèle pour créer ton propre site.</p>
  </main>
  <footer>
    &copy; 2025 Mon Premier Site
  </footer>
</body>
</html>
`;


app.get("/html", (req, res) => {

    //Retourner le status
    res.status(200);

    //Le Type de réponse
    res.set("Content-Type", "text/html")

    // Envoie de la réponse
    res.send(htmlString)

})

app.get("/math/:operation", (req, res) =>{
    const number1 = parseInt(req.query.numbre1);
    const number2 = parseInt(req.query.number2);
    
    const operation = req.params.operation

    let result = 0;

    switch(operation){
        case "somme":
            result = number1 + number2
            break;
        case "difference":
            result = number1 - number2
            break;
        case "produit":
            result = number1 * number2
            break;
        case "quotient":
            result = number1 / number2
            break;
        case "reste":
            result = number1 % number2
            break;
    }

    res.status(200);

    res.set("Content-type", "text/plain");
    res.send(result)

})


export default app;