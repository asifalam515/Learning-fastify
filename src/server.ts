import app from "./app.js";
import Env from "./utils/env.js";

app.listen;
const start = async () => {
  await app.listen({ port: Env.PORT });
  console.log(
    `${Env.APP_NAME} v${Env.APP_VERSION} is running on port ${Env.PORT}`,
  ); // Log the app name, version, and port
};
start();
