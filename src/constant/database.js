import "dotenv/config";

export const Credentials = {
  client: process.env.DB_CLIENT || "pg",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "raport_knex",
};

export const Table = {
  user: "users",
  role: "roles",
};
