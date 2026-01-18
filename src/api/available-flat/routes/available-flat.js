'use strict';

/**
 * available-flat router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::available-flat.available-flat');
