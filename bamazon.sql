CREATE DATABASE bamazon;

USE bamazon;

DROP TABLE IF EXISTS products;

CREATE table products (

	item_id INT(50) NOT NULL auto_increment,
    
    product_name VARCHAR(100),
    
    department_name VARCHAR(100),
    
    price DECIMAL(7,2),
    
    stock_quantity INT(20),
    
    primary key (item_id)
    
    );
    
    SHOW tables;
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Nickelback Wolf Howl Three Moons T-Shirt", "Awesome Apparel", 15.99, 500);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Signed Ricky Schoeder Silver Spoons Poster", "Great Finds", 10.00, 20);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("The Ultimate Mac and Cheese Cookbook", "Books", 19.06, 42);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Life Sized Justin Trudeau Body Pillow", "Essential Bedding", 59.23, 4);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Burt Reynold's Platinum Grooming Kit", "Men's Grooming", 100.00, 10);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Ken and Barbie Get a Divorce DVD", "Children's DVDs", 15.99, 25);
    
	INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("I'm Really Into Country Chic Set of 12 Mason Jars", "Home and Kitchen", 18.85, 13);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Men are From Mars, Women are From Venus. Who are We Kidding, You`re Both From Uranus", "Self Help", 12.25, 12);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("Margaret Thatcher Swimsuit Calendar", "Calendar", 16.99, 100);
    
    INSERT INTO products(product_name, department_name, price, stock_quantity)
    VALUES ("The Sitty Shitty", "Bathroom", 27.89, 73);
    
    
    SELECT * FROM products;
    
    
    