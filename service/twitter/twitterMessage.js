import twitter from 'twitter'

const client = new twitter({
  consumer_key: config.twitter.consumerKey,
  consumer_secret: config.twitter.consumerSecret,
  access_token_key: config.twitter.accessTokenKey,
  access_token_secret: config.twitter.accessTokenSecret
});

const data = require('fs').readFileSync('./image.jpg'); //投稿する画像
const mes = 'Hey Hey Hey'; //投稿するメッセージ


export default async (_config) => {

  const config = {
    consumer_key,
    consumer_secret,
    access_token_key,
    access_token_secret
  } = _config

  const client = new twitter(config);

  //Twitterに投稿
  const status = {
    status: mes,
  }
  await client.post('statuses/update', status);
};
