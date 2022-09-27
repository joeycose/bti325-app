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