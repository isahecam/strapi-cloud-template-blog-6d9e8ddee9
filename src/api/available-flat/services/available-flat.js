'use strict';

/**
 * available-flat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::available-flat.available-flat');
