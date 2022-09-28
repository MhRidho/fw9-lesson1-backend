const contact = require('express').Router();
const { body } = require('express-validator');

const contactController = require('../controllers/contacts');

const createContactValidator = [
  body('username')
    .trim().isLength({ min: 4 }).withMessage('Username length minimal 4 character'),
  body('email')
    .isEmail().withMessage('Email format invalid'),
  body('phone')
    .isLength({ min: 12 }).withMessage('Phone length minimal 12 character'),
];

contact.get('/', contactController.getAllContacts);
contact.post('/', ...createContactValidator, contactController.createContact);
contact.get('/:id', contactController.getContactById);

module.exports = contact;
