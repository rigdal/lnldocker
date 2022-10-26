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

app.get('/click', async (req, res) => { 
  let result = await recordClick()
  res.send({result: result})
})

app.listen(8081, () => console.log('Server is up and running', client));

async function startup() {
  client.on('error', (err) => console.log('Redis Client Error', err));
  await client.connect();
}

async function recordClick(){ 
  let value = await client.get('clicks')
  if(typeof value != 'string') value = 0
  await client.set('clicks', !isNaN(value) ? parseInt(value)+1 : 1)
  return value
}