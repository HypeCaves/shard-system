const { ShardingManager, EmbedBuilder, WebhookClient } = require('discord.js');
require('dotenv').config(); // ENV içindir. Config için : const config = require('./config.json');

const webhook = new WebhookClient({ url: process.env.WEBHOOK_URL }); // config için: config.WEBHOOK_URL | Shard'ı göndermek için webhook urlsi

const manager = new ShardingManager('./app.js', { // Projenizin Ana Dosyasının İsmine Göre Ayarlayın
    token: process.env.TOKEN, // config için : config.TOKEN | En üste config dosyanızı tanımlamayı unutmayın.
    totalShards: auto, // Botunuz sunuculara göre otomatik olarak shard'ları ayarlar. Tek bir shard için : totalShards: <sayı>,
    shardArgs: process.argv.slice(2),
});

let shardData = {
    starting: [],
    started: [],
};

manager.on('shardCreate', shard => {
    shardData.starting.push(shard.id);

    if (!shardData.startingMessageSent) {
        const shardStartingEmbed = new EmbedBuilder()
            .setTitle('``🔵`` Tüm Shard\'lar Başlatılıyor...')
            .setDescription(`
                Bütün Shardlar Beklemeye Alındı. ${client.user.username}, otomatik olarak sunucu düzenini kontrol ediyor ve kendisini sunuculara göre senkronize ediyor. En iyisi için en iyi performans!`)
            .setColor('#3a5cc2') 
            .setTimestamp()
            .setFooter({ text: `${client.user.username}` });

        webhook.send({
            embeds: [shardStartingEmbed],
        }).catch(console.error);

        shardData.startingMessageSent = true;
    }
});

manager.spawn(manager.totalShards, 10000).then(shards => {
    shards.forEach(shard => {
        shardData.started.push(shard.id);
    });

    const shardStartedEmbed = new EmbedBuilder()
        .setTitle('``🟢`` Tüm Shard\'lar Başlatıldı!')
        .setDescription(`
            Bütün Shardlar Başlatıldı! ${client.user.username}, bütün sunucularla senkronize bir şekilde çalışıyor. Komutlar dağıtıldı, güncel veri sistemleri kontrol edilerek doğrulaması yapıldı.`)
        .setColor('#58e643') 
        .setTimestamp()
        .setFooter({ text: `${client.user.username}` });

    webhook.send({
        embeds: [shardStartedEmbed],
    }).catch(console.error);
}).catch(console.error);

module.exports = shardData;

/* Bu shards.js kodu, Discord Bot projenizi daha verimli ve performanslı çalıştırmak için CodeBlog geliştiricileri
 tarafından kodlanmıştır. Keyifli Kullanımlar dileriz...*/