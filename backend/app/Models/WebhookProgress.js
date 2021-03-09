'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WebhookProgress extends Model {
  static get table() {
    return 'webhook_grogress';
  }
}

module.exports = WebhookProgress
