// Без DI
// class UserComponent {
//     constructor() {
//         this.database = new Database();
//     }
// }

// С DI
// class UserComponent {
//     constructor(database) {
//         this.database = database;
//     }
// }

// const database = new Database();
// const userComponent = new UserComponent(database);

// singleton
// class Database {
//     static instance;
//     static getInstance() {
//         if (!Database.instance) {
//             Database.instance = new Database();
//         }
//         return Database.instance;
//     }
// }
//
// class UserComponent {
//     constructor() {
//         this.database = Database.getInstance(); // Нет явного внедрения зависимостей
//     }
// }
