/**
 * Created by shatyajeet on 07/06/16.
 */

var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
  content: {type: 'string', trim: true, required: true},
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Topic', topicSchema);
