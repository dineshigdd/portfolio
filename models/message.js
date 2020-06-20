const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    message : {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
      },

    user:{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
    
});

module.exports = mongoose.model('Messaage', MessageSchema);
