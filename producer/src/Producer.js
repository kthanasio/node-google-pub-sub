
require('dotenv').config();
process.env['GOOGLE_APPLICATION_CREDENTIALS']=process.env.GOOGLE_APPLICATION_CREDENTIALS;

const {PubSub} = require('@google-cloud/pubsub');

const topicName = process.env.GOOGLE_TOPIC_NAME;

const data = JSON.stringify({foo: 'bar'});
const pubSubClient = new PubSub();

async function publishMessage() {
  const dataBuffer = Buffer.from(data);
  const messageId = await pubSubClient.topic(topicName).publish(dataBuffer);
  console.log(`Message ${messageId} published.`);
}
publishMessage().catch(console.error);