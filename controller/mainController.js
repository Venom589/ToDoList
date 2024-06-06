const users = require("../model/users");
const tasks = require("../model/tasks");

class mainController {
    constructor(){
        this.users = users;
        this.tasks = tasks;
    }
}

module.exports = mainController; 