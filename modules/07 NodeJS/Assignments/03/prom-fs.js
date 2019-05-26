const fs = require('fs');


function readFilePromise(filename) {
    return new Promise((res, rej) => {
        try {
            fs.readFile(filename, 'utf-8', (error, data) => {
                if (error) rej(`Error: ${error}`);

                res(data);
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}
function writeFilePromise(filename,data) {
    return new Promise((res, rej) => {
        try {
            fs.writeFile(filename, data , (error) => {
                if (error) rej(`Error: ${error}`);

                res(data);
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}
function appendFilePromise(filename) {
    return new Promise((res, rej) => {
        try {
            fs.appendFile(filename, 'utf-8', (error, data) => {
                if (error) rej(`Error: ${error}`);

                res(data);
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function unlinkPromise(path) {
    return new Promise((res, rej) => {
        try {
            fs.unlink(path, (error) => {
                if (error) rej(`Error: ${error}`);
                res(path);
            })
        }
        catch (ex) {
            rej(`Error: ${ex}`);
        }
    });
}

function readFileIfExists(filename) {
    try {
        if (fs.existsSync(filename)) {
            readFilePromise(filename);
        }
    } catch (err) {
        console.error(err)
    }

}

module.exports = { readFilePromise, writeFilePromise, appendFilePromise, unlinkPromise, readFileIfExists };