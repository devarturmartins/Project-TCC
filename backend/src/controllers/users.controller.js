const userService = require('../services/users.service');

const getAll = async (req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
}

const createUsers = async (req, res) => {
    const { name, email, matricula, password, role } = req.body;
    const users = await userService.createUsers(name, email, matricula, password, role);
    return res.status(201).json(users);
}

module.exports = {
    getAll,
    createUsers,
};