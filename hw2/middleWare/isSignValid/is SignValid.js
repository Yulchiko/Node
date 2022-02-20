function isSignValid(req, res, next) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            throw new Error('email or password is not provided');
        }
        if (password.length < 3) {
            throw new Error('Not valid password')
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}
module.exports = isSignValid;