const redis = require('redis');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//redis[s]://[[username][:password]@][host][:port][/db-number]:
const client = redis.createClient({
  url: 'redis://lnlredis:6379'
});

startup();

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/result', async (req, res) => {
  let result = await getClicks()
  res.send({result: result})
})

app.listen(8080, () => console.log('Server is up and running'));

async function startup() {
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
}

async function getClicks(){ 
  return await client.get('clicks');
}