export default class SourceRepository {
  constructor(connector) {
    this.connector = connector;
  }

  createSource(source) {
    let {id, name, environmnet, encoding} = source;
    let paramList = [id, name, environment, encoding]
    const sql = `INSERT INTO source(id, name, environment, encoding)
      VALUES (?, ?, ?, ?)`;
    return this.connector.run(sql, paramList);
  }

  getAllSources() {
    const sql = `SELECT * FROM source`;
    return this.connector.all(sql);
  }

  getSourceById(id) {
    const sql = `SELECT * FROM source WHERE id = ?`;
    return this.connector.get(sql, [id]);
  }

  updateSource(source) {
    let {name, environment, encoding, updated_at, id} = source;
    const sql = `UPDATE source SET (name, environment, encoding, updated_at) = (?, ?, ?, ?) WHERE id = ?`;
    let paramList = [name, environment, encoding, updated_at, id];
    return this.connector.run(sql, paramList);
  }

  deleteSource(id) {
    const sql = `DELETE FROM source WHERE id = ?`;
    return this.connector.run(sql, [id]);
  }


}
