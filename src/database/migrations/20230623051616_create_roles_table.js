import { Table } from "../../constant/database.js";

export function up(knex) {
  return knex.schema.createTable(Table.role, (table) => {
    table.increments("id").primary();
    table.string("name").unique();
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable(Table.role);
}
