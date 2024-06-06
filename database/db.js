import { Sequelize } from "sequelize";
const db = new Sequelize('final','SeptimoAdmin','',{host: '3.19.153.235', username:'SeptimoAdmin', password:'cB7GHH3Pvh5i', dialect: 'mysql', port: 3306});
export default db