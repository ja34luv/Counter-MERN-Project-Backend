const express = require('express')
const Count = require('../models/count')
const router = new express.Router()

router.patch('/count/up', async (req, res) => {
  try {
    const count = await Count.findByIdAndUpdate('631e51496c4c1a010fcc6050', {
      $inc: { number: 1 },
    })

    if (!count) return res.status(404).send()

    res.send(count)
  } catch (e) {
    res.status(400).send()
  }
})

router.patch('/count/down', async (req, res) => {
  try {
    const count = await Count.findByIdAndUpdate('631e51496c4c1a010fcc6050', {
      $inc: { number: -1 },
    })

    if (!count) return res.status(404).send()

    res.send(count)
  } catch (e) {
    res.status(400).send()
  }
})

router.get('/count', async (req, res) => {
  try {
    const count = await Count.find({})
    res.send(count)
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = router
