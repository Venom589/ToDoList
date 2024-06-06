const joi = require('joi');
const jwt = require('jsonwebtoken');

module.exports.isSchemaValid = (schema) => {
    try {
        return (req, res, next) => {
            const isValid = schema.validate(req.body, { abortEarly: false });
            if (!isValid.error) {
                next();
            } else {
                console.log(isValid.error);
                let errMessage = isValid.error.details.map(detail => detail.message);
                return res.status(400).json({
                    message: errMessage
                });
            }
        }

    } catch (error) {
        console.log("error at isSchemaValid :: ", error);
        throw error;
    }
}



module.exports.jwtVerify = async (req, res, next) => {
    try {
        if (
            req.headers.authorization &&
            req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
            await jwt.verify(req.headers.authorization.split(" ")[1],
                process.env.JWT_SECRET, (err, decoded) => {
                    if (err) { throw new Error("token not verified :: "); }
                });
            next();
        } else {
            throw new Error("Header not received :: ");
        }
    } catch (error) {
        console.log("jwt Error :: ",error);
        res.sendStatus(401);
    }
}