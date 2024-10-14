const { ContentType, FieldType } = require('@include/hearth');

const allMedia = new ContentType({ name: 'all-media', singularDisplayName: 'Media For All Pages' });

allMedia
  .createField({
    name: 'home_gallery',
    displayName: 'Homepage: Gallery',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'home_mission_image',
    displayName: 'Homepage: Mission Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'home_upcoming_events_image',
    displayName: 'Homepage: Upcoming Events Image',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'aboutus_gallery',
    displayName: 'About Us: Gallery',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'aboutus_history_cards_images',
    displayName: 'About Us: History Card Images (in the same order as the cards)',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'aboutus_youtube_video',
    displayName: 'About Us: Youtube Video Link',
    type: FieldType.SHORT_TEXT,
    required: true,
  })
  .createField({
    name: 'get_involved_cards_images',
    displayName: 'Get Involved: Involvement Card Images (in the same order as the cards)',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  .createField({
    name: 'services_slides_images',
    displayName: 'Services: Slide Images (in the same order as the slides)',
    type: FieldType.MEDIA_LIST,
    required: true,
  })
  ;

module.exports = allMedia;
