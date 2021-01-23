module.exports = {
  sessions: (parent, args, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessions(args);
  },
  sessionById: (parent, { id }, { dataSources }, info) => {
    return dataSources.sessionAPI.getSessionsByID(id);
  },

  speakers: (parent, args, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakers();
  },

  speakerById: (parent, { id }, { dataSources }, info) => {
    return dataSources.speakerAPI.getSpeakerByID(id);
  },
};
