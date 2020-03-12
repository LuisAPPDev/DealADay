const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  avatar:{
    type:String,
    default: "../../../../icons/defaultAvatar.jpg"

  },
  status: {
    type: String,
    enum: ["Pending Confirmation", "Active"],
    default: "Pending Confirmation",
  },
  confirmationCode: {
    type: String,
    unique: true
  },
  age: Number,
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  dislikes: [],
  likes: [],
  favs: [],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;