const { generateToken } = require('../auth/validateJWT');
const usersModel = require('../models/users.models');
const bcrypt = require('bcrypt');

const getAll = async () => {
    const users = await usersModel.getAll();
    return users;
}

const login = async (email, password) => {
    try {
        const [aluno] = await usersModel.findOne(email);
        if (!aluno) return { message: 'Incorrect username or password' };
        if (bcrypt.compareSync(password, aluno.password) === false) {
            return { message: 'Incorrect username or password' };
        }
        const token = generateToken({ email: aluno.email, name: aluno.name, role: aluno.role });
        return token;
    } catch (e) {
        console.log(e);
    }
}

const createUsers = async (name, email, matricula, password, role) => {
    const aluno = await usersModel.findOne(email);
    if (aluno.length !== 0) return { message: 'Email already registered' };
    if (!email || !password || !matricula || !name) return { message: 'Invalid entries. Try again.' };

    const users = await usersModel.createUsers(name, email, matricula, password, role);
    return users;
}

module.exports = {
    getAll,
    login,
    createUsers,
};