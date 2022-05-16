// index.js
const redis = require('redis');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

//redis[s]://[[username][:password]@][host][:port][/db-number]:
const client = redis.createClient({
  url: 'redis://lnlredis:6379'
});

startup();

app.get('/', async (req, res) => {
  let body = await buildBody()
  let response = buildTop() + body
  res.send(response)
})

app.listen(8080, () => console.log('Server is up and running'));

function buildTop() {
  return `
    <head>
      <title>CoffeeBean</title>
      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <script src="client.js"></script>
  `
}

async function buildBody() {
  return `
    <body>
      ${buildMenu()}
      <div class="lnlweb-body">
        <h1>Welcome!</h1>
        <p>
          This project displays how developers can use Docker for local development of containers. \ 
          <br><br>
          We have multiple containers running locally in this projects, all connecting to form an example environment one may see when developing a microservice app. 
        </p>
        <div class="lnlweb-area">
          <img src="lnlexample.png" style="object-fit: contain;max-width:400px">
          <div class="lnlweb-area-act">
            <button id="clicker">Click Me!</button>
            <div id="resultline">
              You have clicked <div id="results">${await getClicks()}</div> times.
            </div>
            <div id="slider">  
              Enable Polling (~2s):
              <label class="switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="slider round"></div>
              </label>            
            </div>
          </div>
        </div>
      </div>
    </body>
  `
}

function buildMenu() {
  return `
    <div class="lnlweb-top">
      <a href="/">Voter App</a>
    </div>
  `
}

function buildBot() {
  return `
    <>
  `
}

async function startup() {
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
}

async function getClicks(){ 
  return await client.get('clicks');
}