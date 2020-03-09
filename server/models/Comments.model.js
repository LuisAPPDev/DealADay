const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  deal: {
    type: Schema.Types.ObjectId,
    ref: 'Deal'
  },
  content: String,
  likes: Array,
  responses: Array,
  dislikes: [],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Comment = mongoose.model('Comment', commentsSchema);
module.exports = Comment;