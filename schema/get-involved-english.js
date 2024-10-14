const { ContentType, FieldType } = require('@include/hearth');

const getInvolved = new ContentType({
  name: 'get-involved-english',
  singularDisplayName: 'Get Involved (English)',
});

getInvolved
  .createField({
    name: 'details_text',
    displayName: '"Details" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'close_text',
    displayName: '"Close" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'sign_up_text',
    displayName: '"Sign Up" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_1_title',
    displayName: 'Card 1 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_1_signup_link',
    displayName: 'Card 1 Sign Up Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_1_details',
    displayName: 'Card 1 Details',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'card_2_title',
    displayName: 'Card 2 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_2_signup_link',
    displayName: 'Card 2 Sign Up Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_2_details',
    displayName: 'Card 2 Details',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'card_3_title',
    displayName: 'Card 3 Title',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_3_signup_link',
    displayName: 'Card 3 Sign Up Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'card_3_details',
    displayName: 'Card 3 Details',
    type: FieldType.LONG_TEXT,
    required: true,
  })
  .createField({
    name: 'donate_today_text',
    displayName: '"Donate Today!" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'donation_instructions',
    displayName: 'Instructions for Donating text',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'thank_you_text',
    displayName: '"Thank you" text',
    type: FieldType.SHORT_TEXT,
    required: true,
  });

module.exports = getInvolved;
