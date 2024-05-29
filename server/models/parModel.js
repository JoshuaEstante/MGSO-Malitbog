import mongoose from 'mongoose';

// Define the item schema
const parSchema = new mongoose.Schema({
  ID: { type: String, required: true },
  QTY: { type: Number, required: true },
  UNIT: { type: String, required: true },
  UnitCost: { type: Number, required: true },
  TotalCost: { type: Number, required: true },
  Description: { type: String },
  DateAcquired: { type: Date, default: Date.now },
  PropertyTagNo: { type: String },
  AccountClassificationCode: { type: String },
  EstimatedUsefulLife: { type: Number },
  Remarks: { type: String },
  Office: { type: String }
});

// Create the Item model
const PAR = mongoose.model('Item', parSchema);

// Export the Item model as the default export
export default PAR;
