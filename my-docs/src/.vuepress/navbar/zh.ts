import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    
  
  {
    text: '😊算法基地',
    children: [
        {
            text: '1.数据结构',
            link: "/2-algorithm_base/01-数据结构",
        },
        {
            text: '2.字符串匹配',
            link: "/2-algorithm_base/02-字符串匹配",
        },
        {
            text: '3.二叉树',
            link: "/2-algorithm_base/03-二叉树",
        },
        {
            text: '4.排序算法',
            link: "/2-algorithm_base/04-排序算法",
        },
        {
            text: '5.排序算法秒杀题目',
            link: "/2-algorithm_base/05-排序算法秒杀",
        },
        {
            text: '6.数组篇',
            link: "/2-algorithm_base/06-数组篇",
        },
        {
            text: '7.链表',
            link: "/2-algorithm_base/07-链表篇",
        },
        {
            text: '8.求和问题',
            link: "/2-algorithm_base/08-求和问题",
        },
        {
            text: '9.求次数问题',
            link: "/2-algorithm_base/09-求次数问题",
        },
        {
            text: '10.双指针问题',
            link: "/2-algorithm_base/10-双指针问题",
        },
        {
            text: '11.栈和队列',
            link: "/2-algorithm_base/11-栈和队列",
        },
        {
            text: '12.二分查找及变种',
            link: "/2-algorithm_base/12-二分查找及其变种",
        },
        {
            text: '13.单调队列单调栈',
            link: "/2-algorithm_base/13-单调队列单调栈",
        },
        {
            text: '14.前缀和',
            link: "/2-algorithm_base/14-前缀和",
        },
    ],
},

{
  text: '🌟面试基地',
  children: [
      {
        text: '1.Redis',
        link: "/1-interview_base/01-Redis",
      },
      {
        text: '2.MySQL',
        link: "/1-interview_base/02-Mysql",
      },
      {
        text: '3.计算机网络',
        link: "/1-interview_base/03-计算机网络",
      },
      {
        text: '4.操作系统',
        link: "/1-interview_base/04-操作系统",
      },
      {
        text: '5.Java高并发',
        link: "/1-interview_base/05-Java高并发",
      },
      {
        text: '6.JVM',
        link: "/1-interview_base/06-JVM",
      },
      {
        text: '7.SQL',
        link: "/1-interview_base/07-SQL",
      },
  ],
},

{
  text: '📚校招指南',
  children: [
      {
          text: '1.学习路线',
          link: "/3-interview_guide/01-学习路线",
      },
      {
          text: '2.大厂面经',
          link: "/3-interview_guide/02-大厂面经",
      },
      {
          text: '3.面试指南',
          link: "/3-interview_guide/03-面试指南",
      },
      {
          text: '4.心得感悟',
          link: "/3-interview_guide/04-心得感悟",
      },
      {
          text: '5.优质项目',
          link: "/3-interview_guide/05-优质项目",
      },
      {
          text: '6.实用工具',
          link: "/3-interview_guide/06-实用工具",
      }
  ],
},

{
    text: '🔥抱团取暖',
    link: 'https://t.zsxq.com/0fjYIsW9Z'
},

{
    text: '👍赞赏名单',
    link: '/appreciate_list.md'
},
  
]);
