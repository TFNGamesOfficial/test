const Discord = require("discord.js");
const axios = require("axios").default
const chalk = require("chalk");
const fs = require("fs");

module.exports.run = async (client, interaction) => {
    const req = await axios.get("https://fortniteapi.io/v1/achievements", {
        params : {
            lang : "en"
        },
        headers : {
            Authorization : process.env.FNAPIIO
        }
    })
    .catch(console.error)
    if(!req) return interaction.reply({content : "An error occured, please try later :)"})
    req = req.data
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Current Achievments`)
    .setDescription(`All achievments for season ${element.season}`)
        if(element.internalId.includes("quest")){
            embed.addField(`${element.name}`, `${element.description}`)
        }

    interaction.reply({embeds : [embed]})
};