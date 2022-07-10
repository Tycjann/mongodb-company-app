const express = require('express');
const router = express.Router();
const ObjectId = require('mongodb').ObjectId;
const db = require('./../db');

router.get('/departments', (req, res) => {
  // res.json(db.departments);
  // Select
  ref.db.collection('departments').find().toArray((err, data) => {
    if (err) res.status(500).json({ message: err });
    else res.json(data);
  });
  // db.collection('employees').find({department: 'IT'}, (err, data) => {
  //   if (!err) {
  //     data.each((error, employee) => {
  //       console.log(employee);
  //     });
  //   }
  // });
});

router.get('/departments/random', (req, res) => {
  res.json(db.departments[Math.floor(Math.random() * db.length)]);
});

router.get('/departments/:id', (req, res) => {
  // res.json(db.departments.find(item => item.id == req.params.id));
  ref.db.collection('departments').find({ _id: ObjectId(req.params.id) }, (err, data) => {
    if (err) res.status(500).json({ message: err });
    else if (!data) res.status(404).json({ message: 'Not found' });
    else res.json(data);
  });
});

router.post('/departments', (req, res) => {
  const { name } = req.body;
  // db.departments.push({ id: 3, name })
  // res.json({ message: 'OK' });
  ref.db.collection('departments').insertOne({ name: name }, err => {
    if (err) res.status(500).json({ message: err });
    else res.json({ message: 'OK' });
  });
});

router.put('/departments/:id', (req, res) => {
  const { name } = req.body;
  db = db.departments.map(item => (item.id == req.params.id) ? { ...item, name } : item );
  res.json({ message: 'OK' });
});

router.delete('/departments/:id', (req, res) => {
  db = db.departments.filter(item => item.id != req.params.id)
  res.json({ message: 'OK' });
});

module.exports = router;
