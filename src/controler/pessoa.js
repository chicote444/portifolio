import { openDB } from "../database/configDB.js";
import { users } from "./seeders.js";

export async function createTable() {
    openDB().then(db=>{
        db.exec(`
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                nome TEXT NOT NULL,
                idade INTEGER NOT NULL
            )
        `)
    })
} 

export async function insert() {
    openDB().then(db=>{
        db.run(`
            INSERT INTO users (nome, idade) VALUES (?,?)`, [users[0].nome, users[0].idade]
        )
    })
} 

export async function exibirUsers() {
    openDB().then(db=>{
        db.run(`
            SELECT * FROM users`
        )
    })
} 

const user = await exibirUsers();
console.log(user);