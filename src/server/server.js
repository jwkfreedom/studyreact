import express from "express";  
import React from "react";  
import ReactDOMServer from "react-dom/server";  
import { Router, match, RoutingContext } from "react-router"; 

const app = express();

// set up Jade
app.set('views', './views');  
app.set('view engine', 'jade');

import routes from "../shared/routes";

app.get('/*', function (req, res) {  
  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message)
      return;
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      return;
    } else if (renderProps) {   
      let content = ReactDOMServer.renderToString(<RoutingContext {...renderProps} />);
      res.render('index', { content: content });
    } else {
      res.status(404).send('Not found')
      return;
    }
  })



  //let content = ReactDOMServer.renderToString(<Router>{routes}</Router>);
  //stop here




  
  /*Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });*/
});

var server = app.listen(3000, function () {  
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});