import http from 'http';

module.exports = app => {
    
        app.db.sequelize.sync().done(() => {
            http.createServer(app)
                 .listen(app.get("port"), () => console.log(`Agenda Started - porta ${app.get("port")}`));
        });

};