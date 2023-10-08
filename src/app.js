import Fastify from "fastify";
import Routes from "./routes.js";

const fastify = Fastify({
  logger: true,
});

Routes({ fastify });

export default fastify;
