/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('dance-styles', (table) => {
    table.increments('id')
    table.string('name')
    table.boolean('is_active')
    table.string('username')
    table.string('email')
    table.string('password')
    table.string('role')
    table.string('saved_moves')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('dance-styles')
}
