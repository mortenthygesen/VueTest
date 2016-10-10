var express = require('express');
var mongodb = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;
var bookRouter = express.Router();

var router = function (nav) {
var bookService = require('../services/goodreadsservice')();
var bookController = require('../controllers/bookController')(bookService,nav);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;