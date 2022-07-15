const mongoose = require('mongoose');

const { Schema } = mongoose;

const DisciplineSchema = new Schema({
  _id: { type: String, required: true },
  parentExternalId: { type: String, required: false },
  name: { type: String, required: true },
  tenantId: { type: String, required: true },
  multiTenantIds: { type: [String] },
});

const model = mongoose.model('discipline', DisciplineSchema);

module.exports = model;
