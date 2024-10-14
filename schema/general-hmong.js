const { ContentType, FieldType } = require('@include/hearth');

const general = new ContentType({
  name: 'general-hmong',
  singularDisplayName: 'General Information (Hmong)',
});

general
  .createField({
    name: 'title_text',
    displayName: '"Meet Our Committees!" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'back_to_committees',
    displayName: '"Back To Committees!" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'home',
    displayName: '"Home" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'about_us',
    displayName: '"About Us" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'services',
    displayName: '"Services" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'committees',
    displayName: '"Committees" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'get_involved',
    displayName: '"Get Involved" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'clinic_name',
    displayName: 'Clinic Name',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'clinic_description',
    displayName: 'Clinic Description',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'contact_us',
    displayName: '"Contact Us" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'thank_you_sponsors_text',
    displayName: '"Thank you to our sponsors" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'phone_number',
    displayName: 'Phone Number',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'address',
    displayName: 'Address',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'page_not_found',
    displayName: 'Page Not Found error text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'back_to_home',
    displayName: '"Back to home" error text',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = general;
