const bcrypt = require('bcrypt');



let users = [];

module.exports = {
    getAllUsers: function() {
        return users;
    },

    getUserByEmail: function(email) {
        return users.find((user) => user.email === email);

    },


    getUserById: function(id) {
        return users.find((user) => user.id === id);
    },


    createUser: async function(userData) {

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const newUser = {
            id: users.length + 1,
            username: userData.username,
            email: userData.email,
            password: hashedPassword
        };
        users.push(newUser);
        return newUser;
    },
}