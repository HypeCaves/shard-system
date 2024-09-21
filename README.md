# Shard Sistemi Hakkında

Bu shard sistemi CodeBlog geliştiricileri tarafından discord bot projenizde kullanmanız için özenle kodlanmıştır. Bu projeyi dilediğiniz şekilde yapılandırarak kullanabilirsiniz. 

# Kurulum

Sharding sistemini kurmak oldukça basittir. Sadece aşağıdaki adımları takip ederek shard sistemini projenize entegre edebilirsiniz:

1. Bu projede yer alan  ``shards.js`` dosyasını kendi bot projenize ekleyin.
2. ``shards.js`` içindeki gerekli alanları botunuzun gereksinimlerine göre düzenleyin. Örneğin: TOKEN ve WEBHOOK_URL gibi.
3. Botun shard bilgilerini gönderebilmesi için bir webhook URL'sine ihtiyacınız olacak. Bunun için projenizin kök dizinine bir ``.env`` dosyası ekleyin (eğer yoksa) ve aşağıdaki iki değişkeni bu dosyada tanımlayın:

```js
WEBHOOK_URL=
TOKEN=
```

4. Tüm bu adımları tamamladıktan sonra botunuzu başlattığınızda sharding sistemi aktif hale gelecektir.

# Sharding Nedir?

- Sharding, botun tüm Discord sunucularını ve kullanıcıları tek bir işlemde yönetmesi yerine, birden fazla shard (parçaya) bölerek her bir shard'ın belirli bir sunucu ve kullanıcı grubunu yönetmesine olanak sağlar. Bu, botun performansını artırırken API limitlerine çarpmadan daha büyük bir kullanıcı tabanına hizmet vermesine olanak tanır.

Shard sistemi, özellikle büyük Discord botlarının performansını ve verimliliğini artırmak için kullanılan bir yapılandırma modelidir. Discord botlarının bir sunucudaki tüm kullanıcılar ve sunucularla olan bağlantıları, ölçeklendikçe büyük miktarda kaynak gerektirir. Sharding, bu kaynak kullanımını optimize etmek ve daha büyük sunucu gruplarını yönetmek için botun bağlantılarını parçalara ayırarak (shard'lar) çalıştırma yöntemidir.

# Nasıl Çalışır?

Her shard, Discord'un API'sine ayrı birer WebSocket bağlantısı açar ve belirli sayıda sunucuyu yönetir.

Her shard, Discord API'sine kendi sınırlı veri kümesini alıp göndermeye çalışır, bu da genel olarak sunucu yükünü dağıtır.

Botun bağlantı yükünü ve API kullanımını optimize eder. Böylece daha fazla sunucuda daha iyi performansla çalışır.

Örneğin: Eğer botun 10.000 sunucuda bulunuyorsa, bunu 2 shard'a bölersen, her shard 5.000 sunucuya hizmet verir.

# Shard Sayısını Nasıl Belirlerim?

Botunun shard sayısını belirlemek, toplam sunucu sayısına ve botunun performans gereksinimlerine bağlıdır. Shard sayısını belirlerken, Discord API oranlarını ve botun hangi bölgelerde kullanıldığını göz önünde bulundurmalısın. Eğer emin değilsen, Discord.js’in ``auto`` seçeneğini kullanarak Discord’un API limitlerine göre otomatik shard sayısı ayarlamasını sağlayabilirsin.

Yani eğer belirli bir shard kullanmak istersen `shards.js` dosyasındaki **totalShards** bölümünü bu şekilde istediğin miktarı yazarak ayarlayabilirsin. >>  ``totalShards: 5,`` | Eğerki bunu botunun otomatik olarak senkronize etmesini istiyorsan rakam yerine sadece ``auto`` yazman yeterli olacaktır.

# İLETİŞİM

## Geliştirici
[![Discord Hype](https://img.shields.io/badge/Discord-HypeCaves-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/users/1198654893758623755)

## Sunucu
[![Discord Banner](https://api.weblutions.com/discord/invite/codeblog/)](https://discord.gg/codeblog)
