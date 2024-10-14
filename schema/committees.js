const { ContentType, FieldType } = require('@include/hearth');

const committees = new ContentType({
  name: 'committees',
  singularDisplayName: 'Committees',
});

committees
  .createField({
    name: 'committee_name_english',
    displayName: 'Committee Name (English)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_description_english',
    displayName: 'Committee Description (English)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_name_chinese',
    displayName: 'Committee Name (Chinese)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_description_chinese',
    displayName: 'Committee Description (Chinese)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_name_hmong',
    displayName: 'Committee Name (Hmong)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_description_hmong',
    displayName: 'Committee Description (Hmong)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_name_korean',
    displayName: 'Committee Name (Korean)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_description_korean',
    displayName: 'Committee Description (Korean)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_name_spanish',
    displayName: 'Committee Name (Spanish)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_description_spanish',
    displayName: 'Committee Description (Spanish)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_name_viet',
    displayName: 'Committee Name (Viet)',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_description_viet',
    displayName: 'Committee Description (Viet)',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'committee_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  ;

module.exports = committees;
