const users = require("../../baseD/users");

class loginController {
    loginUsers(req, res) {
        res.render('login')
    }

    getLogin(req, res) {
        const emailList = users.some((registerUser) => registerUser.email === req.body.email);
        if (emailList) {
            res.redirect('/notFound');
        } else {
            users.push(req.body);
            res.redirect('/users');
        }
    }
}

module.exports = new loginController();