import sqlite3 from 'sqlite3';

class SqlConnector {
  constructor(dbFilePath) {
    this.db = new sqlite3.Database(dbFilePath, err => {
      if (err) {
        console.error('Could not connect to database', err);
      } else {
        console.info('Connected to database');
      }
    });
  }

  exec(sql) {
    return new Promise((resolve, reject) => {
      this.db.exec(sql, err => {
        if (err) {
          console.log(`Error running SQL ${sql}`);
          console.log(`Supplied params ${params}`);
          console.error(err);
          reject(err);
        } else {
          resolve({id: this.lastID});
        }
      });
    });
  }

  run(sql, params = []) {
    return new Promise((resolve, reject) => {
      this.db.run(sql, params, err => {
        if (err) {
          console.log(`Error running SQL ${sql}`);
          console.log(`Supplied params ${params}`);
          console.error(err);
          reject(err);
        } else {
          resolve({id: this.lastID});
        }
      });
    });
  }

  get(sql, params=[]) {
    return new Promise((resolve, reject) => {
      this.db.get(sql, params, (err, row) => {
        if (err) {
          console.log(`Error running SQL ${sql}`);
          console.error(err);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  all(sql, params=[]) {
    return new Promise((resolve, reject) => {
      this.db.all(sql, params, (err, rows) => {
        if (err) {
          console.log(`Error running SQL ${sql}`);
          console.error(err);
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
}

export default SqlConnector;
