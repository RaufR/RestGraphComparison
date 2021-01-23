const { RESTDataSource } = require("apollo-datasource-rest");

class SpeakerAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000/speakers";
  }

  async getSpeakers() {
    const data = await this.get("/");
    return data;
  }

  async getSpeakerByID(id) {
    const data = await this.getSpeakerByID(`/{id}`);
    return data;
  }
}

module.exports = SpeakerAPI;
