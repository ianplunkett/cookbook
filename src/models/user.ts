import * as Sequelize from 'sequelize';

export interface UserAttributes {
    email: string;
    name: string;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes> {
    // I'm exposing every DB column as an instance field to so that tsc won't complain
    id: number;
    createdAt: Date;
    updatedAt: Date;

    email: string;
    name: string;
}

export default function defineUser(sequelize: Sequelize.Sequelize, DataTypes) {
    const User = sequelize.define('User', {
        email: Sequelize.STRING,
        name: Sequelize.STRING
    });

    return User;
}
