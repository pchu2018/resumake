var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const db = require('../models/resumesModel');
const testController = {};
testController.test = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    let sqlQuery = 'SELECT NOW() AS "theTime"';
    try {
        const testQuery = yield db.query(sqlQuery);
        console.log(testQuery);
    }
    catch (e) {
        console.log(e, e.message);
    }
});
module.exports = testController;
