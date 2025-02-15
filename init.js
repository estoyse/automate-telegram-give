import { TelegramClient } from "telegram";
import { StringSession } from "telegram/sessions/index.js";
import { text } from "input";
import {
  TELEGRAM_API_HASH,
  TELEGRAM_API_ID,
  TELEGRAM_STRING_SESSION,
} from "./config.js";

const apiId = +TELEGRAM_API_ID;
const apiHash = TELEGRAM_API_HASH;
const stringSession = new StringSession(TELEGRAM_STRING_SESSION);

(async () => {
  const client = new TelegramClient(stringSession, apiId, apiHash, {
    connectionRetries: 5,
  });
  await client.start({
    phoneNumber: async () => await text("Please enter your number: "),
    password: async () => await text("Please enter your password: "),
    phoneCode: async () => await text("Please enter the code you received: "),
    onError: err => console.log(err),
  });
  console.log(
    "Your Telegram string session is: ",
    client.session.save(),
    "\nPlease, save this session!"
  );
  await client.sendMessage("me", { message: "Successfully Connected!" });
})();
