import "dotenv/config";
class Env {
  static APP_NAME = process.env.APP_NAME || "Fastify Learn";
  static APP_VERSION = process.env.APP_VERSION || "1.0.0";
  static PORT = process.env.PORT || 9000;
  static JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret_key";
  static DATABASE_URL =
    process.env.DATABASE_URL ||
    "postgresql://postgres:1234@localhost:5432/fastify_learn_db?schema=public";
}
export default Env;
