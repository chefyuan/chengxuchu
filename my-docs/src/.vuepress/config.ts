import { defineUserConfig } from "vuepress";

import { readmorePlugin } from 'vuepress-plugin-readmore-popular-next'
import theme from "./theme.js";
export default defineUserConfig({
  base: "/",
  shouldPrefetch:false,
  locales: {
    "/": {
      lang: "zh-CN",
      title: "程序厨",
      description: "酷爱做饭的程序员",
      head: [['link', { rel: 'icon', href: '/images/logo.jpg'}]],
    },
  },
  port: 80,
  theme,
  plugins:[

    readmorePlugin({
      // 已申请的博客 ID
      blogId: '67962-1834575117932-974',
      // 已申请的微信公众号名称
      name: '程序厨',
      // 已申请的微信公众号回复关键词
      keyword: '程序厨',                    
      // 已申请的微信公众号二维码图片
      qrcode: 'https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202305092253460.png',
      // 文章内容的 JS 选择器，若使用的不是官方默认主题，则需要根据第三方的主题来设置
      selector: 'div.theme-hope-content',
      // 自定义的 JS 资源链接，可用于 CDN 加速
      // 文章排除添加引流工具的 URL 规则，支持使用路径、通配符、正则表达式的匹配规则
      excludes: { strExp: [], regExp: ['/team/*','/README/*','/base/*'] },
      // 是否反转 URL 排除规则的配置，即只有符合排除规则的文章才会添加引流工具
      reverse: false,
      // 文章内容的预览高度
      height: 'auto',
      // 文章解锁后凭证的有效天数
      expires: 365,
      // 定时校验凭证有效性的时间间隔（秒）
      interval: 300,
      // 每篇文章随机添加引流工具的概率，有效范围在 0.1 ~ 1 之间，1 则表示所有文章默认都自动添加引流工具
      random: 1
    })
  ]
});
