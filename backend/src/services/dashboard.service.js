const dashboardModel = require('../models/dashboard.models');

const getAll = async () => {
    const images = await dashboardModel.getAll();
    return images;
}

module.exports = {
    getAll,
};