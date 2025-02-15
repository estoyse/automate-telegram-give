import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import {
  FORWARD_TO_CHANNEL_USERNAME,
  TELEGRAM_API_HASH,
  TELEGRAM_API_ID,
  TELEGRAM_STRING_SESSION,
} from "./config.js";
import { NewMessage } from "telegram/events/index.js";

const apiId = +TELEGRAM_API_ID;
const apiHash = TELEGRAM_API_HASH;
const stringSession = new StringSession(TELEGRAM_STRING_SESSION); // fill this later with the value from session.save()
const client = new TelegramClient(stringSession, apiId, apiHash, {
  connectionRetries: 5,
});

(async () => {
  await client.start();
  client.addEventHandler(handleMessage, new NewMessage({}));
})();

async function handleMessage(event) {
  const { message } = event;

  if (event.isChannel && message.peerId.channelId.value === -1002405233783n) {
    await client.forwardMessages(FORWARD_TO_CHANNEL_USERNAME, {
      messages: message.id, // Can be an array of IDs
      fromPeer: message.peerId.channelId, // Source chat
    });
  }
}
