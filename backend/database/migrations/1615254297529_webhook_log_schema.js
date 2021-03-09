'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WebhookLogSchema extends Schema {
  up () {
    this.create('webhook_logs', (table) => {
      table.increments()
      table.integer('webhook_progress_id').unsigned().notNullable()
      table.string('url').notNullable()
      table.text('params').notNullable()
      table.integer('status').unsigned().notNullable()
      table.text('msg').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('webhook_logs')
  }
}

module.exports = WebhookLogSchema
