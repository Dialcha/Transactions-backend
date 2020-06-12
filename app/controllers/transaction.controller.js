const db = require("../models");
const Transaction = db.transactions;

// Create and Save a new Transaction
exports.create = (req, res) => {
  // Create a Transaction
  const transaction = new Transaction({
    originAccount : req.body.originAccount,
    nitOriginCompany: req.body.nitOriginCompany,
    destAccount: req.body.destAccount,
    nitDestCompany: req.body.nitDestCompany,
    value: req.body.value,
    date: req.body.date,
    anomaly: req.body.anomaly ? req.body.anomaly : "No anomalies"
  });

  // Save Transaction in the database
  transaction
    .save(transaction)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the transaction."
      });
    });
};

// Retrieve all transactions from the database.
exports.findAll = (req, res) => {
  Transaction.find({})
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params._id;

    Transaction.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found transaction with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving transaction with id=" + id });
      });
};
