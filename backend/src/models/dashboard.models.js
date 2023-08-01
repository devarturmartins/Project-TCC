const connection = require('./connection');

const getAll = async () => {
    const [images] = await connection.execute(
        'SELECT * FROM Images',
    );
    
    return images;
    }

module.exports = {
    getAll,
};