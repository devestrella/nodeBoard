require('../db');
const mongoose = require( 'mongoose' );
const UserInfo = mongoose.model( 'UserInfo' );

module.exports = (app) => {

    app.get('/setUser/:id/:pwd/:name/:phone', (req, res) => {
        let userData = {
            id : req.params.id,
            pwd : req.params.pwd,
            name : req.params.name,
            phone : req.params.phone
        }

        UserInfo.collection.insert(userData).then(docs => {
            console.log(docs);
            res.end('Insert user Data success');
        });
    });

    app.get('/updateUser/:id/:pwd/:name/:phone', (req, res) => {

        let id = req.params.id;
        let pwd = req.params.pwd;
        let name = req.params.name;
        let phone = req.params.phone;
        

        UserInfo.findOneAndUpdate( { id : id }, { $set : {
            pwd : pwd,
            name : name,
            phone : phone
        }}).then(docs => {
            console.log(docs);
            res.end('Update user Data success');
        });
    });

    app.get('/index', (req, res) => {
        res.render('index', {
            indexData : "index page"
        });
        res.end();
    });

    app.get('/main', (req, res) => {
        res.render('main', {
            mainData : "main page"
        });
        res.end();
    });


    app.get('/write', (req, res) => {
        res.render('write_bbs', {
            write : "write page"
        });
        res.end();
    });
}