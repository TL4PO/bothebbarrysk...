const Discord = require("discord.js");

const Client = new Discord.Client;

const prefix = "*";

Client.on("ready", () => {
    console.log("bot eppérationnel");
});

Client.on("message", message => {
    if(message.author.bot) return;

    //ajouter
    if(message.content === prefix + "ajouter"){
        const nomdetonembed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**clique <<ICI>> pour m'ajouter a ton serveur 😁**")
        .setURL("https://discord.com/oauth2/authorize?client_id=868176871622332426&scope=bot&permissions=8")
        .setDescription("ajoute moi 😎")
    
    message.channel.send(nomdetonembed) 
    }

    //infos
    if(message.content === prefix + "aide"){
        const nomdetonembed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("ta a fait *aide c'est la bonne commande")
        .setURL("https://www.youtube.com/channel/UCiFvhwLrC_xCiyrOM6dS1Z")
        .setDescription("menu des infos / commandes")
        .addField("*ajouter", "pour ajouter le bot a ton serveur", false)
        .addField("*nitro", "pour avoir un nitro", false)
        .addField("*moi", "pour avoir des infos sur ton compte", false)

        
    message.channel.send(nomdetonembed)
    }
    
    //nitro
    if(message.content === prefix + "nitro"){
        const nomdetonembed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**voila un nitro  😁**")
        .setDescription("https://discord.com/nitro 😎")
    
    message.channel.send(nomdetonembed)   
    }

    //infos
    if(message.content === prefix + "moik"){
        message.channel.send(message.author.username + "   =pseudo    " + message.author.id + "    =id de profil");
    }

    //infosembed
    if(message.content === prefix + "moi"){
        const nomdetonembed = new Discord.MessageEmbed()
        .setColor("#0099ff")
        .setTitle("**quelques infos sur toi ! 😁**")
        .setDescription("ID de profil et pseudo")
        .addField(message.author.username, " =pseudo actuel", false)
        .addField(message.author.id, " =ID de profil", false)

    message.channel.send(nomdetonembed)
    }
    

});

Client.on("message", message => {

});


Client.login("ODY4MTc2ODcxNjIyMzMyNDI2.YPr2uA.LXWXFY10S-RF0aOk5kb7Pb9zm-M");