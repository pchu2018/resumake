const db = require('../models/dbModel');
import { UserData, ComponentType } from '../../types';

const userController = {};

userController.getUserData = async (req, res, next) => {
    
    const { id } = req.params;
    // const query = await db.query(`SELECT * FROM GRID LEFT JOIN component ON grid.componentId = component.componentId`);
    const userQuery = await db.query(`
        SELECT * 
        FROM app_user
        JOIN resume ON app_user.userId = resume.userId
        WHERE app_user.userId = ${id}
        ORDER BY posting_date DESC
        LIMIT 1`)
    
    // check if no results were returned
    if (userQuery.rowCount === 0) {
        console.log('No user records found');
        return res.status(400).send('No records found for that user');
    }

    const compQuery = await db.query(`
    SELECT * 
    FROM component
    WHERE app_user.userId = ${id}`)
    
    const userDataObj: UserData = {}
    res.locals = userDataObj;

    return next();
}

module.exports = userController;
