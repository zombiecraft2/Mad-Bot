import DiscordJS, { Intents, MessageEmbed } from "discord.js";
import dotenv from "dotenv";

var Partenaires = [
  "Partenaire1",
  "Partenaire2",
  "Partenaire3"
]
var IsAddingADescription = false;
var IsAddingDescriptionChannel = null;
var IsAddingDescriptionClient = null;

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
    if (args[0] == "Mb!serveurs") {
      message.reply({
        embeds: [
          {
            title: 'Voici nos partenaires !',
            color: "GREEN",
          },
        ],
    });
    }
  }
});

client.login(process.env.TOKEN);
