const users = require("../../baseD/users");

class SignController{
    signInMiddle(req, res){
        res.render('signIn');
            }
   getSignIn(req, res) {
       const userInfo = req.body;

       const EmailUser = users.findIndex((user) => user.email === userInfo.email);
       if (EmailUser === -1) {
           res.redirect('/notFound');
           return;
       }
       const userAll = users[EmailUser];

       if (userInfo.password !== userAll.password) {
           res.redirect('/notFound');
           return;
       }
       res.redirect(`/users/${EmailUser + 1}`);
   }
}
module.exports = new SignController();