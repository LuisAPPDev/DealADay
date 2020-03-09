const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dealSchema = new Schema({
  name: String,
  category: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  imageUrl: String,
  price: Number,
  originalPrice: Number,
  externalUrl: String,
  description: String,
  likes: [],
  dislikes: [],
  comments: Array,
  status: {
    type: String,
    enum: ['active', 'pending', 'disabled'],
    default: 'pending'
  },

}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Deal = mongoose.model('Deal', dealSchema);
module.exports = Deal;