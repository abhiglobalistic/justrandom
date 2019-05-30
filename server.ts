const express = require('express');
const multer = require('multer');
const cors = require('cors');
const mongoose = require('mongoose');

 
// Generell properties
let UPLOAD_PATH = 'uploads'
let PORT = 3000;

module.exports = {
'UPLOAD_PATH':'uploads',
'PORT' : '3000'
}


// Multer Settings for file upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_PATH)
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
})
let upload = multer({ storage: storage })
 
// Initialise App
const app = express();
app.use(cors());

module.exports ={
'app':app,
'upload':upload
};
 
// Load our routes
var routes = require('./routes.ts');
 
// Setup Database
let uri = 'mongodb://localhost/imageupload';
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MongoDb');
    }
});
 
// App startup
app.listen(PORT, function () {
    console.log('listening on port: ' + PORT);
});