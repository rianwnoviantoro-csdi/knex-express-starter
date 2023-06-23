import bcrypt from "bcrypt";

import { Table } from "../../constant/database.js";

export async function seed(knex) {
  // Deletes ALL existing entries
  await knex(Table.user).del();

  await knex(Table.user).insert([
    {
      id: 1,
      name: "Super admin",
      email: "super.admin@raport.com",
      password: await bcrypt.hash("Password!23", 10),
      role_id: 1,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 2,
      name: "Admin",
      email: "admin@raport.com",
      password: await bcrypt.hash("Password!23", 10),
      role_id: 2,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
    {
      id: 3,
      name: "User",
      email: "user@raport.com",
      password: await bcrypt.hash("Password!23", 10),
      role_id: 3,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    },
  ]);
}
