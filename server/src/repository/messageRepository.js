export default class MessageRepository {
  constructor(connector) {
    this.connector = connector;
  }

  getAllMessages() {
    const sql = `SELECT * FROM message`;
    return this.connector.all(sql);
  }
}
