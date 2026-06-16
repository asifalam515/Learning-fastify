import type {
  FastifyInstance,
  FastifyPluginAsync,
  FastifyPluginOptions,
} from "fastify";

const dbPlugin: FastifyPluginAsync = async (
  fastify: FastifyInstance,
  opts: FastifyPluginOptions,
) => {};
