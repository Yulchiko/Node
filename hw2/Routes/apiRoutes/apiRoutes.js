const {Router} = require('express');
const userRoutes = require('../userRoutes/userRoutes');
const loginRoutes = require('../loginRoutes/loginRoutes');
const signRoutes = require("../signRoutes/signRoutes");

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/login', loginRoutes);
routes.use('/signIn', signRoutes)
routes.get('/error', (req, res) => {
    res.render('error', {error});
});
routes.use((req, res) => {
    res.render('notFound')
})

module.exports = routes;
