import app from "./app.js";

app.listen;
const start = async () => {
  await app.listen({ port: 8000 });
  console.log("server started on localhost");
};
start();
