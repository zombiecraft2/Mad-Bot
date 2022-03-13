import DiscordJS, { Intents, MessageEmbed } from "discord.js";
import dotenv from "dotenv";

dotenv.config();

const client = new DiscordJS.Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log("Red-e !");
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  
  var args = message.content.split(" ");

  if (args[0]) {
    if (args[0] == "Mb!images") {
      if (args[1] == "dance") {
        
      }
    }
  }
});

client.login(process.env.TOKEN);
