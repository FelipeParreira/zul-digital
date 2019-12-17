const axios = require('axios');

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getTweets(
  mainURL = process.env.TWEETS_API_URL,
  APIVersion = process.env.TWEETS_API_VERSION,
  tokenPostfix = process.env.TWEETS_API_TOKEN_POSTFIX,
  tweetsPostfix = process.env.TWEETS_API_TWEETS_POSTFIX,
) {
  while (true) {
    try {
      const tokenURL = [mainURL, APIVersion, tokenPostfix].join('/');
      const { data: { token } } = await axios.post(tokenURL);


      const tweetsURL = [mainURL, APIVersion, tweetsPostfix].join('/');
      const { data: tweets } = await axios(
        {
          method: 'get',
          url: tweetsURL,
          headers: { Authorization: token },
        },
      );
      return tweets;
    } catch (Exception) {
      console.error('Error: ', Exception);
      await sleep(2000);
    }
  }
}

function breakTextIntoSections(text, maxLength = 45) {
  const words = text.split(/\s+/);
  const sections = [];
  let section = words[0];

  for (let i = 1; i < words.length; i += 1) {
    const word = words[i];

    if (section.length + word.length < maxLength) {
      section += ` ${word}`;
    } else {
      sections.push(section);
      section = word;
    }
  }

  if (section) sections.push(section);

  return sections;
}

async function main() {
  const tweets = await getTweets();

  const randomIndex = Math.floor(Math.random() * tweets.length);
  const { text } = tweets[randomIndex];
  const miniTweets = breakTextIntoSections(text);

  for (let i = 0; i < miniTweets.length; i += 1) {
    const miniTweet = miniTweets[i];
    console.log(`Tweet #${i + 1}: ${miniTweet}`);
  }
}


module.exports = {
  breakTextIntoSections,
  main,
};
