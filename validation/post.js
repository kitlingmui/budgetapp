const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatePostInput(data) {
    let errors = {};

    data.amount = !isEmpty(data.amount) ? data.amount : '';
    data.merchant = !isEmpty(data.merchant) ? data.merchant : '';

    //Validating amount
    if (!Validator.isCurrency(data.amount)) {
        errors.amount = 'Amount is invalid'
    }

    if (Validator.isEmpty(data.amount)) {
        errors.amount = 'Amount field is required'
    }

    //Validating merchant
    if (!Validator.isLength(data.merchant, { min: 1, max: 100 })) {
        errors.merchant = 'Merchant must be between 1 and 100 characters';
    }

    if (Validator.isEmpty(data.merchant)) {
        errors.merchant = 'Merchant field is required'
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};