import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import validator from "validator";

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Please fill all the fields" });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Please enter a valid email" });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: "Password must be at least 6 characters long" });
        }

        // Hashing Password
        const hashedPassword = await bcrypt.hash(password, 12);

        const userData = {
            name,
            email,
            password: hashedPassword
        };

        // const user = await userModel.create(userData);

        // Does the same thing with the code below

        // const newUser = new userModel(userData);
        // const user = await newUser.save();

        // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // res.json({success: true, token})
    
    } catch (error) {
        
    }
};


export { registerUser };