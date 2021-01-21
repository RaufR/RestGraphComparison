const sessions = require("../sessions.json");
const { DataSource } = require("apollo-datasource");

class SessionAPI extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {}

  getSessions() {
    return sessions;
  }
}

module.exports = SessionAPI;
