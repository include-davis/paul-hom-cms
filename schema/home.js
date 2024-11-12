const { ContentType, FieldType } = require('@include/hearth');
const { createFieldsI18n } = require('../utils/schema_utils');

const home = new ContentType({ name: 'home', singularDisplayName: 'Home' });

const fields = [
  {
    name: 'home_gallery',
    displayName: 'Homepage Gallery Images',
    type: FieldType.MEDIA_LIST,
    required: true,
    noi18n: true,
  },
  {
    name: 'image_gallery_overlay_title',
    displayName: 'Title text over the image gallery',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'image_gallery_overlay_description',
    displayName: 'Description text over the image gallery',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'home_mission_image',
    displayName: 'Mission Section Image',
    type: FieldType.MEDIA_LIST,
    required: true,
    noi18n: true,
  },
  {
    name: 'our_mission_title',
    displayName: '"Our Mission" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'our_mission_text',
    displayName: 'Mission',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'visit_us_text',
    displayName: '"Visit Us" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'contact_instruction',
    displayName: 'Instructions for Contacting',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'message',
    displayName: '"Message" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'closure_dates_text',
    displayName: '"Closure Dates" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'closure_dates',
    displayName: 'Upcoming Closure Dates (Separated by semicolons, each item formatted as Dec 1, 2025)',
    type: FieldType.SHORT_TEXT,
    required: true,
    noi18n: true,
  },
  {
    name: 'upcoming_events_text',
    displayName: '"Upcoming Events" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'upcoming_events',
    displayName: 'Upcoming Events (Separated by semicolons, each item formatted as Dec 1, 2025 : Event Name)',
    type: FieldType.SHORT_TEXT,
    required: true,
    noi18n: true,
  },
  {
    name: 'home_upcoming_events_image',
    displayName: 'Upcoming Events Section Image',
    type: FieldType.MEDIA_LIST,
    required: true,
    noi18n: true,
  },
];

createFieldsI18n(home, fields);

module.exports = home;
