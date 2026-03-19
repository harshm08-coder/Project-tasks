CREATE DATABASE CompanyManagementDB;
CREATE TABLE Department ( DepartmentID INT AUTO_INCREMENT PRIMARY KEY,Departmentname VARCHAR(50) NOT NULL UNIQUE,Address VARCHAR(50) NOT NULL);
CREATE TABLE Employee (EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
                       FirstName VARCHAR(20) NOT NULL,
					   LastName VARCHAR(20) NOT NULL,
                       Email VARCHAR(15) NOT NULL UNIQUE,
                       Phone VARCHAR(10) UNIQUE,
                       Salary DECIMAL(10,2) NOT NULL,
                       HireDate DATE NOT NULL,
                       DepartmentID INT NOT NULL,  
                       
                       CONSTRAINT fk_Department,
                       FOREIGN KEY (DepartmentID),
                       REFERENCES Department(DepartmentID),
                       ON DELETE CASCADE,
                       ON UPDATE CASCADE);

