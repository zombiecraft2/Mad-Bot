import DiscordJS, { Intents, MessageEmbed } from "discord.js";
import dotenv from "dotenv";

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

  if (IsAddingADescription == true) {
    if (message.author.id == IsAddingDescriptionClient) {
      if (message.channel == IsAddingDescriptionChannel) {
        IsAddingADescription = false;

        message.channel.send({
          embeds: [
            {
              description: "Your party has been created succesfully !",
              color: "LUMINOUS_VIVID_PINK",
            },
          ],
        });
      }
    }
  }

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

      message.channel.send({
        embeds: [
          {
            description: "Add a description so it more specific !",
            color: "LUMINOUS_VIVID_PINK",
          },
        ],
      });
      var lastBotMsg = message.channel.lastMessage;

      IsAddingDescriptionChannel = message.channel;
      IsAddingDescriptionClient = message.author.id;
      IsAddingADescription = true;

      function DestroyMessageIfNoDescription() {
        if (IsAddingADescription) {
          IsAddingADescription = false;

          lastBotMsg.reply({
            embeds: [
              {
                description: "Message expired !",
                color: "DARK_RED",
              },
            ],
          });
        }
      }

      setTimeout(DestroyMessageIfNoDescription, 20000);
    }
  }
});

client.login(process.env.TOKEN);
