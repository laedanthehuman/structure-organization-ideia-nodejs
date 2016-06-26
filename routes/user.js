import user from '../user/index';

module.exports = app =>{
    app.route('/usuarios')
       .get((req,res) =>{
           return user.findAll();
       });

    app.route('/usuarios/:id')
       .get((req,res) =>{
           return user.findById(req.params.id);
       });
};