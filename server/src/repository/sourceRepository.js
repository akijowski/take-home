export default class SourceRepository {
  constructor(connector) {
    this.connector = connector;
  }

  createSource(source) {
    let paramList = [source.id, source.name, source.environment, source.encoding]
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
    const sql = `UPDATE source SET (name, environment, encoding) = (?, ?, ?) WHERE id = ?`;
    let paramList = [source.name, source.environment, source.encoding, source.id];
    return this.connector.run(sql, paramList);
  }

  deleteSource(id) {
    const sql = `DELETE FROM source WHERE id = ?`;
    return this.connector.run(sql, [id]);
  }


}
