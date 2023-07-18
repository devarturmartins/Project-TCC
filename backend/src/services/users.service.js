const usersModel = require('../models/users.models');

const getAll = async () => {
    const users = await usersModel.getAll();
    return users;
}

const createUsers = async (name, email, matricula, password, role) => {
    const users = await usersModel.createUsers(name, email, matricula, password, role);
    return users;
}

module.exports = {
    getAll,
    createUsers,
};