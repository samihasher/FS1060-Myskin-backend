import { db } from './database';

export class SkincareRoutine {
    constructor(name, routine) {
        this.name = name;
        this.routine = routine;
    }

    static async findByName(name) {
        const row = await db.getrow("SELECT * FROM routines WHERE name = ?", [name]);
        if (row) {
            return new SkincareRoutine(row.name, JSON.parse(row.routine));
        }
        return null;
    }

    async save() {
        await db.query("INSERT INTO routines (name, routine) VALUES (?, ?)", [this.name, JSON.stringify(this.routine)]);
    }

    async update() {

        await db.query("UPDATE routines SET routine = ? WHERE name = ?", [JSON.stringify(this.routine), this.name]);
    }

    toJSON() {
        return {
            name: this.name,
            routine: this.routine
        };
    }
}
