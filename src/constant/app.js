import "dotenv/config";

import path from "path";
import { fileURLToPath } from "url";

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

export const App = {
  env: process.env.APP_NODE_ENV || "development",
  host: process.env.APP_HOST || "localhost",
  port: process.env.APP_PORT || 3000,
};

export const Path = {
  migrations: path.join(__dirname, "..", "database", "migrations"),
  seeds: path.join(__dirname, "..", "database", "seeds"),
};
