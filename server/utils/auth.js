const jwt = require("jsonwebtoken");

const secret = "shh";
const expiration = "24h"

module.exports = {
    signToken: function({currentUser: {email} , user}) {
        const payload = { email, user}
        return jwt.sign({data: payload}, secret, {expiresIn: expiration});
    }
}

