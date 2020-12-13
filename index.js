// simple node.js application to receive data  from eventbus store the data in memory
//   and on get request print the data to console.log


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const measurements = {};

// get request received - print the measurement data to console log and return it to requester
app.get('/data',(req,res)=> {
    console.log(measurements);
    res.send(measurements);
}); 

// post event is received from eventbus - so put the data into memory
app.post('/events',(req,res)=> {
  const { type, measurementdata } = req.body;

  console.log(type); 
  console.log(measurementdata);
  
  const { id, data } = measurementdata;
  
  // save data in memory
  measurements[id] = { id, data };

  res.send({});
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});