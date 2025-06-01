// routes/purchaseRoutes.js
const express = require('express');
const router = express.Router();
const Purchase = require('../models/purchase');

// Home Page
router.get('/', (req, res) => {
  res.render('index');
});

// Purchase Request Form
router.get('/new', (req, res) => {
  res.render('newPurchase');
});

// Handle Form Submission
router.post('/', async (req, res) => {
  const { number, designation, quantity, requester, verifier, approver } = req.body;
  const newPurchase = new Purchase({
    number,
    designation,
    quantity,
    requester,
    verifier,
    approver,
    isIT: req.body.isIT || false
  });
  await newPurchase.save();
  res.redirect('/purchases');
});

module.exports = router;
