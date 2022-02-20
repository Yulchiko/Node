const {Router} = require('express');
const loginController = require('../../controllers/loginController/loginController')
const loginValid = require('../../middleWare/isUserValid')
const loginRoutes = Router();

loginRoutes.get('/', loginController.loginUsers);

loginRoutes.post('/', loginValid, loginController.getLogin);

module.exports = loginRoutes;