'use strict'

var express = require('express');
var router = express.Router();
const apiai = require('apiai')
const config = require('config')
const dialogflowConfig = config.get('dialogflowConfig')

const app = apiai(dialogflowConfig.accessToken)
const uuidv1 = require('uuid/v1')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})

router.post('/query', function(req, res, next) {

  let options = {
    sessionId: '92829ca0-2125-11e8-ba22-852d0b8e763c'
  }

  console.log(options.sessionId)

  var request = app.textRequest(req.body.msg, options)

  let resMsg = ''
  request.on('response', function(response) {
    console.log(response)
    res.send(response.result.fulfillment.speech)
  })

  request.end()
})

module.exports = router;
