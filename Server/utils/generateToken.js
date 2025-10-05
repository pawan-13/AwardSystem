import jwt from 'jsonwebtoken';

const generateToken = (user, res, message) => {
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1d" });
    if (token) {
        return res.status(200).cookie("token", token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
        }).json({
            success: true,
            message: message,
            user: user,
        })
    };
};

export default generateToken;