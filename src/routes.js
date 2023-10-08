import * as GPTController from "./controllers/GPTController.js";

const gptRoutes = (fastify, _, done) => {
  fastify.get("/gpt", GPTController.search);
  done();
};

export default async function Routes({ fastify }) {
  fastify.register(gptRoutes, { prefix: "v1" });
}
