import "dotenv/config";
import fastify from "./src/app.js";

try {
  const port = parseInt(process.env.PORT, 10) || 7777;
  await fastify.listen({ port });
} catch (err) {
  throw err;
}
