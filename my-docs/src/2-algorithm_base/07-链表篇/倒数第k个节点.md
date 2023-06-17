---
lang: zh-CN
title: 01、倒数第k个节点

description: 刷题-链表篇

category: 
    - 数据结构
    - 算法
    - 算法基地
    - 面试
    - 刷题

excerpt: 链表篇


---

## 题目描述

[剑指 Offer 22. 链表中倒数第 k 个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

题目：

输入一个链表，输出该链表中倒数第 k 个节点。为了符合大多数人的习惯，本题从 1 开始计数，即链表的尾节点是倒数第 1 个节点。例如，一个链表有 6 个节点，从头节点开始，它们的值依次是 1、2、3、4、5、6。这个链表的倒数第 3 个节点是值为 4 的节点。

## 题目分析：

自己思考一下：

我们遇到这个题目，可能会有什么答题思路呢？

你看我说的对不对，是不是会想到先遍历一遍链表知道 链表节点的个数，然后再计算出倒数第 n 个节点。

比如链表长度为 10，倒数第 3 个节点，不就是正数第 8 个节点呀，这种方法当然可以啦，是可以实现的，那么我们再思考一下有没有其他方法呢？哦，对，我们可以将链表元素保存到数组里面，然后直接就可以知道倒数第 k 个节点了。这个方法确实比刚才那个方法省时间了，但是所耗的空间更多了，那我们还有什么方法吗？

我们可以继续利用我们的双指针呀，但是我们应该怎么做呢？

## 双指针法：

首先一个指针移动 K-1 位（这里可以根据你的初始化指针决定），然后另一个指针开始启动，他俩移动速度一样，所以他俩始终相差 K-1 位，当第一个指针到达链表尾部时，第二个指针的指向则为倒数第 K 个节点。

![](https://chengxuchu-1301103198.cos.ap-beijing.myqcloud.com/Photo/202304172329881.gif)

感觉这个方法既巧妙又简单，大家可以自己动手打一下，这个题目是经典题目。

### 代码

Java Code:

```java
class Solution {
    public ListNode getKthFromEnd (ListNode head, int k) {
        //特殊情况
        if (head == null) {
            return head;
        }
        //初始化两个指针
        ListNode pro = new ListNode(-1);
        ListNode after = new ListNode(-1);
        //定义指针指向
        pro = head;
        after = head;
        //先移动绿指针到指定位置
        for (int i = 0; i < k-1; i++) {
            pro = pro.next;
        }
        //两个指针同时移动
        while (pro.next != null) {
            pro = pro.next;
            after = after.next;
        }
        //返回倒数第k个节点
        return after;
    }
}
```

C++ Code:

```cpp
class Solution {
public:
    ListNode * getKthFromEnd(ListNode * head, int k) {
         //特殊情况
        if (head == nullptr) {
            return head;
        }
        //初始化两个指针
        ListNode * pro = new ListNode(-1);
        ListNode * after = new ListNode(-1);
        //定义指针指向
        pro = head;
        after = head;
        //先移动绿指针到指定位置
        for (int i = 0; i < k-1; i++) {
            pro = pro->next;
        }
        //两个指针同时移动
        while (pro->next != nullptr) {
            pro = pro->next;
            after = after->next;
        }
        //返回倒数第k个节点
        return after;
    }
};
```

JS Code:

```javascript
var getKthFromEnd = function (head, k) {
  //特殊情况
  if (!head) return head;
  //初始化两个指针, 定义指针指向
  let pro = head,
    after = head;
  //先移动绿指针到指定位置
  for (let i = 0; i < k - 1; i++) {
    pro = pro.next;
  }
  //两个指针同时移动
  while (pro.next) {
    pro = pro.next;
    after = after.next;
  }
  //返回倒数第k个节点
  return after;
};
```

Python Code:

```python
class Solution:
    def getKthFromEnd(self, head: ListNode, k: int) -> ListNode:
        # 特殊情况
        if head is None:
            return head
        # 初始化两个指针, 定义指针指向
        pro = head
        after = head
        # 先移动绿指针到指定位置
        for _ in range(k - 1):
            pro = pro.next
        # 两个指针同时移动
        while pro.next is not None:
            pro = pro.next
            after = after.next
        # 返回倒数第k个节点
        return after
```

Swift Code：

```swift
class Solution {
    func getKthFromEnd(_ head: ListNode?, _ k: Int) -> ListNode? {
        //特殊情况
        if head == nil {
            return head
        }
        //初始化两个指针
        var pro = head, after = head
        //先移动绿指针到指定位置
        for i in 0..<k-1 {
            pro = pro?.next
        }
        //两个指针同时移动
        while pro?.next != nil {
            pro = pro?.next
            after = after?.next
        }
        //返回倒数第k个节点
        return after
    }
}
```

Go Code:

```go
func getKthFromEnd(head *ListNode, k int) *ListNode {
    if head == nil { return head }
    pro, after := head, head
    //先移动绿指针到指定位置
    for i := 0; i < k - 1; i++ {
        pro = pro.Next
    }
    for pro.Next != nil {
        pro = pro.Next
        after = after.Next
    }
    return after
}
```
