const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  make: {
     type: String, 
     required: true
     },
 
     price : {
      type: Number,
      required: true
     },
  model: { type: String,
     required: true 
    },

  year: { type: Number, 
    required: true
   },

  description: { 
    type: String 
  },

  imageUrl: { 
    type: String // URL to an image of the car
  }, 
  
},{timestamps: true}
);

module.exports = mongoose.model('Product', productSchema);
