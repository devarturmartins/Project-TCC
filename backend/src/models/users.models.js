const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute(
        'SELECT * FROM users',
    );
    
    return users;
    }

const createUsers = async (name, email, matricula, password, role) => {
    const [users] = await connection.execute(
        'INSERT INTO users (name, email, matricula, password, role) VALUES (?, ?, ?, ?, ?)',
        [name, email, matricula ,password, role],
    );
    
    return users;
    }

module.exports = {
    getAll,
    createUsers,
};