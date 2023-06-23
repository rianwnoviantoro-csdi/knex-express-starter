import { Path } from "./src/constant/app.js";
import { Credentials } from "./src/constant/database.js";

export default {
  development: {
    client: Credentials.client,
    connection: {
      host: Credentials.host,
      port: Credentials.port,
      user: Credentials.user,
      password: Credentials.password,
      database: Credentials.database,
    },
    migrations: {
      directory: Path.migrations,
    },
    seeds: {
      directory: Path.seeds,
    },
  },
};
