import app from "./app";
import { config } from "./config";
import logger from "./config/logger";

const startServer = () => {
  const PORT = config.PORT;
  try {
    app.listen(PORT, () => {
      logger.info(`Server listening on port ${PORT}`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      logger.error(error.message);
    } else {
      logger.error("An unknown error occurred while starting the server");
    }
  }
};

startServer();
