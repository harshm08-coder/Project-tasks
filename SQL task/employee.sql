create database CompanyManagementDB;

use CompanyManagementDB;

CREATE TABLE Department(
DepartmentId int primary key,
DepartmentName varchar(50) not null,
CreatedAt datetime not null default current_timestamp,
CreatedBy varchar(50) not null default "admin",
UpadatedAt datetime default current_timestamp on update current_timestamp,
UpdatedBy varchar(50) ,
IsDeleted tinyint(1) not null default 0
);

create table Employee(
EmployeeId int primary key,
EmployeeName varchar(100) not null,
Email varchar(50),
Salary float not null,
DepartmentId int not null,
CreatedAt datetime not null default current_timestamp,
CreatedBy varchar(50) not null default "admin",
UpadatedAt datetime default current_timestamp on update current_timestamp,
UpdatedBy varchar(50) ,
IsDeleted tinyint(1) not null default 0,
foreign key (DepartmentId) references Department(DepartmentId)
);

select * from Department;
select * from Employee;

insert into Department (DepartmentId, DepartmentName)
values
(1,'AI/ML'),
(2,'Full-Stack'),
(3,'Front-End'),
(4,'.NET'),
(5,'Sales');

insert into Employee
(EmployeeId, EmployeeName, Email, Salary, DepartmentId)
values
(1,'harsh','harsh@gmail.com',40000,2),
(2,'Raj','raj@gmail.com',55000,3),
(3,'Vivek','vivek@gmail.com',71000,1),
(4,'Keval','keval@gmail.com',30000,4),
(5,'Harshal','harshal@gmail.com',48000,5),
(6,'Krishna','krishna@gmail.com',65000,1),
(7,'Uzair','uzair@gmail.com',52000,3),
(8,'Divyesh','div@gmail.com',87000,2),
(9,'Aashish','aashish@gmail.com',62000,4),
(10,'Virat','virat@gmail.com',35000,5),
(11,'Dhruv','dhruv@gmail.com',77000,1);

select * from Employee;
update Employee set Salary = 80 where EmployeeId= 1 and CreatedBy = "admin" and IsDeleted = 0;
select * from employee;

select * from Employee where Salary>70000;

select
    e.EmployeeId,
    e.EmployeeName,
    e.Email,
    e.Salary,
    d.DepartmentName
from Employee e
inner join Department d
on e.DepartmentId = d.DepartmentId;

select *
from Employee
where CreatedAt > '2024-01-01';

select
    d.DepartmentName,
    e.EmployeeName
from Employee as e
join Department as d
on e.DepartmentId = d.DepartmentId
group by  d.DepartmentName, e.EmployeeName;

select
    d.DepartmentName,
    COUNT(e.EmployeeId) as TotalEmployees
from Department as d
left join Employee as e
on d.DepartmentId = e.DepartmentId
group by d.DepartmentName;

select * from Employee where IsDeleted = 0 ;

update Employee set Salary = 80000 where EmployeeId= 1;
select * from Employee where EmployeeId = 1;

delete from Employee where EmployeeId = 11;
select * from Employee;


select * from employee;

 update employee set salary=10000 where Employeeid=1 and CreatedBy = "admin";
