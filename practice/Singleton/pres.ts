class Database {
    private static instance: Database | null = null;
    private constructor() {
        /* init */
    }

    public static getInstance(): Database {
        if (this.instance === null) {
            this.instance = new Database();
        }

        return this.instance;
    }

    public query(query: string): string {
        return `${query}test`;
    }
}

const database = Database.getInstance();

console.log(database.query('test'));
