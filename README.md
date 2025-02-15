# Telegram bot for forwarding messages

This is a simple Telegram bot that forwards messages from one channel to another.

## How to use

1. Go to https://my.telegram.org and login with your Telegram account.
2. Go to API Development Tools and fill in the required info to get your API ID and hash.
3. Save the API ID and hash to your environment variables by adding `TELEGRAM_API_ID=<your_api_id>` and `TELEGRAM_API_HASH=<your_api_hash>` to your `.env` file.
4. Run `init.js` locally on your machine to get your Telegram string session. You will need to enter your phone number and confirmation code.
5. Install [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/en/) on your machine.
6. Run `npm install` and `node init.js` to get your Telegram string session.

   ```
   npm install
   ```

   ```
   node init.js
   ```

7. Save the string session to your environment variables by adding `TELEGRAM_STRING_SESSION=<your_string_session>` to your `.env` file.
8. Deploy your bot to Koyeb by following the [deployment guide](https://www.koyeb.com/docs/introduction/getting-started).

## You can deploy using this button:

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&builder=buildpack&repository=github.com/koyeb/example-nestjs&branch=main&name=nestjs-on-koyeb)
