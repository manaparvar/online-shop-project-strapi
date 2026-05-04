import type { Schema, Struct } from '@strapi/strapi';

export interface OrganismsProductColor extends Struct.ComponentSchema {
  collectionName: 'components_organisms_product_colors';
  info: {
    displayName: 'ProductColor';
    icon: 'paint';
  };
  attributes: {
    color: Schema.Attribute.Relation<'oneToOne', 'api::color.color'>;
    Image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface OrganismsProductSpecifications extends Struct.ComponentSchema {
  collectionName: 'components_organisms_product_specifications';
  info: {
    displayName: 'product-specifications';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'organisms.product-color': OrganismsProductColor;
      'organisms.product-specifications': OrganismsProductSpecifications;
    }
  }
}
