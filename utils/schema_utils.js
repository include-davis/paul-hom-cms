const { FieldType } = require('@include/hearth');

const locales = ['en', 'zh', 'hmn', 'ko', 'es', 'vi'];

function createFieldsI18n(collection, fields) {
  fields.map((field) => {
    if (field.noi18n || field.type == FieldType.MEDIA_LIST) {
      collection.createField(field);
      return;
    }

    locales.map((locale) => {
      collection.createField({
        name: `${field.name}_${locale}`,
        displayName: `${field.displayName} (${locale})`,
        type: field.type,
        required: field.required,
      });
    });
  });
}

module.exports = { createFieldsI18n };
