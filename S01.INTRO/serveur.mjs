import {createServer} from 'node:http';

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
    <h1>Bienvenue sur mon site</h1>
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


const MyfisrtServer = createServer((req, res) => {
    console.log(req.url)
    res.writeHead(200, 'Content-Type','text/html');
    res.end(htmlString);
});

MyfisrtServer.listen(3000, '127.0.0.1', () => {
    console.log('Le serveur est en mode écoute sur http://127.0.0.1:3000');
})