const { ContentType, FieldType } = require('@include/hearth');

const aboutUs = new ContentType({
  name: 'about-us-english',
  singularDisplayName: 'About Us (English)',
});

aboutUs
  .createField({
    name: 'page_title',
    displayName: 'Page Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'page_subtitle',
    displayName: 'Page Subtitle',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'commitment_statement',
    displayName: 'Commitment Statement',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_1_title',
    displayName: 'History Card 1: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_1_text',
    displayName: 'History Card 1: Text',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_2_title',
    displayName: 'History Card 2: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_2_text',
    displayName: 'History Card 2: Text',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_3_title',
    displayName: 'History Card 3: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_3_text',
    displayName: 'History Card 3: Text',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_4_title',
    displayName: 'History Card 4: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_4_text',
    displayName: 'History Card 4: Text',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_5_title',
    displayName: 'History Card 5: Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'history_card_5_text',
    displayName: 'History Card 5: Text',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'sister_clinics_text',
    displayName: '"Sister Clinics" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'sister_clinics',
    displayName: 'Sister Clinics (Use a bulleted list, each bullet formatted exactly like Clinic Name - link',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'ucd_clinics_text',
    displayName: '"UCD Clinics" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'ucd_clinics',
    displayName: 'UCD Clinics (Use a bulleted list, each bullet formatted exactly like Clinic Name - link',
    type: FieldType.LONG_TEXT,
    required: true,
  });

module.exports = aboutUs;
