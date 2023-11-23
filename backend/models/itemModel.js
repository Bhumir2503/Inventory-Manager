const mongoose = require('mongoose')

const Schema = mongoose.Schema

const itemSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },PLU: {
    type: Number,
    required: true
  },group: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = mongoose.model('item', itemSchema)