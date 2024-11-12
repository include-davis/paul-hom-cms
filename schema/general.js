const { ContentType, FieldType } = require('@include/hearth');
const { createFieldsI18n } = require('../utils/schema_utils');

const general = new ContentType({
  name: 'general',
  singularDisplayName: 'General Information',
});

const fields = [
  {
    name: 'title_text',
    displayName: '"Meet Our Committees!" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'back_to_committees',
    displayName: '"Back To Committees!" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'home',
    displayName: '"Home" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'about_us',
    displayName: '"About Us" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'services',
    displayName: '"Services" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'committees',
    displayName: '"Committees" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'get_involved',
    displayName: '"Get Involved" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'clinic_name',
    displayName: 'Clinic Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'clinic_description',
    displayName: 'Clinic Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'contact_us',
    displayName: '"Contact Us" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'thank_you_sponsors_text',
    displayName: '"Thank you to our sponsors" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'phone_number',
    displayName: 'Phone Number',
    type: FieldType.SHORT_TEXT,
    required: true,
    noi18n: true,
  },
  {
    name: 'address',
    displayName: 'Address',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'page_not_found',
    displayName: 'Page Not Found error text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'back_to_home',
    displayName: '"Back to home" error text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
];

createFieldsI18n(general, fields);

module.exports = general;
