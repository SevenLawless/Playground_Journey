const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userStorage = require('../data/userStorage');


exports.register = async (req, res) => {
    const {username, email, password} = req.body;

    
    if (!username || !email || !password) {
        return res.status(400).json({error: "Missing required fields"});
    }

    const useremail = userStorage.getUserByEmail(email);
    if (useremail) {
        return res.status(400).json({error: "User already there"});
    }

    const newUser = await userStorage.createUser({ username, email, password });

    res.status(201).json({
    user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
        // No password !
    }
});
}




exports.login = async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return res.status(400).json({error: "Somethin is missin"});
    }

    const user = userStorage.getUserByEmail(email);

    if (!user) {
        return res.status(401).json({error: "Wrong"});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.status(401).json({error: "pass is wrong"});
    }

    const token = jwt.sign(
        {userId: user.id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    );

    res.status(200).json({
        message: "login successful",
        token: token,
        user: {
            id: user.id,
            username: user.username,
            email: user.email
        }
    });
};