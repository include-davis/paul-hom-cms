const { ContentType, FieldType } = require('@include/hearth');

const services = new ContentType({
  name: 'services-korean',
  singularDisplayName: 'Services (Korean)',
});

services
  .createField({
    name: 'regular_service_1_name',
    displayName: 'Regular Service 1 Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'regular_service_1_frequency',
    displayName: 'Regular Service 1 Frequency',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'regular_service_2_name',
    displayName: 'Regular Service 2 Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'regular_service_2_frequency',
    displayName: 'Regular Service 2 Frequency',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_1_title',
    displayName: 'Slide 1 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_1_items',
    displayName: 'Slide 1 Items (Use a bulletted list)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_2_title',
    displayName: 'Slide 2 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_2_items',
    displayName: 'Slide 2 Items (Use a bulletted list)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_3_title',
    displayName: 'Slide 3 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_3_items',
    displayName: 'Slide 3 Items (Use a bulletted list)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_4_title',
    displayName: 'Slide 4 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'slide_4_items',
    displayName: 'Slide 4 Items (Use a bulletted list)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'referrals_title_text',
    displayName: '"Referrals" Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'referrals',
    displayName: 'Referrals List (Use a bulletted list)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'translators_title_text',
    displayName: '"Translators" Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'translators',
    displayName: 'Translators List (Use a bulletted list)',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = services;
