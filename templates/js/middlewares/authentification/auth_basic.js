const { decode, verify, sign } = require('jsonwebtoken');

const SECRET_TOKEN = null;
const EXPIRESIN = null;

class BasicAuth {
    //decode jsonWebToken
    DecodeToken(key) {
        const id = decode(key, { json: true });
        return id.data;
    }

    //verify json token
    async VerifyToken(req, res, next) {
        try {
            const token = req.headers.authorization;
            if (token) {
                const decodedToken = verify(token, SECRET_TOKEN);
                const userId = decodedToken.userId;
                if (userId) {
                    throw 'Invalid user';
                } else {
                    next();
                }
            } else {
                res.status(401).send('Auth token is not found');
            }
        } catch (e) {
            res.status(401).send('Invalid request!');
        }
    }

    //sign token
    SignToken(data) {
        return sign({ data }, SECRET_TOKEN, { expiresIn: EXPIRESIN });
    }
}

module.exports = BasicAuth;