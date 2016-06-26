import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import path from 'path';


module.exports = app => {
    app.set('json spaces', 4);
    app.set('view engine','pug');
    app.set('views',path.join(__dirname));
    app.set("port", 3000);
    app.use(morgan("common"));
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static("public"));
};