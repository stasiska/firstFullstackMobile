const bcrypt = require("bcrypt")
const { hash, compare } = require("bcrypt")

const hashPassword = async (password) => {
    const hashPassword = await hash(password,10);
    return hashPassword;
}

const comparePassword = async (password, hashPassword) => {
    const result = await compare(password, hashPassword)
    return result;
}

module.exports = { hashPassword, comparePassword }