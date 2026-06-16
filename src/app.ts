import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import jwt from "@fastify/jwt";
import fastify from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";
import {
  serializerCompiler,
  validatorCompiler,
} from "fastify-type-provider-zod";
import { authRoutes } from "./routes/auth-routes.js";

const jwtSecret = process.env.JWT_SECRET ?? "supersecret";

const app = fastify({
  logger: true,
}).withTypeProvider<ZodTypeProvider>();
app.register(cors);
app.register(helmet);
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(jwt, { secret: jwtSecret });
app.register(authRoutes, { prefix: "/api/auth" });

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.setErrorHandler(function (error, request, reply) {
  if ("validation" in error && Array.isArray((error as any).validation)) {
    const validationErrors = (error as any).validation;
    const errors = validationErrors.map((err: any) => {
      return {
        message: err.message,
      };
    });
    return reply.status(400).send({ errors });
  }
  throw error;
});
export default app;
