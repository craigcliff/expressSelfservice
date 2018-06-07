
const express = require('express')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const nodeSSPI = require('node-sspi')
const request = require('request')
// const host = process.env.HOST || '127.0.0.1'
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3003

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}
start()



app.get('/getUser',function (req, res, next) {
  
  var nodeSSPIObj = new nodeSSPI({
      
    retrieveGroups: true,
    authoritative:false
  })
  nodeSSPIObj.authenticate(req, res, function(err){

    res.send(req.connection.user) || next()


  })
 });

 app.use('/sendDetails', function(req, res) {  
  var url = "http://srv001583/activeservicedeskadmin/helpdesk/api.php" + req.url;
  req.pipe(request(url)).pipe(res);
});
