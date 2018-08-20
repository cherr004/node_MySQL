DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL(10,4) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("COMB", "HEALTH & BEAUTY", 2.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MASCARA", "HEALTH & BEAUTY", 6.25, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PAMPERS", "HEALTH & BEAUTY", 2.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("XBOX ONE", "VIDEO GAME", 250, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NINTENDO SWITCH", "VIDEO GAME", 300, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PLAYSTATION", "VIDEO GAME", 350, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BREAD", "GROCERY", 2.50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("BUTTER", "GROCERY", 4.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SALAMI", "GROCERY", 8.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("CHEESE", "GROCERY", 7.99, 10);

