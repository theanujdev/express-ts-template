import { config } from "dotenv";

config();

const { PORT, NODE_ENV } = process.env;

export const Config = {
  PORT: PORT || 5000,
  NODE_ENV: NODE_ENV || "development",
};
