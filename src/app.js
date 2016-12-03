import Express from 'express';
import logger from './utils/loggingUtils';
import entries from './model/entry.js';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/notFoundPage';

// Environment variables
const app = new Express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

// Start Server
app.listen(port, function () {
  logger.info('Running on http://localhost:%d [%s]', port, env);
});

// Views
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Assets
app.use(Express.static(path.join(__dirname, 'static')));

// app.get('/', function (req, res) {
//   entries.execute(function (data) {
//     res.render('index', {
//       entries: data
//     });
//   });
// });

// app.use(function (req, res, next) {
//   res.status(404).send('Page does not exist!');
// });

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup: markup });
    }
  );
});
