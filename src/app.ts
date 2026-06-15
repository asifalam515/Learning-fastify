import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import fastify from "fastify";

const jwtSecret = process.env.JWT_SECRET ?? "supersecret";

const app = fastify({
  logger: true,
});
app.register(cors);
app.register(helmet);
app.register(jwt, { secret: jwtSecret });

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

export default app;
