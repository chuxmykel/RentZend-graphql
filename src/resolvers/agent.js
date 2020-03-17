export default {
  Query: {
    agents: async (_parent, _args, { models }) => {
      return await models.Agent.findAll();
    },

    agent: async (_parent, { id }, { models }) => {
      return await models.Agent.findByPk(id);
    },
  },

  Mutation: {
    createAgent: async (_parent, agent, { models }) => {
      return await models.Agent.create(agent);
    },
  }
};
