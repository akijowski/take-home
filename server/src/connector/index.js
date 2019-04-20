import SqlConnector from "./sqlConnector";

let conn;

export const getConnector = () => {
    if (conn) {
        return conn;
    } else {
        conn = new SqlConnector('../db.sqlite');
        return conn;
    }
}