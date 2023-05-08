---
lang: zh-CN
title: 3、SQL练习（21-30）
description: 很细。
---

注：该页题目均来自与[牛客网](https://www.nowcoder.com/)

### 21. 批量插入数据，不使用replace操作

```SQL
insert ignore into actor value (3,'ED','CHASE','2006-02-15 12:34:33');
```

这里可以使用 ignore

然后 replace de 含义如下

```SQL
update tbl_student set user_name=REPLACE(user_name,'A','a');
```

### 22.将select 和 insert 连用

```SQL
create table actor_name (
first_name varchar(45) not null,
last_name varchar(45) not null
);
insert into actor_name select first_name, last_name from actor;
```

### 23.创建索引

```SQL
create unique index uniq_idx_firstname on actor(first_name);
create index idx_lastname on actor(last_name);
```

### 24.创建视图

```SQL
create view actor_name_view as 
select first_name as first_name_v
, last_name as last_name_v from actor;
```

### 25.使用固定索引查询内容

```SQL
select * from salaries 
force index(idx_emp_no) 
where emp_no = 10005;
select *
from salaries 
indexed by idx_emp_no 
where emp_no = 10005
```

### 26.修改表

```SQL
alter table actor
add column create_date datetime not null default '2020-10-01 00:00:00';
```

### 27.创建触发器

```SQL
create trigger audit_log after insert on employees_test 
for each row
begin  
insert into audit value(new.id,new.name);   
end;
```

### 28.删除emp_no重复的记录，只保留最小的id对应的记录。

```SQL
delete from titles_test where id not in (
select * from (select min(id) from titles_test group by emp_no) as a 
)
```

这个题目很有意思，因为我们删除后需要显示出来，子查询的含义找出min(id)的元组，这里必须要使用select 函数，然后使用 as a 不然则会报错。

### 29.修改表数据

```SQL
update titles_test 
set to_date = null ,from_date = '2001-01-01'
where to_date = '9999-01-01';
```

### 30.使用replace 函数修改值

```SQL
update titles_test set emp_no = replace(emp_no,10001,10005)
where id = 5;
```