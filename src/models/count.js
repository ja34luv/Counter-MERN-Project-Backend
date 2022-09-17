const mongoose = require('mongoose')

const Count = mongoose.model('Count', {
  number: {
    type: Number,
    required: true,
  },
})

module.exports = Count
