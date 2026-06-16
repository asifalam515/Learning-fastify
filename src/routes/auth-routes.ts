import type {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyReply,
  FastifyRequest,
} from "fastify";
import { registerSchema } from "../validation/auth-validation.js";
export const authRoutes = async (
  app: FastifyInstance,
  options: FastifyPluginOptions,
) => {
  app.post(
    "/register",
    {
      schema: {
        body: registerSchema,
      },
    },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return reply.send({ message: "register route" });
    },
  );
};
