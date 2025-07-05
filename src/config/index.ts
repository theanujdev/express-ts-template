import dotenv from "dotenv";
import path from "path";
import { Environments } from "./config.enum";

const rawEnv = process.env.NODE_ENV;
const validEnvs = Object.values(Environments) as string[];

const NODE_ENV: Environments = validEnvs.includes(rawEnv as string)
  ? (rawEnv as Environments)
  : Environments.DEVELOPMENT;

dotenv.config({ path: path.resolve(__dirname, `../../.env.${NODE_ENV}`) });

export const config = {
  NODE_ENV,
  IS_DEV: NODE_ENV === Environments.DEVELOPMENT,
  IS_TEST: NODE_ENV === Environments.TEST,
  IS_PROD: NODE_ENV === Environments.PRODUCTION,
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
};
