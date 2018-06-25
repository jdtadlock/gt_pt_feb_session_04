const router = require('express').Router();
const Note = require('../models/Note');

// Note.create({
//   title: 'Some note 1',
//   details: 'Some details about note 1'
// }).then(note => {
//   console.log(note);
// });

// Note.find({}).then(notes => console.log(notes));

router.get('/notes', (req, res) => {
  Note.find({}).then(notes => {
    res.send(notes);
  });  
});

router.post('/notes', (req, res) => {
  // console.log(req.body);
  Note.create(req.body).then(note => {
    res.send('Note created successfully');
  });
});

module.exports = router;


// module.exports = (app, connection, ) => {

// }