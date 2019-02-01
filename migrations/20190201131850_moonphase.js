'use strict'

exports.up = function(knex) {
  return knex.schema.createTable('moonphase', (table) => {
    table.increments() // id
    table.string('phase').notNullable()
    table.string('title').notNullable()
    table.text('description').notNullable()
    table.text('symptomatic_experience').notNullable()
    table.text('mindful_ways').notNullable()
    table.boolean("is_favorite").notNullable().defaultTo(false)
    table.timestamps(true, true)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('moonphase')
}
