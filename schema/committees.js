const { ContentType, FieldType } = require('@include/hearth');
const { createFieldsI18n } = require('../utils/schema_utils');

const committees = new ContentType({
  name: 'committees',
  singularDisplayName: 'Committees',
});

const fields = [
  {
    name: 'committee_name',
    displayName: 'Committee Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'committee_description',
    displayName: 'Committee Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  },
  {
    name: 'committee_image',
    displayName: 'Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  },
];

createFieldsI18n(committees, fields);

module.exports = committees;
