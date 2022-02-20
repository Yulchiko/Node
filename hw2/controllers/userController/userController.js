const users = require("../../baseD/users");

class UserController{
    renderUsers(req, res){
        let usersArr = [...users];
        if (req.query.city) {
            usersArr = usersArr.filter(user => user.city === req.query.city);
        }
        if (req.query.age) {
            usersArr = usersArr.filter(user => user.age === +req.query.age);
        }
        res.render('users', {users: usersArr});
    }
    getUserById(req, res){
        const {userId} = req.params;
        res.render('user', users[userId - 1]);
    }
}
module.exports = new UserController();