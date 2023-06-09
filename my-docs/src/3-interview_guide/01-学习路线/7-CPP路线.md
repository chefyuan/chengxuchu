# 07、CPP 学习路线



这篇文章时我请我朋友为大家写的，这个老哥贼牛批，希望这篇文章对大家有一丢丢帮助。

原文链接：[这位非科班出身的读者好猛](https://mp.weixin.qq.com/s/tg3bScr1C_7c4WUHskZQJA)

### 背景

某中上 985 传统工科本硕，本科期间只上过大学生程序设计和微机原理两门计算机相关的公共基础课，研一开始准备转行，恰好研一暑假因为疫情无法返校，遂背着老师投递了华为中央软件院的暑期实习（非应届投递暑期实习是有风险的），华为对计算机基础要求比较低，对学历背景较好的非科班同学比较友好。研二暑假通过了百度，字节，阿里，腾讯，美团，携程的后端开发岗实习，去了阿里淘系实习，秋招目前收获阿里，字节，拼多多，美团，网易意向书，腾讯，华为，米哈游录用排序中。在春秋招的面试基本没有挂过。

### 基础知识

**基础知识是非科班和科班区别很大的一部分**。科班有一整套系统的计算机学科培养体系。我在准备基础的时候是按照考研课程进行系统学习的。考研的基础课程能让你很大程度地接近科班学生的基础。推荐 b 站的王道考研课程，可以二倍速快速过一遍，配合讲义标注一些重点，日后可以反复观看。这些基础不仅能方便日后学习编程语言和扩展知识时的理解，在秋招面试中也经常会涉及。

**这里重点提一下算法** 算法和数据结构课程中涉及的知识都是非常基础的，一定要熟稔于心。在这个基础上可以刷 leetcode 题来提升自己的能力。通常刚开始刷会有一些曲折，比如遇到的题经常不会，然后一道题写大半天。我一般遇到不会的题超过 10 分钟没思路就会看题解，然后按题解的思路再尝试自己写出来。如果实在写不出来就照着题解自己敲一遍，仔细领会每一句代码的意图。然后再做标记，第二天或者过几天我会再尝试自己写一遍。重复几遍就会了，这样至少能保证你刷到过的题你都能掌握。刷题顺序的话，推荐按分类刷。我个人用的大力出奇迹，直接按题号顺序刷，但是一开始刷的会有点吃力。另外的话可以刷一刷每日一题和周赛。春招前我大概刷了 600+的题，周赛全国排名 3000+。

<img src="https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304221449310.png" style="zoom: 50%;" />

### 编程语言

C++和 C 语言其实很像。上述算法与数据结构课程的或者说理工科学校应该都会有的程序设计类的基础课都会教一些 C 语言的基础。在这些基础上，看下列书应该就足够了。下面的书我基本上都看过一遍或者挑章节看过，受益匪浅。当然，语言还是要多用多写，可以通过刷题和项目来反复巩固和记忆。

### 书籍推荐

《C++primier》第五版，比较厚，但是很全面，可以慢慢看

《STL 源码剖析》，可以配合 b 站侯捷的视频一起食用，讲得非常好。

《深入理解 C++对象模型》，看前几章应该就够了

《Effective C++》，个人感觉书上的知识点有些陈旧

《Modern Effective C++》，有 C++11 新特性

《C++并发编程实战》，学习并发的基础知识就够了，书在实现上用的 C++11 多线程，但在实际的开发中使用的大多是 posix 多线程。

### C++岗位的选择

C++的岗位相比与 java 会相对少一些的。java 拥有更好的生态，使得它在业务开发上可以更灵活和方便，不过校招一般不会对语言做限制。如果大家在秋招中想继续从事 c++相关的开发，那可以留意一下以下 C++岗位。可以去看看官网对应的 JD，然后对自己感兴趣的岗位做针对性的查漏补缺：

游戏服务端和客户端：网易互娱和雷火、米哈游、腾讯 IEG

推荐和搜索引擎：阿里和 pdd 两家 java 为主的大厂，在这块用的都是 C++

机器人、自动驾驶开发：无人驾驶企业，华为车 BU

音视频流开发，比如 B 站

用 C++比较多的互联网企业：腾讯和百度

### 扩展知识

这个部分我就介绍以下自己看得一些视频和书，给大家做参考。

### linux

linux 是后端开发工程师必知必会的操作系统，而且要对底层原理有详细的了解。

《深入理解 Linux 内核》可以结合操作系统课程对照着来看，有些部分在实际实现上和操作系统课程所讲的有些出入。

《UNIX 环境高级编程》 堪称圣经的 APUE，介绍的是 unix 系统的基本原理和系统调用，可以说是必看。觉得书太厚了看不下的推荐一个 B 站的[课程](https://b23.tv/YjZyNv)，讲得非常好，可以跳过前面数据结构的部分直接看后面的。

《UNIX 网络编程》介绍了 UNIX 网络方面的原理和调用方法，是对 APUE 的扩充。如果这本书看不下去的可以直接看下面这本。

《Linux 多线程服务端编程:使用 muduo C++网络库》介绍了如何使用 C++开发高性能服务器，这本书个人认为写的非常好，我也是照着这本书写了自己的服务器的项目。

man 手册，可以直接在命令行查看系统调用的使用方法

### 数据库

数据库基本原理，B 站有很多类似的课程，我看的是东南大学的数据库原理及应用

《Mysql 必知必会》，讲 mysql 的用法，也可以去看 B 站狂神的视频

《MySQL 技术内幕 InnoDB 存储引擎》这本书写得非常不错，有很多面试常见的知识点

### Nosql

《Redis 设计与实现》介绍了 redis 的源码设计，redis 有很多设计非常巧妙的数据结构，以及它在时间和空间上的高性能是怎么做的。总之里面有很多让人印象深刻的点。另外 redis 本身是用 c 语言写的，所以感兴趣的话还可以直接去看源码。

b 站狂神讲 redis 使用讲的也挺好的

### GCC+GDB

这部分都是 C++开发和调试的辅助工具，有些面试比较喜欢问这个，b 站也有类似视频，都大同小异，我这部分准备地也不好

常见编译选项

GDB 原理

GDB 常用命令

线上进程如何调试

### 设计模式

常见的设计模式用途和优缺点

b 站上有设计模式的课程，我看的是[李建忠的课程](https://b23.tv/OyZBky)，感觉讲得挺好的

### 分布式系统设计

这部分知道 CAP/BASE 是啥应该就够了，我看了一遍[这个](https://b23.tv/OyZBky)，感觉和没看一样哈哈

### Docker

这部分的话只是自己感兴趣所以看的，面试一般不会问

b 站狂神的 docker 教程教你如何使用 docker

《自己动手写 docker》教你如何实现一个 docker，以及 docker 底层的原理。docker 是用 go 写的，还可以顺带学一下 go，照着敲一遍最后写出来还是蛮有成就感的。

### 关于项目

C++一般都是用来造轮子，所以在项目上大多都是偏底层的一些工具。和 java 选手对比起来，在面试中会吃亏一些，java 选手对高并发，实际的业务场景中的问题和解决方法会有更深刻的认识。下面举一些常见的项目：

- **网络库/web 服务器**：基本 C++的人手一个，牛客也有卖类似的课程，我也是参考 muduo 写的。这个的话最好测一测 QPS 来体现那能达到的效果
- **数据库**：写一个简易数据库，这个部分可以看 MIT 的数据库课程，里面的作业就是写一个数据库。除此之外，前面提到 redis 就是用 C 写的，所以也可以用 C++写一个类似的简易版非关系型数据库。
- **tinySTL**：实现 STL 常用的容器和函数，能够对底层数据结构有更清晰的认识。
- **rp**c：rpc 是分布式系统中最重要的一环，可以参考 Dubbo 和 grpc 实现一个简易 RPC
- **flamingo**：如果时间充裕的话，推荐这个，写一个类似 QQ 的软件。github 上搜一下就有，感觉比较牛逼，而且资料和教程都很全。

### 关于笔试

- 笔试通常都是**ACM 模式，需要自己处理输入和输出**，对 C++其实不太友好

- 输入的处理，**未给定行数的情况**，不知道行数，可以用

  ```C++
  string s;
  while(cin>>s) {
    ...
  }//可以读到EOF
  ```

- ### **万能头文件**

```C++
#include<bits/stdc++.h>//包含了所有常用的头文件
//牛客和赛马都能用，有些编译器不支持
```


- **学点 python**，前面提到，笔试对 C++其实不太友好，比如笔试经常会用到字符分割，字符串和数字转换，C++可能要写 for 分割，用 atoi 或者 to_string 做转换，用 python 就会很方便。再比如一些大数相加，用 C++只能用字符串或者链表来做加法，python 就不用考虑溢出
- **选择合适的数据结构**，比如之前的笔试题：如果按题目的意图，可能你要建立链表节点的结构，然后针对输入去解析数字，构建链表，写翻转链表的函数，再遍历链表输出。但实际上，这题只需要用字符串就可以，对整个输入的字符串做 reverse，再针对每一个数进行一次 reverse 就可以了。
- **取巧**，对于一些输出 true/false 或者数字的题，实在写不出来，随便打印一个答案可能就能拿几十分。

```C++
//翻转链表
//输入：1,23,456,78
//输出：78,456,23,1
```


- **其他一些辅助手段**
  一些 ACM 选手喜欢加一些这样的操作提高码字速度和 IO 速度，但个人感觉对于一般的笔试而言，提升效果有限。

```C++
//1、cin的效率不如scanf，cin会有缓冲区。可以参考ACM比赛时用到的优化方法
//2、用宏定义，比如#define pair<int, int> PII，这样每次敲定义的时候只要敲PII就够了

#include <bits/stdc++.h>
using namespace std;
//#define ACM_LOCAL
#define fi first
#define se second
#define il inline
#define re register
const int N = 1e5 + 10;
const int M = 5e5 + 10;
const int INF = 0x3f3f3f3f;
const double eps = 1e-5;
const int MOD = 1e9;
typedef long long ll;
typedef pair<int, int> PII;
typedef unsigned long long ull;
int main() {
  ios::sync_with_stdio(0);
  cin.tie(0);
  cout.tie(0);
  //solve
}
```


### 关于面试

- **面经非常重要**，面试中一半的问题都可以在牛客面经中找到。因此可以找牛客上相关高质量的面经自己做整理然后过一遍。
- 面试一般分为**基础知识**和**项目经历**两部分，如果项目经历比较少就会着重问基础，如果面试官对项目经历感兴趣可能全部都会问项目。
- 项目上每一个点，都要问自己：**除了这样做还能怎么做，你为什么选择这样做，这样做的优点是什么，以及这样做的底层是怎么实现的**。比如我做的网络库，最常见的问题：select，poll，epoll 优缺点，选择的原因，底层原理。当你回答完之后，再往下挖，可能就会问 epoll 为什么用红黑树，红黑树的底层原理和优缺点。知识点要学会发散。比如问完红黑树，面试官可能会问你其他的树和数据结构，比如 avl 树和红黑树的区别，红黑树和快表的区别。再发散问，可能问 redis 为什么用快表不用红黑树。总之，在准备面试时也要**学会发散地思考**。
- 很多时候，面试官可能不了解 C++，或者说投递的岗位不是用的 C++，所以面试官不会问很多 C++的知识，而是会问一些操作系统或者网络或者数据库等通用的知识，因此这些**通用的基础知识一定要扎实**，否则怎么能比得过那些语言对口的竞争者呢
- **掌握主动权**，面试官的问题很多都是从你的角度来问的，比如你的简历提到了 xxx，那么你讲一下 xxx 吧。再比如，你刚刚回答里面提到了 xxx，那么你讲一下 xxx。所以，自己是能够掌握一些面试中的主动权的。因此，自己掌握的知识点和看过的书都可以在简历上有所体现，在简历中的每一个点都足够熟悉，不熟悉的不放上去。然后在回答问题中，也要尽量回答自己熟悉的点，对于不熟悉的点可以快速带过，对熟悉的点可以适当展开。
- 面试过程中要**适当反问面试官，了解面试官提问的意图**，可也以让他给你做适当的提示。比如一个很泛的问题可能你觉得有好几个方面，所以要了解面试官想让你深入哪个方面。

### 总结

以上是个人的一点心得，仅供参考，不一定适合所有人。因为自己导师比较放养，给了我很多空闲的时间可以去学习自己感兴趣的东西，也真的非常感谢我的导师，希望能让我顺利毕业哈哈哈。后续我也会整理一些面经，希望能帮助到大家。
