module.exports = mongoose => {
    const Transaction = mongoose.model(
      "transaction",
      mongoose.Schema(
        {
          originAccount: { type: String, required: true},
          nitOriginCompany: { type: String, required: true},
          destAccount: { type: String, required: true },
          nitDestCompany: { type: String, required: true},
          paymentMethod: { type: String, required: true, enum: ['TRANSFERENCIA BANCARIA', 'TARJETA DE CREDITO']},
          value: { type: Number, required: true },
          date: { type: Date, required: true},
          anomaly: { type: String, required: true}
        }
      )
    );
  
    return Transaction;
  };