'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class WebhookLog extends Model {
  static get table() {
    return 'webhook_logs';
  }
}

module.exports = WebhookLog
