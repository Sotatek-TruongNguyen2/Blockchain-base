'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WebhookProgresSchema extends Schema {
  up () {
    this.create('webhook_progres', (table) => {
      table.increments()
      table.integer('webhook_id').unsigned().notNullable()
      table.integer('ref_id').notNullable()
      table.boolean('is_processed').notNullable().defaultTo(false).index()
      table.integer('try_num').unsigned().notNullable().defaultTo(0)
      table.bigInteger('retry_at').unsigned().notNullable().defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('webhook_progres')
  }
}

module.exports = WebhookProgresSchema
