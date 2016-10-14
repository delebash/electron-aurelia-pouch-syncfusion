import {inject} from 'aurelia-framework';
import DbService from '../../services/pouchdb-service'

@inject(DbService)
export class PouchDb {
    constructor(db) {
        this.db = db;
        this.title = "Home";
        this.connectionResults = "";
    }

    activate() {
        this.db.testConnection()
            .then((promise) => this.connectionResults = promise)
            .catch((err) => this.connectionResults = err);
    }
}





// import {inject} from 'aurelia-framework';
// const  NodePouchDB = require('pouchdb');
// export class Home {
//     constructor() {
//         this.connectionResults = "";
//     }
//
//     activate() {
//
//        var websqlDB = new PouchDB('mydb-websql', {adapter: 'websql'});
//
//         websqlDB.info().then(function (info) {
//             this.connectionResults = '&#10004; We can use PouchDB with WebSQL!';
//         }).catch(function (err) {
//             this.connectionResults = 'Error for WebSQL';
//         });
//          var leveldbDB = new NodePouchDB('mydb-leveldb');
//         this.connectionResults = 'We can use PouchDB with LevelDB!';
//
//        var leveldbDB = new NodePouchDB('mydb-leveldb');
//        this.connectionResults  = 'Error for LevelDB';
//        this.connectionResults  = leveldbDB.info();
//         leveldbDB.info().then(function (info) {
//             this.connectionResults = '&#10004; We can use PouchDB with LevelDB!';
//         }).catch(function (err) {
//             this.connectionResults  = 'Error for LevelDB';
//         });
//
//     }
// }

// this.leveldbDB.info().then(function (info) {
//     connectionResults = '&#10004; We can use PouchDB with LevelDB!';
// }).catch(function (err) {
//     connectionResults = 'Error for LevelDB';
// });
// alert('trdt')
//this.connectionResults = 'Error for LevelDB';
//     this.leveldbDB.testConnection()
//         .then((promise) => this.connectionResults = promise)
//         .catch((err) => this.connectionResults = err);
// }