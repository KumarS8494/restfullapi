const mongoose = require('mongoose');
const validator = require('validator');

const studenSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, 'Email is Already Present'],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalide Email')
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true
    }
})

const Student = new mongoose.model('Student', studenSchema);

module.exports = Student;