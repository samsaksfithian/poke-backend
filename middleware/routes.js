const express = require('express');

const router = express.Router();

// Home route
router.get('/', (request, response) => {
  // console.log(`We're in the router!`);
  response.send('Welcome to the PokeDatabase!');
});

// API Home route
router.get('/api', (request, response) => {
  response.send('Welcome to the PokeDatabase API!');
});

/* Snippets routes */
// router.get('/api/snippets', snipController.getAllSnippets);
// router.get('/api/snippets/:id', snipController.getSnippetById);
// router.post('/api/snippets', validate, snipController.createSnippet);
// router.patch('/api/snippets/:id', validate, snipController.updateSnippet);
// router.delete('/api/snippets/:id', validate, snipController.deleteSnippet);

/* Author routes */
// router.get('/api/authors', validate, authorController.getAllAuthors);
// router.get('/api/login', authorController.logIn);
// router.post('/api/signup', authorController.signUp);

module.exports = router;
