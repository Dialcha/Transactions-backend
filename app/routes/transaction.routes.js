module.exports = app => {
    const transaction = require("../controllers/transaction.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Transaction
    router.post("/", transaction.create);
  
    // Retrieve all Transactions
    router.get("/", transaction.findAll);
  
    // Retrieve a single Transaction with id
    router.get("/:id", transaction.findOne);
  
    app.use('/api/transactions', router);
  };