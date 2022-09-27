const contact = require('express').Router();

const contactController = require('../controllers/contacts');

contact.get('/', contactController.getAllContacts);
contact.post('/', contactController.createContact);

module.exports = contact;
