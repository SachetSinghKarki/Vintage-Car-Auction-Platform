// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const bidSchema = new Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Product',
//     required: true
//   },
//   amount: {
//     type: Number,
//     required: true
//   },
//   bidTime: {
//     type: Date,
//     default: Date.now
//   }
// }, { timestamps: true });

// module.exports = mongoose.model('Bid', bidSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    amount: { type: Number, required: true },
    // other fields...
});

const Bid = mongoose.model('Bid', bidSchema);
module.exports = Bid;
