---
lang: zh-CN
title: 1、SQL练习（1-10）
description: MySQL 常考练习题

category:
    - MySQL
    - SQL 练习
    - 程序厨

excerpt: MySQL 常考练习题
---

注：该页题目均来自与[牛客网](https://www.nowcoder.com/)

### 1.查找入职最晚的职工

这个我们需要借用子查询来解决

```SQL
select * from employees where hire_date = (select max(hire_date) from employees);
```

### 2.找入职员工时间排名倒数第三的员工所有

这个题目优点意思，我原来想要让其降序排序，然后取其中最小的，但是这样子查询中留下的是整个里面最小的，所以不可以。

```SQL
select * from employees where hire_date = (select min(hire_date) from employees order by hire_date DESC limit 0,3);
```

后来学到了offset（跳过前两个）的用法

```SQL
select * from employees where hire_date = (select DISTINCT hire_date from employees order by hire_date DESC limit 1 OFFSET 2);
```

当limit 和 offset 合用时，代表的是，取其中1条记录，并跳过前2条

又学到了大神的写法

```SQL
select * from employees order by hire_date desc limit 2,1
```

表示从2开始，取一条记录

### 3.查找当前薪水详情以及部门编号dept_no

创建了一个自然连接进行查询

```SQL
select salaries.emp_no,salary,from_date,salaries.to_date,dept_no from salaries,dept_manager where salaries.emp_no = dept_manager.emp_no;
```

使用别名进行连接

```SQL
select a.*, b.dept_no from salaries a, dept_manager b where a.emp_no = b.emp_no;
```

效率更高

### 4.查找所有已经分配部门的员工的last_name和first_name以及dept_no

这个题目是为了求三个属性的值，可以直接通过自然连接，因为属性设置为null

```SQL
select e.last_name,e.first_name,d.dept_no from employees e,dept_emp d  where e.emp_no = d.emp_no;
```

但是我们这个题目如果含有空属性，则需要这样写,

```SQL
select employees.last_name,employees.first_name,dept_emp.dept_no 
from dept_emp 
left JOIN employees 
ON employees.emp_no=dept_emp.emp_no;
```

### 5.找出所有员工当前薪水salary情况

主要就是一个去重情况和desc

```SQL
select distinct(salary)  from salaries order by salary desc;
```

### 6.获取所有员工当前的manager

这个题目挺不错，注意使用<>不等于号

```SQL
select a.emp_no ,b.emp_no as manager 
from dept_emp a , dept_manager b 
where a.dept_no = b.dept_no and  a.emp_no <> b.emp_no;
```

### 7.获取每个部门中当前员工薪水最高的相关信息

这个题目主要是考察group by having

```SQL
select a.dept_no,b.emp_no,b.salary as maxSalary
from dept_emp a , salaries b  
where a.emp_no = b.emp_no
group by a.dept_no having max(salary);
```

### 8.学习如何判断是否为奇数偶数

```SQL
select emp_no,birth_date,first_name,last_name,gender,hire_date 
FROM employees
where emp_no % 2  = 1  
and last_name != 'Mary' 
order by hire_date DESC;
```

### 9. order by 可以使用聚集函数

```SQL
select b.title , avg(s.salary) 
from salaries s, titles b 
where s.emp_no = b.emp_no  
group by b.title 
order by avg(s.salary) ;
```

### 10.不使用order by 函数查找第二多的薪资员工

这个有两种方法，一种是通过自连接方法，count = 2则代表为第二大的数，3则为第三大的，这属于通用算法

```SQL
 select a.emp_no ,b.salary ,a.last_name,a.first_name 
 from employees a , salaries b 
 where a.emp_no = b.emp_no 
 and  b.salary = 
   (select s1.salary
         from 
         salaries s1
         join
         salaries s2 on s1.salary<=s2.salary 
         and s1.to_date='9999-01-01' and s2.to_date='9999-01-01'
         group by s1.salary having count(s1.salary) = 2)
```

还有一个就是使用max函数执行，这个效率更好，小于最大的值

```SQL
select a.emp_no,max(salary),last_name,first_name
from salaries b, employees a 
where a.emp_no = b.emp_no and b.salary < 
 (select max(salary) from salaries)
```





