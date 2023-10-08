import { searchGPT } from "../services/openAIGPT.js";

export const search = async (request) => {
  const { question } = request.query;

  if (!question) {
    return { message: "invalid" };
  }

  const message = await searchGPT(question);
  return { message };
};
