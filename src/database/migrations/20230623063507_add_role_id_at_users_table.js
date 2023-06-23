import { Table } from "../../constant/database.js";

export function up(knex) {
  return knex.schema.alterTable(Table.user, (table) => {
    table.integer("role_id").references("id").inTable(Table.role);
  });
}

export function down(knex) {
  return knex.schema.dropTable(Table.user);
}
