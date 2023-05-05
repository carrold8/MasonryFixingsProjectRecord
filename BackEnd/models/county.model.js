const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const county = sequelize.define('county', {
        id: {
            type: Sequelize.INT
        },
        county: {
            type: Sequelize.STRING
        }
    });
    return county
};