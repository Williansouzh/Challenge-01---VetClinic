import { App } from "./server";
import config from "config";

(async (): Promise<void> => {
  const server = new App();
  await server.init();
  server.start();
})();
