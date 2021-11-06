import { createConnection, getConnectionOptions } from "typeorm";

interface OptionsInterface {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as OptionsInterface;
  newOptions.host = "database_foundtec";
  createConnection({
    ...options,
  });
});
