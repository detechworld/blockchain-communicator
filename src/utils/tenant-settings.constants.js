const mongoose = require('mongoose');

const APPLIED_FOR_GRANT = {
  CAPACITY: mongoose.Types.ObjectId('5fae9a9ace42ab001f9f8394'),
  GREENING: mongoose.Types.ObjectId('5fae9a9ace42ab001f9f8395'),
};

const KEYWORD = {
  GENE_EXPRESSION: mongoose.Types.ObjectId('5f6e732fde9b7c11c42963f1'),
  BLOOD: mongoose.Types.ObjectId('5f6e732fde9b7c11c42963f2'),
  RNK: mongoose.Types.ObjectId('5f6e732fde9b7c11c42963f3'),
  GENETICS: mongoose.Types.ObjectId('5f6e732fde9b7c11c42963f4'),
  COMPUTER_SCIENCES: mongoose.Types.ObjectId('5f85c5bc96124f001f07d503'),
  IT: mongoose.Types.ObjectId('5f85c5bc96124f001f07d504'),
  AI: mongoose.Types.ObjectId('5f85c5bc96124f001f07d505'),
  PHOTONICS: mongoose.Types.ObjectId('5f85c5bc96124f001f07d506'),
  TELECOMMUNICATIONS: mongoose.Types.ObjectId('5f85c5bc96124f001f07d507'),
  ELECTRONIC: mongoose.Types.ObjectId('5f85c5bc96124f001f07d508'),
  DATA: mongoose.Types.ObjectId('5f85c5bc96124f001f07d509'),
  PET: mongoose.Types.ObjectId('5f85c5bc96124f001f07d50a'),
  THERANOSTICS: mongoose.Types.ObjectId('5f85c5bc96124f001f07d50b'),
  MOLECULAR: mongoose.Types.ObjectId('5f85c5bc96124f001f07d50c'),
  HEPATOCELLULAR_CARCINOMA: mongoose.Types.ObjectId('5f85c5bc96124f001f07d50d'),
  MATERIAL: mongoose.Types.ObjectId('5f85c5bc96124f001f07d50e'),
  MATERIAL_FETAL_HEALTH: mongoose.Types.ObjectId('5f85c5bc96124f001f07d50f'),
  OBSTETRICS: mongoose.Types.ObjectId('5f85c5bc96124f001f07d510'),
  POST_SURGICAL_RECOVERY: mongoose.Types.ObjectId('5f85c5bc96124f001f07d511'),
  CHEMICALS: mongoose.Types.ObjectId('5fec7219eb6988001fb2b62a'),
  LIFE_SCIENCE: mongoose.Types.ObjectId('5fec7219eb6988001fb2b62b'),
  AGRICULTURE: mongoose.Types.ObjectId('5fec7219eb6988001fb2b62c'),
  ENVIRONMENT: mongoose.Types.ObjectId('5fec7219eb6988001fb2b62d'),
  PROTEIN: mongoose.Types.ObjectId('5fec809feb6988001fb2b64a'),
  PEPTIDE: mongoose.Types.ObjectId('5fec809feb6988001fb2b64b'),
  RESEARCH_TOOLS: mongoose.Types.ObjectId('5fec809feb6988001fb2b64c'),
  HEALTH_IT: mongoose.Types.ObjectId('5fec809feb6988001fb2b64d'),
  MATERIALS: mongoose.Types.ObjectId('600ae4eb6ec658001fd7dd1b'),
  ENERGY: mongoose.Types.ObjectId('600ae4eb6ec658001fd7dd1c'),
  SEMICONDUCTORS: mongoose.Types.ObjectId('600ae4eb6ec658001fd7dd1d'),
};

const MARKETING_READINESS_LEVEL = {
  PRODUCT_NAME: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f1'),
  VISION: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f2'),
  MOTTO: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f3'),
  CORE_ATTRIBUTES: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f4'),
  PRICING_MODEL: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f5'),
  SERVICE_MODEL: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f6'),
  MARKETING: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f7'),
  SALES_STRATEGY: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f8'),
  CUSTOMER_SERVICE_REQUIREMENTS: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f9'),
};

const REVIEW_QUESTION = {
  RECOMMENDATION: mongoose.Types.ObjectId('61b7505de5aade2d828d4905'),
  STRENGTH: mongoose.Types.ObjectId('61b7505de5aade2d828d4906'),
  SUBMISSION: mongoose.Types.ObjectId('61b7505de5aade2d828d4907'),
};

const SALES_READINESS_LEVEL = {
  INDUSTRY_EXPERT_ANALYSIS: mongoose.Types.ObjectId('5f68be05d9047d26e2c444fa'),
  POTENTIAL_MARKETS_ANALYSIS: mongoose.Types.ObjectId('5f68be05d9047d26e2c444fb'),
  CUSTOMER_FEEDBACK: mongoose.Types.ObjectId('5f68be05d9047d26e2c444fc'),
  ITERATION_PROCESS: mongoose.Types.ObjectId('5f68be05d9047d26e2c444fd'),
  SOCIAL_MEDEA: mongoose.Types.ObjectId('5f68be05d9047d26e2c444fe'),
  ADMINISTRATIVE_SYSTEMS: mongoose.Types.ObjectId('5f68be05d9047d26e2c444ff'),
  OPERATIONAL_SYSTEMS: mongoose.Types.ObjectId('5f68be05d9047d26e2c44500'),
  MARKER_POSITIONING: mongoose.Types.ObjectId('5f68be05d9047d26e2c44501'),
  BRAND_DEVELOPMENT: mongoose.Types.ObjectId('5f68be05d9047d26e2c44502'),
};

const TECHNOLOGY_READINESS_LEVEL = {
  IDEA: mongoose.Types.ObjectId('5f68be05d9047d26e2c444e8'),
  BASIC_RESEARCH: mongoose.Types.ObjectId('5f68be05d9047d26e2c444e9'),
  APPLIED_LAB_RESEARCH: mongoose.Types.ObjectId('5f68be05d9047d26e2c444ea'),
  PROOF_OF_CONCEPT_PROTOTYPE: mongoose.Types.ObjectId('5f68be05d9047d26e2c444eb'),
  SUB_SYSTEM_PROTOTYPE: mongoose.Types.ObjectId('5f68be05d9047d26e2c444ec'),
  ALFA_PROTOTYPE: mongoose.Types.ObjectId('5f68be05d9047d26e2c444ed'),
  BETA_PROTOTYPE_PASSED_FIELD_TESTS: mongoose.Types.ObjectId('5f68be05d9047d26e2c444ee'),
  BATCH_PRODUCTION: mongoose.Types.ObjectId('5f68be05d9047d26e2c444ef'),
  MASS_PRODUCTION: mongoose.Types.ObjectId('5f68be05d9047d26e2c444f0'),
};

const WECHAIN_CATEGORY = {
  WECO2_PLATFORM: mongoose.Types.ObjectId('5eced07956951e00205be637'),
  TECHNOLOGY_PARTNERS_NEEDED: mongoose.Types.ObjectId('5eced06f56951e00205be62b'),
  INTERNAL_RESEARCH: mongoose.Types.ObjectId('5eced06656951e00205be620'),
  TECHNOLOGY_PARTNERS: mongoose.Types.ObjectId('5eced05956951e00205be616'),
};

module.exports = {
  KEYWORD,
  REVIEW_QUESTION,
  WECHAIN_CATEGORY,
  APPLIED_FOR_GRANT,
  SALES_READINESS_LEVEL,
  MARKETING_READINESS_LEVEL,
  TECHNOLOGY_READINESS_LEVEL,
};
