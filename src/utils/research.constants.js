const mongoose = require('mongoose');

const RESEARCH_ATTRIBUTE_TYPE = {
  STEPPER: 'stepper',
  TEXT: 'text',
  TEXTAREA: 'textarea',
  SELECT: 'select',
  URL: 'url',
  VIDEO_URL: 'video-url',
  SWITCH: 'switch',
  CHECKBOX: 'checkbox',
  USER: 'user',
  TEAM_MEMBER: 'team-member',
  TOKEN_SHARE: 'token-share',
  DISCIPLINE: 'discipline',
  RESEARCH_GROUP: 'research-group',

  IMAGE: 'image',
  FILE: 'file',
  EXPRESS_LICENSING: 'express-licensing',
  NETWORK_CONTENT_ACCESS: 'network-content-access',

  ROADMAP: 'roadmap',
  PARTNERS: 'partners',
};

const RESEARCH_STATUS = {
  PROPOSED: 'proposed',
  APPROVED: 'approved',
  DELETED: 'deleted',
};

const RESEARCH_ATTRIBUTE = {
  TECHNOLOGY_READINESS_LEVEL: mongoose.Types.ObjectId('5ebd469a2cea71001f84345a'),
  MARKETING_READINESS_LEVEL: mongoose.Types.ObjectId('5ebd47762cea71001f843460'),
  SALES_READINESS_LEVEL: mongoose.Types.ObjectId('5ebd4b842cea71001f843467'),
  ROADMAP: mongoose.Types.ObjectId('5f68be12ae115a26e475fb90'),
  PARTNERS: mongoose.Types.ObjectId('5f68be12ae115a26e475fb91'),
  PRESENTATION_LINK: mongoose.Types.ObjectId('5f68be12ae115a26e475fb92'),
  WECHAIN_CATEGORIES: mongoose.Types.ObjectId('5f68be1d54f1da26e538b996'),
  TITLE: mongoose.Types.ObjectId('5f68be39c579c726e93a3006'),
  DESCRIPTION: mongoose.Types.ObjectId('5f68be39c579c726e93a3007'),
  DOMAIN: mongoose.Types.ObjectId('5f62d4fa98f46d2938dde1eb'),
  IS_PRIVATE: mongoose.Types.ObjectId('5f68d4fa98f36d2938dde5ec'),
  PROJECT_MANAGER: mongoose.Types.ObjectId('5f68d4fa98f36d2938dde5ed'),
  TEAM: mongoose.Types.ObjectId('5f690af5cdaaa53a27af4a30'),
  TEAM_MEMBER: mongoose.Types.ObjectId('5f690af5cdaaa53a27af4a31'),
  REFERENCE_NUMBER: mongoose.Types.ObjectId('5f6e7130de9b7c11c42963ec'),
  PUBLICATIONS: mongoose.Types.ObjectId('5f6e71a2de9b7c11c42963ee'),
  KEYWORDS: mongoose.Types.ObjectId('5f6e732fde9b7c11c42963f0'),
  INTELLECTUAL_PROPERTY_STATUS: mongoose.Types.ObjectId('5f6e7396de9b7c11c42963f6'),
  EXTERNAL_LINKS: mongoose.Types.ObjectId('5f6e73cdde9b7c11c42963f8'),
  APPLICATIONS: mongoose.Types.ObjectId('5f6e73f4de9b7c11c42963fa'),
  ADVANTAGES: mongoose.Types.ObjectId('5f6e741dde9b7c11c42963fc'),
  COVER_IMAGE: mongoose.Types.ObjectId('5f58d4fa97f36d3938dde1ed'),
  EXPRESS_LICENSING: mongoose.Types.ObjectId('5f7ec161fbb737001f1bacf1'),
  INVESTMENT_OPPORTUNITY: mongoose.Types.ObjectId('5f6f34a0b1655909aba2398b'),
  APPLIED_FOR_GRANT: mongoose.Types.ObjectId('5fae9a9ace42ab001f9f8393'),
  NETWORK_CONTENT_ACCESS: mongoose.Types.ObjectId('5f69be12ae115a26e475fb96'),
  TOKEN_SHARE: mongoose.Types.ObjectId('61e1861a7c53a854137e60c4'),
};

module.exports = { RESEARCH_ATTRIBUTE_TYPE, RESEARCH_STATUS, RESEARCH_ATTRIBUTE };
