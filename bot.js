const Discord = require ('discord.js');
const bot = new Discord.Client();

bot.login('NDIwMzU3NDYyODIzMTQxMzk2.DYADaw.e8i8oXaz1Xgx-nGcKQ4_ftZluBc');

bot.on('message', message => {
let respondeObject = {
    "oi" : "Olá, como vai?",
    "!site" : "www.minecraftmania.com.br",
    "!forum" : "forum.minecraftmania.com.br",
    "!comandos" : "Lista de Comandos:\n \n !site\n !forum\n !ip\n !Seg\n !Ter\n !Qua\n !Qui\n !Sex\n !Sab\n !Dom",
    "!ip" : "jogar.minecraftmania.com.br",
    "!seg" : "Evento de Segunda-Feira:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Labirinto Maniaco\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca",
    "!ter" : "Evento de Terça-Feira:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Labirinto Maniaco\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca",
    "!qua" : "Evento de Quarta-Feira:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Labirinto Maniaco\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca",
    "!qui" : "Evento de Quinta-Feira:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Labirinto Maniaco\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca",
    "!sex" : "Evento de Sexta,-Feira:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Labirinto Maniaco\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca",
    "!sab" : "Evento de Sabado:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Guerra de Clans\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca",
    "!dom" : "Evento de Domingo:\n \n 9:30 >> Corrida Maniaca\n 11:00 >> Corda Bamba\n 15:00 >> Evento VIP (somente vips)\n 17:30 >> Spleff\n 20:00 >> Aventura Maniaca"
};

if(respondeObject[message.content]){
    message.channel.send(respondeObject[message.content]);
}

let role = message.guild.roles.find("name", "Config Geral");
if(message.member.roles.has(role.id) && message.content.startsWith("!limpar")){
    msgDel = 100;
    let numberMessages = parseInt(msgDel);
    message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
}
});
