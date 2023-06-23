import { Table } from "../../constant/database.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex(Table.role).del();

  await knex(Table.role).insert([
    {
      id: 1,
      name: "Super admin",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 2,
      name: "Admin",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 3,
      name: "User",
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
