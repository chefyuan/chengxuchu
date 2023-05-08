---
lang: zh-CN
title: 4、SQL练习（31-42）
description: 很细。
---

注：该页题目均来自与[牛客网](https://www.nowcoder.com/)

### 31.修改表名

```SQL
alter table titles_test rename to titles_2017
```

使用rename to 语句

### 32.给表添加外键

```SQL
drop table audit;
create table audit
(emp_no int not null,
 create_date datetime not null,
 foreign key(emp_no)
references employees_test(id))
```

删除之后，重新建表

```SQL
alter table audit  add foreign key  (emp_no)
REFERENCES employees_test(id);
```

直接添加

### 33.修改薪资

```SQL
update salaries set salary = salary * 1.1  where emp_no in (select emp_no from emp_bonus) and salaries.to_date='9999-01-01'
```

### 34.输出字符串中某字符的数目

```SQL
select length("10,A,B") - length(replace("10,A,B",",",""));
```

replace 函数使用，第一个参数原字符串   ， 替换成的数字

### 35.按字符串的右边两个字符进行排序

```SQL
select first_name from employees order by right(first_name,2);
```

### 36.将同组的员工进行拼接

```SQL
select dept_no, group_concat(emp_no order by emp_no desc separator "_") from dept_emp group by dept_no;
```

这个题目考察的是，group_concat 的用法，我们可以通过 separator 来指定，分割符。

### 37.exists用法

```SQL
select * from employees a where NOT EXISTS (select emp_no from dept_emp b
where a.emp_no = b.emp_no)
```

### 38.when then 的用法

```SQL
select a.emp_no, a.first_name, a.last_name, c.btype, d.salary, 
(case c.btype
 when 1 then d.salary*0.1
 when 2 then d.salary*0.2
 when 3 then d.salary*0.3
 end ) as bonus
from employees a, emp_bonus c, salaries d where 
a.emp_no = c.emp_no 
and a.emp_no = d.emp_no and d.to_date = '9999-01-01';
```

### 39.牛客每个人最近的登录日期(三)

```SQL
select round(count(distinct user_id)/ (select count(distinct user_id) from login),3)  from login where (user_id,date) in
(select user_id, date_add(min(date),interval 1 day) from login group by user_id);
```

这个题目先使用，date_add(interval)查询出次日登录的id，然后查询含有该记录的人，最后得出概率。

### 40.外表借助内表进行查询

```SQL
select a.emp_no, a.salary, 
(select sum(salary) from salaries b where b.emp_no <= a.emp_no 
and b.to_date =  '9999-01-01') as running_total 
from salaries a where a.to_date = '9999-01-01' ;
```

### 41.牛客 69 题

```SQL
select  h.date,count(distinct t.user_id)  from login h left join 
(select min(date) as date,user_id from login  group by user_id) t on t.date =  h.date 
group by h.date;
```

### 42查询最差是第几名

```SQL
select grade,(select sum(number) from class_grade b where b.grade <= e.grade )  
as t_rank
from class_grade e order by e.grade;
```
