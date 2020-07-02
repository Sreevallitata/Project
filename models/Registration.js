var mongoose = require('mongoose');

var RegistrationSchema = new mongoose.Schema({

  emailId: String,
  password: String,
  reEnterPassword: String,
  fn: String,
  ln: String

});

module.exports = mongoose.model('Registration', RegistrationSchema);
