const mysql = require('mysql');

const setUpDatabaseConnection = config => {};

const findTodoByUser = user =>
  new Promise((resolve, reject) => {
    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    connection.connect();

    connection.query(
      'SELECT * FROM tbl_todo WHERE user=?',
      [user],
      (err, rows, fields) => {
        if (err) {
          reject(err);
        }

        connection.end();
        resolve(
          rows.map(({ todo_id, user, todo_description, done }) => ({
            id: todo_id,
            user,
            description: todo_description,
            done: done === 1
          }))
        );
      }
    );
  });

const createTodo = newTodo => {
  // FILL THIS IN
  /*
  CREATE DB CONNECTION
  TRY
    INSERT NEW ROW INTO TABLE
  CATCH
    RETURN ERROR
  CLOSE DB CONNECTION
  */
};

const updateTodoById = () => {
  // FILL THIS IN
  /*
  CREATE DB CONNECTION
  TRY
    UPDATE ROW IN TABLE
  CATCH
    RETURN ERROR
  CLOSE DB CONNECTION
  */
};
