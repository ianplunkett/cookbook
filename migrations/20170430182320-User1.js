'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
	return queryInterface.bulkInsert('users', [{
	    name: 'john',
	    email: 'john@example.com',
	    createdAt: new Date(),
	    updatedAt: new Date()
	}]);
    },
    down: function(queryInterface, Sequelize) {
	return queryInterface.bulkDelete('users', null, {});
    }
};
