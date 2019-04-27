const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    first_name: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    last_name: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    phone: String,
    email: String,
    address: String,
    additional_info: String,
    user_id:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Contacts', ContactSchema);