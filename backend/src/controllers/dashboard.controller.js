const dashboardService = require('../services/dashboard.service');

const getAll = async (req, res) => {
    const images = await dashboardService.getAll();
    return res.status(200).json(images);
};

module.exports = {
    getAll,
};