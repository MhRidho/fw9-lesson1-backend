const response = require('../helpers/standardResponse');
const errorResponse = require('../helpers/errorResponse');
const contactModel = require('../models/contacts');
const { validationResult } = require('express-validator');
const { LIMIT_DATA } = process.env;

exports.getAllContacts = (req, res) => {
  const { search = '', limit = parseInt(LIMIT_DATA), page = 1, sortType = 'ASC' } = req.query;
  const sortBy = 'email';
  const offset = (page - 1) * limit;

  contactModel.getAllContacts(search, sortBy, sortType, limit, offset, (err, results) => {
    if (results.length < 1) {
      return res.redirect('/404');
    }
    const pageInfo = {};

    contactModel.countAllContacts(search, (err, totalData) => {
      pageInfo.totalData = totalData;
      pageInfo.totalPage = Math.ceil(totalData / limit);
      pageInfo.currentPage = parseInt(page);
      pageInfo.nextPage = pageInfo.currentPage < pageInfo.totalPage ? pageInfo.currentPage + 1 : null;
      pageInfo.prevPage = pageInfo.currentPage > 1 ? pageInfo.currentPage - 1 : null;
      pageInfo.limit = limit;
      return response(res, 'List All Contacts', results, pageInfo);
    });
  });
};

exports.getContactById = (req, res) => {
  const { id } = req.params;
  contactModel.getContactById(id, (err, results) => {
    if (results.rows.length > 0) {
      return response(res, 'Detail Contact', results.rows[0]);
    } else {
      return res.redirect('/404');
    }
  });
};

exports.createContact = (req, res) => {
  const validation = validationResult(req);
  if (!validation.isEmpty()) {
    return response(res, 'Error occured', validation.array(), 400);
  }
  contactModel.createContact(req.body, (err, results) => {
    if (err) {
      return errorResponse(err, res);
    } else {
      return response(res, 'Create contact successfully', results[0]);
    }
  });
};

exports.deleteContact = (req, res) => {
  const { id } = req.params;
  contactModel.deleteContact(id, (results) => {
    return response(res, 'Contact deleted!', results[0]);
  });
};

exports.editContact = (req, res) => {
  const { id } = req.params;
  contactModel.editContact(id, req.body, (err, results) => {
    return response(res, 'Update Contact succsess!', results.rows[0]);
  });
};

