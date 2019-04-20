export default class MessageRepository {
  constructor(connector) {
    this.connector = connector;
  }

  getAllMessages() {
    const sql = `SELECT * FROM message`;
    return this.connector.all(sql);
  }

  getMessageById(id) {
    const sql = `SELECT * FROM message WHERE id = ?`;
    return this.connector.get(sql, [id]);
  }

  getAllMessagesBySourceId(sid) {
    const sql = `SELECT * FROM message WHERE source_id = ?`;
    return this.connector.all(sql, [sid]);
  }
}
