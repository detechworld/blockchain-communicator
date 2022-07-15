const mongoose = require('mongoose');

const { Schema } = mongoose;

const FAQ = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  isPublished: { type: Boolean, required: false },

  isVisible: { type: Boolean, required: false }, // temp for migration
});

const ResearchAttributeValueOption = new Schema({
  _id: false,
  title: { type: String, required: false },
  shortTitle: { type: String, required: false },
  description: { type: String, required: false },
  value: { type: Schema.Types.ObjectId, default: null },
});

const BlockchainFieldMeta = new Schema({
  _id: false,
  field: { type: String, required: true },
  isPartial: { type: Boolean, required: false, default: false },
});

const ResearchAttribute = new Schema({
  type: { type: String, required: true },
  isFilterable: { type: Boolean, default: false },
  isEditable: { type: Boolean, default: true },
  isRequired: { type: Boolean, default: false },
  isHidden: { type: Boolean, default: false },
  isMultiple: { type: Boolean, default: false },
  title: { type: String, required: false },
  shortTitle: { type: String, required: false },
  description: { type: String, required: false },
  valueOptions: [ResearchAttributeValueOption],
  defaultValue: { type: Schema.Types.Mixed, default: null },
  blockchainFieldMeta: BlockchainFieldMeta,

  isPublished: { type: Boolean, required: false }, // temp for migration
  isVisible: { type: Boolean, required: false }, // temp for migration
  isBlockchainMeta: { type: Boolean, default: false }, // temp for migration
  component: { type: Object, required: false }, // temp for migration
});

const AppModuleMap = new Schema({
  _id: false,
  'app-eci': { type: Boolean, default: false },
  'app-crowdfunding': { type: Boolean, default: false },
  'app-expert-review': { type: Boolean, default: false },
  'app-assets-management': { type: Boolean, default: false },
  'app-assets-withdrawal': { type: Boolean, default: false },
  'app-assets-deposit': { type: Boolean, default: false },
  'app-grants-management': { type: Boolean, default: false },
  'app-blockchain-explorer': { type: Boolean, default: false },
  'app-user-personal-workspace': { type: Boolean, default: false },

  'app-page-sign-up': { type: Boolean, default: false },
  'app-page-eci-overview': { type: Boolean, default: false },
  'app-page-eci-participiants': { type: Boolean, default: false },
  'app-page-assets': { type: Boolean, default: false },
  'app-page-multisig-transactions': { type: Boolean, default: false },

  'admin-panel-members-management': { type: Boolean, default: false },
  'admin-panel-members-registration': { type: Boolean, default: false },
  'admin-panel-projects-management': { type: Boolean, default: false },
  'admin-panel-projects-registration': { type: Boolean, default: false },
  'admin-panel-attributes-management': { type: Boolean, default: false },
  'admin-panel-attributes-registration': { type: Boolean, default: false },
  'admin-panel-faq-setup': { type: Boolean, default: false },
  'admin-panel-review-setup': { type: Boolean, default: false },
  'admin-panel-layouts-setup': { type: Boolean, default: false },
  'admin-panel-network-setup': { type: Boolean, default: false },
});

const UserRoleModuleMap = new Schema({
  _id: false,
  roleGroupExternalId: { type: String, required: false, default: null },
  label: { type: String, required: true, trim: true },
  role: { type: String, required: true, trim: true },
  modules: AppModuleMap,
});

const GlobalNetworkSettings = new Schema({
  scope: [String],
  nodes: [String],
  isVisible: { type: Boolean, required: true, default: false },
});

const ReviewQuestion = new Schema({
  question: { type: String, required: true },
  contentTypes: [Number],
});

const ResearchContentAssessmentCriteria = new Schema({
  _id: false,
  id: { type: Number, required: true },
  title: { type: String, required: true },
  max: { type: Number, required: true },
});

const ResearchContentAssessmentCriterias = new Schema({
  _id: false,
  contentType: { type: Number, required: true },
  values: [ResearchContentAssessmentCriteria],
});

const TenantProfile = new Schema({
  _id: { type: String },
  name: { type: String },
  serverUrl: { type: String, required: true },
  shortName: { type: String },
  description: { type: String },
  email: {
    type: String, default: null, trim: true, index: true, match: [/\S+@\S+\.\S+/, 'email is invalid'],
  },
  logo: { type: String, default: 'default_tenant_logo.png' },
  banner: { type: String, default: 'default_banner_logo.png' },
  network: GlobalNetworkSettings,
  settings: {
    signUpPolicy: { type: String, required: true },
    newResearchPolicy: { type: String, required: true },
    researchAttributes: [ResearchAttribute],
    reviewQuestions: {
      type: [ReviewQuestion],
      default: [
        { question: 'Do you recommend the submission for funding?', contentTypes: [] },
        { question: 'Describe the strength or weaknesses of the submissions', contentTypes: [] },
        { question: 'How well does the submission align with the mission?', contentTypes: [] },
      ],
    },
    assesmentCriterias: {
      type: [ResearchContentAssessmentCriterias],
      default: [{
        contentType: 0,
        values: [
          { id: 1, title: 'Novelty', max: 5 },
          { id: 2, title: 'Technical Quality', max: 5 },
          { id: 7, title: 'Commercialization', max: 5 },
        ],
      }],
    },
    researchLayouts: { type: Object },
    faq: [FAQ],
    theme: { type: Object },
    modules: AppModuleMap,
    roles: [UserRoleModuleMap],
  },
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }, minimize: false });

const model = mongoose.model('tenants-profiles', TenantProfile);

module.exports = model;
