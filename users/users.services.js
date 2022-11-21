const usersControllers = require('./users.controllers');

const getAllUsers = (req, res) => {
    const data = usersControllers.findAllUsers()
    res.status(200).json(data);
}

const getUserById = (req, res) => {
    const id = req.params.id;
    const user = usersControllers.findUserById(id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found!' });
    }
}

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    if (first_name && last_name && email && password && birthday) {
        const user = usersControllers.createUser({ first_name, last_name, email, password, birthday });
        res.status(201).json(user);
    } else {
        res.status(400).json({ message: 'Bad request!' });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser
}