const { ContentType, FieldType } = require('@include/hearth');
const { createFieldsI18n } = require('../utils/schema_utils');

const aboutUs = new ContentType({
  name: 'about-us',
  singularDisplayName: 'About Us',
});

const fields = [
  {
    name: 'page_title',
    displayName: 'Page Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'page_subtitle',
    displayName: 'Page Subtitle',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'aboutus_gallery',
    displayName: 'About Us Gallery',
    type: FieldType.MEDIA_LIST,
    required: true,
    noi18n: true,
  },
  {
    name: 'commitment_statement',
    displayName: 'Commitment Statement',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'aboutus_youtube_video',
    displayName: 'About Us Youtube Video Link',
    type: FieldType.SHORT_TEXT,
    required: true,
    noi18n: true,
  },
  {
    name: 'history_card_1_title',
    displayName: 'History Card 1: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_1_text',
    displayName: 'History Card 1: Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_2_title',
    displayName: 'History Card 2: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_2_text',
    displayName: 'History Card 2: Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_3_title',
    displayName: 'History Card 3: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_3_text',
    displayName: 'History Card 3: Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_4_title',
    displayName: 'History Card 4: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_4_text',
    displayName: 'History Card 4: Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_5_title',
    displayName: 'History Card 5: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'history_card_5_text',
    displayName: 'History Card 5: Text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'aboutus_history_cards_images',
    displayName: 'History Card Images (in the same order as the cards)',
    type: FieldType.MEDIA_LIST,
    required: true,
    noi18n: true,
  },
  {
    name: 'sister_clinics_text',
    displayName: '"Sister Clinics" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'sister_clinics',
    displayName: 'Sister Clinics (Separated by semicolons, each item formatted as Clinic Name - link)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'ucd_clinics_text',
    displayName: '"UCD Clinics" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'ucd_clinics',
    displayName: 'UCD Clinics (Separated by semicolons, each item formatted as Clinic Name - link)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
];

createFieldsI18n(aboutUs, fields);

module.exports = aboutUs;
