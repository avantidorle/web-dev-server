import mongoose from 'mongoose';
const schema = mongoose.Schema({
  title: String,
  likes: Number,
  dislikes: Number,
  retuits: Number,
  reshares: Number,
  comments: Number,
  liked: Boolean,
  userName: String,
  handle: String,
  time: String,
  avatarIcon: String,
  title: String,
  image: String,
  contentTitle: String,
  content: String
}, {collection: 'tuits'});
export default schema;