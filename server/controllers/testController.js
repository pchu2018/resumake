const db = require('../models/resumesModel');

const testController = {};

testController.test = async (req, res, next) => {
    let sqlQuery='SELECT NOW() AS "theTime"';
    const testQuery = await db.query(sqlQuery);
    console.log(testQuery);
}

module.exports = testController;
