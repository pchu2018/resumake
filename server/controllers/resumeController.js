const db = require('../models/dbModel');

const resumeController = {};

resumeController.test = async (req, res, next) => {
    let sqlQuery='SELECT NOW() AS "theTime"';
    try {
    const testQuery = await db.query(sqlQuery);
    console.log(testQuery);
    } catch (e) {
        console.log(e, e.message)
    }
}

resumeController.getComponent = async (req, res, next) => {
    
    const { id } = req.params;
    const query = await db.query(`SELECT * FROM GRID LEFT JOIN component ON grid.componentId = component.componentId`);
    res.locals = query;
    return next();
}

module.exports = resumeController;
