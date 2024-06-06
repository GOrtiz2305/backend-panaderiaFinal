//importamos la conexión a la DB
import db from "../database/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

const ClienteModel = db.define('customers', {
   names: {type: DataTypes.STRING},
   last_names: {type: DataTypes.STRING},
   nit: {type: DataTypes.STRING},
   phone_number: {type: DataTypes.STRING},
   email: {type: DataTypes.STRING},
   status: {type: DataTypes.INTEGER, defaultValue: 1},
   created_at: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
   updated_at: {type: DataTypes.DATE, defaultValue: DataTypes.NOW}
}, {
   timestamps: false
});

export default ClienteModel