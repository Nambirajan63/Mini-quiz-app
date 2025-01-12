create database Quiz_Application;
use Quiz_Application;

----------------------------------------------------------------------

create table students(
id int primary key auto_increment,
Name varchar(100),
Roll_no varchar(50),
Phone_no bigint
);

insert into students(Name, Roll_no, Phone_no) values('', '', 3764276873);

select * from students;

----------------------------------------------------------------------

