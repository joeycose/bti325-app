const fs = require("fs");
const path = require("path");

let employees = [];
let departments = [];


module.exports.initialize = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile(path.resolve(__dirname, "./data/employees.json"), { encoding: "utf8" }, function (err, data) {
            if (err) {
                console.log("Error reading employees.json file");
                reject("unable to read file");
            }
            else {
                employees = JSON.parse(data);
                fs.readFile(path.resolve(__dirname, "./data/departments.json"), { encoding: "utf8" }, function (err, data) {
                    if (err) {
                        console.log("Error reading departments.json file");
                        reject("unable to read file");
                    }
                    else {
                        departments = JSON.parse(data);
                        resolve();
                    }
                });
            }
        });
    });
}

module.exports.getAllEmployees = function () {
    return new Promise(function (resolve, reject) {
        if (employees.length === 0) {
            reject("no results returned");
        }
        resolve(employees);
    });
}

module.exports.getManagers = function () {
    return new Promise(function (resolve, reject) {
        if (employees.length == 0) {
            reject("unable to read file");
        }
        else {
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].isManager == true) {
                    resolve(employees[i].manager);
                }
            }
        }
    });
}

module.exports.getDepartments = function () {
    return new Promise(function (resolve, reject) {
        if (departments.length == 0) {
            reject("no results returned");
        }
        else {
            resolve(departments);
        }
    });
}


//  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //  //

// Rough Work

/*
function getAllEmployees() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/employees.json', (err, data) => {
            if (err) {
                reject("Error reading employees.json file.");
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}
*/

/*
function getManagers() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/employees.json', (err, data) => {
            if (err) {
                reject("Error reading employees.json file.");
            } else {
                resolve(JSON.parse(data).filter(employee => employee.isManager == true));
            }
        });
    });
}
*/

/*
function getDepartments() {
    return new Promise((resolve, reject) => {
        fs.readFile('./data/departments.json', (err, data) => {
            if (err) {
                reject("Error reading departments.json file.");
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}
*/
