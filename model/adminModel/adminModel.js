const mongoose = require('mongoose');

// Define the schema for the user registration form
const registrationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConfirm: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  postalCode: {
    type: String,
    required: true
  },
  agree: {
    type: Boolean,
    required: true,
    set: (value) => value === 'on'
  }
});

// Create the model using the registration schema
const Registration = mongoose.model('Registration', registrationSchema);

// Export the model
module.exports = Registration;
