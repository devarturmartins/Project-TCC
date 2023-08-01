const userService = require('../services/users.service');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

const getAll = async (req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
}

const login = async (req, res) => {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    console.log(token);
    if (!token.message) {
        res.cookie('token', token, { maxAge: 900000, httpOnly: true });
    }
    return res.status(200).json(token);
}

const createUsers = async (req, res) => {
    const { name, email, matricula, password, role } = req.body;
    const hashedPassword = await bcrypt.hashSync(password, 10);
    const users = await userService.createUsers(name, email, matricula, hashedPassword, role);
    return res.status(201).json(users);
}

module.exports = {
    getAll,
    login,
    createUsers,
};