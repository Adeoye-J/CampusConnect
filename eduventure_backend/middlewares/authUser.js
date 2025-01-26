import jwt from "jsonwebtoken";

// User Authentication Middleware

const authUser = async (req, res, next) => {
    try {
        const {token} = req.headers;
        
        if (!token) {
            return res.status(401).json({success: false, message: "Please login to access this route"});
        }

        const decoded_token = jwt.verify(token, process.env.JWT_SECRET);

        req.body.userId = decoded_token.id;
    } catch (error) {
        console.log(error);
        res.status(401).json({success: false, message: error.message});
    }
}

export default authUser;