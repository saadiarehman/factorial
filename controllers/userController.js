module.exports = {
    getUser : (req, res) => {
        res.send("get user");
    },
    createUser : (req, res) => {
        res.send("create user");
    },
    updateUser : (req, res) => {
        res.send("update user");
    },
    deleteUser : (req, res) => {
        res.send("delete user");
    }
};