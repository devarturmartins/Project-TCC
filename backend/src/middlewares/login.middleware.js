const regex = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.[a-z]?$/i;

const loginValidate = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }

    if (!regex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }
    next();
}

module.exports = loginValidate;