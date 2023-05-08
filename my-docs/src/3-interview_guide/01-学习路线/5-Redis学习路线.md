# 05、Redis学习路线


**原文链接：**[Redis 可以按这个学](https://mp.weixin.qq.com/s/WSWm4Yb4IAcGUmKnQ-UsSg)

哈喽，大家好，我是厨子。

昨天收到了一位学弟的私信，想让我写一下 Redis 的学习路线，因为他之前从来没有接触过 Redis ，甚至都没有听过。但是 Redis 是秋招面试重点，想问一下应该如何学习。

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221447875.png" style="zoom:25%;" />

确实，在校招生中，Redis 是面试重点，是必须要学的！

但是校招生在平时的课程学习中，接触不到 Redis。

今天这篇文章就给大家说一下，厨子当时是如何学习 Redis 的

### 书籍

我看的 Redis 的第一本书籍《Redis 设计与实现》

![](https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448388.png "")

这本书是黄建宏老师编写，2014年出版，虽然到现在已经 8 年了，仍能被称为最好的 Redis 学习书籍之一，可以做为入门 Redis 的第一本书。

即使你之前完全没有接触过 Redis，这本书也完全可以看懂，当时我是用了一天的时间，看完了第一遍。并制作了思维导图，这本书我来回看了 4-5遍，每次都会有一些新收获。

一些常考的面试考点，在这本书里都有详细解释。

比如经常考的数据结构（6种底层数据结构，5种数据表现形式，SDS与C字符串的区别等），在这本书的第一章就进行了详细描述。

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448586.png" style="zoom: 50%;" />

最最常考的持久化，在这本书中也同样能够找到答案，建议这一块多看几遍。

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448808.png" style="zoom:50%;" />

Redis 集群方案和缓存等考点，在这本书里也有详细描述，可以说吃透这本书，秋招时， Redis 不会成为你的阻碍。另外提一句，黄老师新翻译了一本书《Redis实战》，但是这本书我还没有进行阅读，有读过的小伙伴可以在评论区说一下读后感呀。

另外给大家推荐一下黄老师的Redis 学习网站 `www.RedisBook.com` 可以在这里提出自己学习上的疑问和分享自己的学习心得。

![](https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448049.png "")

学习时，理论和实践结合，才能让我们学习起来，事半功倍。在这里给大家推荐两个，我学习时的实践视频。

### 视频

我主要是看了这两个视频，收获很大，

第一个视频，总时长 11 个小时，从常用命令，各种数据类型介绍到Java 操作Redis都有详细介绍，学习时，跟着敲就完事啦。

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448079.png" style="zoom:25%;" />

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448308.png" style="zoom:25%;" />

可以根据自身需求选择性观看。

第二个视频为实战视频，总时长为 15 个小时，如果时间足够话，可以完全跟下来。该视频多是一些实践操作，比如使用 SpringBoot 操作 Redis，实现分布式缓存等，为项目作准备。

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448050.png" style="zoom:25%;" />



<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221448056.png" style="zoom:25%;" />



另外如果你的秋招项目中能够用到 Redis 那就再好不过了，这样你就有了实际开发经验，因为我当时其中一个项目为秒杀项目，多次用到了分布式缓存和本地缓存，所以这个项目也让我对 Redis 有了进一步学习。

Redis 源码的学习也是挺有必要的（不用焦虑，如果时间没有那么充足可以先不看）但是看源码不要自己胡乱看，可以结合一些文章进行阅读。

不然弄懂一些文件是干啥的就费老大劲了，哈哈。

大家可以使用下面的网站和仓库来进行源码的阅读，

`[https://blog.huangz.me/diary/2014/how-to-read-redis-source-code.html](https://blog.huangz.me/diary/2014/how-to-read-redis-source-code.html)`（如何阅读Redis源码）

`[https://redis.io/](https://redis.io/)`（Redis 官方文档）

仓库

`[https://github.com/redis/redis](https://github.com/redis/redis)`

`[https://github.com/huangz1990/redis-3.0-annotated](https://github.com/huangz1990/redis-3.0-annotated)`

好啦，希望这篇文章，能够对有同样问题的学弟学妹有一丢丢帮助，拜了个拜。

