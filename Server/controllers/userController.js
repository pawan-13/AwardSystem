import bcrypt from 'bcryptjs';
import User from '../modals/userModal.js';
import generateToken from '../utils/generateToken.js';


//Register Business logic
export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "all field are mandatory"
            });
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ success: "false", message: "User is already exit" })
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
                username,
                email,
                password: hashedPassword,
            })

            if (newUser) {
                return res.status(200).json({
                    success: true,
                    message: "User created Successfully"
                });
            }
        }

    } catch (error) {
        console.log(error.message, 'error');
        return res.status(500).json({
            success: false,
            message: "Failed To Register"
        })
    }
}

//Login Business Logic
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "all fields are required"
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(400).json({
                success: false,
                message: "Incorrect email or password"
            })
        }

        generateToken(user, res, `Welcome to ${user.email}`);
    } catch (error) {
        console.log(error.message, 'error');
        return res.status(500).json({
            success: false,
            message: "Failed To Login"
        })
    }
}