'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
let contacts = require('./data');
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');

const mongodbUri = 'mongodb+srv://admin_user1:Dontstopm3now@scotch-q05vg.mongodb.net/test?retryWrites=true&w=majority';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

const hostname = 'localhost';
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/contacts', require('./api/contacts/routes/post_contact'));
app.use('/api/contacts', require('./api/contacts/routes/get_contacts'));
app.use('/api/contacts', require('./api/contacts/routes/get_contact'));
app.use('/api/contacts', require('./api/contacts/routes/delete_contact'));
app.use('/api/contacts', require('./api/contacts/routes/put_contact'));

app.listen(port, hostname, () => {
	mongoose.connect(mongooseUri, dbOptions, err => {
		if (err) console.log(err);
	});
	console.log(`Server is running at http;//${hostname}:${port}`);
});
