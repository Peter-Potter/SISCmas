import { DataTypes, Sequelize } from "sequelize";

// Option 1: Passing a connection URI
const db = new Sequelize('postgres://postgres:12345@localhost:5432/SISCmas') // Example for postgres

const User = db.define(
  'User',
  {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    // Model attributes are defined here
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    message: {
        type: DataTypes.STRING,
    }
  },
  {
    // Other model options go here
  },
);

(async () => {
  await User.sync({alter:true});
  // Code here
})();

export {db, User};