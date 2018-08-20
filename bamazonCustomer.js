var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "yadira",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  // run the start function after the connection is made to prompt the user
  itemsForSaleList();
});

function itemsForSaleList() {
//running the clear function to clear the results before showing the new list each time the function is run
   // clear(); 
//connecting to the product table in the bamazon database and pulling the data (i.e., all the items already listed for sale)
    connection.query('SELECT * FROM products', function(error, result) {
//setting and empty array to push the items for sale into
        var itemsForSaleArray = [];
//setting the for loop to retrieve/run through all the items for sale
        for (var i = 0; i < result.length; i++) {
//pushing the items for sale into the empty array
            itemsForSaleArray.push(result[i]);
        }
//console.table to print all the items for sale within the array into a table (console.table does same as console.log, but pushes the data as a table)
        console.table(itemsForSaleArray);
//running the next function that will run after the itemsForSaleList function is done running
        startorder();
    })
};

// function which prompts the user for what item they want to buy and how many units
function startorder() {
    inquirer
      .prompt([
        {
        name: "item_id",
        type: "input",
        message: "What is the ID of the product they would like to buy?",
        validate: validateInput,
        },
        {
        name: "item_units",
        type: "input",
        message: "How many units of the product they would like to buy?",
        validate: validateInput,
        },
    ])  
      .then(function(input) {
        //Creating variables for the user input to be stored 
            var item = input.item_id;
            var quantity = input.item_units;
    
    //console.table to print all the items for sale within the array into a table (console.table does same as console.log, but pushes the data as a table)
    console.log("Item:" + item + ", Quantity Requested" + quantity);

    //running the next function that will run after the itemsForSaleList function is done running
    validateOrder();
    })
};

// Query db to confirm that the given item ID exists in the desired quantity
function validateOrder() {

// Query database
		var queryStr = 'SELECT * FROM products WHERE ?';
		connection.query(queryStr, {item_id: item}, function(err, data) {

			if (err) throw err;
            console.log("Your auction was created successfully!");
            // re-prompt the user for if they want to bid or post
            start();
          }
        );
      });
  }
};