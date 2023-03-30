const {Configuration, OpenAIApi} = require('openai');

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

exports.find_complexity = async function ({prompt}) {

    return await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `
              ${prompt}
      
              The time complexity of this function is
              ###
            `,
        max_tokens: 64,
        temperature: 0,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["\n"],
    });
};

exports.grammar_correction = async function ({prompt}) {

    return await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `Correct this to standard English:
        
        ${prompt}`,

        temperature: 0,
        max_tokens: 60,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0
    });
};