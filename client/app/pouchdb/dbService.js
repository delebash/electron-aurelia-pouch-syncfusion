export default class DbService {

    constructor() {

       var NodePouchDB = require('pouchdb');
       this.leveldbDB = new NodePouchDB('./client/db/mydb-leveldb');
    }

    testConnection() {
        return new Promise((resolve, reject) => {
            this.leveldbDB.info(function(err, db) {
                if(!err) {
                    resolve("We are connected");
                } else {
                    reject(err);
                }
            });
        });
    }
}



//
// export default class MongoService {
//     constructor() {
//         this.MongoClient = require('mongodb').MongoClient;
//       t
//         this.NodePouchDb =NodePouchDb;
//         this.MongoClient = require('mongodb').MongoClient;;
//     }
//
//     testConnection() {
//
//         // var leveldbDB = new NodePouchDB('mydb-leveldb');
//
//         return new Promise((resolve, reject) => {
//             this.MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
//                 if(!err) {
//                     resolve("We are connected");
//                 } else {
//                     reject(err);
//                 }
//             });
//         });
//     }
// }

