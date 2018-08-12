var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Dannyboy!123",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) console.log(err);
    console.log("connected as id " + connection.threadId);
    
    idSearch();
  });

  // function idSearch(){
  //     connection.query("SELECT * FROM products", function(err, results){
  //       if(err) console.log(err);
  //       console.log(results);
  //       connection.end();
  //     });
  // }

  function idSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "list",
        message: "Welcome to Bamazon! What is the ID number of the item you'd like to buy?",
        choices: [
            "ID: 1 - Nickelback Wolf Howl Three Moons T-Shirt",
            "ID: 2 - Signed Ricky Schoeder Silver Spoons Poster",
            "ID: 3 - The Ultimate Mac and Cheese Cookbook",
            "ID: 4 - Life Sized Justin Trudeau Body Pillow",
            "ID: 5 - Burt Reynold's Platinum Men's Grooming Kit",
            "ID: 6 - Ken and Barbie Get a Divorce DVD",
            "ID: 7 - I'm Really Into Country Chic Set of 12 Mason Jars",
            "ID: 8 - Men are From Mars, Women are From Venus. Who are We Kidding, You`re Both From Uranus.",
            "ID: 9 - Margaret Thatcher Swimsuit Calendar",
            "ID: 10 - The Sitty Shitty"         
           ]    
      })
      
      .then(function(answer) {
        switch (answer.action) {
        case "ID: 1 - Nickelback Wolf Howl Three Moons T-Shirt":
          nickelSearch();
          break;
  
        case "ID: 2 - Signed Ricky Schoeder Silver Spoons Poster":
          rickySearch();
          break;
        
        case "ID: 3 - The Ultimate Mac and Cheese Cookbook":
          macSearch();
          break;

        case "ID: 4 - Life Sized Justin Trudeau Body Pillow":
          justinSearch();
          break;

        case "ID: 5 - Burt Reynold's Platinum Men's Grooming Kit":
          burtSearch();
          break;

        case "ID: 6 - Ken and Barbie Get a Divorce DVD":
          kenSearch();
          break;

        case "ID: 7 - I'm Really Into Country Chic Set of 12 Mason Jars":
          jarSearch();
          break;

        case "ID: 8 - Men are From Mars, Women are From Venus. Who are We Kidding, You`re Both From Uranus.":
          venusSearch();
          break;

        case "ID: 9 - Margaret Thatcher Swimsuit Calendar":
          margaretSearch();
          break;

        case "ID: 10 - The Sitty Shitty":
          shittySearch();
          break;
        }
      });
      
    }

    function nickelSearch() {
      inquirer
        .prompt({
          name: "nickelback",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            quantitySearch();
          });
          
        });
        
    }
    
    function rickySearch() {
      inquirer
        .prompt({
          name: "ricky",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        

    }

    function macSearch() {
      inquirer
        .prompt({
          name: "mac",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        
    }

    function justinSearch() {
      inquirer
        .prompt({
          name: "justin",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        
    }

    function burtSearch() {
      inquirer
        .prompt({
          name: "burt",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        
    }

    function kenSearch() {
      inquirer
        .prompt({
          name: "ken",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        
    }

    function jarSearch() {
      inquirer
        .prompt({
          name: "jar",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        
    }

    function venusSearch() {
      inquirer
        .prompt({
          name: "venus",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        })
        
    }

    function margaretSearch() {
      inquirer
        .prompt({
          name: "margaret",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
         
        });
        
    }

    function shittySearch() {
      inquirer
        .prompt({
          name: "shitty",
          type: "input",
          message: "How many units would you like to buy? Please enter a number."
        })
        .then(function(answer) {
          var query = "SELECT stock_quantity FROM products WHERE ?";
          connection.query(query, { product_name: answer.stock_quantity }, function(err, res) {
            if(err) console.log(err);
            for (var i = 0; i < res.length; i++) {
              console.log("Hello: " + res[i].item_id);
            }
            quantitySearch();
          });
          
        });
        
    }

    function quantitySearch(stock_quantity){
      var query = "SELECT stock_quantity FROM products";
      connection.query(query, {products:stock_quantity}, function(err, res){
        if(err) console.log(err);
        // console.log('yay you win');
        if(stock_quantity < 0){
          var query = "UPDATE stock_quantity SET  WHERE ?";
          connection.query(query, stock_quantity)
          
          console.log("You need to restock.");
        }
        else{
          
          console.log("Your order has been placed!");

        }
      });
    }

    
    
