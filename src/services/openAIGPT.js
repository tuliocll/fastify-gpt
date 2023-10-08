import OpenAI from "openai";

export const searchGPT = async (question) => {
  const openai = new OpenAI();

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: question }],
    model: "gpt-3.5-turbo",
  });

  return chatCompletion.choices[0].message.content;
};
