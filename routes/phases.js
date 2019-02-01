'use strict';

const express = require('express')
const knex = require('../knex')
const router = express.Router()

router.get('/', (req, res, next) => {
  return knex('moonphase')
    .then((moonphase) => {
      res.status(200).send(moonphase)
    })
    .catch((err) => {
    next(err)
  })
})

module.exports = router;
