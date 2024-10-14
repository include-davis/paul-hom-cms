const { ContentType, FieldType } = require('@include/hearth');

const home = new ContentType({ name: 'home-korean', singularDisplayName: 'Home (Korean)' });

home
  .createField({
    name: 'image_gallery_overlay_title',
    displayName: 'Title text over the image gallery',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'image_gallery_overlay_description',
    displayName: 'Description text over the image gallery',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'our_mission_title',
    displayName: '"Our Mission" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'our_mission_text',
    displayName: 'Mission',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'visit_us_text',
    displayName: '"Visit Us" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'contact_instruction',
    displayName: 'Instructions for Contacting',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'message',
    displayName: '"Message" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'closure_dates_text',
    displayName: '"Closure Dates" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'closure_dates',
    displayName: '5 Upcoming Closure Dates (Use a bulleted list, each bullet formatted exactly like Dec 1, 2025 : Event Name)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'upcoming_events_text',
    displayName: '"Upcoming Events" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'upcoming_events',
    displayName: '5 Upcoming Events (Use a bulleted list, each bullet formatted exactly like Dec 1, 2025)',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = home;
