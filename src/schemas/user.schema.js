const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserLocation = new Schema({
  _id: false,
  city: { type: String, trim: true, default: null },
  country: { type: String, trim: true, default: null },
  address: { type: String, trim: true, default: null },
});

const UserRole = new Schema({
  _id: false,
  role: { type: String, required: true, trim: true },
  label: { type: String, trim: true },
  researchGroupExternalId: { type: String, required: true },
});

const UserProfile = new Schema({
  _id: { type: String },
  tenantId: { type: String, required: true },
  email: {
    type: String, required: true, trim: true, index: true, match: [/\S+@\S+\.\S+/, 'email is invalid'],
  },
  signUpPubKey: { type: String, default: null },
  status: { type: String, required: true },
  tenant: { type: String, default: 'deip' },
  avatar: { type: String, default: 'default-avatar.png' },
  firstName: { type: String, default: null, trim: true },
  lastName: { type: String, default: null, trim: true },
  bio: { type: String, default: null, trim: true },
  birthdate: { type: Date, default: null },
  category: { type: String, default: null, trim: true },
  occupation: { type: String, default: null, trim: true },
  roles: [UserRole],
  location: {
    type: UserLocation,
    default: {},
  },
  webPages: [{
    _id: false,
    type: {
      type: String,
      enum: ['webpage', 'facebook', 'linkedin', 'twitter', 'vk'],
      required: true,
    },
    label: {
      type: String, default: null, required: true, trim: true,
    },
    link: { type: String, default: '', trim: true },
    metadata: { type: Object, default: null },
  }],
  phoneNumbers: [{
    _id: false,
    label: {
      type: String, default: null, required: true, trim: true,
    },
    ext: { type: String, default: null, trim: true },
    number: { type: String, required: true, trim: true },
  }],
  education: [{
    _id: false,
    educationalInstitution: { type: String, required: true, trim: true },
    period: {
      from: { type: Date, default: null },
      to: { type: Date, default: null },
    },
    degree: { type: String, required: true },
    area: { type: String, required: true },
    description: { type: String, default: null },
    isActive: { type: Boolean, required: true, default: false },
  }],
  employment: [{
    _id: false,
    company: { type: String, required: true, trim: true },
    location: {
      city: { type: String, trim: true, default: null },
      country: { type: String, trim: true, default: null },
    },
    period: {
      from: { type: Date, default: null },
      to: { type: Date, default: null },
    },
    position: { type: String, required: true },
    description: { type: String, default: null },
    isActive: { type: Boolean, required: true, default: false },
  }],
  foreignIds: [{
    _id: false,
    label: { type: String, required: true, trim: true },
    id: { type: String, required: true, trim: true },
  }],
  payments: {
    stripeCustomerId: { type: String, required: false },
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const model = mongoose.model('user-profile', UserProfile);

module.exports =  model;
