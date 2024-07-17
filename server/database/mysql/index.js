const mysql = require('mysql2');



// create a database connection in your application using a Sequelize instance and the config file
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'hotels'
});

//verify your connection here !
;

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
})
;


module.exports = {connection

}

// export your Model Phrase below