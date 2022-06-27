
const Sequelize = require("sequelize");

const sequelize =  new Sequelize('my-express-app', 'root', '821010', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log("Connection successful");
}).catch((err) => {
 console.log("Error connecting to database!");
});


console.log("Another task");

