import type { Schema, Struct } from '@strapi/strapi';

export interface FlatsAmenity extends Struct.ComponentSchema {
  collectionName: 'components_flats_amenities';
  info: {
    displayName: 'Amenity';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface FlatsFlatCard extends Struct.ComponentSchema {
  collectionName: 'components_flats_flat_cards';
  info: {
    displayName: 'Flat Card';
  };
  attributes: {
    amenities: Schema.Attribute.Component<'flats.amenity', true>;
    cover: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    priceMonthly: Schema.Attribute.Decimal;
    rentCondition: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAvailableFlats extends Struct.ComponentSchema {
  collectionName: 'components_sections_available_flats';
  info: {
    displayName: 'Available Flats';
  };
  attributes: {
    description: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'flats.flat-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedHeader extends Struct.ComponentSchema {
  collectionName: 'components_shared_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'flats.amenity': FlatsAmenity;
      'flats.flat-card': FlatsFlatCard;
      'sections.available-flats': SectionsAvailableFlats;
      'shared.header': SharedHeader;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
