const {Router} = require('express');
const SignController = require('../../controllers/signController/signController')
const IsSignValid = require('../../middleWare/isSignValid/is SignValid')

const signRoutes = Router();

signRoutes.get('/', SignController.signInMiddle);

signRoutes.post('/', IsSignValid, SignController.getSignIn);

module.exports = signRoutes;