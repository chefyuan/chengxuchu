---
lang: zh-CN
title: 2、SQL练习（11-20）
description: 很细。
---
注：该页题目均来自与[牛客网](https://www.nowcoder.com/)

### 11.学会了如何三个表进行左外连接

```SQL
select a.last_name,a.first_name,c.dept_name
from employees as a 
left join dept_emp as b 
on a.emp_no = b.emp_no left join departments as c on b.dept_no = c.dept_no;
```

### 12.很棒的一个题目

```SQL
select e1.emp_no,(e1.salary - b2.salary) as growth from 

#当前薪水 
 (select emp_no,salary from salaries where to_date = '9999-01-01') as e1
 inner join 
#入职时薪水
 (select s.emp_no,s.salary from employees b,salaries s where s.emp_no = b.emp_no and s.from_date = b.hire_date) as b2
 
 on e1.emp_no = b2.emp_no order by growth
```

### 13.该题目学习到了 rank()函数的使用，下面这个解释很棒。

这里可以使用两种方法来解决，一种时dense_rank() over函数直接进行排名

```SQL
select emp_no, salary, dense_rank() over(order by salary desc) as  t_rank
 from salaries;
```

另一种是求出比其大的值有几个。

```SQL
select s1.emp_no, s1.salary, count(DISTINCT s2.salary) from salaries s1, salaries s2 where
s1.salary <= s2.salary group by s1.emp_no order by s1.salary desc;
```

这里需要注意的是，count(DISTINCT s2.salary)

### 14.这个题目学到了group by 时可以使用属性组27

这里使用title 和 dept_no 进行分类

```SQL
select emp.dept_no, emp.dept_name, titles.title, count(emp.dept_no) from 
(select b.emp_no, a.dept_no, a.dept_name 
from departments a , dept_emp b 
where a.dept_no = b.dept_no ) as emp 
inner join titles on titles.emp_no = emp.emp_no 
group by titles.title,emp.dept_no order by emp.dept_no
```

### 15.巧用子查询，不能一味的进行链接，28

```SQL
select b.name, count(a.film_id) from film a, category b, film_category c 
where a.film_id = c.film_id and b.category_id = c.category_id 
and description like  "%robot%" and b.category_id in (
select category_id from film_category 
group by category_id having count(film_id) >= 5
)
```

很棒的一个题目，首先链接后找出包含robot 的字段，然后再利用子查询

### 16.使用join查询方式找出没有分类的电影id以及名称

```SQL
select a.film_id, a.title from film a 
left join film_category b on a.film_id = b.film_id 
where b.film_id isnull; 
```

该题较简单，使用左连接，然后将为 null 的显示出来

另外该题也可以使用子查询搞定

```SQL
select film_id,title from film where film_id not in 
(SELECT film_id from  film_category)
```

### 17.使用子查询的方式找出属于Action分类的所有电影对应的title,description吗

```SQL
select title, description from film where film_id in 
(select c.film_id from film_category c join  category b 
on b.category_id = c.category_id where b.name = "Action") 
```

该题很简单

### 18.拼接字符串

```SQL
select concat(last_name," ",first_name) as Name from employees;
```

bangjie yuan

### 19.创建表

```SQL
create table actor (
actor_id smallint(5) primary key,
first_name varchar(45) not null,
last_name varchar(45) not null,
last_update date not null
);
```

### 20.批量插入信息

```SQL
insert into actor value(1,'PENELOPE','GUINESS','2006-02-15 12:34:33'),
(2,'NICK','WAHLBERG','2006-02-15 12:34:33');
```