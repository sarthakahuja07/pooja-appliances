const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var invoiceSchema = new Schema({
    path: {
        type: String,
        default: 'https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=',
    },
    name: {
        type: String,
        default: 'default',
    }
});

var billSchema = new Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    app: {
        type: String,
        required: true,
        enum: ['pooja', 'creative']
    },
    invoiceData: {
        type: Object,
        required: true,
    },
    invoiceBill: {
        type: invoiceSchema,
        required: true,
    },
    invoiceViewBill: {
        type: invoiceSchema,
        required: true,
    },
    invoiceNumber:{
        type: Number,
        required: true,
    }
}, {
    timestamps: true
});
// Compile model from schema
var Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;