'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WebhookSchema extends Schema {
  up () {
    this.create('webhooks', (table) => {
      table.increments()
      table.string('contract_name').notNullable().index()
      table.string('type').notNullable().index()
      table.string('url').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('webhooks')
  }
}

module.exports = WebhookSchema
