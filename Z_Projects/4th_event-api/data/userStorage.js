let users = [];

module.exports = {
    getAllUsers: function() {
        return users;
    },

    getUserByEmail: function(email) {
        const em = users.find((user) => user.email === email);

    },


    getUserById: function(id) {
        const i = users.find((user) => user.id === id);
    },


    createUser: function(userData) {

    },
}