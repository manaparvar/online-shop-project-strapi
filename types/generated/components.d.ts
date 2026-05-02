import type { Schema, Struct } from '@strapi/strapi';

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
      'organisms.product-specifications': OrganismsProductSpecifications;
    }
  }
}
