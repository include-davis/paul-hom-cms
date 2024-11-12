const { ContentType, FieldType } = require('@include/hearth');
const { createFieldsI18n } = require('../utils/schema_utils');

const services = new ContentType({
  name: 'services',
  singularDisplayName: 'Services',
});

const fields = [
  {
    name: 'regular_service_1_name',
    displayName: 'Regular Service 1 Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'regular_service_1_frequency',
    displayName: 'Regular Service 1 Frequency',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'regular_service_2_name',
    displayName: 'Regular Service 2 Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'regular_service_2_frequency',
    displayName: 'Regular Service 2 Frequency',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_1_title',
    displayName: 'Slide 1 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_1_items',
    displayName: 'Slide 1 Items (Separated by semicolons)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_2_title',
    displayName: 'Slide 2 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_2_items',
    displayName: 'Slide 2 Items (Separated by semicolons)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_3_title',
    displayName: 'Slide 3 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_3_items',
    displayName: 'Slide 3 Items (Separated by semicolons)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_4_title',
    displayName: 'Slide 4 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'slide_4_items',
    displayName: 'Slide 4 Items (Separated by semicolons)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'services_slides_images',
    displayName: 'Slide Images (in the same order as the slides)',
    type: FieldType.MEDIA_LIST,
    required: true,
    noi18n: true,
  },
  {
    name: 'referrals_title_text',
    displayName: '"Referrals" Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'referrals',
    displayName: 'Referrals List (Separated by semicolons)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'translators_title_text',
    displayName: '"Translators" Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'translators',
    displayName: 'Translators List (Separated by semicolons)',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
];

createFieldsI18n(services, fields);

module.exports = services;
