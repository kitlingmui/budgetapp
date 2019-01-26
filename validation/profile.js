const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateProfileInput(data) {
    let errors = {};

    data.income = !isEmpty(data.income) ? data.income : '';

    //Validating email
    if (!Validator.isCurrency(data.income)) {
        errors.income = 'Income inputted wrong'
    }

    if (Validator.isEmpty(data.income)) {
        errors.income = 'Income field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};