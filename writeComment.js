import { Api } from "telegram";
import { STEAM_LINK } from "./config.js";

export async function writeComment(client, message) {
  try {
    const discussionMessage = await getDiscussionMessage(
      message.peerId,
      message.id
    );

    if (!discussionMessage || !discussionMessage.messages?.length) {
      console.error("No discussion message found.");
      return;
    }

    const commentTo = discussionMessage.messages[0].id;
    console.log("Replying to message ID:", commentTo);

    if (!message.replies?.channelId) {
      console.error("Replies channel ID is missing.");
      return;
    }

    try {
      await client.sendMessage(message.replies.channelId, {
        commentTo,
        message: `xexe, ${STEAM_LINK}`,
      });
      console.log("Comment posted!");
    } catch (sendError) {
      console.error("Error sending comment:", sendError);
    }
  } catch (error) {
    console.error("Error posting comment:", error);
  }

  async function getDiscussionMessage(chatId, messageId) {
    console.log("Fetching discussion message");
    try {
      const response = await client.invoke(
        new Api.messages.GetDiscussionMessage({
          peer: chatId,
          msgId: messageId,
        })
      );
      return response;
    } catch (error) {
      console.error("Error fetching discussion message:", error);
      return null;
    }
  }
}
