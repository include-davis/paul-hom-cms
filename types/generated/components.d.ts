import type { Schema, Attribute } from '@strapi/strapi';

export interface AboutUsCardDetails extends Schema.Component {
  collectionName: 'components_about_us_card_details';
  info: {
    displayName: 'card_details';
    description: '';
  };
  attributes: {
    card_number: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 5;
        },
        number
      >;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    image_description: Attribute.Text & Attribute.Required;
  };
}

export interface AboutUsClincLists extends Schema.Component {
  collectionName: 'components_about_us_clinc_lists';
  info: {
    displayName: 'clinc_lists';
  };
  attributes: {
    clinic_category_title: Attribute.String & Attribute.Required;
    number_of_clinics_in_list: Attribute.String & Attribute.Required;
    clinic_details: Attribute.Component<'about-us.name-link-combo', true> &
      Attribute.Required;
  };
}

export interface AboutUsFlippingCard extends Schema.Component {
  collectionName: 'components_about_us_flipping_cards';
  info: {
    displayName: 'flipping-card';
  };
  attributes: {
    card_details: Attribute.Component<'about-us.card-details', true> &
      Attribute.Required;
  };
}

export interface AboutUsNameLinkCombo extends Schema.Component {
  collectionName: 'components_about_us_name_link_combos';
  info: {
    displayName: 'name-link-combo';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    website_link: Attribute.String & Attribute.Required;
  };
}

export interface CommitteesCard extends Schema.Component {
  collectionName: 'components_committees_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface CommitteesCommitteeCards extends Schema.Component {
  collectionName: 'components_committees_committee_cards';
  info: {
    displayName: 'committee_cards';
  };
  attributes: {
    card_details: Attribute.Component<'committees.card', true> &
      Attribute.Required;
  };
}

export interface HomeHome extends Schema.Component {
  collectionName: 'components_pages_homes';
  info: {
    displayName: 'mission';
    description: '';
  };
  attributes: {
    text: Attribute.Text & Attribute.Required;
    image: Attribute.Media;
    our_mission_text: Attribute.String & Attribute.Required;
  };
}

export interface HomeTitleDescription extends Schema.Component {
  collectionName: 'components_home_title_descriptions';
  info: {
    displayName: 'title-description';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
  };
}

export interface HomeVisitUs extends Schema.Component {
  collectionName: 'components_home_visit_uses';
  info: {
    displayName: 'visit_us';
    description: '';
  };
  attributes: {
    contact_instruction: Attribute.Text & Attribute.Required;
    phone: Attribute.String & Attribute.Required;
    message: Attribute.String & Attribute.Required;
    address: Attribute.Text & Attribute.Required;
    visit_us_text: Attribute.String & Attribute.Required;
  };
}

export interface ServicesBulletedList extends Schema.Component {
  collectionName: 'components_services_bulleted_lists';
  info: {
    displayName: 'bulleted_list';
    icon: 'bulletList';
  };
  attributes: {
    list_items: Attribute.Text & Attribute.Required;
  };
}

export interface ServicesSlideDetails extends Schema.Component {
  collectionName: 'components_services_slide_details';
  info: {
    displayName: 'slide_details';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    image: Attribute.Media;
    bullet_points: Attribute.Text & Attribute.Required;
    count_of_bullet_points: Attribute.String & Attribute.Required;
  };
}

export interface ServicesSlide extends Schema.Component {
  collectionName: 'components_services_slides';
  info: {
    displayName: 'slides';
    description: '';
  };
  attributes: {
    slide: Attribute.Component<'services.slide-details', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'about-us.card-details': AboutUsCardDetails;
      'about-us.clinc-lists': AboutUsClincLists;
      'about-us.flipping-card': AboutUsFlippingCard;
      'about-us.name-link-combo': AboutUsNameLinkCombo;
      'committees.card': CommitteesCard;
      'committees.committee-cards': CommitteesCommitteeCards;
      'home.home': HomeHome;
      'home.title-description': HomeTitleDescription;
      'home.visit-us': HomeVisitUs;
      'services.bulleted-list': ServicesBulletedList;
      'services.slide-details': ServicesSlideDetails;
      'services.slide': ServicesSlide;
    }
  }
}
