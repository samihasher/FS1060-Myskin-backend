import { db } from './database';

export class User {
    constructor(userId, email, password) {
        this.userId = userId;
        this.email = email;
        this.password = password;
    }

    static async findByEmail(email) {
        const row = await db.getrow("SELECT * FROM users WHERE email = ?", [email]);
        if (row) {
            return new User(row.userId, row.email, row.password);
        }
        return null;
    }

    static async findById(userId) {
        const row = await db.getrow("SELECT * FROM users WHERE userId = ?", [userId]);
        if (row) {
            return new User(row.userId, row.email, row.password);
        }
        return null;
    }

    async save() {
        await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [this.email, this.password]);
    }

    async update() {
        await db.query("UPDATE users SET email = ?, password = ? WHERE userId = ?", [this.email, this.password, this.userId]);
    }

    toJSON() {
        return {
            userId: this.userId,
            email: this.email,
            password: this.password
        };
    }
}
