CREATE TABLE tbl_todo (
  todo_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  user VARCHAR(16) NOT NULL,
  todo_description VARCHAR(255) NOT NULL,
  done BOOLEAN NOT NULL,
  PRIMARY KEY(todo_id)
);

INSERT INTO tbl_todo (user, todo_description, done)
VALUES ('Jon', 'Do expenses', false);