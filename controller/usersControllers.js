const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mainController = require('./mainController');

class userController extends mainController {
    constructor() {
        super();
    }
    login = async (req, res) => {
        try {
            if (!req.body.password || !req.body.email) {
                throw new Error("Request data not found ::");
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist == null) {
                throw new Error("User not Exist ::");
            }
            let validPassowrd = await bcrypt.compare(req.body.password,userExist.Password);
            if(validPassowrd == false){
                throw new Error("Password is not valid ::");
            }
            let jwtToken = jwt.sign({ username: userExist.Username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ token: jwtToken });
        } catch (error) {
            console.log("Login Error :: ", error);
            res.sendStatus(400);
        }
    }
    signin = async (req, res) => {
        try {
            if (!req.body.username || !req.body.password || !req.body.email) {
                throw new Error("Request data not found ::");
            }
            let userExist = await this.users.findOne({ Email: req.body.email });
            if (userExist != null) {
                throw new Error("User already Exist ::");
            }
            let encPassword = await bcrypt.hash(req.body.password, 15);
            await this.users.create({
                Username: req.body.username,
                Password: encPassword,
                Email: req.body.email
            });
            res.status(200).send("User Created");
        } catch (error) {
            console.log("singin Error :: ", error);
            res.sendStatus(400);
        }
    }
}

module.exports = new userController();