"use strict";
const sqlite3 = require('@journeyapps/sqlcipher').verbose();

class Db {
    constructor(file) {
        this.db = new sqlite3.Database(file);
        this.db.run("PRAGMA key = \"x'77916DDD37EA00AAE49BF86097E73BD347D7C032D5089F949D463A2690525541'\"");
        this.createTable()
    }

    createTable() {
        const sql = `
            CREATE TABLE IF NOT EXISTS userAuth (
                id integer PRIMARY KEY, 
                name text, 
                email text UNIQUE, 
                password text)`
        return this.db.run(sql);
    }

    selectByEmail(email, callback) {
        this.db.run("PRAGMA key = \"x'77916DDD37EA00AAE49BF86097E73BD347D7C032D5089F949D463A2690525541'\"");
        return this.db.get(
            `SELECT * FROM userAuth WHERE email = ?`,
            [email], function (err, row) {
                callback(err, row)
            })
    }

    insert(user, callback) {
        this.db.run("PRAGMA key = \"x'77916DDD37EA00AAE49BF86097E73BD347D7C032D5089F949D463A2690525541'\"");
        return this.db.run(
            'INSERT INTO userAuth (name,email,password) VALUES (?,?,?)',
            user, (err) => {
                callback(err)
            })
    }
}

module.exports = Db
