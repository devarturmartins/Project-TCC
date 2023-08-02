const { validateToken } = require('../auth/validateJWT');

const authMiddleware = async (req, res, next) => {
    // console.log(req.cookies);
    const { token } = req.cookies;
    console.log(token);
    
    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }
    
    try {
        const isValid = validateToken(token);
        req.user = isValid.data;

        if (!isValid) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = authMiddleware;