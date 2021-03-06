'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */
      return queryInterface.createTable(
	  'users',
	  {
	      id: {
		  type: Sequelize.INTEGER,
		  primaryKey: true,
		  autoIncrement: true
	      },
	      createdAt: {
		  type: Sequelize.DATE
	      },
	      updatedAt: {
		  type: Sequelize.DATE
	      },
	      email: Sequelize.STRING,
	      name: Sequelize.STRING,

	  }
      );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
      return queryInterface.dropTable('users');
  }
};
