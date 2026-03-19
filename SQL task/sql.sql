
-- PART 1
CREATE DATABASE CompanyManagementDB;

CREATE TABLE Department ( DepartmentID INT AUTO_INCREMENT PRIMARY KEY,
                          Departmentname VARCHAR(50) NOT NULL UNIQUE,
                          Location VARCHAR(50) NOT NULL);

CREATE TABLE Employee (EmployeeID BIGINT AUTO_INCREMENT PRIMARY KEY,
                       FirstName VARCHAR(20) NOT NULL,
					        LastName VARCHAR(20) NOT NULL,
                       Email VARCHAR(15) NOT NULL UNIQUE,
                       Phone VARCHAR(10) UNIQUE,
                       Salary DECIMAL(10,2) NOT NULL,
                       HireDate DATE NOT NULL,
                       DepartmentID INT NOT NULL,  
                       
                       CONSTRAINT fk_Department
                       FOREIGN KEY (DepartmentID)
                       REFERENCES Department(DepartmentID)
                       ON DELETE CASCADE
                       ON UPDATE CASCADE);

--PART 2
					
INSERT INTO Department (Department,Location) VALUES ('Human Resources','Delhi'),('IT','Bangalore'),
                  ('CSE','Pune'),('Finance','Mumbai'),('MECH','Hyderabad');

INSERT INTO Employee (Firstname,Lastname,Email,Phone,Salary,HireDate,DepartmentID) 
       VALUES ('Harsh','Mistry','harsh@gmail.com',7990625940,45000.00,'2025-01-10',1),
              ('Vinay','Patel','vinay123@gmail.com',9876543210,30000.00,'2024-05-23',3),
              ('Keyur','Lad','keyur23@gmail.com',9875678941,50000.00,'2026-01-10',2),
              ('Vijay','Singh','vijaysingh@gmail.com',9818189898,35000.00,'2025-10-10',1),
              ('Ramesh','Mistry','rameshm@gmail.com',9875678876,70000.00,'2025-02-07',3),
              ('Jay','Bhagat','jayb@gmail.com',9871238941,80000.00,'2024-08-09',1),
              ('Keval','Patel','keval23@gmail.com',8755678941,40000.00,'2024-03-10',3),
              ('Mayur','Prajapati','mayur24@gmail.com',7995678941,10000.00,'2023-07-11',2),
              ('Vikram','Singh','vikram@gmail.com',7675678941,55000.00,'2023-12-12',5),
              ('Sonal','Patel','sonal@gmail.com',8875678941,15000.00,'2024-01-11',4);

ALTER TABLE Employee ADD isDeleted TINYINT(1) DEFAULT 0;

--Part 3

SELECT * FROM Department;
SELECT * FROM Employee;

SELECT 
     E.EmployeeID,
     E.Firstname,
     E.Lastname,
     D.Departmentname,
     E.Salary
     
     FROM Employee E
     INNER JOIN Department D ON
     E.DepartmentID = D.DepartmentID;

SELECT * FROM Employee WHERE Salary > 40000.00;

SELECT * FROM Employee WHERE HireDate > '2025-01-01';

SELECT DepartmentID ,
   COUNT(EmployeeID) AS TotalEmployees
   FROM Employee GROUP BY DepartmentID;

SELECT D.Departmentname,
   COUNT(EmployeeID) AS EmployeeCount
   FROM Department D LEFT JOIN Employee E ON
   D.DepartmentID = E.DepartmentID
   GROUP BY Departmentname;

SELECT * FROM Employee WHERE isDeleted = 0;


--Part 4    

UPDATE Employee SET Salary = 95000.00 WHERE EmployeeID = 61;
UPDATE Employee SET DepartmentID = 3 WHERE EmployeeID = 2;
UPDATE Employee SET isDeleted=1 WHERE EmployeeID=65;
DELETE FROM Employee WHERE EmployeeID = 65;

CREATE TABLE TestTable (id INT AUTO_INCREMENT PRIMARY KEY ,Name VARCHAR(50));
INSERT INTO TestTable (Name) VALUES ('A'),('B'),('C');

TRUNCATE TABLE TestTable;
DROP TABLE TestTable;

--Part 5

SELECT E.Firstname,E.Lastname,D.Departmentname
FROM Employee E
INNER JOIN Department D ON E.DepartmentID = D.DepartmentID;

SELECT E.Firstname,E.Lastname,D.Departmentname
FROM Employee E
LEFT JOIN Department D ON E.DepartmentID = D.DepartmentID;

SELECT E.Firstname,E.Lastname,D.Departmentname
FROM Employee E
RIGHT JOIN Department D ON E.DepartmentID = D.DepartmentID;