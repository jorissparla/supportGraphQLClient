export const typeDefs = `
  type Account {
    id: ID!
    firstname: String
    lastname: String
    fullname: String
    email: String
    login: String
    team: String
    navid: String
    location: String
    region: String
  }
  
  type Query {
    account: [Account]
  }
  `;
