import { Table } from "../../constant/database.js";

export function up(knex) {
  return knex.schema.createTable(Table.user, (table) => {
    table.increments("id").primary();
    table.string("name");
    table.string("email").unique();
    table.string("password");
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable(Table.user);
}
