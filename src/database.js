import fs from 'node:fs'

export class Database {
    #database =  {}

    #persist() {
        fs.writeFile('db.json', JSON.stringify(this.#database));
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        }else {
            this.#database[table] = [data];
        }

        this.#persist()

        return data;
    }

    select(table) {
        const data = this.#database[table] ?? [];

        return data;
    }
}