# Telegram bot for forwarding messages

This is a simple Telegram bot that forwards messages from one channel to another.

## How to use

1. Go to https://my.telegram.org and login with your Telegram account.
2. Go to API Development Tools and fill in the required info to get your API ID and hash.
3. Save the API ID and hash to your environment variables by adding `TELEGRAM_API_ID=<your_api_id>` and `TELEGRAM_API_HASH=<your_api_hash>` to your `.env` file.

4. Install [npm](https://www.npmjs.com/) and [node.js](https://nodejs.org/en/) on your machine.
5. Run `npm install` to install the required packages.

   ```
   npm install
   ```

6. Run `init.js` locally on your machine to get your Telegram string session. You will need to enter your phone number and confirmation code.

   ```
   node init.js
   ```

7. Save the string session to your environment variables by adding `TELEGRAM_STRING_SESSION=<your_string_session>` to your `.env` file.
8. Deploy your bot to Koyeb by clicking on the button below.

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?name=automate-telegram-give&type=git&repository=https%3A%2F%2Fgithub.com%2Festoyse%2Fautomate-telegram-give&branch=main&run_command=node+index.js&instance_type=free&env%5BTELEGRAM_API_HASH%5D=&env%5BTELEGRAM_API_ID%5D=&env%5BTELEGRAM_STRING_SESSION%5D=&env%5BFORWARD_TO_CHANNEL_USERNAME%5D=&env%5BSTEAM_LINK%5D=&env%5BTELEGRAM_USERNAME%5D=)

9. Check the instance type (set to `Free` if necessary).
10. Override the run command (At the Builder section) and set it to `node index.js`.
11. Enter your environment variables in the Koyeb dashboard and click on the "Start" button to start the bot.
