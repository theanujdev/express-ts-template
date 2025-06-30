import { config } from "dotenv";

if (process.env.NODE_ENV !== "production") {
  config();
}

export const Config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: Number(process.env.PORT) || 5000,
};
