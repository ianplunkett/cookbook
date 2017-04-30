// ES6-style imports
import * as config from 'config';
import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';

// Import model specification from its own definition file.
import * as User from './user';
type Model = Sequelize.Model<any, any>;
interface DbConnection {
    User: Model;
}

let db = {};
let dbConfig = config.get('development');
let sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    dbConfig
);

const basename = path.basename(module.filename);
fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(function (file) {
        var model = sequelize['import'](path.join(__dirname, file));
        db[model['name']] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db['sequelize'] = sequelize;
db['Sequelize'] = Sequelize;

export default <DbConnection>db;
