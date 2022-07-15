const mongoose = require('mongoose');

const { Schema } = mongoose;

const ResearchGroupSchema = new Schema({
  _id: { type: String, required: true },
  tenantId: { type: String, required: true },
  creator: { type: String, required: true },
  name: { type: String, required: true },
  isPersonal: { type: Boolean, required: true, default: false },
  description: { type: String, required: false, default: '' },
  researchAreas: [Object],
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const model = mongoose.model('research-groups', ResearchGroupSchema);

module.exports = model;
