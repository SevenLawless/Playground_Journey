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


    createUser: function(userData) {
        const newUser = {
            id: users.length + 1,
            username: userData.username,
            email: userData.email,
            password: userData.password
        };
        users.push(newUser);
        return newUser;
    },
}